import { describe, expect, test } from "bun:test";
import {
  contrastRatio,
  findSolidRegionWidth,
} from "../scripts/render-social-screenshot-text.js";

const imageData = ({ channels = 3, edge, height, sparseColumn, width }) => {
  const data = Buffer.alloc(width * height * channels, 240);
  for (let y = 0; y < height; y++) {
    for (let x = edge; x < width; x++) {
      const index = (y * width + x) * channels;
      data[index] = 20;
      data[index + 1] = 40;
      data[index + 2] = 60;
      if (channels === 4) data[index + 3] = 255;
    }
  }
  if (sparseColumn !== undefined) {
    for (let y = 0; y < height / 4; y++) {
      const index = (y * width + sparseColumn) * channels;
      data[index] = 20;
    }
  }
  return data;
};

describe("findSolidRegionWidth", () => {
  test("finds the sustained edge of an RGB screenshot", () => {
    const image = { edge: 70, height: 50, width: 100 };

    expect(
      findSolidRegionWidth({
        data: imageData(image),
        height: image.height,
        width: image.width,
      }),
    ).toBe(image.edge);
  });

  test("ignores sparse text-like pixels in the solid region", () => {
    const image = { edge: 80, height: 100, sparseColumn: 40, width: 100 };

    expect(
      findSolidRegionWidth({
        data: imageData(image),
        height: image.height,
        width: image.width,
      }),
    ).toBe(image.edge);
  });

  test("supports RGBA images", () => {
    const image = { channels: 4, edge: 65, height: 50, width: 100 };

    expect(
      findSolidRegionWidth({
        data: imageData(image),
        height: image.height,
        width: image.width,
      }),
    ).toBe(image.edge);
  });
});

describe("contrastRatio", () => {
  test("reports maximum contrast for black and white", () => {
    expect(contrastRatio([0, 0, 0], [255, 255, 255])).toBe(21);
  });
});
