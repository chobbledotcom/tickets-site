import { createGroup, createListing } from "./helpers.js";

const fixture = (context, name, date) =>
  createListing(context, {
    fields: ["email"],
    name,
    values: {
      date_date: date,
      date_time: "15:00",
      location: "Riverside Rovers Ground",
      max_attendees: "220",
      max_quantity: "8",
      unit_price: "8.00",
    },
  });

const seasonStart = () => {
  const now = new Date();
  const start = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1),
  );
  return start.toISOString().slice(0, 10);
};

const addWeeks = (date, weeks) =>
  new Date(Date.parse(date) + weeks * 7 * 86_400_000)
    .toISOString()
    .slice(0, 10);

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #2e6e8e;
  --color-bg: #eef2f4;
  --color-bg-secondary: #e0e8ec;
  --color-link: #1f4d66;
  --color-secondary: #1d3a4d;
  --color-secondary-accent: #1d3a4d1c;
  --color-shadow: #1d3a4d26;
  --color-table: #1d3a4d;
  --color-text: #22303a;
  --color-text-secondary: #5f6f79;
  --font-family: Arial, Helvetica, sans-serif;
}

.page-regions.entity-page {
  background: #f8fafb;
  border: 1px solid #cdd8de;
  border-top: 7px solid var(--color-accent);
  border-radius: 12px;
  box-shadow: 0 12px 28px var(--color-shadow);
  margin-block: 0.6rem;
  padding: 1.1rem;
}

.page-regions.entity-page h2 { color: #1d3a4d; }

.page-regions.entity-page table {
  background: #fff;
  border: 1px solid #d5dfe5;
}
`,
  elementSelector: ".page-regions.entity-page",
  name: "sports-club-programme",
  run: async (context) => {
    const firstMatch = seasonStart();
    const listingIds = [
      await fixture(context, "Rovers vs Northside United", firstMatch),
      await fixture(
        context,
        "Rovers vs Eastfield Town",
        addWeeks(firstMatch, 3),
      ),
      await fixture(
        context,
        "Rovers vs Brookvale Rangers",
        addWeeks(firstMatch, 5),
      ),
    ];
    const groupId = await createGroup(context, {
      listingIds,
      name: "2026 Home Fixtures",
    });

    await createListing(context, {
      fields: ["email"],
      name: "Annual Membership",
      values: {
        location: "Riverside Rovers Ground",
        max_attendees: "300",
        max_quantity: "1",
        unit_price: "25.00",
      },
    });
    await createListing(context, {
      choices: { bookable_days: ["Tuesday"] },
      fields: ["email"],
      name: "Tuesday Training",
      values: {
        duration_days: "1",
        listing_type: "daily",
        location: "Riverside Rovers Ground",
        max_attendees: "20",
        maximum_days_after: "365",
        max_quantity: "1",
        minimum_days_before: "0",
        unit_price: "0.00",
      },
    });

    await context.page.goto(`/admin/groups/${groupId}`);
    await context.page.getByText("Rovers vs Brookvale Rangers").waitFor();
  },
};
