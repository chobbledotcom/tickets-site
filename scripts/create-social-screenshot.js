import { dirname } from "node:path";
import sharp from "sharp";
import { fs } from "./utils.js";

export const SOCIAL_TARGET_SIZES = {
  facebook: { height: 630, width: 1200 },
  "instagram-landscape": { height: 566, width: 1080 },
  "instagram-portrait": { height: 1350, width: 1080 },
  "instagram-square": { height: 1080, width: 1080 },
};

const noPadding = { bottom: 0, left: 0, right: 0, top: 0 };
const FACEBOOK_MINIMUM_SOLID_WIDTH = 480;

const planExtension = (source, target) => {
  const sourceRatio = source.width / source.height;
  const targetRatio = target.width / target.height;
  if (sourceRatio === targetRatio) {
    return { extend: noPadding, ...source };
  }
  if (sourceRatio < targetRatio) {
    const width = Math.round(source.height * targetRatio);
    return {
      extend: { ...noPadding, left: width - source.width },
      height: source.height,
      width,
    };
  }
  const height = Math.round(source.width / targetRatio);
  return {
    extend: { ...noPadding, bottom: height - source.height },
    height,
    width: source.width,
  };
};

const readBackground = async (inputPath) => {
  const { data, info } = await sharp(inputPath)
    .extract({ height: 1, left: 0, top: 0, width: 1 })
    .raw()
    .toBuffer({ resolveWithObject: true });
  return {
    alpha: info.channels === 4 ? data[3] / 255 : 1,
    b: data[2],
    g: data[1],
    r: data[0],
  };
};

const createConstrainedFacebookScreenshot = async (
  inputPath,
  outputPath,
  source,
  target,
  background,
) => {
  const maximumWidth = target.width - FACEBOOK_MINIMUM_SOLID_WIDTH;
  const scale = Math.min(
    maximumWidth / source.width,
    target.height / source.height,
  );
  const width = Math.round(source.width * scale);
  const height = Math.round(source.height * scale);
  const screenshot = await sharp(inputPath)
    .resize(width, height, { fit: "fill" })
    .png()
    .toBuffer();
  await sharp({
    create: {
      background,
      channels: 4,
      height: target.height,
      width: target.width,
    },
  })
    .composite([
      {
        input: screenshot,
        left: target.width - width,
        top: Math.round((target.height - height) / 2),
      },
    ])
    .png()
    .toFile(outputPath);
  return { solidWidth: target.width - width };
};

export const createSocialScreenshot = async (
  inputPath,
  outputPath,
  targetName,
) => {
  const target = SOCIAL_TARGET_SIZES[targetName];
  if (!target) throw new Error(`Unknown social target: ${targetName}`);
  const meta = await sharp(inputPath).metadata();
  const source = { height: meta.height, width: meta.width };
  const plan = planExtension(source, target);
  const background = await readBackground(inputPath);
  const solidWidth = Math.round((plan.extend.left * target.width) / plan.width);
  if (targetName === "facebook" && solidWidth < FACEBOOK_MINIMUM_SOLID_WIDTH) {
    return await createConstrainedFacebookScreenshot(
      inputPath,
      outputPath,
      source,
      target,
      background,
    );
  }
  const extended = await sharp(inputPath)
    .extend({ background, ...plan.extend })
    .png()
    .toBuffer();
  fs.mkdir(dirname(outputPath));
  await sharp(extended)
    .resize(target.width, target.height, { fit: "fill" })
    .png()
    .toFile(outputPath);
  return { solidWidth };
};
