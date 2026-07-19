import { createAttendee, createListing } from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 4px;
  --color-accent: #d9b44a;
  --color-bg: #f5f3ed;
  --color-bg-secondary: #e8e4d9;
  --color-link: #334e68;
  --color-secondary: #243b53;
  --color-secondary-accent: #243b5318;
  --color-shadow: #1c2d3d20;
  --color-table: #243b53;
  --color-text: #24313d;
  --color-text-secondary: #67737d;
  --font-family: Arial, Helvetica, sans-serif;
}

.admin-page {
  background: #fff;
  border: 1px solid #d8d5ca;
  box-shadow: 0 10px 24px var(--color-shadow);
  padding: 0.8rem;
}

.admin-page h2 {
  border-bottom: 4px solid var(--color-accent);
  color: var(--color-secondary);
  padding-bottom: 0.45rem;
}

.admin-page .table-scroll {
  overflow: visible;
}

.admin-page table {
  font-size: 0.78rem;
  table-layout: fixed;
  white-space: normal;
  width: 100%;
}

.admin-page th,
.admin-page td {
  line-height: 1.3;
  padding: 0.45rem;
  vertical-align: top;
}

.admin-page th:first-child,
.admin-page td:first-child {
  width: 4.7rem;
}

.admin-page th:nth-child(n + 3),
.admin-page td:nth-child(n + 3) {
  display: none;
}

.admin-page tbody tr:nth-child(odd) {
  background: #f7f5ef;
}

.admin-page .guide-footer {
  display: none;
}
`,
  elementSelector: ".page-regions.admin-page",
  name: "activity-log-summer-arts-fair",
  run: async (context) => {
    const listingId = await createListing(context, {
      name: "Summer Arts Fair",
      values: {
        location: "Town Hall Gallery",
        max_attendees: "200",
        max_quantity: "6",
        unit_price: "12.50",
      },
    });
    await createAttendee(context, {
      listingId,
      quantity: "2",
      values: { name: "Maya Patel" },
    });
    await context.page.goto("/admin/log");
    await context.page
      .getByText("Attendee 'Maya Patel' added manually", {
        exact: false,
      })
      .waitFor();
  },
};
