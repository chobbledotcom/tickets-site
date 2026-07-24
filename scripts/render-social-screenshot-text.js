import { resolve } from "node:path";
import sharp from "sharp";
import { SOCIAL_SCREENSHOT_COPY } from "./social-screenshot-copy.js";

const EDGE_TOLERANCE = 4;
const VERTICAL_PADDING = 54;
const HEADING_FONT = "Marcellus";
const BODY_FONT = "Noto Sans";
const MINIMUM_CONTRAST = 4.5;
const HEADING_FONT_FILE = resolve(
  import.meta.dirname,
  "..",
  "assets",
  "fonts",
  "marcellus-latin-400-normal.ttf",
);

const escapeMarkup = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const colourFrom = (css, property, fallback = null) =>
  css.match(new RegExp(`${property}\\s*:\\s*(#[0-9a-fA-F]{3,8})`))?.[1] ??
  fallback;

const isDark = ([red, green, blue]) =>
  (red * 299 + green * 587 + blue * 114) / 1000 < 128;

const rgbFromHex = (hex) => {
  const value = hex.slice(1);
  const expanded =
    value.length === 3
      ? value
          .split("")
          .map((character) => `${character}${character}`)
          .join("")
      : value;
  return [0, 2, 4].map((offset) =>
    Number.parseInt(expanded.slice(offset, offset + 2), 16),
  );
};

const luminance = (colour) => {
  const [red, green, blue] = colour.map((channel) => {
    const value = channel / 255;
    return value <= 0.04045
      ? value / 12.92
      : ((value + 0.055) / 1.055) ** 2.4;
  });
  return red * 0.2126 + green * 0.7152 + blue * 0.0722;
};

export const contrastRatio = (first, second) => {
  const light = Math.max(luminance(first), luminance(second));
  const dark = Math.min(luminance(first), luminance(second));
  return (light + 0.05) / (dark + 0.05);
};

const readableColour = (preferred, alternatives, background) => {
  if (contrastRatio(rgbFromHex(preferred), background) >= MINIMUM_CONTRAST) {
    return preferred;
  }
  const candidates = [preferred, ...alternatives].filter(Boolean);
  return candidates.reduce((best, candidate) =>
    contrastRatio(rgbFromHex(candidate), background) >
    contrastRatio(rgbFromHex(best), background)
      ? candidate
      : best,
  );
};

const differsFrom = (data, index, background) =>
  Math.abs(data[index] - background[0]) > EDGE_TOLERANCE ||
  Math.abs(data[index + 1] - background[1]) > EDGE_TOLERANCE ||
  Math.abs(data[index + 2] - background[2]) > EDGE_TOLERANCE;

export const findSolidRegionWidth = ({ data, height, width }) => {
  const channels = data.length / (width * height);
  const background = [data[0], data[1], data[2]];
  const requiredDifferences = Math.round(height * 0.6);
  const firstColumn = Math.round(width * 0.25);

  for (let x = firstColumn; x < width; x++) {
    let differences = 0;
    for (let y = 0; y < height; y++) {
      const index = (y * width + x) * channels;
      if (differsFrom(data, index, background)) differences++;
      if (differences >= requiredDifferences) return x;
    }
  }

  throw new Error("Could not find the edge of the solid background.");
};

const textMarkup = ({ body, bodyColour, heading, headingColour }) =>
  `<span font_family="${HEADING_FONT}" size="160%" foreground="${headingColour}">${escapeMarkup(heading)}</span>

<span font_family="${BODY_FONT}" foreground="${bodyColour}">${escapeMarkup(body)}

<b>tickets.chobble.com</b></span>`;

export const renderSocialScreenshotText = async (
  filePath,
  scenarioName,
  scenarioCss = "",
) => {
  const copy = SOCIAL_SCREENSHOT_COPY[scenarioName];
  if (!copy) throw new Error(`No social copy is defined for ${scenarioName}.`);

  const image = sharp(filePath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const solidWidth = findSolidRegionWidth({ data, ...info });
  const background = [data[0], data[1], data[2]];
  const darkBackground = isDark(background);
  const contrastFallback = darkBackground ? "#f6f5f4" : "#241a30";
  const textColour = colourFrom(scenarioCss, "--color-text", contrastFallback);
  const secondaryColour = colourFrom(
    scenarioCss,
    "--color-secondary",
    contrastFallback,
  );
  const linkColour = colourFrom(scenarioCss, "--color-link");
  const accentColour = colourFrom(scenarioCss, "--color-accent");
  const headingColour = readableColour(
    secondaryColour,
    [linkColour, accentColour, textColour, contrastFallback],
    background,
  );
  const bodyColour = readableColour(
    textColour,
    [linkColour, secondaryColour, contrastFallback],
    background,
  );
  const horizontalPadding = Math.min(
    64,
    Math.max(24, Math.round(solidWidth * 0.06)),
  );
  const width = solidWidth - horizontalPadding * 2;
  const height = info.height - VERTICAL_PADDING * 2;
  if (width <= 0 || height <= 0) {
    throw new Error(`The solid region in ${filePath} is too small for text.`);
  }

  const text = await sharp({
    text: {
      align: "left",
      font: BODY_FONT,
      fontfile: HEADING_FONT_FILE,
      height,
      rgba: true,
      text: textMarkup({
        ...copy,
        bodyColour,
        headingColour,
      }),
      width,
    },
  })
    .png()
    .toBuffer();
  const clearedBackground = await sharp({
    create: {
      background: {
        b: background[2],
        g: background[1],
        r: background[0],
      },
      channels: 3,
      height: info.height,
      width: solidWidth,
    },
  })
    .png()
    .toBuffer();

  await image
    .composite([
      { input: clearedBackground, left: 0, top: 0 },
      { input: text, left: horizontalPadding, top: VERTICAL_PADDING },
    ])
    .png()
    .toFile(`${filePath}.with-text.png`);
  await sharp(`${filePath}.with-text.png`).toFile(filePath);
  await Bun.file(`${filePath}.with-text.png`).delete();

  return { height, solidWidth, width };
};
