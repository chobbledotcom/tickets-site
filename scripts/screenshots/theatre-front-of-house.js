import {
  createAttendee,
  createGroup,
  createListing,
  setFormValues,
} from "./helpers.js";

const GROUP_CAPACITY = "180";

const ticketType = (context, name, unitPrice) =>
  createListing(context, {
    fields: ["email"],
    name,
    values: {
      location: "The Old Playhouse",
      max_attendees: GROUP_CAPACITY,
      max_quantity: "8",
      unit_price: unitPrice,
    },
  });

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #a33d2f;
  --color-bg: #f5f0e8;
  --color-bg-secondary: #e9e0d2;
  --color-link: #6e2419;
  --color-secondary: #3c2f3f;
  --color-secondary-accent: #3c2f3f1c;
  --color-shadow: #3c2f3f26;
  --color-table: #3c2f3f;
  --color-text: #332a36;
  --color-text-secondary: #74656f;
  --font-family: Arial, Helvetica, sans-serif;
}

.page-regions.entity-page {
  background: #fbf7f0;
  border: 1px solid #d8cfc2;
  border-top: 7px solid var(--color-accent);
  border-radius: 12px;
  box-shadow: 0 12px 28px var(--color-shadow);
  margin-block: 0.6rem;
  padding: 1.1rem;
}

.page-regions.entity-page h2 { color: #3c2f3f; }

.page-regions.entity-page table {
  background: #fffdf9;
  border: 1px solid #ddd2c4;
}
`,
  elementSelector: ".page-regions.entity-page",
  name: "theatre-front-of-house",
  run: async (context) => {
    const adultId = await ticketType(context, "Adult", "14.00");
    const childId = await ticketType(context, "Child", "8.00");
    const concessionId = await ticketType(context, "Concession", "10.00");
    const groupId = await createGroup(context, {
      listingIds: [adultId, childId, concessionId],
      name: "Friday Performance",
    });

    const editForm = `form[action="/admin/groups/${groupId}/edit"]`;
    await context.page.goto(`/admin/groups/${groupId}/edit`);
    await setFormValues(context.page, editForm, {
      max_attendees: GROUP_CAPACITY,
    });
    await context.submit(editForm);

    await createAttendee(context, {
      listingId: adultId,
      quantity: "2",
      values: { email: "helen@example.com", name: "Helen Bright" },
    });
    await createAttendee(context, {
      listingId: adultId,
      quantity: "1",
      values: { email: "daniel@example.com", name: "Daniel Osei" },
    });
    await createAttendee(context, {
      listingId: childId,
      quantity: "2",
      values: { email: "priya@example.com", name: "Priya Kaur" },
    });
    await createAttendee(context, {
      listingId: concessionId,
      quantity: "1",
      values: { email: "robert@example.com", name: "Robert Ellis" },
    });

    await context.page.goto(`/admin/groups/${groupId}/attendees`);
    await context.page.locator("table").getByText("Robert Ellis").waitFor();
  },
};
