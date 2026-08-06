import { setupJourneyCss } from "./_setup-journey.js";

export default {
  css: setupJourneyCss("stripe"),
  elementSelector: "#settings-stripe",
  name: "setup-journey-stripe",
  run: async ({ page }) => {
    await page.goto("/admin/settings");
    await page.locator("#settings-stripe").waitFor();
  },
};
