---
layout: design-system-base.html
competitor_key: resident_advisor
title: Chobble Tickets vs Resident Advisor
meta_title: Open Source Alternative to Resident Advisor | Chobble Tickets
meta_description: Looking for an alternative to Resident Advisor (RA)? Chobble Tickets offers flat annual pricing with no per-ticket fees, full data ownership, and encrypted attendee data. Compare pricing and features.
permalink: /compared-to/resident-advisor/
eleventyNavigation:
  key: vs Resident Advisor
  parent: Compared To
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs Resident Advisor
    lead: >-
      Resident Advisor is the go-to ticketing platform for the electronic music
      scene. Here's how a small, open source alternative compares on pricing,
      features, and data ownership.

  - type: markdown
    content: |
      ## Pricing comparison

      [Resident Advisor](https://ra.co) (RA) charges approximately 10% per
      ticket as a service fee, which includes payment processing. RA doesn't
      publicly list exact fee rates - they negotiate with promoters - but 10% is
      the figure widely cited by third-party comparison sites. On a £15 ticket,
      that's roughly £1.50 gone in RA fees.

      Chobble Tickets is a flat £50/year (£25 for charities and community
      groups) with no per-ticket fees at all. You only pay Stripe or Square
      processing fees on top (1.5% + 20p in the UK). If you sell more than
      about 35 tickets at £15 each in a year, Chobble Tickets is already
      cheaper.

      On higher-priced tickets the gap grows fast. A £30 ticket costs roughly
      £3.00 in RA platform fees - that's under 20 tickets to break even
      against a full year of Chobble Tickets.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Data ownership and privacy

      When you sell tickets through RA, your attendees become part of the RA
      ecosystem. RA markets events to your audience, and your attendee data
      lives on their platform. You're building RA's audience as much as your
      own.

      With Chobble Tickets, attendee data is encrypted with hybrid RSA/AES
      encryption and stays under your control. There's no platform
      cross-promoting other events to your audience, and no marketing emails
      sent to your attendees.

      ## Payouts

      RA pays promoters after the event - typically the Tuesday following your
      event, with an additional 1–3 business days for funds to reach your
      account. That means your ticket revenue is locked up until after the
      event is over.

      Chobble Tickets uses Stripe or Square directly, so payments go straight
      to your account with standard processing times. You're always in control
      of your own payment processor account.

      ## Feature comparison

      **Both sites share some features:**

      - Online ticket sales with payment processing
      - Apple Pay and Google Pay at checkout
      - QR code or barcode scanning for entry
      - Email confirmations to ticket holders
      - Capacity management to prevent overselling
      - Embeddable ticket widgets for your own website
      - Refund processing

      Resident Advisor has some features Chobble Tickets doesn't, and vice
      versa:

      **[Resident Advisor](https://pro.ra.co/ra-tickets) has features
      Chobble Tickets doesn't:**

      - **Electronic music community** - RA reaches [millions of
        fans](https://pro.ra.co/promoter) across [100+
        countries](https://pro.ra.co/ra-tickets), specifically looking
        for club nights, festivals, and electronic music events
      - **Automated marketing to 2 million subscribers** - RA sends push
        notifications, emails, and web notifications to fans who've opted
        in, promoting your events alongside editorial picks
      - **Curated editorial and RA Picks** - 50+ local ambassadors curate
        weekly newsletters and homepage features that drive traffic to
        events
      - **RA Bumps** - paid priority placement in event listings to boost
        visibility above other events
      - **Ticket resale with anti-tout technology** - built-in face-value
        resale with barcode withholding until 24 hours before the event to
        prevent fraud ([RA claim](https://pro.ra.co/ra-tickets) 2-4%
        additional revenue on sold-out events)
      - **Abandoned basket recovery** - automated emails to fans who
        started but didn't complete checkout ([RA
        claim](https://pro.ra.co/ra-tickets) 5% conversion uplift)
      - **2-click checkout** - streamlined payment with PayPal, iDEAL,
        Bancontact, and Venmo (US) alongside Apple Pay and Google Pay
        ([RA claim](https://pro.ra.co/ra-tickets) 33% conversion
        uplift)
      - **DJ charts, reviews, and mix hosting** - artist profiles, DJ
        charts, album reviews, and music features that drive traffic to
        events and build artist credibility
      - **Crowd flow and entry time analytics** - post-event data showing
        when fans arrived, for operational planning and optimisation
      - **RA Scan app** - barcode scanner with guest list management,
        real-time attendance monitoring, and live multi-device syncing
      - **Secret venue reveals** - automated emails revealing the venue
        location to ticket holders, for invite-only or secret events
      - **30+ currency support** - sell across 100+ countries with local
        payment methods
      - **RA Guide** - city guides and venue reviews that drive footfall
        to events and build audience awareness
      - **Guest list management** - import guest lists, add guests at the
        door, and manage comps alongside standard ticket sales
      - **Embeddable ticket widget** - [embed RA ticket
        sales](https://support.ra.co/article/7-ticket-widget) on your own
        website
      - **B-Corp certified** - RA is a certified B-Corp, demonstrating
        commitment to social and environmental standards

      **Chobble Tickets has features Resident Advisor doesn't:**

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
      - **Flat annual pricing** - no per-ticket fees, no matter how many you
        sell

      ## When Resident Advisor might be better

      - You're running electronic music events and want access to RA's
        audience of clubbers and music fans
      - Event discovery matters more to you than saving on fees - RA's
        listings drive real ticket sales
      - You need built-in ticket resale for events that sell out
      - You want your events associated with the RA brand and its credibility
        in the electronic music world
      - You have very low volume (under ~35 tickets/year) and prefer paying
        per ticket over an annual fee

      ## When Chobble Tickets might be better

      - You want predictable, flat-rate pricing with no per-ticket fees
      - Privacy and encryption matter to you
      - You don't want a platform marketing to your attendees or promoting
        other events to your audience
      - You run events outside the electronic music scene (or a mix of event
        types)
      - You're a community group, charity, or school (£25/year)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value open source and the ability to self-host
      - You already have your own audience and don't rely on a platform for
        discovery

  - type: markdown
    content: |
      ## Who owns Resident Advisor?

      Resident Advisor was founded in 2001 in Sydney, Australia by Nick
      Sabine and Paul Clement. Both co-founders each hold between 25% and
      50% of the company's shares according to
      [Companies House records](https://find-and-update.company-information.service.gov.uk/company/05871093/persons-with-significant-control).
      CEO David Selby has stated publicly: "We're an independent business -
      we don't have investors." RA became a
      [certified B Corporation](https://www.bcorporation.net/en-us/find-a-b-corp/company/resident-advisor/)
      in 2024, with an overall B Impact score of 87.6. The company is
      headquartered in London with offices in Berlin, Los Angeles, New
      York, and Melbourne, and has approximately 200+ employees.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on Chobble
      as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026.
      Resident Advisor does not publicly list exact fee rates - they are
      negotiated with promoters. The approximately 10% figure used here is
      based on third-party comparison sites and industry reports. Fees may
      change - check the links below for the latest information.

      - [RA Ticket Fees](https://support.ra.co/article/177-service-fees) - RA's support article on service fees
      - [RA Tickets](https://pro.ra.co/ra-tickets) - RA's ticketing features for promoters
      - [RA Pro for Promoters](https://pro.ra.co/promoter) - promoter tools, analytics, and marketing
      - [RA Pro](https://pro.ra.co/) - information for promoters selling tickets on RA
      - [Resident Advisor on WeTicket](https://www.weticket.com/ticketing-system/resident-advisor) - third-party comparison citing 10% per ticket
      - [Chobble Tickets features](/features/)
      - [Resident Advisor Limited on Companies House](https://find-and-update.company-information.service.gov.uk/company/05871093) - corporate structure

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
