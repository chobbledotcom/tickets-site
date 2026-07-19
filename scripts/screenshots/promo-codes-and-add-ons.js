import {
  createListing,
  createModifier,
  enableFeature,
  publicPathFor,
} from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 12px;
  --color-accent: #f0c36f;
  --color-bg: #f8f1e5;
  --color-bg-secondary: #ead7ba;
  --color-link: #315c4b;
  --color-secondary: #a74f35;
  --color-secondary-accent: #a74f3520;
  --color-shadow: #593a281f;
  --color-table: #315c4b;
  --color-text: #3d3028;
  --color-text-secondary: #75675d;
  --font-family: Arial, sans-serif;
}

main {
  background: #fffdf8;
  border: 1px solid #ddc9aa;
  border-radius: 18px;
  box-shadow: 0 10px 24px var(--color-shadow);
  margin-block: 0.75rem;
  padding: 1.25rem;
}

button,
input,
select {
  border-radius: 10px;
}

.order-summary-message {
  background: #f7ead2;
  border: 1px solid #dfbd7e;
  border-radius: 10px;
  padding: 0.75rem;
}
`,
  elementSelector: "main",
  name: "promo-codes-and-add-ons-checkout",
  run: async (context) => {
    await enableFeature(context, "modifiers");
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Autumn Food Fair",
      values: {
        location: "Orchard Market Square",
        max_attendees: "200",
        max_quantity: "8",
        unit_price: "12.00",
      },
    });
    await createModifier(context, {
      calcKind: "percent",
      code: "EARLY10",
      direction: "discount",
      name: "Early booking discount",
      trigger: "code",
      value: "10",
    });
    await createModifier(context, {
      calcKind: "fixed",
      direction: "charge",
      name: "Parking pass",
      trigger: "optional",
      value: "4",
    });
    await context.page.goto(await publicPathFor(context.page, listingId));
    await context.page.locator('[name="name"]').fill("Sam Taylor");
    await context.page.locator('[name="email"]').fill("sam@example.com");
    await context.page
      .locator(`[name="quantity_${listingId}"]`)
      .selectOption("2");
    await context.page.locator('[name="promo_code"]').fill("EARLY10");
    await context.page
      .getByRole("spinbutton", { name: "Parking pass — Quantity" })
      .fill("1");
    await context.page
      .getByText("you'll owe £25.60", { exact: false })
      .waitFor();
  },
};
