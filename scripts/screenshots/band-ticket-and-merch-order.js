import {
  blurActiveElement,
  createGroup,
  createListing,
  openFilledGroupCheckout,
} from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 2px;
  --color-accent: #2c2836;
  --color-bg: #15131a;
  --color-bg-secondary: #221f2a;
  --color-link: #f2c14e;
  --color-secondary: #e4572e;
  --color-secondary-accent: #e4572e33;
  --color-shadow: #00000066;
  --color-table: #e4572e;
  --color-text: #f3efe6;
  --color-text-secondary: #b9b2a5;
  --font-family: "Arial Narrow", "Helvetica Neue", Arial, sans-serif;
}

body { background: #15131a; }

main {
  background: #1d1a24;
  border: 2px solid #f2c14e;
  box-shadow: 8px 8px 0 #e4572e;
  margin-block: 0.75rem 1.25rem;
  padding: 1.1rem;
}

main h1,
main h2 {
  color: #f2c14e;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

main input,
main select,
main textarea {
  background: #2a2633;
  border-color: #5c5468;
  color: #f3efe6;
}

main textarea {
  font-family: inherit;
  min-height: 6rem;
}

main button[type="submit"] {
  background: #e4572e;
  border-color: #e4572e;
  color: #15131a;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.order-summary-message { display: none; }
`,
  elementSelector: "main",
  name: "band-ticket-and-merch-order",
  run: async (context) => {
    const gigId = await createListing(context, {
      fields: ["email"],
      name: "Foundry Rooms gig, 17 April",
      template: "one-off-event",
      values: {
        date_date: "2027-04-17",
        date_time: "19:30",
        location: "The Foundry Rooms",
        max_attendees: "250",
        max_quantity: "6",
        unit_price: "12.00",
      },
    });
    const shirtId = await createListing(context, {
      fields: ["email", "address"],
      name: "Spring tour shirt",
      template: "physical-product",
      values: {
        max_attendees: "40",
        max_quantity: "4",
        unit_price: "20.00",
      },
    });
    const groupId = await createGroup(context, {
      listingIds: [gigId, shirtId],
      name: "Static Harbour spring tour",
    });
    await openFilledGroupCheckout(context, {
      email: "jo.marsh@example.com",
      expectedTotal: "£32",
      groupId,
      name: "Jo Marsh",
      quantities: [
        [gigId, "1"],
        [shirtId, "1"],
      ],
    });
    await context.page
      .locator('[name="address"]')
      .fill("14 Mill Lane\nOtley\nLS21 3AB");
    await blurActiveElement(context.page);
  },
};
