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
  order: 10
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

      DICE has some features Chobble Tickets doesn't, and vice versa:

      **DICE has features Chobble Tickets doesn't:**

      - **Event discovery app** — DICE's mobile app helps fans discover events
        in their area, which can drive extra ticket sales
      - **Anti-scalping via app** — tickets are locked to the DICE app, making
        them harder to resell on secondary markets
      - **Waiting list system** — built-in waitlists for sold-out events with
        face-value resale

      **Chobble Tickets has features DICE doesn't:**

      - **End-to-end encryption** — attendee data is encrypted at rest and in
        transit, not just stored in a database
      - **No app required** — tickets work in any browser on any device
      - **Apple & Google Wallet tickets** — attendees can add tickets to their
        phone wallet without a separate app
      - **ICS calendar feeds** — subscribers get automatic calendar updates
      - **RSS feeds** — syndicate your events
      - **Pay-what-you-want pricing** — let attendees choose their price
      - **Daily/recurring event support** — built for events that repeat on a
        schedule
      - **Custom domain support** — use your own domain name
      - **Fully brandable checkout** — your brand, not DICE's
      - **Self-hosting option** — run the platform on your own servers for free
      - **Open source** — inspect, modify, and contribute to the code
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
      ## Pricing sources

      The pricing information on this page was verified in March 2026. DICE
      does not publicly disclose its fees — the estimate used here is based
      on industry analysis and publicly available comparisons.

      - [DICE](https://dice.fm) — fees negotiated per partnership (not publicly listed)
      - [Hi.Events DICE comparison](https://hi.events/dice-alternative) — third-party comparison estimating DICE fees

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, no app required, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
