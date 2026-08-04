/**
 * Overrides the template's src.11tydata.js to give every page two pieces of
 * data the head tags, the layout, the navigation and the footer all read.
 *
 * `language` is the entry from `_data/languages.json` whose URL prefix the
 * page sits under, and `translation` is the set of URLs saying the same thing
 * in each language, keyed by language code, or null. A site that declares one
 * language gets that language on every page and null on every translation, so
 * nothing downstream has to ask whether the site is translated at all.
 */

import { languageForUrl, translationForUrl } from "./_lib/i18n.js";

export default {
  layout: "base.html",
  eleventyComputed: {
    language: (data) => languageForUrl(data.page?.url),
    translation: (data) => translationForUrl(data.page?.url),
  },
};
