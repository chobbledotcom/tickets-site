import { chobbleFestCss, createFestivalListing } from "./_chobblefest.js";
import { addListingMoney, createAttendee } from "./helpers.js";

export default {
  css: chobbleFestCss("payments"),
  elementSelector: ".listing-details-table",
  name: "chobblefest-payments",
  run: async (context) => {
    const listingId = await createFestivalListing(context, {
      date: "2027-08-16",
      name: "ChobbleFest full week pass",
      price: "180.00",
    });
    await createAttendee(context, {
      listingId,
      quantity: "8",
      values: { name: "Advance week-pass sales" },
    });
    await addListingMoney(
      context,
      listingId,
      "manual_listing_income",
      "960.00",
    );
    await addListingMoney(context, listingId, "manual_listing_cost", "425.00");
    await context.page.goto(`/admin/ledger?listing=${listingId}`);
    await context.page
      .locator(".listing-details-table")
      .first()
      .getByText("+£1,440", { exact: true })
      .waitFor();
  },
};
