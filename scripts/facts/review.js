#!/usr/bin/env bun

/**
 * Put a social card's copy beside the facts that are supposed to back it, so
 * a person (or an LLM) can read them together and say whether the copy still
 * claims only what the facts establish.
 *
 *   bun run facts:review                   # every key
 *   bun run facts:review multi-day-hire
 *   bun run facts:review multi-day-hire --accept
 *
 * --accept records the pair that was read. Nothing else writes that digest:
 * accepting is the act of having read them together.
 *
 * The check this replaces asked only whether a key had some facts, which a
 * card could pass while claiming something none of them mention. Rewording a
 * card now costs the same second look as changing what the app does.
 */

import { join } from "node:path";
import { SOCIAL_IMAGE_FACTS } from "../../facts/social-images.js";
import { SOCIAL_SCREENSHOT_COPY } from "../social-screenshot-copy.js";
import { root } from "../utils.js";
import { factsDigest } from "./digest.js";

const FACTS_PATH = "facts/social-images.js";

const factLines = (facts) =>
  facts
    .map(
      (fact, index) =>
        `  ${index + 1}. ${fact.fact}\n` +
        `     audited at ${fact.audited.slice(0, 7)}\n` +
        fact.sources.map((source) => `     ${source}`).join("\n"),
    )
    .join("\n");

const statusLine = (key) =>
  factsDigest(SOCIAL_SCREENSHOT_COPY[key], SOCIAL_IMAGE_FACTS[key].facts) ===
  SOCIAL_IMAGE_FACTS[key].reviewed
    ? "Status: this copy and these facts were read together."
    : "Status: THE COPY OR THE FACTS HAVE CHANGED since they were last read\n" +
      "        together. Read them again, then re-run this command with " +
      `--accept to record ${factsDigest(SOCIAL_SCREENSHOT_COPY[key], SOCIAL_IMAGE_FACTS[key].facts)}.`;

const report = (key) =>
  [
    `## ${key}`,
    "",
    `Heading: ${SOCIAL_SCREENSHOT_COPY[key].heading}`,
    `Body: ${SOCIAL_SCREENSHOT_COPY[key].body}`,
    "",
    "Facts:",
    factLines(SOCIAL_IMAGE_FACTS[key].facts),
    "",
    statusLine(key),
    "",
  ].join("\n");

/**
 * The digest is written into the facts file itself rather than a lock beside
 * it, so a reader who opens the facts sees whether they have been read against
 * the copy without going looking for a second file.
 */
const accept = async (key) => {
  const path = join(root, FACTS_PATH);
  const text = await Bun.file(path).text();
  const digest = factsDigest(
    SOCIAL_SCREENSHOT_COPY[key],
    SOCIAL_IMAGE_FACTS[key].facts,
  );
  if (SOCIAL_IMAGE_FACTS[key].reviewed === digest) {
    console.log(
      `Nothing to record: ${key} already holds this pair (${digest}).`,
    );
    return;
  }
  // A key that is a bare identifier is written without quotes, so both forms
  // have to be found: the file is the record, and a key it cannot locate would
  // silently leave the pair unrecorded.
  const marker = new RegExp(
    `("?${key}"?: \\{\\n    reviewed: )"[a-f0-9]*"`,
    "u",
  );
  if (!marker.test(text)) {
    throw new Error(`Could not find the reviewed line for ${key}`);
  }
  await Bun.write(path, text.replace(marker, `$1"${digest}"`));
  console.log(`Recorded ${key} as read: ${digest}`);
};

const selectedKeys = (requested) => {
  const all = Object.keys(SOCIAL_IMAGE_FACTS);
  if (requested.length === 0) return all;
  const unknown = requested.filter((key) => !all.includes(key));
  if (unknown.length > 0) {
    throw new Error(`Unknown key(s): ${unknown.join(", ")}.`);
  }
  return requested;
};

const OPTIONS = ["--accept"];

/**
 * A mistyped `--accep` used to be dropped as though it were never passed: the
 * report printed, the command succeeded, and the pair stayed unrecorded while
 * the reader believed they had accepted it. A silent no-op is the one failure
 * this command cannot afford, so an unknown option stops it.
 */
export const parseReviewArgs = (argv) => {
  const unknown = argv.filter(
    (arg) => arg.startsWith("-") && !OPTIONS.includes(arg),
  );
  if (unknown.length > 0) {
    throw new Error(
      `Unknown option(s): ${unknown.join(", ")}. Known: ${OPTIONS.join(", ")}.`,
    );
  }
  return {
    accept: argv.includes("--accept"),
    keys: argv.filter((arg) => !arg.startsWith("-")),
  };
};

const main = async () => {
  const args = parseReviewArgs(process.argv.slice(2));
  const keys = selectedKeys(args.keys);
  for (const key of keys) console.log(report(key));
  if (args.accept) {
    if (keys.length !== 1) throw new Error("--accept needs exactly one key");
    await accept(keys[0]);
  }
};

if (import.meta.main) {
  main().catch((error) => {
    console.error(`Facts review failed: ${error.message}`);
    process.exit(1);
  });
}
