import {
  createAttendee,
  createListing,
  setFormValues,
} from "./helpers.js";

const addListingMoney = async (context, listingId, entryType, amount) => {
  const path = `/admin/ledger/revenue/${listingId}/add`;
  await context.page.goto(path);
  const formSelector = `form[action="${path}"]`;
  await setFormValues(context.page, formSelector, {
    amount,
    entry_type: entryType,
  });
  await context.submit(formSelector);
  const resultPath = new URL(context.page.url()).pathname;
  if (resultPath !== `/admin/ledger/revenue/${listingId}`) {
    const message = await context.page.locator("main").textContent();
    throw new Error(
      `Could not add ${entryType} at ${resultPath}: ${message}`,
    );
  }
};

const assertRow = async (table, label, amount) => {
  const row = table.getByRole("row").filter({ hasText: label });
  await row.getByText(label, { exact: true }).waitFor();
  await row.getByText(amount, { exact: true }).waitFor();
};

export default {
  css: `
:root {
  --border-radius: 7px;
  --color-accent: #91a897;
  --color-bg: #f3eddf;
  --color-bg-secondary: #e2e8dd;
  --color-link: #456554;
  --color-secondary: #607d6b;
  --color-secondary-accent: #607d6b1f;
  --color-shadow: #24342e24;
  --color-table: #607d6b;
  --color-text: #24342e;
  --color-text-secondary: #65736c;
  --font-family: Georgia, "Times New Roman", serif;
  --line-height: 1.45;
}

body {
  background: #eee6d6;
}

.page-regions.admin-page {
  background: #faf6eb;
  border: 1px solid #aebdaf;
  border-top: 5px solid #607d6b;
  box-shadow: 0 12px 28px var(--color-shadow);
  gap: 0.65rem;
  margin: 0.45rem;
  padding: 0.9rem;
}

.page-regions.admin-page h2 {
  color: #24342e;
  font-size: 1.35rem;
  margin-block: 0 0.55rem;
}

.page-regions.admin-page .listing-details-table {
  background: #fffdf7;
  border-color: #bdc9bd;
  font-size: 0.86rem;
  margin-bottom: 0.65rem;
}

.page-regions.admin-page .listing-details-table th,
.page-regions.admin-page .listing-details-table td {
  padding: 0.42rem 0.5rem;
}

.page-regions.admin-page .listing-details-table td:last-child {
  color: #355444;
  font-family: Arial, sans-serif;
  font-weight: 750;
  white-space: nowrap;
}

.page-regions.admin-page .page-block {
  background: #f5f0e4;
  border: 1px solid #c8d1c6;
  padding: 0.65rem;
}

.page-regions.admin-page .ledger-date-range {
  gap: 0.45rem;
  margin-bottom: 0.45rem;
}

.page-regions.admin-page .ledger-date-field,
.page-regions.admin-page .table-action-btns {
  font-size: 0.78rem;
  margin-block: 0.3rem;
}

.page-regions.admin-page .page-block table {
  background: #fffdf7;
  border-color: #bdc9bd;
  font-size: 0.75rem;
  table-layout: fixed;
  width: 100%;
}

.page-regions.admin-page .page-block th,
.page-regions.admin-page .page-block td {
  line-height: 1.25;
  overflow-wrap: anywhere;
  padding: 0.38rem 0.3rem;
  vertical-align: top;
}

.page-regions.admin-page .page-block th:first-child,
.page-regions.admin-page .page-block td:first-child {
  width: 4.75rem;
}

.page-regions.admin-page .page-block th:last-child,
.page-regions.admin-page .page-block td:last-child {
  font-family: Arial, sans-serif;
  font-weight: 700;
  white-space: nowrap;
  width: 3.9rem;
}

.page-regions.admin-page .guide-footer {
  margin-top: 0.4rem;
}
`,
  elementSelector: ".page-regions.admin-page",
  name: "summer-arts-fair-ledger",
  run: async (context) => {
    const listingId = await createListing(context, {
      name: "Summer Arts Fair",
      values: {
        location: "Town Hall Gallery",
        max_attendees: "200",
        max_quantity: "6",
        unit_price: "25.00",
      },
    });

    await createAttendee(context, {
      listingId,
      quantity: "2",
      values: { name: "Alex Morgan" },
    });

    await addListingMoney(
      context,
      listingId,
      "manual_listing_income",
      "75.00",
    );
    await addListingMoney(
      context,
      listingId,
      "manual_listing_cost",
      "30.00",
    );

    await context.page.goto(`/admin/ledger?listing=${listingId}`);
    await context.page
      .getByRole("heading", { name: "Summer Arts Fair", exact: true })
      .waitFor();

    const totals = context.page.locator(".listing-details-table").first();
    await assertRow(totals, "Total income earned", "+£125");
    await assertRow(totals, "Net after refunds and costs", "£95");

    const entries = context.page.locator(".page-block table").last();
    await assertRow(
      entries,
      "Income received another way for Summer Arts Fair.",
      "+£75",
    );
    await assertRow(
      entries,
      "Listing cost paid another way for Summer Arts Fair.",
      "−£30",
    );
    await assertRow(entries, "Alex Morgan booked Summer Arts Fair.", "+£50");
  },
};
