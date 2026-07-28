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

/**
 * Where the story being complained about lives. A rejected import must send
 * the reader to the artifact it rejected: reviewing the committed data would
 * show the old story and re-record the digest that already fails.
 */
export const committedSource = "";
/** Quoted so a path with spaces still copies into a working command. */
const shellArgument = (value) =>
  /^[\w./-]+$/.test(value) ? value : `'${value.replaceAll("'", "'\\''")}'`;

export const artifactSource = (artifactDir) =>
  ` --from ${shellArgument(artifactDir)}`;

export const describeDrift = (
  { captureId, digest },
  source = committedSource,
) =>
  `${captureId}: the app's story changed since the site's words were last read. ` +
  `Run "bun run evidence:review ${captureId}${source}", update the words the ` +
  "mapping holds if they no longer match, then record the new story with " +
  `"bun run evidence:review ${captureId}${source} --accept" ` +
  `(reviewedNarrative ${digest}).`;
