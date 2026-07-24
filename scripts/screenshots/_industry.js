import { createListing, setFormValues } from "./helpers.js";

export const BOOKABLE_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const firstFutureDate = (page) =>
  page.locator('[name="date"] option').evaluateAll((options) => {
    const today = new Date().toISOString().slice(0, 10);
    const option = options.find(({ value }) => value > today);
    if (!option) throw new Error("Could not find a future booking date.");
    return option.value;
  });

export const selectFirstFutureDate = async (page) => {
  await page.locator('[name="date"]').selectOption(await firstFutureDate(page));
};

export const createDailyIndustryListing = (
  context,
  { bookableDays = BOOKABLE_DAYS, fields = ["email", "phone"], name, values },
) =>
  createListing(context, {
    choices: { bookable_days: bookableDays },
    fields,
    name,
    values: {
      duration_days: "1",
      listing_type: "daily",
      max_attendees: "1",
      max_quantity: "1",
      ...values,
    },
  });

export const createDurationIndustryListing = (context, { name, values }) =>
  createListing(context, {
    choices: {
      bookable_days: BOOKABLE_DAYS,
      customisable_days: ["1"],
    },
    fields: ["email", "phone", "address"],
    name,
    values: {
      listing_type: "daily",
      max_quantity: "1",
      ...values,
    },
  });

export const setDayPrices = async (context, listingId, prices) => {
  const editForm = `form[action="/admin/listing/${listingId}/edit"]`;
  await context.page.goto(`/admin/listing/${listingId}/edit`);
  await setFormValues(context.page, editForm, prices);
  await context.submit(editForm);
};

export const industryCheckoutCss = ({
  accent,
  background,
  border,
  link,
  panel,
  secondary,
  text,
  textSecondary,
}) => `
:root {
  --border-radius: 9px;
  --color-accent: ${accent};
  --color-bg: ${background};
  --color-bg-secondary: ${panel};
  --color-link: ${link};
  --color-secondary: ${secondary};
  --color-secondary-accent: ${secondary}1f;
  --color-shadow: ${text}24;
  --color-table: ${secondary};
  --color-text: ${text};
  --color-text-secondary: ${textSecondary};
  --font-family: Arial, Helvetica, sans-serif;
}

body { background: ${background}; }

main,
.page-regions.admin-page {
  background: ${panel};
  border: 1px solid ${border};
  border-top: 7px solid ${accent};
  border-radius: 14px;
  box-shadow: 0 12px 28px var(--color-shadow);
  margin-block: 0.65rem;
  padding: 1.1rem;
}

main h1,
main h2,
main legend,
.page-regions.admin-page h2 { color: ${secondary}; }

main h1 { font-size: 1.65rem; }

main button,
main fieldset,
main input,
main select,
main textarea { border-radius: 7px; }

main .child-selector,
main .custom-question,
main .order-summary-message,
.page-regions.admin-page .page-block {
  background: ${background};
  border-color: ${border};
}

main .order-summary-message {
  border-left: 5px solid ${accent};
  padding: 0.75rem;
}

main button[type="submit"] {
  background: ${secondary};
  border-color: ${secondary};
  color: ${panel};
  font-weight: 700;
}
`;
