---
title: Custom Questions - Chobble Tickets
meta_title: Custom Questions - Chobble Tickets
meta_description: Add multiple-choice or free-text questions to your events and collect answers from attendees at checkout, with answers visible throughout the admin interface.
permalink: /features/custom-questions/
eleventyNavigation:
  key: Custom Questions
  parent: Managing Events
  order: 10
blocks:
  - type: hero
    class: gradient
    content: |-
      # Custom Questions

      Add custom questions to your events and collect the information you need from attendees at checkout. Choose from multiple-choice or free-text answers.
  - type: markdown
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
  - type: markdown
    content: |
      ## Answers everywhere you need them

      Custom question answers are not buried in a separate report. They
      appear throughout the admin interface:

      - **Event view** - see answers when viewing an event's attendees
      - **Groups view** - answers visible in group booking summaries
      - **Attendees table** - answers appear as columns in the attendee list
      - **CSV export** - answers included in exported data
      - **Webhooks** - answers sent with webhook payloads for integrations

      Free-text answers are encrypted with the same owner key as other
      personal data, so they are only readable when you are signed in.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Collect the answers you need

      Add custom questions to your events and see answers across your admin interface.
name: Custom Questions - Chobble Tickets
---
