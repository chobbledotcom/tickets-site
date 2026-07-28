---
competitor_key: ticketsource
title: TicketSource Alternative
meta_title: Open Source & Flat Fee TicketSource Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and TicketSource on booking fees, payouts, seating plans, event listings, attendee data and source licensing.
permalink: /compared-to/ticketsource/
eleventyNavigation:
  key: vs TicketSource
  parent: Compared To
provider_facts:
  name: TicketSource
  kind: ticketing
  calculator_keys:
    - ticketsource
    - ticketsource_stripe
  last_reviewed: "2026-07-28"
  registration_country: united-kingdom
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: per-transaction-percentage
  managed_pricing: per-sale
  white_label: partial
  custom_domain: not-documented
  public_website: hosted-booking-pages
  self_hosting: not-offered
  source_code: proprietary
  event_marketplace: built-in
  attendee_cross_marketing: none
  notes:
    registration_country: "TicketSource Limited is registered in England and Wales, company number 05043301, with offices in Penarth. Its privacy policy also records a United States address and says data is stored on servers in the United Kingdom."
    ethical_basis: "TicketSource is a private limited company founded in 2004. No ownership or investor structure was documented in the sources reviewed."
    per_ticket_platform_fee: "The booking fee is charged per paid booking rather than per ticket, at 7% plus VAT with TicketSource payment processing, or 4.5% plus VAT with the organiser's own Stripe account. A minimum of £0.25 plus VAT applies per paid booking."
    managed_pricing: "There is no subscription. TicketSource is paid from the booking fee on each paid booking, which the organiser can absorb or pass to the buyer."
    white_label: "The ticket shop takes the organiser's logo and colour scheme and can be embedded in the organiser's own site, but it is served from TicketSource domains."
    custom_domain: "No custom-domain option was documented in the sources reviewed."
    public_website: "TicketSource supplies a hosted ticket shop page listing an organiser's events, plus an embeddable ticket shop for the organiser's own website."
    event_marketplace: "Events are published automatically to the TicketSource What's On listings."
    attendee_cross_marketing: "The customer privacy policy states that TicketSource does not use ticket-buyer data for marketing and does not sell buyer contact details."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs TicketSource

      TicketSource is a UK ticketing platform, running from Penarth in Wales since 2004 and widely used by amateur theatre, schools and village halls. This page compares it to Chobble Tickets.
  - type: markdown
    content: |
      ## Open source & flat fee TicketSource alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. TicketSource does not publish its source code.

      TicketSource costs the organiser nothing to open an account. It is paid
      from a booking fee on each paid online booking: 7% plus VAT with
      TicketSource payment processing, or 4.5% plus VAT if you connect your
      own Stripe account. Chobble Tickets charges £50/year or £5/month
      whatever the volume, and adds no fee to any booking.
  - type: markdown
    content: |
      ## Pricing comparison

      [TicketSource](https://www.ticketsource.co.uk) has no subscription, no
      contract and no feature tiers. Every account gets every feature, and
      the money comes from the booking fee on paid online bookings.

      With TicketSource payment processing, the booking fee is 7% plus VAT
      per paid booking, with a minimum of £0.25 plus VAT. Card processing is
      included in that fee. With your own Stripe account connected, the
      booking fee drops to 4.5% plus VAT per paid booking and Stripe charges
      you separately for card processing.

      Registered charities pay a reduced rate: 6.5% plus VAT with
      TicketSource processing, or 4% plus VAT via Stripe. Free events carry
      no booking fee up to a total of 1,000 tickets, above which
      TicketSource asks organisers to get in touch. Bookings the organiser
      records in-house (cash, cheque, complimentary, and card payments taken
      through the organiser's own Stripe Terminal) carry no booking fee at
      all.

      The fee is charged per booking, not per ticket, so a customer buying
      four tickets in one transaction is charged once. Buyers who choose
      posted tickets pay £2.50 delivery, and buyers are offered paid refund
      protection from a third party, XCover, at checkout.

      Chobble Tickets is a flat £50/year or £5/month, with
      [no per-ticket platform fees](/features/no-per-ticket-fees/). Community
      groups, charities, artists and musicians pay £25/year. Payment
      processing is charged by your own Stripe, Square, or SumUp account.

      On the TicketSource own-Stripe rate, both platforms leave you paying
      Stripe separately, so the comparison is 5.4% including VAT against
      £50 a year: the two cross over at around £930 of annual ticket sales.
      The 7% route includes card processing in the fee, so the fair
      comparison there is against £50 plus your own processing charges. At
      £15 a ticket and Stripe's 1.5% + 20p, that crossover is around 60
      tickets, or about £900 of sales a year. Cheaper tickets cross over
      later, because the fixed 20p is a bigger share of each sale.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## When you get your money

      This is one of the larger differences between the two platforms.

      With TicketSource payment processing, ticket income is held in a
      segregated account until your event has finished. TicketSource emails
      a statement on the Monday after the event run and transfers the money
      to your bank account about three working days later. You need a UK
      bank account to be paid for a UK event.

      Connecting your own Stripe account changes this: buyers pay Stripe
      directly, and the money reaches your bank on Stripe's rolling
      schedule instead of after the event.

      Chobble Tickets never holds ticket money. Buyers pay your own Stripe,
      Square, or SumUp account, so payouts follow that provider's schedule
      from the first sale onwards.
  - type: markdown
    content: |
      ## Feature comparison

      TicketSource has been running since 2004 and handles ticketing for
      around 90,000 events a year. It has a broader feature set than Chobble
      Tickets in several areas. Here's the breakdown:
  - type: markdown
    content: |
      ### Both platforms share some features

      - Online ticket sales with card payments
      - Stripe as a payment option, paying the organiser directly
      - Free events with no payment setup required
      - Event capacity limits
      - QR codes on every ticket, and scanning for check-in at the door
      - A door list for checking attendees in by hand
      - Email confirmations to attendees after booking
      - Apple Wallet and Google Wallet passes
      - Discount and promo codes
      - Extras sold alongside tickets (sundry items in TicketSource,
        [add-ons](/features/promo-codes-and-add-ons/) in Chobble Tickets)
      - Custom questions on the booking form
      - Multiple admin users with different permissions
      - An embeddable ticket widget for your own website
      - An API for reading and syncing event data
      - CSV export of your customer and booking data
      - Refunds processed from the admin panel
      - Recording bookings taken in person, without a platform fee
  - type: markdown
    content: |
      ### TicketSource has features Chobble Tickets doesn't

      - **Allocated seating** - a seating plan designer where you recreate
        your venue, mark aisles or tables, and let customers pick their own
        seats. Online and in-house sales draw on the same plan
      - **Telephone box office** - TicketSource staff answer booking calls
        from your customers and take orders on your behalf, at no charge to
        the organiser
      - **Posted tickets** - TicketSource prints and posts card tickets to
        buyers who want them, for a £2.50 delivery fee
      - **In-house thermal ticket printing** - print perforated card
        tickets on a connected thermal printer using free Print Server
        software for Windows
      - **Offline ticket scanning** - a Windows scanning app that downloads
        the booking list in advance, so the door works without an internet
        connection
      - **Waiting lists** - record interest from customers when an event
        sells out
      - **Self-service refunds and exchanges** - a Manage My Bookings
        portal where customers cancel or exchange their own tickets under a
        policy you set
      - **Automatic rules-based discounts** - volume rules such as three
        tickets for the price of two, applied automatically at checkout
      - **Event listings with an audience** - events appear on the
        TicketSource What's On listings, which the site says draw over
        500,000 visitors a month
      - **Direct marketing integrations** - built-in connectors for
        Mailchimp and Brevo (Chobble Tickets connects to these tools
        through [webhooks](/features/webhooks/) or Zapier)
      - **Arts Council England reporting** - direct data export to the
        Illuminate platform and The Audience Agency, which National
        Portfolio Organisations need for their funding agreements
      - **WordPress plugin** - an official plugin for embedding ticket
        pages in WordPress sites
      - **Refund protection at checkout** - buyers can add third-party
        cover from XCover
      - **Gift Aid on donations** - registered charities can reclaim Gift
        Aid on donations taken at checkout
      - **Held ticket income** - if you have no card processing of your
        own, TicketSource can take the money for you and pay it over after
        the event
  - type: markdown
    content: |
      ### Chobble Tickets has features TicketSource doesn't

      - **[Open source](/features/open-source/)** - the complete product
        source is published under AGPL-3.0-only
      - **Self-hosting option** - run the platform on your own
        infrastructure without a Chobble software licence fee
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        encrypted with hybrid RSA-OAEP + AES-256-GCM, where only the
        organiser holds the private key
      - **Flat pricing** - £50/year or £5/month whatever you sell, with no
        booking fee on any ticket
      - **[Your own custom domain](/features/custom-domain/)** - your
        ticket pages run on your own web address, included in the price.
        TicketSource does not document a custom-domain option, and its
        ticket shop pages are served from TicketSource domains
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
      - **[Square and SumUp](/features/stripe-and-square/)** as payment
        providers alongside Stripe
      - **[Complete database backups](/features/backups/)** and
        [event setup export](/features/catalogue-import-export/) you can
        move to another Chobble Tickets host
      - **Community Interest Company** - run by a CIC, a UK legal structure
        that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## Data ownership

      TicketSource is clearer about attendee data than most commercial
      platforms. Its terms say customer data generated by your event is
      owned by you as the data controller, and its customer privacy policy
      says TicketSource does not use buyer contact details for marketing
      and does not sell them to third parties. Data is stored on servers in
      the United Kingdom, and the company is registered with the
      Information Commissioner's Office. Buyers can be asked at checkout
      whether they want to join your mailing list.

      The data is still held on TicketSource's servers, readable by
      TicketSource staff, in a proprietary system you cannot run yourself.
      TicketSource deletes buyer records after a year, and deletes the data
      in accounts that have not been logged into for two years. Accounts
      that have taken online bookings must stay open for nine months after
      the last transaction.

      With Chobble Tickets, attendee data is encrypted at rest. Only the
      keys held by your own administrator accounts, and the optional
      recovery account you can enable, unlock it. The platform is open source under AGPLv3,
      so you can self-host it and stop depending on Chobble as your host. If Chobble
      Tickets stopped operating tomorrow, you could run the same code on
      your own server.
  - type: markdown
    content: |
      ## When TicketSource might be the better choice

      - You run a seated venue and need customers to choose their own seats
      - You sell a small enough number of tickets that the booking fee
        costs less than the yearly Chobble Tickets price and your own
        processing charges, which is under about £900 of sales a year at
        £15 a ticket
      - You want the booking fee passed to ticket buyers rather than paying
        a fee yourself
      - You want someone else to answer booking calls from your customers
      - You need posted card tickets, or thermal tickets printed at your
        own box office
      - You need to scan tickets at a venue with no internet connection
      - You want customers to cancel or exchange their own bookings
      - You are an Arts Council England National Portfolio Organisation and
        need audience data sent to Illuminate
      - You have no card processing of your own and want the platform to
        collect the money for you
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You sell more than about £900 of tickets a year at £15 a ticket,
        where the booking fee costs more than the flat price
      - You want a price that does not change with ticket volume or value
      - You want payouts to start as tickets sell, on your payment
        provider's own schedule, rather than after the event
      - You want your ticket pages on
        [your own domain](/features/custom-domain/) and
        [your own website](/features/your-public-website/)
      - Encryption and [data privacy](/features/who-can-see-your-data/)
        matter to you
      - You value [open source](/features/open-source/) and the ability to
        self-host
      - You want [Square or SumUp](/features/stripe-and-square/) rather
        than only Stripe
      - You want [deposits](/features/deposits-and-balance-payments/),
        [SMS messages](/features/sms-messages/), or
        [calendar feeds](/features/rss-and-calendar-feeds/)
  - type: markdown
    content: |
      ## Who owns TicketSource?

      TicketSource Limited is a private limited company registered in
      England and Wales, company number 05043301, incorporated in February
      2004. It still operates from Penarth in south Wales, where its
      founder Simon Wilsher started it, and its privacy policy also records
      a United States address. It is a member of STAR, the Society of
      Ticket Agents and Retailers. No ownership or investor structure
      beyond the Companies House record was documented in the sources
      reviewed.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on
      Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was checked on 28 July 2026. The
      TicketSource website blocks automated access, so the figures were read
      from Internet Archive captures of its own pricing and terms pages.
      Fees may change. Check the links below for the latest figures.

      - [TicketSource pricing](https://www.ticketsource.co.uk/pricing) - 7% + VAT per paid booking with TicketSource processing, or 4.5% + VAT via your own Stripe
      - [Archived TicketSource pricing page](https://web.archive.org/web/20250902120819/https://www.ticketsource.co.uk/pricing) - capture dated 2 September 2025
      - [TicketSource charity pricing](https://www.ticketsource.co.uk/pricing/charities) - 6.5% + VAT, or 4% + VAT via Stripe, plus Gift Aid on donations
      - [TicketSource terms and conditions](https://www.ticketsource.co.uk/kb/terms-of-use/terms-and-conditions) - booking fees, free-event limit, payouts, delivery fees and data ownership
      - [TicketSource customer data privacy policy](https://www.ticketsource.co.uk/kb/terms-of-use/customer-data-privacy-policy) - marketing, retention and data sharing
      - [TicketSource features](https://www.ticketsource.co.uk/features) - seating plans, waiting lists and ticket formats
      - [TicketSource integrations](https://www.ticketsource.co.uk/features/integrations) - Stripe, Zapier, API, Mailchimp, Brevo, WordPress, Arts Council England
      - [TicketSource about page](https://www.ticketsource.co.uk/about) - founded 2004 in Penarth, around 90,000 events a year
      - [Companies House: TicketSource Limited](https://find-and-update.company-information.service.gov.uk/company/05043301) - company number 05043301
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
name: Open Source & Flat Fee TicketSource Alternative | Chobble Tickets
---
