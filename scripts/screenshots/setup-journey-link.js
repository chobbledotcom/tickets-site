import { createFirstEvent, setupJourneyCss } from "./_setup-journey.js";

export default {
  css: setupJourneyCss("link"),
  elementSelector: "main",
  name: "setup-journey-link",
  run: async (context) => {
    const listingId = await createFirstEvent(context);
    await context.page.goto(`/admin/listing/${listingId}`);
    await context.page.locator('a[href*="/ticket/"]').first().waitFor();
  },
};
