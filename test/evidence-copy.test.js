import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { Glob } from "bun";
import { SOCIAL_IMAGE_FACTS } from "../facts/social-images.js";
import { factsDigest } from "../scripts/facts/digest.js";
import { FEATURE_SOURCE_PREFIX } from "../scripts/evidence/constants.js";
import { featureSourceUrl } from "../scripts/evidence/mapping.js";
import {
  CONTENT_DIRECTORIES,
  evidenceBlockFields,
  evidenceBlockProse,
  imageMentions,
  evidenceCopyIssues,
  galleryCaptionsFor,
  socialImagePath,
} from "../scripts/evidence/copy.js";
import {
  artifactSource,
  describeDrift,
  narrativeOf,
  reviewDigest,
} from "../scripts/evidence/narrative.js";
import { parseReviewArgs } from "../scripts/evidence/review.js";
import {
  featurePathAt,
  linkedFeaturePathAt,
} from "../scripts/evidence/validation.js";
import { socialCopyDigest } from "../scripts/evidence/store.js";
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
  const stampOf = (captureId) => {
    const placement = mapping.captures[captureId];
    return reviewDigest(
      evidence.captures[captureId],
      placement,
      evidenceBlockProse(
        read(placement.page),
        placement.legacyDestinationPath,
      ),
    );
  };

  test("records that each story and its words were read together", () => {
    const drifted = Object.entries(mapping.captures)
      .filter(([captureId, placement]) => stampOf(captureId) !== placement.reviewed)
      .map(([captureId]) => captureId);
    expect(
      drifted,
      "run: bun run evidence:review <capture> [--accept]",
    ).toEqual([]);
  });

  const firstId = () => Object.keys(mapping.captures)[0];

  test("ignores a re-run that only produces new pixels", () => {
    const capture = evidence.captures[firstId()];
    const placement = mapping.captures[firstId()];
    const recaptured = {
      ...capture,
      image: { ...capture.image, sha256: "0".repeat(64) },
    };
    expect(reviewDigest(recaptured, placement, "prose")).toBe(
      reviewDigest(capture, placement, "prose"),
    );
  });

  test("notices a story whose words changed", () => {
    const capture = evidence.captures[firstId()];
    const placement = mapping.captures[firstId()];
    const reworded = {
      ...capture,
      rule: { ...capture.rule, description: "Something else entirely." },
    };
    expect(reviewDigest(reworded, placement, "prose")).not.toBe(
      reviewDigest(capture, placement, "prose"),
    );
  });

  test("notices the site's own words changing", () => {
    const capture = evidence.captures[firstId()];
    const placement = mapping.captures[firstId()];
    const stamp = reviewDigest(capture, placement, "prose");
    expect(
      reviewDigest(capture, { ...placement, caption: "Something else." }, "prose"),
    ).not.toBe(stamp);
    expect(reviewDigest(capture, placement, "Different prose.")).not.toBe(stamp);
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
  const exampleCopy = { body: "A body.", heading: "A heading." };
  const exampleFactList = [
    {
      audited: "0".repeat(40),
      fact: "A fact.",
      sources: ["../tickets/a:1"],
    },
  ];
  const exampleFacts = {
    facts: exampleFactList,
    reviewed: factsDigest(exampleCopy, exampleFactList),
  };
  const inputs = (overrides = {}) => ({
    gallery:
      "      - image: /images/screenshots/example__facebook.png\n        caption: A caption.\n",
    mapping: { captures: { example: placement } },
    markdownFiles: [],
    socialCopy: { example: exampleCopy },
    socialFacts: { example: exampleFacts },
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
      "a second gallery entry for the same capture",
      {
        gallery:
          "      - image: /images/screenshots/example__facebook.png\n        caption: A caption.\n" +
          "      - image: /images/screenshots/example.png\n        caption: A caption.\n",
      },
      "2 times, not once as the social image",
    ],
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
      "facts not read against the copy",
      { socialFacts: { example: { ...exampleFacts, reviewed: "0".repeat(64) } } },
      "has not been read against its facts",
    ],
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

  test("quote an artifact directory that would not survive a shell", () => {
    expect(
      describeDrift(drift, artifactSource("/tmp/Ticket Evidence")),
    ).toContain("--from '/tmp/Ticket Evidence'");
  });
});

describe("mapped page image mentions", () => {
  test("counts each capture's image once on its own page", () => {
    for (const placement of Object.values(mapping.captures)) {
      const page = read(placement.page);
      expect(
        imageMentions(page, placement.legacyDestinationPath) +
          imageMentions(page, socialImagePath(placement.legacyDestinationPath)),
        placement.page,
      ).toBe(1);
    }
  });

  test("counts a Markdown image in the page's prose", () => {
    expect(
      imageMentions(
        "![stale](/images/screenshots/example.png)\n    figure_src: /images/screenshots/example.png",
        "images/screenshots/example.png",
      ),
    ).toBe(2);
  });
});

