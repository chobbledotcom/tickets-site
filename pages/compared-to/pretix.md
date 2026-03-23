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

      **Both sites share some features:**

      - Open source under AGPLv3
      - Self-hosting option with no licence fee for core features
      - Stripe payment processing
      - Apple Pay and Google Pay at checkout (via Stripe)
      - QR code scanning for check-in at the door
      - API access for custom integrations
      - Capacity management to prevent overselling
      - Email confirmations to attendees after booking
      - Free event support with no payment setup required
      - Daily and recurring event support
      - Refund processing
      - Custom domain support
      - Webhooks for custom integrations

      The differences are in pricing, complexity, and who they're designed
      for.

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
      enterprise" split. And because Chobble compiles to a single JavaScript
      file that runs on Bunny.net edge scripts with a Bunny.net edge database,
      there's no server to manage, no scaling to configure, and no database
      replication to maintain — it's all built into the Bunny platform.

      Pretix offers a free Community edition, but its proprietary plugins
      (seating, lead scanning, POS, resellers, and more) require a Pretix
      Enterprise license starting at €499/year (approx. £420). The full-featured
      Enterprise Professional tier is €750/year, and Ultimate is €950/year.
      Self-hosting Pretix also means running a traditional server with Python,
      PostgreSQL, Redis, and a reverse proxy — infrastructure you need to
      manage, update, and keep online yourself.

  - type: include
    file: price-comparator-selfhosted.html

  - type: markdown
    content: |
      ## When Pretix might be the better choice

      Pretix is a mature, feature-rich platform with years of development
      behind it. Their features are documented across their
      [shop](https://pretix.eu/about/en/features/shop),
      [marketing](https://pretix.eu/about/en/features/marketing),
      [payment](https://pretix.eu/about/en/features/payment),
      [check-in](https://pretix.eu/about/en/features/checkin), and
      [admin](https://pretix.eu/about/en/features/admin) pages. Here's what
      Pretix offers that Chobble Tickets doesn't:

      - **Interactive seating plans** — a graphical venue editor for
        custom layouts with seat-to-pricing mapping and seat blocking
        (enterprise plugin)
      - **Point of sale (pretixPOS)** — an Android tablet-based cash
        register for on-the-door sales that syncs with the online shop in
        real time (enterprise plugin)
      - **Dedicated scanning apps** — pretixSCAN for Android, iOS,
        Windows, and Linux with offline mode and multi-device sync, plus
        automatic badge printing after scan
      - **15+ languages** — full multi-language support so attendees see
        the checkout in their preferred language (German, English, Arabic,
        Chinese, Danish, Dutch, French, Italian, Spanish, Turkish, and
        more)
      - **30+ payment methods** — Stripe, PayPal, Mollie, Adyen, Apple
        Pay, Google Pay, WeChat Pay, Alipay, Klarna, SEPA, Bitcoin
        (BitPay), bank transfer, and many regional methods
      - **Voucher and promo codes** — percentage and fixed-amount
        discounts, time-limited, single or multi-use, tied to specific
        products, with seat reservation and exclusive product access
      - **Automatic invoicing** — EU reverse charge support, ZUGFeRD
        invoices, and Peppol e-invoicing for B2B compliance
      - **Waitlists** — automatic notifications when places open up, with
        manual and auto-assignment modes
      - **Product variations and add-ons** — per-product variations (sizes,
        options) with add-on packages and bundled products (Chobble
        supports tiered ticket types via event groups with shared capacity,
        but not per-product variations or add-ons)
      - **Customer accounts and memberships** — returning customer
        discounts, membership models, and member-only products
      - **Badge and name tag printing** — auto-generate and print attendee
        badges at check-in using custom designs (enterprise plugin)
      - **Certificates of attendance** — auto-generated certificates for
        checked-in attendees
      - **Lead scanning (pretixLEAD)** — app for exhibitors to scan
        attendee badges and capture lead data (enterprise plugin)
      - **Exhibitor management** — dedicated plugin for managing exhibitors
        at trade fairs and conferences
      - **Reseller network** — offline ticket outlets with
        settlement/invoicing tools
      - **Campaign and affiliate tracking** — built-in analytics with
        Google Analytics and Facebook Pixel integration
      - **Newsletter integration** — MailChimp and Newsletter2Go
        connectors
      - **Zapier integration** — connect to 5,000+ apps
      - **Advanced checkout questions** — free-text, file uploads, and
        statistical overview per ticket type (Chobble supports
        multiple-choice custom questions)
      - **Check-in lists with permissions** — multiple independent
        check-in lists per gate or area with custom fields at scan
      - **Digital content delivery** — attach downloadable content to
        tickets
      - **Shipping** — physical product delivery management
      - **Virtual event support** — Venueless integration for hybrid and
        virtual events
      - **160+ plugins** — a [plugin
        marketplace](https://marketplace.pretix.eu/) with 160+ official and
        third-party plugins extending every aspect of the platform
      - **Multi-event organisers** — manage multiple events under one
        organisation with shared settings and branding
      - **Tax management** — configure VAT rates per product and country

      Note: many of Pretix's advanced features (seating, POS, lead
      scanning, badges, resellers, and others) are only available with a
      Pretix Enterprise licence starting at €499/year. The free Community
      edition includes core ticketing but lacks these plugins.

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
      | Self-hosted infrastructure | Serverless (Bunny.net edge) | Traditional server (Python, PostgreSQL, Redis) |
      | Per-ticket fees | None | 2.5% (hosted) |
      | Payment providers | [Stripe, Square](/features/stripe-and-square/) | Stripe, PayPal, Mollie, Adyen, 30+ methods |
      | Target audience | Small-medium organisers | Conferences & enterprise |
      | Seating plans | No | Yes (enterprise plugin) |
      | Point of sale | No | Yes (enterprise plugin) |
      | [API access](/features/public-api/) | Yes | Yes |
      | [QR code scanning](/features/qr-code-check-ins/) | Yes | Yes |
      | Multi-currency | No | Yes |
      | Multi-language | No | Yes (15+ languages) |
      | [Encryption at rest](/features/encrypted/) | Yes (hybrid RSA + AES) | No |
      | [Apple/Google Wallet](/features/apple-wallet/) | Yes | No (enterprise add-on) |
      | [RSS/calendar feeds](/features/rss-and-calendar-feeds/) | Yes | No |
      | [Webhooks](/features/webhooks/) | Yes | Yes (enterprise) |
      | [Pay-what-you-want](/features/stripe-and-square/) | Yes | No |
      | [Event groups](/features/groups/) | Yes | Yes (with series) |
      | Tiered ticket types | Yes (via groups with shared capacity) | Yes (product variations) |
      | [White-label emails](/features/email-providers/) | Yes (own domain + templates) | Partial |
      | Custom questions | Yes (multiple choice) | Yes (free-text, files, more) |
      | [Admin API](/features/public-api/) | Yes (API keys) | Yes |
      | Promo codes | No | Yes |
      | Waitlists | No | Yes |
      | [Custom domain](/features/custom-domain/) | Yes | Yes (enterprise) |
      | [Daily events](/features/daily-events/) | Yes | Yes (with series) |
      | Badge printing | No | Yes (enterprise plugin) |
      | Lead scanning | No | Yes (enterprise plugin) |

  - type: markdown
    content: |
      ## Who builds Pretix?

      Pretix was created by Raphael Michel, who started writing it in 2014
      while working as a freelance developer in Heidelberg, Germany. The
      company behind it — [pretix GmbH](https://pretix.eu/about/en/company)
      (formerly rami.io GmbH, renamed in 2025) — is owner-led with no
      external investors. Their website states the company has "grown
      organically through customers without any pressure by investors or
      creditors." The team has grown to approximately 28 people.

      Pretix received a German federal government grant through the
      Prototype Fund (funded by the BMBF) in 2017–2018, but has no
      recorded private venture capital.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) — a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3 with
      no enterprise tier or feature gates, and the platform can be
      self-hosted by anyone without depending on Chobble as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change — check the links below for the latest figures.

      - [Pretix hosted pricing](https://pretix.eu/about/en/pricing) — 2.5% of ticket price (excl. taxes)
      - [Pretix self-hosted/enterprise pricing](https://pretix.eu/about/en/pricing/selfhosted) — from €499/year (Enterprise Starter)
      - [Pretix on GitHub](https://github.com/pretix/pretix)
      - [Pretix features — shop](https://pretix.eu/about/en/features/shop) — ticketing and shop features
      - [Pretix features — check-in](https://pretix.eu/about/en/features/checkin) — scanning and on-site tools
      - [Pretix plugin marketplace](https://marketplace.pretix.eu/) — 160+ official and third-party plugins
      - [Chobble Tickets features](/features/)
      - [Pretix company page](https://pretix.eu/about/en/company) — team and company information

  - type: cta
    title: Try Chobble Tickets
    description: Simple, flat-rate ticketing with no percentage fees and no lock-in.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
