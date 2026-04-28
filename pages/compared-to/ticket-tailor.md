---
layout: design-system-base.html
competitor_key: ticket_tailor
title: Chobble Tickets vs Ticket Tailor
meta_title: Open Source Alternative to Ticket Tailor | Chobble Tickets
meta_description: "Chobble Tickets vs Ticket Tailor: flat annual pricing with no per-ticket fees, encrypted attendee data, and open source code."
permalink: /compared-to/ticket-tailor/
eleventyNavigation:
  key: vs Ticket Tailor
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    title: Chobble Tickets vs Ticket Tailor
    lead: >-
      Ticket Tailor is an independently owned ticketing platform from
      London, running since 2010. This page compares it to Chobble Tickets.

  - type: markdown
    content: |
      ## Pricing comparison

      [Ticket Tailor](https://www.tickettailor.com) charges a flat fee per
      paid ticket, with no percentage on top. The pay-as-you-go rate is £0.60
      per ticket. If you buy credits upfront, the rate drops: 500 credits
      cost £205 (41p per ticket), and buying in larger bundles brings the
      cost down to around 22p per ticket. The minimum credit purchase is 100.
      Payment processing via Stripe, PayPal, or Square is charged separately
      on top.

      Registered charities get 50% off Ticket Tailor fees. PTAs and B Corps
      get 20% off. Free events do not use credits or pay-as-you-go fees.

      Reserved seating events consume two credits per paid seated ticket
      rather than one, which doubles the per-ticket cost on the seating
      chart features.

      Chobble Tickets is a flat £50/year with
      [no per-ticket fees](/features/no-per-ticket-fees/). Community groups,
      charities, and schools pay £25/year. On Ticket Tailor's pay-as-you-go
      rate, Chobble Tickets works out cheaper once you sell more than about
      84 paid tickets a year. Even at Ticket Tailor's lowest prepaid rate of
      22p per ticket, Chobble Tickets is cheaper once you sell more than
      about 230 tickets a year.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Feature comparison

      Ticket Tailor has been running since 2010 and has a broader feature
      set than Chobble Tickets in several areas. Here's the breakdown:

      **Both platforms share some features:**

      - Online ticket sales with payment processing via Stripe or Square
      - Apple Pay and Google Pay at checkout (via Stripe)
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Capacity management to prevent overselling
      - Shared capacity caps across multiple ticket tiers (Ticket Tailor
        does this with ticket types inside one event; Chobble Tickets does
        it by grouping separate events together)
      - Free event support with no payment setup required
      - Refund processing from the admin panel
      - Embeddable ticket widgets for your own website
      - REST API access for custom integrations
      - Webhooks for real-time event notifications
      - Custom questions on the registration form
      - CSV data export
      - Apple Wallet passes for tickets
      - Recurring events with per-date capacity
      - Custom domain support

      **Ticket Tailor has features Chobble Tickets doesn't:**

      - **Reserved seating** - drag-and-drop seating chart designer where
        you upload a venue floor plan and trace seats over it, so attendees
        can pick their own seat. Reserved seating consumes two credits per
        paid seated ticket
      - **On-site point-of-sale** - the Ticket Tailor check-in app sells
        tickets in person and accepts card payments via the BBPOS WisePOS E
        terminal through Stripe Terminal, plus Tap to Pay or cash
      - **Native check-in apps** - dedicated iOS and Android apps that
        download attendee lists for offline scanning
      - **Waitlists** - built-in waitlist support for sold-out events
      - **Discount codes** - set up promo codes and voucher codes to give
        attendees a discount at checkout
      - **Ticket bundles** - combine tickets and add-ons into a single
        bundle at a discounted price (for example, two adults plus a child)
      - **Tracking links** - generate UTM-tagged links to see which
        marketing channels drove each sale
      - **Direct marketing integrations** - built-in connectors for
        Mailchimp, HubSpot, Constant Contact, and ActiveCampaign (Chobble
        Tickets connects to these tools through webhooks or Zapier)
      - **WordPress plugin** - official plugin for embedding events in
        WordPress sites
      - **PayPal support** - accept PayPal alongside card payments
        (Chobble Tickets supports Stripe and Square, but not PayPal)
      - **Multi-currency support** - sell tickets in different currencies
        on the same account (Chobble Tickets uses one currency per instance,
        set at setup)
      - **Apple Wallet for memberships** - save membership passes to Apple
        Wallet for recurring check-ins
      - **Heat map for recurring events** - shows which dates and times
        are busiest at a glance
      - **B Corp certification** - Ticket Tailor is a certified B
        Corporation

      **Chobble Tickets has features Ticket Tailor doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** - attendee data is
        encrypted at rest with hybrid RSA-OAEP + AES-256-GCM, where only
        the organiser holds the private key. Ticket Tailor uses standard
        AES-256 encryption at rest, but the data remains readable by
        Ticket Tailor staff
      - **[Open source](/features/open-source/)** - every line of code is
        public under AGPLv3
      - **Self-hosting option** - run the platform on your own servers,
        with no licence fee
      - **Flat annual pricing** - £50/year with no per-ticket fees and no
        credit bundles to top up
      - **[Subscribable ICS calendar feed](/features/rss-and-calendar-feeds/)** -
        a single feed that lists all your events, so subscribers get
        automatic updates when you add new ones (Ticket Tailor offers
        per-event "add to calendar" links in confirmation emails, but no
        subscribable feed)
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate your
        events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        attendees enter their own price above a minimum, so buyers can
        donate more if they want. Chobble Tickets takes no cut of the
        extra, so all of it goes to you. Ticket Tailor supports
        sliding-scale pricing through fixed ticket types at different
        prices, but not a free-text amount entered by the buyer
      - **[Google Wallet passes](/features/apple-wallet/)** - tickets can
        be saved to Google Wallet alongside Apple Wallet
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain, not the platform's
      - **[Liquid email templates](/features/email-templates/)** - full
        control over confirmation emails with Liquid template syntax
        (Ticket Tailor allows editing the confirmation email with
        placeholders, but not a full templating language)
      - **[Admin API](/features/admin-api/)** - authenticated API with
        API keys for full event CRUD and reading private data
      - **Custom domain included** - pointing your own domain is part of
        the £50/year plan (Ticket Tailor bundles custom domains with its
        White Label add-on at around £7/month)
      - **Community Interest Company** - run by a CIC, a UK legal
        structure that locks the company's assets for community benefit

      ## Data ownership

      Ticket Tailor is a proprietary platform. Your event data lives on
      their servers, and you depend on their continued operation. Unlike
      some larger platforms, Ticket Tailor does not run a consumer
      marketplace and does not email attendees about other organisers'
      events. CSV exports and a full API are available for getting your
      data out.

      With Chobble Tickets, attendee data is encrypted at rest and stays
      under your control. The entire platform is open source under AGPLv3,
      so you can self-host it and never depend on a third party. If
      Chobble Tickets stopped operating tomorrow, you could run the same
      code on your own server.

      ## When Ticket Tailor might be the better choice

      - You need reserved seating with a visual seat picker
      - You want an on-site point-of-sale system with card readers
      - You want native iOS and Android check-in apps
      - You need waitlists for sold-out events
      - You want direct built-in integrations with Mailchimp, HubSpot, or
        Constant Contact without setting up webhooks
      - You sell in multiple currencies for international events
      - You need built-in discount codes or voucher codes
      - You want to accept PayPal alongside Stripe
      - You prefer paying a flat fee per ticket over an annual fee, and
        sell fewer than about 84 paid tickets a year
      - You want a platform that has been running since 2010

      ## When Chobble Tickets is the better choice

      - You already have your own audience and don't need a discovery
        platform
      - You want predictable, flat-rate pricing with no per-ticket fees and
        no credit bundles to manage
      - Privacy and encryption matter to you
      - You're a community group, charity, or school (£25/year)
      - You want [Apple/Google Wallet](/features/apple-wallet/),
        [calendar feeds](/features/rss-and-calendar-feeds/), or a
        [public API](/features/public-api/) included
      - You want your own custom domain included in the base price
      - You want [custom email providers](/features/email-providers/) so
        confirmation emails come from your own domain
      - You value [open source](/features/open-source/) and the ability to
        self-host

  - type: markdown
    content: |
      ## Who owns Ticket Tailor?

      Ticket Tailor was started by Jonny White in London in 2010 and
      launched in January 2011. The company was sold to Time Out in 2012
      and bought back by the founder in 2014. It has operated
      independently since, without venture capital or private equity
      funding.

      Ticket Tailor is a [certified B
      Corporation](https://www.bcorporation.net/en-us/find-a-b-corp/company/ticket-tailor/),
      a certification for companies that meet standards on social and
      environmental performance.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on
      Chobble as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in April 2026. Fees
      may change. Check the links below for the latest figures.

      - [Ticket Tailor pricing](https://www.tickettailor.com/pricing) - £0.60 per paid ticket pay-as-you-go, from £0.22 with prepaid credits
      - [Ticket Tailor help centre: how much does it cost](https://help.tickettailor.com/en/articles/6731528-how-much-does-ticket-tailor-cost-and-how-will-i-be-charged)
      - [Ticket Tailor help centre: prepaid credits](https://help.tickettailor.com/en/articles/4725866-how-do-pre-pay-ticket-credits-work) - bulk discount tiers
      - [Ticket Tailor help centre: charity discount](https://help.tickettailor.com/en/articles/950033-i-run-a-charity-not-for-profit-organisation-do-i-get-a-discount) - 50% off for registered charities
      - [Ticket Tailor help centre: all discounts](https://help.tickettailor.com/en/articles/8687492-what-discounts-do-we-offer) - 20% off for PTAs and B Corps
      - [Ticket Tailor help centre: Stripe, PayPal, Square fees](https://help.tickettailor.com/en/articles/959959-how-much-do-stripe-paypal-and-square-charge)
      - [Ticket Tailor help centre: custom domain and white-label](https://help.tickettailor.com/en/articles/9361210-top-tips-for-using-a-widget-and-a-custom-domain) - ~£7/month for white-label (includes custom domain)
      - [Ticket Tailor features](https://www.tickettailor.com/features) - full feature list
      - [Ticket Tailor API docs](https://developers.tickettailor.com/docs/api/ticket-tailor-api/)
      - [Ticket Tailor our story](https://www.tickettailor.com/our-story) - founded 2010 by Jonny White, bought back from Time Out
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
