---
competitor_key: tixfox
title: TixFox Alternative
meta_title: Open Source & UK-Priced TixFox Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and TixFox on per-ticket fees, payment providers, ticketing features, attendee data and source licensing.
permalink: /compared-to/tixfox/
eleventyNavigation:
  key: vs TixFox
  parent: Compared To
provider_facts:
  name: TixFox
  kind: ticketing
  calculator_keys:
    - tixfox
  last_reviewed: "2026-08-03"
  registration_country: united-states
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: fixed
  managed_pricing: per-sale
  white_label: not-documented
  custom_domain: not-documented
  public_website: hosted-event-pages
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: none
  attendee_cross_marketing: not-documented
  notes:
    registration_country: "TixFox's terms of service describe TixFox LLC as a limited liability company organised under the laws of the State of Delaware, United States. Its check-in app is published on the Apple App Store by HahuCloud LLC."
    per_ticket_platform_fee: "US$0.39 per paid ticket, or US$0.30 for tickets priced under US$5. The fee is published in US dollars only. Free tickets carry no fee."
    managed_pricing: "TixFox charges for each paid ticket and has no subscription."
    white_label: "Event pages support custom colours and fonts; removing TixFox branding was not documented in the sources reviewed."
    custom_domain: "No custom-domain option was documented in the sources reviewed."
    event_marketplace: "No public event-discovery area was found on the TixFox site in this review; buyers reach events through links the organiser shares."
    attendee_cross_marketing: "The privacy policy says TixFox does not sell, trade or rent personal information and sends promotional updates only with consent. It does not state whether ticket buyers receive marketing about other organisers' events."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs TixFox

      TixFox is a US ticketing platform that charges a flat fee per paid ticket, with payments through Stripe. This page compares it to Chobble Tickets on pricing, features and data handling.
  - type: markdown
    content: |
      ## Open source TixFox alternative with UK pricing

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. TixFox does not publish its source code.

      TixFox charges US$0.39 per paid ticket (about £0.31) with no
      subscription. Chobble Tickets charges £50/year or £5/month whatever the
      volume, so the two cross over at about 160 paid tickets a year.
  - type: markdown
    content: |
      ## Pricing comparison

      [TixFox](https://tixfox.co/pricing) charges US$0.39 for each paid
      ticket, or US$0.30 for tickets priced under US$5 (about £4). There is
      no subscription, no setup fee and no charge on free tickets. Organisers
      choose whether to absorb the fee or pass it on to buyers at checkout.

      The fee is published in US dollars only. Checkout supports 18
      currencies, including pounds, but the site does not show the fee in
      any other currency. At the exchange rate used on this page, US$0.39
      is about £0.31.

      Ticket money goes directly into the organiser's own Stripe account
      through Stripe Connect, so TixFox never holds the funds. Stripe's
      processing fee is charged separately (TixFox quotes the US rate of
      2.9% + US$0.30; Stripe's standard UK rate is 1.5% + 20p). TixFox's
      platform fee is not refunded when the organiser refunds a ticket.

      Chobble Tickets is a flat £50/year or £5/month, with
      [no per-ticket platform fees](/features/no-per-ticket-fees/).
      Community groups, charities, and schools pay £25/year. At about
      £0.31 per ticket, TixFox costs less below roughly 160 paid tickets
      a year, and Chobble Tickets costs less above that.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison

      TixFox's check-in app first appeared in September 2024, so it is a
      young platform with a compact feature set. Neither platform offers
      reserved seating; TixFox's own comparison pages list it as coming
      soon.
  - type: markdown
    content: |
      ### Both platforms share some features

      - Online ticket sales with payment through Stripe (Chobble Tickets
        also supports Square and SumUp)
      - Ticket income paid straight into the organiser's own payment
        account, not held by the platform
      - QR code scanning for check-in at the door
      - Free events with no platform charge
      - E-tickets sent by email after booking
      - Discount and promo codes
      - Add-ons such as merchandise or upgrades sold alongside tickets
      - Donations at checkout
      - Pay-what-you-want pricing (TixFox calls it Pay What You Can)
      - Recurring events (TixFox schedules daily, weekly or monthly runs
        with date overrides; Chobble Tickets uses
        [per-date capacity with a calendar picker](/features/daily-events/))
      - Duplicating an event to reuse its setup
      - Custom questions on the registration form
      - Multiple ticket types per event
      - Team accounts with roles, including check-in staff who cannot see
        financial data
      - Embedding events on your own website
      - Zapier connectivity
  - type: markdown
    content: |
      ### TixFox has features Chobble Tickets doesn't

      - **Native check-in apps** - dedicated iOS and Android apps for
        scanning tickets (Chobble Tickets scans through the browser on a
        phone, without a native app)
      - **Tap to Pay at the door** - sell tickets in person and take
        contactless card payments with a phone
      - **BOGO offers** - buy-X-get-Y deals such as buy 2 get 1 free
      - **Tracking pixels** - built-in Meta Pixel, Google Analytics 4 and
        Google Tag Manager connections
      - **UTM tracking** - see which marketing channels drove each sale
      - **Multi-currency checkout** - 18 currencies on one account
        (Chobble Tickets uses one currency per instance, set at setup)
      - **Event passcodes** - restrict ticket purchase to people who hold
        an access code (Chobble Tickets supports hidden events that do not
        appear on public pages)
      - **24/7 support** - TixFox advertises round-the-clock support
  - type: markdown
    content: |
      ### Chobble Tickets has features TixFox doesn't

      - **[Open source](/features/open-source/)** - the complete product
        source is published under AGPL-3.0-only. TixFox is proprietary
        software
      - **Self-hosting option** - run the platform on selected
        infrastructure without a Chobble software licence fee
      - **Flat pricing** - £50/year or £5/month with no per-ticket
        platform fees, so costs stay the same as volume grows
      - **Pricing in pounds** - Chobble's fee is set in pounds; TixFox
        publishes its fee in US dollars
      - **[Square and SumUp support](/features/stripe-and-square/)** -
        TixFox requires a Stripe account; Chobble Tickets also works with
        Square and SumUp
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        encrypted with hybrid RSA-OAEP + AES-256-GCM, and only the
        organiser holds the private key
      - **[Custom domain included](/features/custom-domain/)** - pointing
        your own domain is part of the base price. TixFox does not
        document a custom-domain option
      - **[White labelling](/features/white-labelling/)** - remove
        platform branding entirely. TixFox supports custom colours and
        fonts but does not document removing its branding
      - **[Public-facing website and CMS](/features/your-public-website/)**
        a homepage, content pages, news posts, and a contact form, edited
        from the admin panel with Markdown and
        [custom CSS](/features/customising-your-site/). TixFox supplies
        hosted event pages
      - **[Apple Wallet and Google Wallet passes](/features/apple-wallet/)**
        - attendees can add tickets to their phone wallet
      - **[Subscribable ICS calendar feeds](/features/rss-and-calendar-feeds/)**
        - a single feed listing all events, so subscribers get automatic
        updates when new ones are added
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate
        events to feed readers
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain, not the platform's
      - **[Liquid email templates](/features/email-templates/)** - full
        control over confirmation emails with Liquid template syntax
      - **[Admin API](/features/admin-api/)**,
        **[public API](/features/public-api/)** and
        **[webhooks](/features/webhooks/)** - TixFox integrates through
        Zapier and does not document a public API or webhooks
      - **[Packages](/features/packages/)** - sell several listings
        together at a bundle price, booked all or nothing
      - **[Custom questions with price-linked answers](/features/custom-questions/)**
        - link answers to price changes for tiered pricing
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)**
        - take a deposit at booking and collect the balance later
      - **[CSV export](/features/csv-export/)** - download attendee and
        order data. TixFox does not document a data export
      - **Community Interest Company** - run by a CIC, a UK legal
        structure that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## Data ownership

      TixFox stores order information (name, email and tickets bought) so
      the organiser can manage the attendee list. Its terms state that
      organisers collect and control attendee data, and its privacy policy
      says TixFox does not sell, trade or rent personal information. Its
      sub-processor list places hosting and support services in the United
      States.

      TixFox's terms also grant it a licence to use event names,
      descriptions and images to promote the platform, including featuring
      events in promotional materials. Ticket revenue never passes through
      TixFox; it goes directly to the organiser's Stripe account.

      With Chobble Tickets, attendee data is encrypted at rest and stays
      under your control. The organiser holds the only private key that
      can decrypt it. The platform is open source, so if Chobble stopped
      operating tomorrow, you could run the same code on your own server.
  - type: markdown
    content: |
      ## When TixFox might be the better choice

      - You sell fewer than about 160 paid tickets a year, so per-ticket
        fees cost less than a subscription
      - You want native iOS and Android check-in apps
      - You want to sell tickets at the door with Tap to Pay on a phone
      - You want buy-X-get-Y ticket deals
      - You want built-in Meta Pixel, Google Analytics 4 or Google Tag
        Manager tracking
      - You sell in several currencies, particularly US dollars
      - You want round-the-clock support
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You want predictable, flat-rate pricing in pounds with no
        per-ticket platform fees
      - You take payments with Square or SumUp rather than Stripe
      - Privacy and encryption matter to you, and you want attendee data
        that the platform itself cannot read
      - You're a community group, charity, or school (£25/year)
      - You want [Apple and Google Wallet](/features/apple-wallet/)
        passes, [calendar feeds](/features/rss-and-calendar-feeds/), or a
        [public API](/features/public-api/) included
      - You want your own [custom domain](/features/custom-domain/) and a
        [public website](/features/your-public-website/) included in the
        base price
      - You want [custom email providers](/features/email-providers/) so
        confirmation emails come from your own domain
      - You value [open source](/features/open-source/) and the ability
        to read the source code, fork it, or run your own copy
  - type: markdown
    content: |
      ## Who owns TixFox?

      TixFox is run by TixFox LLC, which its terms of service describe as
      a limited liability company organised under the laws of the State of
      Delaware in the United States. The company does not publish
      information about its founders or team. Its check-in app first
      appeared on the Apple App Store in September 2024, published by
      HahuCloud LLC, which is the earliest public release date found in
      this review.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under
      [AGPL-3.0-only](/features/open-source/), and the platform can be
      self-hosted by anyone without depending on Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was checked on 3 August 2026.
      Fees may change. Check the links below for the latest figures.

      - [TixFox pricing](https://tixfox.co/pricing) - US$0.39 per paid ticket, US$0.30 for tickets under US$5, free events free
      - [TixFox FAQ](https://tixfox.co/faq) - fee pass-through, Stripe Connect payouts, non-refundable platform fees
      - [TixFox features](https://tixfox.co/features) - full feature list
      - [TixFox terms of service](https://tixfox.co/legal/tos) - Delaware LLC, fee terms, event-content licence
      - [TixFox privacy policy](https://tixfox.co/legal/privacy) - data collection and no sale of personal information
      - [TixFox sub-processors](https://tixfox.co/legal/sub-processors) - hosting and support services, United States locations
      - [TixFox vs Ticket Tailor comparison](https://tixfox.co/alternative/tickettailor) - reserved seating listed as coming soon, embed and branding rows
      - [TixFox on the Apple App Store](https://apps.apple.com/app/tixfox/id6698872869) - first released September 2024, publisher HahuCloud LLC
      - [Chobble Tickets features](/features/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Sign up for managed hosting at £50/year or £5/month, or self-host without paying Chobble a licence fee.
name: Open Source & UK-Priced TixFox Alternative | Chobble Tickets
---
