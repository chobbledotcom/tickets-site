import sharp from "sharp";
import { readdirSync } from "fs";
import { join } from "path";

const MARGIN = 24;
const SCREENSHOTS_DIR = join(import.meta.dirname, "..", "images", "screenshots");

const findContentBottom = async (filePath, width, height) => {
  // Scan rows from bottom up to find last row with non-white pixels
  // Check in chunks for efficiency
  const chunkSize = 20;
  for (let y = height - chunkSize; y >= 0; y -= chunkSize) {
    const rowH = Math.min(chunkSize, height - y);
    const buf = await sharp(filePath)
      .extract({ left: 0, top: y, width, height: rowH })
      .raw()
      .toBuffer();
    // Check each row in chunk (bottom to top)
    for (let row = rowH - 1; row >= 0; row--) {
      for (let x = 0; x < width; x++) {
        const idx = (row * width + x) * 3;
        // Non-white pixel (allow threshold of 250 for anti-aliasing)
        if (buf[idx] < 250 || buf[idx + 1] < 250 || buf[idx + 2] < 250) {
          return y + row + 1;
        }
      }
    }
  }
  return height;
};

const trimImage = async (filePath) => {
  const image = sharp(filePath);
  const { width, height } = await image.metadata();

  // Scan from bottom to find actual content edge
  const contentBottom = await findContentBottom(filePath, width, height);
  const cropH = Math.min(height, contentBottom + MARGIN);

  // Only crop if we're actually saving space
  if (cropH >= height) {
    console.log(`  skip ${filePath} (no whitespace to trim)`);
    return;
  }

  await sharp(filePath)
    .extract({ left: 0, top: 0, width, height: cropH })
    .toFile(filePath.replace(".png", ".trimmed.png"));

  // Overwrite original with trimmed version
  await sharp(filePath.replace(".png", ".trimmed.png")).toFile(filePath);

  const { unlinkSync } = await import("fs");
  unlinkSync(filePath.replace(".png", ".trimmed.png"));

  const saved = Math.round((1 - cropH / height) * 100);
  console.log(
    `  trim ${filePath.split("/").pop()} ${width}x${height} -> ${width}x${cropH} (${saved}% shorter)`,
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
