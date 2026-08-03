import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, test } from "bun:test";
import sharp from "sharp";
import { createSocialScreenshot } from "../scripts/create-social-screenshot.js";

const temporaryDirectories = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories.splice(0).map((directory) =>
      rm(directory, { force: true, recursive: true }),
    ),
  );
});

describe("createSocialScreenshot", () => {
  test("centres and fades an Instagram square screenshot", async () => {
    const directory = await mkdtemp(join(tmpdir(), "social-screenshot-"));
    temporaryDirectories.push(directory);
    const inputPath = join(directory, "input.png");
    const outputPath = join(directory, "output.png");
    await sharp({
      create: {
        background: { b: 240, g: 230, r: 220 },
        channels: 3,
        height: 200,
        width: 100,
      },
    })
      .composite([
        {
          input: {
            create: {
              background: { b: 30, g: 20, r: 10 },
              channels: 3,
              height: 100,
              width: 100,
            },
          },
          left: 0,
          top: 50,
        },
      ])
      .png()
      .toFile(inputPath);

    await createSocialScreenshot(
      inputPath,
      outputPath,
      "instagram-square",
    );

    const { data, info } = await sharp(outputPath)
      .raw()
      .toBuffer({ resolveWithObject: true });
    const pixel = (x, y) => {
      const index = (y * info.width + x) * info.channels;
      return [...data.subarray(index, index + 3)];
    };
    expect({ height: info.height, width: info.width }).toEqual({
      height: 1080,
      width: 1080,
    });
    expect(pixel(0, 0)).toEqual([220, 230, 240]);
    expect(pixel(540, 540)).toEqual([104, 114, 124]);
    expect(pixel(200, 540)).toEqual([220, 230, 240]);
  });
});
