import { createListing, publicPathFor, waitForOrderTotal } from "./helpers.js";

export default {
  css: "",
  fullPage: true,
  name: "moonlight-cinema-dark-checkout",
  run: async (context) => {
    const { page, submit } = context;
    await page.goto("/admin/settings");
    const themeForm = 'form[action="/admin/settings/theme"]';
    await page
      .locator(`${themeForm} [name="theme"][value="dark"]`)
      .evaluate((input) => Reflect.set(input, "checked", true));
    await submit(themeForm);

    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Moonlight Cinema: The General",
      values: {
        date_date: "2027-06-19",
        date_time: "20:30",
        listing_type: "standard",
        location: "Riverside Picture Gardens",
        max_attendees: "160",
        max_quantity: "6",
        unit_price: "9.50",
      },
    });

    await page.goto(await publicPathFor(page, listingId));
    await page.locator('[name="name"]').fill("Maya");
    await page.locator('[name="email"]').fill("maya@example.com");
    await page.locator(`[name="quantity_${listingId}"]`).selectOption("2");
    await page.evaluate(() => {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    });

    const theme = await page.locator("html").getAttribute("data-theme");
    if (theme !== "dark") {
      throw new Error(`Expected the built-in dark theme, received: ${theme}`);
    }
    await waitForOrderTotal(page, "£19");
    const focusedTag = await page.evaluate(
      () => document.activeElement?.tagName,
    );
    if (["BUTTON", "INPUT", "SELECT", "TEXTAREA"].includes(focusedTag ?? "")) {
      throw new Error(
        `A ${focusedTag} still has focus in the checkout screenshot.`,
      );
    }
  },
};
