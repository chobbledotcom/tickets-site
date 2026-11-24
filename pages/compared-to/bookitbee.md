---
competitor_key: bookitbee
title: BookitBee Alternative
meta_title: Open Source & Cheaper BookitBee Alternative | Chobble Tickets
meta_description: Compare BookitBee and Chobble Tickets on organiser and buyer fees, payment providers, ticketing features, attendee data and self-hosting.
permalink: /compared-to/bookitbee/
eleventyNavigation:
  key: vs BookitBee
  parent: Compared To
provider_facts:
  name: BookitBee
  kind: ticketing
  calculator_keys:
    - bookitbee
  last_reviewed: "2026-08-08"
  registration_country: united-kingdom
  ethical_basis:
    - certified-b-corporation
  per_ticket_platform_fee: percentage
  managed_pricing: per-sale
  white_label: included
  custom_domain: not-documented
  public_website: hosted-event-pages
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: not-documented
  attendee_cross_marketing: organiser-controlled
  established: 2013
  public_api: not-documented
  seating_plans: included
  summary: "A UK ticketing platform charging from 3.5% per paid ticket, run by LIVE IT, a Certified B Corporation."
  notes:
    registration_country: "BookitBee operates under LIVE IT Group Ltd, registered in England and Wales as company 08432364 at 7 Bell Yard, London WC2A 2JR. The BookitBee site footer names this company. Checked 8 August 2026."
    ethical_basis: "The BookitBee homepage states that BookitBee is part of LIVE IT, a Certified B Corporation. The company was co-founded by Kenton Ward and Frank Di Mauro, raised investment from several funds, and is described as an independent private company with no corporate parent."
    per_ticket_platform_fee: "BookitBee charges a percentage of the ticket price: 3.5% on the Standard plan and 6.5% on the Plus plan, with per-ticket minimum and maximum fees (the FAQ gives GBP min £0.50 and max £19.95). Payment processing transaction fees are charged separately, by Stripe, PayPal or LIVE IT Payments."
    managed_pricing: "There is no subscription. BookitBee is paid from a fee on each paid ticket, with the two plans setting different fee rates rather than different monthly prices. Free events are free."
    white_label: "The homepage describes fully customisable event pages with the organiser's logo, colours and imagery, and says 'No BookitBee branding unless you want it'."
    custom_domain: "No custom-domain option was documented in the sources reviewed."
    public_website: "BookitBee provides hosted event pages with the organiser's branding, plus registration and landing pages on the Plus plan. No organiser website or content management area is described."
    self_hosting: "BookitBee is a hosted platform. No self-hosting option is described in the sources reviewed."
    source_code: "No source code is published and no open-source claim is made in the sources reviewed."
    event_marketplace: "The BookitBee homepage and footer carry 'Looking for an event?' and 'Event listings' links, but no browsable discovery directory of other organisers' events was confirmed in the sources reviewed. Its own material describes sharing a unique event link or embedding a buy button."
    attendee_cross_marketing: "BookitBee's GDPR guide states that customers who opt in to email marketing during booking can be accessed via the organiser's Mailing lists section, so marketing to attendees is driven by the organiser. The LIVE IT privacy policy says direct marketing is consent-based and that personal details are not shared with third parties for their marketing purposes."
