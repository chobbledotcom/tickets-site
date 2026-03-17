---
layout: design-system-base.html
competitor_key: parentkind
title: Chobble Tickets vs Parentkind
meta_title: Affordable Alternative to Parentkind for School Events | Chobble Tickets
meta_description: Looking for an affordable alternative to Parentkind for school and PTA ticketing? Chobble Tickets offers flat pricing from £25/year with no per-ticket fees.
permalink: /compared-to/parentkind/
eleventyNavigation:
  key: vs Parentkind
  parent: Compared To
  order: 3
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs Parentkind
    lead: >-
      Parentkind is popular with schools and PTAs, so here's a detailed look
      at how Chobble Tickets compares for school event ticketing.

  - type: markdown
    content: |
      ## Different platforms, different goals

      [Parentkind](https://www.parentkind.org.uk) is a membership organisation for PTAs that bundles several
      tools together: public liability insurance, PTA management guides,
      community advisers, templates, and access to the PTA Events ticketing
      platform. It's designed specifically for the school fundraising context.

      Chobble Tickets is a general-purpose ticketing platform. It doesn't
      have school-specific features like Gift Aid or PTA insurance, but it's
      simpler, cheaper, and gives you full control over your data.

      ## Pricing breakdown

      With Parentkind, the costs add up from several layers:

      - **Parentkind membership**: from £121/year by Direct Debit for schools
        with 100 pupils or fewer (£171 for schools with 101+ pupils)
      - **PTA Events platform fee**: 3.95% per transaction on the Starter
        plan, or 1.50% on the Premium plan (which costs £299.99+VAT/year)
      - **Payment processing**: Stripe charges 1.5% + 20p per transaction
        (1.2% + 20p for registered charities)

      So for a £10 ticket on the Plus plan, you'd lose roughly 55-75p per
      sale in combined platform and payment fees, on top of the annual
      membership.

      With Chobble Tickets, it's a flat £50/year (£25 for charities and
      community groups), with no per-ticket fees or platform commission.
      You only pay the standard payment processing fee from Stripe or
      Square. Sell 100 tickets or 10,000 - the cost to you stays the same.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Feature comparison

      **Both sites share some features:**

      - Online ticket sales via Stripe
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Capacity management to prevent overselling
      - Free event support with no payment setup required
      - Refund processing
      - Apple Pay and Google Pay at checkout (via Stripe)

      ### Ticketing and events

      Both platforms handle the basics: creating events, selling tickets, and
      managing attendees. PTA Events includes prize draws, online auctions,
      and a volunteer management tool, which are useful for school
      fundraisers. Chobble Tickets focuses on doing core ticketing well, with
      features like pay-what-you-want pricing, registration deadlines,
      overbooking prevention, and event grouping for multi-event bookings.

      ### Check-in and entry

      Both offer QR code scanning for event entry. On PTA Events, the QR
      scanning feature is only available on the Premium plan. On Chobble
      Tickets, QR code check-ins work with any phone camera and are included
      at every price point.

      ### Data and privacy

      PTA Events is a proprietary platform - you can't see how your data is
      stored or processed. Chobble Tickets is open source and encrypts all
      attendee data at rest using hybrid RSA-OAEP and AES-256-GCM encryption.
      You can inspect the code, self-host, and export your data at any time.

      ### Customisation

      Chobble Tickets offers custom domains, light and dark themes, markdown
      event descriptions with image uploads, customisable email templates,
      and an embeddable widget for your existing website. PTA Events provides
      a branded microsite for your PTA with advertising and sponsorship
      options on the Premium plan.

      ### Integrations

      Chobble Tickets includes a public API, webhooks, RSS and ICS calendar
      feeds, Apple Wallet support, and a choice of email providers (Resend,
      Postmark, SendGrid, Mailgun). PTA Events integrates with Stripe and
      GoCardless and offers comprehensive reporting with 14 built-in reports.

      ## What Parentkind does that we don't

      Let's be straightforward about what Parentkind offers that Chobble
      Tickets doesn't:

      - **Insurance**: Parentkind membership includes public liability
        insurance (up to £25 million), trustee indemnity, employer's
        liability, and theft cover. This alone can be worth the membership
        fee for many PTAs.
      - **PTA advisers**: Phone and email support from people who understand
        the specifics of running a PTA, available 9am-5pm on weekdays,
        including legal and financial advice.
      - **Gift Aid**: Tools for managing Gift Aid declarations on donations,
        helping PTAs claim an extra 25% from HMRC on eligible donations.
      - **Fundraising resources**: Templates, posters, planning guides,
        risk assessment templates, and exclusive fundraisers like the Big
        PTA Walk and Cash Draws.
      - **Prize draws and raffles**: Built-in tools for running raffles
        with automatic random winner allocation, prize listings, and
        ticket bundles. Platform fee: 7.5% (Starter) or 4.95% (Premium).
      - **Online auctions**: Standard incremental bidding and blind
        sealed-bid formats, with starting bids, reserves, and bid
        increments.
      - **100/200 clubs**: Recurring number-draw fundraisers popular with
        PTAs.
      - **Online shop**: Sell school uniforms, merchandise, and fundraising
        items with order and payment tracking.
      - **Volunteer management**: Recruit volunteers, create time slots,
        track sign-ups, and send automatic reminders — purpose-built for
        school events.
      - **Newsletter and CMS**: Built-in email and newsletter tools with a
        news article CMS for communicating with parents.
      - **GoCardless payments**: Accept payments via Direct Debit in
        addition to card payments, useful for recurring PTA subscriptions.
      - **14 built-in reports**: Financial reports, sales reports, attendee
        information, orders, bookings, shipping, volunteer reports, and
        treasurer reconciliation tools.
      - **Branded PTA microsite**: A dedicated web presence for your PTA
        with event listings, news, and sponsorship/advertising options
        (Premium plan).
      - **Advertising and sponsorship tools**: On the Premium plan, sell
        advertising space on your PTA site, add sponsor logos to event
        pages and tickets, and use templates for contacting local
        businesses. Includes a dedicated "Advertise" page with metrics.
      - **Fire register**: Generate attendance lists for fire safety
        compliance at school events.
      - **Matched giving integration**: Help parents claim employer-matched
        charitable donations.
      - **Donations page**: Accept standalone donations outside of events.

      These are genuinely useful for PTAs, and if you need them, Parentkind
      is a solid choice.

      ## What we do that Parentkind doesn't

      - **Flat pricing**: No per-ticket fees or platform commission, ever.
      - **[Open source](/features/open-source/)**: Every line of code is
        public and auditable under AGPLv3.
      - **[Encryption](/features/encrypted/)**: All attendee data is encrypted
        at rest with hybrid RSA-OAEP + AES-256-GCM, not just in transit.
      - **Self-hosting**: Run the entire platform on your own infrastructure
        if you want to.
      - **[Custom domains](/features/custom-domain/)**: Your ticketing lives
        at your own web address.
      - **[Public API](/features/public-api/) and
        [webhooks](/features/webhooks/)**: Build custom integrations and
        automations.
      - **[Apple & Google Wallet](/features/apple-wallet/)**: Attendees can
        add tickets to their phone wallet.
      - **[RSS and calendar feeds](/features/rss-and-calendar-feeds/)**:
        Subscribers get automatic updates.
      - **[Event groups](/features/groups/)**: Organise related events
        into collections for multi-event bookings with a single checkout.
      - **[Custom email providers](/features/email-providers/)**: Use Resend,
        Postmark, SendGrid, or Mailgun so emails come from your domain.
      - **[Customisable email templates](/features/email-templates/)**: Full
        control over confirmation emails with Liquid syntax for a fully
        white-label experience.
      - **Apple Pay and Google Pay**: Accept wallet payments at checkout via
        Stripe.
      - **[Embeddable widget](/features/embeddable-widget/)**: Drop an iframe
        into your existing school website.
      - **No membership required**: Sign up and start selling tickets
        immediately.
      - **Works beyond schools**: Use the same platform for music gigs,
        charity fundraisers, community events, or anything else.

      ## When Parentkind makes more sense

      If your PTA needs the full package - insurance, Gift Aid, advisers,
      fundraising resources, volunteer coordination, and auctions - then
      Parentkind offers genuine value as a bundled membership. The insurance
      alone can justify the cost for many PTAs.

      ## When an alternative to Parentkind makes more sense

      If you already have insurance sorted and just need affordable,
      straightforward ticketing for school events, Chobble Tickets saves you
      money. At £25/year for community groups with no per-ticket fees, the
      savings add up quickly, especially for popular events where percentage
      fees can eat into your fundraising total. It's also a better fit if you
      care about data privacy, want to use your own domain, or need a
      platform that works for non-school events too.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change — check the links below for the latest figures.

      - [Parentkind membership fee update (November 2025)](https://www.parentkind.org.uk/pta-membership-fee-update) — from £121/year (Direct Debit, ≤100 pupils)
      - [PTA Events fees](https://ptaevents.freshdesk.com/support/solutions/articles/17000091635-what-fees-are-charged-) — 3.95% (Starter) or 1.5% (Premium)
      - [PTA Events Premium plan benefits](https://ptaevents.freshdesk.com/support/solutions/articles/17000091633-what-are-the-benefits-of-the-premium-plan-) — QR scanning, advertising tools, reduced fees
      - [PTA Events transaction costs](https://ptaevents.freshdesk.com/support/solutions/articles/17000089759-how-much-does-it-cost-to-process-transactions-) — Stripe processing fees
      - [PTA Events platform](https://www.pta-events.co.uk/) — the ticketing platform itself
      - [Parentkind website](https://www.parentkind.org.uk)
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Simple school event ticketing
    description: Flat pricing with no per-ticket fees - more of your fundraising goes where it should.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
