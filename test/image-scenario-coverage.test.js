import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { CONTENT_DIRECTORIES } from "../scripts/evidence/copy.js";

const ROOT = path.resolve(import.meta.dir, "..");
const IMAGE_PATTERNS = [
  /(?:^|\n)\s*figure_src:\s*\S+/,
  /(?:^|\n)\s*-\s+type:\s+(?:gallery|image-background)\s*$/m,
  /!\[[^\]]*\]\([^)]+\)/,
  /<img(?:\s|>)/i,
];

const contentFiles = CONTENT_DIRECTORIES.flatMap((directory) => {
  const absoluteDirectory = path.join(ROOT, directory);
  return readdirSync(absoluteDirectory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
    .map((entry) => path.relative(ROOT, path.join(entry.parentPath, entry.name)));
}).sort();

const imageLessFiles = contentFiles.filter((filePath) => {
  const content = readFileSync(path.join(ROOT, filePath), "utf8");
  return !IMAGE_PATTERNS.some((pattern) => pattern.test(content));
});

const scenarioBrief = readFileSync(path.join(ROOT, "IMAGE-SCENARIOS.md"), "utf8");
const scenarioRows = scenarioBrief
  .split("\n")
  .filter((line) => /^\| `(?:guide-categories|guide-pages|pages)\//.test(line));
const filePathFromRow = (row) => row.match(/`([^`]+\.md)`/)?.[1];
const documentedFiles = scenarioRows
  .filter((row) => !row.includes("| [x]"))
  .map(filePathFromRow)
  .filter(Boolean)
  .sort();
const completedFiles = scenarioRows
  .filter((row) => row.includes("| [x]"))
  .map(filePathFromRow)
  .filter(Boolean)
  .sort();

describe("page image scenario coverage", () => {
  test("documents every image-less rendered content page", () => {
    expect(documentedFiles).toEqual(imageLessFiles);
    expect(contentFiles).toHaveLength(142);
    expect(imageLessFiles).toHaveLength(89);
    expect(completedFiles).toHaveLength(11);
    expect(completedFiles.every((filePath) => !imageLessFiles.includes(filePath))).toBe(
      true,
    );
  });
});
