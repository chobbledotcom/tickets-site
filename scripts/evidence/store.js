import { mkdirSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, extname, join, resolve } from "node:path";
import sharp from "sharp";
import { loadEvidenceArtifact, selectedAsset } from "./artifact.js";
import {
  EVIDENCE_DATA_PATH,
  EVIDENCE_LOCK_PATH,
  EVIDENCE_REPOSITORY,
  EVIDENCE_SCHEMA_VERSION,
} from "./constants.js";
import { evidenceBlockProse } from "./copy.js";
import {
  featureSourceUrl,
  loadEvidenceMapping,
  readStagedPage,
  rewriteSourceLink,
  validateMappingPlacements,
} from "./mapping.js";
import {
  artifactSource,
  committedSource,
  describeDrift,
  narrativeDrift,
} from "./narrative.js";
import { validateImageFields, validateNarrative } from "./schema.js";
import { serialise } from "./serialise.js";
import { createEvidenceSocialImage } from "./social.js";
import {
  commitAt,
  exactKeys,
  readJson,
  recordAt,
  safeRelativePathAt,
  sha256,
  sha256At,
} from "./validation.js";

const facebookPath = (imagePath) =>
  `${imagePath.slice(0, -extname(imagePath).length)}__facebook.png`;

const toSiteCapture = (capture, mapping, asset) => ({
  id: capture.id,
  story: capture.story,
  rule: capture.rule,
  case: capture.case,
  steps: capture.steps,
  presentation: capture.presentation,
  image: {
    profile: asset.profile,
    src: `/${mapping.legacyDestinationPath}`,
    sha256: asset.sha256,
    width: asset.width,
    height: asset.height,
    mediaType: asset.mediaType,
    viewport: asset.viewport,
  },
});

const createSiteData = (artifact, mapping) => ({
  schemaVersion: artifact.manifest.schemaVersion,
  app: artifact.manifest.app,
  captures: Object.fromEntries(
    artifact.manifest.captures.map((capture) => {
      const placement = mapping.captures[capture.id];
      const { asset } = selectedAsset(
        artifact,
        capture.id,
        placement.assetProfile,
      );
      return [capture.id, toSiteCapture(capture, placement, asset)];
    }),
  ),
});

const writeFile = async (root, relativePath, bytes) => {
  const destination = join(root, relativePath);
  mkdirSync(dirname(destination), { recursive: true });
  await Bun.write(destination, bytes);
};

const createSocialFiles = async (artifact, mapping, createSocialImage) => {
  const temporaryDirectory = mkdtempSync(join(tmpdir(), "ticket-evidence-"));
  try {
    return await Promise.all(
      Object.entries(mapping.captures).map(async ([captureId, placement]) => {
        const source = selectedAsset(
          artifact,
          captureId,
          placement.assetProfile,
        );
        const outputPath = join(temporaryDirectory, `${captureId}.png`);
        await createSocialImage({
          // The card is drawn from the mapping's own words, which is what its
          // lock records: reading them from anywhere else would let the lock
          // attest copy the renderer never saw.
          copy: {
            body: placement.socialBody,
            heading: placement.socialHeading,
          },
          inputPath: source.filePath,
          outputPath,
          socialKey: placement.socialKey,
        });
        return {
          bytes: new Uint8Array(await Bun.file(outputPath).arrayBuffer()),
          path: facebookPath(placement.legacyDestinationPath),
        };
      }),
    );
  } finally {
    rmSync(temporaryDirectory, { force: true, recursive: true });
  }
};

const outputFiles = (artifact, mapping, dataText, socialFiles) => [
  { bytes: new TextEncoder().encode(dataText), path: EVIDENCE_DATA_PATH },
  ...Object.entries(mapping.captures).map(([captureId, placement]) => ({
    bytes: selectedAsset(artifact, captureId, placement.assetProfile).bytes,
    path: placement.legacyDestinationPath,
  })),
  ...socialFiles,
];

/**
 * The heading and body are rendered into the social card's pixels, so the copy
 * a card was drawn from is locked alongside its bytes. Editing that copy
 * without re-importing leaves a card whose text nobody wrote.
 */
