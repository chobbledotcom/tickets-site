import { fillSetup, setupJourneyCss } from "./_setup-journey.js";

export default {
  adminSetup: false,
  css: setupJourneyCss("setup"),
  elementSelector: "main",
  name: "setup-journey-setup",
  run: fillSetup,
};
