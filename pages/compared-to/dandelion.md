---
competitor_key: dandelion
title: Chobble Tickets vs Dandelion
meta_title: Dandelion Events Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Dandelion on fees, community tools, deposits, logistics, accounting, data handling, source licences, and self-hosting.
permalink: /compared-to/dandelion/
eleventyNavigation:
  key: vs Dandelion
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Dandelion

      Dandelion is a ticketing and community platform provided by Symbiota, which describes itself as a not-for-profit worker co-operative. Dandelion does not charge an annual subscription or a mandatory fee on tickets sold through the platform. It also provides a public event marketplace.
  - type: markdown
    content: |
      ## Pricing comparison

      [Dandelion](https://dandelion.events/) has no annual subscription or
      mandatory ticket fee. Ticket payments normally go straight to the
      organiser's payment account, and the payment provider charges its normal
      processing fee.

      Dandelion funds the service through voluntary contributions:

      - Organisers are normally asked for 1% of completed ticket sales
      - Buyers are asked for a donation at checkout. Who receives it depends
        on the organisation's payment setup and contribution status
      - Dandelion asks for £25 when an event sends buyers elsewhere or has no
        Dandelion ticket types. A no-ticket event only stays in public browsing
        while its organisation meets Dandelion's contribution rules
      - Organisers can pay to boost an event in public listings

      The calculator counts only UK Stripe processing for Dandelion. It leaves
      out contributions, buyer donations, and boosts. Its fixed processing cost
      assumes one paid ticket per transaction, as explained below the
      calculator.

      Chobble Tickets costs £50/year or £5/month. Charities, community groups,
      artists, and musicians pay £25/year on the annual plan. It has
      [no per-ticket platform fee](/features/no-per-ticket-fees/). At the
      standard annual rate, Dandelion costs £50 less each year if the organiser
      makes no contribution and both platforms use the same Stripe rate. The
      difference is £25 against Chobble Tickets' discounted annual rate.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison

      **Both platforms offer:**

      - Free, fixed-price, and pay-what-you-want tickets
      - Several ticket prices or tiers with capacity limits
      - Stripe payments paid to the organiser's account
      - Mobile QR code check-in
      - Booking confirmation emails
      - Discount codes and custom questions
      - Ticket forms that can be embedded on another website
      - Sales, attendance, and CSV reports
      - Organiser-issued refunds
      - Bulk email to event attendees with a preview before sending

      **Dandelion has features Chobble Tickets does not:**

      - **Public event marketplace** - visitors can search by date, keyword,
        location, tag, or map. Signed-in users also receive event and people
        recommendations
      - **Waitlists, transfers, and resales** - Dandelion emails waitlists when
        tickets return. Attendees can transfer tickets or use its experimental
        resale feature. Automatic resale refunds are limited to supported
        Stripe and GoCardless payments
      - **Community tools** - organisations can have followers, facilitators,
        local groups, and activities. Events can require an accepted
        application, and organisations can accept event submissions for review
      - **Campaigns, reminders, and feedback** - organisers can email
        followers and waitlists, schedule event reminders, track booking links,
        and collect post-event feedback. Dandelion includes one organisation
        email per month for up to 1,000 subscribers. Further or larger sends
        require the organiser's own Mailgun account
      - **Co-created gatherings** - members can build timetables, join shifts,
        organise teams, track shared items, and view a shared budget. Choose &
        Pay covers contribution levels, accommodation, transport, food, extras,
        and part payments
      - **More payment options** - Dandelion supports GoCardless Instant Bank
        Pay, Open Collective, and some crypto payments alongside Stripe. It can
        also set currencies and Stripe tax rates per event, and offers Stripe
        revenue sharing by request
      - **Recordings and on-demand events** - Dandelion has separate workflows
        for selling access to a past recording or content with no fixed date
      - **Organisation growth tools** - affiliate links can give attendees
        credit towards future tickets. Organisations can also import events
        from supported calendars while bookings stay on the original platform

      **Chobble Tickets has different booking and operations tools:**

      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit or reserve a place for £0, then send the customer a link
        to pay the balance. Cash and bank transfers can be recorded against the
        same balance
      - **[Daily and multi-day bookings](/features/multi-day-hire/)** - buyers
        can pick a date or book several consecutive days. Capacity is checked
        for every day, with booking windows and holiday closures
      - **[Packages and required choices](/features/packages/)** - sell several
        listings as one package, or require a choice such as a room, meal,
        camping pitch, or materials kit
      - **[Delivery and servicing tools](/features/logistics/)** - assign
        drop-offs and collections to a driver or crew, with a phone run sheet.
        [Servicing holds](/features/servicing-events/) block capacity for
        cleaning, repairs, or internal use without creating a customer booking
      - **[Double-entry ledger](/features/ledger/)** - event income, attendee
        balances, refunds, offline payments, and event costs appear in one
        ledger, with a statement for each event and attendee
      - **[Existing-site cart](/features/order-widget/)** - one script can turn
        links on the organiser's website into add-to-cart buttons, then pass
        the order to the hosted checkout
      - **[Content-only editor accounts](/features/editors/)** - editors can
        manage listings and site content without access to attendee details.
        Delivery staff can be limited to their assigned run sheet

      **Chobble Tickets also has these platform features:**

      - **[Encrypted attendee details](/features/encrypted/)** - names, contact
        details, ticket links, payment references, and written answers are
        encrypted. A copied database cannot reveal these fields on its own
      - **[Custom domains](/features/custom-domain/)** - managed hosting can
        use the organiser's own domain. Dandelion documents embeds but not
        custom domains for its hosted service
      - **[Public-facing website and CMS](/features/your-public-website/)**
        - a homepage, content pages, news posts, and a contact form with
        spam protection, edited from the admin panel in Markdown with
        [custom CSS](/features/customising-your-site/). Dandelion events
        live on its marketplace rather than a standalone site
      - **[Apple and Google Wallet passes](/features/apple-wallet/)** - an
        attendee can save a Chobble ticket in either phone wallet
      - **[Email provider and templates](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun, with editable HTML and plain-text
        confirmation templates
      - **[Write-capable administration API](/features/admin-api/)** - API keys
        can create and change listings, groups, and holiday closures.
        Dandelion's documented Zapier and public AI-assistant tools can only
        read data
      - **[Square and SumUp payments](/features/stripe-and-square/)** - these
        are available as alternatives to Stripe
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - organisers can
        publish event updates to feed readers. Both platforms also provide
        calendar feeds
      - **[Attendee retention controls](/features/privacy-controls/)** - owners
        can delete attendee records left behind when a listing is removed, set
        how long those records are kept, and remove a person's contact history
  - type: markdown
    content: |
      ## Data and attendee relationships

      Dandelion creates platform accounts and can hold profiles, bookings,
      applications, messages, and answers to event questions. It uses past
      event bookings and shared gatherings to recommend events and people.
      Organisers can also add analytics or a Meta/Facebook Pixel, subject to the
      visitor's cookie choice.

      Chobble Tickets does not run a marketplace or create platform-level
      attendee profiles. It encrypts names, contact details, ticket links,
      payment references, and written answers.

      Booking dates, quantities, and totals remain readable so the software can
      manage capacity and reports. Chobble does not use booking records to
      recommend other events.

      Organisers can choose whether to enable a recovery account when their
      host provides one. Its login details go to the host's configured recovery
      address and can unlock attendee details, so they must be kept securely.
  - type: markdown
    content: |
      ## Source code and self-hosting

      Dandelion publishes its source code under the Functional Source License.
      Organisations can inspect it, change it, and run it for internal use.

      For the first two years after a version is published, it cannot be used
      to offer a competing commercial service. Apache 2.0 becomes an extra
      licence after that period.

      The Chobble Tickets repository README states that every feature is
      available under AGPLv3, which has no temporary restriction on competing
      services. At the verification date, the repository stated this in its
      README but did not include a separate copy of the full licence text.
  - type: markdown
    content: |
      ## When Dandelion might be the better choice

      - You want no annual subscription or mandatory fee on tickets sold
        through the platform
      - You want people to discover events through a public marketplace,
        location search, tags, and recommendations
      - You need waitlists, attendee transfers, or ticket resales
      - You run application-based events or participatory gatherings
      - You want followers, campaigns, and feedback in the ticketing platform
      - You need GoCardless, Open Collective, or supported crypto payments
      - You need different currencies for different events or Stripe tax rates
      - You want revenue sharing or affiliate credit
      - You prefer a provider that describes itself as a not-for-profit worker
        co-operative
  - type: markdown
    content: |
      ## When Chobble Tickets might be the better choice

      - You do not need a marketplace and already have a way to reach your
        audience
      - You do not want the ticketing platform to build shared attendee
        profiles or use booking records to recommend other events
      - You need deposits, balance collection, or records of offline payments
      - You need bookings that consume capacity across several days
      - You want fixed packages or required choices such as meals, rooms, or
        equipment
      - You need delivery run sheets, assigned agents, or maintenance holds
      - You want a double-entry ledger covering attendee balances, event costs,
        refunds, and offline income
      - You need a custom domain, wallet passes, or a choice of email provider
      - You need a write API for listings, groups, and holiday closures
      - You want Square or SumUp payments
      - You prefer the AGPLv3 terms stated in Chobble Tickets' README
      - You want flat managed hosting at £50/year or software with no Chobble
        charge for self-hosting
  - type: markdown
    content: |
      ## Who runs Dandelion?

      Dandelion is provided by Symbiota Ltd, company number 09603539. Symbiota
      describes itself as a not-for-profit worker co-operative. Companies
      House records it as an active private company limited by guarantee
      without share capital.

      Chobble Tickets is provided by Chobble CIC, company number 17050113.
      Companies House records it as an active UK Community Interest Company.
      A CIC has an asset lock that limits how company assets can be transferred
      and requires them to be used for community benefit.
  - type: markdown
    content: |
      ## Sources

      The pricing, feature, privacy, licence, and company information on this
      page was checked on 22 July 2026. Features and policies may change.
      Check the source pages for current details.

      - [Dandelion features](https://dandelion.events/features) - ticketing, marketplace, organisation, and gathering features
      - [Dandelion event documentation](https://dandelion.events/docs/events) - pricing, donations, waitlists, resales, payments, embeds, and event tools
      - [Dandelion organisation documentation](https://dandelion.events/docs/organisations) - email campaigns, local groups, analytics, iCal imports, and affiliate credits
      - [Dandelion gathering documentation](https://dandelion.events/docs/gatherings) - timetables, shifts, teams, inventory, and budgets
      - [Dandelion mailer documentation](https://dandelion.events/docs/mailer) - audiences, templates, and campaign sending
      - [Dandelion Zapier API documentation](https://dandelion.events/docs/zapier) - documented API endpoints and triggers
      - [Dandelion AI-assistant search documentation](https://dandelion.events/docs/mcp) - read-only public discovery service
      - [Dandelion privacy policy](https://dandelion.events/privacy) - data collection, use, sharing, and retention
      - [Dandelion cookie policy](https://dandelion.events/cookies) - optional analytics and marketing tools
      - [Dandelion terms](https://dandelion.events/terms) - provider, ticket payments, and company description
      - [Dandelion source code checked for this comparison](https://github.com/symbiota-coop/dandelion/tree/c652134260cff94c620ab20acaf4865ce386310b) and [FSL-1.1-ALv2 licence](https://github.com/symbiota-coop/dandelion/blob/master/FSL-1.1-ALv2.md)
      - [Symbiota Ltd at Companies House](https://find-and-update.company-information.service.gov.uk/company/09603539)
      - [Chobble Tickets features](/features/)
      - [Chobble Tickets pricing](/pricing/) - hosting, discounts, processing, and self-hosting costs
      - [Chobble Tickets source repository](https://github.com/chobbledotcom/tickets) - current features and stated AGPLv3 terms
      - [Chobble Tickets recovery-account source](https://github.com/chobbledotcom/tickets/blob/main/src/features/admin/settings-superuser.ts) - optional recovery owner implementation
      - [Chobble CIC at Companies House](https://find-and-update.company-information.service.gov.uk/company/17050113)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Sign up for managed hosting at £50/year or £5/month, or use the self-hosted software with no Chobble charge.
name: Dandelion Events Alternative | Chobble Tickets
---
