import { createListing, setFormValues } from "./helpers.js";

const dateParts = () => {
  const now = new Date();
  const month = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1));
  const mondayOffset = (8 - month.getUTCDay()) % 7;
  const monday = new Date(month);
  monday.setUTCDate(1 + mondayOffset);
  const laterMonday = new Date(monday);
  laterMonday.setUTCDate(monday.getUTCDate() + 7);
  return {
    laterMonday: laterMonday.toISOString().slice(0, 10),
    monday: monday.toISOString().slice(0, 10),
    month: monday.toISOString().slice(0, 7),
  };
};

const addBooking = async (
  { page, submit },
  listingId,
  { date, email, name, quantity },
) => {
  await page.goto(`/admin/listing/${listingId}/attendees`);
  const form = `form[action="/admin/listing/${listingId}/attendee"]`;
  await setFormValues(page, form, { date, email, name, quantity });
  await submit(form);
};

export default {
  css: `
:root {
  --border-radius: 14px;
  --color-accent: #f4d98b;
  --color-bg: #eef8f3;
  --color-bg-secondary: #d8eee4;
  --color-link: #286757;
  --color-secondary: #347b68;
  --color-secondary-accent: #347b6820;
  --color-shadow: #244c3e1f;
  --color-table: #347b68;
  --color-text: #263d36;
  --color-text-secondary: #61766f;
  --font-family: Arial, sans-serif;
}

#attendees {
  background: #fffefa;
  border: 1px solid #c9e1d6;
  border-radius: 18px;
  box-shadow: 0 10px 24px var(--color-shadow);
  padding: 1rem;
}

#attendees > .table-scroll,
#attendees > .table-actions {
  display: none;
}

.date-picker,
.availability-checker {
  border-radius: 12px;
}

.availability-table {
  font-size: 0.78rem;
  white-space: normal;
  width: 100%;
}

.availability-table td,
.availability-table th {
  padding: 0.35rem 0.25rem;
}
`,
  elementSelector: "#attendees",
  name: "daily-events-calendar",
  run: async (context) => {
    const listingId = await createListing(context, {
      choices: {
        bookable_days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      fields: ["email"],
      name: "Little Acorns Stay & Play",
      values: {
        duration_days: "1",
        listing_type: "daily",
        location: "Meadowbrook Community Hall",
        max_attendees: "12",
        max_quantity: "4",
        maximum_days_after: "90",
        minimum_days_before: "1",
        unit_price: "3.00",
      },
    });
    const dates = dateParts();
    await addBooking(context, listingId, {
      date: dates.monday,
      email: "maya@example.com",
      name: "Maya and Leo Patel",
      quantity: "8",
    });
    await addBooking(context, listingId, {
      date: dates.laterMonday,
      email: "families@example.com",
      name: "Monday families",
      quantity: "12",
    });
    await context.page.goto(
      `/admin/calendar?date=${dates.monday}&cal=${dates.month}#calendar`,
    );
    await context.page
      .locator("details[data-availability-checker] summary")
      .click();
    await context.page.getByText("4/12", { exact: true }).waitFor();
  },
};
