---
competitor_key: ticketted
title: Ticketted Alternative
meta_title: Open Source & Flat Fee Ticketted Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Ticketted on per-ticket fees, charity rates, event discovery, attendee data, source licensing and which countries each one serves.
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
  per_ticket_platform_fee: percentage-plus-fixed
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
    per_ticket_platform_fee: "Ticketted charges 3.95% + A$0.95 on each paid ticket (about 50p at 52.3p to the Australian dollar on 10 August 2026), or 2.45% + A$0.45 for charities and schools. Higher volumes and unusual requirements are quoted individually. Free RSVP events carry no charge. Ticketted takes payment through Stripe Connect and Stripe's processing charge is inside that fee, so nothing is added on top. Source: ticketted.com/pricing, checked 11 August 2026."
    managed_pricing: "There is no subscription, setup fee or minimum ticket volume. Ticketted is paid from the charge on each paid ticket, so the total rises with ticket volume, and higher volumes can be quoted individually."
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

      Ticketted is an Australian ticketing platform that charges 3.95% + A$0.95 on each paid ticket and lists events on its own site. This page compares it to Chobble Tickets.
  - type: markdown
    content: |
      ## Open source & flat fee Ticketted alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. Ticketted does not publish its source code.

      Ticketted charges a percentage plus a fixed amount on every paid
      ticket, so what it takes rises with the number of tickets sold. Chobble
      Tickets charges £50/year or £5/month whatever the volume, and adds
      [no fee to any ticket](/features/no-per-ticket-fees/).

      The two platforms also serve different places. Ticketted sells tickets
      for events across Australia and prices in Australian dollars. Chobble
      Tickets is used mainly in the UK and Europe, and organisers take payment
      through their own Stripe, Square or SumUp account in their own currency.
  - type: markdown
    content: |
      ## Pricing comparison

      [Ticketted](https://www.ticketted.com/pricing) charges 3.95% + A$0.95 on
      each paid ticket. Charities and schools pay 2.45% + A$0.45. Higher
      volumes and unusual requirements are quoted individually, so those
      organisers pay a rate Ticketted sets rather than a published one.

      Free RSVP events carry no charge at all. There is no subscription, no
      setup fee and no minimum number of tickets. Ticketted takes payment
      through Stripe Connect, and Stripe's own processing charge is inside
      that fee rather than added to it.

      Chobble Tickets is a flat £50/year or £5/month, with
      [no per-ticket platform fees](/features/no-per-ticket-fees/). Charities,
      community groups, artists and musicians pay £25/year on the annual plan.
      Payment processing is charged by your own Stripe, Square or SumUp
      account, which for UK Stripe is 1.5% + 20p.

      At £15 a ticket, Ticketted takes about £1.09 and Chobble's own Stripe
      account takes about 43p, so the flat £50 costs less once you sell more
      than about 75 tickets a year, which is around £1,100 of ticket sales. A
      charity comparing Ticketted's lower rate with Chobble's £25 community
      rate crosses over at about 140 tickets, or around £2,100 of sales.

      Dearer tickets reach both crossovers sooner, because most of what each
      platform charges is a percentage. At £30 a ticket the flat £50 costs
      less above about 48 tickets.

      Neither platform charges a per-ticket fee on free events, though
      Chobble's flat fee still applies whether your events are free or
      paid.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      The estimate above converts A$0.95 to about 50p, at 52.3p to the
      Australian dollar on 10 August 2026. Exchange rates move, so an
      Australian organiser paying in Australian dollars sees a fixed
      A$0.95 rather than a moving pound figure.
  - type: markdown
    content: |
      ## When you get your money

      Neither platform holds ticket money until after the event. Ticketted
      takes payment through Stripe Connect, and payouts reach your bank
      account on Stripe's standard schedule.

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
      - Payouts on the payment provider's own schedule, not after the event
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
      - **A charity and school rate** - 2.45% + A$0.45 rather than
        3.95% + A$0.95, and individually quoted rates for higher volumes
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
      - **[Liquid email templates](/features/email-templates/)** - write the
        subject, HTML body and plain text body of your confirmation emails
      - **[SMS messages](/features/sms-messages/)** - text attendees about
        their booking
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit now and the balance later
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        buyers enter their own price above a minimum. Chobble takes no cut of
        the extra, though your payment provider still charges on the larger
        amount
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

      Selling through a marketplace means the platform sits between you and
      the buyer at the point of sale. What Ticketted does with buyer contact
      details afterwards, including whether it emails them about other
      organisers' events, is not set out in its published material.

      Chobble Tickets has no marketplace across organisers. Visitors can
      browse your own [public site](/features/your-public-website/) and its
      listings, but nothing puts your event in front of someone who came
      looking for a different organiser's.
  - type: markdown
    content: |
      ## Data ownership

      Ticketted says card payments meet the card industry's security rules
      (PCI), that its data handling is ready for European privacy law (GDPR),
      and that Stripe checks payments for fraud. Attendee data is held on
      Ticketted's servers, and it publishes neither its source code nor a
      documented way to run the platform yourself. If Ticketted stopped
      operating, you would depend on the exports you had already
      downloaded.

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
      - You sell few enough tickets that 3.95% + A$0.95 each costs less than
        a flat annual price plus your own card processing, which at £15 a
        ticket is under about 75 tickets a year
      - You sell enough to be worth an individually quoted rate
      - You want your event listed on a site people already browse
      - You want AI tools to write your event description and set the event up
      - You want detailed audience analytics such as buying windows and
        checkout drop-off
      - You want round-the-clock support in Australian hours
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You sell more than about 75 tickets a year at £15 each, where a
        percentage of every ticket costs more than a flat £50 plus your own
        card processing
      - You want a price that does not change with ticket volume or value
      - You are a charity, community group, artist or musician, and pay
        £25/year on the annual plan
      - You want your ticket pages on
        [your own domain](/features/custom-domain/) and
        [your own website](/features/your-public-website/), under your own
        name
      - You want attendee data [encrypted at rest](/features/encrypted/) and
        no marketplace between you and your ticket buyers
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
      new company, though the record says nothing about whether its people
      traded before under another name. No owner, director or investor
      information was found in the sources reviewed.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPL-3.0-only,
      and the platform can be self-hosted by anyone without depending on
      Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The prices above come from Ticketted's own pricing page and the company
      record from ABN Lookup, both checked on 11 August 2026, and the feature
      descriptions from the rest of the platform's published material. Several
      points other comparisons on this site cover, including white
      labelling, custom domains, refunds, whether the charge can be passed to
      ticket buyers, and what happens to buyer contact details, are left open
      above rather than guessed at. Fees may change, so check the links below
      for the latest figures.

      - [Ticketted pricing](https://www.ticketted.com/pricing) -
        3.95% + A$0.95 per paid ticket including Stripe's processing charge,
        2.45% + A$0.45 for charities and schools, quoted rates for higher
        volumes, free RSVP events free, no subscription or setup fee, payouts
        through Stripe Connect
      - [Ticketted](https://www.ticketted.com/) - event listings across
        Australia, AI event setup, QR check-in, audience analytics
      - [ABN Lookup: Ticketted Pty Ltd](https://abr.business.gov.au/ABN/View?abn=26698189669) -
        ABN 26 698 189 669, Australian private company, registered 18 May 2026
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
