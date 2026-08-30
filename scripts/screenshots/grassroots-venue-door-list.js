import { createAttendee, createListing } from "./helpers.js";

const DOOR_LIST = [
  { email: "advance1@example.com", name: "Sofia Marcetti", quantity: "2" },
  { email: "advance2@example.com", name: "Tom Whelan", quantity: "2" },
  { email: "advance3@example.com", name: "Aisha Rahman", quantity: "1" },
  { email: "guest@example.com", name: "Guest: Nina Feld (press)" },
  { email: "guest@example.com", name: "Guest: Otto Brand (band)" },
  { email: "guest@example.com", name: "Guest: Leroy Grant (promoter)" },
];

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #d8a433;
  --color-bg: #1f1b17;
  --color-bg-secondary: #2b2520;
  --color-link: #e3b95c;
  --color-secondary: #e8dcc4;
  --color-secondary-accent: #e8dcc41a;
  --color-shadow: #00000059;
  --color-table: #e8dcc4;
  --color-text: #f0e9da;
  --color-text-secondary: #b3a894;
  --font-family: Arial, Helvetica, sans-serif;
}

body { background: #141110; }

.page-regions.entity-page {
  background: #241f1a;
  border: 1px solid #4a3f33;
  border-top: 7px solid var(--color-accent);
  border-radius: 12px;
  box-shadow: 0 12px 28px var(--color-shadow);
  margin-block: 0.6rem;
  padding: 1.1rem;
}

.page-regions.entity-page h2 { color: #e8dcc4; }

.page-regions.entity-page table {
  background: #2b2520;
  border: 1px solid #4a3f33;
}
`,
  elementSelector: ".page-regions.entity-page",
  name: "grassroots-venue-door-list",
  run: async (context) => {
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Friday Night at The Lantern Rooms",
      values: {
        location: "The Lantern Rooms",
        max_attendees: "120",
        max_quantity: "6",
        unit_price: "12.00",
      },
    });

    for (const attendee of DOOR_LIST) {
      await createAttendee(context, {
        listingId,
        quantity: attendee.quantity ?? "1",
        values: { email: attendee.email, name: attendee.name },
      });
    }

    await context.page.goto(`/admin/listing/${listingId}/attendees`);
    await context.page
      .locator("table")
      .getByText("Guest: Leroy Grant (promoter)")
      .waitFor();
  },
};
