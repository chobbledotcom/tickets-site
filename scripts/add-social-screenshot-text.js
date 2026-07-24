#!/usr/bin/env bun

import { join } from "node:path";
import { renderSocialScreenshotText } from "./render-social-screenshot-text.js";
import { SOCIAL_SCREENSHOT_COPY } from "./social-screenshot-copy.js";
import { path } from "./utils.js";

const SCREENSHOTS_DIR = path("images", "screenshots");

const main = async () => {
  const requested = process.argv.slice(2);
  const scenarioNames =
    requested.length > 0 ? requested : Object.keys(SOCIAL_SCREENSHOT_COPY);

  for (const scenarioName of scenarioNames) {
    const { default: scenario } = await import(
      `./screenshots/${scenarioName}.js`
    );
    const filePath = join(
      SCREENSHOTS_DIR,
      `${scenario.name}__facebook.png`,
    );
    const { solidWidth } = await renderSocialScreenshotText(
      filePath,
      scenarioName,
      scenario.css,
    );
    console.log(`${scenario.name}: added text in ${solidWidth}px solid region`);
  }
};

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
