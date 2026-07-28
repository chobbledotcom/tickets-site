export const EVIDENCE_SCHEMA_VERSION = 2;

/** Where the app's Feature files are read on GitHub. The site links each
 * screenshot to its story from the uri the manifest carries, so a renamed
 * Feature cannot leave a dead link behind. */
export const FEATURE_SOURCE_PREFIX =
  "https://github.com/chobbledotcom/tickets/blob/main/";
export const EVIDENCE_REPOSITORY = "chobbledotcom/tickets";
export const EVIDENCE_MANIFEST = "manifest.json";
export const EVIDENCE_DATA_PATH = "_data/ticket_evidence.json";
export const EVIDENCE_LOCK_PATH = "_data/ticket_evidence_lock.json";
export const EVIDENCE_MAPPING_PATH = "_data/ticket_evidence_map.json";

export const PRESENTATIONS = ["canonical", "branded", "editorial"];
export const ASSET_PROFILES = ["mobile"];
export const STEP_KEYWORDS = ["Given", "When", "Then", "And", "But"];
