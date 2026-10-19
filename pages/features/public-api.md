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

      Chobble Tickets has two APIs, ways for other software to talk to your site. The public API lets any website read your listings and availability and make bookings without a key, and the admin API lets a program holding a key manage the site.
  - type: markdown
    content: |
      ## Build what you need

      The public API is switched off until the owner turns it on in the
      advanced settings. Once on, it answers five kinds of request without a
      key: the list of listings, one listing, the dates with places left on
      a listing, a package, and a booking for a listing or package. Requests
      and answers are in JSON, a plain-text data format most programming
      languages read.

      This means you can build your own event listing page on your existing
      website, create a custom booking flow, or pull event data into any system
      that can make HTTP requests.

  - type: split-image
    content: |
      ## Keys for the admin API

      A key stands in for you, so another system can read and change what
      you sell without anybody signing in. The site shows the key once, when
      it is made, and from then on you see only the name you gave it.

      Anyone holding the key can do what you can do, so keep it on a server
      you control rather than in the code a browser downloads. A page on
      your own website should read the public endpoints, which need no key.

      Chobble Tickets does not store the key. It stores a scrambled version
      it can check a key against, the same way it stores passwords, so a copy
      of the database does not hand anybody your key. You can take one back
      at any moment.
    figure_src: /images/screenshots/api-keys-list.png
    figure_alt: A screenshot of the API keys page, listing a key named Shopfront that has never been used, above the form for making another
    figure_caption: 'The list names each key the owner has handed out, and never shows the key itself. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/access/letting-another-system-in.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## What the admin API can do

      The [admin API](/features/admin-api/) lists, creates, changes and
      removes listings, groups, holidays and listing options, takes listings
      off sale and back on, and reads a listing's attendees.

      ## Example

      A web designer builds a custom calendar for a dance school's own
      website. The page calls `GET /api/listings` to show the term's
      classes and `/api/listings/:slug/availability` to grey out full dates,
      then sends a booking to `/api/listings/:slug/book`. A booking made this
      way follows the same capacity rules as one made on the booking site,
      and the [published API booking
      tests](https://github.com/chobbledotcom/tickets/blob/main/specs/bookings/booking-through-the-api.feature)
      check that a stay booked through the API holds every day it covers.

      ## Limits

      The public API cannot read attendees, income or settings, which need
      the admin API and a key. Building on either API takes a developer, so
      organisers without one can use the embed codes below instead.

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
      ## Read the documentation

      The API documentation lists every call, with example requests and answers.
name: Public & Admin API - Chobble Tickets
---
