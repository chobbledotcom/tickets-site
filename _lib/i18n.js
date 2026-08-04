/**
 * Which language a page is written in, and where the same page is written in
 * the other languages a site publishes.
 *
 * Nothing here names a language. A site declares its languages in
 * `_data/languages.json`, one of which is the base language, and pairs up the
 * pages that say the same thing in `_data/translations.json`. A site with one
 * language has one entry and no translations, and every page then resolves to
 * that language with no alternates, which is the case this has to stay quiet
 * for.
 */

import languages from "../_data/languages.json" with { type: "json" };
import translations from "../_data/translations.json" with { type: "json" };

/** The language a page is in unless its URL says otherwise. */
export const defaultLanguage =
  languages.find((language) => language.is_default) ?? languages[0];

/** Every language except the base one, which is served from what is left over. */
const alternateLanguages = languages.filter(
  (language) => language !== defaultLanguage,
);

/** The more specific of two matching prefixes, so /de-at/ wins over /de/. */
const longerPrefix = (chosen, language) =>
  chosen && chosen.home_url.length >= language.home_url.length
    ? chosen
    : language;

/**
 * The language of one URL, read from the URL prefix each language is published
 * under. Anything outside every alternate language's prefix, including the
 * sitemap and the feeds, is in the base language.
 */
export const languageForUrl = (url) => {
  if (typeof url !== "string") return defaultLanguage;
  return (
    alternateLanguages
      .filter((language) => url.startsWith(language.home_url))
      .reduce(longerPrefix, null) ?? defaultLanguage
  );
};

/**
 * The URLs of one page in every language it has been written in, keyed by
 * language code, or null when the page exists in one language only.
 */
export const translationForUrl = (url) =>
  translations.find((group) => Object.values(group).includes(url)) ?? null;

/** Where a language's pages live in the source tree, by convention. */
export const translatedDirectories = alternateLanguages.map(
  (language) => `pages/${language.code}`,
);

/** Whether a content file holds a translation rather than a base-language page. */
export const isTranslatedPage = (filePath) =>
  translatedDirectories.some((directory) =>
    filePath.replaceAll("\\", "/").startsWith(`${directory}/`),
  );
