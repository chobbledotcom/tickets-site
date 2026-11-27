---
title: TWICE Commerce Alternative
meta_title: Open Source & Low Cost TWICE (Rentle) Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and TWICE Commerce, formerly Rentle, on rental pricing, serialised stock, security deposits, hosting and source code.
permalink: /compared-to/rentle/
eleventyNavigation:
  key: vs TWICE (Rentle)
  parent: Compared To
provider_facts:
  name: TWICE Commerce (formerly Rentle)
  kind: adjacent-software
  calculator_keys: []
  last_reviewed: "2026-11-26"
  registration_country: finland
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: percentage
  managed_pricing: per-location-tiered-volume-independent
  white_label: not-documented
  custom_domain: included
  public_website: built-in-full
  self_hosting: not-documented
  source_code: not-documented
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: not-documented
  attendee_cross_marketing: not-documented
  established: 2018
  public_api: included
  seating_plans: not-documented
  summary: "Finnish rental and resale platform with serialised stock and deposits, from €99 per month plus 1.5% on Stripe Connect payments on Standard."
  notes:
    registration_country: "The TWICE contact page gives TWICE Commerce Oy at Kalevankatu 3 B 8, 00100 Helsinki, Finland. Checked 26 November 2026."
    ethical_basis: "TWICE is a private company. Its about and pricing pages do not describe a charity, co-operative, CIC or B Corp structure. Checked 26 November 2026."
    per_ticket_platform_fee: "Standard charges 1.5% on successful Stripe Connect payments, on top of Stripe fees. Manual and offline payments have no commission; volume and Enterprise rates can be negotiated. Checked 26 November 2026."
    managed_pricing: "The first two inventory locations cost €99 each a month and each subsequent location costs €199 a month, billed annually. Standard has no tier fee; Enterprise starts at €5,000 a month plus location charges and includes additional security controls and services. Checked 26 November 2026."
    white_label: "Custom domains, a visual theme editor and custom CSS are included. The pricing page does not state whether TWICE branding can be removed. Checked 26 November 2026."
    custom_domain: "Custom domains are listed in the online store feature set. Checked 26 November 2026."
    public_website: "The platform includes a built-in online store, visual theme editor, page templates and a checkout builder. Checked 26 November 2026."
    self_hosting: "The reviewed pricing page does not describe a self-hosted edition. Checked 26 November 2026."
    source_code: "The reviewed pricing page does not document a source licence. Checked 26 November 2026."
    event_marketplace: "The reviewed pricing page does not describe a public marketplace. The review does not establish whether one exists. Checked 26 November 2026."
    attendee_cross_marketing: "The reviewed pricing and product pages do not describe marketing from TWICE to the operator's customers. The review does not settle the question. Checked 26 November 2026."
    established: "The about page says the founding team started TWICE in 2018. The company renamed Rentle to TWICE Commerce in 2023. Checked 26 November 2026."
    public_api: "The feature set lists an admin API, API keys, signed webhooks and a bulk API. Checked 26 November 2026."
    seating_plans: "The reviewed pricing page does not document seating plans. Checked 26 November 2026."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs TWICE Commerce

      TWICE Commerce, formerly Rentle, is a Finnish rental and resale platform with serialised stock, security deposits and a built-in store. Chobble Tickets is a lower-cost booking site for dated hire, with open source code and no payment commission.
  - type: markdown
    content: |
      ## Open source and low cost Rentle alternative

      Rentle became TWICE Commerce in 2023. The product is built for
      circular commerce: renting, reselling, subscriptions and buyback,
      with serialised or pooled stock and a storefront on the operator's own
      domain. It is a hosted service from a Finnish company.

      Chobble Tickets is a booking and ticketing platform from a UK
      community interest company. Its [source code](/features/open-source/)
      is published under AGPL-3.0-only and can be self-hosted. It counts
      capacity per listing and per date, but it does not serialise stock or
      provide a dedicated deposit hold. A mandatory fee or modifier can
      collect a deposit, with partial refunds made through the payment
      provider.

      TWICE includes tools for tracking individual items and managing
      deposits. Chobble Tickets offers dated bookings at a fixed price.
  - type: markdown
    content: |
      ## Pricing comparison

      On 26 November 2026 the [TWICE pricing
      page](https://www.twicecommerce.com/pricing) listed Standard at €99
      a month for each of the first two inventory locations and €199 for
      each location thereafter, billed annually. Standard has no tier fee.
      It charges 1.5% on successful Stripe Connect payments on top of Stripe
      fees; manual and offline payments have no commission. Enterprise starts
      at €5,000 a month plus location charges, with negotiated rates. It
      includes enforced two-factor authentication, single sign-on and audit
      logs with at least 36 months' retention, as well as additional services.

      [TWICE's transaction rates](https://www.twicecommerce.com/transactional-rates)
      also describe volume discounts and other payment providers on request.

      Onboarding is optional. Self-service costs nothing, guided onboarding
      is €999, and premium onboarding is €1,990. Priority support is €99 a
      month. Other transactional costs, such as API tokens, SMS and storage,
      are listed separately.

      Chobble Tickets is £50/year or £5/month, or £25/year or £2.50/month
      for charities, community groups, artists and musicians. It takes no
      commission from ticket or hire payments. Card processing through
      Stripe, Square or SumUp is charged separately.

      At the Standard rate of 1.5%, £40,000 in successful Stripe Connect
      payments would incur £600 in TWICE commission before the location
      charge. Chobble Tickets takes no commission. The payment provider's
      processing fee applies separately.
  - type: markdown
    content: |
      ## Feature comparison

      ### Features offered by both

      - A public storefront on a custom domain
      - Dated rental availability
      - Online payments through Stripe or another provider
      - Discount codes and add-ons
      - Customer profiles and order history
      - Email templates and documents
      - Reports and data exports
  - type: markdown
    content: |
      ### TWICE features

      - **Serialised and pooled stock tracking** - record each item or count
        a pool, with item lifecycle events
      - **Security deposits** - dedicated deposit handling alongside partial
        refunds in the order system
      - **Built-in storefront** - a visual theme editor, page templates,
        multi-language store and checkout builder
      - **Rental, resale, subscription and buyback orders** - run several
        commerce models in one system
      - **Multi-location stock** - manage inventory across stores and
        warehouses
      - **Item-level income and expenses** - attribute money to each item
      - **70+ built-in reports** - revenue, payments, stock and customer
        reporting
      - **Barcodes and certificates** - label items and attach manuals or
        certificates
      - **Bulk API and signed webhooks** - build larger integrations
  - type: markdown
    content: |
      ### Chobble Tickets features

      - **[Open source code](/features/open-source/)** - the complete
        product source is published under AGPL-3.0-only
      - **Self-hosting** - run the same product without a Chobble licence
        fee
      - **No payment commission** - the only per-payment charge is the
        payment provider's processing fee
      - **[Encryption at rest](/features/encrypted/)** - names, emails and
        free-text answers are stored encrypted
      - **Event ticketing in the same site** - sell gigs, classes and
        one-off events beside hire
      - **[QR check-in](/features/qr-code-check-ins/)** and [Apple or Google
        Wallet](/features/apple-wallet/) passes
      - **[Double-entry ledger](/features/ledger/)** - income, refunds and
        costs reconcile against each listing
      - **[Servicing holds](/features/servicing-events/)** - block capacity
        for maintenance without a customer booking
      - **A flat price that does not rise with sales** - no commission and
        no per-order fee
  - type: markdown
    content: |
      ## Data and hosting

      TWICE hosts stock records, customer data and order history. Its
      pricing page does not document a source licence or a self-hosted
      option.

      Chobble Tickets encrypts personal data at rest and publishes its
      source. The database can be exported, the code can run on another
      host, and self-hosting is allowed. Chobble has no admin access to an
      organiser's site.
  - type: markdown
    content: |
      ## When TWICE is the better choice

      - Each item needs a serial number and lifecycle record
      - You need dedicated security deposit handling
      - You need a full storefront with themes and multiple languages
      - You rent, resell and take buybacks in one business
      - You manage stock across several locations
      - You want item-level profit reporting
      - You sell enough that a 1.5% payment commission is acceptable

      ## When Chobble Tickets is the better choice

      - You count stock per date and do not need serial numbers
      - You want a fixed low price with no commission on sales
      - You also sell event tickets, classes or free registrations
      - You want open source code and the option to self-host
      - Encrypted customer data matters to you
  - type: markdown
    content: |
      ## Sources

      TWICE's prices and features were checked on 26 November 2026.

      - [TWICE pricing](https://www.twicecommerce.com/pricing) - location price, payment commission, add-ons and features
      - [TWICE about](https://www.twicecommerce.com/about) - 2018 start and company history
      - [TWICE contact](https://www.twicecommerce.com/contact) - Helsinki address
      - [Rentle becomes TWICE](https://www.twicecommerce.com/blog/news/welcome-to-twice-commerce) - name change
      - [Chobble Tickets features](/features/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Dated hire bookings at £50/year or £5/month, with no commission and open source code.
name: vs TWICE (Rentle)
---
