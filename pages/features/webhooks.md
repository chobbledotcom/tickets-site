---
layout: design-system-base.html
title: Webhooks - Chobble Tickets
meta_title: Webhooks - Chobble Tickets
meta_description: Get POST notifications on every booking. Integrate Chobble Tickets with Slack, Zapier, or any tool that accepts webhooks.
permalink: /features/webhooks/
eleventyNavigation:
  key: Webhooks
  parent: Features
  order: 5
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Webhooks
    lead: >-
      Get a POST request every time someone books a ticket. Connect Chobble
      Tickets to Slack, Zapier, your CRM, or anything else.

  - type: markdown
    content: |
      ## Real-Time Notifications

      Configure a webhook URL per event. When someone registers, Chobble
      Tickets sends a POST request with the attendee details, ticket
      information, and pricing data.

      Use this to:

      - Post new bookings to a Slack channel
      - Add attendees to a mailing list
      - Update a spreadsheet or CRM
      - Trigger custom automations via Zapier or n8n

      ## Webhook Payload

      The webhook includes attendee information, event details, ticket URLs,
      and payment data - everything you need to integrate with external
      systems.

      See the [webhooks documentation](https://chobbledotcom.github.io/tickets/doc.ts/docs/webhooks.ts)
      for payload format and delivery details.

  - type: cta
    title: Automate Your Workflow
    description: Connect Chobble Tickets to your existing tools with webhooks.
    button:
      text: Get Started
      href: https://tix.chobble.com
      variant: secondary
      size: lg
---
