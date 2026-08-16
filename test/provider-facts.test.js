import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dir, "..");
const COMPARISON_DIRECTORY = path.join(ROOT, "pages", "compared-to");
const EXCLUDED_PAGES = new Set([
  "compare-all.md",
  "compared-to.md",
  "pen-and-paper.md",
  "providers.md",
]);
const ENUM_FACT_FIELDS = [
  "ethical_basis",
  "per_ticket_platform_fee",
  "managed_pricing",
  "white_label",
  "custom_domain",
  "public_website",
  "self_hosting",
  "source_code",
  "agent_instructions",
  "local_dev_runtime",
  "local_dev_source",
  "local_dev_reload",
  "event_marketplace",
  "attendee_cross_marketing",
  "registration_country",
  "public_api",
  "seating_plans",
];
const FACT_FIELDS = [...ENUM_FACT_FIELDS, "established"];
const CORE_FIELDS = [
  "name",
  "kind",
  "calculator_keys",
  "last_reviewed",
  "summary",
  ...FACT_FIELDS,
];
const ENUMS = {
  ethical_basis: new Set([
    "certified-b-corporation",
    "community-interest-company",
    "company-limited-by-guarantee",
    "independently-maintained",
    "independently-owned",
    "not-documented",
    "not-reviewed",
    "open-source-community-project",
    "owner-led",
    "registered-charity",
    "self-described-independent",
    "self-described-worker-co-operative",
    "transparent-project-finances",
  ]),
  per_ticket_platform_fee: new Set([
    "allowance-overage",
    "amount-not-published",
    "fixed",
    "none",
    "not-documented",
    "not-reviewed",
    "per-transaction-percentage",
    "per-transaction-percentage-plus-fixed",
    "percentage",
    "percentage-plus-fixed",
    "voluntary-contributions",
  ]),
  managed_pricing: new Set([
    "allowance-overage",
    "feature-tiered-volume-independent",
    "flat-volume-independent",
    "not-documented",
    "not-offered",
    "not-reviewed",
    "no-mandatory-price",
    "per-sale",
    "per-user-tiered-volume-independent",
    "quote-based",
    "ticket-volume-tiered",
  ]),
  white_label: new Set([
    "higher-tier",
    "included",
    "not-documented",
    "not-offered",
    "not-reviewed",
    "paid-add-on",
    "partial",
    "self-hosted",
  ]),
  custom_domain: new Set([
    "by-arrangement",
    "higher-tier",
    "host-platform-dependent",
    "included",
    "not-documented",
    "not-offered",
    "not-reviewed",
    "paid-add-on",
    "self-hosted",
  ]),
  public_website: new Set([
    "built-in-full",
    "host-platform-dependent",
    "hosted-booking-pages",
    "hosted-event-pages",
    "marketplace-pages",
    "not-documented",
    "not-offered",
    "not-reviewed",
    "organiser-microsite",
    "platform-full",
  ]),
  self_hosting: new Set([
    "community-edition",
    "different-community-edition",
    "not-documented",
    "not-offered",
    "not-reviewed",
    "plugin-on-self-hosted-platform",
    "related-project",
    "same-product",
    "same-product-with-conditions",
    "source-available-internal-use",
  ]),
  source_code: new Set([
    "open-source",
    "open-source-core",
    "open-source-with-additional-terms",
    "not-documented",
    "not-reviewed",
    "proprietary",
    "proprietary-production-with-open-source-community-edition",
    "related-open-source-project",
    "source-available",
    "source-available-delayed-open",
  ]),
  event_marketplace: new Set([
    "built-in",
    "none",
    "not-documented",
    "not-reviewed",
    "optional-network",
    "per-deployment",
  ]),
  registration_country: new Set([
    "australia",
    "austria",
    "canada",
    "czech-republic",
    "france",
    "germany",
    "india",
    "ireland",
    "israel",
    "not-documented",
    "not-reviewed",
    "singapore",
    "switzerland",
    "united-kingdom",
    "united-states",
  ]),
  agent_instructions: new Set([
    "not-found",
    "not-reviewed",
    "published",
  ]),
  local_dev_runtime: new Set([
    "containers",
    "host-platform",
    "not-documented",
    "not-reviewed",
    "runtime-plus-local-services",
    "single-runtime-process",
  ]),
  local_dev_source: new Set([
    "bind-mounted",
    "not-documented",
    "not-reviewed",
    "prebuilt-image",
    "runs-checkout",
  ]),
  local_dev_reload: new Set([
    "automatic-restart",
    "hot-reload",
    "manual-restart",
    "not-documented",
    "not-reviewed",
    "rebuild-required",
  ]),
  attendee_cross_marketing: new Set([
    "none",
    "not-documented",
    "not-reviewed",
    "organiser-controlled",
    "personalised-recommendations",
    "provider-content-and-events",
    "provider-events",
  ]),
  public_api: new Set([
    "higher-tier",
    "included",
    "not-documented",
    "not-offered",
    "not-reviewed",
    "read-only",
  ]),
  seating_plans: new Set([
    "higher-tier",
    "included",
    "not-documented",
    "not-offered",
    "not-reviewed",
    "paid-add-on",
  ]),
};

