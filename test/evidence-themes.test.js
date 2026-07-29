/**
 * The look each screenshot is taken in.
 *
 * The app decides what a capture is; this repository decides what it looks
 * like, because that is a demonstration of an organiser's own branding rather
 * than anything the app has an opinion about. The app is handed this directory
 * and refuses a capture with no file in it, so a theme that goes missing stops
 * the nightly run rather than quietly publishing a plain screenshot.
 */

import { describe, expect, test } from "bun:test";
import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dir, "..");
const THEMES = join(ROOT, "evidence-themes");

const mapping = JSON.parse(
  readFileSync(join(ROOT, "_data/ticket_evidence_map.json"), "utf8"),
);
const captureIds = Object.keys(mapping.captures).sort();
const themeFiles = readdirSync(THEMES).sort();

/** Every variable the app's own stylesheet reads. A theme that sets some of
 * them and not others leaves the capture in two looks at once. */
const THEME_VARIABLES = [
  "--border-radius",
  "--color-accent",
  "--color-bg",
  "--color-bg-secondary",
  "--color-link",
  "--color-secondary",
  "--color-secondary-accent",
  "--color-shadow",
  "--color-table",
  "--color-text",
  "--color-text-secondary",
  "--font-family",
];

describe("evidence themes", () => {
  test("gives every capture a theme, and every theme a capture", () => {
    expect(themeFiles).toEqual(captureIds.map((id) => `${id}.css`));
  });

  for (const id of captureIds) {
    test(`sets every inherited base style: ${id}`, () => {
      const css = readFileSync(join(THEMES, `${id}.css`), "utf8");
      for (const name of THEME_VARIABLES) {
        expect(css, `${id}.css`).toContain(`${name}:`);
      }
    });
  }
});
