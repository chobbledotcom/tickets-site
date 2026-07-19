import { setFormValues } from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 6px;
  --color-accent: #db8f3d;
  --color-bg: #fff8e9;
  --color-bg-secondary: #f2e6ca;
  --color-link: #8b3d24;
  --color-secondary: #7d3025;
  --color-secondary-accent: #7d30251c;
  --color-shadow: #5c2d1d20;
  --color-text: #37231c;
  --color-text-secondary: #755b4e;
  --font-family: Georgia, "Times New Roman", serif;
}

.listing-section {
  background: #fffdf7;
  border: 1px solid #ddc69d;
  border-top: 6px solid var(--color-secondary);
  box-shadow: 0 12px 26px var(--color-shadow);
  padding: 1rem;
}

.listing-section legend {
  color: var(--color-secondary);
  font-size: 1.35rem;
  font-weight: 700;
  padding-inline: 0.4rem;
}

.listing-section label {
  font-weight: 700;
}

.listing-section input,
.listing-section select,
.listing-section .md-editor {
  background: #fff;
  border-color: #cfb98f;
}
`,
  elementSelector:
    'form[action="/admin/listing"] > fieldset.listing-section:has([name="name"])',
  name: "summer-sessions-listing-form",
  run: async ({ page }) => {
    await page.goto("/admin/listing/new?template=custom");
    const form = 'form[action="/admin/listing"]';
    await setFormValues(page, form, {
      date_date: "2026-08-15",
      date_time: "18:30",
      listing_type: "standard",
      location: "The Lantern Hall, Bristol",
      name: "Summer Sessions 2026",
    });
    await page
      .locator(`${form} .md-editor .ProseMirror`)
      .fill(
        "A full evening of live music, local food and independent artists.",
      );
    await page.locator(`${form} [name="name"]`).waitFor();
  },
};
