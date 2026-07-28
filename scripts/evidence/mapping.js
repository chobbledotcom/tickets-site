import { join } from "node:path";
import {
  ASSET_PROFILES,
  EVIDENCE_MAPPING_PATH,
  EVIDENCE_SCHEMA_VERSION,
  FEATURE_SOURCE_PREFIX,
} from "./constants.js";
import {
  evidenceBlockFields,
  evidenceBlocks,
  figureSourceLine,
  imageMentions,
  socialImagePath,
} from "./copy.js";
import {
  enumAt,
  exactKeys,
  idAt,
  linkedFeaturePathAt,
  readJson,
  recordAt,
  safeRelativePathAt,
  sha256At,
  stringAt,
  uniqueBy,
} from "./validation.js";

const MAPPING_FIELDS = [
  "page",
  "legacyDestinationPath",
  "assetProfile",
  "caseId",
  "alt",
  "caption",
  "galleryCaption",
  "socialHeading",
  "socialBody",
  "socialKey",
  "reviewed",
];

/** Every sentence the site writes about the screenshot. The page, the gallery
 * and the social card repeat these words; scripts/evidence/copy.js fails when
 * a repeat drifts. */
const TEXT_FIELDS = [
  "alt",
  "caption",
  "galleryCaption",
  "socialHeading",
  "socialBody",
];

/**
 * One segment of a Feature path, encoded down to the characters a link is
 * allowed to carry.
 *
 * encodeURIComponent stops at the characters that are legal in a URI, but a
 * URI is not the only thing this string has to survive: it is written into a
 * single-quoted YAML scalar and read back by linkedFeaturePathAt, which
 * accepts unreserved characters and nothing else. The ones left over are
 * encoded here so the link the site writes is a link the site accepts.
 */
const encodeSegment = (segment) =>
  encodeURIComponent(segment).replaceAll(
    /[!'()*]/g,
    (character) =>
      `%${character.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")}`,
  );

/** The link a capture's caption carries, built from the Feature the story
 * says it was authored in. Nothing writes this path by hand, so a renamed
 * Feature cannot leave a dead link behind.
 *
 * Each segment is encoded on its own, so a name with a space or an accent
 * produces a working link and nothing in a segment can change the shape of
 * the URL. */
export const featureSourceUrl = (story) =>
  `${FEATURE_SOURCE_PREFIX}${story.uri
    .split("/")
    .map((segment) => encodeSegment(segment))
    .join("/")}`;

const validateCaptureMapping = (captureId, value) => {
  const location = `evidence mapping ${captureId}`;
  idAt(captureId, `${location}.id`);
  exactKeys(value, MAPPING_FIELDS, location);
  safeRelativePathAt(value.page, `${location}.page`);
  safeRelativePathAt(
    value.legacyDestinationPath,
    `${location}.legacyDestinationPath`,
  );
  if (!value.page.endsWith(".md"))
    throw new Error(`${location}.page: must be a Markdown file`);
  if (
    !value.legacyDestinationPath.startsWith("images/screenshots/") ||
    !value.legacyDestinationPath.endsWith(".png")
  ) {
    throw new Error(
      `${location}.legacyDestinationPath: must be an images/screenshots/<name>.png path`,
    );
  }
  enumAt(value.assetProfile, ASSET_PROFILES, `${location}.assetProfile`);
  idAt(value.caseId, `${location}.caseId`);
  for (const field of TEXT_FIELDS)
    stringAt(value[field], `${location}.${field}`);
  sha256At(value.reviewed, `${location}.reviewed`);
  idAt(value.socialKey, `${location}.socialKey`, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  return value;
};

export const validateEvidenceMapping = (value) => {
  exactKeys(value, ["schemaVersion", "captures"], "evidence mapping");
  if (value.schemaVersion !== EVIDENCE_SCHEMA_VERSION) {
    throw new Error(
      `evidence mapping schemaVersion: must be ${EVIDENCE_SCHEMA_VERSION}`,
    );
  }
  const entries = Object.entries(
    recordAt(value.captures, "evidence mapping captures"),
  );
  if (entries.length === 0)
    throw new Error("evidence mapping captures: must not be empty");
  entries.map(([captureId, mapping]) =>
    validateCaptureMapping(captureId, mapping),
  );
  uniqueBy(
    entries,
    ([, mapping]) => mapping.legacyDestinationPath,
    "evidence destinations",
  );
  uniqueBy(entries, ([, mapping]) => mapping.socialKey, "evidence social keys");
  // A page selects one capture in its frontmatter, so a second capture mapped
  // to it could never be placed. Said here rather than left to the placement
  // check, which would report it as a page that names no capture at all.
  uniqueBy(entries, ([, mapping]) => mapping.page, "evidence pages");
  return value;
};

export const loadEvidenceMapping = async (root) =>
  validateEvidenceMapping(
    await readJson(join(root, EVIDENCE_MAPPING_PATH), EVIDENCE_MAPPING_PATH),
  );

/** A caption's own words and the source link it must end with. A caption
 * without that link has no parts: the link is not optional, only its
 * destination waits for the first import. */
const captionParts = (caption) => {
  // One space before the link, because that is what the import writes when it
  // joins the mapping's words to the link. Accepting any spacing here would
  // pass a page before its first import that the import itself then refuses.
  const found = (caption ?? "").match(
    /^(.*[^\s]) <small><a href="([^"]*)">\(src\)<\/a><\/small>$/,
  );
  return found ? { href: found[2], text: found[1] } : null;
};

