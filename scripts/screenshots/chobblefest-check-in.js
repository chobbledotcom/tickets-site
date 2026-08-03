import { chobbleFestCss, createFestivalListing } from "./_chobblefest.js";
import { createAttendee } from "./helpers.js";

export default {
  css: chobbleFestCss("check-in"),
  elementSelector: "article:has(#manual-checkin)",
  name: "chobblefest-check-in",
  run: async (context) => {
    const listingId = await createFestivalListing(context, {
      date: "2027-08-16",
      name: "ChobbleFest Monday gate",
      price: "35.00",
    });
    for (const name of ["Aisha Khan", "Tomas Novak", "Lucia Santos"]) {
      await createAttendee(context, {
        listingId,
        values: {
          email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
          name,
        },
      });
    }
    await context.page.goto(`/admin/listing/${listingId}/scanner`);
    await context.page.locator("#manual-checkin-input").click();
    await context.page.getByText("Aisha Khan", { exact: false }).waitFor();
  },
};
