import { createListing, publicPathFrom } from "./helpers.js";

const createGroup = async ({ page, submit }, listingIds) => {
  await page.goto("/admin/groups/new");
  await page.locator('[name="name"]').fill("Family Fun Day Fundraiser");
  await submit('form[action="/admin/groups"]');
  const groupId = page.url().match(/\/admin\/groups\/(\d+)/)?.[1];
  if (!groupId) throw new Error("Could not find the new fundraiser group.");
  for (const listingId of listingIds) {
    await page.locator(`[name="listing_ids"][value="${listingId}"]`).check();
  }
  await submit(`form[action="/admin/groups/${groupId}/add-listings"]`);
  return groupId;
};

const openFilledCheckout = async (
  { page },
  groupId,
  adultListingId,
  childListingId,
) => {
  await page.goto(await publicPathFrom(page, `/admin/groups/${groupId}`));
  await page.locator('[name="name"]').fill("Jane Example");
  await page.locator('[name="email"]').fill("jane@example.com");
  await page
    .locator(`[name="quantity_${adultListingId}"]`)
    .selectOption("2");
  await page
    .locator(`[name="quantity_${childListingId}"]`)
    .selectOption("2");
  await page
    .getByText("you'll owe £12", { exact: false })
    .waitFor({ state: "attached" });
};

export default {
  css: `
:root {
  --border-radius: 22px;
  --box-shadow: 0 12px 30px;
  --color-accent: #dff4ed;
  --color-bg: #fffaf2;
  --color-bg-secondary: #f5dff0;
  --color-link: #6d4d8f;
  --color-secondary: #db6f91;
  --color-secondary-accent: #db6f9124;
  --color-shadow: #72526f24;
  --color-table: #7b5aa6;
  --color-text: #46334f;
  --color-text-secondary: #846f89;
  --font-family: "Trebuchet MS", "Arial Rounded MT Bold", sans-serif;
}

main {
  background: #fffdf9e8;
  border: 2px solid #f1d7e8;
  border-radius: 30px;
  box-shadow: var(--box-shadow) var(--color-shadow);
  margin-block: 2rem;
  padding: 2rem 3rem;
}

button,
input,
select,
textarea {
  border-radius: 16px;
}

button[type="submit"] {
  border-radius: 999px;
  box-shadow: 0 6px 0 #a94f70;
  font-weight: 700;
}

fieldset,
table {
  border-radius: 20px;
}

@media (max-width: 600px) {
  main {
    margin-block: 0.75rem;
    padding: 1.25rem;
  }
}

.order-summary-message {
  display: none;
}
`,
  elementSelector: "main",
  name: "charity-family-fun-day-checkout",
  run: async (context) => {
    const adultListingId = await createListing(context, {
      fields: ["email"],
      name: "Adults Tickets (£5)",
      values: {
        location: "Meadowfield Community Park",
        max_attendees: "300",
        max_quantity: "10",
        unit_price: "5.00",
      },
    });
    const childListingId = await createListing(context, {
      fields: ["email"],
      name: "Kids Tickets (£1)",
      values: {
        location: "Meadowfield Community Park",
        max_attendees: "300",
        max_quantity: "10",
        unit_price: "1.00",
      },
    });
    const groupId = await createGroup(context, [
      adultListingId,
      childListingId,
    ]);
    await openFilledCheckout(context, groupId, adultListingId, childListingId);
  },
};
