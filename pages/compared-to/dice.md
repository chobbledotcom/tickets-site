---
layout: design-system-base.html
competitor_key: dice
title: Chobble Tickets vs DICE
meta_title: Open Source Alternative to DICE | Chobble Tickets
meta_description: "Chobble Tickets vs DICE: flat annual pricing with no per-ticket fees, encrypted attendee data, and no app required."
permalink: /compared-to/dice/
eleventyNavigation:
  key: vs DICE
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    title: Chobble Tickets vs DICE
    lead: >-
      DICE is a mobile-first ticketing platform popular with music venues and
      live events. Here is how Chobble Tickets compares on pricing, features,
      and data ownership.

  - type: markdown
    content: |
      ## Pricing comparison

      [DICE](https://dice.fm) doesn't put its prices on its website - you have
      to talk to them and agree a deal. Industry estimates suggest fees of
      around 10% per ticket, but what you pay will depend on your
      agreement.

      Chobble Tickets is a flat £50/year (£25 for charities and community
      groups) with [no per-ticket fees](/features/no-per-ticket-fees/) at all. You only pay Stripe or Square
      processing fees on top. If you sell more than a few dozen tickets in a
      year at typical prices, Chobble Tickets is already cheaper, and the
      savings grow the more you sell.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Data ownership and privacy

      Attendees who buy through DICE become DICE users. DICE markets other
      events to them through the app. Your attendee data is stored on DICE's
      platform.

      With Chobble Tickets, attendee data is encrypted with hybrid RSA/AES
      encryption and stays under your control. Chobble Tickets does not
      market other events to your attendees and does not send them marketing
      emails.

      ## Payouts

      DICE pays out after your event ends. You're essentially lending DICE
      your ticket revenue until the event is over.

      Chobble Tickets uses Stripe or Square directly, so payments go straight
      to your account with standard processing times. You're always in control
      of your own payment processor account.

      ## The app

      DICE is built around its mobile app. Tickets live in the app as a QR
      code tied to your phone number. This is how their anti-scalping system
      works: tickets are locked to the app, so they cannot be screenshotted
      and resold. If you can't use the app, DICE does offer limited web
      access as a fallback, but the app is very much the main event.

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
      - Upfront, all-in pricing (the price you see is the price you pay - no
        surprise fees at checkout)

      DICE has some features Chobble Tickets doesn't, and vice versa:

      **[DICE](https://dice.fm/partners) has features Chobble Tickets
      doesn't:**

      - **Event discovery app** - DICE's mobile app helps fans discover
        events in their area based on their music tastes, location, and
        past attendance, which can drive extra ticket sales you wouldn't
        get on your own
      - **Spotify and Apple Music integration** - personalised event
        recommendations based on fans' listening history, plus the option
        to buy tickets through Spotify
      - **Anti-scalping via app lock** - tickets are tied to the DICE app
        and cannot be screenshotted or forwarded, making them very hard to
        resell on secondary markets
      - **Waiting list with face-value resale** - fans can join a waitlist
        for sold-out events, and if a ticket holder can't attend, DICE
        automatically resells their ticket at the original price
      - **Marketing attribution** - track which channels and campaigns are
        driving ticket sales via the
        [MIO dashboard](https://mio.dice.fm)
      - **Algorithmic event recommendations** - personalised discover feed
        for each fan based on their tastes and location
      - **Large-scale access hardware** - [DICE
        Access](https://dice.fm/partners) system with laser scanning
        hardware, zone-based scanning, and time-slot scanning
      - **Real-time audience insights** - segmentation by genre, spend,
        and geography via the MIO partner dashboard
      - **DICE TV** - livestreaming platform for virtual events
      - **Multi-currency support** - sell in different currencies across
        DICE's international markets (UK, US, Europe, Australia)
      - **Partner API** - a [GraphQL Ticket Holders
        API](https://partners-endpoint.dice.fm/graphql/docs/index.html)
        for reading events, tickets, orders, returns, and transfers

      **Chobble Tickets has features DICE doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** - attendee data is
        encrypted at rest with hybrid RSA-OAEP + AES-256-GCM
      - **No app required** - tickets work in any browser on any device
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets to their phone wallet without a separate app
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic calendar updates
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate your
        events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        attendees choose their price
      - **[Daily/recurring event support](/features/daily-events/)** - built
        for events that repeat on a schedule with per-date capacity
      - **[Custom domain support](/features/custom-domain/)** - get a
        host-provided subdomain instantly, or point your own domain
      - **Fully brandable checkout** - your brand, not DICE's
      - **Self-hosting option** - run the platform on your own servers for free
      - **[Open source](/features/open-source/)** - inspect, modify, and
        contribute to the code under AGPLv3
      - **[Custom questions](/features/custom-questions/)** - add
        multiple-choice questions to events and collect answers at checkout
      - **[Public & admin API](/features/public-api/)** - RESTful JSON API
        for building custom integrations, plus [authenticated admin
        API](/features/admin-api/) with full event CRUD via API keys
      - **[Webhooks](/features/webhooks/)** - outbound POST on every
        registration
      - **[Event groups with tiered ticketing](/features/groups/)** -
        organise related events into collections for multi-event bookings
        with a single checkout, and create ticket tiers sharing a venue
        capacity cap
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain, not the platform's
      - **[Customisable email templates](/features/email-templates/)** -
        full control over confirmation emails with Liquid syntax for a
        fully white-label experience
      - **[Embeddable widget](/features/embeddable-widget/)** - drop an
        iframe into your existing website
      - **No marketing emails to attendees** - your audience stays yours
      - **Transparent pricing** - no negotiations, no surprises

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

      DICE was started in London and grew into one of the most well-known
      music ticketing apps in the world. Along the way it raised a lot of
      money from big investors, including SoftBank, one of the world's
      largest investment funds. It was then bought by
      [Fever](https://feverup.com), a large live entertainment company that
      helps people discover events in cities around the world.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction),
      a type of UK company that exists to benefit the community, not to
      make profit for shareholders. All of Chobble's code is public, and
      anyone can run the platform on their own servers.

  - type: markdown
    content: |
      ## Pricing sources

      DICE does not publicly disclose its fees. The estimate used here is
      based on industry analysis and publicly available comparisons. Check
      the links below for the latest information.

      - [DICE](https://dice.fm) - fees negotiated per partnership (not publicly listed)
      - [DICE for partners](https://dice.fm/partners) - DICE's partner information and features
      - [MIO dashboard](https://mio.dice.fm) - DICE's partner analytics dashboard
      - [DICE Ticket Holders API](https://partners-endpoint.dice.fm/graphql/docs/index.html) - GraphQL API documentation
      - [Hi.Events DICE comparison](https://hi.events/dice-alternative) - third-party comparison estimating DICE fees
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, no app required, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
