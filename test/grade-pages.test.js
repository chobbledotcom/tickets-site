import { describe, expect, test } from "bun:test";
import {
  detectPageType,
  markdownToText,
  splitFrontmatter,
  stripQuoted,
  walkBlocks,
} from "../scripts/grade-pages.js";

describe("splitFrontmatter", () => {
  test("parses a closed front matter block with a body", () => {
    const { data, body, closed } = splitFrontmatter(
      "---\ntitle: Hi\npermalink: /hi/\n---\n\nBody text.\n",
    );
    expect(closed).toBe(true);
    expect(data.title).toBe("Hi");
    expect(data.permalink).toBe("/hi/");
    expect(body.trim()).toBe("Body text.");
  });

  test("flags front matter that is never closed", () => {
    // gray-matter, and so the build, sees no fields in this state; the
    // grader still parses the YAML so the page can be graded at all.
    const { data, body, closed } = splitFrontmatter(
      "---\ntitle: Hi\nblocks:\n  - type: markdown\n    content: |\n      Prose.\n",
    );
    expect(closed).toBe(false);
    expect(data.title).toBe("Hi");
    expect(data.blocks).toHaveLength(1);
    expect(body).toBe("");
  });

  test("returns empty data for files with no front matter", () => {
    const { data, closed } = splitFrontmatter("Just prose.\n");
    expect(closed).toBe(true);
    expect(data).toEqual({});
  });
});

describe("walkBlocks", () => {
  test("collects prose, button labels and alt text in page order", () => {
    const out = { prose: [], buttons: [], buttonHrefs: [], alts: [] };
    walkBlocks(
      {
        blocks: [
          {
            type: "hero",
            class: "gradient",
            content: "# Heading\n\nIntro paragraph.",
          },
          {
            type: "features",
            intro_content: "## Pick an option",
            items: [
              {
                icon: "hugeicons:calendar-03",
                name: "Annual hosting, £50",
                description: "One hosted site for a year.",
              },
            ],
          },
          {
            type: "split-image",
            content: "## Keyed accounts",
            figure_src: "/images/screenshots/x.png",
            figure_alt: "A screenshot of a contact record",
          },
          {
            type: "cta",
            button: { text: "See pricing", href: "/pricing/" },
            content: "## Get started",
          },
        ],
      },
      out,
    );
    expect(out.prose).toEqual([
      "# Heading\n\nIntro paragraph.",
      "## Pick an option",
      "Annual hosting, £50",
      "One hosted site for a year.",
      "## Keyed accounts",
      "## Get started",
    ]);
    expect(out.buttons).toEqual(["See pricing"]);
    expect(out.buttonHrefs).toEqual(["/pricing/"]);
    expect(out.alts).toEqual(["A screenshot of a contact record"]);
  });
});

describe("detectPageType", () => {
  test("maps directories to page types", () => {
    expect(detectPageType("pages/features/encrypted.md", {})).toBe("feature");
    expect(detectPageType("pages/perfect-for/festivals.md", {})).toBe(
      "audience",
    );
    expect(
      detectPageType("pages/compared-to/eventbrite.md", {
        provider_facts: { name: "Eventbrite" },
      }),
    ).toBe("comparison");
    expect(
      detectPageType("pages/compared-to/providers.md", {}),
    ).toBe("page");
    expect(detectPageType("guide-pages/flat-rate-ticketing.md", {})).toBe(
      "guide",
    );
    expect(detectPageType("pages/about.md", {})).toBe("page");
  });
});

describe("markdownToText", () => {
  test("strips markup, images and URLs while keeping link text", () => {
    const text = markdownToText(
      "## Fees\n\n[Eventbrite](https://www.eventbrite.co.uk) charges 6.95% + £0.59.\n\n![alt](/images/a.png)\n\n- **Plain words** win\n",
    );
    expect(text).toBe("Fees Eventbrite charges 6.95% + £0.59. Plain words win");
  });
});

describe("stripQuoted", () => {
  test("removes blockquotes and quoted spans of three or more words", () => {
    const stripped = stripQuoted(
      '> "We had always used Eventbrite which takes a fee."\n\nChobble does not collect attendee data. The "platform fee" is zero.\n',
    );
    expect(stripped).not.toContain("Eventbrite which takes");
    expect(stripped).toContain("Chobble does not collect attendee data.");
    expect(stripped).toContain("The");
    expect(stripped).toContain("is zero.");
  });
});
