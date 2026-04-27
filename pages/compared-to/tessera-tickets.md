---
layout: design-system-base.html
competitor_key: tessera_tickets
title: Chobble Tickets vs Tessera Tickets
meta_title: Open Source Alternative to Tessera Tickets | Chobble Tickets
meta_description: "Chobble Tickets vs Tessera Tickets: flat annual pricing with no monthly subscription, encrypted attendee data, and open source code."
permalink: /compared-to/tessera-tickets/
eleventyNavigation:
  key: vs Tessera Tickets
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    title: Chobble Tickets vs Tessera Tickets
    lead: >-
      Tessera Tickets is a US ticketing platform built around WordPress for
      music venues, theatres, and comedy clubs. Here is how a small, open
      source alternative compares.

  - type: markdown
    content: |
      ## Pricing comparison

      [Tessera Tickets](https://www.tessera-tickets.com/pricing/) charges a
      monthly subscription that scales with the number of tickets you sell
      each year, rather than taking a cut of each ticket. The smallest plan
      is $125/month (about £1,200/year) for up to 10,000 tickets per year,
      and the published tiers go up to $667/month (about £6,400/year) for up
      to 100,000 tickets per year. Larger volumes are quoted on request.

      Because the standard Tessera setup uses a WordPress-based public
      website, you also pay separately for WordPress hosting from Tecture
      at $150-$400/month (about £1,440-£3,840/year). The do-it-yourself
      option lets you skip the WordPress hosting and build your own
      customer-facing website against Tessera's API instead. One-off setup fees range
      from free for the do-it-yourself option to $3,500 for the Template
      Plus theme, with custom designs starting at $6,000 and full
      redesigns starting at $10,000. Seating chart setup is $500-$1,000
      extra, point-of-sale hardware is around $300 per device, and the
      barcode reader app is from $100/month for up to five devices.

      Payment processing through Stripe or Authorize.net is charged
      separately on top.

      Chobble Tickets is a flat £50/year with [no per-ticket
      fees](/features/no-per-ticket-fees/), no monthly subscription, and no
      ticket-volume tiers, plus Stripe processing at 1.5% + 20p. Registered
      charities, schools, and community groups pay £25/year.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Feature comparison

      Tessera Tickets is built for venues that run their own programme of
      shows, with assigned seating, a box office, and on-site merchandise
      sales. Chobble Tickets is built for organisers who want a flat-rate
      platform without the box-office hardware and venue-management
      features. Here is the breakdown:

      **Both platforms share some features:**

      - Online ticket sales with payment processing via Stripe
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Capacity management to prevent overselling
      - Free event support with no payment setup required
      - Refund processing from the admin panel
      - CSV data export
      - Multi-user access for staff
      - REST API access for custom integrations

      **Tessera Tickets has features Chobble Tickets doesn't:**

      - **Reserved seating** - SVG seating chart for individual seat
        selection, with seat-change tools for swapping customers between
        seats after purchase
      - **Table sales** - sell whole tables as a unit instead of
        individual seats, useful for cabaret and comedy club layouts
      - **Merchandise store** - sell merchandise alongside tickets through
        a dedicated merchandise ecommerce store with configurable product
        attributes and inventory tracking
      - **On-site point-of-sale** - dedicated POS hardware integration
        with Stripe card readers for box-office and walk-up sales
      - **Will-call list** - dedicated will-call workflow for collecting
        tickets at the door
      - **Box-office refunds** - record cash and cheque refunds in the
        admin alongside card refunds, plus issue store credit instead of
        a refund
      - **Authorize.net support** - accept cards through Authorize.net as
        well as Stripe (Chobble Tickets supports Stripe and Square only)
      - **Saved customer accounts** - returning customers can save credit
        cards to their account for faster future purchases (PCI-compliant
        card storage)
      - **Coupon and promo codes** - site-wide discount codes for
        marketing campaigns
      - **Password-protected pre-sales** - schedule date-range pre-sales
        and protect specific ticket tiers with passwords
      - **External ticket links** - link an event listing out to a
        third-party ticketing platform when needed, for example when
        moving a popular show to a larger venue
      - **Per-customer notes** - attach internal notes to customer and
        order records
      - **Role-based permissions** - separate user roles for will-call,
        financial reporting, point-of-sale, and inventory management
      - **WordPress integration** - the public-facing website is a
        WordPress site with event cards, filtering, fuzzy text search, and
        a sidebar cart pane
      - **Custom HTML/CSS for cart and admin** - edit HTML and CSS
        elements for emails, cart, and admin screens
      - **US-based vendor** - Tessera is built by a Chicago web agency,
        so the company runs on US business hours

      **Chobble Tickets has features Tessera Tickets doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** - attendee data
        is encrypted at rest with hybrid RSA-OAEP + AES-256-GCM, where
        only the organiser holds the private key
      - **[Open source](/features/open-source/)** - every line of code is
        public under AGPLv3, no proprietary lock-in
      - **Self-hosting option** - run the platform on your own servers for
        free, with no licence fee and no monthly subscription
      - **Flat annual pricing** - £50/year with no per-ticket fees, no
        monthly subscription, and no ticket-volume tiers
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can save tickets to both Apple Wallet and Google Wallet
      - **[Subscribable ICS calendar feed](/features/rss-and-calendar-feeds/)** -
        a single feed that lists all your events, so subscribers get
        automatic updates when you add new ones
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate
        your events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** -
        let attendees enter their own price above a minimum
      - **[Daily and recurring events](/features/daily-events/)** -
        per-date capacity with calendar picker and holiday blackouts
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain, not the platform's
      - **[Liquid email templates](/features/email-templates/)** - full
        control over confirmation emails with Liquid template syntax
      - **[Admin API](/features/admin-api/)** - authenticated API with
        API keys for full event CRUD and reading private data
      - **[Webhooks](/features/webhooks/)** - outbound POST on every
        registration for custom integrations
      - **[Custom questions at checkout](/features/custom-questions/)** -
        add multiple-choice questions to your events and collect
        structured answers from each attendee, visible across the admin,
        CSV exports, and webhooks
      - **[Embeddable widget](/features/embeddable-widget/)** - drop an
        iframe into any website without needing WordPress
      - **[Custom domain included](/features/custom-domain/)** - point
        your own domain at no extra cost
      - **No website hosting required** - Chobble Tickets hosts both the
        ticketing platform and the event listing pages
      - **Community Interest Company** - run by a CIC, a UK legal
        structure that locks the company's assets for community benefit

      ## Data ownership

      Tessera Tickets is a proprietary, US-hosted platform. Your event and
      customer data lives on Tecture's servers, and you depend on the
      monthly subscription continuing. Tessera does not run a consumer
      marketplace and does not market other organisers' events to your
      attendees. The website does not publish details on encryption at
      rest, GDPR processes, or what happens to your data if you cancel.

      With Chobble Tickets, attendee data is encrypted at rest, so even
      someone with database access cannot read names, emails, or custom
      question answers without your private key. The entire platform is
      open source under AGPLv3, so you can self-host it and never depend
      on a third party. If Chobble Tickets stopped operating tomorrow,
      you could run the same code on your own server.

      ## When Tessera Tickets might be the better choice

      - You run a music venue, theatre, or comedy club with assigned
        seating
      - You need a visual seating chart for individual seat selection
      - You sell tables of seats rather than individual tickets
      - You sell merchandise alongside tickets and want it in the same
        cart
      - You want on-site point-of-sale hardware for box-office sales
      - You want to accept cards through Authorize.net rather than Stripe
        or Square
      - You already run a WordPress site and want a ticketing platform
        built on top of WordPress
      - You sell at high volumes and want a single subscription rather
        than per-ticket fees
      - You prefer working with a US-based vendor in US business hours

      ## When Chobble Tickets is the better choice

      - You sell a modest number of tickets and don't want a four-figure
        annual subscription
      - You want predictable, flat-rate pricing with no per-ticket fees
        and no ticket-volume tiers
      - You don't want to run and host a separate WordPress site
      - Privacy and [encryption](/features/encrypted/) matter to you
      - You're a community group, charity, or school (£25/year)
      - You want [Apple/Google Wallet](/features/apple-wallet/),
        [calendar feeds](/features/rss-and-calendar-feeds/), or a
        [public API](/features/public-api/) included
      - You want your own custom domain included in the base price
      - You want [custom email providers](/features/email-providers/) so
        confirmation emails come from your own domain
      - You value [open source](/features/open-source/) and the ability
        to self-host

  - type: markdown
    content: |
      ## Who runs Tessera Tickets?

      Tessera Tickets is built and run by Tecture, a custom web
      development agency based in Chicago, Illinois. Tecture was founded
      in 2002 and builds web software for businesses, startups, and
      nonprofits, with Tessera as its in-house ticketing product for
      venues.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3,
      and the platform can be self-hosted by anyone without depending on
      Chobble as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in April 2026.
      Fees may change - check the links below for the latest figures.

      - [Tessera Tickets pricing](https://www.tessera-tickets.com/pricing/) -
        subscription tiers, hosting, setup fees, and add-ons
      - [Tessera Tickets features](https://www.tessera-tickets.com/features/) -
        full feature list
      - [Tecture](https://www.tecture.com/) - the Chicago web agency that
        builds Tessera
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Try Chobble Tickets
    description: Sign up for managed hosting at £50/year, or self-host for free.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
