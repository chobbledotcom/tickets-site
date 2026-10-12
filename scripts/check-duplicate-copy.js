#!/usr/bin/env bun

/**
 * Flags sentences of body copy that appear word-for-word on more than one page.
 *
 * The site's prose lives inside front matter block scalars, which jscpd's
 * markdown scan cannot see, so this check reads the same front matter the
 * build reads and compares it sentence by sentence. Repetition between pages a
 * visitor genuinely compares in one session is what reads as boilerplate, and
 * an intentional repeat belongs in .duplicate-copy.json with its reason.
 *
 * Ported from monster-event-hire's scripts/check-duplicate-copy.js, with a
 * recursive walk for this repository's nested content directories.
 */

import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { path, root } from "./utils.js";

const DEFAULT_DIRS = ["pages", "guide-pages"];

// Block-scalar keys whose bodies are prose a visitor actually reads.
const PROSE_KEYS =
  /^(\s*)-?\s*(content|left_content|right_content|intro_content|intro|intro_body|closing_body|description|answer):\s*[|>][-+]?\s*$/;

const ANY_KEY = /^(\s*)-?\s*[a-z_]+:/;

const MIN_SENTENCE_LENGTH = 40;
// Effectively no upper bound: a duplicated sentence is a finding whatever
// its length, and the ceiling only guards against pathological unpunctuated
// lines being treated as one giant sentence.
const MAX_SENTENCE_LENGTH = 2000;

const indentOf = (line) => line.length - line.trimStart().length;

const isBlank = (line) => line.trim().length === 0;

const blockKeyIndent = (line) => {
  const match = PROSE_KEYS.exec(line);
  return match ? match[1].length : null;
};

/**
 * Inline value of a prose key on the same line, quotes stripped. Inline prose
 * values are read side by side just as much as block scalars.
 */
const INLINE_PROSE_KEY =
  /^(?:\s*)-?\s*(content|left_content|right_content|intro_content|intro|intro_body|closing_body|description|answer):\s*(.+?)\s*$/;

const inlineProseValue = (line) => {
  const match = INLINE_PROSE_KEY.exec(line);
  if (!match) return null;
  const value = match[2].replace(/^['"]|['"]$/g, "").trim();
  return value.length > 0 ? value : null;
};

/** The prose a block-scalar line contributes, or null when it closes a block. */
const blockLineProse = (state, line) => {
  if (isBlank(line) || indentOf(line) > state.open) return line.trim();
  if (ANY_KEY.test(line)) state.open = null;
  return null;
};

/** The prose one line contributes, tracked against the open block scalar. */
const nextProse = (state, line) => {
  const keyIndent = blockKeyIndent(line);
  if (keyIndent !== null) {
    state.open = keyIndent;
    return null;
  }
  if (state.open === null) return inlineProseValue(line);
  return blockLineProse(state, line);
};

/** Lines belonging to prose block scalars, with their scaffolding removed. */
const proseLines = (content) => {
  const state = { open: null };
  const collected = [];

  for (const line of content.split("\n")) {
    const prose = nextProse(state, line);
    if (prose !== null) collected.push(prose);
  }

  return collected;
};

/** Drop markdown that is not prose: headings, bullets, tables, blockquotes. */
const isProse = (line) => !/^([#>|*]|-\s|\d+\.\s)/.test(line);

const sentencesIn = (content) => {
  const body = proseLines(content).filter(isProse).join(" ");
  return body
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.replace(/\s+/g, " ").trim())
    .filter(
      (sentence) =>
        sentence.length >= MIN_SENTENCE_LENGTH &&
        sentence.length <= MAX_SENTENCE_LENGTH,
    );
};

const markdownFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(entryPath);
    return entry.name.endsWith(".md") ? [entryPath] : [];
  });

const collectSentences = (dirs) => {
  const seen = new Map();

  for (const dir of dirs) {
    for (const filePath of markdownFiles(path(dir))) {
      const label = relative(root, filePath);
      for (const sentence of sentencesIn(readFileSync(filePath, "utf8"))) {
        const files = seen.get(sentence) ?? new Set();
        files.add(label);
        seen.set(sentence, files);
      }
    }
  }

  return seen;
};

/** Entries are { text, why } so the reason for each repeat stays on record. */
const readAllowlist = () => {
  try {
    const raw = readFileSync(path(".duplicate-copy.json"), "utf8");
    const entries = JSON.parse(raw).allow ?? [];
    return new Set(entries.map((entry) => entry.text ?? entry));
  } catch {
    return new Set();
  }
};

const report = (duplicates) => {
  for (const [sentence, files] of duplicates) {
    console.log(`\n  ${[...files].sort().join(", ")}`);
    console.log(`    "${sentence}"`);
  }
};

const main = () => {
  const allowed = readAllowlist();
  const duplicates = [...collectSentences(DEFAULT_DIRS)]
    .filter(([sentence, files]) => files.size > 1 && !allowed.has(sentence))
    .sort((a, b) => b[1].size - a[1].size);

  if (duplicates.length === 0) {
    console.log("No unexpected duplicate copy found.");
    return;
  }

  console.log(
    `${duplicates.length} sentence(s) appear word-for-word on more than one page:`,
  );
  report(duplicates);
  console.log(
    "\nReword them so each page says it in its own way, or record an\nintentional repeat in .duplicate-copy.json with the reason.",
  );
  process.exit(1);
};

export const collectDuplicates = (dirs) =>
  [...collectSentences(dirs)]
    .filter(([, files]) => files.size > 1)
    .map(([sentence, files]) => ({ text: sentence, files: [...files] }))
    .sort((a, b) => b.files.length - a.files.length);

if (import.meta.main) {
  main();
}
