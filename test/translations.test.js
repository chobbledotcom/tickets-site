/**
 * The hreflang tags, the language switcher and the og:locale:alternate tags
 * are all built from translations.json. A URL listed there that no page
 * produces is an hreflang tag pointing at a 404, and a translated page missing
 * from the list is a page search engines never learn is a translation, so both
 * are checked here rather than in a browser.
 */

import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { Glob } from "bun";
import languages from "../_data/languages.json" with { type: "json" };
import socialImage from "../_data/social_image.json" with { type: "json" };
import translations from "../_data/translations.json" with { type: "json" };
import {
  defaultLanguage,
  isTranslatedPage,
  languageForUrl,
  translationForUrl,
} from "../_lib/i18n.js";
import { CONTENT_DIRECTORIES } from "../scripts/evidence/copy.js";

const ROOT = resolve(import.meta.dir, "..");

const contentFiles = CONTENT_DIRECTORIES.flatMap((directory) =>
  [...new Glob(`${directory}/**/*.md`).scanSync(ROOT)].map((path) =>
    relative("", path).replaceAll("\\", "/"),
  ),
);

const permalinkOf = (filePath) =>
  readFileSync(join(ROOT, filePath), "utf8").match(/^permalink: (\S+)$/m)?.[1];

const pagePermalinks = new Map(
  contentFiles.map((filePath) => [filePath, permalinkOf(filePath)]),
);

const publishedUrls = new Set([...pagePermalinks.values()].filter(Boolean));

const listedUrls = translations.flatMap((group) => Object.values(group));

/** Every field a template reads off a language. A language missing one renders
 * an empty attribute or an empty label, which nothing else would catch. */
const REQUIRED_FIELDS = [
  "code",
  "hreflang",
  "og_locale",
  "label",
  "home_url",
  "home_label",
  "breadcrumb_label",
];

describe("translations", () => {
  test("gives every language the fields the templates read", () => {
    for (const language of languages) {
      const missing = REQUIRED_FIELDS.filter((field) => !language[field]);
      expect([language.code, missing]).toEqual([language.code, []]);
    }
  });

  test("describes the shared social image in every language", () => {
    // og:locale says which language a page is in, so an English description
    // on a German page is metadata that contradicts the tag beside it.
    const missing = languages
      .map((language) => language.code)
      .filter((code) => !socialImage.alt[code]);
    expect(missing).toEqual([]);
  });

  test("names exactly one base language", () => {
    expect(languages.filter((language) => language.is_default)).toHaveLength(1);
  });

  test("publishes every language under its own URL prefix", () => {
    for (const language of languages) {
      expect(languageForUrl(language.home_url)).toBe(language);
    }
  });

  test("puts a page with no language prefix in the base language", () => {
    expect(languageForUrl("/pricing/")).toBe(defaultLanguage);
    expect(languageForUrl(undefined)).toBe(defaultLanguage);
  });

  test("pairs a page with the URLs saying the same thing elsewhere", () => {
    for (const group of translations) {
      for (const url of Object.values(group)) {
        expect(translationForUrl(url)).toEqual(group);
      }
    }
    expect(translationForUrl("/not-a-page/")).toBeNull();
  });

  test("keys every group by a known language code", () => {
    const codes = languages.map((language) => language.code);
    for (const group of translations) {
      expect(Object.keys(group).every((code) => codes.includes(code))).toBe(
        true,
      );
    }
  });

  test("gives every group a page in the x-default language", () => {
    for (const group of translations) {
      expect(group[defaultLanguage.code]).toBeString();
    }
  });

  test("lists only URLs the build publishes", () => {
    expect(listedUrls.filter((url) => !publishedUrls.has(url))).toEqual([]);
  });

  test("lists every translated page", () => {
    const missing = [...pagePermalinks]
      .filter(([filePath]) => isTranslatedPage(filePath))
      .filter(([, permalink]) => !listedUrls.includes(permalink))
      .map(([filePath]) => filePath);
    expect(missing).toEqual([]);
  });

  test("gives each URL one group", () => {
    expect(new Set(listedUrls).size).toBe(listedUrls.length);
  });
});
