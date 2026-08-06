import { fillSetup, setupJourneyCss } from "./_setup-journey.js";

export default {
  adminSetup: false,
  css: setupJourneyCss("ready"),
  elementSelector: "main",
  name: "setup-journey-ready",
  run: async (context) => {
    await fillSetup(context);
    await context.submit('form[action="/setup/"]');
    await context.page.getByText("Setup complete").waitFor();
  },
};
