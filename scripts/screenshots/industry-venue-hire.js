import {
  createDurationIndustryListing,
  industryCheckoutCss,
  selectFirstFutureDate,
  setDayPrices,
} from "./_industry.js";
import { openFilledListingCheckout, waitForOrderTotal } from "./helpers.js";

export default {
  css: industryCheckoutCss({
    accent: "#9ab6a5",
    background: "#e8ede9",
    border: "#b8c7bd",
    link: "#3f6654",
    panel: "#fffdf8",
    secondary: "#365746",
    text: "#2d3731",
    textSecondary: "#69736d",
  }),
  elementSelector: "main",
  name: "industry-venue-hire-booking",
  run: async (context) => {
    const listingId = await createDurationIndustryListing(context, {
      name: "Riverside Hall Hire",
      values: {
        day_price_1: "240.00",
        duration_days: "2",
        location: "Riverside Community Hall",
        max_attendees: "1",
        maximum_days_after: "180",
        minimum_days_before: "7",
        unit_price: "240.00",
      },
    });
    await setDayPrices(context, listingId, { day_price_2: "420.00" });

    await openFilledListingCheckout(context, {
      email: "maya@example.com",
      listingId,
      name: "Maya Patel",
    });
    await context.page.locator('[name="phone"]').fill("07700 900123");
    await context.page
      .locator('[name="address"]')
      .fill("22 Orchard Road\nLeeds\nLS6 2AB");
    await selectFirstFutureDate(context.page);
    await context.page.locator('[name="day_count"]').selectOption("2");
    await waitForOrderTotal(context.page, "£420");
  },
};
