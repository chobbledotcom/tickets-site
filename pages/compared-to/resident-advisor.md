---
layout: design-system-base.html
competitor_key: resident_advisor
title: Chobble Tickets vs Resident Advisor
meta_title: Open Source Alternative to Resident Advisor | Chobble Tickets
meta_description: Chobble Tickets is an alternative to Resident Advisor (RA), with flat annual pricing, no per-ticket fees, full data ownership, and encrypted attendee data. Compare pricing and features.
permalink: /compared-to/resident-advisor/
eleventyNavigation:
  key: vs Resident Advisor
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    title: Chobble Tickets vs Resident Advisor
    lead: >-
      Resident Advisor is the go-to ticketing platform for the electronic music
      scene. Here's how a small, open source alternative compares on pricing,
      features, and data ownership.

  - type: markdown
    content: |
      ## Pricing comparison

      [Resident Advisor](https://ra.co) (RA) adds a service fee on top of
      every ticket sold. The buyer pays this fee, not the promoter, so RA
      says it is free for promoters to sell tickets. But the fee still makes
      tickets more expensive for fans. RA doesn't publish exact fee rates
      and negotiates with promoters individually.

      Chobble Tickets is a flat £50/year (£25 for charities and community
      groups) with [no per-ticket fees](/features/no-per-ticket-fees/) at all. You only pay Stripe or Square
      processing fees on top. Once you're selling more than a handful of
      events a year, Chobble Tickets usually works out cheaper.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Data ownership and privacy

      When you sell tickets through RA, your attendees become part of RA's
      platform. RA markets its own content to your customers (other events,
      other promoters, and editorial picks). Your attendee data lives on their
      servers, and you're building RA's audience as much as your own.

      With Chobble Tickets, attendee data is encrypted and stays under your
      control. Chobble does not market anything to your attendees.

      ## Payouts

      RA pays promoters after the event. Payments are processed on Tuesdays
      and typically take a few more business days to reach your bank account.
      That means your ticket money is locked up until after the event.

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

      - **Electronic music community** - RA reaches
        [millions of electronic music fans](https://pro.ra.co/promoter)
        across [dozens of countries](https://ra.co/about), specifically
        looking for club nights, festivals, and electronic music events
      - **Automated marketing to millions of subscribers** - RA sends
        push notifications, emails, and web notifications to fans who've
        opted in, promoting your events alongside editorial picks
      - **Curated editorial and RA Picks** - a team of local ambassadors
        around the world curate weekly newsletters and homepage features
        that drive traffic to events
      - **RA Bumps** - paid priority placement in event listings to boost
        visibility above other events
      - **Ticket resale with anti-tout technology** - built-in face-value
        resale with barcode withholding until shortly before the event to
        prevent fraud ([RA claim](https://pro.ra.co/ra-tickets) up to 2%
        additional revenue on sold-out events)
      - **Abandoned basket recovery** - automated emails to fans who
        started but didn't complete checkout ([RA
        claim](https://pro.ra.co/ra-tickets) 5% conversion uplift)
      - **2-click checkout** - streamlined payment with PayPal, iDEAL,
        and Bancontact alongside Apple Pay and Google Pay
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
      - **Multiple currency support** - sell across many countries with
        local payment methods
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
      - **No marketing to your attendees** - Chobble does not market to
        your customers
      - **Flat annual pricing** - no per-ticket fees, no matter how many you
        sell

      ## When Resident Advisor might be better

      - You're running electronic music events and want RA's big audience
        of clubbers and music fans to find you
      - Being discovered by new people matters more to you than saving on
        fees
      - You need built-in ticket resale for events that sell out
      - You want your events connected to the RA brand and its reputation
        in the electronic music world
      - You only sell a small number of tickets per year and prefer paying
        per ticket over an annual fee

      ## When Chobble Tickets might be better

      - You want simple, flat-rate pricing with no per-ticket fees
      - Privacy and encryption matter to you
      - You don't want a platform marketing its own stuff to your customers
      - You run events outside the electronic music scene (or a mix of
        event types)
      - You're a community group, charity, or school (£25/year)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value open source and the ability to self-host
      - You already have your own audience and don't need a platform to
        help people find you

  - type: markdown
    content: |
      ## Who owns Resident Advisor?

      Resident Advisor started in Australia in the early 2000s as a small
      website about dance music. It grew into a big global platform and is
      now based in London, with offices in several cities around the world
      including Berlin, New York, Los Angeles, and Tokyo. The company is
      independently owned by its founders, with no outside investors,
      and is a
      [certified B Corporation](https://www.bcorporation.net/en-us/find-a-b-corp/company/resident-advisor/),
      which means it meets certain social and environmental standards.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a type of UK company that has to use its money to help the
      community. All of Chobble's code is public, and anyone can run the
      platform on their own computers without depending on Chobble as a
      company.

  - type: markdown
    content: |
      ## Pricing sources

      Resident Advisor does not publicly list exact fee rates. They are
      negotiated with promoters. Fees may change, so check the links below
      for the latest information.

      - [RA Ticket Fees](https://support.ra.co/article/177-service-fees) - RA's support article on service fees
      - [RA Tickets](https://pro.ra.co/ra-tickets) - RA's ticketing features for promoters
      - [RA Pro for Promoters](https://pro.ra.co/promoter) - promoter tools, analytics, and marketing
      - [RA Pro](https://pro.ra.co/) - information for promoters selling tickets on RA
      - [RA About](https://ra.co/about) - company information
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
