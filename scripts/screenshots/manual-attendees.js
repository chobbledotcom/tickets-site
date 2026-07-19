import { createAttendee, createListing } from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 7px;
  --color-accent: #d9b56d;
  --color-bg: #f4efe5;
  --color-bg-secondary: #e8ddca;
  --color-link: #7b3528;
  --color-secondary: #7b3528;
  --color-secondary-accent: #7b35281a;
  --color-shadow: #50372b20;
  --color-table: #7b3528;
  --color-text: #372b25;
  --color-text-secondary: #76665d;
  --font-family: Georgia, "Times New Roman", serif;
}

article:has(#attendees) {
  background: #fffdf8;
  border: 1px solid #d8c8ad;
  border-top: 6px solid var(--color-secondary);
  border-radius: 8px;
  box-shadow: 0 12px 28px var(--color-shadow);
  padding: 1rem;
}

article:has(#attendees) h2 {
  color: var(--color-secondary);
  font-size: 1.55rem;
  margin-bottom: 0.35rem;
}

article:has(#attendees) .table-scroll {
  overflow: visible;
}

article:has(#attendees) table {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.7rem;
  table-layout: fixed;
  white-space: normal;
  width: 100% !important;
  min-width: 0;
}

article:has(#attendees) th,
article:has(#attendees) td {
  line-height: 1.25;
  overflow-wrap: anywhere;
  padding: 0.45rem 0.3rem;
}

article:has(#attendees) th:nth-child(n + 5),
article:has(#attendees) td:nth-child(n + 5) {
  display: none;
}

article:has(#attendees) th:first-child,
article:has(#attendees) td:first-child { width: 22%; }

article:has(#attendees) th:nth-child(2),
article:has(#attendees) td:nth-child(2) { width: 23%; }

article:has(#attendees) th:nth-child(3),
article:has(#attendees) td:nth-child(3) { width: 43%; }

article:has(#attendees) th:nth-child(4),
article:has(#attendees) td:nth-child(4) {
  text-align: center;
  width: 12%;
}

article:has(#attendees) tbody tr {
  background: #f8f2e7;
}

article:has(#attendees) button {
  border-radius: 999px;
  font-size: 0.72rem;
  padding: 0.25rem 0.5rem;
}
`,
  elementSelector: "article:has(#attendees)",
  name: "manual-attendee-community-supper",
  run: async (context) => {
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Community Supper",
      values: {
        location: "St Mark's Community Hall",
        max_attendees: "80",
        max_quantity: "8",
        unit_price: "12.00",
      },
    });
    await createAttendee(context, {
      listingId,
      quantity: "3",
      values: {
        email: "maya@example.com",
        name: "Maya Patel",
      },
    });
    await context.page.goto(`/admin/listing/${listingId}/attendees`);
    const roster = context.page.locator("article:has(#attendees)");
    await roster.getByText("Maya Patel", { exact: true }).waitFor();
    await roster.getByText("maya@example.com", { exact: true }).waitFor();
  },
};
