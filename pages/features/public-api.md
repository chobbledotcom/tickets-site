---
layout: design-system-base.html
title: Public API - Chobble Tickets
meta_title: Public API - Chobble Tickets
meta_description: RESTful JSON API for building custom integrations, frontends, and automations with Chobble Tickets.
permalink: /features/public-api/
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Public API
    lead: >-
      A RESTful JSON API that requires no authentication for public data. Build
      custom frontends, embed event listings, or integrate with your existing
      tools.

  - type: markdown
    content: |
      ## Build What You Need

      The public API gives you access to event listings, availability data, and
      booking functionality. No API key required for public endpoints - just
      make HTTP requests and get JSON back.

      This means you can build your own event listing page on your existing
      website, create a custom booking flow, or pull event data into any system
      that can make HTTP requests.

      ## Embeddable Widget

      Don't want to build a custom integration? Chobble Tickets also includes
      an embeddable iframe widget. Drop a snippet of HTML into your website and
      your events appear inline.

      Check the [embed documentation](https://chobbledotcom.github.io/tickets/doc.ts/docs/embed.ts)
      for widget setup, and the full
      [API documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html)
      for endpoint details.

  - type: cta
    title: Integrate Anywhere
    description: Use the API to build exactly what you need.
    button:
      text: Read the API Docs
      href: https://chobbledotcom.github.io/tickets/doc.ts/index.html
      variant: secondary
      size: lg
---
