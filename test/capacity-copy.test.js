import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const SOURCE_DIRECTORIES = [
  "_data",
  "_includes",
  "facts",
  "guide-categories",
  "guide-pages",
  "pages",
  "scripts",
];
const COPY_EXTENSIONS = new Set([".html", ".js", ".json", ".md", ".yaml", ".yml"]);
const FORBIDDEN_CLAIMS = [
  /(?:five|5)[ -]?minute.{0,100}(?:hold|payment|place|reserve|spot|ticket)/i,
  /(?:hold|payment|place|reserve|spot|ticket).{0,100}(?:five|5)[ -]?minute/i,
  /capacity management to prevent overselling/i,
  /holds spots/i,
  /held (?:for that booking|so it cannot be double-booked)/i,
];

const sourceFiles = SOURCE_DIRECTORIES.flatMap((directory) => {
  const absoluteDirectory = path.join(ROOT, directory);
  return readdirSync(absoluteDirectory, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile() && COPY_EXTENSIONS.has(path.extname(entry.name)))
    .map((entry) => path.join(entry.parentPath, entry.name));
});

describe("paid-booking capacity copy", () => {
  test("does not claim checkout holds or five-minute reservations", () => {
    for (const filePath of sourceFiles) {
      const content = readFileSync(filePath, "utf8");
      const relativePath = path.relative(ROOT, filePath);
      for (const claim of FORBIDDEN_CLAIMS) {
        expect(content, `${relativePath}: ${claim}`).not.toMatch(claim);
      }
    }
  });

  test("documents payment-confirmation capacity timing", () => {
    const agentInstructions = readFileSync(path.join(ROOT, "AGENTS.md"), "utf8");
    const capacityPage = readFileSync(
      path.join(ROOT, "pages", "features", "overbooking-prevention.md"),
      "utf8",
    );

    expect(agentInstructions).toContain(
      "Paid checkout does not reserve tickets or use capacity.",
    );
    expect(capacityPage).toContain(
      "Capacity is checked again and used only when payment confirmation arrives.",
    );
  });
});
