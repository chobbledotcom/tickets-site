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

export const createListing = async (
  { page, submit },
  { choices = {}, fields = [], name, template = "custom", values },
) => {
  await page.goto(`/admin/listing/new?template=${template}`);
  const form = page.locator('form[action="/admin/listing"]');
  for (const [field, value] of Object.entries(values)) {
    const control = form.locator(`[name="${field}"]`).first();
    await control.evaluate(
      (input, nextValue) => Reflect.set(input, "value", nextValue),
      value,
    );
  }
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
  await form
    .locator('[name="name"]')
    .evaluate((input, value) => Reflect.set(input, "value", value), name);
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

export const createModifier = async (
  { page, submit },
  { calcKind, code = "", direction, name, trigger, value },
) => {
  await page.goto("/admin/modifiers/new");
  const form = page.locator('form[action="/admin/modifiers"]');
  const values = {
    calc_kind: calcKind,
    calc_value: value,
    code,
    direction,
    name,
    scope: "all",
    trigger,
  };
  for (const [field, fieldValue] of Object.entries(values)) {
    await form
      .locator(`[name="${field}"]`)
      .evaluate(
        (input, nextValue) => Reflect.set(input, "value", nextValue),
        fieldValue,
      );
  }
  await form
    .locator('[name="active"][value="1"]')
    .evaluate((input) => Reflect.set(input, "checked", true));
  await submit('form[action="/admin/modifiers"]');
};
