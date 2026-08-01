import { describe, expect, test } from "bun:test";
import { SOCIAL_IMAGE_FACTS } from "../facts/social-images.js";
import { factsDigest } from "../scripts/facts/digest.js";
import { parseReviewArgs } from "../scripts/facts/review.js";
import {
  countLines,
  rangeProblem,
  ticketsFrom,
} from "../scripts/facts/verify.js";
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

describe("facts review arguments", () => {
  test("read a key and the accept flag", () => {
    expect(parseReviewArgs(["multi-day-hire", "--accept"])).toEqual({
      accept: true,
      keys: ["multi-day-hire"],
    });
  });

  // A mistyped flag used to be dropped, so the command printed the report and
  // exited 0 while recording nothing. Succeeding without accepting is the one
  // outcome that leaves a reader believing a pair was read when it was not.
  test("refuse an option that is not known", () => {
    expect(() => parseReviewArgs(["multi-day-hire", "--accep"])).toThrow(
      "--accep",
    );
  });
});

describe("facts verify arguments", () => {
  test("read the tickets directory", () => {
    expect(ticketsFrom(["--tickets", "../elsewhere"])).toBe("../elsewhere");
    expect(ticketsFrom([])).toBe("../tickets");
  });

  // A mistyped option used to fall back to the default checkout, so the
  // command could report success having verified a repository nobody named.
  test("refuse a mistyped option or a stray argument", () => {
    expect(() => ticketsFrom(["--ticket", "../elsewhere"])).toThrow("--ticket");
    expect(() => ticketsFrom(["../elsewhere"])).toThrow("Unexpected");
    expect(() => ticketsFrom(["--tickets"])).toThrow("needs a directory");
  });
});

describe("checking a cited range", () => {
  // Line numbering starts at 1, and a range cannot end before it starts.
  // Neither names a line, so neither is a citation that resolves.
  test("refuses a range that names no line", () => {
    expect(rangeProblem({ end: 0, start: 0 })).toBe("does not start at a line");
    expect(rangeProblem({ end: 20, start: 30 })).toBe("ends before it starts");
    expect(rangeProblem({ end: 5, start: 1 })).toBeNull();
  });
});

describe("counting the lines of a cited file", () => {
  // A file ending in a newline splits into a final empty piece. Counting it
  // would let a citation one line past the end pass the range check.
  test("does not count the piece after a trailing newline", () => {
    expect(countLines("one\ntwo\n")).toBe(2);
    expect(countLines("one\ntwo")).toBe(2);
    expect(countLines("")).toBe(0);
  });
});
