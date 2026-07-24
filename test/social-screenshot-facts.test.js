import { describe, expect, test } from "bun:test";
import {
  AUDITED_TICKETS_COMMIT,
  SOCIAL_IMAGE_FACTS,
} from "../facts/social-images.js";
import { SOCIAL_SCREENSHOT_COPY } from "../scripts/social-screenshot-copy.js";

const SOURCE_REFERENCE = /^\.\.\/tickets\/.+:\d+(?:-\d+)?$/;

describe("social screenshot facts", () => {
  test("cover every social screenshot", () => {
    expect(Object.keys(SOCIAL_IMAGE_FACTS).sort()).toEqual(
      Object.keys(SOCIAL_SCREENSHOT_COPY).sort(),
    );
  });

  test("record the audited Tickets commit", () => {
    expect(AUDITED_TICKETS_COMMIT).toMatch(/^[a-f0-9]{40}$/);
  });

  test("contain concrete facts with source line references", () => {
    for (const [key, facts] of Object.entries(SOCIAL_IMAGE_FACTS)) {
      expect(facts.length, key).toBeGreaterThan(0);
      for (const fact of facts) {
        expect(fact.fact.length, key).toBeGreaterThan(0);
        expect(fact.sources.length, key).toBeGreaterThan(0);
        for (const source of fact.sources) {
          expect(source, key).toMatch(SOURCE_REFERENCE);
        }
      }
    }
  });
});
