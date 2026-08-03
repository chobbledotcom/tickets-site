import { industryCheckoutCss } from "./_industry.js";
import {
  createListing,
  createQuestion,
  enableFeature,
  openFilledListingCheckout,
  setFormValues,
  waitForOrderTotal,
} from "./helpers.js";

export default {
  css: industryCheckoutCss({
    accent: "#b23a48",
    background: "#eef0f4",
    border: "#c3c9d6",
    link: "#31456e",
    panel: "#ffffff",
    secondary: "#31456e",
    text: "#2a3040",
    textSecondary: "#6d7486",
  }),
  elementSelector: "main",
  name: "industry-class-reunion-booking",
  run: async (context) => {
    await enableFeature(context, "questions");
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Class of 2006 Reunion Dinner",
      values: {
        location: "Oakfield High School Hall",
        max_attendees: "120",
        max_quantity: "1",
        unit_price: "38.00",
      },
    });
    await createQuestion(context, {
      answers: ["Three-course dinner", "Vegetarian menu", "Buffet"],
      displayType: "radio",
      text: "Menu choice",
    });
    const dietaryId = await createQuestion(context, {
      displayType: "free_text",
      text: "Dietary requirements",
    });
    await openFilledListingCheckout(context, {
      email: "asha@example.com",
      listingId,
      name: "Asha Kaur",
    });
    await setFormValues(context.page, "main form", {
      [`question_${dietaryId}`]: "No nuts please",
    });
    await context.page.getByRole("radio", { name: "Vegetarian menu" }).check();
    await waitForOrderTotal(context.page, "£38");
  },
};
