import { setupJourneyCss } from "./_setup-journey.js";

export default {
  css: setupJourneyCss("email"),
  fullPage: true,
  name: "setup-journey-email",
  run: async ({ page }) => {
    await page.setContent(`
      <main style="font-family:Arial,sans-serif;margin:32px;padding:36px;border:1px solid #aaa;border-radius:12px;background:#fff;color:#282032">
        <p style="color:#666">From: Chobble Tickets &lt;hello@chobble.com&gt;</p>
        <h1>Your new site is ready</h1>
        <p>Your new site is ready.</p>
        <p>Visit the setup link below to activate your site:</p>
        <p><strong>Chobble Tickets managed hosting:</strong></p>
        <p><a href="https://folk-club.tix.chobble.com/setup/">https://folk-club.tix.chobble.com/setup/</a></p>
      </main>
    `);
  },
};
