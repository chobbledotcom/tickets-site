---
layout: design-system-base.html
competitor_key: cheddar_up
title: Chobble Tickets vs Cheddar Up
meta_title: Open Source Alternative to Cheddar Up | Chobble Tickets
meta_description: Looking for an alternative to Cheddar Up? Chobble Tickets offers flat annual pricing with no per-ticket fees, full data ownership, and no platform lock-in.
permalink: /compared-to/cheddar-up/
eleventyNavigation:
  key: vs Cheddar Up
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    title: Chobble Tickets vs Cheddar Up
    lead: >-
      Cheddar Up is a payment collection platform popular with PTAs,
      nonprofits, and community groups in the US. Here is how Chobble
      Tickets compares.

  - type: markdown
    content: |
      ## Pricing comparison

      [Cheddar Up](https://www.cheddarup.com) has three plans: Basic
      (free), Pro ($20/month or $180/year), and Team ($48/month or
      $420/year). Ticketing with QR code check-in is a Team-only feature,
      so event organisers who want proper ticketing need the $420/year
      plan. On all plans, Cheddar Up charges a per-transaction convenience
      fee: 3.95% + $0.95 on Basic, or 3.59% + $0.59 on Pro and Team.
      These fees include Stripe payment processing and can be passed to
      payers or absorbed by the organiser.

      Chobble Tickets is a flat £50/year regardless of how many tickets
      you sell, with [no per-ticket platform fees](/features/no-per-ticket-fees/). You pay Stripe's
      processing fees (1.5% + 20p in the UK) separately.

      The price comparison below uses the Team plan ($420/year, approx.
      £335) since that's what's required for ticketing with QR codes.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Feature comparison

      Cheddar Up is a general-purpose payment collection platform that
      added ticketing in 2023. Chobble Tickets is a purpose-built
      ticketing platform. Both serve community groups but take different
      approaches. Here is the breakdown:

      **Both platforms share some features:**

      - Online ticket sales with payment processing via Stripe
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Capacity management to prevent overselling
      - Free event support with no payment setup required
      - Multiple ticket types per event
      - Custom questions on the registration form
      - CSV data export
      - Waitlists for sold-out events
      - Apple Pay and Google Pay at checkout (via Stripe)

      **Cheddar Up has features Chobble Tickets doesn't:**
      - **In-person point-of-sale** - sell tickets, merchandise, and
        concessions at the door with a Bluetooth card reader ($79) or Tap
        on Mobile (NFC), with all sales synced to your online dashboard
      - **Volunteer check-in via Event Codes** - share a code with
        volunteers so they can scan tickets or take payments using the
        Cheddar Up mobile app without needing your login credentials
      - **eCheck payments (ACH)** - accept bank transfers at lower fees
        (1.59% on Pro, $0.95 flat on Team), giving payers a cheaper
        alternative to credit cards
      - **Shipping labels** - purchase and print USPS shipping labels
        directly from Cheddar Up for merchandise orders (Pro and Team)
      - **Recurring payments** - set up automatic recurring charges for
        tuition, dues, sports fees, or donations (Team only)
      - **Group Page** - a branded landing page where your community can
        access all your fundraisers, stores, events, and registrations
        in one place (Team only)
      - **Brand Kit** - customise your logo, colours, and footer across
        every collection page and email (Team only)
      - **Account-wide dashboard** - view total collected, total payers,
        top payers, and top collections across all your pages (Team only)
      - **Report Centre** - filter payments across collections, exclude
        refunds, and save custom reports (Team only)
      - **Unlimited managers** - invite volunteers with their own login
        credentials to create and manage collections without seeing
        financial details (Team only)
      - **Nonprofit features** - verified 501(c)(3) groups get a badge
        and can automatically send tax-deductible receipts with IRS
        language (Team only)
      - **Free-text custom questions** - add open-ended questions
        alongside multiple choice on registration forms (Chobble supports
        multiple-choice custom questions only)
      - **Discount codes** - create percentage or fixed-amount discount
        codes for collections (Pro and Team)
      - **Scheduled access** - set start and end times for collection
        pages with a countdown timer (Pro and Team)
      - **Visitor reports** - collect names and emails of page visitors
        for follow-up marketing (Pro and Team)
      - **Native integrations** - connects with Zapier, Google Sheets,
        Mailchimp, QuickBooks, Xero, HubSpot, WordPress, and more
      - **Mobile app** - native iOS and Android app for managing
        collections, scanning tickets, and taking payments

      **Chobble Tickets has features Cheddar Up doesn't:**

      - **[Purchasable events](/features/purchasable-events/)** - collect
        donations, sell raffle tickets, take membership dues, and run any
        kind of payment collection without an event to attend - not just
        ticketing
      - **[Sign-up forms](/features/sign-up-forms/)** - create volunteer
        sign-up sheets, potluck coordinators, and other form-based
        collections by setting an event as free with custom questions
      - **[End-to-end encryption](/features/encrypted/)** - attendee data
        is encrypted at rest with hybrid RSA-OAEP + AES-256-GCM, not
        just stored in a database
      - **[Open source](/features/open-source/)** - every line of code is
        public under AGPLv3, no proprietary lock-in
      - **Self-hosting option** - run the platform on your own servers
        for free, with no licence fee
      - **Flat annual pricing** - £50/year with no per-ticket fees, no
        matter how many you sell
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets to their phone wallet
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic calendar updates
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate
        your events to feed readers
      - **[Tiered ticket types via groups](/features/groups/)** - create
        VIP, early bird, and other tiers using event groups with a shared
        capacity cap (max attendees per group)
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** -
        let attendees choose their own price
      - **[Daily/recurring events](/features/daily-events/)** - per-date
        capacity with calendar picker and holiday blackouts
      - **[Webhooks](/features/webhooks/)** - outbound POST on every
        registration for custom integrations
      - **[Public API](/features/public-api/)** - authenticated REST API
        with API keys for reading and editing event and attendee data
        (Cheddar Up has no API)
      - **[Embeddable ticket widgets](/features/embeddable-widget/)** -
        embed inline ticket sales on your own website (Cheddar Up offers
        embeddable buttons that link to their hosted page, but not inline
        checkout)
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain, not the platform's
      - **[Customisable email templates](/features/email-templates/)** -
        full control over confirmation emails with Liquid syntax for a
        fully white-label experience
      - **[Custom domain](/features/custom-domain/)** - get a nice
        yourname.tix.chobble.net subdomain instantly, or point your own
        domain - either way, not cheddarup.com
      - **No marketing to your attendees** - your audience stays yours,
        with no cross-promotion of competing events
      - **Community Interest Company** - run by a CIC, not a
        venture-backed startup

      ## Data ownership

      Cheddar Up is a proprietary, closed-source platform. Your event
      data lives on their servers, and there is no API to programmatically
      access it. Integrations are limited to what Zapier supports. The
      platform uses standard security practices and Stripe for payment
      processing, but does not offer end-to-end encryption of attendee
      data.

      With Chobble Tickets, attendee data is encrypted at rest and stays
      under your control. The entire platform is open source, so you can
      self-host it and never depend on a third party. A full REST API and
      webhooks give you programmatic access to all your data.

      ## When Cheddar Up might be the better choice

      - You want in-person point-of-sale with a card reader for door
        sales and merchandise
      - You're a US-based PTA, sports team, or nonprofit and need eCheck/ACH
        payments for lower transaction fees
      - You need recurring payment collection for tuition or membership
        dues
      - You need a native mobile app for on-site management

      ## When Chobble Tickets is the better choice

      - You need event ticketing *and* general payment collection (donations,
        fundraisers, dues, raffles) in one place
      - You want predictable, flat-rate pricing with no per-ticket fees
      - Privacy and encryption matter to you
      - You don't want a platform marketing to your attendees
      - You're a community group, charity, or school (£25/year)
      - You want [Apple/Google Wallet](/features/apple-wallet/), [calendar
        feeds](/features/rss-and-calendar-feeds/), or a [public
        API](/features/public-api/)
      - You value [open source](/features/open-source/) and the ability
        to self-host
      - You need an API or webhooks for custom integrations

  - type: markdown
    content: |
      ## Who owns Cheddar Up?

      Cheddar Up was co-founded by Nichole Montoya and Molly DiCarlo
      in Denver, Colorado. The idea started in 2012 when Montoya found
      herself raiding her daughter's piggy bank for $4 for the school's
      pyjama day. After a year of prototyping and a spot at
      [500 Startups](https://500.co/), Cheddar Up
      [launched in 2013](https://www.cheddarup.com/press/) as a way for
      groups to collect money online.

      The company has raised approximately $2.7 million from investors
      including 500 Global, Foundry, and Zillionize. It has around 26
      employees and remains a privately held company. In 2023, Cheddar Up
      was selected as one of four finalists in the Visa Everywhere
      Initiative.

      Cheddar Up primarily serves US-based community organisations -
      PTAs, sports teams, Scout troops, booster clubs, and nonprofits -
      and has expanded from pure payment collection into event ticketing,
      forms, and point-of-sale.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3,
      and the platform can be self-hosted by anyone without depending on
      Chobble as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026.
      Fees may change - check the links below for the latest figures.

      - [Cheddar Up pricing](https://www.cheddarup.com/pricing/) - Basic (free), Pro ($20/month), Team ($48/month)
      - [Cheddar Up fees explained](https://www.cheddarup.com/blog/cheddar-up-fees/) - 3.59% + $0.59 per transaction on Pro/Team, 3.95% + $0.95 on Basic
      - [Cheddar Up Team plan](https://www.cheddarup.com/team-plan/) - ticketing, Brand Kit, Report Centre, unlimited managers
      - [Cheddar Up Pro plan](https://www.cheddarup.com/pro-plan/) - eCheck, discount codes, shipping labels
      - [Cheddar Up ticketing announcement](https://www.prnewswire.com/news-releases/cheddar-up-announces-robust-ticketing-feature-that-elevates-the-organizer-and-payer-experience-301967138.html) - October 2023 launch
      - [Cheddar Up event management](https://www.cheddarup.com/event-management/) - ticketing and check-in features
      - [Cheddar Up point of sale](https://www.cheddarup.com/point-of-sale/) - card reader and Tap on Mobile
      - [Cheddar Up integrations](https://www.cheddarup.com/integrations/) - Zapier, Google Sheets, Mailchimp, and more
      - [Cheddar Up custom branding](https://www.cheddarup.com/custom-branding/) - Brand Kit details
      - [Cheddar Up on Crunchbase](https://www.crunchbase.com/organization/cheddar-up) - funding and company details
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Try Chobble Tickets
    description: Flat annual pricing, open source code, and encrypted attendee data.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
