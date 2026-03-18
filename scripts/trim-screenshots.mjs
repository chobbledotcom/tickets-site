import sharp from "sharp";
import { readdirSync } from "fs";
import { join } from "path";

const MARGIN = 24;
const SCREENSHOTS_DIR = join(import.meta.dirname, "..", "images", "screenshots");

const trimImage = async (filePath) => {
  const image = sharp(filePath);
  const { width, height } = await image.metadata();

  // Use sharp's trim to find the content bounding box
  const trimmed = sharp(filePath).trim();
  const trimInfo = await trimmed.toBuffer({ resolveWithObject: true });
  const { trimOffsetLeft, trimOffsetTop } = trimInfo.info;
  const contentW = trimInfo.info.width;
  const contentH = trimInfo.info.height;

  // Add margin around the trimmed content, clamped to original bounds
  const left = Math.max(0, trimOffsetLeft - MARGIN);
  const top = Math.max(0, trimOffsetTop - MARGIN);
  const right = Math.min(width, trimOffsetLeft + contentW + MARGIN);
  const bottom = Math.min(height, trimOffsetTop + contentH + MARGIN);

  const cropW = right - left;
  const cropH = bottom - top;

  // Only crop if we're actually saving space
  if (cropW >= width && cropH >= height) {
    console.log(`  skip ${filePath} (no whitespace to trim)`);
    return;
  }

  await sharp(filePath)
    .extract({ left, top, width: cropW, height: cropH })
    .toFile(filePath.replace(".png", ".trimmed.png"));

  // Overwrite original with trimmed version
  await sharp(filePath.replace(".png", ".trimmed.png")).toFile(filePath);

  const { unlinkSync } = await import("fs");
  unlinkSync(filePath.replace(".png", ".trimmed.png"));

  const saved = Math.round((1 - (cropW * cropH) / (width * height)) * 100);
  console.log(
    `  trim ${filePath.split("/").pop()} ${width}x${height} -> ${cropW}x${cropH} (${saved}% smaller)`,
  );
};

const run = async () => {
  const files = readdirSync(SCREENSHOTS_DIR).filter((f) => f.endsWith(".png"));
  console.log(`Trimming ${files.length} screenshots (${MARGIN}px margin)...`);

  for (const file of files) {
    try {
      await trimImage(join(SCREENSHOTS_DIR, file));
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