/** The caption line of the block showing one image, not of whatever block a
 * page happens to put first. A page may hold other figures with source links
 * of their own, and rewriting one of those would move the wrong link and leave
 * the capture's own link stale. */
const captionLineFor = (lines, imagePath) => {
  const isBlockStart = (line) => line.startsWith("  - type: ");
  // The same line the placement checks read, by the same rule: a line they
  // accept but this cannot see would leave the link unrewritten and refuse the
  // import they had just passed.
  const source = lines.findIndex((line) =>
    figureSourceLine(imagePath).test(line),
  );
  if (source === -1) return -1;
  const starts = lines.flatMap((line, at) => (isBlockStart(line) ? [at] : []));
  const start = starts.filter((at) => at < source).at(-1) ?? 0;
  const end = starts.find((at) => at > source) ?? lines.length;
  return lines.findIndex(
    (line, at) =>
      at > start &&
      at < end &&
      line.startsWith("    figure_caption: ") &&
      line.includes("(src)</a></small>"),
  );
};

/**
 * The page's source link, rewritten to the link the imported story builds.
 *
 * The link is derived, not authored: it is the one part of a caption nobody
 * writes by hand. Renaming a Feature in the app would otherwise leave the page
 * pointing at a path that no longer exists, and the unattended update workflow
 * would stop until a person edited the URL themselves. The caption's words are
 * left exactly as they were, so a rename cannot change what the page says.
 */
export const rewriteSourceLink = (content, mapping, sourceUrl) => {
  const fields = evidenceBlockFields(content, mapping.legacyDestinationPath);
  const parts = captionParts(fields?.caption);
  if (!parts || parts.href === sourceUrl) return content;
  const lines = content.split("\n");
  const index = captionLineFor(lines, mapping.legacyDestinationPath);
  if (index === -1) return content;
  // Replaced where it sits rather than searched for by value: a single-quoted
  // scalar doubles an apostrophe, so the href the line holds is not always the
  // href the caption reads as. Taken from the end of the line, where the
  // source link is: a caption's own words may link somewhere first, and may
  // even label that link "(src)", but only the last one is this one's to move.
  lines[index] = lines[index].replace(
    /<a href="[^"]*">\(src\)<\/a><\/small>('?)\s*$/,
    `<a href="${sourceUrl}">(src)</a></small>$1`,
  );
  return lines.join("\n");
};

/** The page shows the capture's screenshot once, in one evidence block, and
 * names its images nowhere else. */
