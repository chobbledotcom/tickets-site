---
layout: design-system-base.html
competitor_key: ticketek
title: Chobble Tickets vs Ticketek
meta_title: Independent Alternative to Ticketek | Chobble Tickets
meta_description: Looking for an independent alternative to Ticketek? Chobble Tickets gives you flat pricing, full data ownership, encryption, and no venue lock-in.
permalink: /compared-to/ticketek/
eleventyNavigation:
  key: vs Ticketek
  parent: Compared To
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs Ticketek
    lead: >-
      Ticketek dominates large venue ticketing in Australia and New Zealand,
      but here's when Chobble Tickets is the better choice.

  - type: markdown
    content: |
      ## Different markets

      Let's be upfront: [Ticketek](https://premier.ticketek.com.au) and
      Chobble Tickets serve very different markets. Ticketek is built for
      stadiums, arenas, and major tours across Australasia, whereas Chobble
      Tickets is built for community events, independent venues, and
      organisations that want control over their ticketing.

      If you're selling tickets at the MCG or Qudos Bank Arena, Ticketek is
      probably unavoidable - many large venues are contractually locked to
      them. But if you're running a 200-capacity gig, a charity trivia night,
      or a community workshop, you don't need (or want) Ticketek.

      ## Fees and pricing

      Ticketek's fees are notoriously opaque and vary by event, venue, and
      contract. A typical service and handling fee is around $7–8 per
      transaction (roughly 2–3% of the transaction price), plus additional
      charges for ticket delivery, reissues, and credit card surcharges. In
      some cases the service fee can
      [exceed the ticket price itself](https://www.sbs.com.au/news/article/ticketek-service-fee-cost-more-than-childs-ticket-to-the-cricket/ei66dfk3t).

      Chobble Tickets charges a flat £50/year (approximately AU$95), and
      payment processing fees from Stripe or Square are the only other cost
      - which go directly to the payment processor, not to us.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Feature comparison

      Ticketek is built for a completely different market, but if you're
      considering whether you actually need it, here's what each platform
      offers:

      **Both platforms share some features:**

      - Online ticket sales with payment processing
      - QR code or barcode scanning for entry
      - Email confirmations to ticket holders
      - Capacity management to prevent overselling
      - Mobile-friendly booking experience
      - Refund processing

      **Ticketek has features Chobble Tickets doesn't:**

      - **Massive distribution network** - Ticketek sells over 23 million
        tickets to more than 20,000 events annually across Australia, New
        Zealand, and Southeast Asia through its website, mobile app, phone
        sales, and
        [retail outlet network](https://premier.ticketek.com.au/content/aboutus/aboutus.aspx)
      - **Reserved seating with interactive venue maps** - detailed seat
        selection for stadiums, arenas, and theatres with exact views from
        each section
      - **Exclusive venue contracts** - many major venues (MCG, Qudos
        Bank Arena, Adelaide Entertainment Centre) are contractually locked
        to Ticketek, making it the only option
      - **NFC tap-and-go entry** - world-first tap-and-go ticketing using
        NFC technology, awarded global Ticketing Business of the Year
      - **Afterpay integration** - first ticketing platform globally to
        offer buy-now-pay-later for ticket purchases
      - **Dynamic pricing** - automatically adjust ticket prices based on
        demand, similar to airline pricing
      - **Retail outlet network** - physical ticket sales through outlets at
        major shopping centres, newsagencies, and other locations
      - **Phone and call centre sales** - buy tickets over the phone through
        a dedicated call centre
      - **Ticket resale marketplace** - official resale platform for
        sold-out events
      - **Accessible seating management** - dedicated wheelchair accessible
        spaces, hearing impaired tickets with hearing loop support, sign
        language interpreter tickets, and Companion Card support
      - **Large-scale analytics and data** - TEG's data analytics division
        provides audience demographics, sales-by-location reporting, and
        enterprise-level insights
      - **Multi-event season passes** - manage season tickets, memberships,
        and recurring subscriptions for sports and entertainment
      - **Box office POS** - sell tickets at physical box offices and
        on-site locations
      - **Mobile app** - dedicated consumer app for ticket management,
        browsing events, and receiving notifications
      - **TEG Live integration** - connections to TEG's broader live
        entertainment ecosystem including concert promotion, venue
        operations, and touring

      **Chobble Tickets has features Ticketek doesn't offer small
      organisers:**

      - **[End-to-end encryption](/features/encrypted/)** - attendee data is
        encrypted at rest with hybrid RSA-OAEP + AES-256-GCM (notable given
        Ticketek's
        [2024 data breach](https://ia.acs.org.au/article/2024/30m-users--data-leaked-after-ticketek-breach.html)
        that exposed up to 30 million users' data)
      - **[Open source](/features/open-source/)** - every line of code is
        public under AGPLv3
      - **Self-hosting option** - run the platform on your own servers for
        free
      - **Flat annual pricing** - £50/year with no per-ticket fees, compared
        to Ticketek's ~$7–8 service fee per transaction
      - **Full data ownership** - you control your attendee data, not
        Ticketek
      - **No exclusive contracts** - use Chobble Tickets alongside any other
        platform
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets to their phone wallet
      - **[ICS calendar and RSS feeds](/features/rss-and-calendar-feeds/)**
        - subscribers get automatic updates
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        attendees choose their own price
      - **[Daily/recurring events](/features/daily-events/)** - per-date
        capacity with calendar picker
      - **[Event groups with tiered ticketing](/features/groups/)** -
        organise related events into collections for multi-event bookings
        with a single checkout, and create ticket tiers (VIP, general
        admission, etc.) sharing a venue capacity cap
      - **[Custom questions](/features/custom-questions/)** - add
        multiple-choice questions to events and collect answers at checkout
      - **[Public & admin API](/features/public-api/)** and
        **[webhooks](/features/webhooks/)** - build custom integrations,
        with [admin API](/features/admin-api/) for full event CRUD via
        API keys
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain, not the platform's
      - **[Customisable email templates](/features/email-templates/)** -
        full control over confirmation emails with Liquid syntax
      - **[Custom domain](/features/custom-domain/)** - get a nice
        host-provided subdomain instantly, or point your own domain
      - **Apple Pay and Google Pay** - accept wallet payments at checkout
        via Stripe
      - **Transparent pricing** - no hidden fees, no negotiations, no drip
        pricing
      - **Community Interest Company** - run by a CIC, not a private equity
        portfolio company

      ## Data ownership and security

      In May 2024, Ticketek suffered a
      [major data breach](https://ia.acs.org.au/article/2024/30m-users--data-leaked-after-ticketek-breach.html)
      that exposed the personal information of up to 30 million users -
      including names, dates of birth, and email addresses - through a
      compromised third-party cloud platform. The stolen database was listed
      for sale on a cybercrime forum.

      With Chobble Tickets, attendee data is encrypted end-to-end with
      hybrid RSA-OAEP + AES-256-GCM. Even if someone accessed the database,
      the data would be unreadable without the encryption keys that only you
      hold.

      ## When Ticketek makes sense

      - You're running events at large Australian venues that require
        Ticketek (contractual obligation)
      - You need reserved seating for thousands of seats with interactive
        maps
      - You want access to Ticketek's massive buyer network across
        Australasia
      - You need box office POS, retail outlets, and phone sales
      - You're selling season passes for major sporting codes

      ## When Chobble Tickets is the better choice

      - You're an independent venue, community group, or small organiser
      - You want to keep your ticket revenue instead of losing $7+ per
        transaction in service fees
      - Privacy and [encryption](/features/encrypted/) matter to you -
        especially after Ticketek's 2024 data breach
      - You value [open source](/features/open-source/) and data ownership
      - You're a charity or school (£25/year)
      - You want [Apple/Google Wallet](/features/apple-wallet/), [calendar
        feeds](/features/rss-and-calendar-feeds/), or a [public
        API](/features/public-api/)
      - You don't want a platform marketing competing events to your
        audience

  - type: markdown
    content: |
      ## Who owns Ticketek?

      Ticketek was originally part of Nine Entertainment in Australia. In
      2015, private equity firm Affinity Equity Partners bought Ticketek
      from Nine for A$640 million and rebranded the parent company as
      TEG (Ticketek Entertainment Group).

      In 2019, US-based private equity firm
      [Silver Lake](https://www.silverlake.com) - which specialises in
      technology investing - acquired TEG for a reported A$1.3 billion.
      TEG's empire now spans ticketing, live entertainment, data analytics,
      and venue operations across Australia, New Zealand, Southeast Asia,
      and the UK, including brands like TEG Live, TEG Dainty, Qudos Bank
      Arena, and Eventfinda (acquired in 2025).

      Ticketek has received sustained criticism for excessive fees.
      Consumer advocacy group
      [Choice](https://www.choice.com.au/shonky-awards/hall-of-shame/shonkys-2012/ticketek-and-ticketmaster/)
      gave Ticketek and Ticketmaster a joint Shonky
      Award in 2012 for excessive booking fees, and the Australian federal
      government has promised legislation to ban the kind of drip pricing
      tactics Ticketek has been accused of.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on Chobble
      as a company.

  - type: markdown
    content: |
      ## Pricing sources

      Ticketek does not publish a standard public fee schedule - fees vary
      by event, venue, and contract. The pricing estimates used on this page
      are based on publicly reported figures. Check the links below for the
      latest information.

      - [Ticketek Australia](https://premier.ticketek.com.au) - official
        website
      - [Ticketek About Us](https://premier.ticketek.com.au/content/aboutus/aboutus.aspx)
        - company overview and venue partnerships
      - [Ticketek Buyer FAQs](https://help.ticketek.com.au/hc/en-us/articles/46538610279193-BUYER-FAQS)
        - fee details for buyers
      - [SBS News - Ticketek fees](https://www.sbs.com.au/news/article/ticketek-service-fee-cost-more-than-childs-ticket-to-the-cricket/ei66dfk3t)
        - service fee exceeding child ticket price
      - [TEG data breach - 30m users](https://ia.acs.org.au/article/2024/30m-users--data-leaked-after-ticketek-breach.html)
        - 2024 breach details
      - [TEG - The TEG Story](https://www.teg.com.au/the-teg-story/) -
        company history and ownership
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Independent ticketing
    description: For events that don't need a corporate gatekeeper.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
