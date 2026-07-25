import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { SOCIAL_IMAGE_FACTS } from "../facts/social-images.js";
import { SOCIAL_SCREENSHOT_COPY } from "../scripts/social-screenshot-copy.js";

const ROOT = resolve(import.meta.dir, "..");
const CAPTURE_ID = "servicing-studio-floor-hold";
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

describe("ticket evidence component", () => {
  const component = readFileSync(
    join(ROOT, "_includes/ticket-evidence.html"),
    "utf8",
  );
  const page = readFileSync(
    join(ROOT, "pages/features/servicing-events.md"),
    "utf8",
  );

  test("uses mapped copy and imported Cucumber text", () => {
    expect(component).toContain("evidence_mapping.summary");
    expect(component).toContain("evidence_mapping.caption");
    expect(component).toContain("How this was tested");
    expect(component).toContain("evidence.story.name");
    expect(component).toContain("evidence.rule.name");
    expect(component).toContain("evidence.case.name");
    expect(component).toContain("evidence.steps");
  });

  test("does not render raw provenance or internal locations", () => {
    expect(component).not.toContain("evidence.story.id");
    expect(component).not.toContain("evidence.rule.id");
    expect(component).not.toContain("evidence.case.id");
    expect(component).not.toContain("evidence.app");
    expect(component).not.toContain("/admin/");
  });

  test("replaces the ordinary servicing split image", () => {
    expect(page).toContain("ticket_evidence_capture: servicing-studio-floor-hold");
    expect(page).toContain("file: ticket-evidence.html");
    expect(page).not.toContain("type: split-image");
    expect(mapping.captures[CAPTURE_ID].legacyDestinationPath).toBe(
      "images/screenshots/servicing-studio-floor-hold.png",
    );
  });
});
