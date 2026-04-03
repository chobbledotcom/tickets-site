---
layout: design-system-base.html
title: Webhooks - Chobble Tickets
meta_title: Webhooks - Chobble Tickets
meta_description: Get POST notifications on every booking and integrate Chobble Tickets with Slack, Zapier, or any tool that accepts webhooks.
permalink: /features/webhooks/
eleventyNavigation:
  key: Webhooks
  parent: Platform & Integrations
  order: 5
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Webhooks
    lead: >-
      Get a POST request every time someone books a ticket, and connect
      Chobble Tickets to Slack, Zapier, your CRM, or anything else.

  - type: markdown
    content: |
      ## Real-time notifications

      Configure a webhook URL per event, or set a global webhook URL in
      settings that fires for all events. When someone registers, Chobble
      Tickets sends a POST request with the attendee details, ticket
      information, and pricing data, with multi-event bookings sending one
      consolidated webhook.

      Use this to:

      - Post new bookings to a Slack channel
      - Add attendees to a mailing list
      - Update a spreadsheet or CRM
      - Trigger custom automations via Zapier or n8n

      ## Webhook payload

      The webhook includes attendee information, event details, ticket URLs,
      and payment data - everything you need to integrate with external
      systems.

      See the [webhooks documentation](https://chobbledotcom.github.io/tickets/docs/webhooks.ts)
      for payload format and delivery details.

  - type: markdown
    content: |
      > "Webhooks allow you to set up connections and integrate with other
      > systems. The system is open source, it promotes integration to other
      > platforms and software, they're open to collaboration and will share
      > development and it has sooo much potential."

      [Read more reviews &rarr;](/reviews/)

  - type: cta
    title: Automate your workflow
    description: Connect Chobble Tickets to your existing tools with webhooks.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