describe("evidence page prose", () => {
  test("reads the prose beside each capture's screenshot", () => {
    for (const placement of Object.values(mapping.captures)) {
      const prose = evidenceBlockProse(
        read(placement.page),
        placement.legacyDestinationPath,
      );
      expect(prose, placement.page).toBeTruthy();
      expect(prose.length, placement.page).toBeGreaterThan(40);
    }
  });

  test("reads each capture's alt text and caption as whole values", () => {
    for (const [captureId, placement] of Object.entries(mapping.captures)) {
      const fields = evidenceBlockFields(
        read(placement.page),
        placement.legacyDestinationPath,
      );
      expect(fields.alt, placement.page).toBe(placement.alt);
      expect(fields.caption, placement.page).toContain(placement.caption);
      expect(fields.caption, placement.page).toContain(
        featureSourceUrl(evidence.captures[captureId].story),
      );
    }
  });

  test("unwraps a quoted caption and its doubled quotes", () => {
    const page = [
      "  - type: split-image",
      "    figure_src: /images/screenshots/example.png",
      "    figure_alt: Plain alt",
      "    figure_caption: 'It''s quoted.'",
      "",
    ].join("\n");
    expect(evidenceBlockFields(page, "images/screenshots/example.png")).toEqual({
      alt: "Plain alt",
      caption: "It's quoted.",
    });
  });

  test("returns nothing when the page does not show that image", () => {
    expect(
      evidenceBlockProse(
        read("pages/features/qr-code-check-ins.md"),
        "images/screenshots/not-on-this-page.png",
      ),
    ).toBeNull();
  });
});

describe("locked social card copy", () => {
  test("matches the copy each committed card was drawn from", () => {
    const lock = readJson("_data/ticket_evidence_lock.json");
    for (const [captureId, placement] of Object.entries(mapping.captures)) {
      expect(lock.socialCopy[captureId], captureId).toBe(
        socialCopyDigest(placement),
      );
    }
  });

  test("changes when the heading or the body changes", () => {
    const placement = { socialBody: "A body.", socialHeading: "A heading." };
    expect(socialCopyDigest({ ...placement, socialHeading: "Other." })).not.toBe(
      socialCopyDigest(placement),
    );
    expect(socialCopyDigest({ ...placement, socialBody: "Other." })).not.toBe(
      socialCopyDigest(placement),
    );
  });
});

describe("evidence source links", () => {
  test("point at the Feature each story was authored in", () => {
    for (const [captureId, placement] of Object.entries(mapping.captures)) {
      const { uri } = evidence.captures[captureId].story;
      const url = featureSourceUrl(evidence.captures[captureId].story);
      // Stated as what the link must be true of, not as the encoding rule
      // repeated: a copy of the rule would agree with a wrong rule.
      expect(url, captureId).toStartWith(FEATURE_SOURCE_PREFIX);
      const path = url.slice(FEATURE_SOURCE_PREFIX.length);
      expect(decodeURIComponent(path), captureId).toBe(uri);
      // Nothing a name carries may reshape the URL or close the caption's
      // single-quoted YAML scalar.
      expect(path, captureId).not.toMatch(/['"?#&\s]/);
      expect(read(placement.page), placement.page).toContain(
        `<small><a href="${url}">(src)</a></small>`,
      );
    }
  });

  /**
   * The two ends of the same rule. featureSourceUrl writes the link and
   * linkedFeaturePathAt reads it back, and each has been fixed on its own for
   * a character the other still disagreed about. Held together here so neither
   * can be narrowed without the other noticing.
   */
  test("write links the link check accepts, whatever a Feature is named", () => {
    const names = [
      "specs/payments/fees!(legacy).feature",
      "specs/payments/an organiser's.feature",
      "specs/payments/100% free*.feature",
      "specs/payments/capacité aux portes.feature",
      "specs/payments/a name; with, punctuation & more.feature",
      "specs/payments/tab\tand\nbreak.feature",
      "specs/payments/query?and#fragment.feature",
      "specs/payments/a slash in a name.feature",
      "specs/payments/quotes \"and\" more.feature",
    ];
    for (const uri of names) {
      const url = featureSourceUrl({ uri });
      const path = url.slice(FEATURE_SOURCE_PREFIX.length);
      expect(() => linkedFeaturePathAt(path, uri), uri).not.toThrow();
      expect(decodeURIComponent(path), uri).toBe(uri);
      // A slash in a name stays inside its segment, so the link asks for the
      // file that name belongs to rather than one a directory deeper.
      expect(path.split("/").length, uri).toBe(uri.split("/").length);
    }
  });

  test("refuse a path no filesystem could hold", () => {
    // NUL is the one byte a POSIX filename cannot hold, so a path carrying it
    // names no file and its link is dead however it is spelled.
    const uri = "specs/a\u0000.feature";
    expect(() => featurePathAt(uri, "uri")).toThrow("NUL");
    const path = featureSourceUrl({ uri }).slice(FEATURE_SOURCE_PREFIX.length);
    expect(() => linkedFeaturePathAt(path, "link")).toThrow("NUL");
  });

  test("encode each segment, so a name cannot reshape the URL", () => {
    expect(
      featureSourceUrl({ uri: "specs/payments/capacité aux portes.feature" }),
    ).toBe(
      `${FEATURE_SOURCE_PREFIX}specs/payments/capacit%C3%A9%20aux%20portes.feature`,
    );
    expect(featureSourceUrl({ uri: "specs/%2e%2e/x.feature" })).toContain(
      "%252e%252e",
    );
  });
});
