import { join } from "node:path";
import {
  ASSET_PROFILES,
  EVIDENCE_MAPPING_PATH,
  EVIDENCE_SCHEMA_VERSION,
  VISIBILITY_POLICIES,
} from "./constants.js";
import {
  enumAt,
  exactKeys,
  idAt,
  readJson,
  recordAt,
  safeRelativePathAt,
  stringAt,
  uniqueBy,
} from "./validation.js";

const MAPPING_FIELDS = [
  "page",
  "legacyDestinationPath",
  "assetProfile",
  "caseId",
  "summary",
  "alt",
  "caption",
  "socialKey",
  "visibility",
];

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
  stringAt(value.summary, `${location}.summary`);
  stringAt(value.alt, `${location}.alt`);
  stringAt(value.caption, `${location}.caption`);
  idAt(value.socialKey, `${location}.socialKey`, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  enumAt(value.visibility, VISIBILITY_POLICIES, `${location}.visibility`);
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

const validatePagePlacement = async (root, captureId, mapping) => {
  const content = await Bun.file(join(root, mapping.page)).text();
  if (!content.includes(`ticket_evidence_capture: ${captureId}`)) {
    throw new Error(
      `${mapping.page}: does not select evidence capture ${captureId}`,
    );
  }
  if (!content.includes("file: ticket-evidence.html")) {
    throw new Error(
      `${mapping.page}: does not render the ticket evidence component`,
    );
  }
};

export const validateMappingPlacements = async (root, mapping) => {
  await Promise.all(
    Object.entries(mapping.captures).map(([captureId, placement]) =>
      validatePagePlacement(root, captureId, placement),
    ),
  );
};
