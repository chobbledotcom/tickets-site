import {
  createDailyIndustryListing,
  industryCheckoutCss,
  selectFirstFutureDate,
} from "./_industry.js";
import {
  createQuestion,
  enableFeature,
  openFilledListingCheckout,
  waitForOrderTotal,
} from "./helpers.js";

export default {
  css: industryCheckoutCss({
    accent: "#d5f04b",
    background: "#edf1e8",
    border: "#b6c09e",
    link: "#345d3b",
    panel: "#fcfdf7",
    secondary: "#294b35",
    text: "#253129",
    textSecondary: "#667269",
  }),
  elementSelector: "main",
  name: "industry-personal-trainer-booking",
  run: async (context) => {
    await enableFeature(context, "questions");
    const listingId = await createDailyIndustryListing(context, {
      bookableDays: ["Tuesday"],
      name: "Tuesday 18:00 Strength Session",
      values: {
        location: "Northside Training Studio",
        maximum_days_after: "60",
        minimum_days_before: "1",
        unit_price: "45.00",
      },
    });
    await createQuestion(context, {
      answers: ["Strength", "Mobility", "General fitness"],
      displayType: "radio",
      text: "What is your main training goal?",
    });

    await openFilledListingCheckout(context, {
      email: "sam@example.com",
      listingId,
      name: "Sam Taylor",
    });
    await context.page.locator('[name="phone"]').fill("07700 900123");
    await selectFirstFutureDate(context.page);
    await context.page.getByRole("radio", { name: "Strength" }).check();
    await waitForOrderTotal(context.page, "£45");
  },
};
