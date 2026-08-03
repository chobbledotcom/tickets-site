import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { CHOBBLEFEST_SLIDES } from "../scripts/chobblefest-slides.js";

const root = join(import.meta.dirname, "..");

describe("ChobbleFest Instagram slideshow", () => {
  test("contains ten uniquely named slides", () => {
    expect(CHOBBLEFEST_SLIDES).toHaveLength(10);
    expect(new Set(CHOBBLEFEST_SLIDES.map(({ slug }) => slug)).size).toBe(10);
    expect(new Set(CHOBBLEFEST_SLIDES.map(({ source }) => source)).size).toBe(
      10,
    );
  });

  test("uses real scenario sources and concise headings", () => {
    for (const slide of CHOBBLEFEST_SLIDES) {
      expect(slide.heading).not.toStartWith("I'd ");
      expect(slide.source).toStartWith("chobblefest-");
      expect(
        existsSync(
          join(root, "scripts", "screenshots", `${slide.source}.js`),
        ),
      ).toBe(true);
    }
  });
});
