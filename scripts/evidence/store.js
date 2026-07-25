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
import { loadEvidenceMapping, validateMappingPlacements } from "./mapping.js";
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

const createLock = (manifest, files) => ({
  schemaVersion: EVIDENCE_SCHEMA_VERSION,
  app: manifest.app,
  artifactSha256: sha256(new TextEncoder().encode(serialise(manifest))),
  files: Object.fromEntries(
    files.map((file) => [file.path, sha256(file.bytes)]),
  ),
});

export const importEvidence = async ({
  artifactDir,
  root,
  createSocialImage = createEvidenceSocialImage,
}) => {
  const mapping = await loadEvidenceMapping(root);
  await validateMappingPlacements(root, mapping);
  const artifact = await loadEvidenceArtifact(artifactDir, mapping);
  const dataText = serialise(createSiteData(artifact, mapping));
  const socialFiles = await createSocialFiles(
    artifact,
    mapping,
    createSocialImage,
  );
  const files = outputFiles(artifact, mapping, dataText, socialFiles);
  const lock = createLock(artifact.manifest, files);
  await Promise.all(
    files.map((file) => writeFile(root, file.path, file.bytes)),
  );
  await writeFile(root, EVIDENCE_LOCK_PATH, serialise(lock));
  return lock;
};

const fileExists = async (filePath) => await Bun.file(filePath).exists();

const validateLock = (value) => {
  exactKeys(
    value,
    ["schemaVersion", "app", "artifactSha256", "files"],
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

const validateSiteData = async (root, value, mapping, lock) => {
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
  await validateMappingPlacements(absoluteRoot, mapping);
  const dataExists = await fileExists(join(absoluteRoot, EVIDENCE_DATA_PATH));
  const lockExists = await fileExists(join(absoluteRoot, EVIDENCE_LOCK_PATH));
  if (!dataExists && !lockExists) {
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
  const data = await readJson(
    join(absoluteRoot, EVIDENCE_DATA_PATH),
    EVIDENCE_DATA_PATH,
  );
  await validateSiteData(absoluteRoot, data, mapping, lock);
  return { appCommit: lock.app.commit, state: "imported" };
};
