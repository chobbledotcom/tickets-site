import { industryCheckoutCss as checkoutCss } from "./_industry.js";
import {
  blurActiveElement,
  createGroup,
  createListing,
  createQuestion,
  enableFeature,
  publicPathFrom,
  waitForOrderTotal,
} from "./helpers.js";

const createShift = (context, name) =>
  createListing(context, {
    fields: ["email"],
    name,
    values: {
      max_attendees: "8",
      max_quantity: "1",
      unit_price: "0.00",
    },
  });

export default {
  css: checkoutCss({
    accent: "#e39a4d",
    background: "#f1f5ee",
    border: "#c6d8c0",
    link: "#456b4d",
    panel: "#fffdf8",
    secondary: "#365b40",
    text: "#2f3b31",
    textSecondary: "#667168",
  }),
  elementSelector: "main",
  name: "summer-fair-volunteer-form",
  run: async (context) => {
    await enableFeature(context, "questions");
    const setupId = await createShift(
      context,
      "Set-up shift | 08:00-10:00 | 8 places",
    );
    const gateId = await createShift(
      context,
      "Gate duty | 11:30-14:00 | 8 places",
    );
    const clearUpId = await createShift(
      context,
      "Clear-up shift | 15:30-17:00 | 8 places",
    );
    const groupId = await createGroup(context, {
      listingIds: [setupId, gateId, clearUpId],
      name: "Oakfield Primary Summer Fair volunteers",
    });
    const questionId = await createQuestion(context, {
      displayType: "free_text",
      text: "Do you have any access needs?",
    });

    await context.page.goto(
      await publicPathFrom(context.page, `/admin/groups/${groupId}`),
    );
    await context.page.locator('[name="name"]').fill("Sam Taylor");
    await context.page
      .locator('[name="email"]')
      .fill("sam.taylor@example.test");
    await context.page
      .locator(`[name="question_${questionId}"]`)
      .fill("Step-free access, please.");
    await context.page
      .locator(`[name="quantity_${setupId}"]`)
      .selectOption("1");
    await waitForOrderTotal(context.page, "£0");
    await blurActiveElement(context.page);
  },
};
