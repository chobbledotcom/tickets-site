#!/usr/bin/env bun

/**
 * Grades site pages against the house content rules in AGENTS.md, using Jev
 * (TypeSafe System One) via the OpenCode zen API for the judgement calls and
 * plain code for everything a regex can catch.
 *
 * The tone this site asks for is the opposite of a hire site's: encyclopaedic,
 * third-person, plain words a 10 year old understands, no marketing gloss - so
 * the voice checks are written for it rather than re-weighted. Most copy lives
 * in front matter
 * `blocks[]` scalars (hero, markdown, split-image, features, cta buttons),
 * so the extractor reads blocks rather than a markdown body. The fuzzy
 * checks score EEAT against this site's own facts, the AGENTS.md style
 * guide, and the Google helpful-content bar; the spam-policy checks (scaled
 * content, keyword stuffing) quote Google's own documents, and each payload
 * carries a sample of same-type sibling URLs so Jev can judge a page against
 * its family. Comparison pages also send their `provider_facts` record so
 * the copy can be checked against what the review actually verified.
 *
 * Translated pages (pages/de/, pages/es/) are skipped: the copy, evidence
 * and image checks in this repository read the English source, and the
 * English style checks cannot judge German or Spanish prose.
 *
 * Single page: full per-check report. No args or several pages: parallel
 * batch with a worst-first table and aggregate failure stats.
 *
 * Usage:
 *   bun run grade                                     # every gradeable page
 *   bun run grade pages/features/encrypted.md         # one page, full report
 *   bun run grade /compared-to/eventbrite/            # URL shorthand
 *   bun run grade pages/features                      # a whole directory
 *   bun run grade -- --type comparison --limit 20     # sweep one page type
 *   bun run grade -- --prefix /perfect-for/           # sweep one URL prefix
 *   bun run grade pages/pricing.md -- --no-jev        # mechanical checks only
 *   bun run grade -- --json / --csv out.csv / --list-checks
 *
 * The Jev API key is read from OPENCODE_API_KEY or
 * /run/secrets/opencode_api_key. Grading fails loudly without it; pass
 * --no-jev for the mechanical checks alone. Batch mode always exits 0
 * (it is a report); single-page mode exits 1 on critical failures such as a
 * broken internal link. Pass --fail-on-critical to make batch mode exit 1
 * on critical failures (or pages that errored).
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";
import { path } from "./utils.js";

const SITE_DATA = JSON.parse(readFileSync(path("_data", "site.json"), "utf8"));
const SITE_URL = SITE_DATA.url;
const ZEN_SYSTEMONE_URL = "https://opencode.ai/zen/v1/systemone";
const DEFAULT_MODEL = "jev-1.13";
const DEFAULT_KEY_FILE = "/run/secrets/opencode_api_key";

// Payload guard on the prose sent to Jev per page. The longest comparison
// pages run to around 16k characters; an over-limit state comes back as
// HTTP 400 and quietly degrades the page to mechanical-only grading.
const MAX_BODY_CHARS = 24000;
const MAX_LINKS = 60;

// Sample of same-type sibling URLs sent with each Jev payload, for the
// scaled-content question: enough to show the family exists without
// bloating the state.
const MAX_SIBLINGS = 6;

const CONTENT_DIRS = ["pages", "guide-pages", "guide-categories"];

// Utility pages with nothing to grade. They stay in the URL map so links to
// them still resolve. Translated pages are excluded from grading by the
// directory filter below, per AGENTS.md.
const SKIP_GRADE = new Set(["pages/not-found.md", "pages/thank-you.md"]);

// Hub pages that list other pages, or pages assembled from _data includes,
// and are thin in the source by design.
const LISTING_PAGES = new Set([
  "pages/guide.md",
  "pages/features/features.md",
  "pages/perfect-for/perfect-for.md",
  "pages/compared-to/compared-to.md",
  "pages/compared-to/providers.md",
  "pages/compared-to/compare-all.md",
  "pages/faq.md",
  "pages/gallery.md",
  "guide-categories/choosing-a-ticket-platform.md",
]);

const ALL_TYPES = ["comparison", "feature", "audience", "guide", "page"];

// Front matter keys whose string values are prose a visitor reads, and the
// item fields the features/stats layouts render. Anything else (icons,
// figures, navigation data) is scaffolding.
const PROSE_BLOCK_KEYS = new Set([
  "content",
  "left_content",
  "right_content",
  "intro_content",
  "description",
]);
const ITEM_PROSE_FIELDS = ["name", "description", "label", "value"];

// ---------------------------------------------------------------------------
// Page discovery and extraction
// ---------------------------------------------------------------------------

const walkMarkdown = (dir) => {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdown(full);
    return entry.name.endsWith(".md") ? [full] : [];
  });
};

const relPath = (file) => relative(path(), file).split("\\").join("/");

const isTranslatedPath = (rel) =>
  rel.startsWith("pages/de/") || rel.startsWith("pages/es/");

const allContentFiles = () =>
  CONTENT_DIRS.flatMap((dir) => walkMarkdown(path(dir))).filter(
    (file) => !isTranslatedPath(relPath(file)),
  );

const parseYaml = (text) => {
  try {
    return { data: Bun.YAML.parse(text) ?? {}, error: null };
  } catch (e) {
    return { data: {}, error: e.message };
  }
};

/** Splits front matter, flagging a missing closing delimiter: the build
 * (gray-matter) then sees no fields and would render the YAML as text. A
 * YAML error is captured rather than thrown so a broken page still grades. */
const splitFrontmatter = (text) => {
  const closed = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (closed) {
    const { data, error } = parseYaml(closed[1]);
    return { data, body: text.slice(closed[0].length), closed: true, error };
  }
  const opened = text.match(/^---\r?\n/);
  if (!opened) return { data: {}, body: text, closed: true, error: null };
  const { data, error } = parseYaml(text.slice(opened[0].length));
  return { data, body: "", closed: false, error };
};

const readPage = (file) => splitFrontmatter(readFileSync(file, "utf8"));

const normaliseUrl = (url) => {
  const clean = String(url).split("#")[0].split("?")[0];
  if (!clean || clean === "/") return "/";
  return clean.endsWith("/") ? clean : `${clean}/`;
};

const detectPageType = (rel, fm) => {
  if (rel.startsWith("pages/compared-to/"))
    return fm.provider_facts || fm.competitor_key ? "comparison" : "page";
  if (rel.startsWith("pages/features/")) return "feature";
  if (rel.startsWith("pages/perfect-for/")) return "audience";
  if (rel.startsWith("guide-pages/")) return "guide";
  return "page";
};

const slugOf = (rel) => rel.replace(/\.md$/, "").split("/").at(-1);

const guideCategoryOf = (fm) => {
  const category = fm["guide-category"];
  return typeof category === "string" && category ? category : "uncategorized";
};

/** The URL a page builds to when it sets no permalink, mirroring the
 * template's eleventyComputed rules: guide pages live under
 * /guide/<category>/<slug>/ and guide categories under /guide/<slug>/. */
const pageUrlOf = (rel, fm) => {
  if (typeof fm.permalink === "string") return fm.permalink;
  if (rel.startsWith("guide-pages/"))
    return `/guide/${guideCategoryOf(fm)}/${slugOf(rel)}/`;
  if (rel.startsWith("guide-categories/")) return `/guide/${slugOf(rel)}/`;
  return `/${rel.replace(/\.md$/, "")}/`;
};

/** Markdown to plain prose: markup, images and code dropped so word counts
 * and phrase checks see real copy. */
