import { createListing, setFormValues } from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 8px;
  --box-shadow: 0 12px 28px;
  --color-accent: #164e63;
  --color-bg: #071525;
  --color-bg-secondary: #10283c;
  --color-link: #67e8f9;
  --color-secondary: #22d3ee;
  --color-secondary-accent: #22d3ee1f;
  --color-shadow: #02081780;
  --color-table: #22d3ee;
  --color-text: #e6f7fb;
  --color-text-secondary: #9bb7c5;
  --font-family: Arial, sans-serif;
}

body {
  background: #030b16;
}

main {
  background: #071525;
  border: 1px solid #1e4960;
  box-shadow: var(--box-shadow) var(--color-shadow);
  padding: 1rem;
}

main > .prose,
main > article {
  margin-bottom: 1rem;
}

main > article {
  background: #0b1d2e;
  border: 1px solid #1b4055;
  padding: 1rem;
}

main > article:last-of-type {
  border-color: #25758b;
}

button,
input {
  border-radius: 6px;
}

button {
  font-weight: 700;
}

#scanner-start {
  background: #10283c;
  border: 1px solid #2f7188;
  color: #bdeff7;
}

#manual-checkin {
  border-color: #22566d;
  box-shadow: none;
  margin-bottom: 0;
}

#manual-checkin-status {
  background: #0d3a42;
  border: 1px solid #22d3ee;
  color: #cffafe;
}
`,
  elementSelector: "article:has(#manual-checkin)",
  name: "qr-code-check-in",
  run: async (context) => {
    const { page, submit } = context;
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Riverside Summer Concert",
      values: {
        location: "Riverside Park",
        max_attendees: "250",
        max_quantity: "6",
        unit_price: "18.00",
      },
    });
    const addAttendeeForm = `form[action="/admin/listing/${listingId}/attendee"]`;
    await page.goto(`/admin/listing/${listingId}/attendees`);
    await setFormValues(page, addAttendeeForm, {
      email: "alex@example.com",
      name: "Alex Morgan",
      quantity: "2",
    });
    await submit(addAttendeeForm);

    await page.goto(`/admin/listing/${listingId}/scanner`);
    await page.locator("#manual-checkin-input").fill("Alex Morgan");
    await page.getByRole("option", { name: /Alex Morgan/ }).click();
    await page.getByRole("button", { name: "Check In", exact: true }).click();
    await page
      .locator("#manual-checkin-status.checkin-status-success")
      .getByText("Alex Morgan checked in (2 tickets)", { exact: true })
      .waitFor();
  },
};
