---
title: Custom Questions - Chobble Tickets
meta_title: Custom Questions - Chobble Tickets
meta_description: Add multiple-choice or free-text questions to your events and collect answers at checkout, with answers shown throughout the admin interface.
permalink: /features/custom-questions/
eleventyNavigation:
  key: Custom Questions
  parent: Managing Events
  order: 10
blocks:
  - type: hero
    class: gradient
    content: |-
      # Custom questions

      Booking questions ask each customer for the details a listing needs, such as a meal choice, a T-shirt size or allergy information. A question can offer a fixed set of answers or a box for the customer's own words, and the booking cannot finish until it is answered.
  - type: split-image
    content: |
      ## Collect what you need to know

      Custom questions let you collect additional information beyond name and
      email at checkout. You add questions to any event, and attendees answer
      them during the booking process.

      Admins create questions with a set of answer options (for
      multiple-choice) or a text field (for free-text answers), then assign
      them to one or more events. For multi-event group bookings, questions
      are automatically deduplicated so attendees only answer each question
      once, even if the same question is assigned to multiple events in the
       group.

      All questions are required, keeping your data complete and consistent.
    figure_src: /images/screenshots/custom-questions-checkout.png
    figure_alt: Saturday Bread Workshop checkout filled in with bread-making experience and food allergy answers
    figure_caption: Collect structured choices and free-text details during booking.
  - type: markdown
    content: |
      ## Two answer types

      Questions support two answer types:

      - **Multiple-choice** - attendees pick from a set of options you define.
        Useful for meal preferences, t-shirt sizes, transport options, or
        accessibility requirements.
      - **Free text** - attendees type an answer into a text field. Useful
        for dietary details, emergency contact information, or anything that
        does not fit into a fixed list.

      A question cannot be switched between types once it has answers, so
      the data stays consistent. If you no longer want to offer a
      multiple-choice option, you can deactivate it instead of deleting it,
      which keeps historic answers valid.
  - type: markdown
    content: |
      ## Answers that affect the price

      You can link a multiple-choice answer to a
      [price modifier](/features/promo-codes-and-add-ons/). When an attendee
      picks that answer, the modifier applies automatically. This lets you
      offer pricing tiers - VIP upgrades, meal add-ons, parking, or
      concessions - directly from the question, without separately
      configuring a promo code or add-on.

      The answer-triggered modifier uses the same pricing engine as promo
      codes and add-ons, so stock limits, scoping, and the live running
      total all work the same way.

      An answer-triggered modifier can be capped per order. It can charge
      once per booking, or at most a set number of times, so a per-answer
      charge such as a delivery-area fee does not multiply across every
      ticket in one order.
  - type: markdown
    content: |
      ## Answers everywhere you need them

      Custom question answers are not buried in a separate report. They
      appear throughout the admin interface:

      - **Event view** - see answers when viewing an event's attendees
      - **Groups view** - answers visible in group booking summaries
      - **Attendees table** - answers appear as columns in the attendee list
      - **CSV export** - answers included in exported data
      - **Confirmation emails** - answers can be printed in the email with
        an [email template](/features/email-templates/)

      Free-text answers are encrypted with the same owner key as other
      personal data, so they are only readable when you are signed in.
  - type: markdown
    content: |
      ## Example

      A bakery runs a Saturday bread workshop and asks two questions: "How
      much bread have you made before?" with three fixed answers, and "Any
      food allergies?" as free text. The tutor downloads the attendee list
      the day before and sees each person's experience level and allergies
      in their own columns. One question can be shared by every workshop, so
      changing its wording once updates all of them.

      ## Limits

      Every question on a listing must be answered, so there are no optional
      questions. Answers are not included in [webhook](/features/webhooks/)
      messages, so another system that needs them has to read the attendee
      list through the [admin API](/features/admin-api/) or a CSV download.
      Deleting a question asks for its exact text, so it is not deleted by
      mistake, and this rule is one of the published [booking question test
      cases](https://github.com/chobbledotcom/tickets/blob/main/specs/catalogue/asking-buyers-a-question.feature).

  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Booking questions come with every hosted site, at £50 a year or £5 a month.
name: Custom Questions - Chobble Tickets
---
