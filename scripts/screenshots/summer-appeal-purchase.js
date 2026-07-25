import { industryCheckoutCss as checkoutCss } from "./_industry.js";
import {
  blurActiveElement,
  createListing,
  createQuestion,
  enableFeature,
  openFilledListingCheckout,
  waitForOrderTotal,
} from "./helpers.js";

export default {
  css: checkoutCss({
    accent: "#d79b45",
    background: "#f5efe2",
    border: "#dbc9aa",
    link: "#536a39",
    panel: "#fffdf7",
    secondary: "#5d733f",
    text: "#343b2d",
    textSecondary: "#6e7466",
  }),
  elementSelector: "main",
  name: "summer-appeal-purchase",
  run: async (context) => {
    await enableFeature(context, "questions");
    const listingId = await createListing(context, {
      choices: {
        can_pay_more: ["1"],
        purchase_only: ["1"],
      },
      fields: ["email"],
      name: "Meadowfield Summer Appeal 2026",
      values: {
        description: [
          "Support Meadowfield Community Association's summer programme.",
          "",
          "**Suggested contribution: £25.**",
        ].join("\n"),
        max_attendees: "5000",
        max_price: "500.00",
        max_quantity: "1",
        unit_price: "5.00",
      },
    });
    await createQuestion(context, {
      answers: ["Yes, I agree", "No, thank you"],
      displayType: "radio",
      text: "May Meadowfield email you about future appeals?",
    });
    await openFilledListingCheckout(context, {
      email: "aisha.rahman@example.test",
      listingId,
      name: "Aisha Rahman",
    });
    await context.page
      .locator(`[name="custom_price_${listingId}"]`)
      .fill("25.00");
    await context.page
      .getByRole("radio", { exact: true, name: "Yes, I agree" })
      .check();
    await waitForOrderTotal(context.page, "£25");
    await blurActiveElement(context.page);
  },
};
