/**
 * Every rule in SCREENSHOT-EVIDENCE.md, with a way to break it.
 *
 * The rules exist to catch a screenshot whose description has gone stale, and
 * the way they fail is by enforcing less than they say. Each rule here is
 * proved twice: a real site fixture passes, and a change that breaks the rule
 * is refused. A rule added to the guide without a case below fails this file,
 * so the guide cannot promise a check nobody wrote.
 */

import { afterEach, describe, expect, test } from "bun:test";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import sharp from "sharp";
import { FEATURE_SOURCE_PREFIX } from "../scripts/evidence/constants.js";
import {
  evidenceCopyIssues,
  socialImagePath,
} from "../scripts/evidence/copy.js";
import { reviewDigest } from "../scripts/evidence/narrative.js";
import { factsDigest } from "../scripts/facts/digest.js";
import {
  importEvidence,
  validateCommittedEvidence,
} from "../scripts/evidence/store.js";
import { sha256 } from "../scripts/evidence/validation.js";

const ROOT = resolve(import.meta.dir, "..");
const CAPTURE_ID = "a-capture";
const IMAGE = "images/screenshots/a-capture.png";
const PAGE = "pages/features/a-feature.md";
const STORY_URI = "specs/owner/a-story.feature";
const SOURCE_URL = `${FEATURE_SOURCE_PREFIX}${STORY_URI}`;
const ALT = "A screenshot of the thing";
const CAPTION = "The thing, described once.";
const PROSE = "## How it works\n\nThe thing does what the story says.";

const directories = [];
afterEach(() => {
  for (const directory of directories.splice(0)) {
    rmSync(directory, { force: true, recursive: true });
  }
});

const temporary = () => {
  const directory = mkdtempSync(join(tmpdir(), "evidence-rules-"));
  directories.push(directory);
  return directory;
};

const capture = () => ({
  id: CAPTURE_ID,
  story: {
    description: "People do a thing.",
    id: "owner.a-story",
    name: "A story",
    uri: STORY_URI,
  },
  rule: {
    description: "The thing happens.",
    id: "owner.a-rule",
    name: "A rule",
  },
  case: { id: "owner.a-case", name: "A case" },
  steps: [{ keyword: "Given", text: "a thing" }],
  presentation: "branded",
});

const placement = () => ({
  alt: ALT,
  assetProfile: "mobile",
  caption: CAPTION,
  caseId: "owner.a-case",
  galleryCaption: "The thing, in the gallery.",
  legacyDestinationPath: IMAGE,
  page: PAGE,
  reviewed: reviewDigest(capture(), placement.words, PROSE),
  socialBody: "A body about the thing.",
  socialHeading: "A heading",
  socialKey: "a-capture",
});
placement.words = {
  alt: ALT,
  caption: CAPTION,
  galleryCaption: "The thing, in the gallery.",
  socialBody: "A body about the thing.",
  socialHeading: "A heading",
};

const pageMarkdown = () =>
  [
    "---",
    `ticket_evidence_capture: ${CAPTURE_ID}`,
    "blocks:",
    "  - type: split-image",
    "    content: |",
    ...PROSE.split("\n").map((line) => `      ${line}`.trimEnd()),
    `    figure_src: /${IMAGE}`,
    `    figure_alt: ${ALT}`,
    `    figure_caption: '${CAPTION} <small><a href="${SOURCE_URL}">(src)</a></small>'`,
    "---",
    "",
  ].join("\n");

const write = (root, relativePath, contents) => {
  const destination = join(root, relativePath);
  mkdirSync(dirname(destination), { recursive: true });
  writeFileSync(destination, contents);
};

const pngBytes = async () =>
  await sharp({
    create: { background: "#ffffff", channels: 3, height: 24, width: 16 },
  })
    .png()
    .toBuffer();

const buildSite = async () => {
  const root = temporary();
  write(
    root,
    "_data/ticket_evidence_map.json",
    `${JSON.stringify({ captures: { [CAPTURE_ID]: placement() }, schemaVersion: 2 }, null, 2)}\n`,
  );
  write(root, PAGE, pageMarkdown());
  write(root, `evidence-themes/${CAPTURE_ID}.css`, ":root {}\n");
  // A site awaiting its first import still ships the screenshot it has.
  write(root, IMAGE, await pngBytes());
  return root;
};

