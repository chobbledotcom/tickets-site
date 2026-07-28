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
  imageMentions,
  socialImagePath,
} from "./copy.js";
import {
  enumAt,
  exactKeys,
  idAt,
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

/** The link a capture's caption carries, built from the Feature the story
 * says it was authored in. Nothing writes this path by hand, so a renamed
 * Feature cannot leave a dead link behind. */
export const featureSourceUrl = (story) =>
  `${FEATURE_SOURCE_PREFIX}${story.uri}`;

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
  return value;
};

export const loadEvidenceMapping = async (root) =>
  validateEvidenceMapping(
    await readJson(join(root, EVIDENCE_MAPPING_PATH), EVIDENCE_MAPPING_PATH),
  );

const validatePagePlacement = async (root, captureId, mapping, sourceUrl) => {
  const content = await Bun.file(join(root, mapping.page)).text();
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
  // Whole values, not substrings: a page that merely contains the mapping's
  // words can still say something else as well.
  const fields = evidenceBlockFields(content, mapping.legacyDestinationPath);
  const expected = {
    alt: mapping.alt,
    caption: `${mapping.caption} <small><a href="${sourceUrl}">(src)</a></small>`,
  };
  for (const [name, value] of Object.entries(expected)) {
    if (fields?.[name] !== value) {
      throw new Error(
        `${mapping.page}: the evidence ${name} is "${fields?.[name]}" but the mapping says "${value}"`,
      );
    }
  }
};

export const validateMappingPlacements = async (root, mapping, sourceUrls) => {
  await Promise.all(
    Object.entries(mapping.captures).map(([captureId, placement]) =>
      validatePagePlacement(root, captureId, placement, sourceUrls[captureId]),
    ),
  );
};
