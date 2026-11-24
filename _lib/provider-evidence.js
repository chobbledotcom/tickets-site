/**
 * Turns a comparison page's `provider_facts` record into the pieces the page
 * renders for AI answer engines: a fee answer at the default calculator
 * volume, a dated facts table, question-shaped answers, and the JSON-LD that
 * describes the same facts to crawlers.
 *
 * The fee figures come from `_data/competitors.json`, the same source the
 * interactive price comparator uses, so the sentence on the page and the
 * slider result can never disagree. Facts the review did not record are
 * labelled rather than guessed, following `provider-directory.js`.
 */

import competitorsData from "../_data/competitors.json" with {
  type: "json",
};
import chobbleFacts from "../_data/chobble_provider_facts.json" with {
  type: "json",
};

const DEFAULT_TICKETS = 200;
const DEFAULT_PRICE = 10;
const QA_LIMIT = 6;

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** Ordered fact fields the table shows, with their row labels. */
const FIELD_LABELS = [
  ["per_ticket_platform_fee", "Fee per paid ticket"],
  ["managed_pricing", "Organiser pricing"],
  ["white_label", "White-label branding"],
  ["custom_domain", "Custom domain"],
  ["public_website", "Where listings appear"],
  ["self_hosting", "Self-hosting"],
  ["source_code", "Source code"],
  ["public_api", "Public API"],
  ["seating_plans", "Seating plans"],
  ["event_marketplace", "Event marketplace"],
  ["attendee_cross_marketing", "Marketing to attendees"],
  ["registration_country", "Registered in"],
  ["ethical_basis", "Company structure"],
  ["established", "Trading since"],
];

/** Fact fields worth a question heading, with the question each becomes. */
const QA_FIELDS = [
  ["per_ticket_platform_fee", (name) => `How much does ${name} charge per ticket?`],
  ["managed_pricing", (name) => `What does ${name} cost an organiser?`],
  ["self_hosting", (name) => `Can you self-host ${name}?`],
  ["source_code", (name) => `Is ${name} open source?`],
  ["white_label", (name) => `Can you remove ${name} branding from ticket pages?`],
  ["custom_domain", (name) => `Can you use your own domain with ${name}?`],
  [
    "attendee_cross_marketing",
    (name) => `Does ${name} market other events to your attendees?`,
  ],
];

const ENUM_PHRASES = {
  "not-documented": "Not documented",
  "not-reviewed": "Not reviewed",
  "not-offered": "Not offered",
};

