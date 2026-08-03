#!/usr/bin/env bun

import { basename, extname, join } from "node:path";
import { createSocialScreenshot } from "./create-social-screenshot.js";
import { loadEvidenceMapping } from "./evidence/mapping.js";
import { EVIDENCE_SOCIAL_CSS } from "./evidence/social.js";
import {
  renderInstagramScreenshotText,
  renderSocialScreenshotText,
} from "./render-social-screenshot-text.js";
import { SOCIAL_SCREENSHOT_COPY } from "./social-screenshot-copy.js";
import { path, root } from "./utils.js";

const SCREENSHOTS_DIR = path("images", "screenshots");
const SOCIAL_TARGETS = new Set(["facebook", "instagram-square"]);

const parseArgs = (args) => {
  const optionIndex = args.indexOf("--social");
  if (optionIndex === -1) return { requested: args, target: "facebook" };
  const target = args[optionIndex + 1];
  if (!target) throw new Error("--social needs a value");
  if (!SOCIAL_TARGETS.has(target)) {
    throw new Error(`Text overlays are not available for ${target}.`);
  }
  return {
    requested: args.filter(
      (_, index) => !(index === optionIndex || index === optionIndex + 1),
    ),
    target,
  };
};

const linkedScenario = (mapping, scenarioName) => {
  const capture = Object.values(mapping.captures).find(
    ({ socialKey }) => socialKey === scenarioName,
  );
  if (!capture) return null;
  const fileName = basename(capture.legacyDestinationPath);
  return {
    css: EVIDENCE_SOCIAL_CSS[scenarioName] ?? "",
    name: fileName.slice(0, -extname(fileName).length),
  };
};

const loadScenario = async (mapping, scenarioName) => {
  const linked = linkedScenario(mapping, scenarioName);
  if (linked) return linked;
  const { default: scenario } = await import(
    `./screenshots/${scenarioName}.js`
  );
  return scenario;
};

const main = async () => {
  const { requested, target } = parseArgs(process.argv.slice(2));
  const scenarioNames =
    requested.length > 0 ? requested : Object.keys(SOCIAL_SCREENSHOT_COPY);
  const mapping = await loadEvidenceMapping(root);

  for (const scenarioName of scenarioNames) {
    const scenario = await loadScenario(mapping, scenarioName);
    const inputPath = join(SCREENSHOTS_DIR, `${scenario.name}.png`);
    const filePath = join(SCREENSHOTS_DIR, `${scenario.name}__${target}.png`);
    const { solidWidth } = await createSocialScreenshot(
      inputPath,
      filePath,
      target,
    );
    if (target === "instagram-square") {
      await renderInstagramScreenshotText(filePath, scenarioName, scenario.css);
      console.log(`${scenario.name}: created Instagram square`);
    } else {
      await renderSocialScreenshotText(
        filePath,
        scenarioName,
        scenario.css,
        solidWidth,
      );
      console.log(
        `${scenario.name}: added text in ${solidWidth}px solid region`,
      );
    }
  }
};

main().catch((error) => {
  console.error(`Error: ${error.message}`);
  process.exit(1);
});
