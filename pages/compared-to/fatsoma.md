---
layout: design-system-base.html
competitor_key: fatsoma
title: Chobble Tickets vs Fatsoma
meta_title: Open Source Alternative to Fatsoma | Chobble Tickets
meta_description: Chobble Tickets is an alternative to Fatsoma, with flat annual pricing, no per-ticket fees, full data ownership, and encrypted attendee data. Compare pricing and features.
permalink: /compared-to/fatsoma/
eleventyNavigation:
  key: vs Fatsoma
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    title: Chobble Tickets vs Fatsoma
    lead: >-
      Fatsoma is popular with student events and nightlife promoters. Here's
      how a small, open source alternative compares on pricing, features,
      and data ownership.

  - type: markdown
    content: |
      ## Pricing comparison

      [Fatsoma](https://ticketing.fatsoma.com) charges 10% per ticket with a
      minimum of £1, plus Stripe payment processing fees (1.5% + 20p in the
      UK). So on a £15 ticket, that's £1.50 to Fatsoma plus roughly 43p to
      Stripe, totalling £1.93 gone per ticket before you see a penny.

      Chobble Tickets is a flat £50/year (£25 for charities and community
      groups) with [no per-ticket fees](/features/no-per-ticket-fees/) at all. You only pay Stripe or Square
      processing fees on top. If you sell more than about 50 tickets at £15
      each in a year, Chobble Tickets is already cheaper.

      On higher-priced tickets the gap grows quickly. A £30 ticket costs you
      £3.00 in Fatsoma platform fees alone - that's 60 tickets to break even
      against a full year of Chobble Tickets.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Data ownership and privacy

      Fatsoma markets to your attendees and uses your event data to promote
      other events on their platform. Your attendees become Fatsoma's
      audience, not just yours.

      With Chobble Tickets, attendee data is encrypted with hybrid RSA/AES
      encryption and stays under your control. There's no platform trying to
      cross-promote other events to your audience, and no marketing emails
      sent to your attendees.

      ## Payouts

      Fatsoma pays out after your event ends, typically 2 or more days
      after. You're essentially lending Fatsoma your ticket revenue until
      they decide to release it.

      Chobble Tickets uses Stripe or Square directly, so payments go
      straight to your account with standard processing times. You're always
      in control of your own payment processor account.

      ## Feature comparison

      **Both sites share some features:**

      - Online ticket sales with Stripe payment processing
      - Apple Pay and Google Pay at checkout (via Stripe)
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Capacity management to prevent overselling
      - Free event support with no payment setup required
      - Refund processing
      - Custom questions at checkout

      Fatsoma has some features Chobble Tickets doesn't, and vice versa:

      **Fatsoma has features Chobble Tickets doesn't:**

      - **Rep/affiliate network** - a built-in system where promoters sell
        tickets on your behalf and earn configurable commission per ticket
        type, with rep-only tickets and tracking dashboards showing which
        reps are driving the most sales. Reps are paid out directly through
        Fatsoma. See [Fatsoma Reps](https://ticketing.fatsoma.com/f/reps)
      - **Consumer mobile app** - [the Fatsoma
        App](https://ticketing.fatsoma.com/f/the-fatsoma-app) is a
        consumer-facing app where attendees browse and discover events.
        [Fatsoma report](https://ticketing.fatsoma.com/f/the-fatsoma-app)
        that 70% of their ticket sales come through the app
      - **Follower system** - every ticket buyer automatically becomes a
        follower you can market to for free with future event announcements
      - **Push notifications** - [event
        announcements](https://ticketing.fatsoma.com/f/event-announcements)
        hit followers' phones via push notification and email
      - **Cross-sell** - [upsell your other
        events](https://ticketing.fatsoma.com/f/cross-sell) on the order
        confirmation screen after each purchase
      - **Ad pixel tracking** - built-in [retargeting and lookalike
        audience](https://ticketing.fatsoma.com/f/ad-pixels) support for
        Facebook and other ad platforms
      - **Structured customer profiles** - structured data capture (age,
        gender, social handles, phone, location) with [profile
        saving](https://ticketing.fatsoma.com/f/customer-questions) across
        events (Chobble supports multiple-choice custom questions per event)
      - **Promo codes** - discount codes, presale codes, and hidden ticket
        access codes
      - **Event discovery platform** - Fatsoma's website and app function
        as a marketplace where attendees browse and discover events,
        particularly strong in student and nightlife markets
      - **Fatsoma Chat** - social sharing features within the consumer app
      - **Custom branded apps** - on the Professional tier (~£1,500),
        Fatsoma builds custom branded iOS/Android apps and websites for
        your events
      - **Fast 3-tap checkout** - streamlined checkout with saved card
        details via the Fatsoma app

      **Chobble Tickets has features Fatsoma doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** - attendee data is
        encrypted at rest with hybrid RSA-OAEP + AES-256-GCM
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets to their phone wallet
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic calendar updates
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate your
        events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        attendees choose their price
      - **[Daily/recurring event support](/features/daily-events/)** - built
        for events that repeat on a schedule with per-date capacity
      - **[Custom domain support](/features/custom-domain/)** - get a nice
        host-provided subdomain instantly, or point your own domain
      - **Self-hosting option** - run the platform on your own servers for
        free
      - **[Open source](/features/open-source/)** - inspect, modify, and
        contribute to the code under AGPLv3
      - **[Custom questions](/features/custom-questions/)** - add
        multiple-choice questions to events and collect structured answers
        at checkout, with answers visible across the admin interface, CSV
        exports, and webhooks
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

      ## When Fatsoma might be better

      - You're running student events or university nightlife and want
        access to Fatsoma's promoter network
      - You need a rep/affiliate system to incentivise ticket sellers
      - You want your events listed on a discovery platform aimed at
        students
      - You have very low volume (under ~50 tickets/year) and prefer paying
        per ticket over an annual fee

      ## When Chobble Tickets might be better

      - You want predictable, flat-rate pricing with no per-ticket fees
      - Privacy and encryption matter to you
      - You don't want a platform marketing to your attendees
      - You're a community group, charity, or school (£25/year)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value open source and the ability to self-host
      - You're selling enough tickets that 10% per ticket adds up quickly

  - type: markdown
    content: |
      ## Who owns Fatsoma?

      Fatsoma was founded in 2005 in Manchester (originally as YourNightOut
      Limited, renamed in 2006). It is a private limited company
      ([Companies House #05495880](https://find-and-update.company-information.service.gov.uk/company/05495880))
      owned by its two remaining co-founders, Paul Stacey and Chris Pearson.
      A third co-founder, Ben Taylor, stepped back from a controlling role
      in 2019. The company has around 35 employees and raised modest
      funding from AXM Venture Capital and via a Seedrs crowdfunding
      campaign, but remains independently owned with no corporate parent.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on Chobble
      as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change. Check the links below for the latest figures.

      - [Fatsoma pricing](https://ticketing.fatsoma.com/pricing) - 10% per ticket (minimum £1), plus Stripe processing
      - [Fatsoma for Business](https://ticketing.fatsoma.com/) - event ticketing and promotion platform
      - [Fatsoma Reps](https://ticketing.fatsoma.com/f/reps) - affiliate/rep network feature
      - [The Fatsoma App](https://ticketing.fatsoma.com/f/the-fatsoma-app) - consumer mobile app
      - [Chobble Tickets features](/features/)
      - [Fatsoma Limited on Companies House](https://find-and-update.company-information.service.gov.uk/company/05495880) - corporate structure

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
