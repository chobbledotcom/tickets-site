#!/usr/bin/env bun

import { join } from "node:path";
import { CHOBBLEFEST_SLIDES, slideCss } from "./chobblefest-slides.js";
import { createSocialScreenshot } from "./create-social-screenshot.js";
import { renderInstagramScreenshotText } from "./render-social-screenshot-text.js";
import { fs, path } from "./utils.js";

const OUTPUT_DIRECTORY = path("images", "instagram", "chobblefest");
const SCREENSHOTS_DIRECTORY = path("images", "screenshots");

const renderSlide = async (slide, index) => {
  const number = String(index + 1).padStart(2, "0");
  const inputPath = join(SCREENSHOTS_DIRECTORY, `${slide.source}.png`);
  if (!(await Bun.file(inputPath).exists())) {
    throw new Error(`Capture the real app screenshot first: ${inputPath}`);
  }
  const outputPath = join(OUTPUT_DIRECTORY, `${number}-${slide.slug}.png`);
  await createSocialScreenshot(inputPath, outputPath, "instagram-square");
  await renderInstagramScreenshotText(
    outputPath,
    slide.source,
    slideCss(slide),
    {
      address: `tickets.chobble.com  ${number}/10`,
      body: slide.body,
      heading: slide.heading,
    },
  );
  console.log(`${number}/10 ${slide.slug}`);
};

export const createInstagramSlideshow = async () => {
  fs.mkdir(OUTPUT_DIRECTORY);
  for (const [index, slide] of CHOBBLEFEST_SLIDES.entries()) {
    await renderSlide(slide, index);
  }
};

if (import.meta.main) {
  createInstagramSlideshow().catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
}
