import { readdirSync } from "fs";
import { join } from "path";
import {
  SCREENSHOTS_DIR,
  TRIM_MARGIN,
  trimScreenshot,
} from "./screenshot-helpers.mjs";

const run = async () => {
  const files = readdirSync(SCREENSHOTS_DIR).filter((f) => f.endsWith(".png"));
  console.log(
    `Trimming ${files.length} screenshots (${TRIM_MARGIN}px margin)...`,
  );

  for (const file of files) {
    try {
      const filePath = join(SCREENSHOTS_DIR, file);
      const result = await trimScreenshot(filePath);
      if (!result) {
        console.log(`  skip ${filePath} (no whitespace to trim)`);
        continue;
      }
      const { width, height, cropHeight, saved } = result;
      console.log(
        `  trim ${file} ${width}x${height} -> ${width}x${cropHeight} (${saved}% shorter)`,
      );
    } catch (err) {
      console.log(`  error ${file}: ${err.message.slice(0, 80)}`);
    }
  }

  console.log("Done.");
};

run().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});
