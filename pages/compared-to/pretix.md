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

      Pretix and Chobble Tickets are both open source event ticketing platforms,
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
      it. If you're running large conferences with assigned seating, complex
      multi-track schedules, exhibitor management, or need a point-of-sale
      system, Pretix has purpose-built tools for all of that.

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
      | Open source | AGPLv3 | AGPLv3 (core) |
      | Hosted pricing | £50/year flat | 2.5% per ticket |
      | Self-hosted cost | Free (all features) | Free (core) / €499+/yr (enterprise) |
      | Per-ticket fees | None | 2.5% (hosted) |
      | Payment processing | Stripe | Stripe, PayPal, Mollie, bank transfer |
      | Target audience | Small-medium organisers | Conferences & enterprise |
      | Seating plans | No | Yes (enterprise plugin) |
      | Point of sale | No | Yes (enterprise plugin) |
      | API access | Yes | Yes |
      | QR code scanning | Yes | Yes |
      | Multi-currency | No | Yes |

  - type: cta
    title: Try Chobble Tickets
    description: Simple, flat-rate ticketing with no percentage fees and no lock-in.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
