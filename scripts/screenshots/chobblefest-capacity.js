import { chobbleFestCss } from "./_chobblefest.js";
import { addDatedBooking, createDailyListing } from "./helpers.js";

export default {
  css: chobbleFestCss("capacity"),
  elementSelector: "#attendees",
  name: "chobblefest-capacity",
  run: async (context) => {
    const listingId = await createDailyListing(context, {
      name: "ChobbleFest daily capacity",
      values: {
        duration_days: "1",
        location: "ChobbleFest, Black Crag Park",
        max_attendees: "1000",
        max_quantity: "10",
        maximum_days_after: "600",
        minimum_days_before: "1",
        unit_price: "45.00",
      },
    });
    await addDatedBooking(context, listingId, {
      date: "2027-08-16",
      email: "monday@example.com",
      name: "Monday ticket holders",
      quantity: "842",
    });
    await context.page.goto(
      "/admin/calendar?date=2027-08-16&cal=2027-08#calendar",
    );
    await context.page
      .locator("details[data-availability-checker] summary")
      .click();
    await context.page.getByText("158/1000", { exact: true }).waitFor();
  },
};
