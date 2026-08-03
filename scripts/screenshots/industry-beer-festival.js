import { industryCheckoutCss } from "./_industry.js";
import {
  createGroup,
  createListing,
  openFilledGroupCheckout,
} from "./helpers.js";

export default {
  css: industryCheckoutCss({
    accent: "#d98e32",
    background: "#f6efe3",
    border: "#d9c49a",
    link: "#7a4f1d",
    panel: "#fffdf7",
    secondary: "#8a5a24",
    text: "#3a2f1f",
    textSecondary: "#7d7160",
  }),
  elementSelector: "main",
  name: "industry-beer-festival-checkout",
  run: async (context) => {
    const afternoonId = await createListing(context, {
      fields: ["email"],
      name: "Afternoon Session (£8)",
      values: {
        location: "Bridgefield Corn Hall",
        max_attendees: "350",
        max_quantity: "6",
        unit_price: "8.00",
      },
    });
    const eveningId = await createListing(context, {
      fields: ["email"],
      name: "Evening Session (£10)",
      values: {
        location: "Bridgefield Corn Hall",
        max_attendees: "350",
        max_quantity: "6",
        unit_price: "10.00",
      },
    });
    const groupId = await createGroup(context, {
      listingIds: [afternoonId, eveningId],
      name: "Bridgefield Beer Festival",
    });
    await openFilledGroupCheckout(context, {
      email: "ellis@example.com",
      expectedTotal: "£36",
      groupId,
      name: "Ellis Morgan",
      quantities: [
        [afternoonId, "2"],
        [eveningId, "2"],
      ],
    });
  },
};
