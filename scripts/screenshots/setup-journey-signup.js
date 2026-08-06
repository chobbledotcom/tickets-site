import { setupJourneyCss } from "./_setup-journey.js";
import { createListing, openFilledListingCheckout } from "./helpers.js";

export default {
  css: setupJourneyCss("signup"),
  elementSelector: "main",
  name: "setup-journey-signup",
  run: async (context) => {
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Chobble Tickets managed hosting",
      values: {
        description:
          "Managed hosting costs £5 per month. Chobble does not take a cut of ticket sales.",
        max_attendees: "1000",
        max_quantity: "12",
        unit_price: "5.00",
      },
    });
    await openFilledListingCheckout(context, {
      email: "maya@example.com",
      listingId,
      name: "Maya Patel",
    });
    const quantity = context.page.locator(`[name="quantity_${listingId}"]`);
    await quantity.selectOption("1");
    await quantity.evaluate((select) => {
      const label = select.closest("label");
      const text = [...(label?.childNodes ?? [])].find(
        (node) => node.nodeType === Node.TEXT_NODE,
      );
      if (text)
        text.textContent = text.textContent?.replace("Tickets", "months") ?? "";
    });
  },
};
