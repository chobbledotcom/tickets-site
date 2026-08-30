const WEEK_MS = 7 * 86_400_000;
const KEY_NAME = "Autumn programme";
const COURSE_WEEKS = 12;

const courseDate = (week) =>
  new Date(Date.now() + (4 + week) * WEEK_MS).toISOString();

const createCourseListing = (context, apiKey, week) =>
  context.page.request.post(`${context.baseUrl}/api/admin/listings`, {
    data: {
      date: courseDate(week),
      fields: "email",
      listing_type: "standard",
      location: "Riverside Print Studio",
      max_attendees: 12,
      max_quantity: 2,
      name: `Autumn Printmaking: Week ${week + 1}`,
      unit_price: 1800,
    },
    headers: { authorization: `Bearer ${apiKey}` },
  });

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #3f6e8a;
  --color-bg: #eef1f4;
  --color-bg-secondary: #dfe5ea;
  --color-link: #2c5570;
  --color-secondary: #22394a;
  --color-secondary-accent: #22394a1c;
  --color-shadow: #22394a26;
  --color-table: #22394a;
  --color-text: #22303a;
  --color-text-secondary: #64707a;
  --font-family: Arial, Helvetica, sans-serif;
}

.page-regions.admin-page {
  background: #f7f9fa;
  border: 1px solid #cbd5dd;
  border-top: 7px solid var(--color-accent);
  border-radius: 12px;
  box-shadow: 0 12px 28px var(--color-shadow);
  margin-block: 0.6rem;
  padding: 1.1rem;
}

.page-regions.admin-page h2 { color: #22394a; }

.page-regions.admin-page table {
  background: #fff;
  border: 1px solid #d3dce2;
}

.page-regions.admin-page input { border-radius: 7px; }

.page-regions.admin-page table a { color: #2c5570; }
`,
  elementSelector: ".page-regions.admin-page",
  name: "named-admin-api-key",
  run: async (context) => {
    const { page } = context;
    await page.goto("/admin/api-keys");
    const createForm = 'form[action="/admin/api-keys"]';
    await page.locator(`${createForm} [name="name"]`).fill(KEY_NAME);
    await context.submit(createForm);

    const shownKey = await page
      .locator(".warning pre code")
      .textContent()
      .then((value) => value?.trim());
    if (!shownKey) throw new Error("The new API key was not shown.");

    for (let week = 0; week < COURSE_WEEKS; week++) {
      const response = await createCourseListing(context, shownKey, week);
      if (!response.ok()) {
        throw new Error(
          `The API key could not create week ${week + 1}: ${await response.text()}`,
        );
      }
    }

    await page.goto("/admin/api-keys");
    await page.locator("table").getByRole("link", { name: KEY_NAME }).waitFor();
  },
};
