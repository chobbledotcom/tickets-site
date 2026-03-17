---
layout: design-system-base.html
competitor_key: pretix_hosted
selfhosted_chobble_key: chobble_selfhosted
selfhosted_competitor_key: pretix_selfhosted
title: Chobble Tickets vs Pretix
meta_title: Open Source Alternative to Pretix | Chobble Tickets
meta_description: Comparing two open source ticketing platforms — Chobble Tickets and Pretix. See how hosted and self-hosted costs compare for your event.
permalink: /compared-to/pretix/
eleventyNavigation:
  key: vs Pretix
  parent: Compared To
  order: 5
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs Pretix
    lead: >-
      Two open source ticketing platforms with very different models — here's
      how they compare on cost, complexity, and approach.

  - type: markdown
    content: |
      ## Two open source projects, two approaches

      [Pretix](https://pretix.eu) and Chobble Tickets are both open source event ticketing platforms,
      but they target very different audiences. Pretix is built for large
      conferences, exhibitions, and enterprise customers, with a feature set to
      match. Chobble Tickets is built for smaller organisers who want something
      simple, affordable, and transparent.

      Both are open source (AGPLv3), both support self-hosting, and both
      integrate with Stripe for payment processing. The differences are in
      pricing, complexity, and who they're designed for.

      ## Hosted pricing comparison

      Pretix Hosted charges 2.5% of each ticket's price (excl. taxes), with no
      monthly or annual fee. That's great if you're selling a handful of tickets,
      but costs rise quickly at volume.

      Chobble Tickets charges a flat £50/year regardless of how many tickets you
      sell or what you charge for them. No percentage cut, no per-ticket fees.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Self-hosted pricing comparison

      Both platforms can be self-hosted, but the licensing models differ.

      Chobble Tickets is fully open source with **no license fee** — you get
      every feature for free when you self-host. There's no "community vs
      enterprise" split.

      Pretix offers a free Community edition, but its proprietary plugins
      (seating, lead scanning, POS, resellers, and more) require a Pretix
      Enterprise license starting at €499/year (approx. £420). The full-featured
      Enterprise Professional tier is €750/year, and Ultimate is €950/year.

  - type: include
    file: price-comparator-selfhosted.html

  - type: markdown
    content: |
      ## When Pretix might be the better choice

      Pretix is a mature, feature-rich platform with years of development behind
      it. Here's what it offers that Chobble Tickets doesn't:

      - **Seating plans** — interactive venue maps with assigned seating
        (enterprise plugin)
      - **Point of sale** — sell tickets at physical box offices and
        on-site kiosks (enterprise plugin)
      - **30+ languages** — full multi-language support for international
        events with automatic translation of checkout flows
      - **Voucher and promo codes** — percentage and fixed-amount discounts,
        early bird pricing, group discounts, and codes tied to specific
        ticket types
      - **Waitlists** — automatic notifications when places open up on
        sold-out events
      - **Multiple ticket types per event** — VIP, early bird, group,
        add-ons, and bundled packages on a single event
      - **Multiple payment providers** — Stripe, PayPal, Mollie, bank
        transfer, invoice, and more
      - **Custom checkout questions** — add custom fields and questions per
        ticket type and per attendee
      - **Badge and name tag printing** — generate and print attendee badges
        for conferences (enterprise plugin)
      - **Lead scanning app** — exhibitors scan attendee badges to capture
        leads (enterprise plugin)
      - **Reseller portals** — give resellers and box offices access to sell
        tickets on your behalf
      - **Tax and invoice management** — configure VAT rates, generate
        invoices, and manage tax reporting
      - **Check-in lists with permissions** — create multiple check-in lists
        with different permissions per gate or area
      - **Ticket add-ons and bundles** — sell merchandise, workshops, meals,
        or other extras alongside tickets
      - **Conditional logic** — show or hide ticket types and questions
        based on previous answers
      - **Multi-event organisers** — manage multiple events under one
        organisation with shared settings and branding
      - **Pretix Widget** — a more advanced embeddable widget with full
        cart functionality

      It also has a larger community, more plugins, and more integrations. If
      you need enterprise-grade features and have the budget or technical team
      to match, Pretix is a strong choice.

      ## When Chobble Tickets is the better choice

      If you're a smaller organiser — running community events, school fairs,
      local gigs, charity fundraisers — Chobble Tickets is simpler and cheaper.
      There's no percentage fee eating into your revenue, no complex plugin
      licensing to navigate, and no enterprise sales process.

      The flat £50/year hosted plan means your costs are predictable. And if you
      self-host, it's completely free — no license tiers, no feature gates, no
      catches.

      ## Feature comparison at a glance

      | | Chobble Tickets | Pretix |
      |---|---|---|
      | Open source | AGPLv3 (all features) | AGPLv3 (core only) |
      | Hosted pricing | £50/year flat | 2.5% per ticket |
      | Self-hosted cost | Free (all features) | Free (core) / €499+/yr (enterprise) |
      | Per-ticket fees | None | 2.5% (hosted) |
      | Payment providers | [Stripe, Square](/features/stripe-and-square/) | Stripe, PayPal, Mollie, bank transfer |
      | Target audience | Small-medium organisers | Conferences & enterprise |
      | Seating plans | No | Yes (enterprise plugin) |
      | Point of sale | No | Yes (enterprise plugin) |
      | [API access](/features/public-api/) | Yes | Yes |
      | [QR code scanning](/features/qr-code-check-ins/) | Yes | Yes |
      | Multi-currency | No | Yes |
      | Multi-language | No | Yes (30+ languages) |
      | [Encryption at rest](/features/encrypted/) | Yes (hybrid RSA + AES) | No |
      | [Apple/Google Wallet](/features/apple-wallet/) | Yes | No (enterprise add-on) |
      | [RSS/calendar feeds](/features/rss-and-calendar-feeds/) | Yes | No |
      | [Webhooks](/features/webhooks/) | Yes | Yes (enterprise) |
      | [Pay-what-you-want](/features/stripe-and-square/) | Yes | No |
      | Promo codes | No | Yes |
      | Waitlists | No | Yes |
      | [Custom domain](/features/custom-domain/) | Yes | Yes (enterprise) |
      | [Daily events](/features/daily-events/) | Yes | Yes (with series) |
      | Badge printing | No | Yes (enterprise plugin) |
      | Lead scanning | No | Yes (enterprise plugin) |

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change — check the links below for the latest figures.

      - [Pretix hosted pricing](https://pretix.eu/about/en/pricing) — 2.5% of ticket price (excl. taxes)
      - [Pretix self-hosted/enterprise pricing](https://pretix.eu/about/en/pricing/selfhosted) — from €499/year (Enterprise Starter)
      - [Pretix on GitHub](https://github.com/pretix/pretix)
      - [Pretix features](https://pretix.eu/about/en/features) — full feature list
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Try Chobble Tickets
    description: Simple, flat-rate ticketing with no percentage fees and no lock-in.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
