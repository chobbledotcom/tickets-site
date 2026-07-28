import { afterEach, describe, expect, test } from "bun:test";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import sharp from "sharp";
import { loadEvidenceArtifact } from "../scripts/evidence/artifact.js";
import { parseFromArgument } from "../scripts/evidence/args.js";
import {
  EVIDENCE_DATA_PATH,
  EVIDENCE_LOCK_PATH,
} from "../scripts/evidence/constants.js";
import { validateEvidenceManifest } from "../scripts/evidence/schema.js";
import { validateEvidenceMapping } from "../scripts/evidence/mapping.js";
import {
  importEvidence,
  validateCommittedEvidence,
} from "../scripts/evidence/store.js";
import { reviewDigest } from "../scripts/evidence/narrative.js";
import { sha256 } from "../scripts/evidence/validation.js";

const temporaryDirectories = [];
const CAPTURE_ID = "servicing-studio-floor-hold";
const CASE_ID = "servicing.hold-on-dashboard";
const APP_COMMIT = "1234567890abcdef1234567890abcdef12345678";
const ASSET_PATH = "assets/servicing-studio-floor-hold.png";
const DESTINATION = "images/screenshots/servicing-studio-floor-hold.png";

const tempDirectory = () => {
  const directory = mkdtempSync(join(tmpdir(), "tickets-site-evidence-test-"));
  temporaryDirectories.push(directory);
  return directory;
};

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { force: true, recursive: true });
  }
});

const mapping = (extraCaptures = {}) => ({
  schemaVersion: 1,
  captures: {
    [CAPTURE_ID]: {
      page: "pages/features/servicing-events.md",
      legacyDestinationPath: DESTINATION,
      assetProfile: "mobile",
      caseId: CASE_ID,
      alt: "Admin area showing a service event",
      caption: "The organiser can see the hold while customers cannot.",
      galleryCaption: "A service hold on the dashboard.",
      socialHeading: "Hold capacity for servicing",
      socialBody: "Block places for maintenance without adding a customer.",
      sourceUrl:
        "https://github.com/chobbledotcom/tickets/blob/main/specs/servicing/hold-and-cost.feature",
      socialKey: "servicing-events",
      reviewed: REVIEWED,
    },
    ...extraCaptures,
  },
});

const manifest = (asset) => ({
  schemaVersion: 1,
  app: {
    repository: "chobbledotcom/tickets",
    commit: APP_COMMIT,
  },
  captures: [
    {
      id: CAPTURE_ID,
      story: {
        id: "servicing.hold-and-cost",
        name: "An organiser holds and costs a service event",
        description: "A service event reserves capacity without a customer ticket.",
      },
      rule: {
        id: "servicing.hold-is-visible-and-private",
        name: "A service hold appears to the organiser but not to the customer",
        description: "The hold reserves capacity and stays private.",
      },
      case: {
        id: CASE_ID,
        name: "The organiser sees a new hold on the dashboard",
      },
      steps: [
        {
          keyword: "Given",
          text: "an organiser has created a Boiler Service hold on Room A",
        },
        {
          keyword: "Then",
          text: "the admin dashboard shows the Boiler Service hold",
        },
        {
          keyword: "And",
          text: "the public site does not show Boiler Service",
        },
      ],
      presentation: "canonical",
      assets: [asset],
    },
  ],
});

const PAGE_PROSE = null;
const REVIEWED = reviewDigest(
  manifest({}).captures[0],
  {
    alt: "Admin area showing a service event",
    caption: "The organiser can see the hold while customers cannot.",
    galleryCaption: "A service hold on the dashboard.",
    socialBody: "Block places for maintenance without adding a customer.",
    socialHeading: "Hold capacity for servicing",
  },
  PAGE_PROSE,
);

const fixturePng = async () =>
  await sharp({
    create: {
      background: "#e9edef",
      channels: 3,
      height: 24,
      width: 16,
    },
  })
    .png()
    .toBuffer();

const assetFor = (bytes) => ({
  profile: "mobile",
  path: ASSET_PATH,
  sha256: sha256(bytes),
  width: 16,
  height: 24,
  mediaType: "image/png",
  viewport: { width: 390, height: 844, deviceScaleFactor: 1 },
});

const writeJson = (filePath, value) => {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
};

