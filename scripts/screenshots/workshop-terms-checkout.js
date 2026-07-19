import {
  blurActiveElement,
  createListing,
  publicPathFor,
  setFormValues,
} from "./helpers.js";

const TERMS = [
  "## Workshop terms",
  "",
  "- Please arrive 10 minutes before the workshop starts.",
  "- Wear closed shoes and clothes that can get marked by clay.",
  "- Tell the tutor about any access needs before the session.",
  "- Places can be moved to another date with 48 hours' notice.",
].join("\n");

export default {
  css: `
:root {
  --border-radius: 10px;
  --color-accent: #c8a96b;
  --color-bg: #eee8d8;
  --color-bg-secondary: #dde4d3;
  --color-link: #315a47;
  --color-secondary: #315744;
  --color-secondary-accent: #3157441a;
  --color-shadow: #233c3024;
  --color-table: #315744;
  --color-text: #29372f;
  --color-text-secondary: #68736b;
  --font-family: Georgia, "Times New Roman", serif;
}

body {
  background: #e7e1cf;
}

main {
  background: #fffdf5;
  border: 1px solid #cfd5c4;
  border-top: 7px solid var(--color-secondary);
  border-radius: 14px;
  box-shadow: 0 12px 30px var(--color-shadow);
  box-sizing: border-box;
  margin-block: 0.75rem;
  padding: 1.15rem;
}

main h1,
main h2 {
  color: var(--color-secondary);
}

main h1 {
  font-size: 1.7rem;
  line-height: 1.15;
  margin-bottom: 0.45rem;
}

main form {
  gap: 0.75rem;
}

main input,
main select,
main button,
main fieldset {
  border-color: #aebba9;
  border-radius: 7px;
}

main .prose {
  background: #f4f0e3;
  border-left: 4px solid var(--color-accent);
  padding: 0.65rem 0.85rem;
}

main .prose h2 {
  font-size: 1.15rem;
  margin: 0 0 0.35rem;
}

main .prose ul {
  margin-block: 0.35rem;
  padding-left: 1.25rem;
}

main .terms-agree {
  align-items: center;
  background: #e7ecdf;
  border: 1px solid #bdc9b7;
  border-radius: 8px;
  display: flex;
  font-weight: 700;
  gap: 0.65rem;
  padding: 0.75rem;
}

main .terms-agree input {
  accent-color: var(--color-secondary);
}

main button[type="submit"] {
  background: var(--color-secondary);
  border-color: var(--color-secondary);
  color: #fffdf5;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
`,
  elementSelector: "main",
  name: "workshop-terms-checkout",
  run: async (context) => {
    const { page, submit } = context;
    await page.goto("/admin/settings#settings-terms");
    await setFormValues(page, "#settings-terms", {
      terms_and_conditions: TERMS,
    });
    await submit("#settings-terms");

    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Wheel-throwing taster workshop",
      values: {
        date_date: "2026-10-10",
        date_time: "10:00",
        location: "Fernbank Pottery Studio",
        max_attendees: "10",
        max_quantity: "2",
        unit_price: "32.00",
      },
    });

    await page.goto(await publicPathFor(page, listingId));
    await setFormValues(page, "main form", {
      email: "maya.patel@example.com",
      name: "Maya Patel",
    });
    await page.locator(`[name="quantity_${listingId}"]`).selectOption("2");
    await page.locator('[name="agree_terms"]').check();
    await page.getByText("Workshop terms", { exact: true }).waitFor();
    await page.getByText("Fernbank Pottery Studio", { exact: false }).waitFor();
    await blurActiveElement(page);
  },
};
