import { industryCheckoutCss } from "./_industry.js";
import {
  createListing,
  createModifier,
  createQuestion,
  enableFeature,
  openFilledListingCheckout,
  setFormValues,
  waitForOrderTotal,
} from "./helpers.js";

export default {
  css: industryCheckoutCss({
    accent: "#d98c5f",
    background: "#f2e9df",
    border: "#d0b9a5",
    link: "#71533d",
    panel: "#fffaf3",
    secondary: "#7d4a38",
    text: "#3c3029",
    textSecondary: "#77685f",
  }),
  elementSelector: "main",
  name: "industry-catering-booking",
  run: async (context) => {
    await enableFeature(context, "questions");
    await enableFeature(context, "modifiers");
    const listingId = await createListing(context, {
      fields: ["email", "phone", "address"],
      name: "Celebration Buffet Service",
      values: {
        location: "At the customer's venue",
        max_attendees: "12",
        max_quantity: "1",
        unit_price: "450.00",
      },
    });
    const guestCountId = await createQuestion(context, {
      displayType: "free_text",
      text: "How many guests are you catering for?",
    });
    const dietaryId = await createQuestion(context, {
      displayType: "free_text",
      text: "List any dietary requirements",
    });
    await createModifier(context, {
      calcKind: "fixed",
      direction: "charge",
      name: "Crockery hire",
      trigger: "optional",
      value: "40",
    });

    await openFilledListingCheckout(context, {
      email: "maya@example.com",
      listingId,
      name: "Maya Patel",
    });
    await setFormValues(context.page, "main form", {
      address: "22 Orchard Road, Leeds, LS6 2AB",
      phone: "07700 900123",
      [`question_${dietaryId}`]: "Two vegan guests; one nut allergy",
      [`question_${guestCountId}`]: "40",
    });
    await context.page
      .getByRole("spinbutton", { name: "Crockery hire — Quantity" })
      .fill("1");
    await waitForOrderTotal(context.page, "£490");
  },
};
