export const listingIdFrom = async (page, name) => {
  await page.goto("/admin/");
  const href = await page
    .locator('a[href^="/admin/listing/"]:not([href*="/new"])')
    .filter({ hasText: name })
    .first()
    .getAttribute("href");
  const id = href?.match(/^\/admin\/listing\/(\d+)/)?.[1];
  if (!id) throw new Error(`Could not find listing: ${name}`);
  return id;
};

export const setFormValues = async (page, formSelector, values) => {
  const form = page.locator(formSelector);
  for (const [field, value] of Object.entries(values)) {
    await form
      .locator(`[name="${field}"]`)
      .first()
      .evaluate(
        (input, nextValue) => Reflect.set(input, "value", nextValue),
        value,
      );
  }
};

export const createListing = async (
  { page, submit },
  { choices = {}, fields = [], name, template = "custom", values },
) => {
  await page.goto(`/admin/listing/new?template=${template}`);
  const formSelector = 'form[action="/admin/listing"]';
  const form = page.locator(formSelector);
  await setFormValues(page, formSelector, values);
  for (const [field, values] of Object.entries(choices)) {
    for (const value of values) {
      await form
        .locator(`[name="${field}"][value="${value}"]`)
        .evaluate((input) => Reflect.set(input, "checked", true));
    }
  }
  for (const field of fields) {
    await form
      .locator(`[name="fields"][value="${field}"]`)
      .evaluate((input) => Reflect.set(input, "checked", true));
  }
  await setFormValues(page, formSelector, { name });
  const submittedName = await form.evaluate((element) =>
    String(new FormData(element).get("name"))
  );
  if (submittedName !== name) {
    throw new Error(`Could not fill listing name: ${submittedName}`);
  }
  await submit('form[action="/admin/listing"]');
  const resultPath = new URL(page.url()).pathname;
  if (resultPath !== "/admin" && resultPath !== "/admin/") {
    const message = await page.locator("main").textContent();
    throw new Error(`Could not create ${name} at ${resultPath}: ${message}`);
  }
  return listingIdFrom(page, name);
};

export const publicPathFrom = async (page, adminPath) => {
  await page.goto(adminPath);
  const href = await page
    .locator('a[href*="/ticket/"]:not([href$="/qr"])')
    .first()
    .getAttribute("href");
  if (!href) throw new Error("Could not find the public checkout link.");
  return new URL(href, page.url()).pathname;
};

export const publicPathFor = (page, listingId) =>
  publicPathFrom(page, `/admin/listing/${listingId}`);

export const enableFeature = async ({ page, submit }, feature) => {
  await page.goto(`/admin/features/${feature}`);
  await page.locator('[name="enabled"][value="true"]').check();
  await submit(`form[action="/admin/features/${feature}"]`);
};

export const createGroup = async (
  { page, submit },
  { listingIds, name },
) => {
  await page.goto("/admin/groups/new");
  await setFormValues(page, 'form[action="/admin/groups"]', { name });
  await submit('form[action="/admin/groups"]');
  const groupId = page.url().match(/\/admin\/groups\/(\d+)/)?.[1];
  if (!groupId) throw new Error(`Could not find group: ${name}`);
  for (const listingId of listingIds) {
    await page
      .locator(`[name="listing_ids"][value="${listingId}"]`)
      .evaluate((input) => Reflect.set(input, "checked", true));
  }
  await submit(`form[action="/admin/groups/${groupId}/add-listings"]`);
  return groupId;
};

export const openFilledGroupCheckout = async (
  context,
  { email, expectedText, groupId, name, quantities },
) => {
  const { page } = context;
  await page.goto(await publicPathFrom(page, `/admin/groups/${groupId}`));
  await page.locator('[name="name"]').fill(name);
  await page.locator('[name="email"]').fill(email);
  for (const [listingId, quantity] of quantities) {
    await page
      .locator(`[name="quantity_${listingId}"]`)
      .selectOption(quantity);
  }
  await page.getByText(expectedText, { exact: false }).waitFor();
};

export const createModifier = async (
  { page, submit },
  { calcKind, code = "", direction, name, trigger, value },
) => {
  await page.goto("/admin/modifiers/new");
  const formSelector = 'form[action="/admin/modifiers"]';
  const form = page.locator(formSelector);
  const values = {
    calc_kind: calcKind,
    calc_value: value,
    code,
    direction,
    name,
    scope: "all",
    trigger,
  };
  await setFormValues(page, formSelector, values);
  await form
    .locator('[name="active"][value="1"]')
    .evaluate((input) => Reflect.set(input, "checked", true));
  await submit('form[action="/admin/modifiers"]');
};
