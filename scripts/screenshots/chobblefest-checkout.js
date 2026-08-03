import { chobbleFestCss, createFestivalListing } from "./_chobblefest.js";
import { createGroup, openFilledGroupCheckout } from "./helpers.js";

export default {
  css: chobbleFestCss("checkout"),
  elementSelector: "main",
  name: "chobblefest-checkout",
  run: async (context) => {
    const weekId = await createFestivalListing(context, {
      date: "2027-08-16",
      description: "Entry to all seven days and all 150 bands.",
      name: "Full week pass",
      price: "180.00",
    });
    const campingId = await createFestivalListing(context, {
      date: "2027-08-16",
      name: "Quiet camping",
      price: "35.00",
    });
    const programmeId = await createFestivalListing(context, {
      date: "2027-08-16",
      name: "Printed programme",
      price: "8.00",
    });
    const groupId = await createGroup(context, {
      listingIds: [weekId, campingId, programmeId],
      name: "Build your ChobbleFest ticket",
    });
    await openFilledGroupCheckout(context, {
      email: "maya@example.com",
      expectedTotal: "£223",
      groupId,
      name: "Maya Patel",
      quantities: [
        [weekId, "1"],
        [campingId, "1"],
        [programmeId, "1"],
      ],
    });
  },
};
