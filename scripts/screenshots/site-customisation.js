import { setFormValues } from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 12px;
  --color-accent: #d6a7ae;
  --color-bg: #f8f1e8;
  --color-bg-secondary: #ecddd6;
  --color-link: #6d3851;
  --color-secondary: #572f44;
  --color-secondary-accent: #572f4418;
  --color-shadow: #4d293b20;
  --color-text: #392b30;
  --color-text-secondary: #756268;
  --font-family: Georgia, "Times New Roman", serif;
}

form[action="/admin/site"] {
  background: #fffaf5;
  border: 1px solid #ddc4bd;
  border-top: 7px solid var(--color-secondary);
  box-shadow: 0 14px 30px var(--color-shadow);
  padding: 1rem;
}

form[action="/admin/site"] label {
  color: var(--color-secondary);
  font-weight: 700;
}

form[action="/admin/site"] input,
form[action="/admin/site"] .md-editor {
  background: #fff;
  border-color: #d3b7b0;
}

form[action="/admin/site"] .md-editor button {
  background: #f4e8e3;
  border-color: #d3b7b0;
  color: var(--color-secondary);
}

form[action="/admin/site"] > button[type="submit"] {
  background: var(--color-secondary);
  border-color: var(--color-secondary);
}
`,
  elementSelector: 'form[action="/admin/site"]',
  name: "oakfield-homepage-editor",
  run: async ({ page }) => {
    await page.goto("/admin/site");
    const form = 'form[action="/admin/site"]';
    await setFormValues(page, form, {
      website_title: "Oakfield Community Events",
    });
    await page
      .locator(`${form} .md-editor .ProseMirror`)
      .fill(
        "What's on\n\nBook workshops, family days and evening events in Oakfield.\n\nNew events are added throughout the year.",
      );
    await page.locator(`${form} [name="website_title"]`).waitFor();
  },
};
