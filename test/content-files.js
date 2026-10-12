import { Glob } from "bun";
import { relative, resolve } from "node:path";
import { CONTENT_DIRECTORIES } from "../scripts/evidence/copy.js";

const ROOT = resolve(import.meta.dir, "..");

/** Every Markdown page in the content directories, as repo-relative paths. */
export const listContentFiles = () =>
  CONTENT_DIRECTORIES.flatMap((directory) =>
    [...new Glob(`${directory}/**/*.md`).scanSync(ROOT)].map((path) =>
      relative("", path).replaceAll("\\", "/"),
    ),
  );
