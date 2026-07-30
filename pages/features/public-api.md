---
title: Public & Admin API - Chobble Tickets
meta_title: Public & Admin API - Chobble Tickets
meta_description: RESTful JSON API for building custom integrations and frontends, plus an authenticated admin API with API keys for reading and editing private data.
permalink: /features/public-api/
ticket_evidence_capture: api-keys-list
eleventyNavigation:
  key: Public API
  parent: Platform & Integrations
  order: 4
blocks:
  - type: hero
    class: gradient
    content: |-
      # Public & Admin API

      A RESTful JSON API with public endpoints for event listings and an authenticated admin API for reading and editing private data, so you can build custom frontends, integrations, and automations.
  - type: markdown
    content: |
      ## Build what you need

      The public API gives you access to event listings, availability data,
      and booking functionality. No API key is required for public endpoints.
      Make HTTP requests and get JSON back.

      This means you can build your own event listing page on your existing
      website, create a custom booking flow, or pull event data into any system
      that can make HTTP requests.

  - type: split-image
    content: |
      ## Keys for the admin API

      A key stands in for you, so another system can read and change what
      you sell without anybody signing in. The site shows the key once, when
      it is made, and from then on you see only the name you gave it.

      Keys are stored the way passwords are, as an HMAC hash, so the site
      does not hold the key either. You can take one back at any moment.
    figure_src: /images/screenshots/api-keys-list.png
    figure_alt: A screenshot of the API keys page, listing a key named Shopfront that has never been used, above the form for making another
    figure_caption: 'The list names each key the owner has handed out, and never shows the key itself. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/servicing/letting-another-system-in.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## What the admin API can do

      The [admin API](/features/admin-api/) gives you full CRUD control over
      events (create, update, list, delete, and toggle active state), with
      attendee endpoints coming next.

      ## Embeddable widget

      If you don't want to build a custom integration, Chobble Tickets also
      includes an embeddable iframe widget. Drop a snippet of HTML into your
      website and your events appear inline.

      Check the [embed documentation](https://chobbledotcom.github.io/tickets/docs/embed.ts)
      for widget setup, and the full
      [API documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html)
      for endpoint details.
  - type: cta
    button:
      text: Read the API Docs
      href: https://chobbledotcom.github.io/tickets/doc.ts/index.html
      variant: secondary
      size: lg
    content: |-
      ## Integrate anywhere

      Use the API to build exactly what you need.
name: Public & Admin API - Chobble Tickets
---
