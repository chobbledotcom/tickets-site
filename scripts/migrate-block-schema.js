#!/usr/bin/env bun
/**
 * Migrate page block schemas to the new chobble-template format:
 *
 *   hero            : title -> name
 *   features.items  : title -> name
 *   cta             : title + description + button -> content (md heading + body) + button
 *   split-icon-links: title -> embed as `## {title}` in content (or before content)
 *
 * Reads every .md under pages/, splits the front-matter, parses the YAML, walks
 * the `blocks` array, and rewrites whatever needs updating. The body of the
 * .md (after the closing `---`) is preserved unchanged.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";

const PAGES_DIR = "pages";

const walk = (dir) => {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) out.push(...walk(full));
    else if (entry.endsWith(".md")) out.push(full);
  }
  return out;
};

const splitFrontMatter = (text) => {
  if (!text.startsWith("---\n")) return null;
  const end = text.indexOf("\n---", 4);
  if (end === -1) return null;
  const fm = text.slice(4, end);
  const body = text.slice(end + 4);
  return { fm, body };
};

const renameKey = (obj, from, to) => {
  if (!(from in obj) || to in obj) return false;
  obj[to] = obj[from];
  delete obj[from];
  return true;
};

const migrateHero = (block) => renameKey(block, "title", "name");

const migrateFeatures = (block) => {
  if (!Array.isArray(block.items)) return false;
  let touched = false;
  for (const item of block.items) {
    if (item && typeof item === "object" && renameKey(item, "title", "name")) {
      touched = true;
    }
  }
  return touched;
};

const migrateCta = (block) => {
  if (!("title" in block) && !("description" in block)) return false;
  const title = block.title;
  const description = block.description;
  delete block.title;
  delete block.description;
  const existing = block.content ? `\n\n${block.content}` : "";
  const parts = [];
  if (title) parts.push(`## ${title}`);
  if (description) parts.push(description);
  block.content = parts.join("\n\n") + existing;
  return true;
};

const migrateSplitIconLinks = (block) => {
  if (!("title" in block)) return false;
  const title = block.title;
  delete block.title;
  const heading = `## ${title}`;
  block.content = block.content ? `${heading}\n\n${block.content}` : heading;
  return true;
};

const MIGRATIONS = {
  hero: migrateHero,
  features: migrateFeatures,
  cta: migrateCta,
  "split-icon-links": migrateSplitIconLinks,
};

const migrateOneBlock = (block) => {
  if (!block || typeof block !== "object") return false;
  const fn = MIGRATIONS[block.type];
  return fn?.(block) ?? false;
};

const migrateBlocks = (blocks) => {
  if (!Array.isArray(blocks)) return false;
  return blocks.reduce(
    (touched, block) => migrateOneBlock(block) || touched,
    false,
  );
};

const ensureTopLevelName = (data) => {
  if (data.name) return false;
  const source = data.meta_title || data.title;
  if (!source) return false;
  data.name = source;
  return true;
};

const migrateFile = (path) => {
  const raw = readFileSync(path, "utf8");
  const parts = splitFrontMatter(raw);
  if (!parts) return { path, status: "no-frontmatter" };
  let data;
  try {
    data = yaml.load(parts.fm);
  } catch (e) {
    return { path, status: `yaml-error: ${e.message}` };
  }
  if (!data || typeof data !== "object") {
    return { path, status: "no-data" };
  }
  const nameAdded = ensureTopLevelName(data);
  const blocksTouched = Array.isArray(data.blocks)
    ? migrateBlocks(data.blocks)
    : false;
  if (!nameAdded && !blocksTouched) return { path, status: "no-change" };
  const newFm = yaml.dump(data, {
    lineWidth: -1,
    noRefs: true,
    quotingType: '"',
  });
  writeFileSync(path, `---\n${newFm}---${parts.body}`);
  return { path, status: "updated" };
};

const files = walk(PAGES_DIR).sort();
const results = files.map(migrateFile);
const counts = results.reduce((acc, r) => {
  acc[r.status] = (acc[r.status] || 0) + 1;
  return acc;
}, {});
console.log("Summary:", counts);
for (const r of results) {
  if (r.status !== "no-change") console.log(`  ${r.status}: ${r.path}`);
}
