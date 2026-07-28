#!/usr/bin/env bun

/**
 * Put the app's story and the site's words about it side by side, so a person
 * (or an LLM) can read them together and say whether the site still describes
 * what the case proves.
 *
 *   bun run evidence:review                    # every capture
 *   bun run evidence:review qr-code-check-in   # one capture
 *   bun run evidence:review qr-code-check-in --accept
 *   bun run evidence:review --from /path/to/reports/evidence
 *
 * --accept records the story the site's words were written against. Nothing
 * else writes that digest: accepting is the act of having read the story.
 */

import { join } from "node:path";
import { root } from "../utils.js";
import { loadEvidenceArtifact } from "./artifact.js";
import { EVIDENCE_DATA_PATH, EVIDENCE_MAPPING_PATH } from "./constants.js";
import { loadEvidenceMapping } from "./mapping.js";
import { narrativeDigest } from "./narrative.js";
import { serialise } from "./serialise.js";
import { readJson } from "./validation.js";

const SITE_WORDS = [
  ["Alt text", "alt"],
  ["Page caption", "caption"],
  ["Gallery caption", "galleryCaption"],
  ["Social heading", "socialHeading"],
  ["Social body", "socialBody"],
];

const capturesFromArtifact = async (mapping, artifactDir) => {
  const { manifest } = await loadEvidenceArtifact(artifactDir, mapping);
  return Object.fromEntries(
    manifest.captures.map((capture) => [capture.id, capture]),
  );
};

const capturesFromSite = async () =>
  (await readJson(join(root, EVIDENCE_DATA_PATH), EVIDENCE_DATA_PATH)).captures;

const stepLines = (capture) =>
  capture.steps.map((step) => `  ${step.keyword} ${step.text}`).join("\n");

const storyReport = (capture) =>
  [
    `Story: ${capture.story.name}`,
    `  ${capture.story.description.replaceAll("\n", "\n  ")}`,
    `Rule: ${capture.rule.name}`,
    `  ${capture.rule.description.replaceAll("\n", "\n  ")}`,
    `Case: ${capture.case.name} (@case:${capture.case.id})`,
    stepLines(capture),
  ].join("\n");

const wordsReport = (placement) =>
  SITE_WORDS.map(([label, field]) => `${label}: ${placement[field]}`).join(
    "\n",
  );

const statusLine = (capture, placement) =>
  narrativeDigest(capture) === placement.reviewedNarrative
    ? "Status: the site's words were written against this story."
    : `Status: THE STORY HAS CHANGED since the site's words were last read.\n` +
      `        Re-read the words above, then run --accept to record ${narrativeDigest(capture)}.`;

const report = (captureId, capture, placement) =>
  [
    `## ${captureId}`,
    "",
    storyReport(capture),
    "",
    wordsReport(placement),
    `Page: ${placement.page}`,
    `Source: ${placement.sourceUrl}`,
    "",
    statusLine(capture, placement),
    "",
  ].join("\n");

const acceptNarrative = async (captureId, capture) => {
  const path = join(root, EVIDENCE_MAPPING_PATH);
  const mapping = await readJson(path, EVIDENCE_MAPPING_PATH);
  mapping.captures[captureId].reviewedNarrative = narrativeDigest(capture);
  await Bun.write(path, serialise(mapping));
  console.log(
    `Recorded the story for ${captureId} as read: ${narrativeDigest(capture)}`,
  );
};

const selectedIds = (mapping, requested) => {
  const all = Object.keys(mapping.captures);
  if (requested.length === 0) return all;
  const unknown = requested.filter((id) => !all.includes(id));
  if (unknown.length > 0) {
    throw new Error(
      `Unknown capture(s): ${unknown.join(", ")}. Available: ${all.join(", ")}.`,
    );
  }
  return requested;
};

export const parseReviewArgs = (argv) => {
  const fromIndex = argv.indexOf("--from");
  if (fromIndex !== -1 && !argv[fromIndex + 1]) {
    throw new Error("--from needs an artifact directory");
  }
  return {
    accept: argv.includes("--accept"),
    from: fromIndex === -1 ? null : argv[fromIndex + 1],
    ids: argv.filter(
      (arg, index) =>
        !arg.startsWith("--") && !(fromIndex !== -1 && index === fromIndex + 1),
    ),
  };
};

const main = async () => {
  const args = parseReviewArgs(process.argv.slice(2));
  const mapping = await loadEvidenceMapping(root);
  const captures = args.from
    ? await capturesFromArtifact(mapping, args.from)
    : await capturesFromSite();
  const ids = selectedIds(mapping, args.ids);
  if (args.accept && ids.length !== 1) {
    throw new Error("--accept needs exactly one capture id");
  }
  for (const id of ids) {
    console.log(report(id, captures[id], mapping.captures[id]));
  }
  if (args.accept) await acceptNarrative(ids[0], captures[ids[0]]);
};

if (import.meta.main) {
  main().catch((error) => {
    console.error(`Evidence review failed: ${error.message}`);
    process.exit(1);
  });
}