export const socialCopyDigest = (placement) =>
  sha256(
    new TextEncoder().encode(
      serialise({
        body: placement.socialBody,
        heading: placement.socialHeading,
      }),
    ),
  );

const lockedSocialCopy = (mapping) =>
  Object.fromEntries(
    Object.entries(mapping.captures).map(([captureId, placement]) => [
      captureId,
      socialCopyDigest(placement),
    ]),
  );

const createLock = (manifest, files, mapping) => ({
  schemaVersion: EVIDENCE_SCHEMA_VERSION,
  app: manifest.app,
  artifactSha256: sha256(new TextEncoder().encode(serialise(manifest))),
  files: Object.fromEntries(
    files.map((file) => [file.path, sha256(file.bytes)]),
  ),
  socialCopy: lockedSocialCopy(mapping),
});

/**
 * A capture's words on the site are written against one version of the app's
 * story. When the story changes, someone has to read it again before the new
 * screenshot ships, so the import stops here rather than quietly replacing an
 * image whose description no longer holds.
 */
const assertNarrativesWereRead = (captures, mapping, prose, source) => {
  const drift = Object.entries(mapping.captures)
    .map(([captureId, placement]) =>
      narrativeDrift(
        captureId,
        captures[captureId],
        placement,
        prose[captureId],
      ),
    )
    .filter(Boolean);
  if (drift.length > 0) {
    throw new Error(
      drift.map((entry) => describeDrift(entry, source)).join("\n"),
    );
  }
};

export const importEvidence = async ({
  artifactDir,
  root,
  createSocialImage = createEvidenceSocialImage,
}) => {
  const mapping = await loadEvidenceMapping(root);
  const artifact = await loadEvidenceArtifact(artifactDir, mapping);
  const urls = sourceUrls(artifact.manifest.captures);
  const staged = await stagedSourceLinks(root, mapping, urls);
  await validateMappingPlacements(root, mapping, urls, staged);
  assertNarrativesWereRead(
    Object.fromEntries(
      artifact.manifest.captures.map((capture) => [capture.id, capture]),
    ),
    mapping,
    await pageProse(root, mapping, staged),
    artifactSource(artifactDir),
  );
  const dataText = serialise(createSiteData(artifact, mapping));
  const socialFiles = await createSocialFiles(
    artifact,
    mapping,
    createSocialImage,
  );
  const files = outputFiles(artifact, mapping, dataText, socialFiles);
  const lock = createLock(artifact.manifest, files, mapping);
  // Everything that can refuse the import has now run, so the pages can be
  // moved to their new links without leaving a page pointing at a story the
  // committed data, lock and images know nothing about.
  await Promise.all(
    Object.entries(staged).map(([page, text]) => writeFile(root, page, text)),
  );
  await Promise.all(
    files.map((file) => writeFile(root, file.path, file.bytes)),
  );
  await writeFile(root, EVIDENCE_LOCK_PATH, serialise(lock));
  return lock;
};

/**
 * Each page whose source link has to move, with the text it will be given.
 * A renamed Feature moves the link rather than stopping the import, but the
 * page is not written here: an import can still be refused, and a page linked
 * to a story nothing else has imported is worse than one linked to the old.
 */
const stagedSourceLinks = async (root, mapping, urls) => {
  const committed = {};
  const staged = {};
  // One page at a time, each capture rewriting what the last one left. Two
  // captures may share a page, and rewriting the original text twice would
  // keep only the second link and refuse the import over the first.
  for (const [captureId, placement] of Object.entries(mapping.captures)) {
    const page = placement.page;
    committed[page] ??= await Bun.file(join(root, page)).text();
    staged[page] = rewriteSourceLink(
      staged[page] ?? committed[page],
      placement,
      urls[captureId],
    );
  }
  return Object.fromEntries(
    Object.entries(staged).filter(([page, text]) => text !== committed[page]),
  );
};

/** No story has been imported yet, so no link can be built from one. */
const unknownSourceUrls = () =>
  new Proxy({}, { get: () => null, has: () => true });

