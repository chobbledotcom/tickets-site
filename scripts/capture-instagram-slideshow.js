#!/usr/bin/env bun

import { CHOBBLEFEST_SLIDES } from "./chobblefest-slides.js";
import { createInstagramSlideshow } from "./create-instagram-slideshow.js";
import { root } from "./utils.js";

const scenarioNames = CHOBBLEFEST_SLIDES.map(({ source }) => source);
const process = Bun.spawn(
  [
    "bun",
    "scripts/screenshot-scenarios.js",
    ...scenarioNames,
    "--no-social",
    "--layers",
  ],
  {
    cwd: root,
    stdio: ["inherit", "inherit", "inherit"],
  },
);

const exitCode = await process.exited;
if (exitCode !== 0) {
  throw new Error(`ChobbleFest capture exited with code ${exitCode}.`);
}

await createInstagramSlideshow();
