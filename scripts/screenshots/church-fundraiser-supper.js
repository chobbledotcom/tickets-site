import { industryCheckoutCss } from "./_industry.js";
import {
  blurActiveElement,
  createListing,
  createQuestion,
  enableFeature,
  publicPathFor,
  waitForOrderTotal,
} from "./helpers.js";

export default {
  css: `${industryCheckoutCss({
    accent: "#a8873f",
    background: "#ece8f1",
    border: "#c9c0d6",
    link: "#4f3a78",
    panel: "#fdfcff",
    secondary: "#4f3a78",
    text: "#2e2838",
    textSecondary: "#6b6478",
  })}
main h1 { font-family: Georgia, "Times New Roman", serif; }
.order-summary-message { display: none; }
`,
  elementSelector: "main",
  name: "church-fundraiser-supper",
  run: async (context) => {
    const { page } = context;
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Parish harvest supper",
      values: {
        date_date: "2027-10-09",
        date_time: "19:00",
        location: "St Barnabas Church Hall",
        max_attendees: "60",
        max_quantity: "6",
        unit_price: "12.00",
      },
    });
    await enableFeature(context, "questions");
    await createQuestion(context, {
      answers: ["No requirements", "Vegetarian", "Vegan", "Gluten-free"],
      displayType: "radio",
      text: "Dietary requirements",
    });

    await page.goto(await publicPathFor(page, listingId));
    await page.locator('[name="name"]').fill("Ruth Adeyemi");
    await page.locator('[name="email"]').fill("ruth.adeyemi@example.com");
    await page.locator(`[name="quantity${listingId}"]`).selectOption("2");
    await page.getByLabel("Vegetarian", { exact: true }).check();
    await waitForOrderTotal(page, "£24");
    await blurActiveElement(page);
  },
};
