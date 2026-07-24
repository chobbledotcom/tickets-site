import {
  createDailyIndustryListing,
  industryCheckoutCss,
  selectFirstFutureDate,
} from "./_industry.js";
import {
  createQuestion,
  enableFeature,
  openFilledListingCheckout,
  setFormValues,
  waitForOrderTotal,
} from "./helpers.js";

export default {
  css: industryCheckoutCss({
    accent: "#d7b7c9",
    background: "#eee8ec",
    border: "#cdbbc5",
    link: "#66506a",
    panel: "#fffafd",
    secondary: "#59435d",
    text: "#352f36",
    textSecondary: "#746a74",
  }),
  elementSelector: "main",
  name: "industry-personal-stylist-booking",
  run: async (context) => {
    await enableFeature(context, "questions");
    const listingId = await createDailyIndustryListing(context, {
      name: "Wardrobe Consultation",
      values: {
        location: "Rose & Thread Studio",
        maximum_days_after: "60",
        minimum_days_before: "2",
        unit_price: "95.00",
      },
    });
    await createQuestion(context, {
      answers: ["Everyday wardrobe", "Workwear", "A specific event"],
      displayType: "radio",
      text: "What would you like help with?",
    });
    const notesId = await createQuestion(context, {
      displayType: "free_text",
      text: "Tell the stylist about your preferences",
    });

    await openFilledListingCheckout(context, {
      email: "priya@example.com",
      listingId,
      name: "Priya Shah",
    });
    await setFormValues(context.page, "main form", {
      phone: "07700 900123",
      [`question_${notesId}`]: "Natural fibres and neutral colours",
    });
    await selectFirstFutureDate(context.page);
    await context.page
      .getByRole("radio", { name: "Everyday wardrobe" })
      .check();
    await waitForOrderTotal(context.page, "£95");
  },
};
