import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { SOCIAL_IMAGE_FACTS } from "../facts/social-images.js";
import { SOCIAL_SCREENSHOT_COPY } from "../scripts/social-screenshot-copy.js";

const ROOT = resolve(import.meta.dir, "..");
const readJson = (relativePath) =>
  JSON.parse(readFileSync(join(ROOT, relativePath), "utf8"));
const inventory = readJson("_data/screenshot_inventory.json");
const mapping = readJson("_data/ticket_evidence_map.json");
const scenarioKeys = readdirSync(join(ROOT, "scripts/screenshots"), {
  withFileTypes: true,
})
  .filter(
    (entry) =>
      entry.isFile() &&
      entry.name.endsWith(".js") &&
      !entry.name.startsWith("_") &&
      entry.name !== "helpers.js",
  )
  .map((entry) => entry.name.replace(/\.js$/, ""))
  .sort();

describe("screenshot inventory", () => {
  test("classifies every retained key exactly once", () => {
    const keys = inventory.map((entry) => entry.key);
    expect(new Set(keys).size).toBe(keys.length);
    expect(
      inventory.every((entry) =>
        ["linked-evidence", "legacy-product-screenshot", "editorial"].includes(
          entry.classification,
        ),
      ),
    ).toBe(true);
  });

  test("classifies every discoverable site-owned scenario", () => {
    const discoverable = inventory
      .filter((entry) => entry.classification !== "linked-evidence")
      .map((entry) => entry.key)
      .sort();
    expect(discoverable).toEqual(scenarioKeys);
  });

  test("classifies every mapped capture as linked evidence", () => {
    const linked = inventory
      .filter((entry) => entry.classification === "linked-evidence")
      .map((entry) => [entry.captureId, entry.key])
      .sort();
    const mapped = Object.entries(mapping.captures)
      .map(([captureId, capture]) => [captureId, capture.socialKey])
      .sort();
    expect(linked).toEqual(mapped);
  });

  test("keeps linked social copy and audited facts", () => {
    for (const capture of Object.values(mapping.captures)) {
      expect(SOCIAL_SCREENSHOT_COPY[capture.socialKey]).toBeDefined();
      expect(SOCIAL_IMAGE_FACTS[capture.socialKey]).toBeDefined();
    }
  });
});

describe("ticket evidence placement", () => {
  test("uses split images with a small Feature source link", () => {
    for (const [captureId, capture] of Object.entries(mapping.captures)) {
      const page = readFileSync(join(ROOT, capture.page), "utf8");
      expect(page).toContain(`ticket_evidence_capture: ${captureId}`);
      expect(page).toContain("type: split-image");
      expect(page).toContain(`figure_src: /${capture.legacyDestinationPath}`);
      expect(page).toContain(`figure_alt: ${capture.alt}`);
      expect(page).toContain(capture.caption);
      expect(page).toContain("<small><a href=");
      expect(page).toContain("(src)</a></small>");
      expect(page).not.toContain("file: ticket-evidence.html");
    }
  });
});
