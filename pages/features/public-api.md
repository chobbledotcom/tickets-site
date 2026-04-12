---
layout: design-system-base.html
title: Public & Admin API - Chobble Tickets
meta_title: Public & Admin API - Chobble Tickets
meta_description: RESTful JSON API for building custom integrations and frontends, plus an authenticated admin API with API keys for reading and editing private data.
permalink: /features/public-api/
eleventyNavigation:
  key: Public API
  parent: Platform & Integrations
  order: 4
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Public & Admin API
    lead: >-
      A RESTful JSON API with public endpoints for event listings and an
      authenticated admin API for reading and editing private data, so you
      can build custom frontends, integrations, and automations.

  - type: markdown
    content: |
      ## Build what you need

      The public API gives you access to event listings, availability data, and
      booking functionality. No API key required for public endpoints - just
      make HTTP requests and get JSON back.

      This means you can build your own event listing page on your existing
      website, create a custom booking flow, or pull event data into any system
      that can make HTTP requests.

      ## Admin API

      Admins can create API keys to access private data and manage their
      site programmatically. The [admin API](/features/admin-api/) gives
      you full CRUD control over events - create, update, list, delete,
      and toggle active state - with attendee endpoints coming next.

      API keys are stored securely using HMAC hashing (the same approach
      used for passwords), so the raw key is never stored. See the
      [dedicated admin API page](/features/admin-api/) for full details.

      ## Embeddable widget

      If you don't want to build a custom integration, Chobble Tickets also
      includes an embeddable iframe widget - just drop a snippet of HTML into
      your website and your events appear inline.

      Check the [embed documentation](https://chobbledotcom.github.io/tickets/docs/embed.ts)
      for widget setup, and the full
      [API documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html)
      for endpoint details.

  - type: cta
    title: Integrate anywhere
    description: Use the API to build exactly what you need.
    button:
      text: Read the API Docs
      href: https://chobbledotcom.github.io/tickets/doc.ts/index.html
      variant: secondary
      size: lg
---
