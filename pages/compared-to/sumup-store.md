---
competitor_key: sumup_store
title: SumUp Online Store Alternative
meta_title: Open Source & Purpose-Built SumUp Online Store Alternative | Chobble Tickets
meta_description: Compare using a SumUp Online Store to sell tickets with Chobble Tickets on fees, QR check-in, capacity limits, refunds, attendee data and self-hosting.
permalink: /compared-to/sumup-store/
eleventyNavigation:
  key: vs SumUp Online Store
  parent: Compared To
provider_facts:
  name: SumUp Online Store
  kind: adjacent-software
  calculator_keys:
    - sumup_store
  last_reviewed: "2026-08-01"
  registration_country: united-kingdom
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: none
  managed_pricing: per-sale
  white_label: partial
  custom_domain: included
  public_website: organiser-microsite
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: none
  attendee_cross_marketing: not-documented
  established: 2020
  public_api: not-offered
  seating_plans: not-reviewed
  summary: "A free online shop from the payment company SumUp that can sell tickets as products, charging 2.5% per payment."
  notes:
    established: "SumUp's press pages say the first version of the Online Store launched in May 2020; the SumUp group itself was founded in 2012 (sumup.com press, checked 11 August 2026)."
    public_api: "SumUp has a developer API for payments, but the store does not expose event data."
    registration_country: "SumUp Payments Limited is authorised by the Financial Conduct Authority in the UK (register number 900700). The SumUp group was founded in 2012, is headquartered in London, and operates in 38 markets."
    per_ticket_platform_fee: "The store itself is free. SumUp charges 2.5% on each online payment, which covers payment processing; there is no separate platform fee per sale."
    managed_pricing: "The online store has no monthly cost. The optional Payments Plus plan (£19/month) lowers in-person card fees but does not change the 2.5% online rate."
    white_label: "The storefront carries the organiser's own branding and domain, while the payment checkout is SumUp's."
    custom_domain: "SumUp documents custom domains as part of the online store setup."
    public_website: "The online store is a hosted storefront with website templates rather than a general website builder."
    event_marketplace: "No public directory of other merchants' stores was found in the sources reviewed. Each store is shared by link. Checked 1 August 2026."
    attendee_cross_marketing: "Whether SumUp markets to shoppers after a purchase was not established in the sources reviewed. Checked 1 August 2026."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs SumUp Online Store

      SumUp Online Store is a free website for selling items. This page
      compares selling event tickets through it with Chobble Tickets.
  - type: markdown
    content: |
      ## Open source & purpose-built SumUp Online Store alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. SumUp does not publish its source code.

      The SumUp Online Store is free to open and charges 2.5% on each online
      payment. Chobble Tickets costs £50/year or £5/month and charges [no
      per-ticket platform fee](/features/no-per-ticket-fees/). Payment
      processing is separate with both products.

      Chobble Tickets can also take payments through your SumUp account.
      This page compares the SumUp Online Store as a way of selling tickets.
      SumUp's payment processing works with Chobble Tickets as well.
  - type: markdown
    content: |
      ## What the SumUp Online Store is

      [SumUp Online Store](https://www.sumup.com/en-gb/online-store/) is
      software for building an online shop, made by the payment company
      SumUp. An organiser creates a storefront from templates, adds items to
      a catalogue, and sells them online.

      The store costs nothing to open and has no monthly fee. Each online
      payment costs 2.5%, which includes payment processing.

      SumUp describes the store as a way to sell products and services,
      with shipping, in-store pickup and service locations. It is not event
      software.

      To sell tickets, an organiser adds a ticket as an item in the
      catalogue. The store has no event dates, no per-event capacity, no
      ticket types, no QR-code tickets, no check-in and no attendee
      management.
  - type: markdown
    content: |
      ## Pricing comparison

      A £15 ticket sold through the SumUp Online Store costs 37.5p in SumUp
      fees (2.5%). The same sale through Chobble Tickets with Stripe
      processing costs 42.5p (1.5% plus 20p), before the flat fee.

      The break-even depends on ticket price and volume. At £40 tickets,
      the two options cost the same once about 250 tickets sell in a year.
      Below that, the percentage costs less; above it, the flat fee does.

      If you connect your SumUp account to Chobble Tickets instead of Stripe,
      the 2.5% processing applies to both, so the choice is between the flat
      fee and no flat fee.

      In-person payments taken with a SumUp card reader cost 1.69%, or 0.99%
      for domestic cards on the optional Payments Plus plan at £19/month.
      Online store payments stay at 2.5%. In-person payments made with a
      SumUp personal card cost 0%.

      Money from sales lands in the SumUp Business Account by 7am the next
      day, including weekends and bank holidays. The same applies when your
      SumUp account is connected to Chobble Tickets. With Stripe, payouts
      follow Stripe's own schedule.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison

      The SumUp Online Store is built for selling items. Chobble Tickets is
      built for running events. The overlap is real but small, so here is
      the breakdown:
  - type: markdown
    content: |
      ### Both products share some features

      - Online sales with card payment
      - A public website with templates and your own branding
      - A custom domain for the store or event site
      - Discount codes and sales promotions
      - Editable order confirmation emails
      - Real-time sales reports
      - Limits you set yourself (item stock or event capacity)
  - type: markdown
    content: |
      ### The SumUp Online Store has features Chobble Tickets doesn't

      - **Physical products and delivery** - sell merchandise, concessions
        and goods alongside tickets, with delivery methods, shipping costs,
        shipment tracking and restock alerts. Chobble can take payment for
        physical items too, using [purchasable
        events](/features/purchasable-events/) or [add-ons](/features/promo-codes-and-add-ons/),
        with capacity or stock limits, but has no checkout shipping
        methods, parcel tracking or restock alerts
      - **Card readers and point of sale** - the store connects to SumUp's
        card readers, Tap to Pay and point of sale software, so the same
        item catalogue and payment account can take sales in person.
        Chobble cannot take card payments in person: at the door it [scans
        QR-code tickets](/features/qr-code-check-ins/), and sales taken by
        hand are recorded by [adding attendee records
        manually](/features/manual-attendees/)
      - **0% fees with SumUp cards** - in-person payments made with a SumUp
        personal card cost 0%
      - **Gift cards** - customers can buy SumUp e-gift cards online, and
        the cards are sold and redeemed through the SumUp app and point of
        sale
      - **Returns management** - customers can request a return from their
        order confirmation, which you approve or reject in one place
      - **Cross-selling** - the store suggests related items to buyers at
        checkout
      - **Announcement bar** - display a banner across the storefront for
        promotions
      - **Instagram and social selling** - promote store items with images
        and links on social media
      - **Free tier** - the store itself is free, with no monthly
        subscription
  - type: markdown
    content: |
      ### Chobble Tickets has features the SumUp Online Store doesn't

      - **[QR-code tickets and check-in](/features/qr-code-check-ins/)** -
        each booking gets a unique QR code, and a phone camera scans people
        in at the door. A store order does not include a ticket or a way to
        check attendance
      - **[Capacity limits](/features/overbooking-prevention/)** - capacity
        is set per event and per date, and is rechecked when payment is
        confirmed. An order that cannot be honoured is refunded
        automatically. The store tracks item stock, not event capacity
      - **[Ticket types and tiers](/features/groups/)** - multiple ticket
        types per event, plus VIP, early bird and other tiers sharing a
        capacity cap
      - **[Multiple dates and recurring events](/features/daily-events/)** -
        per-date capacity with a calendar picker and holiday blackouts
      - **[Refunds](/features/refunds/)** - process individual or bulk
        refunds from the admin panel, with the booking records updated
        automatically. Refunding a store order means finding the payment in
        SumUp and refunding it there, then keeping your own record
      - **[Attendee emails](/features/email-templates/)** - customisable
        confirmation templates and [bulk email to attendee
        segments](/features/bulk-email/). The store sends order
        confirmations but has no way to email everyone coming to an event
      - **[Promo codes, discounts and add-ons](/features/promo-codes-and-add-ons/)** -
        codes, discounts, surcharges and opt-in add-ons with stock limits
        and a live running total
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** -
        attendees choose their own price
      - **[Custom questions](/features/custom-questions/)** - collect
        structured answers at checkout, such as meal choices or accessibility
        needs
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees add their tickets to their phone wallet
      - **[Calendar and RSS feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic updates
      - **[Webhooks](/features/webhooks/)** and a **[public &
        admin API](/features/public-api/)** - build custom integrations.
        SumUp has a developer API for payments, but the store does not expose
        event data
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        stored with hybrid RSA-OAEP + AES-256-GCM encryption rather than
        plain database rows
      - **[Open source](/features/open-source/)** and **self-hosting** - the
        complete product source is published under AGPL-3.0-only, and the
        platform can run on selected infrastructure without a Chobble
        software licence fee
      - **Flat pricing** - £50/year or £5/month, or £25/year for charities,
        community groups, artists and musicians on the annual plan, with no
        per-ticket platform fees, no matter how many you sell
      - **No marketing to your attendees** - your audience stays yours
      - **Community Interest Company** - Chobble is a CIC, so profit cannot
        be extracted by shareholders
  - type: markdown
    content: |
      ## What selling tickets through a store misses

      Selling a ticket as a store item works for a simple paid gathering.
      For an event with dates, capacity and a door, four gaps appear:

      - **No ticket and no check-in.** Buyers receive an order
        confirmation, not a ticket with a QR code. At the door you check
        names against a list.
      - **No event capacity.** Stock on an item caps sales only if you
        update it. If tickets sell on more than one item, or sales continue
        after you forget to change stock, an event can oversell.
      - **No attendee records.** The store captures delivery details, not
        who is coming to which event. Contacting ticket holders means going
        through the order list by hand.
      - **Refunds by hand.** SumUp's return flow is built around orders, not
        bookings. Refunding a ticket means locating the order, processing
        the payment refund in SumUp, and keeping your own record.
  - type: markdown
    content: |
      ## Data ownership

      The SumUp Online Store runs on SumUp's platform. Order and customer
      data sits with SumUp, a proprietary payment company, and is processed
      under its privacy policy. Sales money is held by SumUp until you move
      it.

      The store cannot be self-hosted. Moving your store to another platform
      means building it again.

      With Chobble Tickets, attendee data is encrypted at rest and stays
      under your control. The entire platform is open source, so you can
      self-host it and never depend on a third party. A full REST API and
      webhooks give you programmatic access to all your data.
  - type: markdown
    content: |
      ## When the SumUp Online Store might be the better choice

      - You want to sell physical products with built-in shipping, tracking
        and restock alerts
      - You want to take card payments at the door as well as online
      - You sell a small number of tickets and a percentage costs less than
        a flat fee
      - You want gift cards for customers
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You need QR-code tickets and check-in at the door
      - You need capacity limits per event or per date, with automatic
        refunds if two confirmed payments race for the last place
      - You want to email attendees before the event
      - You need refunds processed against booking records
      - You want flat, predictable pricing as sales grow
      - Privacy and encryption matter to you
      - You don't want a platform marketing to your attendees
      - You're a community group, charity, artist or musician (£25/year on
        the annual plan)
      - You value [open source](/features/open-source/) and the ability to
        self-host
  - type: markdown
    content: |
      ## Who owns SumUp?

      SumUp was founded in 2012 and is headquartered in London. It reports
      over 4 million businesses using its tools and around 3,000 employees
      across 26 offices.

      The group operates in 38 markets, with
      [Canada](https://www.sumup.com/en-gb/press/canada_launch/) the most
      recent in June 2026. In the UK, SumUp Payments Limited is authorised
      by the Financial Conduct Authority under the Electronic Money
      Regulations 2011 (register number 900700).

      The Online Store is one part of SumUp's payments platform, alongside
      card readers, point of sale, payment links, invoices and a business
      account. SumUp's business is taking and managing payments. Its
      material for event organisers covers card readers and payment links,
      not event ticketing software.

      SumUp Bookings, a separate product, schedules appointments for
      services. It does not sell tickets for events.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on Chobble
      as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in August 2026.
      Fees may change. Check the links below for the latest figures.

      - [SumUp Online Store](https://www.sumup.com/en-gb/online-store/) - free to open, £0 monthly cost, 2.5% transaction fee, custom domains
      - [SumUp pricing](https://www.sumup.com/en-gb/pricing/) - 1.69% in-person pay-as-you-go, 2.5% online, Payments Plus £19/month, next-day payouts
      - [SumUp for events](https://www.sumup.com/en-gb/business-types/events/) - event payments with card readers and payment links
      - [SumUp about](https://www.sumup.com/en-gb/about/) - company background, 4 million businesses, 38 markets
      - [SumUp Canada launch](https://www.sumup.com/en-gb/press/canada_launch/) - June 2026, 38th market
      - [SumUp on Wikipedia](https://en.wikipedia.org/wiki/SumUp) - founded 2012, headquartered in London
      - [Chobble Tickets features](/features/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Ticketing with flat pricing, open source code and encrypted attendee
      data.
name: Open Source & Purpose-Built SumUp Online Store Alternative | Chobble Tickets
---
