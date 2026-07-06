---
competitor_key: tickts_starter
title: Chobble Tickets vs tickts
meta_title: Open Source Alternative to tickts | Chobble Tickets
meta_description: "Chobble Tickets vs tickts: open source code, encrypted attendee data, and every feature in the £50/year plan with no tier upgrades."
permalink: /compared-to/tickts/
eleventyNavigation:
  key: vs tickts
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs tickts

      tickts is a UK ticketing platform with zero booking fees for buyers and a tiered subscription model for organisers. This page compares it to Chobble Tickets.
  - type: markdown
    content: |
      ## Pricing comparison

      [tickts](https://tickts.co.uk) charges no booking fees to buyers and
      takes 0% commission on every plan. The Starter plan is free and
      includes most core ticketing features. Growth costs £29/month or
      £290/year and adds payment plans, waitlists, advanced analytics, and
      custom branding. Pro costs £69/month or £690/year and adds season
      passes, white-label subdomains, queue systems, fan CRM, and full API
      access. Stripe's standard processing fee (1.5% + 20p per UK card
      transaction) applies on every plan.

      Chobble Tickets charges a flat £50/year or £5/month (£25/year for
      charities, community groups, and schools) with
      [no per-ticket fees](/features/no-per-ticket-fees/) and no tier
      upgrades. Every feature is included in the base plan, including the
      ones tickts gates behind Growth or Pro: API access, season passes,
      waitlists, and custom domains.

      For an organiser needing only what tickts offers on Starter, tickts
      is free. For an organiser needing features behind paid tiers, the
      comparison is £50/year (Chobble) against £290/year (tickts Growth)
      or £690/year (tickts Pro).
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison

      Both platforms handle event ticketing with no booking fees for
      buyers, but they take different approaches to feature access, data,
      and code. Here is the breakdown:

      **Both platforms share some features:**

      - Online ticket sales with Stripe payment processing
      - Apple Pay and Google Pay at checkout (via Stripe)
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Capacity management to prevent overselling
      - Free event support with no payment setup required
      - Refund processing from the admin panel
      - Custom questions at checkout
      - CSV data export
      - Apple Wallet passes for tickets
      - Google Wallet passes for tickets
      - Multi-date events with per-date capacity
      - Promo codes and discount codes
      - Box office / door sales
      - Add-ons and extras at checkout
      - Custom domain support
      - Embeddable booking widgets
      - Webhooks for real-time event notifications
      - Team management with permissions
      - Ticket transfers
      - White-label branding options (tickts gates this behind Pro;
        Chobble includes custom domain and email white-label in the base
        plan)
      - REST API access (tickts offers read-only API on Starter and full
        access on Pro; Chobble includes full public and admin API on
        every plan)

      **[tickts](https://tickts.co.uk/features) has features Chobble
      Tickets doesn't:**

      - **Native iOS and Android scanner apps** - dedicated apps for door
        staff that download attendee lists for offline scanning. Chobble
        has a web-based scanner that works from any phone browser but no
        native app
      - **Interactive seat-by-seat seating plans** - build custom venue
        layouts where fans pick their exact seat at checkout. Chobble
        supports general admission only
      - **On-site point-of-sale (POS)** - sell tickets at the door with
        cash, card, or complimentary tracking through the built-in box
        office
      - **Payment plans and instalments** - let buyers split the cost
        across multiple payments over time (tickts Growth plan and above)
      - **Waitlists for sold-out events** - automatic notifications when
        places open up (tickts Growth plan and above)
      - **Season passes with automatic fixture detection** - a single
        pass that works across every fixture in a season, with per-match
        scanning and renewal management (tickts Pro plan and above)
      - **Queue system for high-demand on-sales** - manage traffic spikes
        when popular events go on sale (tickts Pro plan and above)
      - **Fan CRM** - track spend per buyer and identify repeat
        attendees (tickts Pro plan and above)
      - **Live sales dashboard** - real-time revenue tracking, ticket
        breakdowns, and attendance data. tickts has basic analytics on
        Starter, advanced on Growth and Pro. Chobble has CSV exports and
        a ledger view but no built-in analytics dashboard
      - **Multi-currency** - sell tickets in GBP or EUR on the same
        account, with tickts also operating an Ireland site at
        tickts.ie. Chobble uses one currency per instance
      - **Multi-language interface** - the buyer-facing checkout in
        English, French, German, Spanish, and Italian. Chobble's
        checkout is English only
      - **Consumer marketplace** - events listed at tickts.co.uk/events
        for buyer discovery. Chobble does not run a marketplace
      - **Automatic social media promotion** - tickts posts every
        published event to its Facebook and Instagram at no extra cost
      - **Buyer refund protection** - fans can add TicketPlan refund
        protection at checkout for covered reasons
      - **Affiliate and rep tracking** - generate unique links for
        promoters and track which channel drove each sale (tickts Growth
        plan and above)
      - **Group discounts** - automatic price breaks based on quantity
        (tickts Growth plan and above)
      - **Email campaign tool** - send marketing emails to past buyers
        through tickts (100/month on Starter, 5,000 on Growth, 10,000 on
        Pro). Chobble sends bulk email through your own configured email
        provider rather than a shared platform one

      **Chobble Tickets has features tickts doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** - attendee
        personal data is encrypted at rest with hybrid RSA-OAEP +
        AES-256-GCM. Only the organiser holds the private key. tickts
        holds attendee data in its database and can read it; Chobble
        cannot
      - **[Open source](/features/open-source/)** - every line of code is
        public under AGPLv3 with no proprietary add-ons. tickts is closed
        source
      - **Self-hosting option** - run the platform on your own servers at
        no licence fee. tickts is hosted-only
      - **Flat pricing with all features included** - £50/year or
        £5/month covers everything, with no tier upgrades for waitlists,
        season passes, API access, or white-label
      - **[Public JSON API](/features/public-api/) on every plan** - read
        listings and availability, no API key required. tickts gates API
        access behind Pro
      - **[Admin API](/features/admin-api/) on every plan** -
        authenticated CRUD for listings, groups, and holidays via API
        keys. tickts only mentions "API access" on Pro
      - **[Subscribable ICS calendar feed](/features/rss-and-calendar-feeds/)** -
        a single feed that updates subscribers automatically when you
        add new events. tickts offers per-event "add to calendar" links
        in confirmation emails only
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate
        your events to feed readers
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun (US or EU) so confirmation
        emails come from your own domain. tickts sends from its own
        domain
      - **[Liquid email templates](/features/email-templates/)** - full
        control over the confirmation email subject, HTML, and text body
        with Liquid template syntax
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** -
        let buyers enter their own price above a minimum
      - **[Parent/child listings](/features/parent-child-listings/)** -
        require buyers to choose a child listing when booking a parent
      - **[Listing groups](/features/groups/)** with shared capacity
        caps - related events sharing a single attendee limit
      - **[Non-transferable tickets](/features/qr-code-check-ins/)** - a
        per-listing toggle that requires ID verification at check-in
      - **[Daily listings](/features/daily-events/)** with holiday
        blackouts and a calendar picker
      - **Community Interest Company** - run by a CIC, a UK legal
        structure that locks the company's assets for community benefit.
        tickts is a standard limited company
      - **No future advertising or sponsorship revenue model** - tickts
        has stated plans to add sponsorship and ad placement on category
        and venue pages once it reaches audience scale. Chobble's income
        comes entirely from the flat fee organisers pay
  - type: markdown
    content: |
      ## Data ownership

      tickts is a proprietary platform. Attendee data lives on servers
      operated by tickts, where tickts staff can read it. The
      [tickts privacy policy](https://tickts.co.uk/privacy) covers how
      buyer information is handled. tickts also runs a consumer
      marketplace at tickts.co.uk/events and posts published events to
      its own Facebook and Instagram, which puts your events in front of
      its audience but also feeds marketing channels operated by tickts.

      tickts has stated on its
      [how we make money page](https://tickts.co.uk/how-we-make-money)
      that it plans to add sponsorship and ad placement on category and
      venue pages once it reaches audience scale. The page states this
      will not cost organisers or buyers anything, but the model relies
      on aggregating audience attention to sell to brands.

      With Chobble Tickets, [attendee data is encrypted at rest](/features/encrypted/)
      with the organiser's public key. Chobble staff cannot read it
      because they do not hold the private key. The platform is open
      source under AGPLv3, so anyone can run the same code on their own
      infrastructure. Chobble does not run a marketplace and has no plans
      to introduce advertising or sponsorship revenue. Its income comes
      from the flat fee organisers pay.
  - type: markdown
    content: |
      ## When tickts might be the better choice

      - You want a free Starter plan with no booking fees for buyers
      - You need interactive seat-by-seat seating plans with a seat
        picker
      - You want an on-site POS system or native iOS and Android scanner
        apps
      - You need payment plans, waitlists, or season passes
      - You want a consumer marketplace listing your events at
        tickts.co.uk/events
      - You want automatic social media promotion of your events
      - You sell in multiple currencies (GBP and EUR)
      - You need a multi-language buyer-facing checkout
      - You want affiliate or rep tracking links
      - You want buyer refund protection via TicketPlan
      - You want a real-time sales analytics dashboard
      - You want a fan CRM tracking spend across repeat buyers
      - You need a queue system for high-demand on-sales
      - You prefer tiered plans and only pay for advanced features when
        you need them
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You want [end-to-end encryption](/features/encrypted/) of
        attendee data
      - You value [open source](/features/open-source/) code and the
        ability to self-host at no licence fee
      - You want flat, predictable pricing with no tier upgrades
      - You need [API access](/features/public-api/) on the base plan
        rather than paying for Pro
      - You are a community group, charity, or school (£25/year)
      - You want [Apple/Google Wallet](/features/apple-wallet/),
        [calendar feeds](/features/rss-and-calendar-feeds/), or
        [pay-what-you-want pricing](/features/stripe-and-square/)
        included
      - You want [custom email providers](/features/email-providers/)
        so confirmations come from your own domain
      - You want a [custom domain](/features/custom-domain/) in the base
        plan rather than paying for Pro
      - You don't want a marketplace discovery layer or your events
        promoted to other audiences
      - You want a CIC-run platform with assets locked for community
        benefit
  - type: markdown
    content: |
      ## Who owns tickts?

      tickts is operated by TICKTS LTD, a private limited company
      registered in England (company number
      [17029682](https://find-and-update.company-information.service.gov.uk/company/17029682)).
      Its registered office is at 124-128 City Road, London, EC1V 2NX.
      The ICO registration reference is ZC108275. tickts presents itself
      as UK-based and UK-focused, with an additional Ireland presence at
      tickts.ie for EUR payments.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. The registered name is Chobble CIC, company
      number 17050113, registered in Prestwich, Manchester. All of
      Chobble's code is public under AGPLv3, and the platform can be
      self-hosted by anyone without depending on Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing and feature information on this page was verified in
      July 2026. Fees and feature allocations may change. Check the links
      below for the latest figures.

      - [tickts pricing](https://tickts.co.uk/pricing) - Starter free, Growth £29/month or £290/year, Pro £69/month or £690/year
      - [tickts for organisers](https://tickts.co.uk/for-organisers) - feature breakdown and fee comparisons
      - [tickts features](https://tickts.co.uk/features) - full feature list
      - [tickts how we make money](https://tickts.co.uk/how-we-make-money) - revenue model details including planned sponsorship and ad placement
      - [tickts about](https://tickts.co.uk/about) - UK-based and Ireland (tickts.ie) information
      - [TICKTS LTD on Companies House](https://find-and-update.company-information.service.gov.uk/company/17029682) - company number 17029682
      - [Chobble Tickets features](/features/)
      - [Chobble Tickets pricing and no-per-ticket-fees explanation](/features/no-per-ticket-fees/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Sign up for managed hosting at £50/year or £5/month, or self-host for free.
name: Open Source Alternative to tickts | Chobble Tickets
---
