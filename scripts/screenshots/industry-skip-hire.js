import {
  createDurationIndustryListing,
  industryCheckoutCss,
  selectFirstFutureDate,
  setDayPrices,
} from "./_industry.js";
import { openFilledListingCheckout, waitForOrderTotal } from "./helpers.js";

export default {
  css: industryCheckoutCss({
    accent: "#f5c400",
    background: "#e7eaec",
    border: "#aeb4b8",
    link: "#2f566b",
    panel: "#fbfbf8",
    secondary: "#343a3e",
    text: "#292d30",
    textSecondary: "#697075",
  }),
  elementSelector: "main",
  name: "industry-skip-hire-booking",
  run: async (context) => {
    const listingId = await createDurationIndustryListing(context, {
      name: "6 Yard Builder's Skip",
      values: {
        day_price_1: "95.00",
        duration_days: "14",
        location: "Riverside Skip Hire",
        max_attendees: "6",
        maximum_days_after: "90",
        minimum_days_before: "1",
        unit_price: "95.00",
      },
    });
    await setDayPrices(context, listingId, {
      day_price_14: "240.00",
      day_price_7: "180.00",
    });

    await openFilledListingCheckout(context, {
      email: "alex@example.com",
      listingId,
      name: "Alex Morgan",
    });
    await context.page.locator('[name="phone"]').fill("07700 900123");
    await context.page
      .locator('[name="address"]')
      .fill("14 Willow Lane\nBristol\nBS3 4QH");
    await selectFirstFutureDate(context.page);
    await context.page.locator('[name="day_count"]').selectOption("7");
    await waitForOrderTotal(context.page, "£180");
  },
};