const createSite = async () => {
  const root = tempDirectory();
  writeJson(join(root, "_data/ticket_evidence_map.json"), mapping());
  const page = join(root, "pages/features/servicing-events.md");
  mkdirSync(dirname(page), { recursive: true });
  writeFileSync(
    page,
    `---\nticket_evidence_capture: ${CAPTURE_ID}\nblocks:\n  - type: split-image\n    figure_src: /${DESTINATION}\n    figure_alt: ${mapping().captures[CAPTURE_ID].alt}\n    figure_caption: '${mapping().captures[CAPTURE_ID].caption} <small><a href="${mapping().captures[CAPTURE_ID].sourceUrl}">(src)</a></small>'\n---\n`,
  );
  mkdirSync(join(root, "images/screenshots"), { recursive: true });
  writeFileSync(join(root, DESTINATION), await fixturePng());
  return root;
};

const createArtifact = async (changeManifest = (value) => value, bytes) => {
  const artifactDir = tempDirectory();
  const imageBytes = bytes ?? (await fixturePng());
  mkdirSync(join(artifactDir, "assets"), { recursive: true });
  writeFileSync(join(artifactDir, ASSET_PATH), imageBytes);
  writeJson(
    join(artifactDir, "manifest.json"),
    changeManifest(manifest(assetFor(imageBytes))),
  );
  return artifactDir;
};

const copySocialImage = async ({ inputPath, outputPath }) => {
  await Bun.write(outputPath, Bun.file(inputPath));
};

const changed = (change) => {
  const bytes = Buffer.alloc(1);
  return change(manifest(assetFor(bytes)));
};

describe("evidence manifest validation", () => {
  const invalidManifests = [
    ["schema version", (value) => ({ ...value, schemaVersion: 2 }), "schemaVersion"],
    [
      "repository",
      (value) => ({ ...value, app: { ...value.app, repository: "other/repo" } }),
      "repository",
    ],
    [
      "commit",
      (value) => ({ ...value, app: { ...value.app, commit: "short" } }),
      "commit SHA",
    ],
    [
      "capture ID",
      (value) => ({
        ...value,
        captures: [{ ...value.captures[0], id: "Invalid ID" }],
      }),
      "invalid ID",
    ],
    [
      "story name",
      (value) => ({
        ...value,
        captures: [
          { ...value.captures[0], story: { ...value.captures[0].story, name: "" } },
        ],
      }),
      "non-empty string",
    ],
    [
      "presentation",
      (value) => ({
        ...value,
        captures: [{ ...value.captures[0], presentation: "draft" }],
      }),
      "canonical, branded, editorial",
    ],
    [
      "empty steps",
      (value) => ({ ...value, captures: [{ ...value.captures[0], steps: [] }] }),
      "must not be empty",
    ],
    [
      "step keyword",
      (value) => ({
        ...value,
        captures: [
          {
            ...value.captures[0],
            steps: [{ ...value.captures[0].steps[0], keyword: "Maybe" }],
          },
        ],
      }),
      "Given, When, Then, And, But",
    ],
    [
      "asset profile",
      (value) => ({
        ...value,
        captures: [
          {
            ...value.captures[0],
            assets: [{ ...value.captures[0].assets[0], profile: "desktop" }],
          },
        ],
      }),
      "mobile",
    ],
    [
      "asset path",
      (value) => ({
        ...value,
        captures: [
          {
            ...value.captures[0],
            assets: [{ ...value.captures[0].assets[0], path: "assets/../bad.png" }],
          },
        ],
      }),
      "safe relative path",
    ],
    [
      "media type",
      (value) => ({
        ...value,
        captures: [
          {
            ...value.captures[0],
            assets: [{ ...value.captures[0].assets[0], mediaType: "image/jpeg" }],
          },
        ],
      }),
      "image/png",
    ],
    [
      "width",
      (value) => ({
        ...value,
        captures: [
          {
            ...value.captures[0],
            assets: [{ ...value.captures[0].assets[0], width: 0 }],
          },
        ],
      }),
      "positive whole number",
    ],
    [
      "device scale factor",
      (value) => ({
        ...value,
        captures: [
          {
            ...value.captures[0],
            assets: [
              {
                ...value.captures[0].assets[0],
                viewport: {
                  ...value.captures[0].assets[0].viewport,
                  deviceScaleFactor: 0,
                },
              },
            ],
          },
        ],
      }),
      "positive number",
    ],
    [
      "SHA-256",
      (value) => ({
        ...value,
        captures: [
          {
            ...value.captures[0],
            assets: [{ ...value.captures[0].assets[0], sha256: "bad" }],
          },
        ],
      }),
      "SHA-256 digest",
    ],
    [
      "unknown field",
      (value) => ({ ...value, extra: true }),
      "unknown fields",
    ],
  ];

  for (const [name, change, message] of invalidManifests) {
    test(`rejects an invalid ${name}`, () => {
      expect(() => validateEvidenceManifest(changed(change))).toThrow(message);
    });
  }

  test("rejects duplicate capture IDs", () => {
    const value = changed((source) => ({
      ...source,
      captures: [source.captures[0], structuredClone(source.captures[0])],
    }));
    expect(() => validateEvidenceManifest(value)).toThrow("duplicate value");
  });

  test("rejects duplicate asset profiles", () => {
    const value = changed((source) => ({
      ...source,
      captures: [
        {
          ...source.captures[0],
          assets: [source.captures[0].assets[0], source.captures[0].assets[0]],
        },
      ],
    }));
    expect(() => validateEvidenceManifest(value)).toThrow("duplicate value: mobile");
  });
});

