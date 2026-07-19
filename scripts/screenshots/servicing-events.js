import { createListing, setFormValues } from "./helpers.js";

const nextMonday = () => {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + ((8 - date.getUTCDay()) % 7 || 7));
  return date.toISOString().slice(0, 10);
};

export default {
  css: `
:root {
  --border-radius: 5px;
  --color-accent: #c28b52;
  --color-bg: #e9edef;
  --color-bg-secondary: #d8e0e3;
  --color-link: #315b67;
  --color-secondary: #315b67;
  --color-secondary-accent: #315b6718;
  --color-shadow: #263f4724;
  --color-table: #315b67;
  --color-text: #27383d;
  --color-text-secondary: #66777c;
  --font-family: Arial, Helvetica, sans-serif;
}

#servicing-form {
  background: #f9faf8;
  border: 1px solid #bdc9ca;
  border-left: 7px solid var(--color-secondary);
  border-radius: 6px;
  box-shadow: 0 12px 28px var(--color-shadow);
  padding: 1rem;
}

#servicing-form label {
  color: #294852;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

#servicing-form input {
  background: #fff;
  border-color: #aebdbf;
  border-radius: 3px;
}

#servicing-form .table-scroll {
  overflow: visible;
}

#servicing-form table {
  font-size: 0.82rem;
  table-layout: fixed;
  white-space: normal;
  width: 100%;
}

#servicing-form th,
#servicing-form td {
  padding: 0.45rem;
}

#servicing-form th:last-child,
#servicing-form td:last-child {
  width: 5rem;
}

#servicing-form button[type="submit"] {
  background: var(--color-accent);
  border-color: #a66f39;
  border-radius: 3px;
  color: #2e251d;
  font-weight: 800;
  width: 100%;
}
`,
  elementSelector: "#servicing-form",
  name: "servicing-studio-floor-hold",
  run: async (context) => {
    const listingId = await createListing(context, {
      choices: { bookable_days: ["Monday", "Tuesday"] },
      fields: ["email"],
      name: "Ceramics Studio Sessions",
      values: {
        duration_days: "1",
        listing_type: "daily",
        location: "Kiln Yard Studios",
        max_attendees: "16",
        maximum_days_after: "120",
        max_quantity: "8",
        minimum_days_before: "1",
        unit_price: "28.00",
      },
    });

    await context.page.goto("/admin/servicing/new");
    await setFormValues(context.page, "#servicing-form", {
      day_count: "2",
      name: "Studio floor treatment",
      [`quantity_${listingId}`]: "4",
      start_date: nextMonday(),
    });
    await context.submit("#servicing-form");
    const form = context.page.locator("#servicing-form");
    await form.locator('[name="name"]').waitFor();
    if ((await form.locator('[name="day_count"]').inputValue()) !== "2") {
      throw new Error("Could not save the two-day service event.");
    }
    if (
      (await form.locator(`[name="quantity_${listingId}"]`).inputValue()) !==
        "4"
    ) {
      throw new Error("Could not save the service event quantity.");
    }
  },
};
