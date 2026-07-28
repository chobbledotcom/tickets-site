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

/** The site's own words about a capture: the five the mapping holds, and the
 * prose the page prints beside the screenshot. */
const WORD_FIELDS = [
  "alt",
  "caption",
  "galleryCaption",
  "socialBody",
  "socialHeading",
];

const wordsOf = (placement) =>
  Object.fromEntries(WORD_FIELDS.map((field) => [field, placement[field]]));

/**
 * What a person signs off: the app's story, and the words the site writes
 * about it. Either changing means the pair has not been read together, so a
 * reworded caption needs the same second look as a reworded rule.
 */
export const reviewDigest = (capture, placement, prose = null) =>
  sha256(
    new TextEncoder().encode(
      serialise({
        narrative: narrativeOf(capture),
        prose,
        words: wordsOf(placement),
      }),
    ),
  );

export const narrativeDrift = (captureId, capture, placement, prose = null) => {
  const digest = reviewDigest(capture, placement, prose);
  return digest === placement.reviewed
    ? null
    : {
        captureId,
        digest,
        reviewed: placement.reviewed,
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
  `${captureId}: the story and the site's words about it have not been read ` +
  "together since one of them changed. " +
  `Run "bun run evidence:review ${captureId}${source}", update the words the ` +
  "mapping holds if they no longer match, then record the new story with " +
  `"bun run evidence:review ${captureId}${source} --accept" ` +
  `(reviewed ${digest}).`;