/** Each capture's source link, built from the story it came from. */
const sourceUrls = (captures) =>
  Object.fromEntries(
    captures.map((capture) => [capture.id, featureSourceUrl(capture.story)]),
  );

/** The prose each page prints beside its screenshot, which the review stamp
 * covers along with the mapping's own words. */
const pageProse = async (root, mapping, staged = {}) =>
  Object.fromEntries(
    await Promise.all(
      Object.entries(mapping.captures).map(async ([captureId, placement]) => [
        captureId,
        evidenceBlockProse(
          await readStagedPage(root, placement.page, staged),
          placement.legacyDestinationPath,
        ),
      ]),
    ),
  );

const fileExists = async (filePath) => await Bun.file(filePath).exists();

const validateLock = (value) => {
  exactKeys(
    value,
    ["schemaVersion", "app", "artifactSha256", "files", "socialCopy"],
    "evidence lock",
  );
  if (value.schemaVersion !== EVIDENCE_SCHEMA_VERSION) {
    throw new Error(
      `evidence lock schemaVersion: must be ${EVIDENCE_SCHEMA_VERSION}`,
    );
  }
  exactKeys(value.app, ["repository", "commit"], "evidence lock app");
  if (value.app.repository !== EVIDENCE_REPOSITORY) {
    throw new Error(
      `evidence lock app repository: must be ${EVIDENCE_REPOSITORY}`,
    );
  }
  commitAt(value.app.commit, "evidence lock app commit");
  sha256At(value.artifactSha256, "evidence lock artifactSha256");
  recordAt(value.files, "evidence lock files");
  recordAt(value.socialCopy, "evidence lock socialCopy");
  Object.entries(value.socialCopy).map(([captureId, digest]) => {
    sha256At(digest, `evidence lock socialCopy ${captureId}`);
    return captureId;
  });
  Object.entries(value.files).map(([filePath, digest]) => {
    safeRelativePathAt(filePath, `evidence lock file ${filePath}`);
    sha256At(digest, `evidence lock file ${filePath}`);
    return filePath;
  });
  return value;
};

const expectedFilePaths = (mapping) => [
  EVIDENCE_DATA_PATH,
  ...Object.values(mapping.captures).flatMap((capture) => [
    capture.legacyDestinationPath,
    facebookPath(capture.legacyDestinationPath),
  ]),
];

const validateLockFiles = async (root, lock, mapping) => {
  const expected = expectedFilePaths(mapping).sort();
  const actual = Object.keys(lock.files).sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error("evidence lock files do not match the evidence mapping");
  }
  await Promise.all(
    actual.map(async (relativePath) => {
      const bytes = new Uint8Array(
        await Bun.file(join(root, relativePath)).arrayBuffer(),
      );
      if (sha256(bytes) !== lock.files[relativePath]) {
        throw new Error(`evidence lock: SHA-256 mismatch for ${relativePath}`);
      }
    }),
  );
};

/**
 * The social cards are only drawn during an import, so copy edited afterwards
 * leaves a card showing the old words while every text check passes.
 */
const assertSocialCardsMatchTheirCopy = (lock, mapping) => {
  const stale = Object.entries(mapping.captures).filter(
    ([captureId, placement]) =>
      lock.socialCopy[captureId] !== socialCopyDigest(placement),
  );
  if (stale.length > 0) {
    throw new Error(
      `${stale
        .map(([captureId]) => captureId)
        .join(", ")}: the social card text changed since the card was drawn. ` +
        "Re-import the evidence so the card is rendered again: " +
        "bun run evidence:import --from <artifact-dir>.",
    );
  }
};

