import {
  createListing,
  openFilledListingCheckout,
  setFormValues,
} from "./helpers.js";

const BOOKABLE_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const futureFridayFrom = (page) =>
  page.locator('[name="date"] option').evaluateAll((options) => {
    const today = new Date().toISOString().slice(0, 10);
    const friday = options
      .map((option) => option.value)
      .find(
        (date) =>
          date > today && new Date(`${date}T00:00:00Z`).getUTCDay() === 5,
      );
    if (!friday) throw new Error("Could not find a future Friday to book.");
    return friday;
  });

export default {
  css: `
:root {
  --border-radius: 3px;
  --box-shadow: 0 12px 28px;
  --color-accent: #ffd400;
  --color-bg: #202224;
  --color-bg-secondary: #303337;
  --color-link: #ffd400;
  --color-secondary: #ffd400;
  --color-secondary-accent: #ffd40024;
  --color-shadow: #00000052;
  --color-table: #ffd400;
  --color-text: #f4f4f2;
  --color-text-secondary: #b8babd;
  --font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #171819;
}

main {
  background: #27292c;
  border: 1px solid #46494d;
  border-top: 8px solid var(--color-accent);
  box-shadow: var(--box-shadow) var(--color-shadow);
  margin-block: 0.75rem;
  padding: 1.25rem;
}

button,
input,
select,
textarea {
  border-radius: 2px;
}

input,
select,
textarea {
  background: #171819;
  border-color: #686b70;
  color: var(--color-text);
}

button[type="submit"] {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #171819;
  font-weight: 800;
  text-transform: uppercase;
}

fieldset {
  border-color: #55585c;
  border-radius: 2px;
}

.order-summary-message {
  background: #171819;
  border-left: 5px solid var(--color-accent);
  color: var(--color-text);
  padding: 0.8rem;
}
`,
  elementSelector: "main",
  name: "equipment-hire-booking",
  run: async (context) => {
    const listingId = await createListing(context, {
      choices: {
        bookable_days: BOOKABLE_DAYS,
        customisable_days: ["1"],
      },
      fields: ["email"],
      name: "Portable PA System Hire",
      values: {
        day_price_1: "45.00",
        duration_days: "3",
        listing_type: "daily",
        location: "Soundbox Equipment Hire",
        max_attendees: "4",
        maximum_days_after: "90",
        max_quantity: "1",
        minimum_days_before: "1",
        unit_price: "45.00",
      },
    });

    await context.page.goto(`/admin/listing/${listingId}/edit`);
    const editForm = `form[action="/admin/listing/${listingId}/edit"]`;
    await setFormValues(context.page, editForm, {
      day_price_2: "90.00",
      day_price_3: "135.00",
    });
    await context.submit(editForm);

    await openFilledListingCheckout(context, {
      email: "alex@example.com",
      listingId,
      name: "Alex Morgan",
    });
    await context.page
      .locator('[name="date"]')
      .selectOption(await futureFridayFrom(context.page));
    await context.page.locator('[name="day_count"]').selectOption("3");
    await context.page.getByText("you'll owe £135", { exact: false }).waitFor();
  },
};
