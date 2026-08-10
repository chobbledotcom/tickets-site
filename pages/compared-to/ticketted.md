---
competitor_key: ticketted
title: Ticketted Alternative
meta_title: Open Source & Flat Fee Ticketted Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Ticketted on per-transaction fees, who pays them, event discovery, attendee data, source licensing and which countries each one serves.
permalink: /compared-to/ticketted/
eleventyNavigation:
  key: vs Ticketted
  parent: Compared To
provider_facts:
  name: Ticketted
  kind: ticketing
  calculator_keys:
    - ticketted
  last_reviewed: "2026-08-10"
  registration_country: australia
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: per-transaction-percentage-plus-fixed
  managed_pricing: per-sale
  white_label: not-documented
  custom_domain: not-documented
  public_website: marketplace-pages
  self_hosting: not-documented
  source_code: proprietary
  agent_instructions: not-found
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: built-in
  attendee_cross_marketing: not-documented
  notes:
    registration_country: "Ticketted Pty Ltd is an Australian private company, ABN 26 698 189 669 and ACN 698 189 669, registered on 18 May 2026 with its main business location in New South Wales (ABN Lookup, checked 11 August 2026). The platform prices in Australian dollars, covers events across Australia and describes Australia-based support."
    ethical_basis: "Ticketted Pty Ltd is an ordinary Australian private company. No owner, director or investor information was found in the sources reviewed, and no ethical certification or structure is claimed."
    per_ticket_platform_fee: "Ticketted publishes a charge of 1.8% + A$0.30 (about 16p at 52.3p to the Australian dollar on 10 August 2026). Its own copy describes this both as a per-transaction charge and as a per-ticket charge. Free events carry no charge. Ticketted does not state whether Stripe processing is included. Stripe's published Australian rate is 1.7% + A$0.30 including GST, which the charge barely exceeds, and Ticketted compares it with all-in rates from other platforms, so this site reads it as covering processing."
    managed_pricing: "There is no published subscription. Ticketted is paid from the charge on each paid sale, so the total rises with ticket volume."
    white_label: "No white-labelling option was documented in the sources reviewed."
    custom_domain: "No custom-domain option was documented in the sources reviewed. Event pages are served from ticketted.com."
    public_website: "Ticketted lists events for sale on ticketted.com and describes AI-curated placement on its own homepage. No separate organiser-controlled website was documented."
    self_hosting: "Ticketted is a hosted service. No self-hosting option was documented in the sources reviewed."
    source_code: "Ticketted does not publish its source code."
    agent_instructions: "No public repository or agent instructions were found in the sources reviewed."
    event_marketplace: "Ticketted sells tickets for events across Australia from its own site and promotes events through AI-curated placement on its homepage."
    attendee_cross_marketing: "Ticketted describes its data handling as GDPR-ready. What it does with buyer contact details after a sale, including whether it markets other organisers' events to them, was not documented in the sources reviewed."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Ticketted

      Ticketted is an Australian ticketing platform that charges 1.8% + A$0.30 on each paid sale and lists events on its own site. This page compares it to Chobble Tickets.
  - type: markdown
    content: |
      ## Open source & flat fee Ticketted alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. Ticketted does not publish its source code.

      Ticketted takes a percentage of each paid sale, so what you pay rises
      with the number of tickets you sell. Chobble Tickets charges £50/year or
      £5/month whatever the volume, and adds
      [no fee to any ticket](/features/no-per-ticket-fees/).

      The two platforms also serve different places. Ticketted sells tickets
      for events across Australia and prices in Australian dollars. Chobble
      Tickets is used mainly in the UK and Europe, and organisers take payment
      through their own Stripe, Square or SumUp account in their own currency.
  - type: markdown
    content: |
      ## Pricing comparison

      [Ticketted](https://www.ticketted.com/) publishes a charge of 1.8% +
      A$0.30 on each paid sale, which it describes as Australia's lowest
      ticketing fees. There is no published subscription and no setup fee.
      Free events carry no charge.

      Ticketted does not say whether card processing is inside that charge.
      Two published figures suggest it is: Stripe's Australian rate is
      [1.7% + A$0.30 including GST](https://stripe.com/au/pricing), which
      1.8% + A$0.30 barely exceeds, and Ticketted sets its rate against
      all-in rates from other platforms. The figures here therefore treat it
      as covering processing, which is the reading that puts Ticketted's cost
      at its lowest.

      Ticketted says the organiser decides for each event who covers the
      charge, so it can be added to the ticket price or absorbed by the
      organiser. Absorbing it costs the organiser money on each sale. Passing
      it on raises the price the buyer sees.

      Chobble Tickets is a flat £50/year or £5/month, with
      [no per-ticket platform fees](/features/no-per-ticket-fees/). Charities,
      community groups, artists and musicians pay £25/year on the annual plan.
      Payment processing is charged by your own Stripe, Square or SumUp
      account, which for UK Stripe is 1.5% + 20p.

      On those numbers the two run close on each sale, because Ticketted's
      1.8% is not far above the 1.5% your own Stripe account charges. At £15 a
      ticket the difference is about half a penny, so the flat £50 rarely pays
      for itself. At £30 a ticket it pays for itself at around 1,000 tickets,
      or about £30,000 of sales a year, and sooner on the £25 community rate
      or at higher ticket prices.

      If Ticketted's charge turns out to sit on top of processing rather than
      cover it, its real cost roughly doubles and the flat £50 pays for itself
      at around 116 tickets a year, or about £1,750 of sales at £15 a ticket.

      Neither platform charges a per-ticket fee on free events, though
      Chobble's flat fee still applies whether your events are free or
      paid.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      The estimate above converts A$0.30 to about 16p, at 52.3p to the
      Australian dollar on 10 August 2026. Exchange rates move, so an
      Australian organiser paying in Australian dollars sees a fixed
      A$0.30 rather than a moving pound figure.
  - type: markdown
    content: |
      ## When you get your money

      Neither platform holds ticket money until after the event. Ticketted
      takes payment through Stripe and says payouts land in your account as
      tickets sell.

      Chobble Tickets never touches ticket money at all. Buyers pay your own
      Stripe, Square or SumUp account, so payouts follow whichever of those
      providers you chose, from the first sale onwards.
  - type: markdown
    content: |
      ## Feature comparison

      Ticketted publishes a feature list covering event setup, promotion,
      door scanning, payments and reporting, with AI tools through most of
      it. The lists below compare that published material with what Chobble
      Tickets documents.
  - type: markdown
    content: |
      ### Both platforms share some features

      - Online ticket sales with card payments through Stripe
      - Payouts to the organiser as tickets sell, not after the event
      - Event capacity limits
      - Several price points for one occasion, such as early bird, VIP or
        concession, sharing one capacity limit. Chobble Tickets does this by
        putting separate listings in a [group](/features/groups/) with a
        shared cap, rather than ticket types inside a single event
      - Booking cut-off times, so sales close before the event starts
      - Discount and promo codes
      - Free events with no per-ticket fee
      - Email delivery of tickets with a QR code. Chobble Tickets gives one
        code to each booking, which covers every place in it
      - QR code scanning at the door from a browser, with no app to install
      - Guest list and attendee data export
      - Sales reporting for the organiser
  - type: markdown
    content: |
      ### Ticketted has features Chobble Tickets doesn't

      - **AI event setup and copywriting** - Ticketted writes event
        descriptions and fills in event details for you
      - **AI-curated homepage placement** - events are promoted on the
        ticketted.com homepage to buyers the platform judges relevant
      - **Event discovery** - Ticketted sells tickets for events across
        Australia from its own site, so buyers can find your event without a
        link from you
      - **Referral links** - track which sign-ups came from which source
      - **Audience analytics** - sales velocity, peak buying windows,
        audience demographics and checkout drop-off points
      - **Buyer-paid fees** - the charge can be added to the ticket price
        instead of coming out of the organiser's income, which Chobble
        Tickets has no equivalent for because it takes no cut of a sale
      - **Australia-based support around the clock** - Chobble Tickets
        provides written support and does not run a telephone support centre
  - type: markdown
    content: |
      ### Chobble Tickets documents features Ticketted's site does not

      Ticketted may build or already have some of these. They are not
      described in its published material.

      - **[Open source](/features/open-source/)** - the complete product
        source is published under AGPL-3.0-only
      - **Self-hosting option** - run the platform on your own
        infrastructure without a Chobble software licence fee
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        encrypted, and only the keys held by your own administrator accounts,
        plus the optional recovery account you can enable, unlock it
      - **Flat pricing** - £50/year or £5/month whatever you sell, with no
        charge on any ticket
      - **[Your own custom domain](/features/custom-domain/)** - your ticket
        pages run on your own web address, included in the price
      - **[White labelling](/features/white-labelling/)** - your pages carry
        your name and branding rather than the platform's
      - **[Public-facing website and CMS](/features/your-public-website/)** -
        a homepage, content pages, news posts and a contact form with spam
        protection, edited in Markdown with
        [custom CSS](/features/customising-your-site/)
      - **[Square and SumUp](/features/stripe-and-square/)** for online
        checkout, alongside Stripe
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid or Mailgun so confirmations come from your
        own domain
      - **[Liquid email templates](/features/email-templates/)** - full
        control over the wording and layout of every email
      - **[SMS messages](/features/sms-messages/)** - text attendees about
        their booking
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit now and the balance later
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        buyers enter their own price above a minimum, with no cut taken from
        the extra
      - **[Daily and recurring events](/features/daily-events/)** - events
        that repeat on a schedule, with capacity set per date
      - **[Subscribable calendar and RSS feeds](/features/rss-and-calendar-feeds/)** -
        one feed listing all your events, so subscribers see new ones
        automatically
      - **[Admin API](/features/admin-api/)** and
        [webhooks](/features/webhooks/) - create and edit events from your own
        systems, and get real-time notifications as bookings happen
      - **[Apple Wallet and Google Wallet passes](/features/apple-wallet/)** -
        tickets saved to a phone's wallet
      - **[Activity logs](/features/activity-logs/)** - an audit trail of
        admin actions and booking activity
      - **[Complete database backups](/features/backups/)** and
        [event setup export](/features/catalogue-import-export/) you can move
        to another Chobble Tickets host
      - **Community Interest Company** - run by a CIC, a UK legal structure
        that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## Discovery and your attendee list

      Ticketted lists events on its own site and promotes them to buyers it
      judges relevant. That can put your event in front of people who have
      never heard of you, which a platform with no marketplace cannot do.

      A marketplace holds the buyer relationship as well as the sale. What
      Ticketted does with buyer contact details after a sale, including
      whether it emails them about other organisers' events, is not set out in
      its published material.

      Chobble Tickets has no marketplace across organisers. Visitors can
      browse your own [public site](/features/your-public-website/) and its
      listings, but nothing puts your event in front of someone who came
      looking for a different organiser's.
  - type: markdown
    content: |
      ## Data ownership

      Ticketted describes PCI-compliant payments, GDPR-ready data handling
      and Stripe's fraud detection. Attendee data is held on Ticketted's
      servers, and Ticketted publishes neither its source code nor a
      self-hosting option, so running the same system yourself is not
      something it offers. If Ticketted stopped operating, you would depend
      on the exports you had already downloaded.

      With Chobble Tickets, attendee data is encrypted at rest. Only the keys
      held by your own administrator accounts, and the optional recovery
      account you can enable, unlock it. The
      [privacy page](/features/who-can-see-your-data/) sets out who can read
      what.

      Chobble Tickets is published under AGPL-3.0-only, so you can
      [self-host it](/hosting/) and stop depending on Chobble as a company.
      If Chobble Tickets stopped operating tomorrow, you could run the same
      code on your own server.
  - type: markdown
    content: |
      ## When Ticketted might be the better choice

      - Your events are in Australia, which is where Ticketted sells tickets
      - You sell modest numbers of lower-priced tickets, where 1.8% + A$0.30
        an order costs less than a flat annual price plus your own processing
      - You want the charge paid by ticket buyers rather than paying a fee
        yourself
      - You want your event listed on a site people already browse
      - You want AI tools to write your event description and set the event up
      - You want detailed audience analytics such as buying windows and
        checkout drop-off
      - You want round-the-clock support in Australian hours
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You sell enough, or price high enough, that a percentage of every
        sale costs more than a flat £50, which at £30 a ticket is around
        1,000 tickets a year
      - You want a price that does not change with ticket volume or value
      - You are a charity, community group, artist or musician, and pay
        £25/year on the annual plan
      - You want your ticket pages on
        [your own domain](/features/custom-domain/) and
        [your own website](/features/your-public-website/), under your own
        name
      - You want attendee data [encrypted at rest](/features/encrypted/) and
        no marketplace holding the buyer relationship
      - You want [Square or SumUp](/features/stripe-and-square/) for online
        checkout, not Stripe alone
      - You want [deposits](/features/deposits-and-balance-payments/),
        [SMS messages](/features/sms-messages/),
        [calendar feeds](/features/rss-and-calendar-feeds/) or
        [recurring events](/features/daily-events/)
      - You value [open source](/features/open-source/) and the ability to
        self-host
  - type: markdown
    content: |
      ## Who runs Ticketted?

      Ticketted is run by Ticketted Pty Ltd, an Australian private company
      with [ABN 26 698 189 669](https://abr.business.gov.au/ABN/View?abn=26698189669),
      registered on 18 May 2026 and based in New South Wales. That makes it a
      new company, so it has no long trading record behind it. No owner,
      director or investor information was found in the sources reviewed.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPL-3.0-only,
      and the platform can be self-hosted by anyone without depending on
      Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The Ticketted information on this page was checked on 10 August 2026
      against the platform's own published description of itself. Ticketted
      publishes no pricing document beyond its headline charge, and several
      points other comparisons on this site cover, including white labelling,
      custom domains, refunds and what happens to buyer contact details, are
      left open above rather than guessed at. Fees may change, so check the
      link below for the latest figures.

      - [Ticketted](https://www.ticketted.com/) - 1.8% + A$0.30 per paid sale,
        free events free, Stripe payouts, event listings across Australia
      - [ABN Lookup: Ticketted Pty Ltd](https://abr.business.gov.au/ABN/View?abn=26698189669) -
        ABN 26 698 189 669, Australian private company, registered 18 May 2026
      - [Stripe pricing in Australia](https://stripe.com/au/pricing) -
        1.7% + A$0.30 including GST on domestic cards, used to read
        Ticketted's charge as covering processing
      - [Chobble Tickets pricing](/pricing/) - £50/year or £5/month, £25/year
        for charities, community groups, artists and musicians on the annual
        plan
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
name: Open Source & Flat Fee Ticketted Alternative | Chobble Tickets
---