describe("evidence artifact files", () => {
  test("rejects a capture linked to the wrong case", async () => {
    const artifactDir = await createArtifact((value) => ({
      ...value,
      captures: [
        {
          ...value.captures[0],
          case: { ...value.captures[0].case, id: "servicing.other-case" },
        },
      ],
    }));

    await expect(loadEvidenceArtifact(artifactDir, mapping())).rejects.toThrow(
      "expected case servicing.hold-on-dashboard",
    );
  });

  test("rejects a missing referenced image", async () => {
    const artifactDir = await createArtifact();
    rmSync(join(artifactDir, ASSET_PATH));
    await expect(loadEvidenceArtifact(artifactDir, mapping())).rejects.toThrow(
      "could not read",
    );
  });

  test("rejects a hash mismatch", async () => {
    const artifactDir = await createArtifact((value) => {
      value.captures[0].assets[0].sha256 = "a".repeat(64);
      return value;
    });
    await expect(loadEvidenceArtifact(artifactDir, mapping())).rejects.toThrow(
      "SHA-256 mismatch",
    );
  });

  test("rejects image dimensions that differ from the manifest", async () => {
    const artifactDir = await createArtifact((value) => {
      value.captures[0].assets[0].height = 25;
      return value;
    });
    await expect(loadEvidenceArtifact(artifactDir, mapping())).rejects.toThrow(
      "dimensions do not match",
    );
  });

  test("rejects bytes that are not a PNG", async () => {
    const bytes = await sharp({
      create: { background: "white", channels: 3, height: 24, width: 16 },
    })
      .jpeg()
      .toBuffer();
    const artifactDir = await createArtifact((value) => {
      value.captures[0].assets[0].sha256 = sha256(bytes);
      return value;
    }, bytes);
    await expect(loadEvidenceArtifact(artifactDir, mapping())).rejects.toThrow(
      "is not a PNG",
    );
  });

  test("rejects an unknown capture", async () => {
    const artifactDir = await createArtifact((value) => {
      const extra = structuredClone(value.captures[0]);
      extra.id = "extra-capture";
      extra.case.id = "servicing.extra-case";
      value.captures.push(extra);
      return value;
    });
    await expect(loadEvidenceArtifact(artifactDir, mapping())).rejects.toThrow(
      "no site mapping for extra-capture",
    );
  });

  test("rejects a missing mapped capture", async () => {
    const artifactDir = await createArtifact();
    const extraMapping = {
      ...mapping().captures[CAPTURE_ID],
      caseId: "servicing.second-case",
      legacyDestinationPath: "images/screenshots/second-capture.png",
      page: "pages/features/second.md",
      socialKey: "second-capture",
    };
    await expect(
      loadEvidenceArtifact(artifactDir, mapping({ "second-capture": extraMapping })),
    ).rejects.toThrow("missing mapped capture second-capture");
  });
});

