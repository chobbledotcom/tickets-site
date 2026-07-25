#!/usr/bin/env bun

import { resolve } from "node:path";
import { root } from "../utils.js";
import { parseFromArgument } from "./args.js";
import { importEvidence } from "./store.js";

const main = async () => {
  const artifactDir = resolve(parseFromArgument(process.argv.slice(2)));
  const lock = await importEvidence({ artifactDir, root });
  console.log(
    `Imported ${Object.keys(lock.files).length - 1} evidence images from ${lock.app.commit}.`,
  );
};

if (import.meta.main) {
  main().catch((error) => {
    console.error(`Evidence import failed: ${error.message}`);
    process.exit(1);
  });
}
