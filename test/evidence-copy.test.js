import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { Glob } from "bun";
import { SOCIAL_IMAGE_FACTS } from "../facts/social-images.js";
import {
  CONTENT_DIRECTORIES,
  evidenceCopyIssues,
  galleryCaptionsFor,
  socialImagePath,
} from "../scripts/evidence/copy.js";
import {
  artifactSource,
  describeDrift,
  narrativeDigest,
  narrativeOf,
} from "../scripts/evidence/narrative.js";
import { parseReviewArgs } from "../scripts/evidence/review.js";
import { SOCIAL_SCREENSHOT_COPY } from "../scripts/social-screenshot-copy.js";

const ROOT = resolve(import.meta.dir, "..");
const read = (relativePath) => readFileSync(join(ROOT, relativePath), "utf8");
const readJson = (relativePath) => JSON.parse(read(relativePath));
const mapping = readJson("_data/ticket_evidence_map.json");
const evidence = readJson("_data/ticket_evidence.json");

const markdownFiles = CONTENT_DIRECTORIES.flatMap((directory) =>
  [...new Glob(`${directory}/**/*.md`).scanSync(ROOT)].map((path) => ({
    content: read(path),
    path: relative("", path).replaceAll("\\", "/"),
  })),
);

describe("evidence copy", () => {
  test("says the same thing everywhere the site describes a capture", () => {
    expect(
      evidenceCopyIssues({
        gallery: read("pages/gallery.md"),
        mapping,
        markdownFiles,
        socialCopy: SOCIAL_SCREENSHOT_COPY,
        socialFacts: SOCIAL_IMAGE_FACTS,
      }),
    ).toEqual([]);
  });

  test("gives every capture one gallery entry", () => {
    for (const placement of Object.values(mapping.captures)) {
      expect(
        galleryCaptionsFor(
          read("pages/gallery.md"),
          socialImagePath(placement.legacyDestinationPath),
        ),
      ).toEqual([placement.galleryCaption]);
    }
  });
});

describe("evidence narrative review", () => {
  test("records that each capture's words were written against its story", () => {
    const drifted = Object.entries(mapping.captures)
      .filter(
        ([captureId, placement]) =>
          narrativeDigest(evidence.captures[captureId]) !==
          placement.reviewedNarrative,
      )
      .map(([captureId]) => captureId);
    expect(
      drifted,
      "run: bun run evidence:review <capture> [--accept]",
    ).toEqual([]);
  });

  test("ignores a re-run that only produces new pixels", () => {
    const capture = evidence.captures[Object.keys(mapping.captures)[0]];
    const recaptured = {
      ...capture,
      image: { ...capture.image, sha256: "0".repeat(64) },
    };
    expect(narrativeDigest(recaptured)).toBe(narrativeDigest(capture));
  });

  test("notices a story whose words changed", () => {
    const capture = evidence.captures[Object.keys(mapping.captures)[0]];
    const reworded = {
      ...capture,
      rule: { ...capture.rule, description: "Something else entirely." },
    };
    expect(narrativeDigest(reworded)).not.toBe(narrativeDigest(capture));
  });

  test("covers the story, rule, case and steps", () => {
    const capture = evidence.captures[Object.keys(mapping.captures)[0]];
    expect(Object.keys(narrativeOf(capture)).sort()).toEqual([
      "case",
      "presentation",
      "rule",
      "steps",
      "story",
    ]);
  });
});

describe("evidence copy checks", () => {
  const placement = {
    galleryCaption: "A caption.",
    legacyDestinationPath: "images/screenshots/example.png",
    page: "pages/features/example.md",
    socialBody: "A body.",
    socialHeading: "A heading.",
    socialKey: "example",
  };
  const inputs = (overrides = {}) => ({
    gallery:
      "      - image: /images/screenshots/example__facebook.png\n        caption: A caption.\n",
    mapping: { captures: { example: placement } },
    markdownFiles: [],
    socialCopy: { example: { body: "A body.", heading: "A heading." } },
    socialFacts: { example: [{ fact: "A fact.", sources: ["../tickets/a:1"] }] },
    ...overrides,
  });

  test("passes when every repeat matches the mapping", () => {
    expect(evidenceCopyIssues(inputs())).toEqual([]);
  });

  const cases = [
    [
      "a gallery caption that drifted",
      {
        gallery:
          "      - image: /images/screenshots/example__facebook.png\n        caption: Something else.\n",
      },
      "gallery caption",
    ],
    ["a missing gallery entry", { gallery: "" }, "0 times"],
    [
      "a social heading that drifted",
      { socialCopy: { example: { body: "A body.", heading: "Other." } } },
      "social heading",
    ],
    [
      "a social body that drifted",
      { socialCopy: { example: { body: "Other.", heading: "A heading." } } },
      "social body",
    ],
    ["missing social copy", { socialCopy: {} }, "no social copy"],
    ["missing audited facts", { socialFacts: {} }, "no audited facts"],
    [
      "another page describing the image",
      {
        markdownFiles: [
          {
            content: "images/screenshots/example.png",
            path: "pages/features/other.md",
          },
        ],
      },
      "only pages/features/example.md and pages/gallery.md may",
    ],
  ];

  for (const [name, overrides, expected] of cases) {
    test(`reports ${name}`, () => {
      const issues = evidenceCopyIssues(inputs(overrides));
      expect(issues.length).toBeGreaterThan(0);
      expect(issues.join("\n")).toContain(expected);
    });
  }

  test("allows the capture's own page and the gallery to describe it", () => {
    expect(
      evidenceCopyIssues(
        inputs({
          markdownFiles: [
            {
              content: "images/screenshots/example.png",
              path: "pages/features/example.md",
            },
            {
              content: "images/screenshots/example__facebook.png",
              path: "pages/gallery.md",
            },
          ],
        }),
      ),
    ).toEqual([]);
  });
});

describe("evidence review arguments", () => {
  test("reads capture ids, --accept and --from", () => {
    expect(parseReviewArgs(["a-capture", "--accept"])).toEqual({
      accept: true,
      from: null,
      ids: ["a-capture"],
    });
    expect(parseReviewArgs(["--from", "/tmp/evidence", "a-capture"])).toEqual({
      accept: false,
      from: "/tmp/evidence",
      ids: ["a-capture"],
    });
  });

  test("rejects a mistyped option instead of ignoring it", () => {
    expect(() => parseReviewArgs(["a-capture", "--accep"])).toThrow(
      "Unknown option",
    );
  });

  test("rejects --from with no directory", () => {
    expect(() => parseReviewArgs(["--from"])).toThrow("needs an artifact");
  });
});

describe("evidence drift messages", () => {
  const drift = { captureId: "a-capture", digest: "b".repeat(64) };

  test("send a rejected import back to the artifact it rejected", () => {
    const message = describeDrift(drift, artifactSource("/tmp/evidence"));
    expect(message).toContain(
      "bun run evidence:review a-capture --from /tmp/evidence --accept",
    );
  });

  test("send a committed-state failure to the committed data", () => {
    expect(describeDrift(drift)).toContain(
      "bun run evidence:review a-capture --accept",
    );
  });
});