const validateOnePlacement = (content, captureId, mapping) => {
  if (!content.includes(`ticket_evidence_capture: ${captureId}`)) {
    throw new Error(
      `${mapping.page}: does not select evidence capture ${captureId}`,
    );
  }
  if (!content.includes("type: split-image")) {
    throw new Error(
      `${mapping.page}: does not render the evidence as a split image`,
    );
  }
  const blocks = evidenceBlocks(content, mapping.legacyDestinationPath);
  if (blocks.length !== 1) {
    throw new Error(
      `${mapping.page}: shows /${mapping.legacyDestinationPath} in ${blocks.length} blocks, not one`,
    );
  }
  // Naming the image anywhere else on the page renders it again, and nothing
  // else looks at the mapped page.
  const mentions =
    imageMentions(content, mapping.legacyDestinationPath) +
    imageMentions(content, socialImagePath(mapping.legacyDestinationPath));
  if (mentions !== 1) {
    throw new Error(
      `${mapping.page}: names its images ${mentions} times, not once as the evidence block`,
    );
  }
};

/**
 * The page's words are the mapping's words, compared whole: a page that merely
 * contains them can still say something else as well. Before the first import
 * there is no story to say where the source link points, so that one
 * comparison waits and the rest are made anyway.
 */
const validatePageWords = (content, mapping, sourceUrl) => {
  const fields = evidenceBlockFields(content, mapping.legacyDestinationPath);
  const linkIsKnown = sourceUrl !== null;
  // A caption with no source link has no words to compare either, so say what
  // is actually wrong with it first.
  if (!linkIsKnown) validateSourceLinkShape(fields?.caption, mapping.page);
  const pairs = [
    ["alt", fields?.alt, mapping.alt],
    [
      "caption",
      linkIsKnown ? fields?.caption : captionParts(fields?.caption)?.text,
      linkIsKnown
        ? `${mapping.caption} <small><a href="${sourceUrl}">(src)</a></small>`
        : mapping.caption,
    ],
  ];
  for (const [name, actual, expected] of pairs) {
    if (actual !== expected) {
      throw new Error(
        `${mapping.page}: the evidence ${name} is "${actual}" but the mapping says "${expected}"`,
      );
    }
  }
};

/**
 * Before the first import the link's destination is unknown, but a caption
 * still has to carry a source link to a Feature: deferring the destination is
 * not the same as accepting a page with no link at all.
 */
const validateSourceLinkShape = (caption, page) => {
  const href = captionParts(caption)?.href;
  const featurePath = href?.startsWith(FEATURE_SOURCE_PREFIX)
    ? href.slice(FEATURE_SOURCE_PREFIX.length)
    : null;
  // The same judgement a story's own uri gets: a link that climbs out of
  // specs/, encoded or not, points at something else entirely.
  try {
    linkedFeaturePathAt(featurePath, "link");
  } catch {
    throw new Error(
      `${page}: the evidence caption's source link is "${href}", not a Feature under ${FEATURE_SOURCE_PREFIX}`,
    );
  }
};

/**
 * A mapped page as the import will leave it. An import that rewrites a source
 * link holds the new text in memory until every refusal point has passed, so
 * the checks read the staged text where there is one and the committed file
 * everywhere else.
 */
export const readStagedPage = async (root, page, staged) =>
  staged[page] ?? (await Bun.file(join(root, page)).text());

const validatePagePlacement = async (
  root,
  captureId,
  mapping,
  sourceUrl,
  staged,
) => {
  const content = await readStagedPage(root, mapping.page, staged);
  validateOnePlacement(content, captureId, mapping);
  validatePageWords(content, mapping, sourceUrl);
};

export const validateMappingPlacements = async (
  root,
  mapping,
  sourceUrls,
  staged = {},
) => {
  await Promise.all(
    Object.entries(mapping.captures).map(([captureId, placement]) =>
      validatePagePlacement(
        root,
        captureId,
        placement,
        sourceUrls[captureId],
        staged,
      ),
    ),
  );
};
