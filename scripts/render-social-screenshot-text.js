import { resolve } from "node:path";
import sharp from "sharp";
import { SOCIAL_SCREENSHOT_COPY } from "./social-screenshot-copy.js";

const EDGE_TOLERANCE = 4;
const VERTICAL_PADDING = 54;
const HEADING_FONT = "Marcellus";
const BODY_FONT = "Noto Sans";
const MINIMUM_CONTRAST = 4.5;
const INSTAGRAM_SIZE = 1080;
const INSTAGRAM_TEXT_BACKGROUND_ALPHA = "b3";
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

const hexFromRgb = ([red, green, blue]) =>
  `#${[red, green, blue]
    .map((channel) => channel.toString(16).padStart(2, "0"))
    .join("")}`;

const luminance = (colour) => {
  const [red, green, blue] = colour.map((channel) => {
    const value = channel / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
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

const countColumnDifferences = (
  { channels, data, height, width },
  x,
  background,
  required,
) => {
  let differences = 0;
  for (let y = 0; y < height; y++) {
    const pixelIndex = (y * width + x) * channels;
    if (differsFrom(data, pixelIndex, background)) differences++;
    if (differences >= required) return differences;
  }
  return differences;
};

export const findSolidRegionWidth = ({ data, height, width }) => {
  const channels = data.length / (width * height);
  const background = [data[0], data[1], data[2]];
  const requiredDifferences = Math.round(height * 0.6);
  const firstColumn = Math.round(width * 0.25);

  for (let x = firstColumn; x < width; x++) {
    const image = { channels, data, height, width };
    if (
      countColumnDifferences(image, x, background, requiredDifferences) >=
      requiredDifferences
    )
      return x;
  }

  throw new Error("Could not find the edge of the solid background.");
};

const textMarkup = ({ body, bodyColour, heading, headingColour }) =>
  `<span font_family="${HEADING_FONT}" size="160%" foreground="${headingColour}">${escapeMarkup(heading)}</span>

<span font_family="${BODY_FONT}" foreground="${bodyColour}">${escapeMarkup(body)}

<b>tickets.chobble.com</b></span>`;

const instagramTextMarkup = ({ background, colour, font, size, text }) =>
  `<span font_family="${font}" size="${size}%" foreground="${colour}" background="${background}">${escapeMarkup(text)}</span>`;

const createInstagramTextLayer = async ({
  angle,
  background,
  colour,
  font,
  height,
  size,
  text,
  width,
}) =>
  await sharp({
    text: {
      align: "left",
      font,
      fontfile: HEADING_FONT_FILE,
      height,
      rgba: true,
      text: instagramTextMarkup({ background, colour, font, size, text }),
      width,
    },
  })
    .rotate(angle, { background: { alpha: 0, b: 0, g: 0, r: 0 } })
    .png()
    .toBuffer();

const loadRenderContext = async (filePath, scenarioName, chosenCopy) => {
  const copy = chosenCopy ?? SOCIAL_SCREENSHOT_COPY[scenarioName];
  if (!copy) throw new Error(`No social copy is defined for ${scenarioName}.`);
  const image = sharp(filePath);
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { copy, data, image, info };
};

const themeColours = (data, scenarioCss) => {
  const background = [data[0], data[1], data[2]];
  const contrastFallback = isDark(background) ? "#f6f5f4" : "#241a30";
  return {
    background,
    contrastFallback,
    secondaryColour: colourFrom(
      scenarioCss,
      "--color-secondary",
      contrastFallback,
    ),
    textColour: colourFrom(scenarioCss, "--color-text", contrastFallback),
  };
};

const replaceWithComposite = async (image, filePath, layers) => {
  const temporaryPath = `${filePath}.with-text.png`;
  await image.composite(layers).png().toFile(temporaryPath);
  await sharp(temporaryPath).toFile(filePath);
  await Bun.file(temporaryPath).delete();
};

export const renderInstagramScreenshotText = async (
  filePath,
  scenarioName,
  scenarioCss = "",
  chosenCopy,
) => {
  const { copy, data, image, info } = await loadRenderContext(
    filePath,
    scenarioName,
    chosenCopy,
  );
  if (info.width !== INSTAGRAM_SIZE || info.height !== INSTAGRAM_SIZE) {
    throw new Error(
      `Instagram square images must be ${INSTAGRAM_SIZE}px square.`,
    );
  }
  const { background, contrastFallback, secondaryColour, textColour } =
    themeColours(data, scenarioCss);
  const paperColour = `${hexFromRgb(background)}${INSTAGRAM_TEXT_BACKGROUND_ALPHA}`;
  const headingColour = readableColour(
    secondaryColour,
    [textColour, contrastFallback],
    background,
  );
  const bodyColour = readableColour(
    textColour,
    [secondaryColour, contrastFallback],
    background,
  );
  const heading = await createInstagramTextLayer({
    angle: -2.5,
    background: paperColour,
    colour: headingColour,
    font: HEADING_FONT,
    height: 350,
    size: 185,
    text: copy.heading,
    width: 900,
  });
  const body = await createInstagramTextLayer({
    angle: 1.5,
    background: paperColour,
    colour: bodyColour,
    font: BODY_FONT,
    height: 300,
    size: 105,
    text: copy.body,
    width: 760,
  });
  const address = await createInstagramTextLayer({
    angle: -1,
    background: paperColour,
    colour: bodyColour,
    font: BODY_FONT,
    height: 90,
    size: 115,
    text: "tickets.chobble.com",
    width: 520,
  });

  await replaceWithComposite(image, filePath, [
    { input: heading, left: 54, top: 60 },
    { input: body, left: 250, top: 520 },
    { input: address, left: 65, top: 940 },
  ]);
};

/** Evidence captures pass the copy their lock records, so the words drawn into
 * the card are the words attested by the import. Legacy scenarios look theirs
 * up by name. */
export const renderSocialScreenshotText = async (
  filePath,
  scenarioName,
  scenarioCss = "",
  knownSolidWidth,
  chosenCopy,
) => {
  const { copy, data, image, info } = await loadRenderContext(
    filePath,
    scenarioName,
    chosenCopy,
  );
  const solidWidth = knownSolidWidth ?? findSolidRegionWidth({ data, ...info });
  const { background, contrastFallback, secondaryColour, textColour } =
    themeColours(data, scenarioCss);
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

  await replaceWithComposite(image, filePath, [
    { input: clearedBackground, left: 0, top: 0 },
    { input: text, left: horizontalPadding, top: VERTICAL_PADDING },
  ]);

  return { height, solidWidth, width };
};
