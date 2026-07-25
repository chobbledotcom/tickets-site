import { createListing, enableFeature, setFormValues } from "./helpers.js";

const DAY_MS = 86_400_000;
const futureDate = (days) =>
  new Date(Date.now() + days * DAY_MS).toISOString().slice(0, 10);

const saveForm = async (context, pagePath, formAction, values) => {
  const formSelector = `form[action="${formAction}"]`;
  await context.page.goto(pagePath);
  await setFormValues(context.page, formSelector, values);
  await context.submit(formSelector);
};

export default {
  css: `
:root {
  --border-radius: 10px;
  --color-accent: #d2a63f;
  --color-bg: #e4ece5;
  --color-bg-secondary: #f2eee2;
  --color-link: #225b4b;
  --color-secondary: #173f36;
  --color-secondary-accent: #173f3618;
  --color-shadow: #173f3624;
  --color-text: #24352f;
  --color-text-secondary: #62716b;
  --font-family: Arial, Helvetica, sans-serif;
}

body { background: #dfe8dc; }

#main-content {
  background: #fffdf8;
  border: 1px solid #cad8ce;
  box-shadow: 0 16px 36px var(--color-shadow);
  padding: 2rem;
}

#main-content > h1 {
  color: var(--color-secondary);
  font-family: Georgia, "Times New Roman", serif;
  margin-bottom: 1rem;
}

.public-page {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.public-page > h2 { grid-column: 1 / -1; }

.public-page > .prose {
  background: #fff;
  border: 1px solid #cad8ce;
  border-top: 6px solid var(--color-accent);
  border-radius: var(--border-radius);
  box-shadow: 0 10px 24px var(--color-shadow);
  grid-column: 1 / -1;
  padding: 1.25rem 1.25rem 5rem;
}

.public-page > .prose h2 {
  color: var(--color-secondary);
  font-family: Georgia, "Times New Roman", serif;
}

.public-page > p:has(.btn) {
  align-self: end;
  grid-column: 1 / -1;
  justify-self: start;
  margin: -6rem 1.25rem 2rem;
  pointer-events: none;
  position: relative;
}

.homepage-footer { display: none; }
`,
  elementSelector: "#main-content",
  name: "oakfield-public-website",
  run: async (context) => {
    await enableFeature(context, "site");
    await createListing(context, {
      fields: ["email"],
      name: "Summer Sessions",
      values: {
        date_date: futureDate(35),
        date_time: "18:30",
        description:
          "Live music, local food and family activities on Oakfield Green.",
        location: "Oakfield Green",
        max_attendees: "240",
        max_quantity: "8",
        unit_price: "12.00",
      },
    });
    await createListing(context, {
      fields: ["email"],
      name: "Oakfield Primary Disco",
      values: {
        date_date: futureDate(63),
        date_time: "18:00",
        description:
          "An evening disco for Oakfield Primary pupils and their families.",
        location: "Oakfield Primary School",
        max_attendees: "120",
        max_quantity: "4",
        unit_price: "3.00",
      },
    });
    await saveForm(context, "/admin/site", "/admin/site", {
      homepage_text:
        "Book workshops, family days and evening events in Oakfield.",
      website_title: "Oakfield Community Events",
    });
    await saveForm(context, "/admin/site/pages/new", "/admin/site/pages", {
      content:
        "Oakfield Community Events publishes local activities and seasonal events.",
      meta_description: "About Oakfield Community Events.",
      meta_title: "",
      name: "About",
      slug: "about",
    });
    await saveForm(context, "/admin/site/news/new", "/admin/site/news", {
      content: "Bookings are open for Oakfield's summer events.",
      meta_description: "",
      meta_title: "",
      name: "Oakfield summer programme",
      snippet: "Summer Sessions and the primary disco are open for booking.",
    });
    await saveForm(context, "/admin/site/contact", "/admin/site/contact", {
      contact_page_text:
        "Email hello@oakfieldevents.org for event and access questions.",
    });

    await context.page.setViewportSize({ height: 900, width: 1100 });
    await context.page.goto("/listings", { waitUntil: "networkidle" });
    await context.page
      .getByRole("heading", {
        exact: true,
        name: "Oakfield Community Events",
      })
      .waitFor();
    await context.page
      .getByRole("heading", { exact: true, name: "Summer Sessions" })
      .waitFor();
    await context.page
      .getByRole("heading", { exact: true, name: "Oakfield Primary Disco" })
      .waitFor();
    await context.page
      .locator('.admin-nav--desktop a[href="/page/about"]')
      .waitFor();
  },
};
