import { CHOBBLEFEST_SLIDES } from "../chobblefest-slides.js";
import { fs, path, run } from "../utils.js";

export const VIDEO_BUILD_DIRECTORY = path(".video-build");
export const VIDEO_SCREENSHOTS_DIRECTORY = path(
  ".video-build",
  "images",
  "screenshots",
);

const requireSuccess = (command) => {
  const { exitCode } = run(command);
  if (exitCode !== 0) {
    throw new Error(`Video asset capture failed with exit code ${exitCode}.`);
  }
};

export const removeVideoAssets = () => fs.rm(VIDEO_BUILD_DIRECTORY);

export const captureVideoAssets = () => {
  removeVideoAssets();
  fs.mkdir(VIDEO_SCREENSHOTS_DIRECTORY);
  requireSuccess([
    "bun",
    "scripts/screenshot-scenarios.js",
    ...CHOBBLEFEST_SLIDES.map(({ source }) => source),
    "--no-social",
    "--layers",
    "--output",
    VIDEO_SCREENSHOTS_DIRECTORY,
  ]);
};

export const withVideoAssets = (callback) => {
  captureVideoAssets();
  try {
    return callback();
  } finally {
    removeVideoAssets();
  }
};
