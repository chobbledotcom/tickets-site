/**
 * Overrides the template's src.11tydata.js to give every page two pieces of
 * data the head tags, the layout, the navigation and the footer all read.
 *
 * `language` is the entry from `_data/languages.json` whose URL prefix the
 * page sits under, and `translation` is the set of URLs saying the same thing
 * in each language, keyed by language code, or null. A site that declares one
 * language gets that language on every page and null on every translation, so
 * nothing downstream has to ask whether the site is translated at all.
 *
 * `provider_directory` is the sorted provider list the provider directory
 * page renders, built from every comparison page's `provider_facts` plus
 * Chobble's own record. Only a page that sets `provider_directory_page` in
 * its front matter computes it, so every other page skips the work.
 */

import { languageForUrl, translationForUrl } from "./_lib/i18n.js";
import { providerDirectory } from "./_lib/provider-directory.js";
import { featureTable } from "./_lib/feature-table.js";
import {
  feeTable,
  providerEvidence,
} from "./_lib/provider-evidence.js";

/** Slides the evidence include in after the hero and the Q&A include at the end. */
const withEvidenceBlocks = (blocks) => {
  const hero = blocks?.[0];
  if (!hero) return blocks;
  const rest = blocks.slice(1);
  return [
    hero,
    { type: "include", file: "provider-evidence.html" },
    ...rest,
    { type: "include", file: "provider-faq.html" },
  ];
};

export default {
  layout: "base.html",
  eleventyComputed: {
    language: (data) => languageForUrl(data.page?.url),
    translation: (data) => translationForUrl(data.page?.url),
    provider_directory: (data) =>
      data.provider_directory_page
        ? providerDirectory(
            data.collections.all,
            data.chobble_provider_facts,
            new Date().getFullYear(),
          )
        : undefined,
    provider_evidence: (data) =>
      data.provider_facts ? providerEvidence(data.provider_facts, data) : undefined,
    feature_table_data: (data) => featureTable(data),
    blocks: (data) =>
      data.provider_facts ? withEvidenceBlocks(data.blocks) : data.blocks,
    fee_table: (data) => (data.fee_table_page ? feeTable() : undefined),
  },
};