feature_table:
    provider_link: "https://www.bookitbee.com/features/"
    shared:
      - "Online ticket sales with Stripe payment processing"
      - "Apple Pay and Google Pay at checkout (via Stripe)"
      - "QR code scanning for check-in at the door"
      - "Email confirmations to attendees after booking"
      - "Event capacity limits"
      - "Free event support with no payment setup required"
      - "Refund processing from the admin panel"
      - "Custom questions at checkout"
      - "Multiple ticket types per event: both platforms let you create VIP, early bird, group, and standard tiers with different prices"
    provider:
      - feature: "**Social Group Deals**"
        detail: "a viral marketing mechanic where buyers share a unique link, and once enough friends purchase, the original buyer gets a free ticket. [BookitBee report](https://www.bookitbee.com/features/) this drives up to 50% of sales at some events"
      - feature: "**Reserved seating with seat map builder**"
        detail: "create interactive venue maps where attendees pick their own seats, tables, or zones, with a best-available auto-assignment option"
      - feature: "**Payment plans**"
        detail: "collect instalment payments over time for higher-priced events, with renewal tracking and failed-payment handling. Chobble Tickets takes a [deposit and the balance later](/features/deposits-and-balance-payments/), but does not split a price into a run of instalments"
      - feature: "**Renewable membership system**"
        detail: "multi-tier memberships with pro-rata mid-year additions, self-service upgrades/downgrades, cancellations, and members-only event gating. A Chobble Tickets [subscription listing](/features/purchasable-events/) charges a member again every week, month or year through Stripe, but has no tiers, pro-rata changes or members-only events"
      - feature: "**Cross-selling other events during checkout**"
        detail: "offer your other events inline during the ticket purchase flow. Chobble Tickets sells merchandise, parking and similar extras as [add-ons](/features/promo-codes-and-add-ons/), but does not offer another event at checkout"
      - feature: "**Box office POS**"
        detail: "a web-based point-of-sale app for on-the-door sales and scanning, purpose-built for their platform"
      - feature: "**11 languages and 30+ currencies**"
        detail: "built-in internationalisation for international events"
      - feature: "**PayPal and managed payments**"
        detail: "accept payments via PayPal in addition to Stripe, or use BookitBee's managed payment service (LIVE IT Payments) without setting up your own account"
      - feature: "**Invite-only events**"
        detail: "restrict bookings by email address or domain"
      - feature: "**Custom registration questions with more field types**"
        detail: "free text, date selection, and other field types beyond multiple choice (Chobble supports multiple-choice and free-text custom questions, but BookitBee may still offer more field types)"
      - feature: "**Facebook Pixel, Google Analytics, and Tag Manager**"
        detail: "built-in tracking and conversion attribution"
      - feature: "**Mailchimp and Slack integrations**"
        detail: "connect to your existing marketing and communication tools"
      - feature: "**Real-time sales dashboard**"
        detail: "live analytics showing ticket sales, revenue, and attendee demographics"
    chobble:
      - feature: "**[Encryption at rest](/features/encrypted/)**"
        provider: "Not documented"
        detail: "attendee data is encrypted at rest with hybrid RSA-OAEP + AES-256-GCM"
      - feature: "**[Promo codes, discounts, and add-ons](/features/promo-codes-and-add-ons/)**"
        detail: "create promo codes, discount codes, surcharges, and opt-in add-ons with stock limits and a live running total"
      - feature: "**[Open source](/features/open-source/)**"
        detail: "the complete product source is published under AGPL-3.0-only"
      - feature: "**Self-hosting option**"
        detail: "run the platform on selected infrastructure without a Chobble software licence fee"
      - feature: "**Flat pricing**"
        detail: "£50/year or £5/month with no per-ticket platform fee, compared to BookitBee's 3.5-6.5% per ticket"
      - feature: "**[Apple & Google Wallet tickets](/features/apple-wallet/)**"
        detail: "attendees can add tickets to their phone wallet"
      - feature: "**[ICS calendar feeds](/features/rss-and-calendar-feeds/)**"
        detail: "subscribers get automatic calendar updates"
      - feature: "**[RSS feeds](/features/rss-and-calendar-feeds/)**"
        detail: "syndicate your events to feed readers"
      - feature: "**[Tiered ticket types via groups](/features/groups/)**"
        detail: "create VIP, early bird, and other tiers using event groups with a shared capacity cap (max attendees per group)"
      - feature: "**[Pay-what-you-want pricing](/features/stripe-and-square/)**"
        detail: "let attendees choose their own price"
      - feature: "**[Daily/recurring events](/features/daily-events/)**"
        detail: "per-date capacity with calendar picker and holiday blackouts"
      - feature: "**[Public & admin API](/features/public-api/)**"
        provider: "Not documented"
        detail: "RESTful JSON API for building custom integrations, plus [authenticated admin API](/features/admin-api/) with full event CRUD and booking creation via API keys"
      - feature: "**[Webhooks](/features/webhooks/)**"
        detail: "outbound POST on every registration for custom integrations"
      - feature: "**[Event groups](/features/groups/)**"
        detail: "organise related events into collections for multi-event bookings with a single checkout"
      - feature: "**[Custom email providers](/features/email-providers/)**"
        detail: "use Resend, Postmark, SendGrid, or Mailgun so emails come from your domain"
      - feature: "**[Customisable email templates](/features/email-templates/)**"
        detail: "full control over confirmation emails with Liquid syntax for a fully white-label experience"
      - feature: "**[Custom domain](/features/custom-domain/)**"
        provider: "Not documented"
        detail: "get a yourname.tix.chobble.net subdomain instantly, or point your own domain whenever you are ready"
      - feature: "**[Public-facing website and CMS](/features/your-public-website/)**"
        detail: "a homepage, content pages, news posts, and a contact form with spam protection, edited from the admin panel in Markdown with [custom CSS](/features/customising-your-site/). BookitBee provides event pages but not a composable public website"
      - feature: "**[Embeddable widget](/features/embeddable-widget/)**"
        detail: "drop an iframe into your website"
      - feature: "**Community Interest Company**"
        detail: "run by a CIC, with profits reinvested rather than distributed to shareholders"

blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs BookitBee

      BookitBee is a UK-based ticketing platform.
  - type: markdown
    content: |
      ## Open source & cheaper BookitBee alternative

      Chobble Tickets is white label ticketing built in the UK by a
      community interest company, and its source code is published under
      the AGPL-3.0-only licence for anyone to read, fork, or run
      themselves. BookitBee is closed source and does not publish its
      code.

      BookitBee charges from 3.5% per ticket, with a £0.50 minimum and a £19.95
      cap. Chobble Tickets charges £50/year or £5/month, or £25/year or
      £2.50/month for charities, and takes no percentage of ticket sales.
  - type: markdown
    content: |
      ## Pricing comparison

      [BookitBee](https://www.bookitbee.com) charges per ticket sold,
      starting from 3.5% per ticket (up to 6.5% for higher-tier features),
      with a minimum fee of £0.50 and a cap of £19.95 per ticket. For high-volume events those fees add up quickly.

      Chobble Tickets charges a flat £50/year or £5/month (£25/year or
      £2.50/month for charities) with [no per-ticket
      fees](/features/no-per-ticket-fees/) or percentage cuts, which works out
      significantly cheaper for most event organisers.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison

      BookitBee and Chobble Tickets both handle event ticketing, but they
      focus on different things. Here is what each offers that the other
      doesn't:

  - type: include
    file: feature-table.html
  - type: markdown
    content: |
      ## When BookitBee might be better

      - You want Social Group Deals to drive viral ticket sales
      - You need reserved seating with a seat map builder
      - You need payment plans or instalment collection for expensive events
      - You want a membership system with tiers and members-only events
      - You need your other events offered to buyers during checkout
      - You want white-label branding on the booking journey
      - You need multi-language (11 languages) or multi-currency (30+)
        support
      - You want PayPal as a payment option alongside Stripe
      - You prefer a box office POS for on-the-door sales
      - You have very low volume and prefer paying per ticket over a
        flat fee
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You want predictable, flat-rate pricing with no per-ticket platform fees
      - Privacy and [encryption](/features/encrypted/) matter to you
      - You value [open source](/features/open-source/) and the ability to
        self-host
      - You're a charity, community group, artist or musician (£25/year or
        £2.50/month)
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

      BookitBee stayed independent on outside investment. Chobble Tickets
      stays independent by structure: it is a one-person
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) whose assets are locked for community benefit. AGPLv3 applies
      to all of Chobble's code: the platform can be copied and self-hosted
      by anyone who would rather not rely on Chobble.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change.

      - [BookitBee pricing](https://bookitbee.com/pricing/) - from 3.5% per ticket
      - [BookitBee features](https://www.bookitbee.com/features/)
      - [Bookitbee features](https://bookitbee.com/features/) - sharing a unique event link, with no public browse page found
      - [Chobble Tickets features](/features/)
      - [Live It Group Ltd on Companies House](https://find-and-update.company-information.service.gov.uk/company/08432364) - corporate structure
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Flat pricing with open source code and no per-ticket platform fee.
name: vs BookitBee
---
