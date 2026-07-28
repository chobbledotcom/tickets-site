import { serialise } from "./serialise.js";
import { sha256 } from "./validation.js";

/**
 * The part of an imported capture that says what the app does: the story, the
 * rule, the case and its steps. The image, its bytes and its placement are not
 * part of it - a re-run that produces new pixels for the same story is not a
 * change anyone needs to read.
 */
const NARRATIVE_FIELDS = ["case", "presentation", "rule", "steps", "story"];

export const narrativeOf = (capture) =>
  Object.fromEntries(NARRATIVE_FIELDS.map((field) => [field, capture[field]]));

/** The digest a person records in the mapping once they have read the story
 * and written the site's words about it. */
export const narrativeDigest = (capture) =>
  sha256(new TextEncoder().encode(serialise(narrativeOf(capture))));

export const narrativeDrift = (captureId, capture, mapping) => {
  const digest = narrativeDigest(capture);
  return digest === mapping.reviewedNarrative
    ? null
    : {
        captureId,
        digest,
        reviewed: mapping.reviewedNarrative,
      };
};

export const describeDrift = ({ captureId, digest }) =>
  `${captureId}: the app's story changed since the site's words were last read. ` +
  `Run "bun run evidence:review ${captureId}", update the words the mapping holds ` +
  "if they no longer match, then record the new story with " +
  `"bun run evidence:review ${captureId} --accept" (reviewedNarrative ${digest}).`;
