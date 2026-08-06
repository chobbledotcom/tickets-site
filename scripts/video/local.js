import { run } from "../utils.js";
import {
  videoForRemotionArguments,
  videoSources,
  withVideoAssets,
} from "./assets.js";

const remotionArguments = process.argv.slice(2);
const selectedSources = ["render", "still"].includes(remotionArguments[0])
  ? videoSources(videoForRemotionArguments(remotionArguments))
  : undefined;
withVideoAssets(() => {
  const { exitCode } = run(["bunx", "remotion", ...remotionArguments]);
  if (exitCode !== 0) {
    throw new Error(
      `Local Remotion command failed with exit code ${exitCode}.`,
    );
  }
}, selectedSources);
