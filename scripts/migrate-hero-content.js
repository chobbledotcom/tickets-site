#!/usr/bin/env node
/**
 * One-off migration: update hero blocks to the new chobble-template schema.
 *
 * The hero block no longer accepts `lead` or `name`. Both are rolled into a
 * single markdown `content` field, where the `name` becomes an `# H1` heading
 * and the `lead` becomes the paragraph beneath it.
 *
 * Before:
 *   - type: hero
 *     class: gradient
 *     lead: <paragraph text>
 *     name: <heading text>
 *
 * After:
 *   - type: hero
 *     class: gradient
 *     content: |-
 *       # <heading text>
 *
 *       <paragraph text>
 *
 * If only one of `lead`/`name` is present, only that part is written. Other
 * hero keys (`badge`, `buttons`, `class`, `reveal`, `dark`, `compact`) are left
 * untouched. Existing hero `content:` (none observed in the current repo) is
 * not merged - if present, the block is left untouched and flagged.
 *
 * The body of each .md file (after the closing `---`) is preserved unchanged.
 * Only the front-matter is rewritten, and only the hero block lines within it.
 *
 * Self-contained (no external deps) so it can be run with `node` directly.
 */
import {
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

const PAGES_DIR = "pages";

/** Recursively collect .md files under `dir`. */
const walk = (dir) => {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (entry.endsWith(".md")) out.push(full);
  }
  return out;
};

/**
 * Split a raw `.md` file into front-matter text (without the surrounding
 * fence lines) and the body (starting with `\n`).
 *
 * Returns `null` if there is no parseable front-matter.
 */
const splitFrontMatter = (raw) => {
  if (!raw.startsWith("---\n")) return null;
  const end = raw.indexOf("\n---", 4);
  if (end === -1) return null;
  return {
    fm: raw.slice(4, end),
    body: raw.slice(end + 4),
  };
};

/** Match `    lead: VALUE` or `    name: VALUE` (4-space indent only). */
const matchLeadOrName = (line) => {
  const m = /^    (lead|name):\s*(.*?)\s*$/.exec(line);
  if (!m) return null;
  return { key: m[1], value: m[2] };
};

/** Match any 4-space-indented `content:` line (so we can detect collisions). */
const isExistingContent = (line) => /^    content:/.test(line);

/**
 * Locate every hero block inside `lines` (front-matter split on `\n`).
 *
 * Returns an array of `[startIdx, endIdx)` ranges, where `startIdx` is the
 * index of the `  - type: hero` line and `endIdx` is exclusive (the index of
 * the line that begins the next block or the end of the front-matter).
 */
const findHeroBlocks = (lines) => {
  const ranges = [];
  const heroStart = /^  - type: hero\s*$/;
  const nextBlock = /^  - \S/;
  const topKey = /^[^\s#-][^:]*:/;
  for (let i = 0; i < lines.length; i += 1) {
    if (!heroStart.test(lines[i])) continue;
    let j = i + 1;
    while (j < lines.length) {
      const next = lines[j];
      if (nextBlock.test(next) || topKey.test(next)) break;
      j += 1;
    }
    ranges.push([i, j]);
  }
  return ranges;
};

/**
 * Build the replacement lines for a single hero block.
 *
 * `blockLines` is the slice of front-matter lines for the hero block only
 * (starting with the `  - type: hero` line). Returns `null` if nothing to do.
 */
const transformHeroBlock = (blockLines) => {
  let leadValue = null;
  let nameValue = null;
  let leadIdx = -1;
  let nameIdx = -1;

  for (let k = 0; k < blockLines.length; k += 1) {
    if (isExistingContent(blockLines[k])) return null;
    const m = matchLeadOrName(blockLines[k]);
    if (!m) continue;
    if (m.key === "lead" && leadIdx === -1) {
      leadValue = m.value;
      leadIdx = k;
    } else if (m.key === "name" && nameIdx === -1) {
      nameValue = m.value;
      nameIdx = k;
    }
  }

  if (leadIdx === -1 && nameIdx === -1) return null;

  const bodyLines = [];
  if (nameValue) bodyLines.push(`# ${nameValue}`);
  if (leadValue) {
    if (bodyLines.length > 0) bodyLines.push("");
    bodyLines.push(leadValue);
  }

  const contentSection = ["    content: |-"];
  for (const cl of bodyLines) {
    contentSection.push(cl === "" ? "" : `      ${cl}`);
  }

  const insertAt = leadIdx !== -1 ? leadIdx : nameIdx;
  const dropAt = leadIdx !== -1 && nameIdx !== -1 ? nameIdx : -1;

  const out = [];
  for (let k = 0; k < blockLines.length; k += 1) {
    if (k === insertAt) {
      out.push(...contentSection);
      continue;
    }
    if (k === dropAt) continue;
    out.push(blockLines[k]);
  }
  return out;
};

/** Migrate a single file. Returns a status string for reporting. */
const migrateFile = (file) => {
  const raw = readFileSync(file, "utf8");
  const parts = splitFrontMatter(raw);
  if (!parts) return { file, status: "no-frontmatter" };

  const lines = parts.fm.split("\n");
  const ranges = findHeroBlocks(lines);
  if (ranges.length === 0) return { file, status: "no-hero" };

  const newLines = [...lines];
  let touched = false;
  for (let r = ranges.length - 1; r >= 0; r -= 1) {
    const [start, end] = ranges[r];
    const replacement = transformHeroBlock(newLines.slice(start, end));
    if (!replacement) continue;
    newLines.splice(start, end - start, ...replacement);
    touched = true;
  }

  if (!touched) return { file, status: "no-change" };

  const newRaw = `---\n${newLines.join("\n")}---${parts.body}`;
  writeFileSync(file, newRaw);
  return { file, status: "updated" };
};

const files = walk(PAGES_DIR).sort();
const results = files.map(migrateFile);
const counts = results.reduce((acc, r) => {
  acc[r.status] = (acc[r.status] || 0) + 1;
  return acc;
}, {});

console.log("Summary:", counts);
for (const r of results) {
  if (r.status === "updated") console.log(`  updated: ${r.file}`);
}
