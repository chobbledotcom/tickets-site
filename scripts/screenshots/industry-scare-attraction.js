import { createDailyIndustryListing } from "./_industry.js";
import { addDatedBooking } from "./helpers.js";

const dateParts = () => {
  const now = new Date();
  const month = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1));
  const fridayOffset = (12 - month.getUTCDay()) % 7;
  const friday = new Date(month);
  friday.setUTCDate(1 + fridayOffset);
  const saturday = new Date(friday);
  saturday.setUTCDate(friday.getUTCDate() + 1);
  return {
    friday: friday.toISOString().slice(0, 10),
    month: friday.toISOString().slice(0, 7),
    saturday: saturday.toISOString().slice(0, 10),
  };
};

export default {
  css: `
:root {
  --border-radius: 12px;
  --color-accent: #f2a03d;
  --color-bg: #f6f1ea;
  --color-bg-secondary: #ead9c4;
  --color-link: #7b3fa0;
  --color-secondary: #7b3fa0;
  --color-secondary-accent: #7b3fa020;
  --color-shadow: #43285a1f;
  --color-table: #7b3fa0;
  --color-text: #34283e;
  --color-text-secondary: #71657c;
  --font-family: Arial, sans-serif;
}

#attendees {
  background: #fffdf8;
  border: 1px solid #e2d3bd;
  border-radius: 16px;
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
  name: "industry-scare-attraction-calendar",
  run: async (context) => {
    const listingId = await createDailyIndustryListing(context, {
      bookableDays: ["Thursday", "Friday", "Saturday", "Sunday"],
      fields: ["email"],
      name: "Hollowtree Scare Trail",
      values: {
        location: "Hollowtree Farm",
        max_attendees: "40",
        max_quantity: "6",
        maximum_days_after: "90",
        minimum_days_before: "1",
        unit_price: "18.00",
      },
    });
    const dates = dateParts();
    await addDatedBooking(context, listingId, {
      date: dates.friday,
      email: "groups@example.com",
      name: "Friday evening bookings",
      quantity: "15",
    });
    await addDatedBooking(context, listingId, {
      date: dates.saturday,
      email: "sold-out@example.com",
      name: "Saturday evening bookings",
      quantity: "40",
    });
    await context.page.goto(
      `/admin/calendar?date=${dates.friday}&cal=${dates.month}#calendar`,
    );
    await context.page
      .locator("details[data-availability-checker] summary")
      .click();
    await context.page.getByText("25/40", { exact: true }).waitFor();
  },
};
