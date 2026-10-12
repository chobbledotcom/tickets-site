import path from "node:path";

/** The comparison pages, and the pages in that directory that are not
 * provider reviews, shared by the directory and provider-facts checks. */
export const COMPARISON_DIRECTORY = path.join(
  path.resolve(import.meta.dir, ".."),
  "pages",
  "compared-to",
);

export const EXCLUDED_PAGES = new Set([
  "compare-all.md",
  "compared-to.md",
  "pen-and-paper.md",
  "providers.md",
]);