const validateSiteImage = async (root, captureId, image, mapping, lock) => {
  exactKeys(
    image,
    ["profile", "src", "sha256", "width", "height", "mediaType", "viewport"],
    `evidence data capture ${captureId}.image`,
  );
  validateImageFields(
    { ...image, src: image.src.slice(1) },
    `evidence data capture ${captureId}.image`,
    "src",
  );
  const expectedSrc = `/${mapping.legacyDestinationPath}`;
  if (image.src !== expectedSrc || image.profile !== mapping.assetProfile) {
    throw new Error(
      `evidence data capture ${captureId}: image does not match mapping`,
    );
  }
  if (image.sha256 !== lock.files[mapping.legacyDestinationPath]) {
    throw new Error(
      `evidence data capture ${captureId}: image hash does not match lock`,
    );
  }
  const metadata = await sharp(
    join(root, mapping.legacyDestinationPath),
  ).metadata();
  if (
    metadata.format !== "png" ||
    metadata.width !== image.width ||
    metadata.height !== image.height
  ) {
    throw new Error(
      `evidence data capture ${captureId}: imported PNG does not match data`,
    );
  }
};

const validateSiteCapture = async (root, captureId, capture, mapping, lock) => {
  validateNarrative(capture, `evidence data capture ${captureId}`, ["image"]);
  if (capture.id !== captureId || capture.case.id !== mapping.caseId) {
    throw new Error(
      `evidence data capture ${captureId}: IDs do not match mapping`,
    );
  }
  await validateSiteImage(root, captureId, capture.image, mapping, lock);
};

const validateSiteData = async (root, value, mapping, lock, prose) => {
  exactKeys(value, ["schemaVersion", "app", "captures"], "evidence data");
  if (value.schemaVersion !== EVIDENCE_SCHEMA_VERSION) {
    throw new Error(
      `evidence data schemaVersion: must be ${EVIDENCE_SCHEMA_VERSION}`,
    );
  }
  if (JSON.stringify(value.app) !== JSON.stringify(lock.app)) {
    throw new Error("evidence data app does not match lock");
  }
  const expected = Object.keys(mapping.captures).sort();
  const actual = Object.keys(
    recordAt(value.captures, "evidence data captures"),
  ).sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error("evidence data captures do not match mapping");
  }
  assertNarrativesWereRead(value.captures, mapping, prose, committedSource);
  await Promise.all(
    actual.map((captureId) =>
      validateSiteCapture(
        root,
        captureId,
        value.captures[captureId],
        mapping.captures[captureId],
        lock,
      ),
    ),
  );
};

const validateLegacyImages = async (root, mapping) => {
  await Promise.all(
    Object.values(mapping.captures).map(async ({ legacyDestinationPath }) => {
      const metadata = await sharp(
        join(root, legacyDestinationPath),
      ).metadata();
      if (metadata.format !== "png") {
        throw new Error(
          `${legacyDestinationPath}: legacy evidence image is not a PNG`,
        );
      }
    }),
  );
};

export const validateCommittedEvidence = async ({ root }) => {
  const absoluteRoot = resolve(root);
  const mapping = await loadEvidenceMapping(absoluteRoot);
  const dataExists = await fileExists(join(absoluteRoot, EVIDENCE_DATA_PATH));
  const lockExists = await fileExists(join(absoluteRoot, EVIDENCE_LOCK_PATH));
  if (!dataExists && !lockExists) {
    // Only the source link waits for the first import: it is built from the
    // imported story's uri. Everything else about each page is checked now.
    await validateMappingPlacements(absoluteRoot, mapping, unknownSourceUrls());
    await validateLegacyImages(absoluteRoot, mapping);
    return { state: "awaiting-import" };
  }
  if (!dataExists || !lockExists) {
    throw new Error(
      "evidence data and lock must either both exist or both be absent",
    );
  }
  const lock = validateLock(
    await readJson(join(absoluteRoot, EVIDENCE_LOCK_PATH), EVIDENCE_LOCK_PATH),
  );
  await validateLockFiles(absoluteRoot, lock, mapping);
  assertSocialCardsMatchTheirCopy(lock, mapping);
  const data = await readJson(
    join(absoluteRoot, EVIDENCE_DATA_PATH),
    EVIDENCE_DATA_PATH,
  );
  await validateMappingPlacements(
    absoluteRoot,
    mapping,
    sourceUrls(
      Object.values(recordAt(data.captures, "evidence data captures")),
    ),
  );
  await validateSiteData(
    absoluteRoot,
    data,
    mapping,
    lock,
    await pageProse(absoluteRoot, mapping),
  );
  return { appCommit: lock.app.commit, state: "imported" };
};
