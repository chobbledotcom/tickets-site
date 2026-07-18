import {
  createGroup,
  createListing,
  openFilledGroupCheckout,
} from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 5px;
  --color-accent: #d8bd88;
  --color-bg: #eee1c5;
  --color-bg-secondary: #dfccaa;
  --color-link: #6f172b;
  --color-secondary: #761c32;
  --color-secondary-accent: #761c3218;
  --color-shadow: #3f18201f;
  --color-table: #761c32;
  --color-text: #332620;
  --color-text-secondary: #716158;
  --font-family: Arial, sans-serif;
}

main {
  background: #f8efd9;
  border: 1px solid #b99d70;
  border-radius: 6px;
  box-shadow: 0 8px 20px var(--color-shadow);
  margin-block: 0.5rem;
  padding: 1.15rem;
}

main h1,
main h2,
main legend {
  color: #64162a;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 600;
}

main h1 {
  font-size: 1.75rem;
}

main button,
main fieldset,
main input,
main select {
  border-radius: 4px;
}

main .order-summary-message {
  background: #ead9b8;
  border: 1px solid #bea06d;
  border-radius: 4px;
  padding: 0.75rem;
}
`,
  elementSelector: "main",
  name: "the-tempest-group-checkout",
  run: async (context) => {
    const adultListingId = await createListing(context, {
      fields: ["email"],
      name: "Adult tickets (£12)",
      values: {
        location: "The Old Playhouse",
        max_attendees: "180",
        max_quantity: "8",
        unit_price: "12.00",
      },
    });
    const childListingId = await createListing(context, {
      fields: ["email"],
      name: "Child tickets (£6)",
      values: {
        location: "The Old Playhouse",
        max_attendees: "180",
        max_quantity: "8",
        unit_price: "6.00",
      },
    });
    const groupId = await createGroup(context, {
      listingIds: [adultListingId, childListingId],
      name: "The Tempest",
    });
    await openFilledGroupCheckout(context, {
      email: "alex@example.com",
      expectedText: "you'll owe £30",
      groupId,
      name: "Alex Morgan",
      quantities: [
        [adultListingId, "2"],
        [childListingId, "1"],
      ],
    });
  },
};