describe("evidence import", () => {
  test("writes validated site data, images and a lock", async () => {
    const root = await createSite();
    const artifactDir = await createArtifact();
    const lock = await importEvidence({
      artifactDir,
      root,
    });

    expect(lock.app.commit).toBe(APP_COMMIT);
    expect(await Bun.file(join(root, DESTINATION)).exists()).toBe(true);
    expect(
      await Bun.file(
        join(root, "images/screenshots/servicing-studio-floor-hold__facebook.png"),
      ).exists(),
    ).toBe(true);
    const socialMetadata = await sharp(
      join(root, "images/screenshots/servicing-studio-floor-hold__facebook.png"),
    ).metadata();
    expect({ height: socialMetadata.height, width: socialMetadata.width }).toEqual({
      height: 630,
      width: 1200,
    });
    const data = JSON.parse(readFileSync(join(root, EVIDENCE_DATA_PATH), "utf8"));
    expect(data.captures[CAPTURE_ID].case.id).toBe(CASE_ID);
    expect(data.captures[CAPTURE_ID].image.src).toBe(`/${DESTINATION}`);
    await expect(validateCommittedEvidence({ root })).resolves.toEqual({
      appCommit: APP_COMMIT,
      state: "imported",
    });
  });

  test("produces deterministic data and locks", async () => {
    const firstRoot = await createSite();
    const secondRoot = await createSite();
    const artifactDir = await createArtifact();
    const options = { artifactDir, createSocialImage: copySocialImage };
    await importEvidence({ ...options, root: firstRoot });
    await importEvidence({ ...options, root: secondRoot });

    expect(readFileSync(join(firstRoot, EVIDENCE_DATA_PATH), "utf8")).toBe(
      readFileSync(join(secondRoot, EVIDENCE_DATA_PATH), "utf8"),
    );
    expect(readFileSync(join(firstRoot, EVIDENCE_LOCK_PATH), "utf8")).toBe(
      readFileSync(join(secondRoot, EVIDENCE_LOCK_PATH), "utf8"),
    );
  });

  test("refuses an import whose words changed without a second look", async () => {
    const root = await createSite();
    const edited = mapping();
    edited.captures[CAPTURE_ID].caption = "A different caption.";
    writeJson(join(root, "_data/ticket_evidence_map.json"), edited);
    const page = join(root, "pages/features/servicing-events.md");
    writeFileSync(
      page,
      readFileSync(page, "utf8").replace(
        mapping().captures[CAPTURE_ID].caption,
        "A different caption.",
      ),
    );
    const artifactDir = await createArtifact();
    await expect(
      importEvidence({ artifactDir, root, createSocialImage: copySocialImage }),
    ).rejects.toThrow("have not been read together");
  });

  test("refuses an import whose story nobody has read", async () => {
    const root = await createSite();
    const artifactDir = await createArtifact((value) => ({
      ...value,
      captures: [
        {
          ...value.captures[0],
          rule: { ...value.captures[0].rule, description: "Reworded." },
        },
      ],
    }));
    await expect(
      importEvidence({ artifactDir, root, createSocialImage: copySocialImage }),
    ).rejects.toThrow("have not been read together");
  });

  test("imports a re-run of the same story", async () => {
    const root = await createSite();
    const artifactDir = await createArtifact();
    const lock = await importEvidence({
      artifactDir,
      root,
      createSocialImage: copySocialImage,
    });
    expect(lock.app.commit).toBe(APP_COMMIT);
  });

  test("refuses committed evidence whose social copy was edited after import", async () => {
    const root = await createSite();
    const artifactDir = await createArtifact();
    await importEvidence({ artifactDir, root, createSocialImage: copySocialImage });
    const edited = mapping();
    edited.captures[CAPTURE_ID].socialHeading = "A different heading";
    writeJson(join(root, "_data/ticket_evidence_map.json"), edited);
    await expect(validateCommittedEvidence({ root })).rejects.toThrow(
      "the social card text changed since the card was drawn",
    );
  });

  test("refuses a page whose alt text says more than the mapping", async () => {
    const root = await createSite();
    const page = join(root, "pages/features/servicing-events.md");
    writeFileSync(
      page,
      readFileSync(page, "utf8").replace(
        mapping().captures[CAPTURE_ID].alt,
        `${mapping().captures[CAPTURE_ID].alt} with a stale suffix`,
      ),
    );
    await expect(validateCommittedEvidence({ root })).rejects.toThrow(
      "the evidence alt is",
    );
  });

  test("draws each card from the words its lock records", async () => {
    const root = await createSite();
    const artifactDir = await createArtifact();
    const drawn = [];
    await importEvidence({
      artifactDir,
      root,
      createSocialImage: async (options) => {
        drawn.push(options.copy);
        await copySocialImage(options);
      },
    });
    expect(drawn).toEqual([
      {
        body: mapping().captures[CAPTURE_ID].socialBody,
        heading: mapping().captures[CAPTURE_ID].socialHeading,
      },
    ]);
  });

  test("refuses a page that shows its screenshot twice", async () => {
    const root = await createSite();
    const page = join(root, "pages/features/servicing-events.md");
    const content = readFileSync(page, "utf8");
    const block = content.slice(content.indexOf("  - type: split-image"), -4);
    writeFileSync(page, `${content}${block}`);
    await expect(validateCommittedEvidence({ root })).rejects.toThrow(
      "in 2 blocks, not one",
    );
  });

  test("reviews an artifact whose case was renamed", async () => {
    const artifactDir = await createArtifact((value) => ({
      ...value,
      captures: [
        {
          ...value.captures[0],
          case: { ...value.captures[0].case, id: "servicing.renamed-case" },
        },
      ],
    }));
    const forReview = await loadEvidenceArtifact(artifactDir, mapping(), {
      requireCaseLink: false,
    });
    expect(forReview.manifest.captures[0].case.id).toBe(
      "servicing.renamed-case",
    );
    await expect(loadEvidenceArtifact(artifactDir, mapping())).rejects.toThrow(
      "expected case",
    );
  });

  test("detects changed committed bytes", async () => {
    const root = await createSite();
    const artifactDir = await createArtifact();
    await importEvidence({ artifactDir, root, createSocialImage: copySocialImage });
    writeFileSync(join(root, DESTINATION), "changed");
    await expect(validateCommittedEvidence({ root })).rejects.toThrow(
      "SHA-256 mismatch",
    );
  });

  test("accepts the legacy image before the first import", async () => {
    const root = await createSite();
    await expect(validateCommittedEvidence({ root })).resolves.toEqual({
      state: "awaiting-import",
    });
  });

  test("rejects an incomplete committed store", async () => {
    const root = await createSite();
    writeJson(join(root, EVIDENCE_DATA_PATH), {});
    await expect(validateCommittedEvidence({ root })).rejects.toThrow(
      "must either both exist or both be absent",
    );
  });

  test("rejects a page that does not place its mapped capture", async () => {
    const root = await createSite();
    writeFileSync(join(root, "pages/features/servicing-events.md"), "---\n---\n");
    await expect(validateCommittedEvidence({ root })).rejects.toThrow(
      "does not select evidence capture",
    );
  });
});