const buildArtifact = async (uri = STORY_URI) => {
  const artifactDir = temporary();
  const bytes = await pngBytes();
  write(artifactDir, "assets/a-capture.png", bytes);
  write(
    artifactDir,
    "manifest.json",
    `${JSON.stringify(
      {
        app: {
          commit: "1234567890abcdef1234567890abcdef12345678",
          repository: "chobbledotcom/tickets",
        },
        captures: [
          {
            ...capture(),
            story: { ...capture().story, uri },
            assets: [
              {
                height: 24,
                mediaType: "image/png",
                path: "assets/a-capture.png",
                profile: "mobile",
                sha256: sha256(new Uint8Array(bytes)),
                viewport: { deviceScaleFactor: 1, height: 844, width: 390 },
                width: 16,
              },
            ],
          },
        ],
        schemaVersion: 2,
      },
      null,
      2,
    )}\n`,
  );
  return artifactDir;
};

const copySocialImage = async ({ inputPath, outputPath }) =>
  await Bun.write(outputPath, Bun.file(inputPath));

/** An imported site, ready for one rule to be broken. */
const importedSite = async () => {
  const root = await buildSite();
  const artifactDir = await buildArtifact();
  await importEvidence({ artifactDir, root, createSocialImage: copySocialImage });
  return { artifactDir, root };
};

const editMapping = (root, change) => {
  const path = join(root, "_data/ticket_evidence_map.json");
  const value = JSON.parse(readFileSync(path, "utf8"));
  change(value.captures[CAPTURE_ID]);
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
};

const editPage = (root, change) => {
  const path = join(root, PAGE);
  writeFileSync(path, change(readFileSync(path, "utf8")));
};

/**
 * One rule, and a change that breaks it. `rule` is the numbered rule in
 * SCREENSHOT-EVIDENCE.md; `break` leaves the site in a state the checks must
 * refuse.
 */
const RULES = [
  {
    break: (root) => editMapping(root, (entry) => delete entry.galleryCaption),
    expect: "galleryCaption",
    name: "one mapping entry holds every word",
    rule: 1,
  },
  {
    break: (root) =>
      editPage(root, (page) => page.replace(ALT, "Something else")),
    expect: "the evidence alt is",
    name: "the page repeats the mapping",
    rule: 2,
  },
  {
    break: (root) => editMapping(root, (entry) => {
      entry.caption = `${CAPTION} And more.`;
    }),
    expect: "the evidence caption is",
    name: "a page value is compared whole, not as a substring",
    rule: 2,
  },
  {
    break: (root) =>
      editPage(root, (page) => `${page}\nAlso /${IMAGE} appears here.\n`),
    expect: "names its images",
    name: "the mapped page names its images once",
    rule: 6,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(`figure_src: /${IMAGE}`, `figure_src: /${IMAGE}?v=1`),
      ),
    expect: "blocks, not one",
    name: "the block names its image and nothing after it",
    rule: 6,
  },
  {
    break: (root) =>
      editPage(root, (page) => `${page}${page.slice(page.indexOf("  - type:"))}`),
    expect: "blocks, not one",
    name: "the mapped page shows its screenshot in one block",
    rule: 6,
  },
  {
    break: (root) => rmSync(join(root, `evidence-themes/${CAPTURE_ID}.css`)),
    expect: "no evidence theme for",
    name: "every capture is taken in a look this repository keeps",
    rule: 11,
  },
  {
    break: (root) => editMapping(root, (entry) => {
      entry.socialHeading = "A different heading";
    }),
    expect: "the social card text changed",
    name: "the social card is locked to the copy it was drawn from",
    rule: 10,
  },
  {
    break: (root) => editMapping(root, (entry) => {
      entry.reviewed = "0".repeat(64);
    }),
    expect: "have not been read together",
    name: "the story and the words were read together",
    rule: 7,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(SOURCE_URL, "https://example.com/x.feature"),
      ),
    expect: "the evidence caption is",
    name: "the source link is the story's own Feature",
    rule: 8,
  },
  {
    break: (root) => editMapping(root, (entry) => {
      entry.reviewed = "0".repeat(64);
    }),
    expect: "have not been read together",
    name: "a changed pair stops the committed state",
    rule: 9,
  },
];

/** The rules the copy checks own. They read the whole site's Markdown rather
 * than one imported root, so they are broken through their inputs. */
