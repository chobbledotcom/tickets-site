import { EVENT_NAME, setupJourneyCss } from "./_setup-journey.js";
import { setFormValues } from "./helpers.js";

export default {
  css: setupJourneyCss("event"),
  elementSelector: 'form[action="/admin/listing"]',
  name: "setup-journey-event",
  run: async ({ page }) => {
    await page.goto("/admin/listing/new?template=custom");
    await setFormValues(page, 'form[action="/admin/listing"]', {
      date_date: "2027-09-17",
      date_time: "19:30",
      description: "An evening of live folk music.",
      location: "The Lantern Hall, Bristol",
      max_attendees: "120",
      max_quantity: "6",
      name: EVENT_NAME,
      unit_price: "12.00",
    });
    await page.locator('[name="fields"][value="email"]').check();
  },
};
