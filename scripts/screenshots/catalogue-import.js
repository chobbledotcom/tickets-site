import { Buffer } from "node:buffer";
import { createListing } from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 7px;
  --color-accent: #c7a86b;
  --color-bg: #f3f0e8;
  --color-bg-secondary: #e5e0d3;
  --color-link: #44527a;
  --color-secondary: #354263;
  --color-secondary-accent: #35426318;
  --color-shadow: #26314a1c;
  --color-text: #2f3440;
  --color-text-secondary: #686c74;
  --font-family: Arial, Helvetica, sans-serif;
}

.admin-page {
  background: #fffefa;
  border: 1px solid #d5cfbf;
  border-top: 5px solid var(--color-secondary);
  box-shadow: 0 10px 24px var(--color-shadow);
  padding: 1rem;
}

.admin-page .prose h1 {
  color: var(--color-secondary);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.65rem;
  line-height: 1.15;
  margin-bottom: 0.6rem;
}

.admin-page .prose p {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

#catalog-import {
  background: #f7f4ec;
  border: 1px solid #d9d1bf;
  border-radius: 6px;
  padding: 0.9rem;
}

#catalog-import label {
  color: #354263;
  display: block;
  font-weight: 700;
}

#catalog-import input[type="file"] {
  background: #fff;
  border: 1px solid #c8c0ad;
  border-radius: 5px;
  box-sizing: border-box;
  color: #4b4f58;
  font-size: 0.78rem;
  margin-top: 0.45rem;
  padding: 0.35rem;
  width: 100%;
}

#catalog-import input[type="file"]::file-selector-button {
  background: #e5e0d3;
  border: 0;
  border-radius: 3px;
  color: #354263;
  font-weight: 700;
  margin-right: 0.55rem;
  padding: 0.45rem 0.6rem;
}

.admin-page .guide-footer {
  font-size: 0.8rem;
  margin-top: 0.75rem;
}
`,
  elementSelector: ".page-regions.admin-page",
  name: "catalogue-import",
  run: async (context) => {
    const { baseUrl, page } = context;
    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Summer Sessions 2026",
      values: {
        date_date: "2026-08-15",
        date_time: "18:30",
        description:
          "A full evening of live music, local food and independent artists.",
        location: "The Lantern Hall, Bristol",
        max_attendees: "240",
        max_quantity: "8",
        unit_price: "18.50",
      },
    });
    const response = await page.request.get(
      `${baseUrl}/admin/listing/${listingId}/export.json`,
    );
    if (!response.ok()) {
      throw new Error(`Could not export Summer Sessions: ${response.status()}`);
    }
    const exportBytes = await response.body();
    const exported = JSON.parse(exportBytes.toString());
    if (exported.listing?.name !== "Summer Sessions 2026") {
      throw new Error("The catalogue export did not contain Summer Sessions.");
    }

    await page.goto("/admin/catalog/import");
    await page.locator('[name="catalog_file"]').setInputFiles({
      buffer: Buffer.from(exportBytes),
      mimeType: "application/json",
      name: "summer-sessions.json",
    });
    await page.waitForFunction(
      () =>
        document.querySelector('input[name="catalog_file"]')?.files?.[0]
          ?.name === "summer-sessions.json",
    );
    await page.locator("h1").click();
  },
};
