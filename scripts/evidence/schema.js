import {
  ASSET_PROFILES,
  EVIDENCE_REPOSITORY,
  EVIDENCE_SCHEMA_VERSION,
  PRESENTATIONS,
  STEP_KEYWORDS,
} from "./constants.js";
import {
  arrayAt,
  commitAt,
  enumAt,
  exactKeys,
  idAt,
  positiveIntegerAt,
  positiveNumberAt,
  safeRelativePathAt,
  sha256At,
  stringAt,
  uniqueBy,
} from "./validation.js";

/**
 * @typedef {{width: number, height: number, deviceScaleFactor: number}} EvidenceViewport
 * @typedef {{profile: "mobile", path: string, sha256: string, width: number, height: number, mediaType: "image/png", viewport: EvidenceViewport}} EvidenceAsset
 * @typedef {{id: string, name: string, description: string}} EvidenceNamedPart
 * @typedef {{id: string, name: string}} EvidenceCase
 * @typedef {{keyword: "Given" | "When" | "Then" | "And" | "But", text: string}} EvidenceStep
 * @typedef {{id: string, story: EvidenceNamedPart, rule: EvidenceNamedPart, case: EvidenceCase, steps: EvidenceStep[], presentation: "canonical" | "branded" | "editorial", assets: EvidenceAsset[]}} EvidenceCapture
 * @typedef {{schemaVersion: 2, app: {repository: "chobbledotcom/tickets", commit: string}, captures: EvidenceCapture[]}} EvidenceManifest
 */

const validateNamedPart = (value, location, extraKeys = []) => {
  exactKeys(value, ["id", "name", "description", ...extraKeys], location);
  idAt(value.id, `${location}.id`);
  stringAt(value.name, `${location}.name`);
  stringAt(value.description, `${location}.description`);
  return value;
};

/** A story says which Feature it was authored in. The site builds its source
 * link from this rather than writing the path out again. */
/** The same path with any percent-encoding resolved. A segment written as
 * "%2e%2e" is a dot segment once a browser reads it, so it is judged as one. */
const decodedPath = (value, location) => {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    throw new Error(`${location}: is not a readable path`, { cause: error });
  }
};

const validateStory = (value, location) => {
  validateNamedPart(value, location, ["uri"]);
  // A safe relative path, not just one that starts with specs/: a browser
  // normalises "specs/../../outside.feature" out of the Feature directory
  // altogether, which is how a link leaves the app's specs behind. The check
  // is made on what a browser will read, not only on what was written.
  const decoded = decodedPath(value.uri, `${location}.uri`);
  for (const path of [value.uri, decoded]) {
    safeRelativePathAt(path, `${location}.uri`);
    if (!path.startsWith("specs/") || !path.endsWith(".feature")) {
      throw new Error(`${location}.uri: must be a specs/<path>.feature path`);
    }
  }
  return value;
};

const validateCase = (value, location) => {
  exactKeys(value, ["id", "name"], location);
  idAt(value.id, `${location}.id`);
  stringAt(value.name, `${location}.name`);
  return value;
};

const validateStep = (value, location) => {
  exactKeys(value, ["keyword", "text"], location);
  enumAt(value.keyword, STEP_KEYWORDS, `${location}.keyword`);
  stringAt(value.text, `${location}.text`);
  return value;
};

export const validateViewport = (value, location) => {
  exactKeys(value, ["width", "height", "deviceScaleFactor"], location);
  positiveIntegerAt(value.width, `${location}.width`);
  positiveIntegerAt(value.height, `${location}.height`);
  positiveNumberAt(value.deviceScaleFactor, `${location}.deviceScaleFactor`);
  return value;
};

export const validateImageFields = (value, location, pathKey) => {
  enumAt(value.profile, ASSET_PROFILES, `${location}.profile`);
  safeRelativePathAt(value[pathKey], `${location}.${pathKey}`);
  sha256At(value.sha256, `${location}.sha256`);
  positiveIntegerAt(value.width, `${location}.width`);
  positiveIntegerAt(value.height, `${location}.height`);
  if (value.mediaType !== "image/png") {
    throw new Error(`${location}.mediaType: must be image/png`);
  }
  validateViewport(value.viewport, `${location}.viewport`);
  return value;
};

const validateAsset = (value, location) => {
  exactKeys(
    value,
    ["profile", "path", "sha256", "width", "height", "mediaType", "viewport"],
    location,
  );
  validateImageFields(value, location, "path");
  if (!value.path.startsWith("assets/") || !value.path.endsWith(".png")) {
    throw new Error(`${location}.path: must be an assets/<name>.png path`);
  }
  return value;
};

export const validateNarrative = (value, location, extraKeys) => {
  exactKeys(
    value,
    ["id", "story", "rule", "case", "steps", "presentation", ...extraKeys],
    location,
  );
  idAt(value.id, `${location}.id`);
  validateStory(value.story, `${location}.story`);
  validateNamedPart(value.rule, `${location}.rule`);
  validateCase(value.case, `${location}.case`);
  const steps = arrayAt(value.steps, `${location}.steps`);
  if (steps.length === 0)
    throw new Error(`${location}.steps: must not be empty`);
  steps.map((step, index) => validateStep(step, `${location}.steps[${index}]`));
  enumAt(value.presentation, PRESENTATIONS, `${location}.presentation`);
  return value;
};

const validateCapture = (value, index) => {
  const location = `manifest.captures[${index}]`;
  validateNarrative(value, location, ["assets"]);
  const assets = arrayAt(value.assets, `${location}.assets`);
  if (assets.length === 0)
    throw new Error(`${location}.assets: must not be empty`);
  assets.map((asset, assetIndex) =>
    validateAsset(asset, `${location}.assets[${assetIndex}]`),
  );
  uniqueBy(assets, (asset) => asset.profile, `${location}.assets`);
  return value;
};

const validateApp = (value) => {
  exactKeys(value, ["repository", "commit"], "manifest.app");
  if (value.repository !== EVIDENCE_REPOSITORY) {
    throw new Error(`manifest.app.repository: must be ${EVIDENCE_REPOSITORY}`);
  }
  commitAt(value.commit, "manifest.app.commit");
  return value;
};

/** @param {unknown} value @returns {EvidenceManifest} */
export const validateEvidenceManifest = (value) => {
  exactKeys(value, ["schemaVersion", "app", "captures"], "manifest");
  if (value.schemaVersion !== EVIDENCE_SCHEMA_VERSION) {
    throw new Error(
      `manifest.schemaVersion: must be ${EVIDENCE_SCHEMA_VERSION}`,
    );
  }
  validateApp(value.app);
  const captures = arrayAt(value.captures, "manifest.captures");
  if (captures.length === 0)
    throw new Error("manifest.captures: must not be empty");
  captures.map(validateCapture);
  uniqueBy(captures, (capture) => capture.id, "manifest.captures");
  return /** @type {EvidenceManifest} */ (value);
};