const COPY_RULES = [
  {
    break: (inputs) => ({
      ...inputs,
      markdownFiles: [
        { content: `/${IMAGE}`, path: "pages/features/somewhere-else.md" },
      ],
    }),
    expect: "describes the image, but only",
    name: "only the capture's page and the gallery describe it",
    rule: 3,
  },
  {
    break: (inputs) => ({ ...inputs, gallery: "" }),
    expect: "0 times",
    name: "every capture is in the gallery",
    rule: 4,
  },
  {
    break: (inputs) => ({
      ...inputs,
      gallery: `${inputs.gallery}${inputs.gallery}`,
    }),
    expect: "not once as the social image",
    name: "a capture is in the gallery only once",
    rule: 4,
  },
  {
    break: (inputs) => ({ ...inputs, socialFacts: {} }),
    expect: "no audited facts",
    name: "every capture has audited facts",
    rule: 5,
  },
  {
    break: (inputs) => ({
      ...inputs,
      socialCopy: { "a-capture": { body: "Other.", heading: "A heading" } },
    }),
    expect: "the social body is",
    name: "the social card repeats the mapping",
    rule: 2,
  },
];

const A_CAPTURE_COPY = {
  body: "A body about the thing.",
  heading: "A heading",
};
const A_CAPTURE_FACT_LIST = [
  { audited: "0".repeat(40), fact: "A fact.", sources: ["../tickets/a:1"] },
];
const aCaptureFacts = () => ({
  facts: A_CAPTURE_FACT_LIST,
  reviewed: factsDigest(A_CAPTURE_COPY, A_CAPTURE_FACT_LIST),
});

const copyInputs = () => ({
  gallery: `      - image: /${socialImagePath(IMAGE)}\n        caption: ${placement().galleryCaption}\n`,
  mapping: { captures: { [CAPTURE_ID]: placement() } },
  markdownFiles: [],
  socialCopy: { "a-capture": A_CAPTURE_COPY },
  socialFacts: { "a-capture": aCaptureFacts() },
});

/**
 * The same rules, broken before the first import. Three findings in a row
 * landed here because the harness only ever broke a rule after importing, so
 * nothing watched the state a legacy site builds in.
 */
const PRE_IMPORT_RULES = [
  {
    break: (root) =>
      editPage(root, (page) => page.replace(ALT, "Something else")),
    expect: "the evidence alt is",
    name: "the page repeats the mapping",
    rule: 2,
  },
  {
    break: (root) =>
      editPage(root, (page) => `${page}\nAlso /${IMAGE} appears here.\n`),
    expect: "names its images",
    name: "the mapped page names its images once",
    rule: 6,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(` <small><a href="${SOURCE_URL}">(src)</a></small>`, ""),
      ),
    expect: "not a Feature under",
    name: "the caption carries a source link at all",
    rule: 8,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(SOURCE_URL, "https://example.com/x.feature"),
      ),
    expect: "not a Feature under",
    name: "the source link points into the app's Features",
    rule: 8,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(
          SOURCE_URL,
          `${FEATURE_SOURCE_PREFIX}specs/%2e%2e/outside.feature`,
        ),
      ),
    expect: "not a Feature under",
    name: "the source link cannot climb out of the Features",
    rule: 8,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(
          SOURCE_URL,
          `${FEATURE_SOURCE_PREFIX}specs/&#46;&#46;/outside.feature`,
        ),
      ),
    expect: "not a Feature under",
    name: "the source link cannot climb out with character references",
    rule: 8,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(
          SOURCE_URL,
          `${FEATURE_SOURCE_PREFIX}specs/&#x2e&#x2e/outside.feature`,
        ),
      ),
    expect: "not a Feature under",
    name: "the source link cannot climb out with semicolonless references",
    rule: 8,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(SOURCE_URL, `${SOURCE_URL.slice(0, -8)}?name=.feature`),
      ),
    expect: "not a Feature under",
    name: "the source link cannot hide its path behind a query",
    rule: 8,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(SOURCE_URL, `${SOURCE_URL.slice(0, -8)}#name.feature`),
      ),
    expect: "not a Feature under",
    name: "the source link cannot hide its path behind a fragment",
    rule: 8,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(
          SOURCE_URL,
          `${FEATURE_SOURCE_PREFIX}specs/.\t./outside.feature`,
        ),
      ),
    expect: "not a Feature under",
    name: "the source link cannot climb out with a stripped tab",
    rule: 8,
  },
  {
    break: (root) =>
      editPage(root, (page) =>
        page.replace(
          SOURCE_URL,
          `${FEATURE_SOURCE_PREFIX}specs/owner%2Fa-story.feature`,
        ),
      ),
    expect: "not a Feature under",
    name: "the source link cannot hide a separator inside a segment",
    rule: 8,
  },
  {
    break: (root) =>
      editPage(root, (page) => page.replace(" <small><a", "  <small><a")),
    expect: "source link",
    name: "the caption joins its link the way the import writes it",
    rule: 8,
  },
];

