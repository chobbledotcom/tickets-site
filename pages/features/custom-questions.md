---
layout: design-system-base.html
title: Custom Questions - Chobble Tickets
meta_title: Custom Questions - Chobble Tickets
meta_description: Add multiple-choice questions to your events and collect structured answers from attendees at checkout, with answers visible throughout the admin interface.
permalink: /features/custom-questions/
eleventyNavigation:
  key: Custom Questions
  parent: Managing Events
  order: 10
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: Custom Questions
    lead: >-
      Create multiple-choice questions and assign them to events, so you can
      collect the information you need from attendees at checkout.

  - type: markdown
    content: |
      ## Collect what you need to know

      Sometimes you need more than just a name and email. Custom questions let
      you add multiple-choice questions to any event, so attendees answer them
      during the booking process.

      Admins create questions with a set of answer options, then assign them to
      one or more events. For multi-event group bookings, questions are
      automatically deduplicated so attendees only answer each question once,
      even if the same question is assigned to multiple events in the group.

      All questions are required, keeping your data complete and consistent.

  - type: markdown
    content: |
      ## Answers everywhere you need them

      Custom question answers aren't buried in a separate report. They appear
      throughout the admin interface:

      - **Event view** - see answers when viewing an event's attendees
      - **Groups view** - answers visible in group booking summaries
      - **Attendees table** - answers appear as columns in the attendee list
      - **CSV export** - answers included in exported data
      - **Webhooks** - answers sent with webhook payloads for integrations

  - type: markdown
    content: |
      ## Multiple choice for now

      Custom questions currently support multiple-choice answers only. This
      keeps the checkout fast and the data structured, which is useful for
      things like meal preferences, t-shirt sizes, transport options, or
      accessibility requirements.

      Free-text questions and questions that affect booking values may come in
      the future.

  - type: cta
    title: Collect the answers you need
    description: Add custom questions to your events and see answers across your admin interface.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
