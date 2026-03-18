import sharp from "sharp";
import { readdirSync } from "fs";
import { join } from "path";

const MARGIN = 24;
const SCREENSHOTS_DIR = join(import.meta.dirname, "..", "images", "screenshots");

const isNonWhite = (buf, idx) =>
  buf[idx] < 250 || buf[idx + 1] < 250 || buf[idx + 2] < 250;

const findContentTop = async (filePath, width, height) => {
  const chunkSize = 20;
  for (let y = 0; y < height; y += chunkSize) {
    const rowH = Math.min(chunkSize, height - y);
    const buf = await sharp(filePath)
      .extract({ left: 0, top: y, width, height: rowH })
      .raw()
      .toBuffer();
    for (let row = 0; row < rowH; row++) {
      for (let x = 0; x < width; x++) {
        if (isNonWhite(buf, (row * width + x) * 3)) return y + row;
      }
    }
  }
  return 0;
};

const findContentBottom = async (filePath, width, height) => {
  const chunkSize = 20;
  for (let y = height - chunkSize; y >= 0; y -= chunkSize) {
    const rowH = Math.min(chunkSize, height - y);
    const buf = await sharp(filePath)
      .extract({ left: 0, top: y, width, height: rowH })
      .raw()
      .toBuffer();
    for (let row = rowH - 1; row >= 0; row--) {
      for (let x = 0; x < width; x++) {
        if (isNonWhite(buf, (row * width + x) * 3)) return y + row + 1;
      }
    }
  }
  return height;
};

const trimImage = async (filePath) => {
  const image = sharp(filePath);
  const { width, height } = await image.metadata();

  const contentTop = await findContentTop(filePath, width, height);
  const contentBottom = await findContentBottom(filePath, width, height);
  const top = Math.max(0, contentTop - MARGIN);
  const bottom = Math.min(height, contentBottom + MARGIN);
  const cropH = bottom - top;

  if (cropH >= height) {
    console.log(`  skip ${filePath} (no whitespace to trim)`);
    return;
  }

  await sharp(filePath)
    .extract({ left: 0, top, width, height: cropH })
    .toFile(filePath.replace(".png", ".trimmed.png"));

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
