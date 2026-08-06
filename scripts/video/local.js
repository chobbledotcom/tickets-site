import { run } from "../utils.js";
import { withVideoAssets } from "./assets.js";

withVideoAssets(() => {
  const { exitCode } = run(["bunx", "remotion", ...process.argv.slice(2)]);
  if (exitCode !== 0) {
    throw new Error(
      `Local Remotion command failed with exit code ${exitCode}.`,
    );
  }
});