describe("evidence mapping validation", () => {
  test("rejects traversal in a destination", () => {
    const value = mapping();
    value.captures[CAPTURE_ID].legacyDestinationPath =
      "images/screenshots/../outside.png";
    expect(() => validateEvidenceMapping(value)).toThrow("safe relative path");
  });

  test("rejects duplicate public destinations", () => {
    const duplicate = {
      ...mapping().captures[CAPTURE_ID],
      caseId: "servicing.second-case",
      page: "pages/features/second.md",
      socialKey: "second-capture",
    };
    expect(() =>
      validateEvidenceMapping(mapping({ "second-capture": duplicate })),
    ).toThrow("duplicate value");
  });

  test("rejects a source outside the Tickets Feature catalog", () => {
    const value = mapping();
    value.captures[CAPTURE_ID].sourceUrl = "https://example.com/story.feature";
    expect(() => validateEvidenceMapping(value)).toThrow(
      "must link to a Feature on the Tickets main branch",
    );
  });

  const missingWords = [
    "alt",
    "caption",
    "galleryCaption",
    "socialHeading",
    "socialBody",
  ];

  for (const field of missingWords) {
    test(`rejects a capture with no ${field}`, () => {
      const value = mapping();
      value.captures[CAPTURE_ID][field] = "";
      expect(() => validateEvidenceMapping(value)).toThrow(field);
    });
  }

  test("rejects a review stamp that is not a digest", () => {
    const value = mapping();
    value.captures[CAPTURE_ID].reviewed = "not-a-digest";
    expect(() => validateEvidenceMapping(value)).toThrow(
      "must be a SHA-256 digest",
    );
  });
});

describe("evidence command arguments", () => {
  test("accepts one --from directory", () => {
    expect(parseFromArgument(["--from", "/tmp/evidence"])).toBe("/tmp/evidence");
  });

  test("rejects missing and unknown options", () => {
    expect(() => parseFromArgument([])).toThrow("Usage");
    expect(() => parseFromArgument(["--source", "/tmp/evidence"])).toThrow(
      "Usage",
    );
  });
});
