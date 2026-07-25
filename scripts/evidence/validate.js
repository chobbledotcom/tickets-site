#!/usr/bin/env bun

import { resolve } from "node:path";
import { root } from "../utils.js";
import { parseFromArgument } from "./args.js";
import { loadEvidenceArtifact } from "./artifact.js";
import { loadEvidenceMapping } from "./mapping.js";
import { validateCommittedEvidence } from "./store.js";

const validateArtifact = async (args) => {
  const mapping = await loadEvidenceMapping(root);
  const artifactDir = resolve(parseFromArgument(args));
  const { manifest } = await loadEvidenceArtifact(artifactDir, mapping);
  console.log(
    `Evidence artifact is valid: ${manifest.captures.length} capture(s) from ${manifest.app.commit}.`,
  );
};

const validateStore = async () => {
  const result = await validateCommittedEvidence({ root });
  console.log(
    result.state === "imported"
      ? `Committed evidence is valid: ${result.appCommit}.`
      : "Committed evidence is awaiting its first app artifact import.",
  );
};

const main = async () => {
  const args = process.argv.slice(2);
  if (args.length === 0) await validateStore();
  else await validateArtifact(args);
};

if (import.meta.main) {
  main().catch((error) => {
    console.error(`Evidence validation failed: ${error.message}`);
    process.exit(1);
  });
}
