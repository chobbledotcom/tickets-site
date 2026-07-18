import {
  createAttendee,
  createListing,
  enableFeature,
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

const appDateFromDeliveries = async (page) => {
  await page.goto("/admin/deliveries");
  const monthPath = await page.locator(".calendar-month-select").inputValue();
  const month = new URL(monthPath, page.url()).searchParams.get("cal");
  const day = (await page.locator(".cal-day-today").textContent())?.trim();
  if (!month || !day) throw new Error("Could not read today's app date.");
  return `${month}-${day.padStart(2, "0")}`;
};

export default {
  css: `
:root {
  --border-radius: 8px;
  --box-shadow: 0 14px 34px;
  --color-accent: #f47b20;
  --color-bg: #eaf4f8;
  --color-bg-secondary: #d5e8ef;
  --color-link: #075985;
  --color-secondary: #0b2942;
  --color-secondary-accent: #0b294218;
  --color-shadow: #0b294226;
  --color-table: #0b2942;
  --color-text: #102a3d;
  --color-text-secondary: #587181;
  --font-family: Arial, Helvetica, sans-serif;
}

body {
  background-color: #dcecf2;
}

.delivery-day {
  background: #f8fcfd;
  border: 1px solid #bfd7e1;
  border-top: 7px solid var(--color-secondary);
  border-radius: 12px;
  box-shadow: var(--box-shadow) var(--color-shadow);
  padding: 1.1rem;
}

.delivery-day h2 {
  color: var(--color-secondary);
  font-size: 1.45rem;
  letter-spacing: 0.03em;
  margin-bottom: 0.75rem;
}

.delivery-bookings > li {
  background: #fff;
  border: 1px solid #c9dfe7;
  border-left: 5px solid var(--color-accent);
  border-radius: 7px;
  padding: 0.85rem 0.85rem 0.85rem 0.65rem;
}

.delivery-bookings ul {
  padding-left: 0.55rem;
}

.delivery-leg {
  align-items: center;
  background: #eaf4f8;
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  justify-content: space-between;
  margin-top: 0.55rem;
  padding: 0.55rem;
}

.delivery-mark {
  border: 0;
  margin: 0;
  padding: 0;
}

.delivery-mark button {
  background: var(--color-accent);
  border-color: var(--color-accent);
  border-radius: 999px;
  color: #172b38;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 0.35rem 0.7rem;
}
`,
  elementSelector: ".delivery-day:has(.delivery-bookings)",
  name: "logistics-deliveries",
  run: async (context) => {
    const { page, submit } = context;
    await enableFeature(context, "logistics");

    await page.goto("/admin/logistics");
    const agentForm = 'form[action="/admin/logistics"]';
    await setFormValues(page, agentForm, { name: "Van 2 - Alex Morgan" });
    await submit(agentForm);

    const agentHref = await page
      .locator('a[href^="/admin/logistics/"]')
      .filter({ hasText: "Van 2 - Alex Morgan" })
      .getAttribute("href");
    const agentId = agentHref?.match(/^\/admin\/logistics\/(\d+)$/)?.[1];
    if (!agentId) throw new Error("Could not find the logistics agent.");

    await page.goto(agentHref);
    const editForm = `form[action="/admin/logistics/${agentId}/edit"]`;
    await page
      .locator(`${editForm} label`)
      .filter({ hasText: "(owner)" })
      .locator('[name="user_ids"]')
      .evaluate((input) => Reflect.set(input, "checked", true));
    await submit(editForm);

    const appDate = await appDateFromDeliveries(page);
    const listingId = await createListing(context, {
      choices: {
        bookable_days: BOOKABLE_DAYS,
        uses_logistics: ["1"],
      },
      fields: ["address", "phone"],
      name: "Willow Marquee Hire",
      values: {
        duration_days: "1",
        listing_type: "daily",
        location: "Willow Marquee Hire Depot",
        max_attendees: "8",
        maximum_days_after: "90",
        max_quantity: "1",
        minimum_days_before: "0",
        unit_price: "320.00",
      },
    });

    await createAttendee(context, {
      listingId,
      startDate: appDate,
      values: {
        address: "14 Willow Lane\nBristol\nBS3 4QH",
        logistics_end: agentId,
        logistics_end_time: "17:00",
        logistics_start: agentId,
        logistics_start_time: "08:30",
        name: "Maya Patel",
        phone: "+44 7700 900123",
      },
    });

    await page.goto(`/admin/deliveries?date=${appDate}`);
    const deliveryDay = page
      .locator(".delivery-day")
      .filter({ hasText: "Maya Patel" });
    await deliveryDay.getByText("Willow Marquee Hire", { exact: false })
      .waitFor();
    await deliveryDay.getByText("08:30", { exact: false }).waitFor();
    await deliveryDay.getByText("17:00", { exact: false }).waitFor();
  },
};
