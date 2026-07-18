import { createAttendee, createListing, setFormValues } from "./helpers.js";

const ATTENDEES = [
  ["Amira Khan", "amira.khan@example.com"],
  ["Ben Carter", "ben.carter@example.com"],
  ["Chloe Martin", "chloe.martin@example.com"],
  ["Daniel Okafor", "daniel.okafor@example.com"],
  ["Elena Rossi", "elena.rossi@example.com"],
  ["Freddie Hughes", "freddie.hughes@example.com"],
];

const unsubscribeFromAttendee = async (context, attendeeId) => {
  const { page, submit } = context;
  await page.goto(`/admin/attendees/${attendeeId}`);
  const historyLink = page.locator('a[href^="/admin/history/"]').first();
  if ((await historyLink.count()) === 0) return false;

  const historyPath = await historyLink.getAttribute("href");
  const oneWayCode = historyPath?.match(/^\/admin\/history\/(.+)$/)?.[1];
  if (!oneWayCode) return false;

  const base64Code = oneWayCode
    .replaceAll("-", "+")
    .replaceAll("_", "/")
    .padEnd(Math.ceil(oneWayCode.length / 4) * 4, "=");
  await page.goto(`/unsubscribe?email=${encodeURIComponent(base64Code)}`);
  const unsubscribeForm = page.locator("#action-unsubscribe");
  if ((await unsubscribeForm.count()) === 0) return false;
  await submit("#action-unsubscribe");
  const successMessage = page.getByText(
    "You've unsubscribed from our marketing emails.",
  );
  return (await successMessage.count()) > 0;
};

export default {
  css: `
:root {
  --border-radius: 10px;
  --color-accent: #dbe7ff;
  --color-bg: #eef2f7;
  --color-bg-secondary: #e3e8ef;
  --color-link: #164ec4;
  --color-secondary: #1756d1;
  --color-secondary-accent: #1756d118;
  --color-shadow: #1725541a;
  --color-table: #1756d1;
  --color-text: #172033;
  --color-text-secondary: #647084;
  --font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #eef2f7;
}

.page-regions.admin-page {
  background: #ffffff;
  border: 1px solid #d8dee8;
  box-shadow: 0 16px 38px var(--color-shadow);
  box-sizing: border-box;
  margin: 0;
  max-width: 430px;
  padding: 1.35rem;
}

.page-regions.admin-page h1 {
  color: #123b91;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.8rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.page-regions.admin-page > p:has(.btn),
.email-preview ~ * {
  display: none;
}

.page-regions.admin-page .prose {
  color: var(--color-text-secondary);
}

.page-regions.admin-page .prose strong {
  color: var(--color-text);
}

.page-regions.admin-page .prose h2 {
  color: #123b91;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.3rem;
  margin-top: 1.25rem;
}

.email-preview {
  background: #f7f9fc;
  border: 1px solid #d8e0ec;
  border-left: 4px solid #1756d1;
  border-radius: 8px;
  color: var(--color-text);
  padding: 1rem;
}

.email-preview p:first-child {
  margin-top: 0;
}

.email-preview p:last-child {
  margin-bottom: 0;
}
`,
  elementSelector: ".page-regions.admin-page",
  name: "bulk-email-preview",
  run: async (context) => {
    const { page, submit } = context;
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Saturday's Fun Run",
      values: {
        location: "Riverside Park",
        max_attendees: "100",
        max_quantity: "4",
        unit_price: "12.00",
      },
    });

    const attendeeIds = [];
    for (const [name, email] of ATTENDEES) {
      attendeeIds.push(
        await createAttendee(context, {
          listingId,
          values: { email, name },
        }),
      );
    }

    const unsubscribed = await unsubscribeFromAttendee(
      context,
      attendeeIds[0],
    );

    await page.goto(`/admin/emails?listing=${listingId}`);
    const composeForm = 'form[action="/admin/emails/preview"]';
    await setFormValues(page, composeForm, {
      body: [
        "Hello runners,",
        "",
        "The forecast is warm and bright for Saturday. Bring water and wear sun protection.",
        "",
        "We look forward to seeing you at Riverside Park.",
      ].join("\n"),
      subject: "Saturday's Fun Run weather update",
    });
    await page.locator(`${composeForm} [name="marketing"]`).check();
    await submit(composeForm);

    await page.getByRole("heading", { name: "Preview bulk email" }).waitFor();
    await page
      .getByRole("heading", { name: "Message preview", exact: true })
      .waitFor();
    await page.getByText("Saturday's Fun Run weather update").waitFor();
    await page
      .getByText(
        unsubscribed
          ? "5 recipients, 1 unsubscribed will be skipped"
          : "6 recipients",
        { exact: false },
      )
      .waitFor();
  },
};
