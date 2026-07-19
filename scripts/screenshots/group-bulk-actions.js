import { createGroup, createListing } from "./helpers.js";

const createCourseListing = (context, name, date) =>
  createListing(context, {
    fields: ["email"],
    name,
    values: {
      date_date: date,
      date_time: "10:00",
      description:
        "A practical printmaking workshop with materials and studio time included.",
      location: "Riverside Print Studio, Leeds",
      max_attendees: "14",
      max_quantity: "2",
      unit_price: "32.00",
    },
  });

export default {
  css: `
:root {
  --border-radius: 5px;
  --color-accent: #c9885c;
  --color-bg: #edf1eb;
  --color-bg-secondary: #dce5dc;
  --color-link: #315e55;
  --color-secondary: #3d6258;
  --color-secondary-accent: #3d62581a;
  --color-shadow: #29463e1c;
  --color-table: #3d6258;
  --color-text: #293a35;
  --color-text-secondary: #64736e;
  --font-family: Arial, Helvetica, sans-serif;
}

.admin-page {
  background: #fff;
  border: 1px solid #cbd6cd;
  border-top: 5px solid var(--color-accent);
  box-shadow: 0 10px 24px var(--color-shadow);
  font-size: 0.82rem;
  line-height: 1.35;
  padding: 0.8rem;
}

.admin-page > p:first-child {
  font-size: 0.75rem;
  margin: 0 0 0.45rem;
}

.admin-page .prose h1 {
  color: var(--color-secondary);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.5rem;
  margin: 0 0 0.35rem;
}

.admin-page .prose p {
  font-size: 0.78rem;
  line-height: 1.4;
  margin: 0 0 0.7rem;
}

#duplicate-group-form {
  background: #f6f8f5;
  border: 1px solid #d3ddd5;
  border-radius: 5px;
  padding: 0.7rem;
}

#duplicate-group-form label {
  font-size: 0.74rem;
  font-weight: 700;
}

#duplicate-group-form input {
  background: #fff;
  border-color: #bdcbc1;
  font-size: 0.78rem;
  min-height: 2rem;
  padding: 0.35rem 0.45rem;
}

#duplicate-group-form p,
#duplicate-group-form h2 {
  margin-block: 0.55rem;
}

#duplicate-group-form h2 {
  color: var(--color-secondary);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.15rem;
}

#duplicate-group-form .table-scroll {
  border: 1px solid #ccd8cf;
  overflow: visible;
}

#duplicate-group-form table {
  font-size: 0.62rem;
  table-layout: fixed;
  white-space: normal;
  width: 100%;
}

#duplicate-group-form th,
#duplicate-group-form td {
  line-height: 1.2;
  overflow-wrap: anywhere;
  padding: 0.35rem 0.2rem;
  vertical-align: top;
}

#duplicate-group-form tbody tr:nth-child(even) {
  background: #eaf0eb;
}

#duplicate-group-form button[type="submit"] {
  margin-top: 0.7rem;
}
`,
  elementSelector: ".page-regions.admin-page",
  name: "group-bulk-actions",
  run: async (context) => {
    const listings = [
      ["Autumn Printmaking: Linocut", "2026-09-12"],
      ["Autumn Printmaking: Monotype", "2026-09-19"],
      ["Autumn Printmaking: Drypoint", "2026-09-26"],
      ["Autumn Printmaking: Final studio", "2026-10-03"],
    ];
    const listingIds = [];
    for (const [name, date] of listings) {
      listingIds.push(await createCourseListing(context, name, date));
    }
    const groupId = await createGroup(context, {
      listingIds,
      name: "Autumn Printmaking Course 2026",
    });

    const { page } = context;
    await page.goto(`/admin/groups/${groupId}/bulk-actions/duplicate`);
    const form = page.locator("#duplicate-group-form");
    await form
      .locator('[name="new_name"]')
      .fill("Spring Printmaking Course 2027");
    await form.locator('[name="name_find"]').fill("Autumn");
    await form.locator('[name="name_replace"]').fill("Spring");
    await form.locator('[name="date_find"]').fill("2026-09-12");
    await form.locator('[name="date_replace"]').fill("2027-03-06");
    await form
      .locator("[data-preview-new-name]")
      .filter({ hasText: "Spring Printmaking: Linocut" })
      .waitFor();
    await form.locator("h2").click();
  },
};
