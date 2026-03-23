---
layout: design-system-base.html
title: Chobble Tickets vs Swicket
meta_title: Independent Alternative to Swicket & alf.io | Chobble Tickets
meta_description: Looking for an alternative to Swicket or alf.io? Chobble Tickets offers flat annual pricing, AGPLv3 open source code, and no enterprise contracts — for community groups, schools, and independent event organisers.
permalink: /compared-to/swicket/
eleventyNavigation:
  key: vs Swicket
  parent: Compared To
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs Swicket
    lead: >-
      Swicket is the commercial, managed version of the open source alf.io
      ticketing platform — built for large conferences and medical congresses.
      Here's how it compares to Chobble Tickets for independent event
      organisers.

  - type: markdown
    content: |
      ## What is Swicket?

      [Swicket](https://swicket.io) is the enterprise managed service built on
      top of [alf.io](https://alf.io), a GPLv3-licensed open source event
      attendance management system. Swicket is run by Vivento Lab (based in
      Lugano, Switzerland), and one of Swicket's co-founders — Celestino
      Bellone — is also a co-creator of alf.io itself.

      **alf.io** is the open source engine: a Java/Spring Boot application
      that handles ticket reservation, payment processing, and check-in. It's
      been active since 2014, has ~1,600 GitHub stars, and supports self-hosting
      via Docker, Kubernetes, Heroku, and more.

      **Swicket** wraps alf.io with managed infrastructure, enterprise SLAs
      (99.95% uptime), dedicated support, and additional modules like badge
      printing, CRM integrations (Salesforce, HubSpot), and abstract
      management for scientific conferences. It targets large events:
      2,000–15,000 attendees at tech conferences
      ([Devoxx](https://tickets.devoxx.co.uk),
      [Spring I/O](https://reg.springio.net)), medical congresses, and
      association meetings.

      So there are really two comparisons here: **Chobble Tickets vs alf.io
      self-hosted**, and **Chobble Tickets vs Swicket managed**.

      ## Pricing comparison

      **alf.io self-hosted** is free — you pay only for your own server
      infrastructure and payment processing fees. The GPLv3 licence has no
      commercial restrictions beyond the copyleft requirement.

      **Swicket managed** does not publish its pricing. Based on their target
      market (enterprise clients like CERN and Devoxx), costs are negotiated
      per contract via a sales call.

      **Chobble Tickets managed** is £50/year (£25 for charities and community
      groups) with no per-ticket fees. Self-hosted Chobble Tickets is free
      under AGPLv3. No sales call required for either option.

      ## Feature comparison

      **Both alf.io / Swicket and Chobble Tickets handle:**

      - Online ticket sales with payment processing
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Capacity management to prevent overselling
      - Refund processing
      - Free event support
      - Open source code (alf.io: GPLv3; Chobble Tickets: AGPLv3)
      - Self-hosting option
      - API access for custom integrations
      - **Apple Wallet and Google Wallet** — attendees can save tickets to their
        phone wallet (alf.io supports Apple Pass and Google Wallet natively, but
        self-hosted deployments require you to configure your own Apple Developer
        and Google Wallet API credentials; Chobble Tickets managed handles this
        setup for all customers)
      - **Customisable email templates** — both platforms let organisers edit
        confirmation email content; alf.io uses MJML templates while Chobble
        Tickets uses Liquid syntax
      - **Configurable email providers** — both platforms support using
        third-party email services; alf.io self-hosted supports Mailgun, Mailjet,
        and SMTP (configured at the server level), while Chobble Tickets managed
        lets you switch between Resend, Postmark, SendGrid, and Mailgun through
        the admin UI so emails come from your own domain

      **alf.io / Swicket has features Chobble Tickets doesn't:**

      - **Multiple payment gateways** — Stripe, Mollie, Revolut, PayPal, bank
        transfer, and on-site payments, compared to Chobble's Stripe or Square
      - **14 languages** (alf.io) / **50+ languages** (Swicket) — built-in
        internationalisation for multilingual events
      - **Offline check-in stations** — alf.io-PI runs on Raspberry Pi
        hardware with local encryption and cross-station duplicate prevention
      - **Exhibitor lead capture** — sponsors and exhibitors can scan attendee
        badges to capture leads, with GDPR-compliant data handling
      - **Google Analytics integration** — built-in tracking for event pages
      - **Pre-pay and post-pay options** — flexible payment timing for
        different event types
      - **On-site badge printing** (Swicket) — instant badge generation and
        printing at check-in with customisable templates
      - **CRM integrations** (Swicket) — native sync with Salesforce,
        HubSpot, and Mailchimp
      - **Abstract management** (Swicket) — submission, review, and scheduling
        workflows for academic and medical conferences
      - **CME credit tracking** (Swicket) — continuing medical education
        credit management for medical congresses
      - **Group registration** (Swicket) — complex multi-attendee registration
        for corporate and association bookings
      - **Mobile conference app** (Swicket) — dedicated attendee app for
        navigation, schedules, and Q&A polling
      - **Live streaming** (Swicket) — virtual event and hybrid conference
        support
      - **Enterprise SLA** (Swicket) — 99.95% uptime guarantee with 24/7
        monitoring and dedicated account management

      **Chobble Tickets has features alf.io / Swicket doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** — attendee data is
        encrypted at rest with hybrid RSA-OAEP + AES-256-GCM, not just
        row-level database security
      - **Transparent flat pricing** — £50/year managed hosting with no
        per-ticket fees, no sales calls, no contract negotiation
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** —
        subscribers get automatic calendar updates
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** — syndicate your
        events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** — let
        attendees choose their own price
      - **[Daily/recurring events](/features/daily-events/)** — per-date
        capacity with calendar picker and holiday blackouts
      - **[Custom questions](/features/custom-questions/)** — add
        multiple-choice questions to events and collect answers at checkout
      - **[Webhooks](/features/webhooks/)** — outbound POST on every
        registration for custom integrations
      - **[Custom domain](/features/custom-domain/)** — your ticketing lives
        at your own web address (relevant vs Swicket managed; alf.io
        self-hosted runs on whatever domain you configure)
      - **[Embeddable widget](/features/embeddable-widget/)** — drop an
        iframe into your own website
      - **[Event groups](/features/groups/)** — organise related events into
        collections for multi-event bookings with a single checkout
      - **No marketing to your attendees** — your audience stays yours
      - **Community Interest Company** — run by a CIC, not a commercial
        software studio

      ## When Swicket / alf.io might be the better choice

      - You're running a large conference or medical congress with thousands of
        attendees
      - You need on-site badge printing, abstract management, or CME credit
        tracking
      - You need deep CRM integration with Salesforce or HubSpot
      - You want exhibitor lead capture with badge scanning
      - You need offline check-in stations (alf.io-PI on Raspberry Pi)
      - You need multilingual registration across 14–50+ languages
      - You want PayPal, Mollie, Revolut, or bank transfer alongside Stripe
      - You require enterprise SLAs and dedicated support (Swicket managed)
      - Budget is not a concern and you want a fully managed enterprise
        solution

      ## When Chobble Tickets is the better choice

      - You're a community group, school, charity, or independent venue
      - You want transparent, flat-rate pricing with no per-ticket fees
      - Privacy and [encryption](/features/encrypted/) matter to you — not
        just row-level security but end-to-end encryption
      - You want to start immediately without a sales call or contract
      - You want [calendar feeds](/features/rss-and-calendar-feeds/) or
        [RSS](/features/rss-and-calendar-feeds/)
      - You don't want a platform marketing to your attendees
      - You're a charity or community group (£25/year)
      - You want [webhooks](/features/webhooks/) or a [public
        API](/features/public-api/)

  - type: markdown
    content: |
      ## Who owns Swicket and alf.io?

      [Swicket Sagl](https://swicket.io/about) is a Swiss limited liability
      company founded in 2018 by Celestino Bellone, based in Viganello
      (Lugano), Switzerland. Bellone is also the founder and lead developer
      of [alf.io](https://github.com/alfio-event/alf.io), the open source
      ticketing engine that Swicket is built on. The other core alf.io
      maintainer is Sylvain Jermini.

      In December 2024, Swicket established a "strategic partnership" with
      [Vivento Lab](https://vivento.ch) — a separate Swiss company (formerly
      CRYMS Sagl) backed by Tinext Group. While Vivento Lab describes
      Swicket as "part of Vivento" on some marketing material, the Swiss
      commercial register shows them as separate legal entities.

      alf.io itself is a community open source project licensed under
      GPL-3.0, with transparent finances on Open Collective and no formal
      governance foundation.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) — a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on Chobble
      as a company.

  - type: markdown
    content: |
      ## Sources

      The information on this page was verified in March 2026.

      - [Swicket](https://swicket.io) — enterprise managed service built on alf.io (pricing on request)
      - [Swicket about page](https://swicket.io/about) — team and background
      - [alf.io](https://alf.io) — open source event attendance management (GPLv3)
      - [alf.io on GitHub](https://github.com/alfio-event/alf.io) — source code, 1.6k stars, 60+ contributors
      - [alf.io on Open Collective](https://opencollective.com/alfio) — project finances
      - [Vivento Lab and Swicket partnership](https://vivento.ch/en/blog/vivento-lab-and-swicket-a-strategic-partnership-bringing-technological-innovation-to-the-world-of-events) — partnership announcement
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, and no enterprise contracts required.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
