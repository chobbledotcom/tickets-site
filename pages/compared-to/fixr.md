---
layout: design-system-base.html
competitor_key: fixr
title: Chobble Tickets vs FIXR
meta_title: Open Source Alternative to FIXR | Chobble Tickets
meta_description: Looking for an alternative to FIXR? Chobble Tickets offers flat annual pricing with no per-ticket fees, full data ownership, and encrypted attendee data. Compare pricing and features.
permalink: /compared-to/fixr/
eleventyNavigation:
  key: vs FIXR
  parent: Compared To
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs FIXR
    lead: >-
      FIXR dominates UK student nightlife and event discovery. Here's how
      a small, open source alternative compares on pricing, features, and
      data ownership.

  - type: markdown
    content: |
      ## Pricing comparison

      [FIXR](https://fixr.co) is free for organisers — ticket buyers pay a
      booking fee of 4.99% + £0.49 per ticket (£1 minimum) + VAT on the
      Pro tier, or 3.99% + £0.49 on the Student & Charity tier. These fees
      include payment processing, and organisers can optionally absorb them.
      Enterprise pricing is negotiated separately.

      Chobble Tickets is a flat £50/year (£25 for charities and community
      groups) with no per-ticket fees at all. You only pay Stripe or Square
      processing fees on top. If you sell more than about 77 tickets at
      £10 each in a year, Chobble Tickets is already cheaper.

      On higher-priced tickets the gap grows quickly. A £30 ticket costs
      £1.99 in FIXR fees — that's about 38 tickets to break even against
      a full year of Chobble Tickets.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Data ownership and privacy

      FIXR operates an event discovery marketplace — their website and app
      let attendees browse and discover events. This means your attendees
      become part of FIXR's audience, and your events sit alongside
      competitors' listings.

      With Chobble Tickets, attendee data is encrypted with hybrid RSA/AES
      encryption and stays under your control. There's no marketplace
      showing competing events next to yours, and no marketing emails sent
      to your attendees by the platform.

  - type: markdown
    content: |
      ## Payouts

      FIXR handles payment processing as part of their booking fee and
      manages payouts to organisers.

      Chobble Tickets uses Stripe or Square directly, so payments go
      straight to your account with standard processing times. You're
      always in control of your own payment processor account.

  - type: markdown
    content: |
      ## Feature comparison

      **Both platforms share some features:**

      - Online ticket sales
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Capacity management to prevent overselling
      - Free event support with no fees
      - Multiple ticket types
      - Embeddable ticket widgets for your own website

      FIXR has some features Chobble Tickets doesn't, and vice versa:

      **FIXR has features Chobble Tickets doesn't:**

      - **Event discovery app** — FIXR's consumer-facing app and website
        let attendees browse and discover events, with strong reach in
        the UK student nightlife market
      - **Rep/affiliate network** — a built-in system where promoters
        sell tickets on your behalf and earn commission, with tracking
        dashboards
      - **Student verification** — built-in student status verification
        for age-restricted or student-only events
      - **Ad pixel tracking** — retargeting and lookalike audience support
        for Facebook and other ad platforms
      - **Promo codes** — discount codes, presale codes, and hidden ticket
        access codes
      - **Fast checkout** — streamlined checkout with saved card details
        via the FIXR app
      - **Push notifications** — event announcements via push notification
        to followers
      - **Custom branded apps** — on the Enterprise tier, FIXR builds
        custom branded apps and websites for your events
      - **Business insights** — analytics on customer origination,
        journey, and lifecycle

      **Chobble Tickets has features FIXR doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** — attendee data
        is encrypted at rest with hybrid RSA-OAEP + AES-256-GCM
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** —
        attendees can add tickets to their phone wallet
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** —
        subscribers get automatic calendar updates
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** — syndicate
        your events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** —
        let attendees choose their price
      - **[Daily/recurring event support](/features/daily-events/)** —
        built for events that repeat on a schedule with per-date capacity
      - **[Custom domain support](/features/custom-domain/)** — get a
        nice host-provided subdomain instantly, or point your own domain
      - **Self-hosting option** — run the platform on your own servers
        for free
      - **[Open source](/features/open-source/)** — inspect, modify, and
        contribute to the code under AGPLv3
      - **[Custom questions](/features/custom-questions/)** — add
        multiple-choice questions to events and collect structured
        answers at checkout
      - **[Public & admin API](/features/public-api/)** — RESTful JSON
        API for building custom integrations, plus [authenticated admin
        API](/features/admin-api/) with full event CRUD via API keys
      - **[Webhooks](/features/webhooks/)** — outbound POST on every
        registration
      - **[Event groups with tiered ticketing](/features/groups/)** —
        organise related events into collections for multi-event bookings
        with a single checkout
      - **[Custom email providers](/features/email-providers/)** — use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain
      - **[Customisable email templates](/features/email-templates/)** —
        full control over confirmation emails with Liquid syntax
      - **No marketing emails to attendees** — your audience stays yours

  - type: markdown
    content: |
      ## When FIXR might be better

      - You're running student events or university nightlife and want
        access to FIXR's audience and discovery platform
      - You need a rep/affiliate system to incentivise ticket sellers
      - You want your events listed on a marketplace where attendees
        browse and discover events
      - You need student verification for age-restricted events
      - You have very low volume and prefer buyer-pays fees over an
        annual subscription

      ## When Chobble Tickets might be better

      - You want predictable, flat-rate pricing with no per-ticket fees
      - Privacy and encryption matter to you
      - You don't want a platform marketing to your attendees or showing
        competing events alongside yours
      - You're a community group, charity, or school (£25/year)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value open source and the ability to self-host
      - You're selling enough tickets that percentage fees add up quickly

  - type: markdown
    content: |
      ## Who owns FIXR?

      FIXR operates as VIPR Digital Limited
      ([Companies House #08184813](https://find-and-update.company-information.service.gov.uk/company/08184813)),
      incorporated in August 2012 and headquartered at 25-26 Poland
      Street, London W1F 8QN. The company was co-founded by Edmund
      Glover, Nick Stone, Dom Marmont, and Hugh Hudleston (who resigned
      as director in 2020). FIXR raised £6.5 million in a Series A round
      in May 2021, and launched in UK universities in 2015 before
      expanding into nightlife, festivals, venues, and attractions.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) — a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3,
      and the platform can be self-hosted by anyone without depending on
      Chobble as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026.
      Fees may change — check the links below for the latest figures.

      - [FIXR pricing](https://fixr.co/pricing) — Pro: 4.99% + £0.49 per ticket; Student & Charity: 3.99% + £0.49
      - [FIXR for organisers](https://fixr.co/p/event-organisers) — event ticketing and promotion platform
      - [FIXR event ticketing](https://fixr.co/p/event-ticketing) — ticketing features overview
      - [Chobble Tickets features](/features/)
      - [VIPR Digital Limited on Companies House](https://find-and-update.company-information.service.gov.uk/company/08184813) — corporate structure

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
