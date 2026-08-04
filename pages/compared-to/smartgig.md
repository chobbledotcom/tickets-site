---
competitor_key: smartgig
title: SmartGig Alternative
meta_title: Open Source & Cheaper SmartGig Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and SmartGig on module pricing, allocated seating, payment providers, attendee data and source licensing.
permalink: /compared-to/smartgig/
eleventyNavigation:
  key: vs SmartGig
  parent: Compared To
provider_facts:
  name: SmartGig
  kind: ticketing
  calculator_keys:
    - smartgig
  last_reviewed: "2026-08-04"
  registration_country: united-kingdom
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: none
  managed_pricing: feature-tiered-volume-independent
  white_label: paid-add-on
  custom_domain: paid-add-on
  public_website: hosted-event-pages
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: none
  attendee_cross_marketing: none
  notes:
    registration_country: "SmartGig's terms of service and site footer name Positive Climb LTD, registered in England and Wales, number 16949378, with ICO registration ZC170287."
    ethical_basis: "SmartGig's about page describes the product but does not describe an ownership, governance or profit structure."
    per_ticket_platform_fee: "SmartGig's published package catalogue prices the Ticketing module as a subscription and lists no charge per ticket sold. The booking fee named in its ticket-type settings is a charge the organiser sets and keeps."
    managed_pricing: "The price is the sum of the modules and features selected. Ticketing is £80/month or £800/year, and other parts, such as White Label at £50/month, are priced separately. No component price varies by ticket value or ticket volume."
    white_label: "White Label is a £50/month or £500/year package component covering custom portal and email sending domains."
    custom_domain: "Custom portal domains are part of the same White Label component."
    public_website: "SmartGig publishes a branded public ticket page for each ticketed event. No organiser website or content management area is described."
    self_hosting: "SmartGig is sold as a hosted subscription. Its terms grant a limited right to use the platform and prohibit reselling, sublicensing or white-labelling access to third parties without written agreement."
    event_marketplace: "The SmartGig site and its sitemap contain no public event-discovery area, and buyers reach events through links the organiser shares."
    attendee_cross_marketing: "SmartGig's privacy policy names the organiser as the usual data controller for event and participant data, says it does not sell personal data, and says it uses no advertising cookies or remarketing pixels."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs SmartGig

      SmartGig is a UK event management platform where ticketing is one paid module alongside trader applications, site plans, transport and stage schedules. This page compares it to Chobble Tickets on pricing, features and data handling.
  - type: markdown
    content: |
      ## Open source & cheaper SmartGig alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. SmartGig does not publish its source code and does not offer
      self-hosting.

      SmartGig charges £80 a month, or £800 a year on annual billing, for its
      Ticketing module. Chobble Tickets charges £50/year or £5/month. Neither
      price changes with ticket volume, so SmartGig costs more at every
      volume, and buys a wider set of event operations tools.
  - type: markdown
    content: |
      ## Pricing comparison

      SmartGig builds a price from parts. The base workspace costs nothing,
      and each module or feature added to it has its own price. Ticketing is
      £80/month or £800/year. Trader Manager, Transport Manager and Stage
      Manager are £20/month each, Site Plan, team access and recurring events
      are £10/month each, and White Label is £50/month. Choosing Transport,
      Stage Manager and Ticketing together takes 10% off.

      This means the price does not vary with ticket value or ticket volume,
      but it does vary with how much of the platform you switch on. An
      organiser who wants ticketing on their own domain pays £130/month, or
      £1,300/year on annual billing.

      Ticket money is taken through the organiser's own Stripe account using
      Stripe Connect, so SmartGig never holds the funds. Stripe's processing
      fee is charged separately, at 1.5% + 20p for standard UK cards. SmartGig
      does not charge a fee on each ticket sold. Its ticket types include an
      optional booking fee, which is a charge the organiser sets and keeps.

      Chobble Tickets is a flat £50/year or £5/month, with
      [no per-ticket platform fees](/features/no-per-ticket-fees/).
      Charities, community groups, artists and musicians pay £25/year on the
      annual plan. A [custom domain](/features/custom-domain/),
      [white labelling](/features/white-labelling/), extra
      [user accounts](/features/users/) and
      [repeating dates](/features/daily-events/) are part of that price
      rather than separate components.

      SmartGig offers a 14-day trial with no card required.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison

      SmartGig is an event operations platform first. Its ticketing covers
      allocated seating, high-demand launches and finance reporting in more
      depth than Chobble Tickets, and it sits beside trader applications, site
      plans, transport routes and stage schedules that Chobble Tickets does
      not offer at all.

      Chobble Tickets covers a narrower job with more of it included, and
      publishes its source so an organiser can leave with the software as well
      as the data.
  - type: markdown
    content: |
      ### Both platforms share some features

      - Online ticket sales with payment through Stripe
      - Ticket income paid straight into the organiser's own Stripe account,
        not held by the platform
      - QR code scanning for check-in at the door
      - Free and complimentary tickets
      - E-tickets and receipts sent by email after booking, with PDF
        downloads
      - Discount and promo codes, with usage caps and date windows
      - Add-on tickets sold alongside a main entry ticket
      - Timed entry, sessions and per-date capacity
        ([daily events](/features/daily-events/) in Chobble Tickets)
      - Multiple ticket types with their own capacity, price and sale window
      - Per-order and per-customer purchase limits
      - Hidden and password-protected tickets
      - Custom questions at checkout
      - Manual and box office orders entered by the organiser
      - [Refunds](/features/refunds/), including part-refunds of an order
      - [CSV export](/features/csv-export/) of orders, attendees and sales
      - Team accounts with roles, including check-in staff who cannot see
        financial data
      - [Activity logs](/features/activity-logs/) recording who changed what
      - Reusing an event's setup for the next date
  - type: markdown
    content: |
      ### SmartGig has features Chobble Tickets doesn't

      - **Allocated seating** - a seat-map builder with straight, staggered,
        curved and fanned rows, aisles, entrances, price bands, wheelchair and
        companion places and restricted-view seats, and buyers who pick an
        exact seat or use Best Available. Chobble Tickets sells general
        admission only
      - **Waiting room for high-demand launches** - SmartGig paces buyers into
        checkout automatically when demand spikes, showing queue position and
        a checkout timer
      - **Native check-in apps** - SmartGig Scanner on the App Store and
        Google Play, with scanner codes that let gate staff work without an
        organiser login (Chobble Tickets scans through the browser on a phone,
        without a native app)
      - **Trader and stallholder management** - applications, pitch fees,
        compliance documents and trader check-in, as a £20/month module
      - **Site plans** - place pitches, zones and infrastructure on an event
        map and publish it to staff and attendees, as a £10/month module
      - **Transport planning** - vehicles, stops, routes and driver job
        sheets, as a £20/month module
      - **Stage schedules** - performer applications, running orders, riders
        and production packs, as a £20/month module
      - **More payment paths at the box office** - cash, card terminal,
        invoice, payment-link and external payment orders recorded against a
        ticket order
      - **Disputes and chargebacks** - chargeback notes and failed-refund
        retry and recovery tracked on the order
      - **Ticket transfers** - move a ticket to a different holder
      - **Reusable passes** - ticket types that accept more than one check-in
      - **Checkout rules** - block invalid baskets, such as clashing sessions
        or an add-on without its entry ticket, and set a minimum spend
      - **Invite-only sales by email or domain** - restrict purchase to
        invited addresses or an email domain
      - **Gate operations reporting** - scans per minute, scanner throughput,
        stopped scans, duplicate attempts and override reasons
      - **SMS messages to buyers and participants** - sold as an allowance
        from £2/month
      - **Retention review** - configure retention periods and approve or
        extend deletion of flagged records
  - type: markdown
    content: |
      ### Chobble Tickets has features SmartGig doesn't

      - **[Open source](/features/open-source/)** - the complete product
        source is published under AGPL-3.0-only. SmartGig is proprietary
        software
      - **Self-hosting option** - run the platform on selected
        infrastructure without a Chobble software licence fee. SmartGig is
        sold as a hosted subscription only
      - **Flat all-in pricing** - £50/year or £5/month covers every feature.
        SmartGig prices modules and features separately
      - **[Square and SumUp support](/features/stripe-and-square/)** -
        SmartGig requires a Stripe account; Chobble Tickets also works with
        Square and SumUp
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        encrypted with hybrid RSA-OAEP + AES-256-GCM, and only the organiser
        holds the private key
      - **[Custom domain included](/features/custom-domain/)** - pointing
        your own domain is part of the base price. SmartGig sells custom
        portal and email domains as White Label at £50/month
      - **[White labelling](/features/white-labelling/)** - remove platform
        branding without paying extra
      - **[Public-facing website and CMS](/features/your-public-website/)** -
        a homepage, content pages, news posts, and a contact form, edited
        from the admin panel with Markdown and
        [custom CSS](/features/customising-your-site/). SmartGig supplies
        branded ticket pages for each event
      - **[Apple Wallet and Google Wallet passes](/features/apple-wallet/)** -
        attendees can add tickets to their phone wallet
      - **[Subscribable ICS calendar feeds](/features/rss-and-calendar-feeds/)** -
        a single feed listing all events, so subscribers get automatic updates
        when new ones are added. SmartGig offers a single add-to-calendar file
        per ticket
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate events
        to feed readers
      - **[Custom email providers](/features/email-providers/)** - use Resend,
        Postmark, SendGrid, or Mailgun. SmartGig's White Label component sets
        a sending domain on its own provider
      - **[Liquid email templates](/features/email-templates/)** - full
        control over confirmation emails with Liquid template syntax
      - **[Admin API](/features/admin-api/)**,
        **[public API](/features/public-api/)** and
        **[webhooks](/features/webhooks/)** - SmartGig does not document an
        API or webhooks
      - **[Embeddable order widget](/features/order-widget/)** - sell tickets
        from inside your own website
      - **[Packages](/features/packages/)** - sell several listings together
        at a bundle price, booked all or nothing
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit at booking and collect the balance later
      - **[Custom questions with price-linked answers](/features/custom-questions/)** -
        link answers to price changes for tiered pricing
      - **[Event setup export and import](/features/catalogue-import-export/)** -
        move an event's setup to another Chobble Tickets host as versioned
        JSON
      - **Community Interest Company** - run by a CIC, a UK legal structure
        that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## Data ownership

      SmartGig's terms say the organiser keeps ownership of the data entered
      into the platform, and its privacy policy names the organiser as the
      usual data controller for event and participant records. It says it does
      not sell personal data, uses no advertising cookies or remarketing
      pixels, and does not use its scanner app for advertising tracking. Some
      of its service providers process data outside the UK under standard
      transfer safeguards.

      Account owners can request an organisation data export, which SmartGig
      prepares as a ZIP package sent by email, and download links expire.
      Closed-account data is deleted or anonymised within 90 days unless it
      must be kept for legal, accounting, security, backup or dispute reasons.

      With Chobble Tickets, attendee data is encrypted at rest and stays under
      your control. The organiser holds the only private key that can decrypt
      it. The platform is open source, so if Chobble stopped operating
      tomorrow, you could run the same code on your own server.
  - type: markdown
    content: |
      ## Capacity and overselling

      SmartGig's documentation says paid checkout can reserve stock while the
      buyer completes card payment, and that a reservation expires if payment
      is not made in time. Its waiting room does not reserve tickets by
      itself, and stock is checked again before an order is created.

      Chobble Tickets works differently. Paid checkout does not reserve
      tickets or use capacity, and
      [capacity is used only when payment confirmation arrives](/features/overbooking-prevention/).
      If two confirmed payments race for the last place, the later order is
      refunded automatically.
  - type: markdown
    content: |
      ## When SmartGig might be the better choice

      - You need allocated seating with a seat map, price bands and
        buyer-chosen seats
      - You run a festival or market where trader applications, compliance
        documents, site plans, transport routes or stage schedules matter as
        much as ticket sales
      - You expect on-sale spikes large enough to need a waiting room
      - You want native iOS and Android check-in apps for gate teams
      - You take box office payments by cash, card terminal or invoice and
        want them recorded against the ticket order
      - You want SMS messages to buyers and participants
      - You want detailed gate-operations reporting after the event
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You sell general admission tickets and do not need a seating plan
      - You want one flat price that covers every feature rather than a price
        built from modules
      - You take payments with Square or SumUp rather than Stripe
      - Privacy and encryption matter to you, and you want attendee data that
        the platform itself cannot read
      - You're a charity, community group, artist or musician (£25/year on the
        annual plan)
      - You want [Apple and Google Wallet](/features/apple-wallet/) passes,
        [calendar feeds](/features/rss-and-calendar-feeds/), or a
        [public API](/features/public-api/) included
      - You want your own [custom domain](/features/custom-domain/) and a
        [public website](/features/your-public-website/) included in the base
        price
      - You want [custom email providers](/features/email-providers/) so
        confirmation emails come from your own domain
      - You value [open source](/features/open-source/) and the ability to
        read the source code, fork it, or run your own copy
  - type: markdown
    content: |
      ## Who owns SmartGig?

      SmartGig is operated by Positive Climb LTD, registered in England and
      Wales, number 16949378, with ICO registration ZC170287. Its terms of
      service are governed by the laws of England and Wales. The company does
      not publish information about its founders, team or ownership structure.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under
      [AGPL-3.0-only](/features/open-source/), and the platform can be
      self-hosted by anyone without depending on Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was checked on 4 August 2026.
      Fees may change. Check the links below for the latest figures.

      - [SmartGig pricing](https://www.smartgig.co.uk/#pricing) - the package
        builder, which prices Ticketing at £80/month or £800/year and lists
        every other component
      - [SmartGig event ticketing software](https://www.smartgig.co.uk/event-ticketing-software) - allocated seating, waiting room, orders and gate scanning
      - [SmartGig Ticketing module](https://www.smartgig.co.uk/modules/tickets) - the full ticketing feature list
      - [SmartGig Scanner app](https://www.smartgig.co.uk/smartgig-scanner-app) - iOS and Android check-in apps and scanner codes
      - [Ticket types, schedules and capacity](https://www.smartgig.co.uk/help/create-ticket-types-schedules-and-rules) - organiser-set booking fee, capacities, limits and passes
      - [Public ticket checkout and orders](https://www.smartgig.co.uk/help/public-ticket-checkout-and-orders) - checkout states, payment reservations and buyer self-service
      - [Billing, trials, packages and invoices](https://www.smartgig.co.uk/help/understand-billing-trials-and-invoices) - modules, billing cycles and the 14-day trial
      - [Ticketing reports, finance and exports](https://www.smartgig.co.uk/help/ticketing-reports-finance-and-exports) - finance panel, gate operations and CSV exports
      - [Set up White Label](https://www.smartgig.co.uk/help/set-up-white-labelling) - custom portal and email sending domains
      - [Data exports, audit log and retention review](https://www.smartgig.co.uk/help/data-exports-and-retention-review) - organisation exports and retention approval
      - [SmartGig terms of service](https://www.smartgig.co.uk/terms) - Positive Climb LTD, data ownership, billing and use restrictions
      - [SmartGig privacy policy](https://www.smartgig.co.uk/privacy) - controller roles, sharing, transfers and retention
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
name: Open Source & Cheaper SmartGig Alternative | Chobble Tickets
---
