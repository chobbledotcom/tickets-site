import { industryCheckoutCss } from "./_industry.js";
import {
  blurActiveElement,
  createListing,
  createQuestion,
  enableFeature,
  publicPathFor,
} from "./helpers.js";

export default {
  css: `${industryCheckoutCss({
    accent: "#2f8f83",
    background: "#e4efec",
    border: "#b5d0ca",
    link: "#1f6a61",
    panel: "#fbfefd",
    secondary: "#1f6a61",
    text: "#22332f",
    textSecondary: "#5f726d",
  })}
.order-summary-message { display: none; }
`,
  elementSelector: "main",
  name: "free-registration-with-questions",
  run: async (context) => {
    const { page } = context;
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Wildlife in the garden talk",
      values: {
        date_date: "2027-03-11",
        date_time: "19:00",
        location: "Meadowfield Library",
        max_attendees: "40",
        max_quantity: "2",
        unit_price: "0",
      },
    });
    await enableFeature(context, "questions");
    await createQuestion(context, {
      displayType: "free_text",
      text: "Access requirements",
    });
    await createQuestion(context, {
      answers: ["Library noticeboard", "Newsletter", "A friend"],
      displayType: "radio",
      text: "How did you hear about the talk?",
    });

    await page.goto(await publicPathFor(page, listingId));
    await page.locator('[name="name"]').fill("Sam Whitfield");
    await page.locator('[name="email"]').fill("sam.whitfield@example.com");
    await page.locator(`[name="quantity${listingId}"]`).selectOption("1");
    await page.getByLabel("Access requirements").fill("Step-free access");
    await page.getByLabel("Newsletter", { exact: true }).check();
    await blurActiveElement(page);
  },
};
