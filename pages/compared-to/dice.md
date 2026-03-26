---
layout: design-system-base.html
competitor_key: dice
title: Chobble Tickets vs DICE
meta_title: Open Source Alternative to DICE | Chobble Tickets
meta_description: Looking for an alternative to DICE? Chobble Tickets offers flat annual pricing with no per-ticket fees, full data ownership, no app required, and no platform lock-in. Compare pricing and features.
permalink: /compared-to/dice/
eleventyNavigation:
  key: vs DICE
  parent: Compared To
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs DICE
    lead: >-
      DICE is a mobile-first ticketing platform popular with music venues and
      live events. Here's how a small, open source alternative compares on
      pricing, features, and data ownership.

  - type: markdown
    content: |
      ## Pricing comparison

      [DICE](https://dice.fm) doesn't publicly disclose its fees — pricing is
      negotiated per partnership, so what you pay depends on your deal. Industry
      estimates suggest fees of around 10% per ticket (bundled, including
      payment processing), though your actual rate may differ.

      Chobble Tickets is a flat £50/year (£25 for charities and community
      groups) with no per-ticket fees at all. You only pay Stripe or Square
      processing fees on top. If you sell more than about 35 tickets at £15
      each in a year, Chobble Tickets is already cheaper — and the savings
      grow quickly from there.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Data ownership and privacy

      DICE owns the customer relationship. Your attendees become DICE users
      first and your customers second. DICE markets other events to your
      audience through their app, and your data lives within their ecosystem.

      With Chobble Tickets, attendee data is encrypted with hybrid RSA/AES
      encryption and stays under your control. There's no platform trying to
      cross-promote other events to your audience, and no marketing emails
      sent to your attendees.

      ## Payouts

      DICE pays out after your event ends. You're essentially lending DICE
      your ticket revenue until the event is over.

      Chobble Tickets uses Stripe or Square directly, so payments go straight
      to your account with standard processing times. You're always in control
      of your own payment processor account.

      ## The app requirement

      DICE requires attendees to download their mobile app to access tickets.
      This adds friction for buyers — not everyone wants another app on their
      phone just to attend a gig. It also means DICE controls the attendee
      experience, not you.

      Chobble Tickets works in any browser on any device. Attendees get their
      tickets via email with a QR code, and can add them to Apple or Google
      Wallet. No app download required.

      ## Feature comparison

      **Both sites share some features:**

      - Online ticket sales with payment processing
      - QR code or barcode scanning for entry
      - Email or in-app confirmations to ticket holders
      - Capacity management to prevent overselling
      - Refund processing
      - Apple Pay and Google Pay at checkout

      DICE has some features Chobble Tickets doesn't, and vice versa:

      **[DICE](https://dice.fm/partners) has features Chobble Tickets
      doesn't:**

      - **Event discovery app** — DICE's mobile app helps fans discover
        events in their area based on their music tastes, location, and
        past attendance, which can drive extra ticket sales you wouldn't
        get on your own
      - **Spotify and Apple Music integration** — personalised event
        recommendations based on fans' listening history, plus checkout
        through Spotify and YouTube
      - **Anti-scalping via app lock** — tickets are bound to the DICE app
        and can't be screenshotted or forwarded, making them essentially
        impossible to resell on secondary markets
      - **Waiting list with face-value resale** — fans can join a waitlist
        for sold-out events, and if a ticket holder can't attend, DICE
        automatically resells their ticket at face value
      - **Dynamic pricing** — automatically adjust ticket prices based on
        demand
      - **All-in pricing** — fees are bundled into the displayed price so
        fans see the total cost upfront with no surprise charges at
        checkout
      - **Marketing attribution** — track which channels and campaigns are
        driving ticket sales via the
        [MIO dashboard](https://mio.dice.fm)
      - **Algorithmic event recommendations** — personalised discover feed
        for each fan based on their tastes and location
      - **Large-scale access hardware** — [DICE
        Access](https://dice.fm/partners) system with laser scanning
        hardware, zone-based scanning, and time-slot scanning
      - **Real-time audience insights** — segmentation by genre, spend,
        and geography via the MIO partner dashboard
      - **DICE TV** — livestreaming platform for virtual events
      - **Multi-currency support** — sell in different currencies across
        DICE's international markets (UK, US, Europe, Australia)
      - **Partner API** — a [GraphQL Ticket Holders
        API](https://partners-endpoint.dice.fm/graphql/docs/index.html)
        for reading events, tickets, orders, returns, and transfers

      **Chobble Tickets has features DICE doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** — attendee data is
        encrypted at rest with hybrid RSA-OAEP + AES-256-GCM
      - **No app required** — tickets work in any browser on any device
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** —
        attendees can add tickets to their phone wallet without a separate app
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** —
        subscribers get automatic calendar updates
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** — syndicate your
        events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** — let
        attendees choose their price
      - **[Daily/recurring event support](/features/daily-events/)** — built
        for events that repeat on a schedule with per-date capacity
      - **[Custom domain support](/features/custom-domain/)** — use your own
        domain name
      - **Fully brandable checkout** — your brand, not DICE's
      - **Self-hosting option** — run the platform on your own servers for free
      - **[Open source](/features/open-source/)** — inspect, modify, and
        contribute to the code under AGPLv3
      - **[Custom questions](/features/custom-questions/)** — add
        multiple-choice questions to events and collect answers at checkout
      - **[Public & admin API](/features/public-api/)** — RESTful JSON API
        for building custom integrations, plus [authenticated admin
        API](/features/admin-api/) with full event CRUD via API keys
      - **[Webhooks](/features/webhooks/)** — outbound POST on every
        registration
      - **[Event groups with tiered ticketing](/features/groups/)** —
        organise related events into collections for multi-event bookings
        with a single checkout, and create ticket tiers sharing a venue
        capacity cap
      - **[Custom email providers](/features/email-providers/)** — use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain, not the platform's
      - **[Customisable email templates](/features/email-templates/)** —
        full control over confirmation emails with Liquid syntax for a
        fully white-label experience
      - **[Embeddable widget](/features/embeddable-widget/)** — drop an
        iframe into your existing website
      - **No marketing emails to attendees** — your audience stays yours
      - **Transparent pricing** — no negotiations, no surprises

      ## When DICE might be better

      - You want access to DICE's event discovery platform and mobile app
        audience to drive extra ticket sales
      - You're running large music events and want DICE's app-based
        anti-scalping protection
      - You have very low volume and prefer negotiated per-ticket fees over
        an annual subscription
      - You want DICE's built-in waitlist and face-value resale features

      ## When Chobble Tickets might be better

      - You want predictable, flat-rate pricing with no per-ticket fees
      - You don't want attendees forced to download an app
      - Privacy and encryption matter to you
      - You don't want a platform marketing to your attendees or promoting
        competing events
      - You're a community group, charity, or school (£25/year)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value open source and the ability to self-host
      - You want full control over your brand and checkout experience
      - You're selling enough tickets that per-ticket fees add up quickly

  - type: markdown
    content: |
      ## Who owns DICE?

      DICE was founded in 2014 by Phil Hutcheon in London. It raised
      approximately $238 million in venture capital across multiple rounds,
      with investors including SoftBank Vision Fund, Exor Ventures (the
      Agnelli family investment vehicle), and Tony Fadell (iPod inventor).

      In June 2025, DICE was acquired by
      [Fever](https://feverup.com), a global live entertainment discovery
      platform last valued at $1.8 billion. Phil Hutcheon remains as CEO.
      Prior to the acquisition, DICE's 2022 financials included a
      going-concern warning, and in 2024 Bloomberg reported the company was
      in talks to sell a stake as SoftBank sought to exit its position.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) — a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on Chobble
      as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. DICE
      does not publicly disclose its fees — the estimate used here is based
      on industry analysis and publicly available comparisons.

      - [DICE](https://dice.fm) — fees negotiated per partnership (not publicly listed)
      - [DICE for partners](https://dice.fm/partners) — DICE's partner information and features
      - [MIO dashboard](https://mio.dice.fm) — DICE's partner analytics dashboard
      - [DICE Ticket Holders API](https://partners-endpoint.dice.fm/graphql/docs/index.html) — GraphQL API documentation
      - [Hi.Events DICE comparison](https://hi.events/dice-alternative) — third-party comparison estimating DICE fees
      - [Chobble Tickets features](/features/)
      - [Fever acquires DICE](https://variety.com/2025/music/news/fever-acquires-dice-securing-100-million-funding-1236419015/) — acquisition details

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, no app required, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
