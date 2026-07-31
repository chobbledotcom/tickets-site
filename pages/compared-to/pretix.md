---
competitor_key: pretix_hosted
selfhosted_chobble_key: chobble_selfhosted
selfhosted_competitor_key: pretix_selfhosted
title: Pretix Alternative
meta_title: UK Made & Flat Fee Pretix Alternative | Chobble Tickets
meta_description: Comparing two open source ticketing platforms, Chobble Tickets and Pretix. See how hosted and self-hosted costs compare for your event.
permalink: /compared-to/pretix/
eleventyNavigation:
  key: vs Pretix
  parent: Compared To
provider_facts:
  name: Pretix
  kind: ticketing
  calculator_keys:
    - pretix_hosted
    - pretix_selfhosted
  last_reviewed: "2026-07-28"
  registration_country: germany
  ethical_basis:
    - owner-led
    - self-described-independent
  per_ticket_platform_fee: percentage
  managed_pricing: per-sale
  white_label: partial
  custom_domain: by-arrangement
  public_website: organiser-microsite
  self_hosting: community-edition
  source_code: open-source-core
  agent_instructions: not-found
  local_dev_runtime: runtime-plus-local-services
  local_dev_source: runs-checkout
  local_dev_reload: hot-reload
  event_marketplace: none
  attendee_cross_marketing: not-documented
  notes:
    local_dev_runtime: "Python with development headers plus Node.js and a virtual environment; Django migrations create a local SQLite database. manage.py runserver reloads and starts a Vite dev server for the Vue components. Celery workers are restarted by hand. Checked 30 July 2026."
    agent_instructions: "No AGENTS.md, CLAUDE.md or .cursorrules in the repository root. Checked 30 July 2026."
    registration_country: "pretix is developed from Heidelberg, Germany; no registered legal entity was established in the sources reviewed."
    per_ticket_platform_fee: "Pretix Hosted charges 2.5% of ticket value, capped per ticket; payment processing is separate."
    ethical_basis: "Pretix describes itself as owner-led and says it operates without pressure from investors or creditors."
    managed_pricing: "Pretix Hosted charges for each paid ticket rather than using a volume-independent subscription."
    custom_domain: "Pretix Hosted supports organiser-owned domains by arrangement; self-hosted deployments use the operator's configured domain."
    public_website: "Pretix supplies organiser profiles, event shops and mini-CMS pages for static content."
    self_hosting: "The Community edition is free; proprietary enterprise plugins require a paid licence."
    source_code: "Core ticketing is AGPLv3, while several enterprise plugins are proprietary."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Pretix

      Two open source ticketing platforms with very different models. This page compares them on cost, complexity, and approach.
  - type: markdown
    content: |
      ## UK made & flat fee Pretix alternative

      Chobble Tickets is made in the UK by a community interest company and
      priced in pounds. Pretix is made in Germany by pretix GmbH and priced
      in euros.

      Both platforms are open source and both can be self-hosted. Pretix
      Hosted charges 2.5% of each ticket price, capped at €15 per ticket, on
      top of payment provider fees. Chobble Tickets charges a flat £50/year
      or £5/month however many tickets you sell.

      Self-hosting differs too. Pretix keeps some features, such as seating
      plans and point of sale, in enterprise plugins from €499 a year.
      Chobble Tickets has one version with no licence fee and no feature
      tier.
  - type: markdown
    content: |
      ## Two open source projects, two approaches

      [Pretix](https://pretix.eu) and Chobble Tickets are both open source event ticketing platforms,
      but they target very different audiences. Pretix is built for large
      conferences, exhibitions, and enterprise customers, with a feature set to
      match. Chobble Tickets is built for smaller organisers who want something
      simple, affordable, and transparent.

      Other open source comparisons cover
      [Hi.Events](/compared-to/hi-events/) and
      [Swicket with alf.io](/compared-to/swicket/). The
      [open source page](/features/open-source/) describes Chobble Tickets
      without a competitor comparison.
  - type: markdown
    content: |
      ### Both platforms share some features

      - Open source under AGPLv3
      - Self-hosting option with no licence fee for core features
      - Stripe payment processing, paying the organiser directly
      - Apple Pay and Google Pay at checkout (via Stripe)
      - Apple Wallet and Google Wallet passes
      - QR code scanning for check-in at the door
      - A door list for checking attendees in by hand
      - Event capacity limits
      - Free event support with no payment setup required
      - Daily and recurring event support
      - Timed-entry sessions as well as general admission
      - Custom questions on the booking form
      - Promo codes and discount rules
      - Optional extras sold alongside tickets
      - Extras a buyer must choose before they can check out
      - Several listings sold together at a bundle price
      - Buyer-set pricing above a minimum
      - Multiple admin users with different permissions
      - Several events managed under one organisation
      - Email confirmations to attendees after booking
      - Confirmation emails sent from your own domain
      - Editable email templates
      - Bulk email to a filtered set of attendees
      - Refund processing
      - Bookings recorded by hand for cash and door sales
      - A log of admin actions and booking activity
      - Retention rules and erasure tools for attendee data
      - Team accounts that can edit listings without seeing attendee records
      - CSV export of booking data
      - A public API and an authenticated admin API
      - Webhooks for real-time notifications
      - An embeddable ticket widget for your own website
      - Custom domain support
      - Branding on your booking pages with your own colours and images

      The differences are in pricing, complexity, and who they're designed
      for.
  - type: markdown
    content: |
      ## Hosted pricing comparison

      Pretix Hosted charges 2.5% of each ticket's price (excl. taxes), capped
      at €15 per ticket, with no monthly or annual fee. This is on top of
      payment provider fees (such as Stripe, PayPal, or Mollie), so the
      total cost per ticket is higher than 2.5%. That's manageable for a
      handful of tickets, but costs rise quickly at volume.

      Chobble Tickets charges a flat £50/year or £5/month regardless of how many tickets you
      sell or what you charge for them. No percentage cut or [per-ticket platform fee](/features/no-per-ticket-fees/).
      Community groups, charities, artists and musicians pay £25/year.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Self-hosted pricing comparison

      Both platforms can be self-hosted, but the licensing models differ.

      Chobble Tickets is fully open source with **no license fee**. You get
      every feature for free when you self-host, and there is no "community vs
      enterprise" split.

      The recommended deployment compiles to a single JavaScript file that runs
      on Bunny Edge Scripting with a Bunny database, so there is no server to
      manage, no scaling to configure and no database replication to maintain.
      The [deployment page](/features/deployment/) covers the other routes.
      Deno Deploy runs the same kind of script on another company's hosting,
      and the repository ships Docker configuration with ready-made files for
      Fly and Render, so the same image runs on a managed host or on a server
      the operator keeps. Running that server yourself is the one route that
      leaves a host to maintain.

      Pretix offers a free Community edition, but its proprietary plugins
      (seating, lead scanning, POS, resellers, and more) require a Pretix
      Enterprise license starting at €499/year (approx. £420). The full-featured
      Enterprise Professional tier is €750/year, and Ultimate is €950/year.
      Self-hosting Pretix also means running a traditional server with
      Python, PostgreSQL, Redis, and a reverse proxy. That is infrastructure
      you need to manage, update, and keep online yourself.
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

      - **Interactive seating plans** - a graphical venue editor for
        custom layouts with seat-to-pricing mapping and seat blocking
        (enterprise plugin)
      - **Point of sale (pretixPOS)** - an Android tablet-based cash
        register for on-the-door sales that syncs with the online shop in
        real time (enterprise plugin)
      - **Dedicated scanning apps** - pretixSCAN for Android, iOS,
        Windows, and Linux with offline mode and multi-device sync, plus
        automatic badge printing after scan. Chobble Tickets scans through
        a phone browser, so the door needs a working connection
      - **15+ languages** - full multi-language support so attendees see
        the checkout in their preferred language (German, English, Arabic,
        Chinese, Danish, Dutch, French, Italian, Spanish, Turkish, and
        more). Chobble Tickets is English only, though an operator can
        change the wording of any message
      - **30+ payment methods** - Stripe, PayPal, Mollie, Adyen, Apple
        Pay, Google Pay, WeChat Pay, Alipay, Klarna, SEPA, Bitcoin
        (BitPay), bank transfer, and many regional methods. Chobble Tickets
        supports [Stripe, Square and SumUp](/features/stripe-and-square/)
      - **More than one currency** - different events can sell in
        different currencies. A Chobble Tickets site uses one currency
      - **Automatic invoicing** - EU reverse charge support, ZUGFeRD
        invoices, and Peppol e-invoicing for B2B compliance
      - **Tax management** - configure VAT rates per product and country
      - **Waitlists** - automatic notifications when places open up, with
        manual and auto-assignment modes
      - **Product variations** - options such as sizes within one product.
        Chobble Tickets models these as separate listings in a
        [group](/features/groups/), or as
        [child listings](/features/parent-child-listings/) attached to a
        parent
      - **Customer accounts** - buyers log in to see and manage their past
        orders. Chobble Tickets has no attendee login. Its
        [returning-customer discounts](/features/promo-codes-and-add-ons/)
        recognise a repeat buyer by a one-way code instead
      - **Memberships** - membership models and member-only products
      - **File-upload questions** - attendees can upload a file at
        checkout. Chobble Tickets questions are multiple-choice or free
        text
      - **Badge and name tag printing** - auto-generate and print attendee
        badges at check-in using custom designs (enterprise plugin)
      - **Certificates of attendance** - auto-generated certificates for
        checked-in attendees
      - **Lead scanning (pretixLEAD)** - app for exhibitors to scan
        attendee badges and capture lead data (enterprise plugin)
      - **Exhibitor management** - dedicated plugin for managing exhibitors
        at trade fairs and conferences
      - **Reseller network** - offline ticket outlets with
        settlement/invoicing tools
      - **Campaign and affiliate tracking** - built-in analytics with
        Google Analytics and Facebook Pixel integration
      - **Newsletter integration** - MailChimp and Newsletter2Go
        connectors, alongside the mass email both platforms send from the
        admin backend. Chobble Tickets connects to newsletter tools
        through [webhooks](/features/webhooks/) instead
      - **Zapier integration** - connect to 5,000+ apps
      - **Check-in lists with permissions** - multiple independent
        check-in lists per gate or area with custom fields at scan
      - **Digital content delivery** - attach downloadable content to
        tickets
      - **Shipping** - physical product delivery management
      - **Virtual event support** - Venueless integration for hybrid and
        virtual events
      - **150+ plugins** - a [plugin
        marketplace](https://marketplace.pretix.eu/) with 150+ official and
        third-party plugins extending every aspect of the platform

      Note: many of Pretix's larger-event features (seating, POS, lead
      scanning, badges, resellers, and others) are only available with a
      Pretix Enterprise licence starting at €499/year. The free Community
      edition includes core ticketing but lacks these plugins.
  - type: markdown
    content: |
      ### Chobble Tickets has features Pretix doesn't

      - **[Encryption at rest](/features/encrypted/)** - attendee names,
        contact details, payment references and free-text answers are
        encrypted before they are stored. Only the keys held by your own
        administrator accounts, plus the optional recovery account you can
        enable, unlock them. Both platforms can restrict a team member to
        editing listings, but an [editor](/features/editors/) here holds no
        key, so the data stays unreadable to them even at the database
      - **[Flat pricing](/features/no-per-ticket-fees/)** - £50/year or
        £5/month whatever you sell, with no percentage taken from any
        ticket
      - **[Public-facing website and CMS](/features/your-public-website/)** -
        a homepage, content pages, news posts, and a contact form with spam
        protection, edited from the admin panel with Markdown and
        [custom CSS](/features/customising-your-site/). Pretix provides
        organiser profiles, event shops and mini-CMS pages for static
        content
      - **[SMS messages](/features/sms-messages/)** - text attendees from
        your own Android phone and number, with replies recorded against
        the booking. Pretix sends SMS through a third-party plugin, using a
        messaging service rather than your own number
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit at booking time and collect the balance later
        through a payment link
      - **[Double-entry ledger](/features/ledger/)** - every income figure,
        refund and outstanding balance comes from one ledger you can filter
        by date and listing
      - **[Logistics and run sheets](/features/logistics/)** - deliveries,
        equipment hire, transport, set-up and teardown at customer
        addresses, with an agent assigned to each leg
      - **[Multi-day hire](/features/multi-day-hire/)** - bookings across
        consecutive days, priced per duration, with capacity checked over
        the whole booked range
      - **[Servicing holds](/features/servicing-events/)** - block out
        capacity for maintenance or staff holds without creating a customer
        booking
      - **[Postcode lookup](/features/postcode-lookup/)** - buyers type a
        postcode and pick their address from a list
      - **[Subscribable calendar and RSS feeds](/features/rss-and-calendar-feeds/)** -
        one feed listing all your events, so subscribers see new ones
        automatically
      - **[Order widget](/features/order-widget/)** - one JavaScript file
        turns the links already on your website into add-to-cart buttons,
        with a floating cart. Pretix embeds its shop in a page instead
      - **[Complete database backups](/features/backups/)** and
        [catalogue import and export](/features/catalogue-import-export/)
        you can take from the admin panel and move to another Chobble
        Tickets host
      - **[Built-in admin guide](/features/admin-guide/)** - documentation
        for the main admin areas, inside the admin panel
      - **Community Interest Company** - run by a CIC, a UK legal structure
        that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You run community events, school fairs, local gigs, classes, hire
        bookings or charity fundraisers rather than large conferences
      - You want a price that does not change with ticket volume or value
      - You want every feature without a community-versus-enterprise split
      - You want [encryption at rest](/features/encrypted/) and
        [privacy controls](/features/who-can-see-your-data/) as standard
      - You want a [public website](/features/your-public-website/) on
        [your own domain](/features/custom-domain/) rather than an event
        shop page
      - You take payments through [Square or
        SumUp](/features/stripe-and-square/), which Pretix does not offer.
        Pretix supports far more payment methods overall
      - You want [deposits](/features/deposits-and-balance-payments/),
        [logistics](/features/logistics/) or
        [multi-day hire](/features/multi-day-hire/), which Pretix does not
        cover
      - You want to self-host without running Python, PostgreSQL and Redis
  - type: markdown
    content: |
      ## Feature comparison at a glance

      | | Chobble Tickets | Pretix |
      |---|---|---|
      | Open source | AGPL-3.0-only (all features) | AGPLv3 (core only) |
      | Hosted pricing | £50/year or £5/month flat | 2.5% per ticket + payment provider fees |
      | Self-hosted software licence | No Chobble licence fee | Free (core) / €499+/yr (enterprise) |
      | Self-hosted infrastructure | Serverless (Bunny.net edge) | Traditional server (Python, PostgreSQL, Redis) |
      | Per-ticket platform fees | None | 2.5% + payment provider fees (hosted) |
      | Payment providers | [Stripe, Square, SumUp](/features/stripe-and-square/) | Stripe, PayPal, Mollie, Adyen, 30+ methods |
      | Target audience | Small-medium organisers | Conferences & enterprise |
      | Seating plans | No | Yes (enterprise plugin) |
      | Point of sale | No | Yes (enterprise plugin) |
      | [Public API](/features/public-api/) | Yes | Yes |
      | [Admin API](/features/admin-api/) | Yes (API keys) | Yes |
      | [QR code scanning](/features/qr-code-check-ins/) | Yes (phone browser) | Yes (offline apps) |
      | More than one currency | No | Yes |
      | More than one language | No | Yes (15+ languages) |
      | [Encryption at rest](/features/encrypted/) | Yes (hybrid RSA + AES) | No |
      | [Apple/Google Wallet](/features/apple-wallet/) | Yes | Yes (plugin) |
      | [RSS/calendar feeds](/features/rss-and-calendar-feeds/) | Yes | No |
      | [Webhooks](/features/webhooks/) | Yes | Yes |
      | [Pay-what-you-want](/features/stripe-and-square/) | Yes | Yes (free price) |
      | [Deposits and balance payments](/features/deposits-and-balance-payments/) | Yes | No |
      | [Double-entry ledger](/features/ledger/) | Yes | No |
      | [Event groups](/features/groups/) | Yes | Yes (with series) |
      | Tiered ticket types | Yes (via groups with shared capacity) | Yes (product variations) |
      | [Packages and bundles](/features/packages/) | Yes | Yes (add-on products) |
      | [Promo codes and add-ons](/features/promo-codes-and-add-ons/) | Yes | Yes (vouchers) |
      | Returning-customer discounts | Yes (one-way code) | Yes (customer accounts) |
      | [SMS messages](/features/sms-messages/) | Yes (your own number) | Via a third-party plugin |
      | [Bulk email](/features/bulk-email/) | Yes | Yes, plus MailChimp connector |
      | [Activity logs](/features/activity-logs/) | Yes | Yes |
      | [Attendee privacy controls](/features/privacy-controls/) | Retention rules, contact history removal, attendee data export | Data shredders, anonymisation, data export |
      | [White-label emails](/features/email-providers/) | Yes (own domain + templates) | Partial |
      | Custom questions | Yes (multiple choice, free-text) | Yes (free-text, files, more) |
      | Waitlists | No | Yes |
      | Invoicing and VAT rates | No | Yes |
      | [Custom domain](/features/custom-domain/) | Yes | Yes (by arrangement) |
      | [Public website & CMS](/features/your-public-website/) | Full site | Event shop with mini-CMS pages |
      | [Daily events](/features/daily-events/) | Yes | Yes (with series) |
      | [Logistics and run sheets](/features/logistics/) | Yes | No |
      | [Multi-day hire](/features/multi-day-hire/) | Yes | No |
      | [Backups and catalogue export](/features/backups/) | Yes (from the admin panel) | Database level only |
      | Badge printing | No | Yes (enterprise plugin) |
      | Lead scanning | No | Yes (enterprise plugin) |
  - type: markdown
    content: |
      ## Attendee data

      Pretix stores attendee data in a PostgreSQL database in readable
      form. On Pretix Hosted that database is run by pretix GmbH; on a
      self-hosted install it sits on your own server. The sources reviewed
      do not document whether Pretix uses attendee data to market other
      events.

      Chobble Tickets encrypts attendee names, contact details, payment
      references and free-text answers before they are stored. Only the
      keys held by your own administrator accounts, plus the optional
      recovery account you can enable, unlock them. The
      [who can see your data](/features/who-can-see-your-data/) page lists
      every user and service provider that may receive attendee data.
  - type: markdown
    content: |
      ## Who builds Pretix?

      Pretix was created by Raphael Michel, who started writing it in 2014
      while working as a freelance developer in Heidelberg, Germany. The
      company behind it ([pretix GmbH](https://pretix.eu/about/en/company),
      formerly rami.io GmbH, renamed in 2025) is owner-led. Its website states
      that the company has grown through customers "without any pressure by
      investors or creditors." This does not establish that the company has
      never had any creditor relationship.

      Pretix received a German federal government grant through the
      Prototype Fund (funded by the BMBF) in 2017–2018, but has no
      recorded private venture capital.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. Chobble Tickets is published under
      [AGPL-3.0-only](/features/open-source/) with no enterprise tier or
      feature gates, and the platform can be self-hosted by anyone without
      depending on Chobble as a company. The [hosting page](/hosting/)
      describes its deployment options.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in June 2026. The
      feature comparison was checked on 28 July 2026. Fees may change.
      Check the links below for the latest figures.

      - [Pretix hosted pricing](https://pretix.eu/about/en/pricing) - 2.5% of ticket price (excl. taxes), capped at €15/ticket, plus payment provider fees
      - [Pretix self-hosted/enterprise pricing](https://pretix.eu/about/en/pricing/selfhosted) - from €499/year (Enterprise Starter)
      - [Pretix on GitHub](https://github.com/pretix/pretix)
      - [Pretix features - shop](https://pretix.eu/about/en/features/shop) - ticketing and shop features
      - [Pretix features - check-in](https://pretix.eu/about/en/features/checkin) - scanning and on-site tools
      - [Pretix plugin marketplace](https://marketplace.pretix.eu/) - 150+ official and third-party plugins
      - [Chobble Tickets pricing](/pricing/)
      - [Chobble Tickets features](/features/)
      - [Pretix company page](https://pretix.eu/about/en/company) - team and company information
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Flat-rate ticketing with published AGPL-3.0-only product source.
name: UK Made & Flat Fee Pretix Alternative | Chobble Tickets
---
