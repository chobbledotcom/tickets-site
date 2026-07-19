import {
  blurActiveElement,
  createListing,
  publicPathFor,
} from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 7px;
  --color-accent: #e9b44c;
  --color-bg: #edf1e7;
  --color-bg-secondary: #d9e2cf;
  --color-link: #2f5d50;
  --color-secondary: #9a4936;
  --color-secondary-accent: #9a49361c;
  --color-shadow: #263b3026;
  --color-table: #2f5d50;
  --color-text: #2a352f;
  --color-text-secondary: #68746d;
  --font-family: Arial, sans-serif;
}

body { background: #27483d; }

main {
  background: #fffdf5;
  border: 1px solid #c9b77e;
  border-radius: 10px;
  box-shadow: 0 12px 28px var(--color-shadow);
  margin-block: 0.6rem;
  padding: 1.2rem;
}

main h1,
main legend {
  color: #244b40;
  font-family: Georgia, "Times New Roman", serif;
}

main h1 { font-size: 1.75rem; }

main button,
main fieldset,
main input,
main select { border-radius: 6px; }

main .child-selector {
  background: #f5f0df;
  border-color: #d5c38b;
}

main .order-summary-message {
  background: #e8efe4;
  border: 1px solid #b9c9b2;
  border-left: 5px solid #9a4936;
  padding: 0.75rem;
}
`,
  elementSelector: "main",
  name: "required-child-listings-checkout",
  run: async (context) => {
    const generalCampingId = await createListing(context, {
      fields: ["email"],
      name: "General Camping",
      values: {
        location: "Willowbank Festival Field",
        max_attendees: "200",
        max_quantity: "8",
        unit_price: "12.00",
      },
    });
    const quietCampingId = await createListing(context, {
      fields: ["email"],
      name: "Quiet Camping",
      values: {
        location: "Willowbank Festival Field",
        max_attendees: "80",
        max_quantity: "8",
        unit_price: "18.00",
      },
    });
    const festivalPassId = await createListing(context, {
      fields: ["email"],
      name: "Weekend Festival Pass",
      values: {
        location: "Willowbank Festival Field",
        max_attendees: "500",
        max_quantity: "8",
        unit_price: "45.00",
      },
    });

    const childrenForm =
      `form[action="/admin/listing/${festivalPassId}/children"]`;
    await context.page.goto(`/admin/listing/${festivalPassId}/edit`);
    await context.page
      .locator(
        `${childrenForm} [name="child_listing_ids"][value="${generalCampingId}"]`,
      )
      .check();
    await context.page
      .locator(
        `${childrenForm} [name="child_listing_ids"][value="${quietCampingId}"]`,
      )
      .check();
    await context.submit(childrenForm);

    await context.page.goto(await publicPathFor(context.page, festivalPassId));
    await context.page.locator('[name="name"]').fill("Alex Morgan");
    await context.page.locator('[name="email"]').fill("alex@example.com");
    await context.page
      .locator(`[name="quantity_${festivalPassId}"]`)
      .selectOption("2");
    await context.page
      .locator(`[name="child_qty_${festivalPassId}_${generalCampingId}"]`)
      .selectOption("1");
    await context.page
      .locator(`[name="child_qty_${festivalPassId}_${quietCampingId}"]`)
      .selectOption("1");
    await context.page.getByText("you'll owe £120", { exact: false }).waitFor();
    await blurActiveElement(context.page);
  },
};
