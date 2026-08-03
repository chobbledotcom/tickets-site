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
    accent: "#77c4b2",
    background: "#e8eeee",
    border: "#b7c8c6",
    link: "#2d5d55",
    panel: "#fbfffe",
    secondary: "#34544e",
    text: "#263230",
    textSecondary: "#6b7a77",
  }),
  elementSelector: "main",
  name: "industry-guided-tour-booking",
  run: async (context) => {
    await enableFeature(context, "questions");
    const listingId = await createDailyIndustryListing(context, {
      fields: ["email"],
      name: "Old Town Ghost Walk",
      values: {
        location: "Meets at the Market Cross",
        max_attendees: "15",
        max_quantity: "4",
        maximum_days_after: "60",
        minimum_days_before: "1",
        unit_price: "14.00",
      },
    });
    await createQuestion(context, {
      answers: ["None", "Prefer a step-free route", "Walking aid user"],
      displayType: "radio",
      text: "Any mobility requirements for the walk?",
    });
    await openFilledListingCheckout(context, {
      email: "jo@example.com",
      listingId,
      name: "Jo Fletcher",
    });
    await selectFirstFutureDate(context.page);
    await context.page
      .locator(`[name="quantity_${listingId}"]`)
      .selectOption("2");
    await context.page
      .getByRole("radio", { name: "Prefer a step-free route" })
      .check();
    await waitForOrderTotal(context.page, "£28");
  },
};
