import {
  createListing,
  createQuestion,
  enableFeature,
  publicPathFor,
  setFormValues,
} from "./helpers.js";

export default {
  css: `
:root {
  --border-radius: 8px;
  --color-accent: #f2dfbd;
  --color-bg: #f6efe3;
  --color-bg-secondary: #ead8bb;
  --color-link: #76502f;
  --color-secondary: #9a5b32;
  --color-secondary-accent: #9a5b3218;
  --color-shadow: #5d40221c;
  --color-table: #76502f;
  --color-text: #392d23;
  --color-text-secondary: #76685b;
  --font-family: Georgia, "Times New Roman", serif;
  --line-height: 1.55;
}

main {
  background: #fffdf8;
  border: 1px solid #d9c29e;
  border-radius: 12px;
  box-shadow: 0 8px 22px var(--color-shadow);
  margin-block: 0.5rem;
  padding: 1.1rem;
}

main h1 {
  color: #684326;
  font-size: 1.65rem;
  margin-bottom: 0.25rem;
}

main form {
  gap: 0.7rem;
}

main input,
main select,
main button,
main fieldset {
  border-radius: 7px;
}

main .custom-question {
  background: #fbf4e8;
  border-color: #ddc6a1;
  margin-block: 0.15rem;
  padding: 0.7rem 0.8rem;
}

main label.custom-question,
main .custom-question legend {
  color: #5d3d25;
}

main button[type="submit"] {
  font-family: Arial, sans-serif;
  font-weight: 700;
}

main .running-total {
  display: none;
}
`,
  elementSelector: "main",
  name: "custom-questions-checkout",
  run: async (context) => {
    await enableFeature(context, "questions");
    const listingId = await createListing(context, {
      name: "Saturday Bread Workshop",
      values: {
        location: "The Bakehouse Kitchen",
        max_attendees: "12",
        max_quantity: "2",
        unit_price: "35.00",
      },
    });
    const experienceQuestionId = await createQuestion(context, {
      answers: ["Beginner", "Experienced baker"],
      displayType: "radio",
      text: "What is your bread-making experience?",
    });
    const allergiesQuestionId = await createQuestion(context, {
      displayType: "free_text",
      text: "Do you have any food allergies?",
    });

    await context.page.goto(await publicPathFor(context.page, listingId));
    await setFormValues(context.page, "main form", {
      name: "Priya Shah",
      [`question_${allergiesQuestionId}`]: "Nut allergy",
    });
    await context.page
      .locator(`[name="quantity_${listingId}"]`)
      .selectOption("1");
    await context.page
      .getByRole("radio", { name: "Beginner", exact: true })
      .check();
    const allergyValue = await context.page
      .locator(`[name="question_${allergiesQuestionId}"]`)
      .inputValue();
    if (allergyValue !== "Nut allergy") {
      throw new Error("Could not fill the allergy answer.");
    }
  },
};
