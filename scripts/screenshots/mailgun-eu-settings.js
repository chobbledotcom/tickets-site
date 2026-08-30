import { setFormValues } from "./helpers.js";

const EMAIL_FORM = 'form[action="/admin/settings/email"]';

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #4f8a5b;
  --color-bg: #eef3ea;
  --color-bg-secondary: #e0e9da;
  --color-link: #33632f;
  --color-secondary: #2f4a33;
  --color-secondary-accent: #2f4a331c;
  --color-shadow: #2f4a3326;
  --color-table: #2f4a33;
  --color-text: #2b362d;
  --color-text-secondary: #6a756c;
  --font-family: Arial, Helvetica, sans-serif;
}

body { background: #dde7d7; }

form#settings-email {
  background: #f8faf5;
  border: 1px solid #c6d4bd;
  border-top: 7px solid var(--color-accent);
  border-radius: 12px;
  box-shadow: 0 12px 28px var(--color-shadow);
  padding: 1.1rem;
}

form#settings-email h2 { color: #2f4a33; }

form#settings-email input,
form#settings-email select { border-radius: 7px; }
`,
  elementSelector: EMAIL_FORM,
  name: "mailgun-eu-settings",
  run: async (context) => {
    const { page, submit } = context;
    await page.goto("/admin/settings-advanced");
    await setFormValues(page, EMAIL_FORM, {
      email_api_key: "key-demo-mailgun-key",
      email_from_address: "tickets@oakfieldevents.org",
      email_provider: "mailgun-eu",
    });
    await submit(EMAIL_FORM);

    await page.goto("/admin/settings-advanced");
    const provider = await page
      .locator(`${EMAIL_FORM} [name="email_provider"]`)
      .inputValue();
    if (provider !== "mailgun-eu") {
      throw new Error(`The provider was not saved: ${provider}`);
    }
    const fromAddress = await page
      .locator(`${EMAIL_FORM} [name="email_from_address"]`)
      .inputValue();
    if (fromAddress !== "tickets@oakfieldevents.org") {
      throw new Error(`The sender was not saved: ${fromAddress}`);
    }
  },
};
