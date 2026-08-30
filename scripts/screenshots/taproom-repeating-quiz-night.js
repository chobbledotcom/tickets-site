import {
  createDailyIndustryListing,
  firstWeekdayOfNextMonth,
} from "./_industry.js";
import { addDatedBooking, setFormValues } from "./helpers.js";

const decemberOf = (year) => ({
  first: `${year}-12-22`,
  second: `${year}-12-29`,
});

const addHoliday = async (context, { end, name, start }) => {
  const { page } = context;
  await page.goto("/admin/holidays/new");
  const form = 'form[action="/admin/holidays"]';
  await setFormValues(page, form, { end_date: end, name, start_date: start });
  await context.submit(form);
  await page.waitForURL(/\/admin\/holidays\/\d+/);
};

export default {
  css: `
:root {
  --border-radius: 10px;
  --color-accent: #b5854a;
  --color-bg: #f2ece2;
  --color-bg-secondary: #e6dccc;
  --color-link: #7a5a2e;
  --color-secondary: #46372a;
  --color-secondary-accent: #46372a1c;
  --color-shadow: #46372a26;
  --color-table: #46372a;
  --color-text: #383026;
  --color-text-secondary: #77685a;
  --font-family: Arial, Helvetica, sans-serif;
}

#attendees {
  background: #fbf8f2;
  border: 1px solid #ddd2c0;
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
  name: "taproom-repeating-quiz-night",
  run: async (context) => {
    const listingId = await createDailyIndustryListing(context, {
      bookableDays: ["Tuesday"],
      fields: ["email"],
      name: "Tuesday Quiz",
      values: {
        location: "The Bridgefield Tap",
        max_attendees: "12",
        max_quantity: "1",
        maximum_days_after: "365",
        minimum_days_before: "0",
        unit_price: "0.00",
      },
    });

    const year =
      new Date().getUTCMonth() === 11
        ? new Date().getUTCFullYear() + 1
        : new Date().getUTCFullYear();
    const closure = decemberOf(year);
    await addHoliday(context, {
      end: closure.first,
      name: "Christmas closure",
      start: closure.first,
    });
    await addHoliday(context, {
      end: closure.second,
      name: "New Year closure",
      start: closure.second,
    });

    const quizNight = firstWeekdayOfNextMonth(2);
    const quizDate = quizNight.toISOString().slice(0, 10);
    await addDatedBooking(context, listingId, {
      date: quizDate,
      email: "team@example.com",
      name: "Corner table team",
      quantity: "4",
    });

    await context.page.goto(
      `/admin/calendar?date=${quizDate}&cal=${quizDate.slice(0, 7)}#calendar`,
    );
    await context.page
      .locator("details[data-availability-checker] summary")
      .click();
    await context.page.getByText("8/12", { exact: true }).waitFor();
  },
};
