import { unlinkSync } from "fs";
import { join } from "path";
import sharp from "sharp";

export const SCREENSHOTS_DIR = join(
  import.meta.dirname,
  "..",
  "images",
  "screenshots",
);

export const TRIM_MARGIN = 24;
const CHUNK_SIZE = 20;

const isNonWhite = (buffer, index) =>
  buffer[index] < 250 ||
  buffer[index + 1] < 250 ||
  buffer[index + 2] < 250;

const findContentEdge = async (filePath, width, height, fromBottom) => {
  const firstY = fromBottom ? height - CHUNK_SIZE : 0;
  const yStep = fromBottom ? -CHUNK_SIZE : CHUNK_SIZE;

  for (let y = firstY; fromBottom ? y >= 0 : y < height; y += yStep) {
    const rowHeight = Math.min(CHUNK_SIZE, height - y);
    const buffer = await sharp(filePath)
      .extract({ left: 0, top: y, width, height: rowHeight })
      .raw()
      .toBuffer();
    const firstRow = fromBottom ? rowHeight - 1 : 0;
    const rowStep = fromBottom ? -1 : 1;

    for (
      let row = firstRow;
      fromBottom ? row >= 0 : row < rowHeight;
      row += rowStep
    ) {
      for (let x = 0; x < width; x++) {
        if (isNonWhite(buffer, (row * width + x) * 3)) {
          return y + row + (fromBottom ? 1 : 0);
        }
      }
    }
  }

  return fromBottom ? height : 0;
};

export const trimScreenshot = async (filePath) => {
  const { width, height } = await sharp(filePath).metadata();
  const contentTop = await findContentEdge(filePath, width, height, false);
  const contentBottom = await findContentEdge(filePath, width, height, true);
  const top = Math.max(0, contentTop - TRIM_MARGIN);
  const bottom = Math.min(height, contentBottom + TRIM_MARGIN);
  const cropHeight = bottom - top;

  if (cropHeight >= height) return null;

  const temporaryPath = filePath.replace(".png", ".trimmed.png");
  await sharp(filePath)
    .extract({ left: 0, top, width, height: cropHeight })
    .toFile(temporaryPath);
  await sharp(temporaryPath).toFile(filePath);
  unlinkSync(temporaryPath);

  return {
    width,
    height,
    cropHeight,
    saved: Math.round((1 - cropHeight / height) * 100),
  };
};
