import { createAttendee, createListing, setFormValues } from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 12px;
  --color-accent: #e3a27d;
  --color-bg: #f3e7d8;
  --color-bg-secondary: #ead1bd;
  --color-link: #8b422d;
  --color-secondary: #a65238;
  --color-secondary-accent: #a652381f;
  --color-shadow: #63382524;
  --color-table: #9c5038;
  --color-text: #432f27;
  --color-text-secondary: #786259;
  --font-family: Georgia, "Times New Roman", serif;
}

.public-page {
  background: #fffaf3;
  border: 1px solid #d8b9a3;
  border-radius: 18px;
  box-shadow: 0 10px 24px var(--color-shadow);
  margin-block: 0.75rem;
  padding: 1.25rem;
}

.public-page table {
  background: #fffdf9;
  border-color: #d8b9a3;
}

.public-page button[type="submit"] {
  background: #a65238;
  border-radius: 999px;
  color: #fffaf3;
  font-family: Arial, sans-serif;
  font-weight: 700;
}
`,
  elementSelector: ".public-page",
  name: "deposits-and-balance-payments",
  run: async (context) => {
    const { page, submit } = context;
    const listingId = await createListing(context, {
      name: "Weekend Pottery Course",
      values: {
        location: "Terracotta Studio",
        max_attendees: "12",
        max_quantity: "2",
        unit_price: "120.00",
      },
    });

    const attendeeId = await createAttendee(context, {
      listingId,
      values: {
        name: "Alex Morgan",
      },
    });

    const moneyPath = `/admin/ledger/attendee/${attendeeId}/add`;
    await page.goto(moneyPath);
    const moneyFormSelector = `form[action="${moneyPath}"]`;
    await setFormValues(page, moneyFormSelector, {
      amount: "30.00",
      entry_type: "manual_attendee_payment",
    });
    await submit(moneyFormSelector);
    const resultPath = new URL(page.url()).pathname;
    if (resultPath !== `/admin/ledger/attendee/${attendeeId}`) {
      const message = await page.locator("main").textContent();
      throw new Error(
        `Could not add the £30 payment at ${resultPath}: ${message}`,
      );
    }

    await page.goto(await context.balancePathFor(Number(attendeeId)));
    await page.getByText("Weekend Pottery Course", { exact: true }).waitFor();
    await page.getByText("Full order price: £120", { exact: true }).waitFor();
    await page.getByText("Already paid: £30", { exact: true }).waitFor();
    await page.getByText("Balance due: £90", { exact: true }).waitFor();
    await page
      .getByRole("button", { name: "Pay £90 now", exact: true })
      .waitFor();
  },
};
