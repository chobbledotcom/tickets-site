---
layout: design-system-base.html
competitor_key: hi_events
selfhosted_chobble_key: chobble_selfhosted
selfhosted_competitor_key: hi_events_selfhosted
title: Chobble Tickets vs Hi.Events
meta_title: Chobble Tickets vs Hi.Events | Two Open Source Ticketing Platforms Compared
meta_description: Comparing two open source ticketing platforms - Chobble Tickets and Hi.Events. An honest look at pricing, features, philosophy, and which is better for your events.
permalink: /compared-to/hi-events/
eleventyNavigation:
  key: vs Hi.Events
  parent: Compared To
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs Hi.Events
    lead: >-
      Hi.Events is another open source ticketing platform, so this is a
      comparison between two projects with similar values but different
      approaches.

  - type: markdown
    content: |
      ## Two open source options

      It's rare to have two genuinely open source ticketing platforms to choose
      from, so let's be upfront: [Hi.Events](https://hi.events) is a solid project. It's got 3,600+
      GitHub stars, 35+ contributors, and a modern React/Laravel stack. If you're
      looking for open source ticketing, both platforms deserve your attention.

      This page is an honest comparison to help you decide which fits your needs
      better.

      ## Pricing comparison

      The pricing models are quite different:

      **Hi.Events Cloud** charges no upfront fee but takes 0.75% + 40¢ (~32p)
      per ticket sold, plus Stripe processing fees. You can pass these to the
      buyer or absorb them yourself. Free events are completely free.

      **Hi.Events Self-Hosted** has no platform fees at all - you only pay
      Stripe processing and your own server costs (roughly £16-32/month for
      hosting).

      **Chobble Tickets** charges a flat £50/year (£25 for charities and
      community groups) with no per-ticket fees. You pay Stripe or Square
      processing fees on top.

      For small numbers of tickets, Hi.Events Cloud is cheaper since there's
      no annual fee. But as volume grows, Chobble's flat fee becomes better
      value - if you sell more than about 150 tickets at £15 each in a year,
      you'll pay less with Chobble Tickets.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Feature comparison

      **Both sites share some features:**

      - Open source with self-hosting option
      - Stripe payment processing
      - Apple Pay and Google Pay at checkout (via Stripe)
      - QR code scanning for check-in at the door
      - API access for custom integrations
      - Custom questions at checkout
      - Capacity management to prevent overselling
      - Email confirmations to attendees after booking
      - Free event support with no payment setup required
      - Refund processing
      - Embeddable ticket widgets for your own website
      - Multiple ticket types per event with shared capacity limits -
        both platforms support VIP, early bird, and tiered pricing with
        a shared attendee cap across ticket types

      Both platforms cover the core ticketing basics well, but they differ in
      focus and extras:

      **Hi.Events has features Chobble Tickets doesn't:**

      - **Drag-and-drop event page builder** - a visual editor for designing
        event pages with flexible layouts, images, and custom sections
      - **Promo codes and discount management** - create percentage and
        fixed-amount discount codes with usage limits, expiry dates, and
        codes tied to specific ticket types
      - **Affiliate and referral tracking** - track which promoters and
        links are driving ticket sales with commission tracking
      - **Product add-ons** - sell merchandise, parking, meal upgrades, or
        other extras alongside tickets
      - **Custom PDF ticket designs** - design your own ticket layouts with
        branding, logos, and custom fields
      - **Multi-currency support** - sell in different currencies for
        international events
      - **Donation and tiered ticket types** - offer donation options and
        flexible pricing tiers beyond fixed and pay-what-you-want
      - **Tax and custom fee management** - configure VAT rates, add service
        fees, and manage tax reporting per event
      - **Real-time sales dashboard** - live analytics showing ticket sales,
        revenue, and check-in rates as they happen
      - **Stripe Connect instant payouts** - receive payments directly to
        your Stripe account with faster payout times
      - **Custom registration questions with free-text fields** - add
        free-text, date, and other custom field types beyond multiple choice
        per ticket type (Chobble supports multiple-choice custom questions)
      - **Bulk messaging by ticket type** - send targeted emails and
        updates to attendees based on which ticket type they bought
      - **Waitlists** - automatic notifications when places open up on
        sold-out events
      - **Ticket transfers** - allow attendees to transfer their tickets to
        someone else
      - **Automatic invoicing** - generate invoices for orders
        automatically
      - **XLSX export** - export attendee and order data in Excel format
        (Chobble supports CSV only)
      - **Branded organiser homepage** - a page showcasing all your events
        under your organiser profile
      - **Multiple check-in lists** - create separate lists for different
        areas, gates, or purposes
      - **Offline check-in support** - continue scanning tickets when
        internet connectivity is lost
      - **Multi-language support** - serve the checkout in multiple
        languages
      - **Hidden/locked tickets** - tickets hidden behind promo codes for
        presales, VIP access, or invite-only events
      - **Abandoned cart handling** - detect and act on incomplete
        checkouts to recover lost sales
      - **Event badge designer** - a browser-based badge design tool for
        printing attendee badges at events
      - **SEO tools** - per-event custom meta titles, descriptions, Open
        Graph images, and XML sitemap generation
      - **Offline payment methods** - record and track cash, bank
        transfer, or other non-digital payments
      - **Marketing opt-in** - checkbox during checkout for attendees to
        opt into marketing communications

      **Chobble Tickets has features Hi.Events doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** - attendee data is
        encrypted at rest with hybrid RSA-OAEP + AES-256-GCM, not just stored
        in a database
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets to their phone wallet
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic calendar updates
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate your
        events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        attendees choose their price
      - **[Daily/recurring event support](/features/daily-events/)** - built
        specifically for events that repeat on a schedule with per-date
        capacity
      - **[Event groups with shared capacity](/features/groups/)** -
        organise related events into collections for multi-event bookings
        with a single checkout, and use max attendees per group to create
        tiered ticket types (VIP, early bird, etc.) sharing a venue cap
      - **[Admin API](/features/admin-api/)** - authenticated API with
        API keys for full event CRUD and reading private data
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain, not the platform's
      - **[Customisable email templates](/features/email-templates/)** -
        full control over confirmation emails with Liquid syntax for a
        fully white-label experience
      - **[Markdown event descriptions](/features/markdown-descriptions/)**
        - write content in markdown with header image uploads
      - **[Custom domain support](/features/custom-domain/)** - use your own
        domain name
      - **[Activity logs](/features/activity-logs/)** - full audit trail of
        all admin actions and booking activity
      - **[Square payment support](/features/stripe-and-square/)** -
        Chobble supports both Stripe and Square; Hi.Events is Stripe-only
      - **No branding requirements** - Chobble's AGPLv3 licence has no
        "Powered by" requirement; Hi.Events requires visible "Powered by
        Hi.Events" branding unless you buy a $499+ commercial licence
      - **Serverless edge deployment** - Chobble compiles to a single JS
        file that runs on Bunny.net edge scripts with a Bunny.net edge
        database - no server to manage, no scaling to configure, no
        database replication to maintain. Hi.Events needs a traditional
        server (2 CPU, 4GB RAM minimum) that you're responsible for
        keeping online, updated, and backed up

      ## Different philosophies

      The biggest difference isn't features - it's approach.

      **Hi.Events** is built on PHP/Laravel with a React frontend. It's a
      full-featured web application with a polished, modern UI aimed at
      nightclubs, festivals, conferences, and professional event organisers.
      It has instant Stripe Connect payouts and strong branding customisation.
      The self-hosted version requires a server with at least 2 CPU cores and
      4GB RAM.

      **Chobble Tickets** is built on Deno and compiles to a single
      JavaScript file that runs as an edge script on Bunny.net - no
      traditional server required. It uses a Bunny.net edge database, so
      there's no server to manage, no scaling to worry about, and no
      database replication to configure. It prioritises simplicity, privacy
      (hybrid RSA/AES encryption for attendee data), and predictable
      flat-rate pricing. It's aimed at community groups, schools, small
      organisers, and anyone who values data ownership over feature density.
      It's run by a Community Interest Company, not a traditional startup.

      ## Licensing and self-hosted costs

      Both platforms are open source, but with very different licences and
      self-hosting economics:

      **Hi.Events** uses AGPL-3.0 with additional terms. The free self-hosted
      version requires a visible "Powered by Hi.Events" link. To remove
      branding, you need a commercial licence:

      - **Single Domain** - $499 (~£420) for one production domain
      - **Multi-Tenant (SaaS)** - available at higher tiers for running your
        own ticketing platform (contact Hi.Events for pricing)

      **Chobble Tickets** is open source with no branding requirements and no
      commercial licence needed. Self-host for free, modify as you like, and
      use your own domain - no extra cost.

  - type: include
    file: price-comparator-selfhosted.html

  - type: markdown
    content: |
      The self-hosted comparison above uses the Hi.Events Single Domain
      commercial licence ($499/~£420) since most organisations will want to
      remove the "Powered by" branding. Note that the Single Domain licence
      is perpetual for the covered version - you don't pay annually. If
      you're happy keeping the branding, Hi.Events self-hosted is free -
      just like Chobble Tickets.

      ## When Hi.Events might be better

      - You want a polished, modern UI with a visual page builder
      - You need promo codes, affiliate tracking, or merchandise sales
      - You prefer a pay-per-ticket model with no upfront cost
      - You're running large nightlife events or festivals and want instant
        payouts
      - You need multi-currency support
      - You want a more feature-rich platform and don't mind the complexity

      ## When Chobble Tickets might be better

      - You want predictable, flat-rate pricing with no per-ticket fees
      - Privacy and encryption matter to you
      - You prefer a serverless, edge-deployed platform with no server management
      - You're a community group, charity, or school (£25/year)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value a Community Interest Company over a traditional startup

  - type: markdown
    content: |
      ## Who builds Hi.Events?

      Hi.Events is created and maintained by Dave Earley, a developer based
      in Dublin, Ireland. He describes it as a "passion project" built
      primarily during evenings over approximately one year. There is no
      known company entity behind the project, and it has no venture
      funding. Earley previously created Attendize, another open source
      ticketing platform, which he sold in 2018 (the new owners
      subsequently abandoned it). Hi.Events is a ground-up rewrite, not a
      fork.

      The project has 3,600+ GitHub stars and 41 contributors, but Earley
      is overwhelmingly the primary contributor. It is licensed under
      AGPL-3.0 with an additional attribution requirement (a "Powered by
      Hi.Events" link must remain visible unless you buy a $499+ commercial
      licence).

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3 with
      no attribution requirement, and the platform can be self-hosted by
      anyone without depending on Chobble as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change - check the links below for the latest figures.

      - [Hi.Events pricing](https://hi.events/pricing) - 0.75% + 40¢ per ticket (cloud)
      - [Hi.Events open source / self-hosted](https://hi.events/open-source-event-ticketing) - $499 single domain commercial licence
      - [Hi.Events Single Domain licence terms](https://hi.events/single-domain-licence)
      - [Hi.Events on GitHub](https://github.com/HiEventsDev/Hi.Events)
      - [Chobble Tickets features](/features/)
      - [Hi.Events on Hacker News](https://news.ycombinator.com/item?id=40897962) - Show HN launch discussion

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
