import { createTicket, setupJourneyCss } from "./_setup-journey.js";

export default {
  css: setupJourneyCss("ticket"),
  elementSelector: "main",
  name: "setup-journey-ticket",
  run: async (context) => {
    await context.page.goto(await createTicket(context));
    await context.page.locator(".ticket-card").waitFor();
  },
};
