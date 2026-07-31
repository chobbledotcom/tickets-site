import { describe, expect, test } from "bun:test";
import { SOCIAL_IMAGE_FACTS } from "../facts/social-images.js";
import { factsDigest } from "../scripts/facts/digest.js";
import { SOCIAL_SCREENSHOT_COPY } from "../scripts/social-screenshot-copy.js";

const SOURCE_REFERENCE = /^\.\.\/tickets\/.+:\d+(?:-\d+)?$/;
const COMMIT = /^[a-f0-9]{40}$/;
const DIGEST = /^[a-f0-9]{64}$/;

describe("social screenshot facts", () => {
  test("cover every social screenshot", () => {
    expect(Object.keys(SOCIAL_IMAGE_FACTS).sort()).toEqual(
      Object.keys(SOCIAL_SCREENSHOT_COPY).sort(),
    );
  });

  test("contain concrete facts with source line references", () => {
    for (const [key, entry] of Object.entries(SOCIAL_IMAGE_FACTS)) {
      expect(entry.facts.length, key).toBeGreaterThan(0);
      for (const fact of entry.facts) {
        expect(fact.fact.length, key).toBeGreaterThan(0);
        expect(fact.sources.length, key).toBeGreaterThan(0);
        for (const source of fact.sources) {
          expect(source, key).toMatch(SOURCE_REFERENCE);
        }
      }
    }
  });

  // A line range means nothing without the checkout it was read in, and the
  // app moves faster than the facts do. Each fact carries its own commit so a
  // new one can record today's without claiming the old ones were re-read.
  test("record the Tickets commit each fact was audited at", () => {
    for (const [key, entry] of Object.entries(SOCIAL_IMAGE_FACTS)) {
      for (const fact of entry.facts) {
        expect(fact.audited, `${key}: ${fact.fact}`).toMatch(COMMIT);
      }
    }
  });

  /**
   * The guard this replaces asked only whether a key had some facts, so copy
   * could drift away from its evidence and still pass: a heading once claimed
   * every change was written down while its own fact said the view holds the
   * latest 200 entries. Recording the pair means rewording a card costs the
   * same second look as changing what the app does.
   */
  test("hold copy that has been read against the facts behind it", () => {
    const unread = Object.entries(SOCIAL_IMAGE_FACTS)
      .filter(
        ([key, entry]) =>
          factsDigest(SOCIAL_SCREENSHOT_COPY[key], entry.facts) !==
          entry.reviewed,
      )
      .map(([key]) => key);
    expect(
      unread,
      `Run "bun run facts:review <key>" for each, then --accept`,
    ).toEqual([]);
  });

  test("record the review as a digest", () => {
    for (const [key, entry] of Object.entries(SOCIAL_IMAGE_FACTS)) {
      expect(entry.reviewed, key).toMatch(DIGEST);
    }
  });
});