describe("evidence rules", () => {
  test("a site that follows every rule is accepted", async () => {
    const { root } = await importedSite();
    expect(await validateCommittedEvidence({ root })).toMatchObject({
      state: "imported",
    });
  });

  test("a renamed Feature moves the page's source link", async () => {
    const root = await buildSite();
    const renamed = "specs/owner/a renamed story.feature";
    await importEvidence({
      artifactDir: await buildArtifact(renamed),
      root,
      createSocialImage: copySocialImage,
    });
    const page = readFileSync(join(root, PAGE), "utf8");
    expect(page).toContain(
      `<a href="${FEATURE_SOURCE_PREFIX}specs/owner/a%20renamed%20story.feature">(src)</a>`,
    );
    // Only the link moved: the caption still says what it said.
    expect(page).toContain(`figure_caption: '${CAPTION} <small>`);
    expect(await validateCommittedEvidence({ root })).toMatchObject({
      state: "imported",
    });
  });

  test("a Feature named with an apostrophe stays inside its YAML scalar", async () => {
    const root = await buildSite();
    await importEvidence({
      artifactDir: await buildArtifact("specs/owner/an organiser's.feature"),
      root,
      createSocialImage: copySocialImage,
    });
    const page = readFileSync(join(root, PAGE), "utf8");
    expect(page).toContain("an%20organiser%27s.feature");
    // A bare apostrophe would close the single-quoted figure_caption early.
    expect(page.split("figure_caption: ")[1]).not.toContain("'s.feature");
    expect(await validateCommittedEvidence({ root })).toMatchObject({
      state: "imported",
    });
  });

  test("a link written with doubled apostrophes still moves", async () => {
    const root = await buildSite();
    // As YAML writes an apostrophe inside a single-quoted scalar.
    editPage(root, (page) =>
      page.replace(
        SOURCE_URL,
        `${FEATURE_SOURCE_PREFIX}specs/owner/a story''s.feature`,
      ),
    );
    await importEvidence({
      artifactDir: await buildArtifact("specs/owner/a renamed story.feature"),
      root,
      createSocialImage: copySocialImage,
    });
    const page = readFileSync(join(root, PAGE), "utf8");
    expect(page).toContain("a%20renamed%20story.feature");
    expect(page).not.toContain("a story''s.feature");
  });

  test("another figure's link on the page is left where it is", async () => {
    const root = await buildSite();
    const otherLink = `${FEATURE_SOURCE_PREFIX}specs/owner/another.feature`;
    // A figure of its own, before the evidence block and nothing to do with it.
    editPage(root, (page) =>
      page.replace(
        "  - type: split-image",
        [
          "  - type: split-image",
          "    figure_src: /images/unrelated.png",
          `    figure_caption: 'Something else <small><a href="${otherLink}">(src)</a></small>'`,
          "  - type: split-image",
        ].join("\n"),
      ),
    );
    await importEvidence({
      artifactDir: await buildArtifact("specs/owner/a renamed story.feature"),
      root,
      createSocialImage: copySocialImage,
    });
    const page = readFileSync(join(root, PAGE), "utf8");
    expect(page).toContain(otherLink);
    expect(page).toContain("a%20renamed%20story.feature");
    expect(page).not.toContain(SOURCE_URL);
  });

  test("a link moves on a page the placement checks accept", async () => {
    const root = await buildSite();
    // YAML the placement checks accept, so the rewrite has to accept it too.
    editPage(root, (page) =>
      page.replace(`figure_src: /${IMAGE}`, `figure_src: /${IMAGE} # evidence`),
    );
    await importEvidence({
      artifactDir: await buildArtifact("specs/owner/a renamed story.feature"),
      root,
      createSocialImage: copySocialImage,
    });
    expect(readFileSync(join(root, PAGE), "utf8")).toContain(
      "a%20renamed%20story.feature",
    );
  });

  test("a link inside the caption's own words is left alone", async () => {
    const root = await buildSite();
    // Its own words, and a link that looks exactly like a source link.
    const own =
      '<small><a href="https://example.com/docs">(src)</a></small>';
    editPage(root, (page) => page.replace(CAPTION, `${CAPTION} See ${own}.`));
    editMapping(root, (entry) => {
      entry.caption = `${CAPTION} See ${own}.`;
      entry.reviewed = reviewDigest(
        capture(),
        { ...placement.words, caption: `${CAPTION} See ${own}.` },
        PROSE,
      );
    });
    await importEvidence({
      artifactDir: await buildArtifact("specs/owner/a renamed story.feature"),
      root,
      createSocialImage: copySocialImage,
    });
    const page = readFileSync(join(root, PAGE), "utf8");
    expect(page).toContain(own);
    expect(page).toContain('a%20renamed%20story.feature">(src)</a>');
  });

  test("refuses two captures sharing a page", async () => {
    const root = await buildSite();
    const mapPath = join(root, "_data/ticket_evidence_map.json");
    const map = JSON.parse(readFileSync(mapPath, "utf8"));
    map.captures["b-capture"] = {
      ...placement(),
      legacyDestinationPath: "images/screenshots/b-capture.png",
      socialKey: "b-capture",
    };
    writeFileSync(mapPath, `${JSON.stringify(map, null, 2)}\n`);
    expect(
      importEvidence({
        artifactDir: await buildArtifact(),
        root,
        createSocialImage: copySocialImage,
      }),
    ).rejects.toThrow("duplicate value");
  });

  test("a refused import leaves the page's old link alone", async () => {
    const root = await buildSite();
    const before = readFileSync(join(root, PAGE), "utf8");
    // Renamed and rendered badly: the rename must not outlive the refusal.
    const failing = importEvidence({
      artifactDir: await buildArtifact("specs/owner/a renamed story.feature"),
      root,
      createSocialImage: () => {
        throw new Error("the card could not be drawn");
      },
    });
    expect(failing).rejects.toThrow("the card could not be drawn");
    await failing.catch(() => {});
    expect(readFileSync(join(root, PAGE), "utf8")).toBe(before);
  });

  for (const { name, break: breakRule, expect: message } of RULES) {
    test(`refuses a site where ${name} is broken`, async () => {
      const { root } = await importedSite();
      breakRule(root);
      await expect(validateCommittedEvidence({ root })).rejects.toThrow(
        message,
      );
    });
  }

  test("accepts a site that has not imported yet", async () => {
    const root = await buildSite();
    expect(await validateCommittedEvidence({ root })).toMatchObject({
      state: "awaiting-import",
    });
  });

  for (const { name, break: breakRule, expect: message } of PRE_IMPORT_RULES) {
    test(`refuses a site before its first import where ${name} is broken`, async () => {
      const root = await buildSite();
      breakRule(root);
      await expect(validateCommittedEvidence({ root })).rejects.toThrow(
        message,
      );
    });
  }

  test("accepts copy that follows every rule", () => {
    expect(evidenceCopyIssues(copyInputs())).toEqual([]);
  });

  for (const { name, break: breakRule, expect: message } of COPY_RULES) {
    test(`reports copy where ${name} is broken`, () => {
      const issues = evidenceCopyIssues(breakRule(copyInputs()));
      expect(issues.join("\n")).toContain(message);
    });
  }

  test("covers every rule the guide states", () => {
    const guide = readFileSync(join(ROOT, "SCREENSHOT-EVIDENCE.md"), "utf8");
    const stated = [...guide.matchAll(/^(\d+)\. \*\*/gm)].map(([, number]) =>
      Number(number),
    );
    expect(stated.length).toBeGreaterThan(0);
    const covered = [...RULES, ...COPY_RULES, ...PRE_IMPORT_RULES].map(
      (entry) => entry.rule,
    );
    expect(
      stated.filter((number) => !covered.includes(number)),
      "every numbered rule in SCREENSHOT-EVIDENCE.md needs a case in RULES",
    ).toEqual([]);
  });
});
