/**
 * The provider directory: every reviewed provider plus Chobble Tickets in one
 * alphabetical list, and the filter attributes each record satisfies.
 *
 * `_data/provider_filters.json` names the attributes a visitor can filter the
 * directory by. Each filter matches enum values a provider's `provider_facts`
 * record may hold, or, for the age filter, a minimum number of years since the
 * record's documented start year. A fact the review has not recorded, such as
 * `not-reviewed` or `not-documented`, matches no filter, so the directory only
 * ever claims what a review date stands behind.
 */

import providerFilters from "../_data/provider_filters.json" with {
  type: "json",
};

const matchesValues = (filter, facts) => {
  const value = facts[filter.field];
  const values = Array.isArray(value) ? value : [value];
  return values.some((entry) => filter.values.includes(entry));
};

const matchesAge = (filter, facts, year) =>
  typeof facts[filter.field] === "number" &&
  facts[filter.field] <= year - filter.min_years;

/** Whether one provider record satisfies one filter. */
export const matchesFilter = (filter, facts, year) =>
  filter.values
    ? matchesValues(filter, facts)
    : matchesAge(filter, facts, year);

/** The keys of every filter one provider record satisfies. */
export const providerAttributes = (facts, year) =>
  providerFilters
    .filter((filter) => matchesFilter(filter, facts, year))
    .map((filter) => filter.key);

const entryForFacts = (facts, url, highlight, year) => ({
  name: facts.name,
  url,
  summary: facts.summary,
  attributes: providerAttributes(facts, year),
  highlight,
});

const byName = (a, b) =>
  a.name.toLowerCase().localeCompare(b.name.toLowerCase(), "en");

/**
 * Every provider comparison page plus Chobble Tickets, sorted by name. Pages
 * without a `provider_facts` record, such as the index and the pen-and-paper
 * page, stay out of the list.
 */
export const providerDirectory = (pages, chobbleFacts, year) =>
  [
    ...pages
      .filter((page) => page.data?.provider_facts)
      .map((page) =>
        entryForFacts(page.data.provider_facts, page.url, false, year),
      ),
    entryForFacts(chobbleFacts, chobbleFacts.reference_url, true, year),
  ].sort(byName);
