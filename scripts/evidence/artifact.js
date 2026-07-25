import { join } from "node:path";
import sharp from "sharp";
import { EVIDENCE_MANIFEST } from "./constants.js";
import { validateEvidenceManifest } from "./schema.js";
import { readJson, sha256 } from "./validation.js";

const captureIds = (captures) => captures.map((capture) => capture.id).sort();

const validateMappedCaptures = (manifest, mapping) => {
  const imported = captureIds(manifest.captures);
  const expected = Object.keys(mapping.captures).sort();
  const unknown = imported.filter((captureId) => !expected.includes(captureId));
  const missing = expected.filter((captureId) => !imported.includes(captureId));
  if (unknown.length > 0) {
    throw new Error(
      `manifest.captures: no site mapping for ${unknown.join(", ")}`,
    );
  }
  if (missing.length > 0) {
    throw new Error(
      `manifest.captures: missing mapped capture ${missing.join(", ")}`,
    );
  }
  return manifest;
};

const validateCaptureLink = (capture, mapping) => {
  const expected = mapping.captures[capture.id];
  if (capture.case.id !== expected.caseId) {
    throw new Error(
      `manifest capture ${capture.id}: expected case ${expected.caseId}, got ${capture.case.id}`,
    );
  }
  if (
    !capture.assets.some((asset) => asset.profile === expected.assetProfile)
  ) {
    throw new Error(
      `manifest capture ${capture.id}: missing ${expected.assetProfile} asset`,
    );
  }
};

const readAsset = async (artifactDir, capture, asset) => {
  const filePath = join(artifactDir, asset.path);
  let bytes;
  try {
    bytes = new Uint8Array(await Bun.file(filePath).arrayBuffer());
  } catch (error) {
    throw new Error(
      `manifest capture ${capture.id}: could not read ${asset.path}`,
      {
        cause: error,
      },
    );
  }
  const digest = sha256(bytes);
  if (digest !== asset.sha256) {
    throw new Error(
      `manifest capture ${capture.id}: SHA-256 mismatch for ${asset.path}`,
    );
  }
  const metadata = await sharp(bytes).metadata();
  if (metadata.format !== "png") {
    throw new Error(
      `manifest capture ${capture.id}: ${asset.path} is not a PNG`,
    );
  }
  if (metadata.width !== asset.width || metadata.height !== asset.height) {
    throw new Error(
      `manifest capture ${capture.id}: dimensions do not match ${asset.path}`,
    );
  }
  return { asset, bytes, captureId: capture.id, filePath };
};

export const loadEvidenceArtifact = async (artifactDir, mapping) => {
  const manifest = validateMappedCaptures(
    validateEvidenceManifest(
      await readJson(join(artifactDir, EVIDENCE_MANIFEST), EVIDENCE_MANIFEST),
    ),
    mapping,
  );
  manifest.captures.map((capture) => validateCaptureLink(capture, mapping));
  const assets = await Promise.all(
    manifest.captures.flatMap((capture) =>
      capture.assets.map((asset) => readAsset(artifactDir, capture, asset)),
    ),
  );
  return { assets, manifest };
};

export const selectedAsset = (artifact, captureId, profile) => {
  const selected = artifact.assets.find(
    (entry) => entry.captureId === captureId && entry.asset.profile === profile,
  );
  if (!selected) {
    throw new Error(`Could not find ${profile} asset for ${captureId}`);
  }
  return selected;
};
