/**
 * Builds the rendered feature comparison table from a page's
 * `feature_table` front matter, so comparison pages keep their cell text as
 * data instead of table markup inside a markdown block.
 *
 * Cell text uses a small inline grammar: [link text](url), **bold**, and
 * plain text. Anything else renders as escaped plain text. The output is the
 * same HTML the tables carried when they were written out by hand, including
 * the `data-label` attributes the small-screen layout reads.
 */

import chobbleFacts from "../_data/chobble_provider_facts.json" with {
  type: "json",
};

const escapeHtml = (text) =>
  String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const renderInline = (cell) => {
  const escaped = escapeHtml(cell);
  return escaped
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');
};

/** The three fixed value cells for a shared-feature row. */
const sharedRow = (feature) => ({
  feature: renderInline(feature),
  provider: "Included",
  chobble: "Included",
});

const providerRow = (entry) => ({
  feature: renderInline(entry.feature),
  provider: renderInline(entry.detail),
  chobble: "Not offered",
});

const chobbleRow = (entry) => ({
  feature: renderInline(entry.feature),
  provider: entry.provider ? renderInline(entry.provider) : "Not offered",
  chobble: renderInline(entry.detail),
});

/**
 * @param {Record<string, unknown>} data Eleventy page data.
 * @returns {Record<string, unknown> | undefined}
 */
export const featureTable = (data) => {
  const table = data.feature_table;
  if (!table) return undefined;
  const providerName = data.provider_facts?.name ?? "";
  return {
    labels: ["Feature", providerName, chobbleFacts.name],
    columns: [
      escapeHtml("Feature"),
      table.provider_link
        ? `<a href="${escapeHtml(table.provider_link)}">${escapeHtml(providerName)}</a>`
        : escapeHtml(providerName),
      escapeHtml(chobbleFacts.name),
    ],
    rows: [
      ...(table.shared ?? []).map(sharedRow),
      ...(table.provider ?? []).map(providerRow),
      ...(table.chobble ?? []).map(chobbleRow),
    ],
  };
};
