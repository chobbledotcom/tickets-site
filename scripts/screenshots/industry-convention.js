import { industryCheckoutCss } from "./_industry.js";
import {
  createGroup,
  createListing,
  openFilledGroupCheckout,
} from "./helpers.js";

export default {
  css: industryCheckoutCss({
    accent: "#e0483e",
    background: "#eef2fb",
    border: "#b9c6e8",
    link: "#2b4bab",
    panel: "#ffffff",
    secondary: "#2b4bab",
    text: "#232a3d",
    textSecondary: "#6a7390",
  }),
  elementSelector: "main",
  name: "industry-convention-checkout",
  run: async (context) => {
    const saturdayId = await createListing(context, {
      fields: ["email"],
      name: "Saturday Day Ticket (£15)",
      values: {
        location: "Northgate Exhibition Hall",
        max_attendees: "800",
        max_quantity: "8",
        unit_price: "15.00",
      },
    });
    const sundayId = await createListing(context, {
      fields: ["email"],
      name: "Sunday Day Ticket (£15)",
      values: {
        location: "Northgate Exhibition Hall",
        max_attendees: "800",
        max_quantity: "8",
        unit_price: "15.00",
      },
    });
    const groupId = await createGroup(context, {
      listingIds: [saturdayId, sundayId],
      name: "Northgate Comic Con",
    });
    await openFilledGroupCheckout(context, {
      email: "rowan@example.com",
      expectedTotal: "£45",
      groupId,
      name: "Rowan Ashe",
      quantities: [
        [saturdayId, "2"],
        [sundayId, "1"],
      ],
    });
  },
};
