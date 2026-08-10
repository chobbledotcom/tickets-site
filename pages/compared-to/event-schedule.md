---
competitor_key: eventschedule
title: Event Schedule Alternative
meta_title: UK Made & Encrypted Event Schedule Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Event Schedule, two open source ticketing platforms, on price tiers, self-hosting, licences, encryption, features and data handling.
permalink: /compared-to/event-schedule/
eleventyNavigation:
  key: vs Event Schedule
  parent: Compared To
provider_facts:
  name: Event Schedule
  kind: ticketing
  calculator_keys:
    - eventschedule
  last_reviewed: "2026-08-10"
  registration_country: not-documented
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: none
  managed_pricing: ticket-volume-tiered
  white_label: higher-tier
  custom_domain: higher-tier
  public_website: marketplace-pages
  self_hosting: same-product
  source_code: open-source
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: built-in
  attendee_cross_marketing: not-documented
  notes:
    registration_country: "Event Schedule's privacy policy names the operator as Event Schedule LLC but states no country or registered address. It is made by the team behind Invoice Ninja, whose company Invoice Ninja LLC is registered in Fort Myers, Florida in the United States and which was founded and is partly based in Haifa, Israel. Event Schedule's own registering jurisdiction is not documented. Reviewed 10 August 2026."
    ethical_basis: "The reviewed sources did not describe a company registration, funding or ownership structure for Event Schedule. Its code is published on GitHub by the makers of the Invoice Ninja billing software, which does not by itself establish an independent or community governance model."
    per_ticket_platform_fee: "Event Schedule states it charges no fee on ticket sales. Payment processing is charged separately by the organiser's own Stripe account."
    managed_pricing: "Event Schedule has three plans. The free plan is capped at 25 paid tickets a month, so selling more forces an upgrade to a paid plan on ticket volume alone. Above that cap the paid plans are a flat price that does not change with volume: Pro at US$5/month or US$50/year and Enterprise at US$15/month or US$150/year, differing by features."
    white_label: "Removing Event Schedule branding requires the Pro plan or above; the free plan carries Event Schedule branding."
    custom_domain: "A custom domain requires the Enterprise plan. Self-hosted deployments can use their own domain."
    public_website: "Each organiser gets a hosted calendar page with a custom URL, and events also appear in Event Schedule's public event-discovery area."
    self_hosting: "Event Schedule is open source and can be self-hosted with Docker, a one-click installer or a manual install. The self-hosted software is the same product as the hosted service."
    source_code: "Event Schedule is published under the Attribution Assurance License, a permissive licence that requires attribution but does not require sharing modifications. Reviewed 10 August 2026."
    event_marketplace: "Event Schedule runs a public event-discovery area where communities can browse events, described on its site as a way to grow an audience."
    attendee_cross_marketing: "The reviewed sources did not state whether Event Schedule markets to ticket buyers. Its newsletter tools are organiser-run campaigns to the organiser's own subscribers."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Event Schedule

      Event Schedule is another open source ticketing platform with a flat subscription and no per-ticket fee, so this compares two projects with a similar model but different tiers, licences and data handling.
  - type: markdown
    content: |
      ## UK made & encrypted Event Schedule alternative

      Chobble Tickets and Event Schedule share more than most pairs on this
      site. Both publish their source code, both can be self-hosted, both
      charge a flat subscription rather than a cut of each ticket, and both
      send ticket money to the organiser's own Stripe account.

      The differences are in how the price is packaged and what happens to
      attendee data. Chobble Tickets sells one plan with every feature
      included, encrypts attendee data at rest, and is run by a UK community
      interest company. Event Schedule splits its features across a free plan,
      a Pro plan and an Enterprise plan, and lists events in a public
      discovery area.
  - type: markdown
    content: |
      ## Two open source options

      [Event Schedule](https://eventschedule.com) is a source-published
      platform for event calendars, ticketing and appointment booking. It can
      be run as a hosted service on eventschedule.com or self-hosted on your
      own server, and both are the same product.

      This page compares the two platforms to help you decide which fits your
      needs. Other open source comparisons cover
      [Hi.Events](/compared-to/hi-events/),
      [Pretix](/compared-to/pretix/) and
      [Swicket with alf.io](/compared-to/swicket/). The
      [open source page](/features/open-source/) describes Chobble Tickets
      without a competitor comparison.
  - type: markdown
    content: |
      ## Pricing comparison

      Both platforms charge a flat fee and take no cut of ticket sales. They
      package that fee differently.

      **Event Schedule** has three plans, priced in US dollars. The free plan
      sells up to 25 paid tickets a month and carries Event Schedule branding.
      Pro costs US$5/month or US$50/year (about £40/year) and adds unlimited
      ticket sales, branding removal, an API and webhooks, custom fields and
      custom CSS.

      Enterprise costs US$15/month or US$150/year (about £120/year) and adds
      custom domains, extra team members, password-protected events and AI
      content tools. Ticket income goes to the organiser's own Stripe account,
      with Stripe processing charged separately (Event Schedule quotes US
      Stripe at 2.9% + US$0.30).

      **Chobble Tickets** charges a flat £50/year or £5/month, with
      [no per-ticket platform fees](/features/no-per-ticket-fees/) and every
      feature included in the one price. Charities, community groups, artists
      and musicians pay £25/year on the annual plan. Payment processing is
      charged by your own Stripe, Square or SumUp account (1.5% + 20p on a UK
      Stripe account).

      For an organiser paying in pounds, the headline Pro price is close to
      Chobble's, and Event Schedule's free plan is cheaper for anyone selling
      fewer than 25 paid tickets a month. The difference is what each price
      buys: Chobble's single plan includes a custom domain, white labelling
      and the API, while Event Schedule spreads those across Pro and
      Enterprise.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## One price or three tiers

      The clearest split between the two is how features are sold.

      Chobble Tickets has one plan. A custom domain, white labelling, the
      admin and public APIs, bulk email, deposits and every other feature come
      with it, and the price does not change with ticket volume, ticket value
      or how many features you use.

      Event Schedule spreads its features across three tiers. Removing its
      branding needs the Pro plan, and a custom domain and extra team members
      need the Enterprise plan.

      On Event Schedule's hosted service, an organiser who wants their own
      domain pays the US$150/year Enterprise rate, where the same domain is
      included in Chobble's £50/year plan. A self-hosted Event Schedule
      deployment can use its own domain without that fee.
  - type: markdown
    content: |
      ## Feature comparison

      Both platforms cover the core of selling tickets and checking people in,
      and each has areas the other does not.
  - type: markdown
    content: |
      ### Both platforms share some features

      - Open source code that anyone can read, fork or self-host
      - Self-hosting the same product as the hosted service, with no software
        licence fee
      - A flat subscription with no per-ticket platform fee
      - Ticket income paid to the organiser's own Stripe account
      - QR-coded tickets and door check-in by scanning
      - Recurring events
      - Custom domains (included with Chobble; Enterprise plan on Event
        Schedule)
      - White labelling to remove platform branding (included with Chobble;
        Pro plan on Event Schedule)
      - An API and webhooks for custom integrations
      - Embedding events or a calendar on your own website
      - Email newsletters and campaigns to your own subscribers
      - Custom fields and custom CSS
      - A record of tickets sold for each event
  - type: markdown
    content: |
      ### Event Schedule has features Chobble Tickets doesn't

      - **Free plan** - sell up to 25 paid tickets a month at no cost, with
        Event Schedule branding
      - **Appointment booking** - guests pick an available time slot in their
        own timezone, in the style of a booking calendar (Chobble Tickets sells
        tickets to events rather than appointment slots)
      - **AI content tools** - parse event details from text or a flyer,
        generate graphics, create a brand style, and translate content into
        several languages
      - **Page-view analytics** - views, device breakdown and traffic sources
        for event pages
      - **Two-way Google Calendar sync and CalDAV** - events sync both ways
        with an external calendar (Chobble Tickets offers subscribe-only
        [calendar and RSS feeds](/features/rss-and-calendar-feeds/))
      - **Public event-discovery area** - events can appear in a browsable
        directory, which can bring an organiser new attendees
      - **Newsletter A/B testing** - test two versions of a campaign email
      - **Invoice Ninja integration** - collect payment through Invoice Ninja
        as well as Stripe
      - **Passes and subscriptions** - sell recurring passes on the Pro plan
      - **Multi-language content** - built-in translation of event content
  - type: markdown
    content: |
      ### Chobble Tickets features not documented on Event Schedule

      Chobble Tickets provides the following. Event Schedule's reviewed pages
      document some of these differently and do not mention others, so a missing
      entry means an absence of documentation rather than a confirmed
      limitation.

      - **All features in one plan** - a custom domain, white labelling, the
        API and team access are included, not split across paid tiers
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        stored encrypted, and only the keys held by your own administrator
        accounts unlock it. Event Schedule does not document encrypting
        attendee data at rest
      - **[Stripe, Square and SumUp](/features/stripe-and-square/)** card
        checkout. Event Schedule takes payment through Stripe or Invoice Ninja
      - **[Apple Wallet and Google Wallet passes](/features/apple-wallet/)** -
        attendees can add tickets to a phone's wallet. Event Schedule does not
        document wallet passes
      - **[SMS messages](/features/sms-messages/)** - text attendees about
        their booking
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit now and the balance later
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        buyers enter their own price above a minimum
      - **[Packages](/features/packages/)** - bundle several listings into one
        purchase
      - **[Price-linked custom questions](/features/custom-questions/)** and
        [surcharges](/features/promo-codes-and-add-ons/) - change a price by
        the answer to a question, or for a returning customer
      - **[Public-facing website and CMS](/features/your-public-website/)** -
        a homepage, content pages, news posts and a contact form, edited from
        the admin panel. Event Schedule provides calendar and event pages but
        not a full composable website
      - **[CSV export](/features/csv-export/)** of sales and attendee data,
        [complete database backups](/features/backups/) and
        [event setup export](/features/catalogue-import-export/) you can move
        to another Chobble Tickets host
      - **[Custom email providers](/features/email-providers/)** and
        [Liquid email templates](/features/email-templates/) - confirmation
        emails come from your domain with the wording you choose
      - **Community Interest Company** - run by a CIC, a UK legal structure
        that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## Different open source licences

      Both platforms publish their source code, but under different licences,
      and the difference matters to anyone who wants to build on the code.

      Event Schedule uses the
      [Attribution Assurance License](https://opensource.org/license/attribution-php),
      a permissive licence. Anyone can take the code, change it, and run or
      sell the result without publishing their changes, as long as they keep
      the required attribution to Event Schedule.

      Chobble Tickets uses [AGPL-3.0-only](/features/open-source/), a copyleft
      licence. Anyone who offers a modified version to users over a network must
      offer those users its source under the same licence. This keeps
      improvements to a hosted service available to the people who use it, where
      the permissive licence lets a company keep its changes private.

      For an organiser who only wants to run the software, both licences allow
      self-hosting at no software cost. The difference shows up when someone
      modifies the code and offers it to others.
  - type: markdown
    content: |
      ## Data ownership

      With Chobble Tickets, attendee data is encrypted at rest. Only the keys
      held by your own administrator accounts, and the optional recovery
      account you can enable, unlock it. Ticket money goes straight to your own
      Stripe, Square or SumUp account, and you can download a
      [complete database backup](/features/backups/) or
      [export your event setup](/features/catalogue-import-export/) as
      versioned JSON and move it to another Chobble Tickets host. Chobble runs
      [no public marketplace](/features/no-spying/) and does not market to your
      attendees.

      Event Schedule sends ticket money to the organiser's own Stripe account
      and can be self-hosted, so an organiser who runs their own copy holds the
      data on their own server. On the hosted service, events can appear in
      Event Schedule's public discovery area, which lists events for community
      members to browse. The reviewed sources did not document encryption of
      attendee data at rest, and did not state whether the hosted service
      markets to ticket buyers.
  - type: markdown
    content: |
      ## When Event Schedule might be the better choice

      - You sell fewer than about 25 paid tickets a month and want a free plan
      - You need appointment booking with time slots, not just event tickets
      - You want built-in AI tools for parsing events, making graphics or
        translating content
      - You want two-way Google Calendar or CalDAV sync
      - You want your events listed in a public discovery area to reach new
        attendees
      - You want to keep changes to the source code private, which the
        permissive licence allows
      - You already use Invoice Ninja and want to collect payment through it
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You want every feature in one price, including a
        [custom domain](/features/custom-domain/),
        [white labelling](/features/white-labelling/) and the
        [API](/features/admin-api/), rather than split across paid tiers
      - You want attendee data [encrypted at rest](/features/encrypted/)
      - You want card checkout through
        [Stripe, Square or SumUp](/features/stripe-and-square/)
      - You want [Apple and Google Wallet passes](/features/apple-wallet/),
        [SMS messages](/features/sms-messages/),
        [deposits](/features/deposits-and-balance-payments/) or
        pay-what-you-want pricing
      - You want a [full public website and CMS](/features/your-public-website/),
        not only calendar and event pages
      - You want [CSV exports](/features/csv-export/),
        [database backups](/features/backups/) and portable event setup so
        your data is not locked in
      - You want a copyleft licence that keeps improvements to a hosted product
        open
      - You are a charity, community group, artist or musician (£25/year on the
        annual plan)
  - type: markdown
    content: |
      ## Who runs Event Schedule?

      Event Schedule is an open source project made by the team behind Invoice
      Ninja, the billing software that is also one of its two payment options.
      Its privacy policy names the operator as Event Schedule LLC and states no
      country. Invoice Ninja is run as Invoice Ninja LLC, registered in Fort
      Myers, Florida in the United States, and was founded and is partly based
      in Haifa, Israel.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) registered in England, a UK legal structure that locks the
      company's assets for community benefit. All of Chobble's code is public
      under
      [AGPL-3.0-only](/features/open-source/), and the platform can be
      self-hosted by anyone without depending on Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing and product information on this page was checked on 10 August
      2026 against the live Event Schedule site and its GitHub repository. Fees
      and features may change. Check the links below for the latest figures.

      - [Event Schedule pricing](https://eventschedule.com/pricing) - free, Pro (US$5/month or US$50/year) and Enterprise (US$15/month or US$150/year) plans, no fee on ticket sales, features split across tiers
      - [Event Schedule homepage](https://eventschedule.com) - open source, self-hosting, ticketing, appointments, event discovery
      - [Event Schedule on GitHub](https://github.com/eventschedule/eventschedule) - source code, Attribution Assurance License, Docker and manual install
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

      Sign up for managed hosting at £50/year or £5/month, or self-host the same product without paying Chobble a licence fee.
name: UK Made & Encrypted Event Schedule Alternative | Chobble Tickets
---
