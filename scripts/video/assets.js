import { fs, path, run } from "../utils.js";
import { CHOBBLEFEST_VIDEO, SOCIAL_VIDEOS } from "./scenes.js";

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

export const allVideoSources = () =>
  SOCIAL_VIDEOS.flatMap(({ scenes }) => scenes.map(({ source }) => source));

export const videoSources = (video) => video.scenes.map(({ source }) => source);

export const videoForRemotionArguments = (args) => {
  const requestedId = ["render", "still"].includes(args[0]) ? args[1] : null;
  if (!requestedId) return CHOBBLEFEST_VIDEO;
  const video = SOCIAL_VIDEOS.find(({ id }) => id === requestedId);
  if (!video) throw new Error(`Unknown video composition: ${requestedId}.`);
  return video;
};

export const captureVideoAssets = (sources = allVideoSources()) => {
  removeVideoAssets();
  fs.mkdir(VIDEO_SCREENSHOTS_DIRECTORY);
  requireSuccess([
    "bun",
    "scripts/screenshot-scenarios.js",
    ...sources,
    "--no-social",
    "--layers",
    "--output",
    VIDEO_SCREENSHOTS_DIRECTORY,
  ]);
};

export const withVideoAssets = (callback, sources) => {
  try {
    captureVideoAssets(sources);
    return callback();
  } finally {
    removeVideoAssets();
  }
};
