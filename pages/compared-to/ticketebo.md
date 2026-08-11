---
competitor_key: ticketebo
title: Ticketebo Alternative
meta_title: Open Source & Flat Fee Ticketebo Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Ticketebo on booking fees, payouts, seating plans, managed setup, attendee data and source licensing.
permalink: /compared-to/ticketebo/
eleventyNavigation:
  key: vs Ticketebo
  parent: Compared To
provider_facts:
  name: Ticketebo
  kind: ticketing
  calculator_keys:
    - ticketebo
  last_reviewed: "2026-08-08"
  registration_country: united-kingdom
  ethical_basis:
    - certified-b-corporation
  per_ticket_platform_fee: per-transaction-percentage
  managed_pricing: per-sale
  white_label: partial
  custom_domain: not-documented
  public_website: organiser-microsite
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-found
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: built-in
  attendee_cross_marketing: none
  established: 2013
  public_api: not-documented
  seating_plans: included
  summary: "A UK ticketing platform used by country shows, festivals and community groups, paid for by buyer booking fees."
  notes:
    established: "Ticketebo has operated in Australia since 2013 and in the UK since January 2020."
    seating_plans: "The review records that seating plan setup may carry a one-off charge."
    registration_country: "Ticketebo Ltd is registered in England and Wales, company number 12383730, based at 61 Mosley Street, Manchester. The platform has operated in Australia since 2013 and in the UK since January 2020."
    ethical_basis: "Ticketebo is a certified B Corporation. No ownership or investor structure beyond the Companies House record was documented in the sources reviewed."
    per_ticket_platform_fee: "The booking fee is 4.95% (incl. VAT) of the total transaction value, with a minimum of 75p (incl. VAT) per transaction. The fee is charged per order, not per ticket. Card processing is included. The organiser can pass the fee to buyers or absorb it into the ticket price. Checked 8 August 2026."
    managed_pricing: "There is no subscription or setup fee. Ticketebo is paid from the booking fee on each paid order."
    white_label: "Ticketebo designs event pages with the organiser's own images, colours and branding, but pages are served from ticketebo.co.uk."
    custom_domain: "No custom-domain option for ticketing pages was documented in the sources reviewed. The standard web address is ticketebo.co.uk/yourname."
    public_website: "Ticketebo builds an organiser home page listing all upcoming events plus individual event pages, all on the ticketebo.co.uk domain. Bespoke event websites are offered as a premium service."
    self_hosting: "Ticketebo is a fully managed platform. No self-hosting option is offered."
    source_code: "Ticketebo does not publish its source code."
    agent_instructions: "No agent or contributor instructions were found in the sources reviewed."
    event_marketplace: "Events can be found through a Ticketebo site search. Ticketebo does not promote a public discovery marketplace."
    attendee_cross_marketing: "Ticketebo states that it does not market to ticket buyers and does not sell their contact details. Marketing opt-in data is passed to the organiser."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Ticketebo

      Ticketebo is a UK ticketing platform based in Manchester, operating since 2013 in Australia and since January 2020 in the UK, and widely used by country shows, festivals and community groups. This page compares it to Chobble Tickets.
  - type: markdown
    content: |
      ## Open source & flat fee Ticketebo alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. Ticketebo does not publish its source code.

      Ticketebo charges the ticket buyer a booking fee of 4.95% (incl. VAT)
      per transaction, or 75p (incl. VAT) minimum, with card processing
      included. The organiser pays nothing to open an account and nothing per
      year. Chobble Tickets charges £50/year or £5/month whatever the volume,
      and adds no fee to any ticket, though the organiser pays Stripe, Square
      or SumUp processing separately.
  - type: markdown
    content: |
      ## Pricing comparison

      [Ticketebo](https://www.ticketebo.co.uk) has no subscription, no setup
      fee and no per-ticket platform charge. Its income comes from a booking
      fee on each paid online order: 4.95% (incl. VAT) of the transaction
      value, or a minimum of 75p (incl. VAT) per transaction. Card processing
      is included in that fee, and there are no additional credit card
      charges.

      The fee is charged per order, not per ticket, so a customer buying four
      tickets in one transaction is charged once. By default the buyer pays
      the booking fee on top of the ticket price, but the organiser can
      choose to absorb it into the ticket price instead. Free events are free
      for both organiser and buyer.

      Registered charities get a donation of 10% of the booking fees
      collected from their event, paid back after the event. Organisers who
      connect their own Stripe account receive a rebate of up to 20% of the
      booking fee after the event, but Stripe processing charges (typically
      1.5% + 20p in the UK) then apply separately.

      Chobble Tickets is a flat £50/year or £5/month, with
      [no per-ticket platform fees](/features/no-per-ticket-fees/). Community
      groups, charities, artists and musicians pay £25/year on the annual
      plan. Payment processing is charged by your own Stripe, Square, or
      SumUp account.

      Because Ticketebo's fee includes card processing and Chobble's does
      not, the fair comparison is 4.95% per transaction against £50 a year
      plus your own Stripe processing. At £15 a ticket and Stripe's 1.5% +
      20p, the two cross over at around 150 tickets, or about £2,300 of
      sales a year. Above that, the flat Chobble price costs less; below it,
      Ticketebo's percentage costs less. Cheaper tickets cross over later,
      because the 75p minimum covers more of each sale.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## When you get your money

      This is one of the larger differences between the two platforms.

      With Ticketebo's default payment method, ticket income is held in a
      separate patron account until your event has finished. Ticketebo sends
      a final sales report on the Monday after the event, and pays the net
      funds to your bank account the next business day. The 20% booking fee
      rebate, if you use Stripe, is paid after the event.

      Connecting your own Stripe account changes the timing. Buyers pay
      Stripe directly, so funds reach your bank on Stripe's rolling payout
      schedule during the ticket campaign rather than after the event. Stripe
      processing charges then apply separately.

      Chobble Tickets never holds ticket money. Buyers pay your own Stripe,
      Square, or SumUp account, so payouts follow that provider's schedule
      from the first sale onwards.
  - type: markdown
    content: |
      ## Feature comparison

      Ticketebo has been running since 2013 and handles ticketing for
      thousands of events a year across the UK and Australia. It has a
      broader feature set than Chobble Tickets in several areas, and a
      managed setup model where the Ticketebo team designs and builds your
      event pages for you. Here is the breakdown:
  - type: markdown
    content: |
      ### Both platforms share some features

      - Online ticket sales with card payments
      - Stripe as a payment option, paying the organiser directly
      - Free events with no payment setup required
      - Event capacity limits that mark tickets as sold out when reached
      - Multiple ticket types per event, including a mix of paid and free
      - Early bird and timed sale windows for ticket types
      - Discount and promo codes, with pound or percentage discounts
      - Complimentary tickets through a 100% discount code
      - QR codes on every ticket, and barcode scanning apps for check-in
      - A door list for checking attendees in by hand
      - Email confirmations to attendees after booking, with instant ticket delivery
      - Refunds processed from the admin panel
      - CSV export of your sales and attendee data
      - Sales reporting by ticket type and event
      - Private events that can be hidden from search
      - Branding on your booking pages with your own images and colours
      - A central page listing all an organiser's upcoming events
  - type: markdown
    content: |
      ### Ticketebo has features Chobble Tickets doesn't

      - **Allocated seating** - a seating plan tool that assigns seats to
        buyers as they buy online, keeping groups together and apart from
        aisles, including real-time socially distanced seating. Setup may
        carry a one-off charge
      - **Free event page design** - the Ticketebo team designs and builds
        your event pages and tickets from your brief and images, rather than
        you building them yourself
      - **On-site box office and gate sales** - a gate sales point-of-sale
        app that takes card payments through Square and issues tickets on the
        day, with optional entry staff, hardware and device hire
      - **Telephone box office** - outsourced call management, email, live
        chat and social media contact handling from an event specialist
        contact centre
      - **Pre-printed physical tickets** - production of hard copy tickets
        and lanyards with integrated barcodes, for sale through traditional
        outlets
      - **Expo leads app** - an iOS app that scans attendee badges at trade
        shows and delivers their contact information to exhibitors
      - **Barcode pre-allocation and ingestion** - importing third-party
        barcodes into Ticketebo's scanning software, or pre-allocating
        Ticketebo barcodes for external print management
      - **Turnstile integration** - feeding live ticket sales data into
        existing venue turnstile infrastructure
      - **VAT tax invoices** - tax invoices or receipts issued to patrons on
        the organiser's behalf where VAT details are supplied
      - **Automatic rules-based discounts** - volume discounts such as
        multi-ticket package pricing, applied automatically at checkout
      - **Direct marketing integrations** - built-in connectors for Google
        Analytics, Meta ads, Google Ads, Google Tag Manager and Mailchimp
        (Chobble Tickets connects to these tools through
        [webhooks](/features/webhooks/) or Zapier)
      - **B Corp certification** - Ticketebo is a certified B Corporation,
        and is carbon neutral through its Trees for Change programme
  - type: markdown
    content: |
      ### Chobble Tickets has features Ticketebo doesn't

      - **[Open source](/features/open-source/)** - the complete product
        source is published under AGPL-3.0-only
      - **Self-hosting option** - run the platform on your own
        infrastructure without a Chobble software licence fee
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        encrypted, and only the keys held by your own administrator accounts,
        plus the optional recovery account you can enable, unlock it
      - **Flat pricing** - £50/year or £5/month whatever you sell, with no
        booking fee on any ticket
      - **[Your own custom domain](/features/custom-domain/)** - your ticket
        pages run on your own web address, included in the price. Ticketebo's
        pages are served from ticketebo.co.uk
      - **[Public-facing website and CMS](/features/your-public-website/)** -
        a homepage, content pages, news posts, and a contact form with spam
        protection, edited from the admin panel with Markdown and
        [custom CSS](/features/customising-your-site/)
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so confirmations come from
        your domain
      - **[Liquid email templates](/features/email-templates/)** - full
        control over the wording and layout of every email
      - **[SMS messages](/features/sms-messages/)** - text attendees about
        their booking
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit now and the balance later
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        buyers enter their own price above a minimum, with no cut taken
        from the extra
      - **[Subscribable calendar and RSS feeds](/features/rss-and-calendar-feeds/)** -
        one feed listing all your events, so subscribers see new ones
        automatically
      - **[Admin API](/features/admin-api/)** - authenticated API with API
        keys for creating, editing and deleting events
      - **[Webhooks](/features/webhooks/)** - real-time notifications to
        your own systems as bookings happen
      - **[Square and SumUp](/features/stripe-and-square/)** for online
        ticket checkout, alongside Stripe. Ticketebo accepts Visa and
        Mastercard online through its own gateway, and uses Square for
        on-site gate sales
      - **[Apple Wallet and Google Wallet passes](/features/apple-wallet/)** -
        tickets saved to a phone's wallet
      - **[Complete database backups](/features/backups/)** and
        [event setup export](/features/catalogue-import-export/) you can
        move to another Chobble Tickets host
      - **Community Interest Company** - run by a CIC, a UK legal structure
        that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## Data ownership

      Ticketebo states that it does not market to ticket buyers and does not
      sell their contact details. Where buyers opt in to further marketing,
      that data is passed to the organiser rather than used by Ticketebo.
      Patron card details are not stored, and payments are processed through
      Safecharge under PCI-DSS compliance. Ticket payments are held in a
      separate patron account until the final payout after the event.

      Ticketebo's website uses marketing cookies that share data with
      Facebook and Meta for retargeting, which buyers can decline. The data
      is still held on Ticketebo's servers in a proprietary system you
      cannot run yourself. If Ticketebo stopped operating, you would depend
      on your CSV exports for the data you had already downloaded.

      With Chobble Tickets, attendee data is encrypted at rest. Only the
      keys held by your own administrator accounts, and the optional recovery
      account you can enable, unlock it. The platform is open source under
      AGPLv3, so you can self-host it and stop depending on Chobble as your
      host. If Chobble Tickets stopped operating tomorrow, you could run the
      same code on your own server.
  - type: markdown
    content: |
      ## When Ticketebo might be the better choice

      - You sell a small enough number of tickets that the booking fee costs
        less than the yearly Chobble Tickets price plus your own processing,
        which is under about £2,300 of sales a year at £15 a ticket
      - You want the booking fee paid by ticket buyers rather than paying a
        fee yourself
      - You want someone else to design and build your ticketing pages
      - You need allocated or reserved seating with a seating plan
      - You want on-site box office sales with card payments and staff on the
        day
      - You need pre-printed physical tickets or posted card tickets
      - You want a telephone box office or outsourced contact centre
        handling
      - You run a trade show and need an expo leads app for exhibitors
      - You want direct built-in integrations with Google Analytics, Meta
        ads, Google Ads or Mailchimp without setting up webhooks
      - You have no card processing of your own and want the platform to
        collect the money and pay you after the event
      - You want your ticket sales to fund tree planting and carbon
        offsetting
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You sell more than about £2,300 of tickets a year at £15 a ticket,
        where the booking fee costs more than the flat price
      - You want a price that does not change with ticket volume or value
      - You want payouts to start as tickets sell, on your payment provider's
        own schedule, rather than after the event
      - You want your ticket pages on [your own domain](/features/custom-domain/)
        and [your own website](/features/your-public-website/)
      - Encryption and [data privacy](/features/who-can-see-your-data/)
        matter to you
      - You want [Square or SumUp](/features/stripe-and-square/) for online
        checkout and not just Stripe
      - You want [deposits](/features/deposits-and-balance-payments/),
        [SMS messages](/features/sms-messages/), or
        [calendar feeds](/features/rss-and-calendar-feeds/)
      - You value [open source](/features/open-source/) and the ability to
        self-host
  - type: markdown
    content: |
      ## Who owns Ticketebo?

      Ticketebo Ltd is a private limited company registered in England and
      Wales, company number 12383730, based at 61 Mosley Street, Manchester.
      The platform has operated in Australia since 2013 and in the UK since
      January 2020. Ticketebo is a
      [certified B Corporation](https://bcorporation.net), a certification
      for companies that meet standards on social and environmental
      performance, and is carbon neutral through its Trees for Change
      programme. No ownership or investor structure beyond the Companies
      House record was documented in the sources reviewed.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on
      Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was checked on 8 August 2026
      against the live Ticketebo pricing page and its published terms. Fees
      may change. Check the links below for the latest figures.

      - [Ticketebo pricing](https://www.ticketebo.co.uk/pricing) - 4.95% (incl. VAT) per transaction, 75p minimum, card processing included, no per-ticket charge, free for organisers
      - [Ticketebo online ticketing](https://www.ticketebo.co.uk/online-ticketing) - free for organisers, free events free, booking fee paid by the consumer
      - [Ticketebo reasons to choose](https://www.ticketebo.co.uk/why-ticketebo) - managed page design, Stripe integration with 20% rebate, 10% charity donation, no data harvesting
      - [Ticketebo integrations](https://www.ticketebo.co.uk/integrations-online-event-ticketing-platform) - Stripe, Square, Mailchimp, Google Analytics, Meta, Google Ads, Google Tag Manager
      - [Ticketebo organiser FAQs](https://www.ticketebo.co.uk/event-organiser-frequently-asked-questions) - reserved seating, door scanning, payouts, reporting, no PayPal or Amex
      - [Ticketebo about page](https://www.ticketebo.co.uk/about-us) - managed setup, B Corp, carbon neutral
      - [Ticketebo box office ticket sales](https://www.ticketebo.co.uk/box-office-ticket-sales-systems) - on-site gate sales and staffing
      - [Ticketebo on-site ticketing services](https://www.ticketebo.co.uk/on-site-ticketing-services-for-events) - entry staff, device hire, box office
      - [Companies House: Ticketebo Ltd](https://find-and-update.company-information.service.gov.uk/company/12383730) - company number 12383730
      - [Chobble Tickets pricing](/pricing/)
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
name: Open Source & Flat Fee Ticketebo Alternative | Chobble Tickets
---
