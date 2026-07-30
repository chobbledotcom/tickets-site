---
competitor_key: dice
title: DICE Alternative
meta_title: Open Source & Flat Fee DICE Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and DICE on buyer and organiser fees, app requirements, event discovery, resale, attendee data and ticketing features.
permalink: /compared-to/dice/
eleventyNavigation:
  key: vs DICE
  parent: Compared To
provider_facts:
  name: DICE
  kind: ticketing
  calculator_keys:
    - dice
  last_reviewed: "2026-07-29"
  registration_country: not-reviewed
  ethical_basis:
    - not-reviewed
  per_ticket_platform_fee: not-reviewed
  managed_pricing: not-reviewed
  white_label: not-reviewed
  custom_domain: not-reviewed
  public_website: not-reviewed
  self_hosting: not-reviewed
  source_code: not-reviewed
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: built-in
  attendee_cross_marketing: personalised-recommendations
  notes:
    event_marketplace: "DICE presents a browsable discovery feed of events from many promoters, with pages per city such as dice.fm/browse. Whether a promoter's event is listed automatically or by opt-in was not documented. Checked 29 July 2026."
    attendee_cross_marketing: "The UK privacy policy describes using music-library and location data to personalise recommendations about events nearby, and communicating by email, push and in-app message. Marketing from third-party event partners is described as consent-based. Checked 29 July 2026."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs DICE

      DICE is a mobile-first ticketing platform popular with music venues and live events. Here is how Chobble Tickets compares on pricing, features, and data ownership.
  - type: markdown
    content: |
      ## Open source & flat fee DICE alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. DICE is closed source and does not publish its code.

      DICE does not publish its fees, so rates are agreed case by case, and
      tickets live in the DICE app. Chobble Tickets costs £50/year or
      £5/month, and tickets are sent by email with [Apple and Google Wallet
      passes](/features/apple-wallet/), so attendees do not need to install
      an app.
  - type: markdown
    content: |
      ## Pricing comparison

      [DICE](https://dice.fm) doesn't put its prices on its website. You
      have to talk to them and agree a deal. Industry estimates suggest fees of
      around 10% per ticket, but what you pay will depend on your
      agreement.

      Chobble Tickets is a flat £50/year or £5/month (£25/year for charities and community
      groups) with [no per-ticket platform fees](/features/no-per-ticket-fees/). You also pay Stripe, Square or SumUp
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
  - type: markdown
    content: |
      ## Payouts

      DICE pays out after your event ends. You're essentially lending DICE
      your ticket revenue until the event is over.

      Chobble Tickets uses Stripe, Square, or SumUp directly, so payments go straight
      to your account with standard processing times. You're always in control
      of your own payment processor account.
  - type: markdown
    content: |
      ## The app

      DICE is built around its mobile app. Tickets live in the app as a QR
      code tied to your phone number. This is how their anti-scalping system
      works: tickets are locked to the app, so they cannot be screenshotted
      and resold. If you can't use the app, DICE does offer limited web
      access as a fallback, but the app is very much the main event.

      Chobble Tickets works in any browser on any device. Attendees get their
      tickets via email with a QR code, and can add them to Apple or Google
      Wallet. No app download required.
  - type: markdown
    content: |
      ## Feature comparison
  - type: markdown
    content: |
      ### Both sites share some features

      - Online ticket sales with payment processing
      - QR code or barcode scanning for entry
      - Email or in-app confirmations to ticket holders
      - Event capacity limits
      - Refund processing
      - Apple Pay and Google Pay at checkout
      - Upfront, all-in pricing (the price you see is the price you pay,
        with no surprise fees at checkout)

      DICE has some features Chobble Tickets doesn't, and vice versa:

  - type: markdown
    content: |
      ### [DICE](https://dice.fm/partners) has features Chobble Tickets doesn't

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
  - type: markdown
    content: |
      ### Chobble Tickets has features DICE doesn't

      - **[Encryption at rest](/features/encrypted/)** - attendee data is
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
      - **[Public-facing website and CMS](/features/your-public-website/)**
        a homepage, content pages, news posts, and a contact form with
        spam protection, edited from the admin panel in Markdown with
        [custom CSS](/features/customising-your-site/)
      - **Fully brandable checkout** - your brand, not DICE's
      - **Self-hosting option** - run the platform on selected infrastructure without a Chobble software licence fee
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
  - type: markdown
    content: |
      ## When DICE might be better

      - You want access to DICE's event discovery platform and mobile app
        audience to drive extra ticket sales
      - You're running large music events and want DICE's app-based
        anti-scalping protection
      - You have very low volume and prefer negotiated per-ticket fees over
        an annual subscription
      - You want DICE's built-in waitlist and face-value resale features
  - type: markdown
    content: |
      ## When Chobble Tickets might be better

      - You want predictable, flat-rate pricing with no per-ticket platform fees
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
      - [DICE city browse pages](https://dice.fm/browse) - public listings of events from many promoters
      - [DICE UK privacy policy](https://support.dice.fm/article/244-uk-privacy-policy) - personalised event recommendations and marketing consent
      - [Chobble Tickets features](/features/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Flat pricing, attendee data encrypted at rest, no attendee app requirement and no per-ticket platform fee.
name: Open Source & Flat Fee DICE Alternative | Chobble Tickets
---