const comparisonFileNames = readdirSync(COMPARISON_DIRECTORY)
  .filter((fileName) => fileName.endsWith(".md"))
  .sort();

const parseFrontmatter = (fileName) => {
  const content = readFileSync(
    path.join(COMPARISON_DIRECTORY, fileName),
    "utf8",
  );
  const match = content.match(/^---\n([\s\S]*)\n---\s*$/);
  if (!match) throw new Error(`Could not parse frontmatter in ${fileName}`);
  return Bun.YAML.parse(match[1]);
};

const pages = Object.fromEntries(
  comparisonFileNames.map((fileName) => [fileName, parseFrontmatter(fileName)]),
);
const externalRecords = Object.entries(pages)
  .filter(([fileName]) => !EXCLUDED_PAGES.has(fileName))
  .map(([fileName, page]) => [fileName, page.provider_facts]);
const chobble = JSON.parse(
  readFileSync(path.join(ROOT, "_data", "chobble_provider_facts.json"), "utf8"),
);
const allRecords = [...externalRecords, ["Chobble data", chobble]];
const recordsByName = new Map(
  allRecords.map(([, record]) => [record.name, record]),
);

const validateShape = (record, label, extraFields = []) => {
  const optionalFields = record.notes ? ["notes"] : [];
  expect(Object.keys(record).sort(), label).toEqual(
    [...CORE_FIELDS, ...extraFields, ...optionalFields].sort(),
  );
  expect(typeof record.name, label).toBe("string");
  expect(record.name.length, label).toBeGreaterThan(0);
  expect(["adjacent-software", "ticketing"], label).toContain(record.kind);
  expect(Array.isArray(record.calculator_keys), label).toBe(true);
  expect(record.ethical_basis.length, label).toBeGreaterThan(0);
};

const validateEnums = (record, label) => {
  for (const field of ENUM_FACT_FIELDS) {
    const values = field === "ethical_basis" ? record[field] : [record[field]];
    for (const value of values) {
      expect(typeof value, `${label}.${field}`).toBe("string");
      expect(ENUMS[field], `${label}.${field}`).toContain(value);
    }
  }
};

