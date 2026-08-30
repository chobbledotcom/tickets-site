import { createListing, publicPathFor } from "./helpers.js";

const DAY_MS = 86_400_000;

const dateOnly = (date) => date.toISOString().slice(0, 10);

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #b3593a;
  --color-bg: #f4efe7;
  --color-bg-secondary: #e8dfd1;
  --color-link: #8a4a2f;
  --color-secondary: #57493c;
  --color-secondary-accent: #57493c1c;
  --color-shadow: #57493c26;
  --color-table: #57493c;
  --color-text: #3d362e;
  --color-text-secondary: #7a7065;
  --font-family: Arial, Helvetica, sans-serif;
}

body { background: #e8dfd1; }

main {
  background: #faf6ef;
  border: 1px solid #d9cdb9;
  border-top: 7px solid var(--color-accent);
  border-radius: 12px;
  box-shadow: 0 12px 28px var(--color-shadow);
  margin-block: 0.6rem;
  padding: 1.15rem;
}

main h1 { color: #57493c; }
`,
  elementSelector: "main",
  name: "registration-deadline",
  run: async (context) => {
    const { page } = context;
    const now = Date.now();
    const workshopStart = new Date(now + 7 * DAY_MS);
    workshopStart.setUTCHours(10, 0, 0, 0);
    const registrationCloses = new Date(now - DAY_MS);
    registrationCloses.setUTCHours(18, 0, 0, 0);

    const listingId = await createListing(context, {
      fields: ["email"],
      name: "Mug-making Workshop",
      values: {
        closes_at_date: dateOnly(registrationCloses),
        closes_at_time: "18:00",
        date_date: dateOnly(workshopStart),
        date_time: "10:00",
        location: "Fernbank Pottery",
        max_attendees: "12",
        max_quantity: "2",
        unit_price: "35.00",
      },
    });

    await page.goto(await publicPathFor(page, listingId));
    await page.getByText("Registration closed", { exact: false }).waitFor();
  },
};
