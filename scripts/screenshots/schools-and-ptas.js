import {
  createListing,
  createQuestion,
  enableFeature,
  publicPathFor,
  setFormValues,
  waitForOrderTotal,
} from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 6px;
  --color-accent: #f6c945;
  --color-bg: #f8f5ea;
  --color-bg-secondary: #f3df98;
  --color-link: #16345f;
  --color-secondary: #f6c945;
  --color-secondary-accent: #f6c9452b;
  --color-shadow: #102b4d24;
  --color-table: #16345f;
  --color-text: #172b49;
  --color-text-secondary: #52627a;
  --font-family: Arial, Helvetica, sans-serif;
}

body {
  background: #16345f;
}

main {
  background: #fffdf7;
  border: 1px solid #ddcfaa;
  border-top: 8px solid var(--color-accent);
  box-shadow: 0 10px 24px var(--color-shadow);
  margin-block: 0.75rem;
  padding: 1.1rem;
}

main h1 {
  color: #16345f;
  font-size: 1.65rem;
}

main input,
main select,
main textarea {
  background: #fffdf7;
  border-color: #9aa6b6;
}

main .custom-question {
  background: #fff8dc;
  border-color: #e3c768;
  padding: 0.75rem;
}

main button[type="submit"] {
  background: #f6c945;
  border-color: #d7aa22;
  color: #16345f;
  font-weight: 700;
}

main .order-summary-message {
  background: #edf2f8;
  border-left: 5px solid #f6c945;
  color: #16345f;
  padding: 0.75rem;
}
`,
  elementSelector: "main",
  name: "oakfield-primary-summer-disco-checkout",
  run: async (context) => {
    await enableFeature(context, "questions");
    const listingId = await createListing(context, {
      name: "Oakfield Primary Summer Disco",
      values: {
        location: "Oakfield Primary School",
        max_attendees: "120",
        max_quantity: "2",
        unit_price: "3.00",
      },
    });
    const classQuestionId = await createQuestion(context, {
      assignAll: true,
      displayType: "free_text",
      text: "Class",
    });
    const allergyQuestionId = await createQuestion(context, {
      assignAll: true,
      displayType: "free_text",
      text: "Allergy details",
    });

    await context.page.goto(await publicPathFor(context.page, listingId));
    await setFormValues(context.page, "main form", {
      name: "Amira Khan",
      [`question_${classQuestionId}`]: "4B",
      [`question_${allergyQuestionId}`]: "No nuts",
    });
    await context.page
      .locator(`[name="quantity_${listingId}"]`)
      .selectOption("1");
    await waitForOrderTotal(context.page, "£3");
  },
};