describe("provider facts schema", () => {
  test("covers every provider comparison and excludes index pages", () => {
    for (const [fileName, page] of Object.entries(pages)) {
      if (EXCLUDED_PAGES.has(fileName)) {
        expect(page.provider_facts, fileName).toBeUndefined();
      } else {
        expect(page.provider_facts, fileName).toBeDefined();
      }
    }
  });

  test("uses the exact record shape and qualified enum values", () => {
    for (const [label, record] of externalRecords) {
      validateShape(record, label);
      validateEnums(record, label);
    }
    validateShape(chobble, "Chobble data", ["reference_url"]);
    validateEnums(chobble, "Chobble data");
    expect(chobble.reference_url).toMatch(/^\//);
  });

  test("limits notes to fact fields", () => {
    for (const [label, record] of allRecords) {
      for (const [field, note] of Object.entries(record.notes ?? {})) {
        expect(FACT_FIELDS, label).toContain(field);
        expect(typeof note, `${label}.${field}`).toBe("string");
        expect(note.length, `${label}.${field}`).toBeGreaterThan(0);
      }
    }
  });

  test("uses ISO review dates or null for wholly unreviewed records", () => {
    for (const [label, record] of allRecords) {
      if (record.last_reviewed === null) {
        expect(record.ethical_basis, label).toEqual(["not-reviewed"]);
        for (const field of FACT_FIELDS.slice(1)) {
          expect(record[field], `${label}.${field}`).toBe("not-reviewed");
        }
      } else {
        expect(record.last_reviewed, label).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    }
  });

  test("records established as a plausible year or a qualified value", () => {
    for (const [label, record] of allRecords) {
      const value = record.established;
      if (typeof value === "number") {
        expect(Number.isInteger(value), label).toBe(true);
        expect(value, label).toBeGreaterThanOrEqual(1900);
        expect(value, label).toBeLessThanOrEqual(new Date().getFullYear());
      } else {
        expect(["not-documented", "not-reviewed"], label).toContain(value);
      }
    }
  });

  test("keeps every summary present, trimmed and short", () => {
    for (const [label, record] of allRecords) {
      expect(typeof record.summary, label).toBe("string");
      expect(record.summary, label).toBe(record.summary.trim());
      expect(record.summary.length, label).toBeGreaterThanOrEqual(20);
      expect(record.summary.length, label).toBeLessThanOrEqual(200);
    }
  });

  test("maps every calculator key to exactly one provider", () => {
    const competitors = JSON.parse(
      readFileSync(path.join(ROOT, "_data", "competitors.json"), "utf8"),
    );
    const mappedKeys = allRecords.flatMap(([, record]) => record.calculator_keys);
    expect(mappedKeys.sort()).toEqual(Object.keys(competitors).sort());
    expect(new Set(mappedKeys).size).toBe(mappedKeys.length);
  });

  test("preserves the guide pricing distinctions", () => {
    expect(chobble.managed_pricing).toBe("flat-volume-independent");
    expect(recordsByName.get("tickts").managed_pricing).toBe(
      "feature-tiered-volume-independent",
    );
    expect(recordsByName.get("Dandelion").managed_pricing).toBe(
      "no-mandatory-price",
    );
    expect(recordsByName.get("Dandelion").per_ticket_platform_fee).toBe(
      "voluntary-contributions",
    );
    expect(recordsByName.get("Tessera Tickets").managed_pricing).toBe(
      "ticket-volume-tiered",
    );
    expect(recordsByName.get("Resova").managed_pricing).toBe(
      "allowance-overage",
    );
  });

  test("supports the qualified flat-rate distinction", () => {
    const verifiedFlatRateProviders = allRecords
      .map(([, record]) => record)
      .filter(
        (record) =>
          record.kind === "ticketing" &&
          record.last_reviewed !== null &&
          record.managed_pricing === "flat-volume-independent",
      );

    expect(verifiedFlatRateProviders.map((record) => record.name)).toEqual([
      "Chobble Tickets",
    ]);
    expect(chobble.per_ticket_platform_fee).toBe("none");
    expect(chobble.self_hosting).toBe("same-product");
  });

  test("records the documented ethical structures", () => {
    expect(chobble.ethical_basis).toContain("community-interest-company");
    expect(recordsByName.get("Ticket Tailor").ethical_basis).toEqual(
      expect.arrayContaining([
        "certified-b-corporation",
        "independently-owned",
      ]),
    );
    expect(recordsByName.get("Resident Advisor").ethical_basis).toEqual(
      expect.arrayContaining([
        "certified-b-corporation",
        "self-described-independent",
      ]),
    );
  });

  test("does not interpret unknown states as false", () => {
    const eventbrite = recordsByName.get("Eventbrite");
    const dandelion = recordsByName.get("Dandelion");
    expect(eventbrite.local_dev_runtime).toBe("not-reviewed");
    expect(eventbrite.local_dev_runtime).not.toBe(false);
    expect(dandelion.custom_domain).toBe("not-documented");
    expect(dandelion.custom_domain).not.toBe(false);
  });

  test("keeps the documented seating and API distinctions", () => {
    expect(chobble.seating_plans).toBe("not-offered");
    expect(chobble.public_api).toBe("included");
    expect(recordsByName.get("Eventbrite").seating_plans).toBe("included");
    expect(recordsByName.get("Pretix").seating_plans).toBe("higher-tier");
    expect(recordsByName.get("Pretix").public_api).toBe("included");
    expect(recordsByName.get("TixFox").seating_plans).toBe("not-offered");
    expect(recordsByName.get("DICE").public_api).toBe("read-only");
    expect(recordsByName.get("TicketSource").established).toBe(2004);
  });
});
