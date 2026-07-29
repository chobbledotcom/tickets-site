/**
 * Every page's front matter, read the way the build reads it.
 *
 * The evidence checks find a page's words with regular expressions, because
 * they are looking at one block inside one page. That means they are happy
 * with front matter no YAML parser would accept: a caption holding ": " is
 * the shape that got through, and the build was the first thing to say so.
 */

import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { Glob } from "bun";
import { CONTENT_DIRECTORIES } from "../scripts/evidence/copy.js";

const ROOT = resolve(import.meta.dir, "..");

const markdownFiles = CONTENT_DIRECTORIES.flatMap((directory) =>
  [...new Glob(`${directory}/**/*.md`).scanSync(ROOT)].map((path) =>
    relative("", path).replaceAll("\\", "/"),
  ),
);

/** The front matter of one page, as text, or null when it has none. */
const frontMatterOf = (path) => {
  const text = readFileSync(join(ROOT, path), "utf8");
  if (!text.startsWith("---\n")) return null;
  const end = text.indexOf("\n---", 3);
  return end === -1 ? null : text.slice(4, end);
};

describe("page front matter", () => {
  test("finds pages to check", () => {
    expect(markdownFiles.length).toBeGreaterThan(20);
  });

  test("refuses front matter no parser would accept", () => {
    // The shape that reached the build: a value holding ": ", which YAML reads
    // as a nested mapping and then refuses for its indentation.
    expect(() =>
      Bun.YAML.parse("blocks:\n  - caption: A record: how often they booked\n"),
    ).toThrow();
  });

  for (const path of markdownFiles) {
    test(`parses as YAML: ${path}`, () => {
      const frontMatter = frontMatterOf(path);
      if (frontMatter === null) return;
      expect(() => Bun.YAML.parse(frontMatter)).not.toThrow();
    });
  }
});
