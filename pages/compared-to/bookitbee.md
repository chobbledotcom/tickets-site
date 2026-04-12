---
layout: design-system-base.html
competitor_key: bookitbee
title: Chobble Tickets vs BookitBee
meta_title: No-Fee Alternative to BookitBee | Chobble Tickets
meta_description: Looking for a no-fee alternative to BookitBee? Chobble Tickets charges a flat annual fee with no per-ticket costs, and it's fully open source.
permalink: /compared-to/bookitbee/
eleventyNavigation:
  key: vs BookitBee
  parent: Compared To
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: Chobble Tickets vs BookitBee
    lead: >-
      BookitBee is a UK-based ticketing platform - here's how it compares to
      Chobble Tickets.

  - type: markdown
    content: |
      ## Pricing comparison

      [BookitBee](https://www.bookitbee.com) charges per ticket sold - starting from 3.5% per ticket
      (up to 6.5% for advanced features), with a minimum fee of £1 and a cap
      of £19.95 per ticket. For high-volume events those fees add up quickly.

      Chobble Tickets charges a flat £50/year (£25 for charities) with no
      per-ticket fees or percentage cuts, which works out significantly
      cheaper for most event organisers.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Feature comparison

      BookitBee and Chobble Tickets both handle event ticketing, but they
      focus on different things. Here's what each offers that the other
      doesn't:

      **Both sites share some features:**

      - Online ticket sales with Stripe payment processing
      - Apple Pay and Google Pay at checkout (via Stripe)
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Capacity management to prevent overselling
      - Free event support with no payment setup required
      - Refund processing from the admin panel
      - Custom questions at checkout
      - Multiple ticket types per event - both platforms let you create
        VIP, early bird, group, and standard tiers with different prices

      **[BookitBee](https://www.bookitbee.com/features/) has features
      Chobble Tickets doesn't:**

      - **Social Group Deals** - a viral marketing mechanic where buyers
        share a unique link, and once enough friends purchase, the original
        buyer gets a free ticket.
        [BookitBee report](https://www.bookitbee.com/features/) this
        drives up to 50% of sales at some events
      - **Reserved seating with seat map builder** - create interactive
        venue maps where attendees pick their own seats, tables, or zones,
        with a best-available auto-assignment option
      - **Payment plans and deposits** - collect instalment payments over
        time for higher-priced events, with renewal tracking and
        failed-payment handling
      - **Renewable membership system** - multi-tier memberships with
        pro-rata mid-year additions, self-service upgrades/downgrades,
        cancellations, and members-only event gating
      - **Promo codes and discounts** - create percentage-off discount
        codes, promotional offers, and campaign-specific URLs with sales
        tracking
      - **Cross-selling during checkout** - upsell merchandise, parking
        passes, drinks tokens, and other events inline during the ticket
        purchase flow
      - **Box office POS** - a web-based point-of-sale app for on-the-door
        sales and scanning, purpose-built for their platform
      - **11 languages and 30+ currencies** - built-in internationalisation
        for international events
      - **White-label branding** - fully customisable booking journeys
        branded to the organiser, not BookitBee
      - **PayPal and managed payments** - accept payments via PayPal in
        addition to Stripe, or use BookitBee's managed payment service
        (LIVE IT Payments) without setting up your own account
      - **Invite-only events** - restrict bookings by email address or
        domain
      - **Custom registration questions with free-text fields** - free
        text, date selection, and other field types beyond multiple choice
        (Chobble supports multiple-choice custom questions)
      - **Facebook Pixel, Google Analytics, and Tag Manager** - built-in
        tracking and conversion attribution
      - **Mailchimp and Slack integrations** - connect to your existing
        marketing and communication tools
      - **Real-time sales dashboard** - live analytics showing ticket
        sales, revenue, and attendee demographics

      **Chobble Tickets has features BookitBee doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** - attendee data is
        encrypted at rest with hybrid RSA-OAEP + AES-256-GCM
      - **[Open source](/features/open-source/)** - every line of code is
        public under AGPLv3
      - **Self-hosting option** - run the platform on your own servers for
        free
      - **Flat annual pricing** - £50/year with no per-ticket fees at all,
        compared to BookitBee's 3.5-6.5% per ticket
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets to their phone wallet
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic calendar updates
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate your
        events to feed readers
      - **[Tiered ticket types via groups](/features/groups/)** - create
        VIP, early bird, and other tiers using event groups with a shared
        capacity cap (max attendees per group)
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        attendees choose their own price
      - **[Daily/recurring events](/features/daily-events/)** - per-date
        capacity with calendar picker and holiday blackouts
      - **[Custom questions](/features/custom-questions/)** - add
        multiple-choice questions to events and collect structured answers
        at checkout, with answers visible across the admin interface, CSV
        exports, and webhooks
      - **[Public & admin API](/features/public-api/)** - RESTful JSON API
        for building custom integrations, plus [authenticated admin
        API](/features/admin-api/) with full event CRUD via API keys
      - **[Webhooks](/features/webhooks/)** - outbound POST on every
        registration for custom integrations
      - **[Event groups](/features/groups/)** - organise related events
        into collections for multi-event bookings with a single checkout
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so emails come from your
        domain
      - **[Customisable email templates](/features/email-templates/)** -
        full control over confirmation emails with Liquid syntax for a
        fully white-label experience
      - **[Custom domain](/features/custom-domain/)** - get a nice
        yourname.tix.chobble.net subdomain instantly, or point your own
        domain whenever you're ready
      - **[Embeddable widget](/features/embeddable-widget/)** - drop an
        iframe into your website
      - **No marketing to your attendees** - your audience stays yours
      - **Community Interest Company** - run by a CIC, not a for-profit

      ## When BookitBee might be better

      - You want Social Group Deals to drive viral ticket sales
      - You need reserved seating with a seat map builder
      - You need payment plans or instalment collection for expensive events
      - You want a membership system with tiered subscriptions
      - You need cross-selling of merchandise and extras during checkout
      - You want white-label branding on the booking journey
      - You need multi-language (11 languages) or multi-currency (30+)
        support
      - You want PayPal as a payment option alongside Stripe
      - You prefer a box office POS for on-the-door sales
      - You have very low volume and prefer paying per ticket over an annual
        fee

      ## When Chobble Tickets is the better choice

      - You want predictable, flat-rate pricing with no per-ticket fees
      - Privacy and [encryption](/features/encrypted/) matter to you
      - You value [open source](/features/open-source/) and the ability to
        self-host
      - You're a community group, charity, or school (£25/year)
      - You want [Apple/Google Wallet](/features/apple-wallet/), [calendar
        feeds](/features/rss-and-calendar-feeds/), or a [public
        API](/features/public-api/)
      - You don't want a platform marketing to your attendees
      - You're selling enough tickets that percentage fees add up quickly

  - type: markdown
    content: |
      ## Who owns BookitBee?

      BookitBee operates under the legal name Live It Group Ltd
      ([Companies House #08432364](https://find-and-update.company-information.service.gov.uk/company/08432364)),
      incorporated in 2013 and renamed from Bookitbee Limited in 2017. It
      was co-founded by Kenton Ward and Frank Di Mauro, who met at boarding
      school. Di Mauro resigned as a director in March 2024. The company
      has received investment from Foresight Group, Jenson Funding Partners,
      ARC InterCapital, and Scottish Enterprise, totalling approximately
      $5.3 million, but remains an independent private company with no
      corporate parent. It has a small team of around 8–15 employees.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on Chobble
      as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change - check the links below for the latest figures.

      - [BookitBee pricing](https://bookitbee.com/pricing/) - from 3.5% per ticket
      - [BookitBee features](https://www.bookitbee.com/features/)
      - [Chobble Tickets features](/features/)
      - [Live It Group Ltd on Companies House](https://find-and-update.company-information.service.gov.uk/company/08432364) - corporate structure

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing with open source code and no lock-in.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
