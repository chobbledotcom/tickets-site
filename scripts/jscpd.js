#!/usr/bin/env bun

/**
 * Copy-paste detection.
 *
 * jscpd runs from .bin/jscpd, a fully static musl binary fetched from the
 * npm registry and pinned by SHA-256. The gnu build npm picks on glibc
 * Linux cannot start on NixOS, which broke `bun run cpd`.
 */

import { chmodSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { file, path, root, spawn, write } from "./utils.js";

const VERSION = "5.2.0";
const URL = `https://registry.npmjs.org/jscpd-linux-x64-musl/-/jscpd-linux-x64-musl-${VERSION}.tgz`;
const SHA256 =
  "6dc6cdd9d245b485e5382872546e406e1d608500832a63644353b97b1faedf8c";
const BINARY = path(".bin", "jscpd");
const ENTRY = "package/bin/jscpd";

const sha256 = (bytes) =>
  new Bun.CryptoHasher("sha256").update(bytes).digest("hex");

/** The `package/bin/jscpd` entry's bytes, or a loud failure. */
const entryFromTar = (tar) => {
  const nameOf = (block) => {
    const end = block.indexOf(0);
    return String.fromCharCode(
      ...block.slice(0, end === -1 ? 100 : end),
    ).trimEnd();
  };
  const sizeOf = (block) =>
    parseInt(
      String.fromCharCode(...block.slice(124, 136))
        .replace(/\0.*$/, "")
        .trim(),
      8,
    );

  for (let offset = 0; offset < tar.length; offset += 512) {
    const header = tar.slice(offset, offset + 512);
    const name = nameOf(header);
    if (name === ENTRY) {
      const size = sizeOf(header);
      return tar.slice(offset + 512, offset + 512 + size);
    }
    if (name === "") break;
  }
  throw new Error(`No ${ENTRY} entry in the jscpd tarball`);
};

const isInstalled = async () => {
  const f = file(BINARY);
  return (await f.exists()) && sha256(await f.arrayBuffer()) === SHA256;
};

const install = async () => {
  if (await isInstalled()) return;
  console.log(`Fetching jscpd ${VERSION}...`);
  const tarball = new Uint8Array(await (await fetch(URL)).arrayBuffer());
  const bytes = entryFromTar(Bun.gunzipSync(tarball));
  if (sha256(bytes) !== SHA256) {
    throw new Error(`jscpd ${VERSION} tarball does not match its pinned hash`);
  }
  mkdirSync(dirname(BINARY), { recursive: true });
  await write(BINARY, bytes);
  chmodSync(BINARY, 0o755);
};

const main = async () => {
  await install();
  const proc = spawn([BINARY, ...process.argv.slice(2)], { cwd: root });
  process.exitCode = await proc.exited;
};

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
