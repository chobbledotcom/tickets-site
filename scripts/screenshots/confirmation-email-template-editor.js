import { blurActiveElement, setFormValues } from "./helpers.js";

const TEMPLATE = {
  html: [
    '<div style="font-family: Georgia, serif; color: #26352f; line-height: 1.6">',
    "  <h1>Your workshop place is confirmed</h1>",
    "  <p>Hello {{ attendee.name }},</p>",
    "  <p>Thank you for booking <strong>{{ listing_names }}</strong>.</p>",
    '  <p><a href="{{ ticket_url }}">View your tickets</a></p>',
    "  <p>We look forward to welcoming you.</p>",
    "</div>",
  ].join("\n"),
  subject: "Your {{ listing_names }} booking is confirmed",
  text: [
    "Hello {{ attendee.name }},",
    "",
    "Thank you for booking {{ listing_names }}.",
    "View your tickets: {{ ticket_url }}",
    "",
    "We look forward to welcoming you.",
  ].join("\n"),
};

export default {
  css: `
:root {
  --border-radius: 5px;
  --color-accent: #d7c7a5;
  --color-bg: #f2eee5;
  --color-bg-secondary: #e8e0d1;
  --color-link: #365b64;
  --color-secondary: #294a52;
  --color-secondary-accent: #294a5217;
  --color-shadow: #25383c20;
  --color-text: #26352f;
  --color-text-secondary: #68716c;
  --font-family: Arial, Helvetica, sans-serif;
}

#settings-email-tpl-confirmation {
  background: #fffdf8;
  border: 1px solid #d7cdb8;
  border-top: 6px solid var(--color-secondary);
  box-shadow: 0 12px 30px var(--color-shadow);
  box-sizing: border-box;
  gap: 0.55rem;
  padding: 1rem;
}

#settings-email-tpl-confirmation h2 {
  color: var(--color-secondary);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.55rem;
  margin-bottom: 0.3rem;
}

#settings-email-tpl-confirmation .prose p,
#settings-email-tpl-confirmation details,
#settings-email-tpl-confirmation label,
#settings-email-tpl-confirmation br {
  margin-block: 0.25rem;
}

#settings-email-tpl-confirmation details {
  background: #f6f1e7;
  border: 1px solid #ddd2bd;
  padding: 0.55rem 0.7rem;
}

#settings-email-tpl-confirmation input,
#settings-email-tpl-confirmation textarea {
  background: #fff;
  border-color: #cbbfa8;
  box-sizing: border-box;
  font-family: "Courier New", monospace;
  font-size: 0.78rem;
  line-height: 1.35;
  padding: 0.55rem;
}

#settings-email-tpl-confirmation #confirmation_html {
  height: 10.5rem;
}

#settings-email-tpl-confirmation #confirmation_text {
  height: 7rem;
}

#settings-email-tpl-confirmation [data-fill-default] {
  margin-top: -0.4rem;
}

#settings-email-tpl-confirmation button[type="submit"] {
  background: var(--color-secondary);
  border-color: var(--color-secondary);
  font-weight: 700;
  margin-top: 0.25rem;
}
`,
  elementSelector: "#settings-email-tpl-confirmation",
  name: "confirmation-email-template-editor",
  run: async ({ page, submit }) => {
    await page.goto("/admin/settings-advanced#settings-email-tpl-confirmation");
    const form = "#settings-email-tpl-confirmation";
    await setFormValues(page, form, TEMPLATE);
    await submit(form);
    await page.locator(form).waitFor();
    const subject = await page.locator(`${form} [name="subject"]`).inputValue();
    if (subject !== TEMPLATE.subject) {
      throw new Error("Could not save the confirmation email template.");
    }
    await blurActiveElement(page);
  },
};
