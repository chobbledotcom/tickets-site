import {
  createDailyIndustryListing,
  industryCheckoutCss,
  selectFirstFutureDate,
} from "./_industry.js";
import { openFilledListingCheckout, waitForOrderTotal } from "./helpers.js";

export default {
  css: industryCheckoutCss({
    accent: "#e8b64c",
    background: "#221d2a",
    border: "#4a3f57",
    link: "#e8b64c",
    panel: "#2e2637",
    secondary: "#e8b64c",
    text: "#f2edf7",
    textSecondary: "#b5aac4",
  }),
  elementSelector: "main",
  name: "industry-comedy-club-checkout",
  run: async (context) => {
    const listingId = await createDailyIndustryListing(context, {
      bookableDays: ["Friday"],
      fields: ["email"],
      name: "Friday Night Comedy",
      values: {
        location: "The Cellar, Bridgefield",
        max_attendees: "90",
        max_quantity: "6",
        maximum_days_after: "45",
        minimum_days_before: "1",
        unit_price: "12.00",
      },
    });
    await openFilledListingCheckout(context, {
      email: "sam@example.com",
      listingId,
      name: "Sam Okafor",
    });
    await selectFirstFutureDate(context.page);
    await context.page
      .locator(`[name="quantity_${listingId}"]`)
      .selectOption("2");
    await waitForOrderTotal(context.page, "£24");
  },
};
