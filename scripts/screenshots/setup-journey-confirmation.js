import { createTicket, setupJourneyCss } from "./_setup-journey.js";

export default {
  css: setupJourneyCss("confirmation"),
  elementSelector: "main",
  name: "setup-journey-confirmation",
  run: async (context) => {
    const ticketPath = await createTicket(context);
    const token = ticketPath.replace(/^\/t\//, "");
    await context.page.goto(
      `/payment/success?tokens=${encodeURIComponent(token)}`,
    );
    await context.page.getByText("Thank you for your order.").waitFor();
  },
};