const markdownToText = (md) =>
  md
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/\{%[\s\S]*?%\}|\{\{[\s\S]*?\}\}/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/<img[^>]*>/gi, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/<a\s[^>]*>([\s\S]*?)<\/a>/gi, "$1")
    .replace(/<\/?[a-zA-Z][^>]*>/g, " ")
    .replace(/^\s{0,3}#{1,6}\s+/gm, " ")
    .replace(/(\*\*|__|\*|`)/g, " ")
    .replace(/^\s*>\s?/gm, " ")
    .replace(/^\s*[-*+]\s+/gm, " ")
    .replace(/^\s*\d+\.\s+/gm, " ")
    .replace(/\s+/g, " ")
    .trim();

/** House copy only: blockquotes, inline quoted speech and inline code
 * spans removed, because the voice rules do not apply inside quotation
 * marks or literal identifiers (AGENTS.md). Customer reviews sit in
 * blockquotes; short quoted terms such as a feature name survive - only
 * spans of three or more words count as someone else's voice. */
const stripQuoted = (md) =>
  md
    .split(/\r?\n/)
    .filter((line) => !/^\s*>/.test(line))
    .join("\n")
    .replace(/`[^`\n]*`/g, " ")
    .replace(/"[^"\n]*?\s[^"\n]*?\s[^"\n]*?"/g, " ")
    .replace(/\u201c[^\u201d\n]*?\s[^\u201d\n]*?\s[^\u201d\n]*?\u201d/g, " ");

/** Table lines carry bold row labels by design, so bold-proliferation
 * checks read the copy outside tables. */
const outsideTables = (md) =>
  md
    .split(/\r?\n/)
    .filter((line) => !/^\s*\|/.test(line))
    .join("\n");

const isRecord = (value) => !!value && typeof value === "object";

const collectItem = (item, out) => {
  if (!isRecord(item)) return;
  for (const field of ITEM_PROSE_FIELDS)
    if (typeof item[field] === "string") out.push(item[field]);
};

const collectItems = (items, out) => {
  for (const item of Array.isArray(items) ? items : []) collectItem(item, out);
};

const isProseValue = (key, value) =>
  PROSE_BLOCK_KEYS.has(key) && typeof value === "string";

const isAltValue = (key, value) =>
  (key === "figure_alt" || key === "alt") && typeof value === "string";

const isButtonValue = (key, value) =>
  key === "button" && isRecord(value) && typeof value.text === "string";

const pushButton = (button, out) => {
  out.buttons.push(button.text);
  if (typeof button.href === "string") out.buttonHrefs.push(button.href);
};

/** Prose and scaffolding fields collected out of a blocks tree, in page
 * order: prose strings, CTA button labels, figure alt text. */
const walkBlockValue = (key, value, out) => {
  if (isProseValue(key, value)) {
    out.prose.push(value);
    return;
  }
  if (isButtonValue(key, value)) {
    pushButton(value, out);
    return;
  }
  if (key === "items" && Array.isArray(value)) {
    collectItems(value, out.prose);
    return;
  }
  if (isAltValue(key, value)) {
    out.alts.push(value);
    return;
  }
  if (isRecord(value)) walkBlocks(value, out);
};

const walkBlocks = (node, out) => {
  if (Array.isArray(node)) {
    for (const item of node) walkBlocks(item, out);
    return;
  }
  if (!isRecord(node)) return;
  for (const [key, value] of Object.entries(node))
    walkBlockValue(key, value, out);
};

const blocksToOut = (fm) => {
  const out = { prose: [], buttons: [], buttonHrefs: [], alts: [] };
  walkBlocks(fm.blocks, out);
  if (typeof fm.subtitle === "string") out.prose.unshift(fm.subtitle);
  return out;
};

/** The page's own copy: front matter subtitle plus every block scalar. */
const pageMarkdown = (fm) => {
  const out = blocksToOut(fm);
  return {
    markdown: out.prose.filter(Boolean).join("\n\n"),
    buttons: out.buttons,
    buttonHrefs: out.buttonHrefs,
    alts: out.alts,
  };
};

const ASSET_RE = /\.(jpe?g|png|gif|webp|svg|pdf|css|js|ico|mp4|webm)$/i;

const isPageHref = (target) =>
  target.startsWith("/") &&
  !target.startsWith("//") &&
  !target.startsWith("/images/") &&
  !ASSET_RE.test(target.split("?")[0]);

const pushLink = (links, seen, text, href) => {
  const target = href?.trim() ?? "";
  if (!isPageHref(target)) return;
  const norm = normaliseUrl(target);
  const label = markdownToText(text ?? "");
  const key = `${norm}|${label}`;
  if (norm === "/" || !label || seen.has(key)) return;
  seen.add(key);
  links.push({ text: label, href: norm });
};

/** Internal page links from the copy: markdown links, CTA buttons and raw
 * HTML anchors (features items carry `<a href>` in their names). */
const extractLinks = (md, buttonHrefs, buttonTexts) => {
  const links = [];
  const seen = new Set();
  for (const m of md.matchAll(/(?<!!)\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g)) {
    pushLink(links, seen, m[1], m[2]);
  }
  const labels = buttonTexts[Symbol.iterator]();
  for (const href of buttonHrefs) {
    const label = labels.next().value ?? "";
    pushLink(links, seen, label, href);
  }
  for (const m of md.matchAll(
    /<a\s[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi,
  )) {
    pushLink(links, seen, m[2], m[1]);
  }
  return links.slice(0, MAX_LINKS);
};

const metaTitleOf = (fm) => fm.meta_title || fm.title || fm.name || "";

const headingOf = (markdown, fm) => {
  const m = markdown.match(/^# (.+)$/m);
  return m ? m[1].trim() : (fm.name ?? fm.title ?? "");
};

/** Every field that ends up in the head or a share card, for the leakage
 * check: a placeholder here goes straight into search results. */
const metaFieldsOf = (fm, heading) =>
  [
    ["meta title", metaTitleOf(fm)],
    ["meta description", fm.meta_description],
    ["heading", heading],
    ["og_title", fm.og_title],
    ["og_description", fm.og_description],
  ].filter(([, v]) => typeof v === "string" && v);

/** The subset of `provider_facts` a comparison page's copy must live
 * within: enum values plus the one-sentence summary, not the sourcing
 * notes. */
const providerFactsOf = (fm) => {
  const facts = fm.provider_facts;
  if (!facts || typeof facts !== "object") return null;
  return {
    name: facts.name,
    kind: facts.kind,
    managed_pricing: facts.managed_pricing,
    per_ticket_platform_fee: facts.per_ticket_platform_fee,
    self_hosting: facts.self_hosting,
    source_code: facts.source_code,
    white_label: facts.white_label,
    custom_domain: facts.custom_domain,
    event_marketplace: facts.event_marketplace,
    attendee_cross_marketing: facts.attendee_cross_marketing,
    established: facts.established,
    summary: facts.summary,
    last_reviewed: facts.last_reviewed,
  };
};

const providerDisplayName = (fm) => {
  const facts = providerFactsOf(fm);
  if (facts?.name) return facts.name;
  const key = fm.competitor_key;
  return typeof key === "string" ? key.replace(/-/g, " ") : "";
};

const pageNameOf = (fm) => fm.name ?? fm.title ?? "";

const lastBlockTypeOf = (fm) => {
  const last = Array.isArray(fm.blocks) ? fm.blocks.at(-1) : null;
  return last?.type ?? "";
};

/** Build the extraction state for one page. */
const extractPage = (file, forcedType) => {
  const rel = relPath(file);
  const {
    data: fm,
    closed,
    error: frontmatterError,
  } = splitFrontmatter(readFileSync(file, "utf8"));
  const pageType = forcedType || detectPageType(rel, fm);
  const { markdown, buttons, buttonHrefs, alts } = pageMarkdown(fm);
  const houseMd = stripQuoted(markdown);
  const prose = markdownToText(markdown);
  const proseHouse = markdownToText(houseMd);
  const heading = headingOf(markdown, fm);
  return {
    file: rel,
    url: normaliseUrl(pageUrlOf(rel, fm)),
    pageType,
    name: pageNameOf(fm),
    heading,
    metaTitle: metaTitleOf(fm),
    metaDescription: fm.meta_description ?? "",
    providerName: providerDisplayName(fm),
    providerFacts: providerFactsOf(fm),
    markdown,
    houseMarkdown: houseMd,
    prose,
    proseHouse,
    words: prose.split(/\s+/).filter(Boolean).length,
    links: extractLinks(markdown, buttonHrefs, buttons),
    buttons,
    h1Count: (markdown.match(/^# /gm) ?? []).length,
    subCount: (markdown.match(/^#{2,3} /gm) ?? []).length,
    alts,
    metaFields: metaFieldsOf(fm, heading),
    frontmatterClosed: closed,
    frontmatterError,
    // the close of the page's own copy, for the call-to-action check
    tail: proseHouse.slice(-400),
    lastBlockType: lastBlockTypeOf(fm),
  };
};

// ---------------------------------------------------------------------------
// Mechanical checks
//
// engine "code": fn(extraction, urlMap) returns [status, goodness, note];
// status is PASS, WARN, FAIL or SKIP, and SKIP drops the check from the
// weighted total.
// ---------------------------------------------------------------------------

const hitsOf = (patterns, text) =>
  patterns.filter(([re]) => re.test(text)).map(([, label]) => label);

const listHits = (hits) => hits.slice(0, 5).join(", ");

const US_SPELLING_RE =
  /\b(color|colors|center|centers|centered|favorite|favorites|organiz(e|es|ed|ing|ation)|speciali[z](e|es|ed|ing)|recogniz(e|es|ed)|analyz(e|es|ed|ing)|optimiz(e|es|ed|ing|ation)|traveling|traveled|jewelry|gray|aluminum|meter|meters)\b/gi;

// The AGENTS.md avoid-list plus the marketing stock phrases the style guide
// bans outright. Quoted speech is stripped first, so a reviewer's own
// words are fine.
const NO_GO_PATTERNS = [
  [/\butilise\b/i, "utilise"],
  [/\bleverage(d|s)?\b/i, "leverage"],
  [/\becosystems?\b/i, "ecosystem"],
  [/\bempower(s|ed|ing)?\b/i, "empower"],
  [/\bseamless(ly)?\b/i, "seamlessly"],
  [/\brobust(ness)?\b/i, "robust"],
  [/\bintuitive(ly)?\b/i, "intuitive"],
  [/\bcutting-edge\b/i, "cutting-edge"],
  [/\bbest-in-class\b/i, "best-in-class"],
  [/\bsolutions?\b/i, "solution"],
  [/\bstate-of-the-art\b/i, "state-of-the-art"],
  [/\bsecond to none\b/i, "second to none"],
  [/\bunparalleled\b/i, "unparalleled"],
  [/\btop-notch\b/i, "top-notch"],
  [/\bhassle[- ]free\b/i, "hassle-free"],
  [/\bpeace of mind\b/i, "peace of mind"],
  [/\brest assured\b/i, "rest assured"],
  [/\blook no further\b/i, "look no further"],
  [/\bwhy choose\b/i, "why choose"],
  [/\bgame[- ]chang(e|ing)\b/i, "game-changer"],
  [/\bdelve\b/i, "delve"],
  [/\bembark(ing)? (on|with)\b/i, "embark on"],
  [/\btapestry\b/i, "tapestry"],
  [/\brealm of\b/i, "realm of"],
  [/\blandscape of\b/i, "landscape of"],
  [/\bin today's\b/i, "in today's"],
  [/\bin this digital age\b/i, "in this digital age"],
  [/\belevat(e|es|ed|ing)\b/i, "elevate"],
  [/\bunlock(ing)? the potential\b/i, "unlock the potential"],
  [/\bharness(es|ing)? the power\b/i, "harness the power"],
  [/\bdive (deep|in?to)\b/i, "dive deep"],
  [/\bat its core\b/i, "at its core"],
  [/\bparadigm shift\b/i, "paradigm shift"],
  [/\bsynerg(y|ies)\b/i, "synergy"],
  [/\bthe ultimate\b/i, "the ultimate"],
  [/\brevolutionary\b/i, "revolutionary"],
  [/\bworld-class\b/i, "world-class"],
  [/\b(industry|world)-leading\b/i, "industry-leading"],
  [/\bthe best\b/i, "superlative 'the best'"],
  [/\bnumber one\b/i, "ranking claim"],
  [/\bunlike anyone else\b/i, "unlike anyone else"],
  [/\bnext[- ]level\b/i, "next level"],
  [/\bblazing(ly)? fast\b|\blighting[- ]fast\b/i, "speed hype"],
];

// Voice anti-patterns (AGENTS.md) that are worth a look but not always
// wrong - a hit means "check this sentence".
const VOICE_PATTERNS = [
  [/\bactually\b/i, "actually"],
  [/\bsimply\b/i, "simply"],
  [/\bjust\b/i, "just"],
  [/\bof course\b/i, "of course"],
  [/\beasily\b/i, "easily"],
  [/\bimagine\b/i, "imagine"],
  [/\bpicture (this|a|the|your)\b/i, "picture this"],
  [/\bwhat if\b/i, "what if"],
  [
    /\bnot (just|only)\b|\bmore than just\b|\bisn'?t (just|about)\b|\bit'?s not about\b/i,
    "contrast flip",
  ],
  [
    /\bwe believe\b|\bour mission\b|\bwe'?re passionate\b|\bwe stand for\b/i,
    "mission statement",
  ],
  [
    /\btoday'?s world\b|\bthe future of\b|\bnext generation of\b|\bmodern organisers\b/i,
    "era framing",
  ],
  [/\bready to (take|join|start|make|get|reclaim)\b/i, "warm-up question"],
  [
    /\bjoin the movement\b|\btake control\b|\bstart your journey\b|\bmake the switch\b|\breclaim your\b/i,
    "banned CTA phrase in prose",
  ],
];

// Dates that go stale, plus "now" narration a reader has no earlier version
// to compare against. Competitor prices carry a date by design (AGENTS.md),
// so "as of <date>" stays allowed.
const DATED_PATTERNS = [
  [
    /\b(tested|inspected|certified) (in |on )?(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]* 20\d\d/i,
    "test date",
  ],
  [/\b(valid|current|certified) until\b/i, "valid until"],
  [/\bexpires?\b/i, "expiry"],
  [/\bnew for (the )?20\d\d\b/i, "new for 20XX"],
  [/\b20\d\d season\b/i, "20XX season"],
  [
    /\b(is|are) now (live|available)\b|\bno longer\b|\bwent live\b/i,
    "history narration",
  ],
];

// "Don't show your workings" - research scaffolding never belongs in public
// copy. The provider_facts enums and keys are internal record-keeping.
const WORKINGS_PATTERNS = [
  [/\bnot-reviewed\b|\bnot-documented\b/i, "facts enum in copy"],
  [
    /\bprovider_facts\b|\bcompetitor_key\b|\blast_reviewed\b/i,
    "frontmatter key in copy",
  ],
  [/\bat the time of writing\b/i, "time-of-writing"],
  [/\bour (research|review|findings)\b/i, "research workings"],
  [/\bwe verified\b|\bwe reviewed\b/i, "review workings"],
];

// Template and generation leakage: placeholders, unrendered template code
// and LLM artefacts that survived into published copy. Any hit is a plain
// bug, so the finding verifies itself.
const LEAKAGE_PATTERNS = [
  [
    /\[\s*(insert|add|your|town|venue|name|placeholder)\b[^\]]*\](?!\()/i,
    "[placeholder]",
  ],
  [/\bTODO\b|\bTBC\b|\bFIXME\b|\bXXX\b/, "TODO/TBC marker"],
  [/lorem ipsum/i, "lorem ipsum"],
  [/\bundefined\b|\[object Object\]|\bNaN\b/, "undefined/NaN"],
  [
    /\bas an ai\b|here(?:'s| is) (?:the|a|your) (?:rewritten|updated|revised)\b/i,
    "LLM preamble",
  ],
  [/data-(start|end)=/i, "ChatGPT export attribute"],
];

// Unrendered template code only counts in head fields; the body can carry
// legitimate Liquid.
const META_LEAKAGE_PATTERNS = [
  ...LEAKAGE_PATTERNS,
  [/\{\{|\{%|\$\{/, "unrendered template code"],
];

// Link text that means nothing out of context (WCAG 2.4.4).
const VAGUE_ANCHOR_RE =
  /^(click )?here$|^(read|find out|learn|see) more$|^(this|that|the) (page|link|one)$|^this$|^link$|^more$/i;

// First-person plural narration: the site speaks about Chobble, not as
// Chobble (AGENTS.md voice rules). Customer reviews sit in quotes, which
// stripQuoted removes first. Bare "us" is not flagged: imperative CTAs
// ("Contact us") are allowed, and "US" the country appears in fee copy.
const FIRST_PERSON_RE = /\b(we|we've|we're|we'll|we'd|our|ours|ourselves)\b/gi;

const countMatches = (re, text) => (text.match(re) ?? []).length;

const checkFrontmatterClosed = (x) => {
  if (x.frontmatterClosed && !x.frontmatterError)
    return ["PASS", 1, "front matter closes"];
  const why = x.frontmatterError
    ? `front matter never closes and the YAML does not parse (${x.frontmatterError}) - the build sees no fields`
    : "front matter is never closed - the build sees no fields and would render the YAML as text";
  return ["FAIL", 0, why];
};

const checkMetaTitleLength = (x) => {
  const n = x.metaTitle.length;
  if (n === 0 || n > 75) return ["FAIL", 0, `${n} chars (target <= 65)`];
  if (n > 65 || n < 15) return ["WARN", 0.5, `${n} chars (target <= 65)`];
  return ["PASS", 1, `${n} chars`];
};

const checkMetaDescriptionPresent = (x) =>
  x.metaDescription.trim()
    ? ["PASS", 1, "present"]
    : ["FAIL", 0, "no meta description in frontmatter"];

const checkMetaDescriptionLength = (x) => {
  const n = x.metaDescription.length;
  if (!n) return ["SKIP", 0, "no meta description to measure"];
  if (n > 175) return ["FAIL", 0, `${n} chars (target < 160)`];
  if (n >= 160 || n < 70) return ["WARN", 0.5, `${n} chars (target 70-159)`];
  return ["PASS", 1, `${n} chars`];
};

/** On a comparison page the meta description must name the provider being
 * compared against and Chobble - the two things the search result promises.
 * Elsewhere the site's meta descriptions mix branded and unbranded, and
 * AGENTS.md sets no rule, so those pages skip. */
const checkMetaBranding = (x) => {
  const meta = x.metaDescription.toLowerCase();
  if (!meta) return ["SKIP", 0, "no meta description"];
  const provider = x.providerName.toLowerCase();
  const missing = [];
  if (!meta.includes("chobble")) missing.push("'Chobble'");
  if (provider && !meta.includes(provider)) missing.push(`'${x.providerName}'`);
  if (!missing.length)
    return ["PASS", 1, "meta description names the page's subjects"];
  return ["WARN", 0.5, `meta description missing: ${missing.join(", ")}`];
};

const checkHeading = (x) => {
  if (x.h1Count === 1)
    return ["PASS", 1, `h1 in block content: "${x.heading}"`];
  if (x.h1Count === 0 && x.heading)
    return ["PASS", 1, `h1 from frontmatter name: "${x.heading}"`];
  if (x.h1Count === 0) return ["FAIL", 0, "no h1 in blocks or frontmatter"];
  return ["WARN", 0.5, `${x.h1Count} h1s in block content`];
};

const WORD_FLOORS = {
  comparison: [500, 900],
  feature: [200, 350],
  audience: [250, 350],
  guide: [400, 700],
  page: [100, 250],
};

const checkThinContent = (x) => {
  if (LISTING_PAGES.has(x.file))
    return ["SKIP", 0, "listing page, thin by design"];
  const [failAt, warnAt] = WORD_FLOORS[x.pageType];
  if (x.words < failAt) return ["FAIL", 0, `${x.words} words of copy`];
  if (x.words < warnAt) return ["WARN", 0.5, `${x.words} words of copy`];
  return ["PASS", 1, `${x.words} words of copy`];
};

const checkSubheadings = (x) => {
  if (x.words < 400)
    return ["SKIP", 0, `${x.words} words, short enough to skip`];
  if (x.subCount >= 2)
    return ["PASS", 1, `${x.subCount} subheadings over ${x.words} words`];
  if (x.subCount === 1)
    return ["WARN", 0.5, `only 1 subheading over ${x.words} words`];
  return ["FAIL", 0, `no subheadings over ${x.words} words`];
};

const checkNoEmDash = (x) => {
  const n = countMatches(/\u2014/g, x.proseHouse);
  return n
    ? ["FAIL", 0, `${n} em-dash(es) - use commas, full stops or brackets`]
    : ["PASS", 1, "no em-dashes"];
};

const checkUkSpelling = (x) => {
  const hits = x.proseHouse.match(US_SPELLING_RE);
  if (!hits) return ["PASS", 1, "no US spellings detected"];
  const unique = [...new Set(hits.map((h) => h.toLowerCase()))];
  return ["WARN", 0, `US spelling(s): ${listHits(unique)}`];
};

const patternCheck = (patterns, status, good, what) => (x) => {
  const hits = hitsOf(patterns, x.proseHouse);
  return hits.length
    ? [status, good, `${what}: ${listHits(hits)}`]
    : ["PASS", 1, `no ${what}`];
};

/** Exclamation marks in house copy are banned outright (AGENTS.md);
 * quoted speech is exempt, and a "!" between letters is part of a name
 * (Yo!Rent), not an exclamation. */
const checkExclamations = (x) => {
  const prose = x.proseHouse.replace(/[A-Za-z]![A-Za-z]/g, "-");
  const n = countMatches(/!/g, prose);
  if (n === 0) return ["PASS", 1, "no exclamation marks"];
  return ["FAIL", 0, `${n} exclamation mark(s) in house copy`];
};

const checkEmoji = (x) => {
  const hits = x.proseHouse.match(/\p{Extended_Pictographic}/gu);
  return hits
    ? [
        "WARN",
        0,
        `emoji in copy (${[...new Set(hits)].join(" ")}) - a sign of old AI copy`,
      ]
    : ["PASS", 1, "no emoji"];
};

const checkBold = (x) => {
  // bold list-item leads ("- **Label** - ...") are a definitional device on
  // this site, as is bold in tables; count the rest
  const prose = outsideTables(x.houseMarkdown).replace(
    /^(\s*[-*+] )\*\*[^*\n]+\*\*/gm,
    "$1",
  );
  const n = countMatches(/\*\*[^*\n]+\*\*/g, prose);
  if (n > 4)
    return [
      "WARN",
      0,
      `${n} bold phrases - scattered bold is a sign of old AI copy`,
    ];
  if (n > 1) return ["WARN", 0.5, `${n} bold phrases in prose`];
  return ["PASS", 1, `${n} bold phrase(s)`];
};

const checkFirstPerson = (x) => {
  const n = countMatches(FIRST_PERSON_RE, x.proseHouse);
  if (!n) return ["PASS", 1, "no first-person plural narration"];
  const sample = [
    ...new Set(
      (x.proseHouse.match(FIRST_PERSON_RE) ?? []).map((s) => s.toLowerCase()),
    ),
  ];
  return [
    n > 2 ? "FAIL" : "WARN",
    n > 2 ? 0 : 0.5,
    `${n} 'we/our' (${sample.join(", ")}) - the site speaks about Chobble, not as Chobble`,
  ];
};

const RICH_LINK_TYPES = new Set(["comparison", "feature", "audience", "guide"]);

const checkInternalLinkCount = (x) => {
  const n = x.links.length;
  const sample = x.links
    .slice(0, 4)
    .map((l) => l.text)
    .join(", ")
    .slice(0, 90);
  if (n >= 3) return ["PASS", 1, `${n} internal link(s) (${sample})`];
  if (!RICH_LINK_TYPES.has(x.pageType)) {
    return n
      ? ["PASS", 1, `${n} internal link(s)`]
      : ["WARN", 0.5, "no internal links in copy"];
  }
  return n
    ? ["WARN", 0.5, `${n} internal link(s) (${sample})`]
    : ["FAIL", 0, "no internal links in copy"];
};

// House convention: a provider named in the copy links out to its
// comparison page, as the guide pages do. Mentions are matched against
// provider_facts.name and competitor_key, case-insensitive, hyphens and
// spaces alike, simple plurals allowed. Review quotes are already stripped
// from proseHouse. A page never needs to link itself.

let providerIndexCache = null;

const aliasRe = (alias) => {
  const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`\\b${escaped}s?\\b`, "i");
};

// Generic tail words dropped for a shorter alias: "Tessera Tickets" should
// still match copy that says "Tessera".
const GENERIC_TAILS = new Set(["tickets", "ticketing", "events"]);

const providerAliases = (name) => {
  if (typeof name !== "string") return [];
  const base = name.replace(/\s+/g, " ").trim();
  if (base.length < 4) return [];
  const words = base.split(" ");
  const aliases = [base];
  if (words.length > 1 && GENERIC_TAILS.has(words.at(-1).toLowerCase()))
    aliases.push(words.slice(0, -1).join(" "));
  return [...new Set(aliases)];
};

const aliasesFor = (fm) => [
  ...providerAliases(providerDisplayName(fm)),
  ...providerAliases(String(fm.competitor_key ?? "").replace(/-/g, " ")),
];

const addProviderAlias = (byAlias, alias, provider) => {
  if (!alias) return;
  const providers = byAlias.get(alias) ?? [];
  if (providers.some((p) => p.url === provider.url)) return;
  providers.push(provider);
  byAlias.set(alias, providers);
};

const providerIndex = () => {
  if (providerIndexCache) return providerIndexCache;
  const byAlias = new Map();
  for (const file of allContentFiles()) {
    const rel = relPath(file);
    if (detectPageType(rel, {}) !== "comparison") continue;
    const { data: fm } = readPage(file);
    const url = normaliseUrl(pageUrlOf(rel, fm));
    const provider = { url, name: providerDisplayName(fm) };
    for (const alias of aliasesFor(fm))
      addProviderAlias(byAlias, alias, provider);
  }
  providerIndexCache = byAlias;
  return byAlias;
};

const unlinkedProviderMentions = (x) => {
  const prose = x.proseHouse.replace(/[-\s]+/g, " ");
  const linked = new Set(x.links.map((l) => l.href));
  return [...providerIndex()]
    .filter(([, providers]) => !providers.some((p) => p.url === x.url))
    .filter(([alias]) => aliasRe(alias).test(prose))
    .filter(([, providers]) => !providers.some((p) => linked.has(p.url)))
    .map(([alias]) => alias);
};

const checkProviderLinks = (x) => {
  const missing = unlinkedProviderMentions(x);
  if (!missing.length) return ["PASS", 1, "every named provider links out"];
  return [
    "WARN",
    missing.length > 2 ? 0 : 0.5,
    `${missing.length} provider mention(s) unlinked: ${missing
      .slice(0, 3)
      .join(", ")}`,
  ];
};

const checkLinksResolve = (x, urlMap) => {
  const broken = x.links.filter((l) => !urlMap.has(l.href));
  return broken.length
    ? [
        "FAIL",
        0,
        `broken link(s): ${broken
          .slice(0, 3)
          .map((l) => `${l.text} -> ${l.href}`)
          .join("; ")}`,
      ]
    : ["PASS", 1, "all copy links resolve"];
};

const CTA_RE =
  /\b(get started|sign up|see pricing|contact|book a demo|try the (demo|platform)|read the docs|compare plans|view the source|get in touch|free (month|trial))\b/i;

const checkCtaClose = (x) => {
  if (x.lastBlockType === "cta")
    return ["PASS", 1, "page closes with a call-to-action block"];
  if (CTA_RE.test(x.tail))
    return ["PASS", 1, "copy closes with a call to action"];
  if (x.links.some((l) => ["/pricing/", "/free-trial/"].includes(l.href)))
    return [
      "WARN",
      0.5,
      "links pricing or the trial but the close has no call to action",
    ];
  return [
    "WARN",
    0,
    `no call to action near the end ("...${x.tail.slice(-80)}")`,
  ];
};

// AGENTS.md banned CTA labels, plus a length cap: a button needing more
// than four words means the prose did not do its job.
const BANNED_CTA_RE =
  /\b(take control|join the (movement|revolution)|start your journey|reclaim your|make the switch|be part of something|free your tickets|get started in seconds|begin your adventure|get the platform you deserve)\b/i;

const checkCtaLabels = (x) => {
  if (!x.buttons.length) return ["SKIP", 0, "no CTA buttons"];
  const banned = x.buttons.filter((b) => BANNED_CTA_RE.test(b));
  if (banned.length)
    return ["FAIL", 0, `banned CTA label(s): ${listHits(banned)}`];
  const long = x.buttons.filter((b) => b.trim().split(/\s+/).length > 4);
  if (long.length)
    return ["WARN", 0.5, `CTA label over four words: ${listHits(long)}`];
  return ["PASS", 1, `${x.buttons.length} CTA label(s) pass`];
};

const checkLeakage = (x) => {
  const metaHits = x.metaFields.flatMap(([field, value]) =>
    hitsOf(META_LEAKAGE_PATTERNS, value).map((hit) => `${hit} in ${field}`),
  );
  const hits = [...metaHits, ...hitsOf(LEAKAGE_PATTERNS, x.markdown)];
  return hits.length
    ? ["FAIL", 0, `template leakage: ${listHits(hits)}`]
    : ["PASS", 1, "no placeholders or generation artefacts"];
};

const checkVagueAnchors = (x) => {
  if (!x.links.length) return ["SKIP", 0, "no internal links"];
  const vague = x.links.filter((l) => VAGUE_ANCHOR_RE.test(l.text.trim()));
  return vague.length
    ? [
        "WARN",
        0.5,
        `vague link text: ${vague
          .slice(0, 3)
          .map((l) => `"${l.text}" -> ${l.href}`)
          .join("; ")}`,
      ]
    : ["PASS", 1, "link text describes each destination"];
};

const checkAltText = (x) => {
  if (!x.alts.length) return ["SKIP", 0, "no figure images"];
  const empty = x.alts.filter((a) => !a.trim()).length;
  const long = x.alts.filter((a) => a.length > 200).length;
  if (!empty && !long)
    return ["PASS", 1, `${x.alts.length} alt text(s) under 200 chars`];
  return ["WARN", 0.5, `${empty} empty and ${long} over-200-char alt text(s)`];
};

const code = (id, label, fn, weight, types = ALL_TYPES, extra = {}) => ({
  id,
  label,
  engine: "code",
  fn,
  weight,
  types,
  ...extra,
});

const CODE_CHECKS = [
  code(
    "frontmatter_closed",
    "Front matter closes",
    checkFrontmatterClosed,
    6,
    ALL_TYPES,
    { critical: true },
  ),
  code("meta_title_length", "Meta title length", checkMetaTitleLength, 3),
  code(
    "meta_description_present",
    "Meta description present",
    checkMetaDescriptionPresent,
    6,
  ),
  code(
    "meta_description_length",
    "Meta description length",
    checkMetaDescriptionLength,
    2,
  ),
  code(
    "meta_branding",
    "Meta names Chobble (+ provider)",
    checkMetaBranding,
    3,
    ["comparison"],
  ),
  code("h1_present", "Page heading (h1) present", checkHeading, 3),
  code("thin_content", "Copy not thin", checkThinContent, 5),
  code("subheading_structure", "Subheading structure", checkSubheadings, 2),
  code("no_em_dash", "No em-dashes", checkNoEmDash, 3),
  code("uk_spelling", "UK spellings", checkUkSpelling, 2),
  code(
    "no_go_phrases",
    "No-go phrases absent",
    patternCheck(NO_GO_PATTERNS, "FAIL", 0, "no-go phrase(s)"),
    5,
  ),
  code(
    "voice_anti_patterns",
    "Voice anti-patterns",
    patternCheck(VOICE_PATTERNS, "WARN", 0.5, "voice anti-pattern(s)"),
    4,
  ),
  code(
    "dated_claims",
    "No stale dates or history narration",
    patternCheck(DATED_PATTERNS, "WARN", 0, "dated claim(s)"),
    3,
  ),
  code(
    "no_workings",
    "Doesn't show its workings",
    patternCheck(WORKINGS_PATTERNS, "FAIL", 0, "research workings in copy"),
    4,
  ),
  code("emoji_check", "No emoji", checkEmoji, 2),
  code("exclamations", "No exclamation marks", checkExclamations, 3),
  code("scattered_bold", "No scattered bold", checkBold, 2),
  code("first_person", "No first-person plural narration", checkFirstPerson, 5),
  code(
    "internal_link_count",
    "Internal links in copy",
    checkInternalLinkCount,
    4,
  ),
  code("provider_links", "Providers linked at mention", checkProviderLinks, 3),
  code(
    "internal_links_resolve",
    "Internal links resolve",
    checkLinksResolve,
    5,
    ALL_TYPES,
    { critical: true },
  ),
  code("cta_close", "Closes with a call to action", checkCtaClose, 3),
  code("cta_labels", "CTA labels allowed and short", checkCtaLabels, 3),
  code(
    "template_leakage",
    "No placeholders or template leakage",
    checkLeakage,
    5,
    ALL_TYPES,
    { critical: true },
  ),
  code("vague_anchors", "Link text makes sense alone", checkVagueAnchors, 2),
  code("alt_text", "Figure alt text present", checkAltText, 2),
];

// ---------------------------------------------------------------------------
// Jev checks
//
// "score" questions return 0..n-1 against the criteria list; "noul" returns a
// probability. threshold applies to noul checks; invert=true when the
// question asks about a bad thing, so a low probability is good.
// ---------------------------------------------------------------------------

const jevScore = (
  id,
  label,
  weight,
  instructions,
  criteria,
  types = ALL_TYPES,
) => ({
  id,
  label,
  engine: "jev",
  types,
  weight,
  score_pass: 2,
  score_warn: 1,
  question: { type: "score", instructions, criteria },
});

const jevNoul = (id, label, weight, instructions, criteria, extra = {}) => ({
  id,
  label,
  engine: "jev",
  types: extra.types ?? ALL_TYPES,
  weight,
  threshold: 0.5,
  invert: !!extra.invert,
  question: { type: "noul", instructions, criteria },
});

const JEV_CHECKS = [
  // --- EEAT: each dimension scores 0-3; computeEeat combines the four ---
  jevScore(
    "eeat_experience",
    "EEAT: Experience",
    4,
    "Google's rater guidelines: 'consider the extent to which the content creator has the " +
      "necessary first-hand or life experience for the topic'. How much first-hand " +
      "experience does `body` show for the people behind Chobble Tickets? Signals: named " +
      "history (software work since 2007, the Bandcamp payments team, ten years writing " +
      "booking software for Bouncy Castle Network), and detail only someone who runs the " +
      "service would know: what happens when two confirmed payments race for the last " +
      "place, what read-only mode does after a prepaid term ends, how keyed admin " +
      "sessions unlock attendee data, what updates, backups and support actually cover. " +
      "Generic claims like 'years of experience' with nothing behind them do not count.",
    [
      "No experience signals - could be any ticketing vendor's page",
      "Vague experience claims with no specifics",
      "Concrete first-hand experience - named history or operating detail",
      "Rich, lived-in operating detail throughout, with named history",
    ],
  ),
  jevScore(
    "eeat_expertise",
    "EEAT: Expertise",
    4,
    "Google's rater guidelines: 'consider the extent to which the content creator has the " +
      "necessary knowledge or skill for the topic' - and expertise must be verifiable, not " +
      "self-asserted. How much genuine, correct practical detail does `body` show? For " +
      "this site, expertise means precise facts: prices and terms (£50/year or £5/month, " +
      "£25/year for charities, community groups, artists and musicians, annual billing " +
      "only), capacity semantics (capacity is consumed when payment confirmation arrives, " +
      "never during paid checkout; a race for the last place auto-refunds the later " +
      "order), encryption (RSA-OAEP + AES-256-GCM, per-record keys, keyed admin " +
      "sessions), payments going to the organiser's own Stripe, Square or SumUp account, " +
      "self-hosting realities (infrastructure, email and processing stay separate; no " +
      "licence fee), the AGPL-3.0-only licence, and exports (database backup, versioned " +
      "JSON event setup). Buzzword lists do not count.",
    [
      "No practical or technical detail",
      "Shallow or generic claims, terms dropped without context",
      "Solid, correct practical detail - prices, behaviour and terms in context",
      "Deep expertise - precise detail that helps an organiser plan or audit",
    ],
  ),
  jevScore(
    "eeat_authoritativeness",
    "EEAT: Authoritativeness",
    3,
    "Google's rater guidelines: 'consider the extent to which the content creator or the " +
      "website is known as a go-to source for the topic'; raters look for reputation from " +
      "independent sources. How authoritative does the site come across? Signals: links " +
      "to the published source code and documentation, the ICO registration and company " +
      "number, dated provider research in `internal_links` to comparison pages, and " +
      "comparative claims qualified to what the site's reviews verified ('among the " +
      "providers with verified records in this repository'). Unsupported " +
      "self-descriptions like 'leading' or 'trusted' do not count.",
    [
      "No authority signals",
      "Self-asserted standing with nothing backing it",
      "Verifiable references appear - source code, registration, dated research",
      "Strong - verifiable references throughout, comparisons qualified to the evidence",
    ],
  ),
  jevScore(
    "eeat_trustworthiness",
    "EEAT: Trustworthiness",
    5,
    "Google's rater guidelines call trust 'the most important member of the E-E-A-T family " +
      "because untrustworthy pages have low E-E-A-T no matter how Experienced, Expert, or " +
      "Authoritative they may seem'. How trustworthy does `body` feel for an organiser " +
      "choosing where their ticket income and attendee data go? Concrete signals: honest " +
      "limits (a prepaid term that ends without renewal enters read-only mode for 24 " +
      "months, after which the site and database are deleted; paid checkout does not " +
      "reserve capacity, so overselling is not impossible), payment-provider charges " +
      "stated as separate from Chobble's price, competitor advantages stated plainly, " +
      "and the data position stated as structure (Chobble does not collect attendee " +
      "data; its income comes from the annual fee). Safety or reliability claims should " +
      "be stated as what the product does, never absolutes like '100% safe'. Generic " +
      "reassurance does not count.",
    [
      "No trust signals",
      "Generic reassurance with nothing concrete behind it",
      "Concrete signals - honest limits, separate charges, structural facts",
      "Strong - honest limits throughout, no absolutes, competitor strengths acknowledged",
    ],
  ),

  // --- Spam policies (developers.google.com/search/docs/essentials/spam-policies) ---
  jevScore(
    "scaled_content",
    "Not scaled/templated content",
    4,
    "Google's scaled content abuse policy: 'many pages are generated for the primary " +
      "purpose of manipulating search rankings', 'typically focused on creating large " +
      "amounts of unoriginal content that provides little to no value to users' - the " +
      "examples include pages where 'the main content is copied or only slightly varied'. " +
      "Judge `body` as one page among `siblings` (same-type pages): does it read as " +
      "individually written with real knowledge, or as one output of a content pipeline - " +
      "structure, sentences and lists that would survive a find-and-replace of the " +
      "provider or event-type name? A page a reader could not tell apart from its " +
      "siblings with the name covered scores 0-1.",
    [
      "Templated - find-and-replace the name and it would be any sibling page",
      "Mostly template with a few page-specific facts bolted on",
      "Mostly written for this page's topic - structure may repeat but the substance is specific",
      "Individually written throughout - a reader could tell it from its siblings blindfolded",
    ],
  ),

  // --- People-first (creating-helpful-content self-assessment) ---
  jevScore(
    "people_first",
    "People-first, satisfying content",
    4,
    "Google's people-first self-assessment asks: does the content 'provide a substantial, " +
      "complete, or comprehensive description of the topic', provide 'substantial value " +
      "when compared to other pages in search results', leave the reader feeling they've " +
      "'learned enough about a topic to help achieve their goal' and had 'a satisfying " +
      "experience', and avoid leaving 'readers feeling like they need to search again to " +
      "get better information from other sources'? The search-engine-first warning signs " +
      "are the inverse: content 'primarily made to attract visits from search engines', " +
      "written to a word count, or summarising without adding value. Judge `body` for the " +
      "event organiser who lands on this page from `page.url` and `page.page_type` - do " +
      "they leave able to act, or needing another search?",
    [
      "Reader leaves empty-handed - thin, generic, or built for the search engine",
      "Some substance but the reader will still need another source to act",
      "Substantial - the reader's main questions are answered in enough detail to act",
      "Satisfying and complete - substantial value beyond the obvious, nothing missing, no need to search again",
    ],
  ),
  jevScore(
    "concrete_facts",
    "Concrete facts vs marketing filler",
    5,
    "How concrete is `body`: specific facts, numbers, named entities and verified terms " +
      "(£50/year or £5/month, £25/year community rate, 24 months of read-only mode, " +
      "Stripe, Square, SumUp, AGPL-3.0, RSA-OAEP, AES-256-GCM, a named competitor's " +
      "dated fee such as 6.95% + £0.59) versus filler that could describe any ticketing " +
      "platform ('perfect for any event', 'take the stress out of ticketing')?",
    [
      "Generic filler throughout",
      "Mostly generic with one or two specifics",
      "A healthy mix of concrete facts and plain explanation",
      "Concrete facts, numbers and named examples throughout",
    ],
  ),
  jevScore(
    "house_voice",
    "House voice (encyclopaedia test)",
    4,
    "Judge `body_house` against this house voice: Wikipedia-style neutral, factual and " +
      "third-person. The subject is 'Chobble Tickets' or 'Chobble', never 'we'. The " +
      "reader is 'you' where that helps. Sentences are short, carry one idea each, and " +
      "use active voice and common words a 10 year old understands. Technical terms are " +
      "explained the first time they appear. The register is formal but plain: complete " +
      "sentences, no brochure fragments, no strings of punchy one-liners, no exclamation " +
      "marks, no rhetorical questions. British spellings throughout. The test: could " +
      "each sentence sit in a good reference work? Brochure polish, sales-pitch rhythm, " +
      "unexplained jargon and small-vendor pomposity all fail. Score ONLY `body_house`; " +
      "quoted customer reviews are exempt and already stripped.",
    [
      "Brochure copy throughout - reads like an agency wrote it",
      "Mostly marketing voice with a few plain lines",
      "Mostly plain and factual with a few lines a light edit would fix",
      "Neutral, factual and plain throughout - passes the encyclopaedia test line by line",
    ],
  ),
  jevScore(
    "cliche_score",
    "Cliché score",
    4,
    "Judge `body_house` for the banned rhetorical patterns in AGENTS.md - the " +
      "trying-too-hard structures, not single words. Score ONLY `body_house`; quoted " +
      "reviews are exempt and already stripped. Look for: contrast flips ('not just a " +
      "ticketing platform', 'it's not about features, it's about freedom', 'more than " +
      "just booking'); 'imagine' or 'picture this' daydreams; first-person mission " +
      "statements ('we believe', 'our mission', 'we stand for'); vague era framing " +
      "('in today's world', 'the future of ticketing', 'modern organisers'); warm-up " +
      "questions ('Ready to sell tickets?'); three-word slogans ('Own your data. Keep " +
      "your fans.'); strings of short punchy sentences in place of prose; alliteration " +
      "for effect; overselling modifiers ('powerful', 'blazing fast', 'the ultimate'); " +
      "self-justifying value phrases ('pays for itself'); and copy narrating the site's " +
      "own page structure instead of naming the thing. 0 means riddled, 3 means clean.",
    [
      "Riddled - built from advert structures, several distinct failure modes",
      "Multiple clichés - three or more hits, or one structure repeated",
      "A cliché or two that a light rewrite would trim",
      "Clean - plain, factual prose",
    ],
  ),
  jevScore(
    "searcher_intent",
    "Searcher intent",
    4,
    "Judge whether `body` serves the person who lands on this page. Work out who they " +
      "are from `page.url` and `page.page_type`: a comparison page gets an organiser " +
      "deciding between Chobble Tickets and the named provider (what each charges, what " +
      "each does better, where Chobble is not the right choice); a feature page gets an " +
      "organiser working out what the feature does, how it behaves and where it stops; " +
      "an audience page gets an organiser of that event type working out whether Chobble " +
      "Tickets fits it; a guide page gets someone researching a ticketing question who " +
      "deserves an honest answer, including where Chobble sits; other pages get someone " +
      "after that page's specific answer. Does `body` say early what the page offers, " +
      "answer that visitor's main questions, and make the next step obvious?",
    [
      "Intent not addressed - the visitor can't tell what the page offers them",
      "Intent implied but late or incomplete - main questions left unanswered",
      "Intent addressed - who it's for and the main questions answered clearly",
      "Addressed early and completely - questions answered up front, next step obvious",
    ],
  ),
  jevScore(
    "choice_support",
    "Helps choose between platforms",
    4,
    "This page compares platforms. Does `body` help an organiser choose - stating what " +
      "each side charges with numbers, listing genuine advantages the competitor has as " +
      "well as genuine Chobble advantages (AGENTS.md: 'When a competitor genuinely does " +
      "something well, say so'), and keeping comparative claims qualified to what the " +
      "site's reviews verified - or is it one-sided promotion that restates a winner?",
    [
      "One-sided hype - the competitor exists only to lose",
      "Some balance but mostly Chobble promotion with token concessions",
      "Useful balance - real strengths and weaknesses on both sides",
      "Clear, qualified both-ways comparison with numbers a reader can check",
    ],
    ["comparison", "guide"],
  ),
  jevNoul(
    "copy_matches_facts",
    "Copy matches the provider_facts record",
    4,
    "The page carries a `provider_facts` record of what this site's review actually " +
      "verified. Does `body` contradict that record or claim more than it supports - a " +
      "fee, pricing model or feature the record does not document, or a characterisation " +
      "the record does not back? Claims copied from the record, claims the record's " +
      "`summary` supports, and claims correctly qualified ('not documented on the pages " +
      "checked') are fine. Facts a comparison needs but the record lacks should stay " +
      "unstated, not guessed.",
    {
      true: "The copy states or implies something the provider_facts record does not support",
      false:
        "Every claim about the provider stays within what the record verified",
    },
    { types: ["comparison"], invert: true },
  ),
  jevNoul(
    "practical_limits",
    "States practical limits",
    3,
    "Does `body` state honest practical limits: what the product does not do, features a " +
      "competitor has that Chobble lacks, terms that end (read-only mode after 24 months, " +
      "then deletion), charges that stay separate (payment processing), or conditions " +
      "where another provider would suit better?",
    {
      true: "At least one honest practical limit appears",
      false: "Claims suitability for everything with no limits stated",
    },
    { types: ["comparison", "feature", "guide"] },
  ),
  // Bounded yes/no checks whose findings are quick to confirm by eye: the
  // reviewer reads two short fields, or looks for one named phrase.
  jevNoul(
    "meta_accuracy",
    "Title and meta match the page",
    3,
    "Do `page.meta_title` and `page.meta_description` accurately describe what `body` " +
      "offers? Fail if either promises something `body` never delivers (a feature, " +
      "provider, price or audience the copy does not mention), or uses exaggerated " +
      "framing the copy does not back up. Naming the comparison subject is fine when " +
      "`body` compares it.",
    {
      true: "Title and meta description are an honest summary of the page",
      false: "Title or meta promises something the page does not deliver",
    },
  ),
  jevNoul(
    "heading_title_match",
    "Heading and title agree",
    2,
    "Do `page.heading` (the visible h1) and `page.meta_title` describe the same core " +
      "topic, so someone clicking the search result lands on the page they expected? " +
      "Different wording is fine; a different subject, feature or provider is not.",
    {
      true: "Heading and title name the same thing",
      false: "Heading and title describe different things",
    },
  ),
  jevNoul(
    "overclaims",
    "No overclaims",
    4,
    "Does `body_house` make unsupported absolute or superlative claims: guarantees " +
      "('guaranteed to', 'never lets you down'), absolutes ('everyone loves', 'suits " +
      "every event', 'always'), rankings nobody can check ('the best ticketing " +
      "platform', 'number one'), or safety absolutes ('100% safe', 'risk-free')? A " +
      "comparative claim like 'the only ticketing platform that...' counts as an " +
      "overclaim unless it carries the qualification that it holds among the providers " +
      "with verified records on this site. Google's helpful-content self-check also asks " +
      "whether the main heading or title 'avoids exaggerating or being shocking in " +
      "nature' - judge `page.meta_title` and `page.heading` here too. Specific " +
      "checkable facts ('£50/year', 'AGPL-3.0-only', '600,000 PBKDF2 iterations') are " +
      "not overclaims.",
    {
      true: "At least one unsupported guarantee, absolute or unverifiable ranking",
      false:
        "Claims are specific and checkable, with no guarantees or rankings",
    },
    { invert: true },
  ),
  jevNoul(
    "keyword_stuffing",
    "No keyword stuffing",
    2,
    "Google's keyword stuffing policy lists 'blocks of text that list cities and regions " +
      "that a web page is trying to rank for' and 'repeating the same words or phrases " +
      "so often that it sounds unnatural' as signals. Does `body_house` do either - a " +
      "list of search phrases doing rankings work rather than reader work, or the page's " +
      "main search phrase (from `page.heading` or `page.meta_title`, e.g. 'Eventbrite " +
      "alternative') repeated unnaturally? Two or three natural mentions is fine.",
    {
      true: "The main phrase is repeated unnaturally",
      false: "Keywords appear naturally",
    },
    { invert: true },
  ),
  jevNoul(
    "social_proof",
    "Social proof in the copy",
    3,
    "Does `body` quote or attribute a customer review, or name a real event, organisation " +
      "or booking that uses the product?",
    {
      true: "A review quote or named real use appears",
      false: "No social proof anywhere",
    },
    { types: ["comparison", "audience"] },
  ),
];

const CHECKS = [...CODE_CHECKS, ...JEV_CHECKS];

// ---------------------------------------------------------------------------
// Jev client
// ---------------------------------------------------------------------------

const loadApiKey = () => {
  const key = process.env.OPENCODE_API_KEY;
  if (key) return key.trim();
  try {
    return readFileSync(DEFAULT_KEY_FILE, "utf8").trim();
  } catch {
    return null;
  }
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const postJev = (payload, apiKey, sessionId) =>
  fetch(ZEN_SYSTEMONE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "grade-pages/0.1 (tickets-site)",
      "x-opencode-session": sessionId,
    },
    body: JSON.stringify(payload),
  });

/** One attempt: { resp } on success, { err, retryAfter } on failure, where
 * retryAfter is null when retrying will not help. */
const attemptJev = async (payload, apiKey, sessionId, attempt) => {
  try {
    const res = await postJev(payload, apiKey, sessionId);
    if (res.ok) return { resp: await res.json() };
    const err = `HTTP ${res.status}: ${(await res.text()).slice(0, 400)}`;
    if (res.status === 429) return { err, retryAfter: 5000 * (attempt + 1) };
    if ([400, 401, 402].includes(res.status)) return { err, retryAfter: null };
    return { err, retryAfter: 1000 + attempt };
  } catch (e) {
    return { err: `${e.name}: ${e.message}`, retryAfter: 1000 + attempt };
  }
};

const callJev = async (state, questions, model, apiKey, sessionId) => {
  const payload = { model, state, questions };
  let last = { err: "no attempts made" };
  for (let attempt = 0; attempt < 3; attempt++) {
    last = await attemptJev(payload, apiKey, sessionId, attempt);
    if (last.resp || last.retryAfter === null) break;
    await sleep(last.retryAfter);
  }
  return {
    resp: last.resp ?? null,
    err: last.resp ? null : last.err,
    req: payload,
  };
};

// ---------------------------------------------------------------------------
// Grading
// ---------------------------------------------------------------------------

const buildJevState = (x, siblings) => ({
  page: {
    url: `${SITE_URL}${x.url}`,
    page_type: x.pageType,
    name: x.name,
    heading: x.heading,
    meta_title: x.metaTitle,
    meta_description: x.metaDescription,
  },
  body: x.prose.slice(0, MAX_BODY_CHARS),
  body_truncated: x.prose.length > MAX_BODY_CHARS,
  // quoted reviews stripped - customer voices are not judged on house voice
  body_house: x.proseHouse.slice(0, MAX_BODY_CHARS),
  internal_links: x.links,
  // same-type pages, for the scaled-content question
  siblings,
  // what the review verified, so the copy can be checked against the record
  ...(x.providerFacts ? { provider_facts: x.providerFacts } : {}),
  business: {
    name: "Chobble Tickets",
    who: "open source event ticketing platform published under the AGPL-3.0-only licence, offered as managed hosting by Chobble, a UK community interest company based in Prestwich, Manchester",
    context:
      "one managed-hosting price of £50/year or £5/month (£25/year for charities, community groups, artists and musicians, annual billing only) with every current feature included and no feature tiers; " +
      "no per-ticket or per-sale platform fee, and ticket income goes to the organiser's own Stripe, Square or SumUp account; " +
      "hosting is prepaid, not subscription billing: a term that ends without renewal enters read-only mode for 24 months, after which the site and database are deleted; " +
      "paid checkout does not reserve capacity - capacity is consumed when payment confirmation arrives, and a race for the last place auto-refunds the later order; " +
      "the same product can be self-hosted with no software fee; organisers can use their own domain, download a full database backup, and export event setup as versioned JSON",
  },
});

const activeChecks = (x) => CHECKS.filter((c) => c.types.includes(x.pageType));

const runMechanical = (x, checks, urlMap) => {
  const results = {};
  for (const c of checks.filter((check) => check.engine === "code")) {
    const [status, goodness, note] = c.fn(x, urlMap);
    results[c.id] = {
      label: c.label,
      engine: "code",
      weight: c.weight,
      status,
      goodness,
      note,
      critical: !!c.critical,
    };
  }
  return results;
};

const statusFor = (good, pass, warn) => {
  if (good >= pass) return "PASS";
  return good >= warn ? "WARN" : "FAIL";
};

const gradeNoul = (ans, c) => {
  const p = ans.noul;
  const good = c.invert ? 1 - p : p;
  return {
    value: p,
    goodness: good,
    status: statusFor(good, c.threshold, c.threshold - 0.3),
    note: `noul=${p.toFixed(2)}${c.invert ? " (lower is better)" : ""}`,
  };
};

const gradeScore = (ans, c) => {
  const s = ans.score;
  const good = s >= c.score_pass ? 1 : s >= c.score_warn ? 0.5 : 0;
  const levels = c.question.criteria.length - 1;
  return {
    value: s,
    goodness: good,
    status: statusFor(good, 1, 0.5),
    note: `score=${s.toFixed(2)}/${levels} (conf ${(ans.confidence ?? 0).toFixed(2)})`,
  };
};

/** A hard FAIL the model isn't confident about is a review flag, not a
 * verdict (TypeSafe confidence architecture: act only when confident). */
const softenUnconfident = (entry, confidence) => {
  if (typeof confidence !== "number" || confidence >= 0.3) return entry;
  if (entry.status !== "FAIL") return entry;
  return {
    ...entry,
    status: "WARN",
    goodness: 0.5,
    note: `${entry.note} [low confidence - human review]`,
  };
};

const gradeJevAnswer = (ans, c) => {
  const graded = ans.type === "noul" ? gradeNoul(ans, c) : gradeScore(ans, c);
  return softenUnconfident(
    {
      label: c.label,
      engine: "jev",
      weight: c.weight,
      critical: false,
      raw: ans,
      ...graded,
    },
    ans.confidence,
  );
};

const gradeJevAnswers = (answers, checks) =>
  Object.fromEntries(
    checks
      .filter((c) => answers[c.id])
      .map((c) => [c.id, gradeJevAnswer(answers[c.id], c)]),
  );

const letterFor = (score) => {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  return score >= 45 ? "D" : "F";
};

const summarise = (results) => {
  const counted = Object.values(results).filter((r) => r.status !== "SKIP");
  const totalW = counted.reduce((a, r) => a + r.weight, 0);
  const gotW = counted.reduce((a, r) => a + r.weight * r.goodness, 0);
  const score = totalW ? Math.round((100 * gotW) / totalW) : 0;
  const counts = { PASS: 0, WARN: 0, FAIL: 0 };
  for (const r of counted) counts[r.status]++;
  return { score, letter: letterFor(score), counts };
};

const EEAT_IDS = [
  "eeat_experience",
  "eeat_expertise",
  "eeat_authoritativeness",
  "eeat_trustworthiness",
];

/** The four EEAT dimension scores (0-3 each) combined into a headline, or
 * null when none were graded (mechanical-only runs). */
const computeEeat = (results) => {
  const dims = Object.fromEntries(
    EEAT_IDS.filter((id) => typeof results[id]?.value === "number").map(
      (id) => [id, results[id].value],
    ),
  );
  const values = Object.values(dims);
  if (!values.length) return null;
  const mean = values.reduce((a, v) => a + v, 0) / values.length;
  const score = Math.round((mean / 3) * 100);
  return {
    mean: Math.round(mean * 100) / 100,
    score,
    letter: letterFor(score),
    dimensions: dims,
  };
};

const sessionIdFor = (x) =>
  `grade-pages-${x.url.replace(/[^a-z0-9]/gi, "").slice(-40)}`;

const logVerbose = (opts, req, resp) => {
  if (!opts.verbose) return;
  console.error("--- jev request ---");
  console.error(JSON.stringify(req, null, 2));
  console.error("--- jev response ---");
  console.error(JSON.stringify(resp, null, 2));
};

/** Ask Jev every fuzzy question for the page in one call. */
const runJev = async (x, checks, opts, siblings) => {
  const jevChecks = checks.filter((c) => c.engine === "jev");
  if (!jevChecks.length || opts.noJev)
    return { results: {}, info: null, error: null };
  if (!opts.apiKey) return { results: {}, info: null, error: "no API key" };
  const questions = Object.fromEntries(
    jevChecks.map((c) => [c.id, structuredClone(c.question)]),
  );
  const started = Date.now();
  const { resp, err, req } = await callJev(
    buildJevState(x, siblings),
    questions,
    opts.model,
    opts.apiKey,
    sessionIdFor(x),
  );
  logVerbose(opts, req, resp);
  if (err) return { results: {}, info: null, error: err };
  return {
    results: gradeJevAnswers(resp.answers ?? {}, jevChecks),
    info: {
      model: resp.model ?? opts.model,
      input_tokens: resp.usage?.input_tokens,
      output_tokens: resp.usage?.output_tokens,
      seconds: (Date.now() - started) / 1000,
    },
    error: null,
  };
};

const elapsed = (start) => Math.round((Date.now() - start) / 10) / 100;

const gradePage = async (file, opts, urlMap, siblingIndex) => {
  const start = Date.now();
  try {
    const x = extractPage(file, opts.type);
    const checks = activeChecks(x);
    const jev = await runJev(x, checks, opts, siblingsFor(x, siblingIndex));
    const results = { ...runMechanical(x, checks, urlMap), ...jev.results };
    return {
      file: x.file,
      url: x.url,
      page_type: x.pageType,
      ...summarise(results),
      checks: results,
      eeat: computeEeat(results),
      jev: jev.info,
      jev_error: jev.error,
      seconds: elapsed(start),
    };
  } catch (e) {
    return {
      file: relPath(file),
      url: relPath(file),
      page_type: "?",
      score: null,
      letter: "E",
      counts: { PASS: 0, WARN: 0, FAIL: 0 },
      checks: {},
      eeat: null,
      jev: null,
      jev_error: null,
      error: `${e.name}: ${e.message}`,
      seconds: elapsed(start),
    };
  }
};

// ---------------------------------------------------------------------------
// Reports
// ---------------------------------------------------------------------------

const MARKS = { PASS: "+", WARN: "~", FAIL: "X", SKIP: "-" };

const formatEeat = (e) => {
  const dims = EEAT_IDS.filter((id) => id in e.dimensions)
    .map((id) => `${id.replace("eeat_", "")} ${e.dimensions[id].toFixed(1)}`)
    .join(" | ");
  return `EEAT: ${e.score}/100 (${e.letter}) - ${dims}`;
};

const printCheckLine = (r) => {
  const crit = r.critical && r.status === "FAIL" ? " [CRITICAL]" : "";
  console.log(
    `  [${MARKS[r.status]}] ${r.status.padEnd(4)} ${r.label.padEnd(42)} (${r.engine.padEnd(4)} w${r.weight}) ${r.note}${crit}`,
  );
};

const printReport = (x, result) => {
  console.log(`Chobble Tickets page grader - ${x.url} (${x.file})`);
  console.log(
    `page type: ${x.pageType} | words: ${x.words} | checks: ${Object.keys(result.checks).length}\n`,
  );
  for (const r of Object.values(result.checks)) printCheckLine(r);
  const c = result.counts;
  console.log(
    `\nScore: ${result.score}/100 (${result.letter}) - ${c.PASS} pass, ${c.WARN} warn, ${c.FAIL} fail`,
  );
  if (result.eeat) console.log(formatEeat(result.eeat));
  if (result.jev) {
    const j = result.jev;
    console.log(
      `Jev: model=${j.model}, ${j.input_tokens} in / ${j.output_tokens} out tokens, ${j.seconds.toFixed(2)}s`,
    );
  }
};

const failedIds = (row, sep = ",") =>
  Object.entries(row.checks)
    .filter(([, chk]) => chk.status === "FAIL")
    .map(([id]) => id)
    .join(sep);

const progressLine = (row, done, total) => {
  const prefix = `[${done}/${total}]`;
  if (row.score === null)
    return `${prefix} SKIP ${row.url} - ${(row.error ?? "").slice(0, 80)}`;
  const jevNote = row.jev_error ? ` (jev: ${row.jev_error.slice(0, 40)})` : "";
  return `${prefix} ${String(row.score).padStart(3)} ${row.letter} ${row.page_type.padEnd(10)} ${(failedIds(row) || "-").slice(0, 60)} ${row.url}${jevNote}`;
};

const gradeAll = async (targets, opts, urlMap, siblingIndex) => {
  const rows = new Array(targets.length);
  let done = 0;
  let next = 0;
  const worker = async () => {
    while (next < targets.length) {
      const i = next++;
      rows[i] = await gradePage(targets[i], opts, urlMap, siblingIndex);
      done++;
      console.error(progressLine(rows[i], done, targets.length));
    }
  };
  const count = Math.min(opts.workers, targets.length);
  await Promise.all(Array.from({ length: count }, worker));
  return rows.sort(
    (a, b) =>
      (a.score === null) - (b.score === null) ||
      (a.score ?? 0) - (b.score ?? 0),
  );
};

const RULE = "-".repeat(110);

const tableRow = (r) => {
  if (r.score === null) {
    return `${"---".padStart(5)} ${"-".padEnd(2)} ${"".padStart(5)} ${r.page_type.padEnd(10)} ${"".padEnd(9)} ${r.url} - ${(r.error ?? "").slice(0, 60)}`;
  }
  const c = r.counts;
  const eeat = r.eeat ? `${r.eeat.score}${r.eeat.letter}` : "-";
  return `${String(r.score).padStart(5)} ${r.letter.padEnd(2)} ${eeat.padStart(5)} ${r.page_type.padEnd(10)} ${`${c.PASS}/${c.WARN}/${c.FAIL}`.padEnd(9)} ${failedIds(r) || "-"} ${r.url}`;
};

const tally = (rows, status) => {
  const counter = new Map();
  for (const chk of rows.flatMap((r) => Object.values(r.checks))) {
    if (chk.status === status)
      counter.set(chk.label, (counter.get(chk.label) ?? 0) + 1);
  }
  return [...counter].sort((a, b) => b[1] - a[1]);
};

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
};

const printTally = (heading, status, rows, n) => {
  const top = tally(rows, status).slice(0, n);
  if (!top.length) return;
  console.log(`\n${heading}`);
  for (const [label, count] of top)
    console.log(`  ${status} x${String(count).padEnd(4)} ${label}`);
};

const printEeatSummary = (graded) => {
  const rows = graded.filter((r) => r.eeat);
  if (!rows.length) return;
  const worst = [...rows]
    .sort((a, b) => a.eeat.score - b.eeat.score)
    .slice(0, 5)
    .map((r) => `${r.url} ${r.eeat.score}${r.eeat.letter}`)
    .join(", ");
  console.log(
    `\nEEAT: ${rows.length} pages graded | median ${median(rows.map((r) => r.eeat.score))}/100 | worst: ${worst}`,
  );
};

const printSummary = (rows, seconds) => {
  const graded = rows.filter((r) => r.score !== null);
  if (!graded.length) return;
  const letters = {};
  for (const r of graded) letters[r.letter] = (letters[r.letter] ?? 0) + 1;
  const spread = Object.keys(letters)
    .sort()
    .map((l) => `${l}:${letters[l]}`)
    .join(" ");
  const jevErrors = graded.filter((r) => r.jev_error).length;
  console.log(RULE);
  console.log(
    `${graded.length} graded, ${rows.length - graded.length} errored, ${jevErrors} without Jev | median ${median(graded.map((r) => r.score))} | ${spread} | ${seconds.toFixed(0)}s total`,
  );
  printTally("Most-failed checks across the batch:", "FAIL", graded, 10);
  printTally("Most-warned checks across the batch:", "WARN", graded, 8);
  printEeatSummary(graded);
};

const printTable = (rows, opts, seconds) => {
  console.log(
    `\nChobble Tickets page grader - batch of ${rows.length} (workers=${opts.workers}, model=${opts.noJev ? "none" : opts.model})`,
  );
  console.log(
    `${"Score".padStart(5)} ${"L".padEnd(2)} ${"EEAT".padStart(5)} ${"Type".padEnd(10)} ${"p/w/x".padEnd(9)} Failed checks`,
  );
  console.log(RULE);
  for (const r of rows) console.log(tableRow(r));
  printSummary(rows, seconds);
};

const csvEscape = (v) => {
  const s = String(v ?? "");
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const CSV_COLUMNS = [
  "score",
  "letter",
  "eeat",
  "eeat_letter",
  "page_type",
  "url",
  "file",
  "pass",
  "warn",
  "fail",
  "failed_checks",
  "jev_error",
  "error",
];

const csvRow = (r) =>
  [
    r.score,
    r.letter,
    r.eeat?.score,
    r.eeat?.letter,
    r.page_type,
    r.url,
    r.file,
    r.counts.PASS,
    r.counts.WARN,
    r.counts.FAIL,
    failedIds(r, ";"),
    r.jev_error,
    r.error,
  ]
    .map(csvEscape)
    .join(",");

const writeCsv = (rows, file) => {
  writeFileSync(
    file,
    `${[CSV_COLUMNS.join(","), ...rows.map(csvRow)].join("\n")}\n`,
  );
  console.error(`\nCSV written to ${file}`);
};

const criticalChecksOf = (row) =>
  Object.values(row.checks).filter((c) => c.critical && c.status === "FAIL");

const criticalRows = (rows) =>
  rows.filter((r) => r.score === null || criticalChecksOf(r).length > 0);

const printCriticalRow = (row) => {
  if (row.score === null) {
    console.error(`CRITICAL ${row.url}: grading failed: ${row.error}`);
    return;
  }
  for (const c of criticalChecksOf(row))
    console.error(`CRITICAL ${row.url}: ${c.label}: ${c.note}`);
};

const runBatch = async (targets, opts, urlMap, siblingIndex) => {
  const start = Date.now();
  const rows = await gradeAll(targets, opts, urlMap, siblingIndex);
  if (opts.json) console.log(JSON.stringify(rows, null, 2));
  else printTable(rows, opts, (Date.now() - start) / 1000);
  if (opts.csv) writeCsv(rows, opts.csv);
  if (!opts.failOnCritical) return 0;
  const failed = criticalRows(rows);
  for (const row of failed) printCriticalRow(row);
  return failed.length ? 1 : 0;
};

const runSingle = async (file, opts, urlMap, siblingIndex) => {
  const result = await gradePage(file, opts, urlMap, siblingIndex);
  if (result.score === null) {
    console.error(`ERROR grading ${result.url}: ${result.error}`);
    return 2;
  }
  printReport(extractPage(file, opts.type), result);
  if (result.jev_error)
    console.error(
      `note: Jev unavailable (${result.jev_error}); report is mechanical-only`,
    );
  const critical = Object.values(result.checks).filter(
    (r) => r.critical && r.status === "FAIL",
  );
  for (const r of critical) console.log(`CRITICAL: ${r.label}: ${r.note}`);
  return critical.length ? 1 : 0;
};

// ---------------------------------------------------------------------------
// URL map and target resolution
// ---------------------------------------------------------------------------

const permalinksOf = (fm) => [
  fm.permalink,
  ...(Array.isArray(fm.redirect_from) ? fm.redirect_from : []),
];

const builtSiteUrls = (dir, prefix = "/") => {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.isDirectory())
      return builtSiteUrls(join(dir, entry.name), `${prefix}${entry.name}/`);
    return entry.name === "index.html" ? [prefix] : [];
  });
};

/** Every URL a copy link could legitimately point at: permalinks and
 * redirect_from aliases from the content files, URLs the template computes
 * for guide pages, plus pages the Chobble Template adds, taken from _site/
 * when a build is on disk. */
const buildUrlMap = () => {
  const pairs = allContentFiles().flatMap((file) => {
    const rel = relPath(file);
    const fm = readPage(file).data;
    const urls = permalinksOf(fm)
      .filter((u) => typeof u === "string")
      .map((url) => [normaliseUrl(url), rel]);
    if (typeof fm.permalink !== "string")
      urls.push([normaliseUrl(pageUrlOf(rel, fm)), rel]);
    return urls;
  });
  const built = builtSiteUrls(path("_site")).map((url) => [url, "_site"]);
  // earlier entries win, so a content file beats a built-site duplicate
  return new Map([...pairs, ...built].reverse());
};

/** permalink: false pages are never built, so there is nothing to grade. */
const isGradeable = (rel) =>
  !SKIP_GRADE.has(rel) && readPage(path(rel)).data.permalink !== false;

/** Type and permalink for the sibling index, or null when a file is not a
 *  gradeable page (redirect aliases never reach it). */
const siblingEntry = (file) => {
  const rel = relPath(file);
  if (!isGradeable(rel)) return null;
  const fm = readPage(file).data;
  return {
    type: detectPageType(rel, fm),
    url: normaliseUrl(pageUrlOf(rel, fm)),
  };
};

/** Permalink URLs by page type, redirect aliases excluded, so the
 *  scaled-content question can show Jev the family a page belongs to. */
const buildSiblingIndex = () => {
  const index = {};
  for (const file of allContentFiles()) {
    const entry = siblingEntry(file);
    if (!entry) continue;
    if (!index[entry.type]) index[entry.type] = [];
    index[entry.type].push(entry.url);
  }
  for (const urls of Object.values(index)) urls.sort();
  return index;
};

const sampleSiblings = (urls, self) =>
  urls
    .filter((u) => u !== self)
    .slice(0, MAX_SIBLINGS)
    .map((u) => `${SITE_URL}${u}`);

/** Same-type sibling URLs for the scaled-content question. */
const siblingsFor = (x, index) =>
  sampleSiblings(index[x.pageType] ?? [], x.url);

const resolveFileTarget = (t, gradeable) => {
  const asPath = path(t.replace(/^\.\//, ""));
  if (!existsSync(asPath)) return [];
  if (asPath.endsWith(".md")) return [asPath];
  const dirPrefix = `${relPath(asPath)}/`;
  return gradeable
    .filter((rel) => rel.startsWith(dirPrefix))
    .map((rel) => path(rel));
};

const resolveTarget = (t, urlMap, gradeable) => {
  const files = resolveFileTarget(t, gradeable);
  if (files.length) return files;
  const urlPath = t.startsWith(SITE_URL) ? t.slice(SITE_URL.length) : t;
  const rel = urlPath.startsWith("/")
    ? urlMap.get(normaliseUrl(urlPath))
    : null;
  if (!rel || rel === "_site") throw new Error(`cannot resolve target '${t}'`);
  return [path(rel)];
};

const selectPool = (opts, urlMap) => {
  const gradeable = allContentFiles().map(relPath).filter(isGradeable);
  const targets = opts.targets.length
    ? opts.targets.flatMap((t) => resolveTarget(t, urlMap, gradeable))
    : gradeable.map((rel) => path(rel));
  const filtered = targets.filter((file) => {
    if (!opts.prefix && !opts.onlyType) return true;
    const x = extractPage(file);
    return (
      (!opts.prefix || x.url.includes(opts.prefix)) &&
      (!opts.onlyType || x.pageType === opts.onlyType)
    );
  });
  return opts.limit > 0 ? filtered.slice(0, opts.limit) : filtered;
};

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

const usage = () =>
  console.log(`Usage: bun scripts/grade-pages.js [targets] [options]

Targets (default: every gradeable page):
  pages/features/encrypted.md        a source file
  /compared-to/eventbrite/           URL shorthand (redirect aliases work too)
  ${SITE_URL}/features/csv-export/
  pages/features                     a directory

Options:
  --type <t>      only pages of this type (${ALL_TYPES.join(", ")})
  --prefix <s>    only pages whose URL contains this substring
  --limit <n>     grade at most n pages
  --workers <n>   parallel batch workers (default 4)
  --csv <path>    write batch results to a CSV file
  --json          machine-readable output
  --no-jev        mechanical checks only
  --model <id>    Jev model id (default ${DEFAULT_MODEL})
  --force-type <t> grade the targets as this page type
  --list-checks   print the check schema and exit
  --verbose       dump the Jev request and response
  --help          this message

Translated pages (pages/de/, pages/es/) and utility pages (not-found,
thank-you) are never graded.`);

const VALUE_FLAGS = {
  "--prefix": (o, v) => {
    o.prefix = v;
  },
  "--limit": (o, v) => {
    o.limit = Number.parseInt(v, 10) || 0;
  },
  "--workers": (o, v) => {
    o.workers = Math.max(1, Number.parseInt(v, 10) || 4);
  },
  "--csv": (o, v) => {
    o.csv = v;
  },
  "--model": (o, v) => {
    o.model = v;
  },
  "--type": (o, v) => {
    o.onlyType = v;
  },
  "--force-type": (o, v) => {
    o.type = v;
  },
};

const BOOL_FLAGS = {
  "--json": "json",
  "--no-jev": "noJev",
  "--list-checks": "listChecks",
  "--verbose": "verbose",
  "--fail-on-critical": "failOnCritical",
  "--help": "help",
  "-h": "help",
};

const validateType = (t) => {
  if (t && !ALL_TYPES.includes(t)) {
    throw new Error(`unknown page type '${t}' (${ALL_TYPES.join(", ")})`);
  }
};

/** Consume one argument (and its value, for value flags) into opts. */
const applyArg = (opts, a, rest) => {
  if (VALUE_FLAGS[a]) {
    if (!rest.length) throw new Error(`${a} needs a value`);
    VALUE_FLAGS[a](opts, rest.shift());
    return;
  }
  if (BOOL_FLAGS[a]) {
    opts[BOOL_FLAGS[a]] = true;
    return;
  }
  if (a.startsWith("-")) throw new Error(`unknown option ${a}`);
  opts.targets.push(a);
};

const parseArgs = (argv) => {
  const opts = { targets: [], limit: 0, workers: 4, model: DEFAULT_MODEL };
  const args = [...argv];
  while (args.length) applyArg(opts, args.shift(), args);
  validateType(opts.type);
  validateType(opts.onlyType);
  return opts;
};

const listChecks = () => {
  for (const c of CHECKS) {
    console.log(
      `${c.id.padEnd(24)} ${c.engine.padEnd(5)} w${String(c.weight).padEnd(3)} [${c.types.join(",")}]  ${c.label}${c.critical ? " [CRITICAL]" : ""}`,
    );
  }
  return 0;
};

/** Returns the Jev API key, or null after printing the missing-key error. */
const requireJevKey = (opts) => {
  if (opts.noJev) return null;
  const apiKey = loadApiKey();
  if (apiKey) return apiKey;
  console.error(
    "ERROR: Jev grading needs an API key and none was found.\n" +
      "Looked for OPENCODE_API_KEY in the environment and for /run/secrets/opencode_api_key.\n" +
      "Pass --no-jev if you want the mechanical checks only; do not ship a report as a full grade.",
  );
  return null;
};

const gradePool = (pool, opts, urlMap) => {
  const siblingIndex = buildSiblingIndex();
  const single = pool.length === 1 && !opts.json && !opts.csv;
  return single
    ? runSingle(pool[0], opts, urlMap, siblingIndex)
    : runBatch(pool, opts, urlMap, siblingIndex);
};

const run = (opts) => {
  if (opts.help) return usage() ?? 0;
  if (opts.listChecks) return listChecks();
  const urlMap = buildUrlMap();
  const pool = selectPool(opts, urlMap);
  if (!pool.length) {
    console.error("no pages match the given targets and filters");
    return 2;
  }
  const apiKey = requireJevKey(opts);
  if (!apiKey && !opts.noJev) return 2;
  return gradePool(pool, { ...opts, apiKey }, urlMap);
};

const main = async () => {
  try {
    process.exit(await run(parseArgs(process.argv.slice(2))));
  } catch (e) {
    console.error(e.message);
    usage();
    process.exit(2);
  }
};

if (import.meta.main) {
  await main();
}

// Pure helpers, exported for tests.
export {
  collectItems,
  detectPageType,
  markdownToText,
  normaliseUrl,
  splitFrontmatter,
  stripQuoted,
  walkBlocks,
};
