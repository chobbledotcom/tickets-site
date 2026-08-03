import { chobbleFestCss, createFestivalListing } from "./_chobblefest.js";
import { publicPathFor, waitForOrderTotal } from "./helpers.js";

export default {
  css: chobbleFestCss("identity"),
  fullPage: true,
  name: "chobblefest-identity",
  run: async (context) => {
    const { page, submit } = context;
    await page.goto("/admin/settings");
    const form = 'form[action="/admin/settings/theme"]';
    await page.locator(`${form} [name="theme"][value="dark"]`).check();
    await submit(form);
    const listingId = await createFestivalListing(context, {
      date: "2027-08-16",
      description: "Seven days. Twelve stages. 150 metal bands.",
      name: "CHOBBLEFEST: Full week pass",
      price: "180.00",
    });
    await page.goto(await publicPathFor(page, listingId));
    await page.locator('[name="name"]').fill("Maya Patel");
    await page.locator('[name="email"]').fill("maya@example.com");
    await page.locator(`[name="quantity_${listingId}"]`).selectOption("1");
    await waitForOrderTotal(page, "£180");
  },
};
