const listingIdFrom = async (page, name) => {
  await page.goto("/admin/");
  const href = await page
    .getByRole("link", { exact: true, name })
    .first()
    .getAttribute("href");
  const id = href?.match(/^\/admin\/listing\/(\d+)/)?.[1];
  if (!id) throw new Error(`Could not find listing: ${name}`);
  return id;
};

const createListing = async ({ page, submit }, { name, price }) => {
  await page.goto("/admin/listing/new?template=custom");
  const values = {
    location: "Meadowfield Community Park",
    max_attendees: "300",
    max_quantity: "10",
    name,
    unit_price: price,
  };
  for (const [field, value] of Object.entries(values)) {
    await page
      .locator(`[name="${field}"]`)
      .first()
      .fill(value, { force: true });
  }
  await page.locator('[name="fields"][value="email"]').check();
  await submit('form[action="/admin/listing"]');
  return listingIdFrom(page, name);
};

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
  await page.goto(`/admin/groups/${groupId}`);
  const href = await page
    .locator('a[href*="/ticket/"]:not([href$="/qr"])')
    .first()
    .getAttribute("href");
  if (!href) throw new Error("Could not find the fundraiser checkout link.");
  await page.goto(new URL(href, page.url()).pathname);
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
  await page.setViewportSize({ height: 760, width: 1440 });
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

.order-summary-message {
  display: none;
}
`,
  elementSelector: "main",
  name: "charity-family-fun-day-checkout",
  run: async (context) => {
    const adultListingId = await createListing(context, {
      name: "Adults Tickets (£5)",
      price: "5.00",
    });
    const childListingId = await createListing(context, {
      name: "Kids Tickets (£1)",
      price: "1.00",
    });
    const groupId = await createGroup(context, [
      adultListingId,
      childListingId,
    ]);
    await openFilledCheckout(context, groupId, adultListingId, childListingId);
  },
};
