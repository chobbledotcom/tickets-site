import { industryCheckoutCss } from "./_industry.js";
import {
  createListing,
  openFilledListingCheckout,
  setRequiredChildren,
  waitForOrderTotal,
} from "./helpers.js";

const createEntertainer = (context, name) =>
  createListing(context, {
    name,
    values: {
      location: "At the customer's venue",
      max_attendees: "20",
      max_quantity: "4",
      unit_price: "0.00",
    },
  });

export default {
  css: industryCheckoutCss({
    accent: "#f1bd45",
    background: "#edf0f6",
    border: "#b8c3dc",
    link: "#435d92",
    panel: "#fffdf7",
    secondary: "#563f86",
    text: "#352e43",
    textSecondary: "#716a7d",
  }),
  elementSelector: "main",
  name: "industry-childrens-entertainer-booking",
  run: async (context) => {
    const clownId = await createEntertainer(context, "Circus Clown");
    const princessId = await createEntertainer(context, "Fairytale Princess");
    const dinosaurId = await createEntertainer(context, "Dinosaur Mascot");
    const packageId = await createListing(context, {
      fields: ["email", "phone", "address"],
      name: "Children's Party Package",
      values: {
        location: "At the customer's venue",
        max_attendees: "12",
        max_quantity: "2",
        unit_price: "160.00",
      },
    });
    await setRequiredChildren(context, packageId, [
      clownId,
      princessId,
      dinosaurId,
    ]);

    await openFilledListingCheckout(context, {
      email: "alex@example.com",
      listingId: packageId,
      name: "Alex Morgan",
    });
    await context.page.locator('[name="phone"]').fill("07700 900123");
    await context.page
      .locator('[name="address"]')
      .fill("14 Willow Lane\nBristol\nBS3 4QH");
    await context.page
      .locator(`[name="quantity_${packageId}"]`)
      .selectOption("1");
    await context.page
      .locator(`[name="child_qty_${packageId}_${dinosaurId}"]`)
      .selectOption("1");
    await waitForOrderTotal(context.page, "£160");
  },
};
