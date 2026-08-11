/**
 * The provider directory and its filters, tested against the real records.
 *
 * `_data/provider_filters.json` maps each filter chip to enum values a
 * `provider_facts` record may hold. The checks here keep that mapping tied to
 * reality: every named field exists on the records, every named value is one
 * a current record uses, and every filter both matches and excludes someone,
 * so a typo cannot leave a chip that silently matches nothing.
 */

import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import providerFilters from "../_data/provider_filters.json" with {
  type: "json",
};
import {
  matchesFilter,
  providerAttributes,
  providerDirectory,
} from "../_lib/provider-directory.js";

const ROOT = path.resolve(import.meta.dir, "..");
const COMPARISON_DIRECTORY = path.join(ROOT, "pages", "compared-to");
const EXCLUDED_PAGES = new Set([
  "compare-all.md",
  "compared-to.md",
  "pen-and-paper.md",
  "providers.md",
]);
const FILTERABLE_FIELDS = [
  "ethical_basis",
  "per_ticket_platform_fee",
  "managed_pricing",
  "white_label",
  "custom_domain",
  "public_website",
  "self_hosting",
  "source_code",
  "event_marketplace",
  "attendee_cross_marketing",
  "registration_country",
  "public_api",
  "seating_plans",
  "established",
];
const YEAR = 2026;

const pages = readdirSync(COMPARISON_DIRECTORY)
  .filter((fileName) => fileName.endsWith(".md") && !EXCLUDED_PAGES.has(fileName))
  .sort()
  .map((fileName) => {
    const content = readFileSync(
      path.join(COMPARISON_DIRECTORY, fileName),
      "utf8",
    );
    const frontmatter = Bun.YAML.parse(
      content.match(/^---\n([\s\S]*)\n---\s*$/)[1],
    );
    return { data: frontmatter, url: frontmatter.permalink };
  });
const chobble = JSON.parse(
  readFileSync(path.join(ROOT, "_data", "chobble_provider_facts.json"), "utf8"),
);
const allRecords = [
  ...pages.map((page) => page.data.provider_facts),
  chobble,
];

describe("provider filters", () => {
  test("declares a unique kebab-case key, label and description each", () => {
    const keys = providerFilters.map((filter) => filter.key);
    expect(new Set(keys).size).toBe(keys.length);
    for (const filter of providerFilters) {
      expect(filter.key).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      expect(filter.label.length, filter.key).toBeGreaterThan(0);
      expect(filter.description.length, filter.key).toBeGreaterThan(0);
    }
  });

  test("reads only known record fields, by values or by minimum age", () => {
    for (const filter of providerFilters) {
      expect(FILTERABLE_FIELDS, filter.key).toContain(filter.field);
      if (filter.values) {
        expect(filter.min_years, filter.key).toBeUndefined();
        expect(filter.values.length, filter.key).toBeGreaterThan(0);
      } else {
        expect(filter.field, filter.key).toBe("established");
        expect(filter.min_years, filter.key).toBeGreaterThan(0);
      }
    }
  });

  test("names only values a current record uses", () => {
    const usedValues = new Map(
      FILTERABLE_FIELDS.map((field) => [
        field,
        new Set(allRecords.flatMap((record) => [record[field]].flat())),
      ]),
    );
    for (const filter of providerFilters.filter((entry) => entry.values)) {
      for (const value of filter.values) {
        expect(usedValues.get(filter.field), `${filter.key}: ${value}`).toContain(
          value,
        );
      }
    }
  });

  test("every filter matches some records and excludes others", () => {
    for (const filter of providerFilters) {
      const matches = allRecords.filter((record) =>
        matchesFilter(filter, record, YEAR),
      );
      expect(matches.length, filter.key).toBeGreaterThan(0);
      expect(matches.length, filter.key).toBeLessThan(allRecords.length);
    }
  });

  test("treats unreviewed and undocumented facts as no match", () => {
    for (const filter of providerFilters) {
      const facts = {
        [filter.field]:
          filter.field === "ethical_basis" ? ["not-reviewed"] : "not-reviewed",
      };
      expect(matchesFilter(filter, facts, YEAR), filter.key).toBe(false);
    }
  });

  test("measures the age filter against the given year", () => {
    const established = providerFilters.find(
      (filter) => filter.key === "established",
    );
    expect(matchesFilter(established, { established: 2020 }, 2026)).toBe(true);
    expect(matchesFilter(established, { established: 2021 }, 2026)).toBe(true);
    expect(matchesFilter(established, { established: 2022 }, 2026)).toBe(false);
    expect(matchesFilter(established, { established: 2021 }, 2027)).toBe(true);
  });

  test("gives Chobble Tickets exactly the attributes its record supports", () => {
    expect(providerAttributes(chobble, YEAR)).toEqual([
      "open-source",
      "self-hosting",
      "no-per-ticket-fee",
      "no-attendee-marketing",
      "uk-based",
      "ethical-structure",
      "white-label",
      "custom-domain",
      "public-website",
      "public-api",
    ]);
  });
});

describe("provider directory", () => {
  const directory = providerDirectory(pages, chobble, YEAR);

  test("lists every reviewed provider plus Chobble Tickets", () => {
    expect(directory.length).toBe(pages.length + 1);
  });

  test("skips pages without a provider record", () => {
    const withIndex = [{ data: {}, url: "/compared-to/" }, ...pages];
    expect(providerDirectory(withIndex, chobble, YEAR).length).toBe(
      directory.length,
    );
  });

  test("sorts by name regardless of case", () => {
    const names = directory.map((entry) => entry.name.toLowerCase());
    expect(names).toEqual([...names].sort((a, b) => a.localeCompare(b, "en")));
  });

  test("highlights Chobble Tickets alone and links its reference page", () => {
    const highlighted = directory.filter((entry) => entry.highlight);
    expect(highlighted.map((entry) => entry.name)).toEqual(["Chobble Tickets"]);
    expect(highlighted[0].url).toBe(chobble.reference_url);
  });

  test("gives every entry a URL, a summary and its attributes", () => {
    for (const entry of directory) {
      expect(entry.url, entry.name).toMatch(/^\//);
      expect(entry.summary.length, entry.name).toBeGreaterThan(0);
      expect(Array.isArray(entry.attributes), entry.name).toBe(true);
    }
  });
});
