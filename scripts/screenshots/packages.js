import {
  createGroup,
  createListing,
  publicPathFrom,
  setFormValues,
  waitForOrderTotal,
} from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 6px;
  --color-accent: #c3a663;
  --color-bg: #f4efe2;
  --color-bg-secondary: #e7dfca;
  --color-link: #285444;
  --color-secondary: #285444;
  --color-secondary-accent: #2854441f;
  --color-shadow: #173f3224;
  --color-table: #285444;
  --color-text: #263a32;
  --color-text-secondary: #68766f;
  --font-family: Arial, sans-serif;
}

body {
  background: #173f32;
}

main {
  background: #fffaf0;
  border: 1px solid #b89b5e;
  border-top: 6px solid #b89b5e;
  box-shadow: 0 10px 24px var(--color-shadow);
  margin-block: 0.6rem;
  padding: 1.1rem;
}

main h1,
main h2,
main legend {
  color: #173f32;
  font-family: Georgia, "Times New Roman", serif;
}

main h1 {
  font-size: 1.7rem;
}

main button[type="submit"] {
  background: #285444;
  border-color: #285444;
  color: #fffaf0;
  font-weight: 700;
}

main fieldset,
main input,
main select {
  border-radius: 4px;
}

main .order-summary-message {
  background: #eee4cc;
  border: 1px solid #c3a663;
  border-left: 5px solid #b89b5e;
  color: #173f32;
  padding: 0.75rem;
}

@media (max-width: 600px) {
  main {
    margin-block: 0.35rem;
    padding: 0.9rem;
  }
}
`,
  elementSelector: "main",
  name: "garden-party-package-checkout",
  run: async (context) => {
    const { page, submit } = context;
    const gazeboId = await createListing(context, {
      fields: ["email"],
      name: "Gazebo",
      values: {
        location: "Garden Party Hire",
        max_attendees: "20",
        max_quantity: "5",
        unit_price: "225.00",
      },
    });
    const chairId = await createListing(context, {
      fields: ["email"],
      name: "Chair",
      values: {
        location: "Garden Party Hire",
        max_attendees: "400",
        max_quantity: "100",
        unit_price: "5.00",
      },
    });
    const festoonLightId = await createListing(context, {
      fields: ["email"],
      name: "Festoon-light set",
      values: {
        location: "Garden Party Hire",
        max_attendees: "40",
        max_quantity: "10",
        unit_price: "15.00",
      },
    });
    const groupId = await createGroup(context, {
      isPackage: true,
      listingIds: [gazeboId, chairId, festoonLightId],
      name: "Garden Party Package",
    });

    const editForm = `form[action="/admin/groups/${groupId}/edit"]`;
    await page.goto(`/admin/groups/${groupId}/edit`);
    await setFormValues(page, editForm, {
      [`package_price_${gazeboId}`]: "195.00",
      [`package_price_${chairId}`]: "4.00",
      [`package_price_${festoonLightId}`]: "10.00",
      [`package_qty_${gazeboId}`]: "1",
      [`package_qty_${chairId}`]: "20",
      [`package_qty_${festoonLightId}`]: "2",
    });
    await submit(editForm);

    await page.goto(await publicPathFrom(page, `/admin/groups/${groupId}`));
    await page.locator('[name="name"]').fill("Alex Morgan");
    await page.locator('[name="email"]').fill("alex@example.com");
    await page
      .locator(`[name="package_quantity_${groupId}"]`)
      .selectOption("1");
    await waitForOrderTotal(page, "£295");
  },
};
