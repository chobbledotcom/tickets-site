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
  order: 6
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
      from, so let's be upfront: [Hi.Events](https://hi.events) is a solid project. It's got 3,500+
      GitHub stars, 40+ contributors, and a modern React/Laravel stack. If you're
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

      Both platforms cover the core ticketing basics well, but they differ in
      focus and extras:

      **Hi.Events has features Chobble Tickets doesn't:**

      - **Drag-and-drop event page builder** - a visual editor for event pages
        with more design flexibility
      - **Promo codes and discount management** - built-in promotional pricing
        with usage limits and expiry dates
      - **Affiliate and referral tracking** - track which promoters are driving
        ticket sales
      - **Product add-ons** - sell merchandise alongside tickets
      - **Custom PDF ticket designs** - design your own ticket layouts
      - **Multi-currency support** - sell in different currencies
      - **Donation and tiered ticket types** - more flexible pricing options
      - **Tax and custom fee management** - add VAT or service fees to tickets
      - **Real-time sales dashboard** - live analytics as tickets sell

      **Chobble Tickets has features Hi.Events doesn't:**

      - **End-to-end encryption** - attendee data is encrypted at rest and in
        transit, not just stored in a database
      - **Apple & Google Wallet tickets** - attendees can add tickets to
        their phone wallet
      - **ICS calendar feeds** - subscribers get automatic calendar updates
      - **RSS feeds** - syndicate your events
      - **Pay-what-you-want pricing** - let attendees choose their price
      - **Daily/recurring event support** - built specifically for events that
        repeat on a schedule
      - **Custom email providers** - use your own SMTP for event emails
      - **Markdown event descriptions** - write content in markdown
      - **Custom domain support** - use your own domain name
      - **Activity logs** - full audit trail of changes

      ## Different philosophies

      The biggest difference isn't features - it's approach.

      **Hi.Events** is built on PHP/Laravel with a React frontend. It's a
      full-featured web application with a polished, modern UI aimed at
      nightclubs, festivals, conferences, and professional event organisers.
      It has instant Stripe Connect payouts and strong branding customisation.
      The self-hosted version requires a server with at least 2 CPU cores and
      4GB RAM.

      **Chobble Tickets** is built on Deno and compiles to a single
      JavaScript file that runs as an edge script on Bunny CDN — no
      traditional server required for the hosted version. It uses libsql
      for its database and prioritises simplicity, privacy (hybrid RSA/AES
      encryption for attendee data), and predictable flat-rate pricing.
      It's aimed at community groups, schools, small organisers, and anyone
      who values data ownership over feature density. It's run by a
      Community Interest Company, not a traditional startup.

      ## Licensing and self-hosted costs

      Both platforms are open source, but with very different licences and
      self-hosting economics:

      **Hi.Events** uses AGPL-3.0 with additional terms. The free self-hosted
      version requires a visible "Powered by Hi.Events" link. To remove
      branding, you need a commercial licence:

      - **Single Domain** — $499 (~£420) for one production domain
      - **Multi-Tenant (SaaS)** — available at higher tiers for running your
        own ticketing platform (contact Hi.Events for pricing)

      **Chobble Tickets** is open source with no branding requirements and no
      commercial licence needed. Self-host for free, modify as you like, and
      use your own domain — no extra cost.

  - type: include
    file: price-comparator-selfhosted.html

  - type: markdown
    content: |
      The self-hosted comparison above uses the Hi.Events Single Domain
      commercial licence ($499/~£420) since most organisations will want to
      remove the "Powered by" branding. Note that the Single Domain licence
      is perpetual for the covered version — you don't pay annually. If
      you're happy keeping the branding, Hi.Events self-hosted is free —
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
      - You prefer a simpler, edge-deployed platform with minimal infrastructure
      - You're a community group, charity, or school (£25/year)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value a Community Interest Company over a traditional startup

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change — check the links below for the latest figures.

      - [Hi.Events pricing](https://hi.events/pricing) — 0.75% + 40¢ per ticket (cloud)
      - [Hi.Events open source / self-hosted](https://hi.events/open-source-event-ticketing) — $499 single domain commercial licence
      - [Hi.Events Single Domain licence terms](https://hi.events/single-domain-licence)
      - [Hi.Events on GitHub](https://github.com/HiEventsDev/Hi.Events)

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