/** Turns an enum value such as `same-product` into readable text. */
const humanise = (value) => {
  if (Array.isArray(value)) return value.map((entry) => humanise(entry)).join(", ");
  if (typeof value === "string") {
    if (ENUM_PHRASES[value]) return ENUM_PHRASES[value];
    return value
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  if (typeof value === "number") return String(value);
  return null;
};

const cellFor = (facts, field) => {
  const note = facts.notes?.[field];
  const value = facts[field];
  if (note) return note;
  if (value === undefined || value === null) return null;
  return humanise(value);
};

/** What one provider charges at the default volume, or null without data.
 * Per-ticket platform fees honour documented minimums and caps, such as
 * BookitBee's 50p minimum, where the calculator data records them. */
const costFor = (competitor) => {
  const sales = DEFAULT_TICKETS * DEFAULT_PRICE;
  const scale = (percent, fixed) =>
    (Number(percent) / 100) * sales + Number(fixed) * DEFAULT_TICKETS;
  let perTicketPlatform = Number(competitor.per_ticket_fee_percent) / 100 * DEFAULT_PRICE +
    Number(competitor.per_ticket_fee_fixed);
  if (competitor.per_ticket_fee_minimum !== undefined) {
    perTicketPlatform = Math.max(perTicketPlatform, Number(competitor.per_ticket_fee_minimum));
  }
  if (competitor.per_ticket_fee_maximum !== undefined) {
    perTicketPlatform = Math.min(perTicketPlatform, Number(competitor.per_ticket_fee_maximum));
  }
  const total =
    Number(competitor.annual_cost) +
    perTicketPlatform * DEFAULT_TICKETS +
    scale(
      competitor.payment_processing_percent,
      competitor.payment_processing_fixed,
    );
  return Number.isFinite(total) ? Math.round(total) : null;
};

/** The fee answer paragraph, or null when the provider has no calculator data.
 * Providers whose calculator rate is an estimate get the estimate said out
 * loud, and the review date is distinguished from a rate check, because the
 * date verifies the terms review, not the assumed rate. Figures carry the
 * documented VAT treatment where the review recorded one. */
const answerFor = (facts, competitor) => {
  const total = competitor ? costFor(competitor) : null;
  if (total === null) return null;
  const chobble = costFor(competitorsData.chobble);
  const vat = competitor.fee_vat === "exclusive"
    ? ", before VAT"
    : competitor.fee_vat === "inclusive"
      ? ", including VAT"
      : "";
  const base =
    `On ${DEFAULT_TICKETS} tickets at £${DEFAULT_PRICE} each, ` +
    `${facts.name}'s fees come to ${competitor.fee_estimate ? "about " : ""}£${total}${vat}. ` +
    `${chobbleFacts.name} costs £${chobble}, including its £50 annual fee and payment processing.`;
  if (competitor.fee_estimate) {
    return (
      base +
      ` The figure is an estimate held in this calculator, not a checked published rate;` +
      (facts.last_reviewed
        ? ` this site's review of ${facts.name}'s terms is dated ${dateFormatter.format(new Date(facts.last_reviewed))}, which does not verify the rate.`
        : "")
    );
  }
  return (
    base +
    (facts.last_reviewed
      ? ` ${facts.name}'s rates were checked on ${dateFormatter.format(new Date(facts.last_reviewed))}.`
      : "")
  );
};

const qaFor = (facts) =>
  QA_FIELDS.map(([field, questionFor]) => ({
    question: questionFor(facts.name),
    answer: facts.notes?.[field],
  }))
    .filter((entry) => Boolean(entry.answer))
    .slice(0, QA_LIMIT);

const rowsFor = (facts) =>
  FIELD_LABELS.map(([field, label]) => ({
    label,
    provider: cellFor(facts, field),
    chobble: cellFor(chobbleFacts, field),
  })).filter((row) => row.provider !== null || row.chobble !== null);

/** FAQPage and Article JSON-LD describing the same facts the page shows. */
const schemaFor = (facts, qa, { title, url }) => {
  const about = [
    { "@type": "Organization", name: facts.name },
    {
      "@type": "SoftwareApplication",
      "@id": "https://tickets.chobble.com/#software",
      name: chobbleFacts.name,
    },
  ];
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: qa.map((entry) => ({
          "@type": "Question",
          name: entry.question,
          acceptedAnswer: { "@type": "Answer", text: entry.answer },
        })),
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: title,
        url,
        dateModified: facts.last_reviewed || undefined,
        about,
      },
    ],
  });
};

/**
 * The evidence record for one comparison page, or null off the comparison
 * pages. `competitor` comes from the page's `competitor_key`.
 * @param {Record<string, unknown>} facts A page's `provider_facts`.
 * @param {{ title?: string, page?: { url?: string }, competitor_key?: string }}
 *   data Eleventy page data.
 * @returns {Record<string, unknown> | null}
 */
export const providerEvidence = (facts, data) => {
  const competitor = competitorsData[data.competitor_key ?? facts.calculator_keys?.[0]];
  const qa = qaFor(facts);
  return {
    answer: answerFor(facts, competitor),
    last_reviewed_long: facts.last_reviewed
      ? dateFormatter.format(new Date(facts.last_reviewed))
      : null,
    rows: rowsFor(facts),
    qa,
    schema_json: schemaFor(facts, qa, {
      title: data.title,
      url: `https://tickets.chobble.com${data.page?.url ?? ""}`,
    }),
  };
};

/**
 * The static fee table for `/compared-to/compare-all/`: every provider with
 * calculator data, sorted by what the organiser pays at the default volume,
 * so the figures exist in HTML without JavaScript.
 * @returns {{ tickets: number, price: number, sales: number, rows: Array }}
 */
export const feeTable = () => {
  const rows = Object.entries(competitorsData)
    .filter(([key]) => key !== "chobble_selfhosted")
    .map(([key, competitor]) => ({
      key,
      name: competitor.name,
      highlight: key === "chobble",
      estimate: Boolean(competitor.fee_estimate),
      vat: competitor.fee_vat,
      total: costFor(competitor),
    }))
    .filter((row) => row.total !== null)
    .sort((first, second) => first.total - second.total);
  return { tickets: DEFAULT_TICKETS, price: DEFAULT_PRICE, rows };
};
