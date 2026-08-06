import { createFirstEvent, setupJourneyCss } from "./_setup-journey.js";
import { openFilledListingCheckout } from "./helpers.js";

export default {
  css: setupJourneyCss("booking"),
  elementSelector: "main",
  name: "setup-journey-booking",
  run: async (context) => {
    const listingId = await createFirstEvent(context);
    await openFilledListingCheckout(context, {
      email: "maya@example.com",
      listingId,
      name: "Maya Patel",
    });
    await context.page
      .locator(`[name="quantity_${listingId}"]`)
      .selectOption("2");
  },
};
