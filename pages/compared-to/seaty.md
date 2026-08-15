---
competitor_key: seaty
title: Seaty Alternative
meta_title: Open Source & Flat Fee Seaty Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Seaty on card fees, payouts, seating plans, member tools, attendee data, hosting region and source licensing.
permalink: /compared-to/seaty/
eleventyNavigation:
  key: vs Seaty
  parent: Compared To
provider_facts:
  name: Seaty
  kind: ticketing
  calculator_keys:
    - seaty
  last_reviewed: "2026-08-14"
  registration_country: united-kingdom
  ethical_basis:
    - independently-owned
  per_ticket_platform_fee: per-transaction-percentage
  managed_pricing: per-sale
  white_label: partial
  custom_domain: not-documented
  public_website: organiser-microsite
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-found
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: none
  attendee_cross_marketing: personalised-recommendations
  established: 2014
  public_api: included
  seating_plans: included
  summary: "A UK ticketing and event-management platform for theatres, schools and societies in Birmingham, charging 7.2% on online card payments."
  notes:
    established: "Seaty Ltd, company number 08960314, was incorporated on 26 March 2014 as Daniel Haddon Limited and renamed Seaty Ltd on 8 June 2020. Checked 14 August 2026."
    registration_country: "Seaty Ltd, company number 08960314, is registered at 11 Brindley Place, Brunswick Square, Birmingham, England, B1 2LP. The privacy policy says the platform runs on Microsoft Azure in the UK South region and personal data does not leave the United Kingdom for routine processing. Checked 14 August 2026."
    ethical_basis: "Companies House records Seaty Ltd as a private limited company. No parent company, charity registration, community interest company, B Corporation certification or co-operative status is documented in the sources reviewed. The company traded as Daniel Haddon Limited before its 2020 rename to Seaty Ltd. Checked 14 August 2026."
    per_ticket_platform_fee: "Seaty charges 7.2% on online card payments processed through Seaty, with no fixed per-ticket charge and a minimum of £0.50 per order. Cash, invoice, box office and free tickets carry no fee. Connecting your own Stripe account drops the percentage to 4.5%, and Stripe processing then applies separately. Checked 14 August 2026."
    managed_pricing: "There is no subscription and no setup fee. Seaty is paid from the percentage fee on online card payments, so income rises with paid ticket volume. Free events and off-platform payments are free. Checked 14 August 2026."
    white_label: "Seaty applies the organiser's branding through checkout, emails and the mobile app, and gives each organisation a public profile page. Ticket and event pages are served from seaty.co.uk, and the terms state that sub-domains and links such as seaty.co.uk/[event-tag] are the property of Seaty."
    custom_domain: "No option to run ticket pages on an organiser's own domain was documented in the sources reviewed. Pages are served from seaty.co.uk."
    public_website: "Each organisation gets a public profile page listing its events, alongside individual event pages, all on the seaty.co.uk domain. No content management area for arbitrary pages is described."
    self_hosting: "Seaty is a fully managed platform. No self-hosting option is offered."
    source_code: "Seaty does not publish the platform's source code. A public REST API and outbound webhooks are documented, but the application itself is proprietary."
    agent_instructions: "No agent or contributor instructions for the platform were found in the sources reviewed."
    event_marketplace: "Seaty's own comparison page positions the platform as not a discovery marketplace, stating that audiences for theatres, schools and societies come to the organiser directly rather than through a global listings site. No public event directory is described in the pages reviewed."
    attendee_cross_marketing: "The privacy policy says Seaty, acting as a data controller for data obtained from use of the applications 'which could relate to organisers or consumers', uses it 'to provide you with more targeted recommendations about events we think may be of interest to you' and may 'periodically send promotional emails about new products, special offers or other information'. Card details are not stored; passwords are salted and hashed; the database runs on Azure SQL with Transparent Data Encryption."
    public_api: "A documented REST API covers events, dates, orders, attendees, venues, seating and balance payments, and Seaty sends signed (HMAC-SHA256) outbound webhooks carrying the full payload. The API is described as read-and-record rather than a full write API."
    seating_plans: "Reserved seating with seat holds is a core Seaty feature, including live seat and availability updates during booking and locked or held seats for VIPs, groups and the box office."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Seaty

      Seaty is a UK ticketing and event-management platform for theatres, schools, clubs and societies, based in Birmingham and run by Seaty Ltd. This page compares it to Chobble Tickets.
  - type: markdown
    content: |
      ## Open source & flat fee Seaty alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. Seaty does not publish its source code.

      Seaty charges 7.2% on online card payments, with card processing
      included, a £0.50 minimum per order, and no fees on cash, invoice, box
      office or free tickets. A £15 ticket processed online costs £1.08 in
      Seaty fees and nothing in Chobble platform fees. Chobble Tickets charges
      £50/year or £5/month whatever the volume, and adds no fee to any ticket,
      though the organiser pays their own Stripe, Square or SumUp processing
      separately.
  - type: markdown
    content: |
      ## Pricing comparison

      [Seaty](https://www.seaty.co.uk) has no subscription and no setup fee.
      Its income comes from a percentage charged on online card payments
      processed through Seaty: 7.2% of the order value, with a minimum of
      £0.50 per order. Card processing is included in that percentage. Cash
      payments, bank transfers, box office sales, and free tickets carry no fee
      at all.

      The fee is a percentage of each order rather than a fixed amount per
      ticket, so a customer buying four tickets in one transaction is charged
      once on the total. For each event the organiser chooses whether to
      absorb the fee into the ticket price or pass it on to the buyer at
      checkout. Connecting your own Stripe account drops the percentage to
      4.5%, and Stripe processing (1.5% + 20p in the UK) then applies
      separately.

      Chobble Tickets is a flat £50/year or £5/month, with
      [no per-ticket platform fees](/features/no-per-ticket-fees/). Charities,
      community groups, artists and musicians pay £25/year on the annual plan.
      Payment processing is charged by your own Stripe, Square, or SumUp
      account, and every current feature is included at the one price.

      Because Seaty's 7.2% includes card processing and Chobble's fee does
      not, the fair comparison is 7.2% per order against £50 a year plus your
      own Stripe processing. At £15 a ticket and Stripe's 1.5% + 20p, the two
      cross over at around 76 tickets, or about £1,150 of sales a year. Above
      that, the flat Chobble price costs less; below it, Seaty's percentage
      costs less.

      Cheaper tickets need a higher volume to reach the break-even point,
      because the per-ticket saving is smaller. Dearer tickets reach it
      sooner. Free tickets cost nothing on either platform, since Seaty only
      charges on online card payments and Chobble only charges its annual
      fee.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## When you get your money

      This is one of the larger differences between the two platforms.

      With Seaty's own payment processing, ticket income is collected by
      Seaty and held until after your event has finished. The terms say Seaty
      pays the net funds to the organiser no sooner than four days after the
      event end date, less any applicable fees, and Seaty may earn interest on
      the held funds in the meantime. Seaty may advance a portion of funds
      before that date on terms it sets.

      Connecting your own Stripe account changes the timing. Buyers pay Stripe
      directly through Stripe Connect, so funds reach your bank on Stripe's
      own payout schedule during the ticket campaign rather than after the
      event. The 4.5% Seaty fee then applies, alongside Stripe's processing.

      Chobble Tickets never holds ticket money. Buyers pay your own Stripe,
      Square, or SumUp account, so payouts follow that provider's schedule
      from the first sale onwards.
  - type: markdown
    content: |
      ## Feature comparison

      Seaty is built for theatres, schools, societies and production groups,
      and covers what happens before, during and after a sale rather than the
      sale alone. It has a broader feature set than Chobble Tickets in several
      areas that matter to that audience. Here is the breakdown:
  - type: markdown
    content: |
      ### Both platforms share some features

      - Online ticket sales with card payments
      - Stripe as a payment option, paying the organiser directly when connected
      - Free events with no payment setup required
      - Event capacity limits that mark tickets as sold out when reached
      - Multiple ticket types per event, including a mix of paid and free
      - Discount and promo codes
      - Complimentary tickets through a 100% discount
      - QR codes on every ticket, and barcode scanning for check-in
      - Email confirmations to attendees after booking
      - Refunds processed from the admin panel
      - CSV export of your sales and attendee data
      - Sales reporting by ticket type and event
      - Apple Pay and Google Pay at checkout
      - Apple Wallet and Google Wallet passes on tickets
      - A REST API for your own data, and outbound webhooks for real-time
        notifications
      - Branding on your booking pages, emails and scanning app with your
        own images and colours
      - One page per organisation listing its upcoming events
  - type: markdown
    content: |
      ### Seaty has features Chobble Tickets doesn't

      - **Reserved seating** - a seating plan tool that assigns seats to
        buyers as they buy online, holds specific seats back for VIPs, groups
        and the box office, and updates live during booking
      - **Tours and multi-venue series** - one page covering several dates
        or venues under a single tour
      - **Merchandise** - items with variations sold alongside tickets, with
        scannable vouchers for redemption
      - **Immutable order audit log** - every action on an order, from
        emails sent and opened to refunds, payments, transfers and date
        swaps, kept in a log that cannot be edited
      - **Order and ticket flags** - any ticket can be flagged for follow-up
        with its own comment thread and priority
      - **Member ticket requests and quotas** - members request tickets the
        committee approves or denies, with a running balance tracked per
        person, early access for members before the public, and reserve-before-pay
      - **Per-customer balances and statements** - part-payments recorded
        against a person, with statements emailed to anyone who owes at the
        end of a run
      - **Gift Aid** - on donations and on whole admissions, with claim
        tracking and an HMRC export
      - **Surveys, forms and questionnaires** - a standalone tool for
        post-show feedback, membership renewals, photo consent and waivers,
        with anonymous, confidential and identified modes, live results,
        and AI summaries of written answers
      - **In-person and box office sales** - card payments taken in person
        through a Stripe Terminal reader, including an unattended self-service
        kiosk where a customer buys and prints without staff
      - **Thermal ticket printing** - print on any 80mm ESC/POS printer
        through a Windows or Android print hub, with customers able to print
        their own at the venue
      - **Built-in mailshots** - email past buyers with open and click
        tracking, Facebook (Meta) Pixel and Google Ads conversion tracking,
        and Google Analytics 4
      - **Member and cast scheduling** - a rehearsal and meeting scheduler
        with member attendance tracking and QR check-in
      - **Mobile app for cast and crew** - scripts, scores and sheet music,
        rehearsal audio and video playback with cue pins, and offline access,
        shared through Dropbox
      - **Granular team roles** - permissions down to scan-only accounts and
        a record of who changed which settings
      - **Offline scanning** - ticket scanning without a network connection
      - **Equipment leasing and on-site staff** - card readers, kiosks and
        event-day staff supplied by Seaty as an additional service
  - type: markdown
    content: |
      ### Chobble Tickets has features Seaty doesn't

      - **[Open source](/features/open-source/)** - the complete product
        source is published under AGPL-3.0-only with no proprietary feature
        tier
      - **Self-hosting option** - run the platform on your own infrastructure
        without a Chobble software licence fee
      - **[Password-derived encryption](/features/encrypted/)** - attendee
        data is encrypted with a key derived from your admin password using
        hybrid RSA-OAEP + AES-256-GCM. A database dump and the server's
        environment encryption key together are still not enough to decrypt
        attendee data, since an attacker would also need your password
      - **Flat pricing** - £50/year or £5/month whatever you sell, with no
        percentage of any ticket
      - **[Your own custom domain](/features/custom-domain/)** - your ticket
        pages run on your own web address, included in the price. Seaty's
        pages are served from seaty.co.uk
      - **[Public-facing website and CMS](/features/your-public-website/)** -
        a homepage, content pages, news posts, and a contact form with spam
        protection, edited from the admin panel in Markdown with
        [custom CSS](/features/customising-your-site/)
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so confirmations come from
        your domain, not the platform's
      - **[Customisable email templates](/features/email-templates/)** - full
        control over confirmation emails with Liquid syntax for a fully
        white-label experience
      - **[Square and SumUp](/features/stripe-and-square/)** for online
        ticket checkout, alongside Stripe. Seaty accepts card payments online
        through its own gateway or your own Stripe account
      - **[Admin API](/features/admin-api/)** - authenticated API with API
        keys for full event create, edit and delete
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        attendees choose their own price above a minimum, with no cut taken
        from the extra
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit now and the balance later
      - **[SMS messages](/features/sms-messages/)** - text attendees about
        their booking
      - **[Tiered ticket types via groups](/features/groups/)** - VIP, early
        bird and other tiers with a shared capacity cap
      - **[Daily/recurring events](/features/daily-events/)** - per-date
        capacity with a calendar picker and holiday blackouts
      - **[Subscribable calendar and RSS feeds](/features/rss-and-calendar-feeds/)** -
        one feed listing all your events, so subscribers see new ones
        automatically
      - **[Complete database backups](/features/backups/)** and
        [event setup export](/features/catalogue-import-export/) you can
        move to another Chobble Tickets host
      - **Community Interest Company** - run by a CIC, a UK legal structure
        that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## Data ownership

      Seaty stores attendee and order data on Microsoft Azure in the UK
      South region, and its privacy policy says personal data does not leave
      the United Kingdom for routine processing. Card numbers never reach
      Seaty's servers; payments are processed by Stripe under PCI DSS, and
      only a Stripe payment reference is stored. Passwords are salted and
      hashed, every email-and-password sign-in is followed by a one-time
      emailed code, and the database runs on Azure SQL with Transparent Data
      Encryption at rest.

      Seaty acts as a data processor for the attendee data an event
      collects, but it is also a data controller for data it obtains from
      use of the platform. Its privacy policy says it may use that data "to
      provide you with more targeted recommendations about events we think
      may be of interest to you" and may send attendees "promotional emails
      about new products, special offers or other information". Under the
      default Seaty payment processing, ticket income is held by Seaty until
      after the event, and Seaty may earn interest on the held funds.

      The data still sits on Seaty's servers in a proprietary system you
      cannot run yourself. If Seaty stopped operating, you would depend on
      your CSV exports for the data you had already downloaded.

      With Chobble Tickets, attendee data is [encrypted at rest](/features/encrypted/)
      with a key derived from your admin password. Only your own
      administrator accounts, and the optional recovery account you can
      enable, unlock it. The platform is open source under AGPLv3, so you
      can self-host it and stop depending on Chobble as your host.

      Ticket income goes straight to your own Stripe, Square or SumUp
      account, and the database and event setup can be
      [downloaded](/features/backups/) and
      [exported](/features/catalogue-import-export/) and moved to another
      host.
  - type: markdown
    content: |
      ## When Seaty might be the better choice

      - You run a theatre, school, society or production group and want
        seating, members, schedules, balances and scanning in one platform
      - You need reserved seating with held seats for VIPs, groups or the
        box office
      - You want member ticket requests, quotas and per-customer balances
        with part-payments and statements
      - You collect Gift Aid on donations or admissions and want claim
        tracking and an HMRC export
      - You want a built-in survey, form and questionnaire tool for
        post-show feedback, consent and membership renewals
      - You need an immutable order audit log for a committee, treasurer or
        box office team
      - You want in-person box office or an unattended self-service kiosk
        on the day
      - You want card readers, kiosks or on-site staff supplied by the
        platform
      - You sell a small enough number of paid online tickets that the 7.2%
        fee costs less than the yearly Chobble Tickets price plus your own
        processing, which is under about £1,150 of online card sales a year
        at £15 a ticket
      - You want the platform to collect ticket money and pay you after the
        event rather than handling a payment account yourself
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You sell more than about £1,150 of online tickets a year at £15 a
        ticket, where the percentage fee costs more than the flat price
      - You want a price that does not change with ticket volume or value
      - You want payouts to start as tickets sell, on your payment
        provider's own schedule, rather than after the event
      - You want your ticket pages on [your own domain](/features/custom-domain/)
        and [your own website](/features/your-public-website/)
      - Encryption and [data privacy](/features/who-can-see-your-data/)
        matter to you, and you want a platform that does not market to
        attendees
      - You want to [self-host](/hosting/) the same product on infrastructure
        you control
      - You value [open source](/features/open-source/) and published source
        code
      - You want [Square or SumUp](/features/stripe-and-square/) for online
        checkout and not just Stripe
      - You want [deposits](/features/deposits-and-balance-payments/),
        [pay-what-you-want pricing](/features/stripe-and-square/), or
        [SMS messages](/features/sms-messages/)
      - You want [calendar and RSS feeds](/features/rss-and-calendar-feeds/),
        a [full admin API](/features/admin-api/), or
        [webhooks](/features/webhooks/) for real-time notifications
  - type: markdown
    content: |
      ## Who owns Seaty?

      Seaty Ltd is a private limited company registered in England and
      Wales, company number 08960314, based at 11 Brindley Place, Brunswick
      Square, Birmingham. The company was incorporated on 26 March 2014 as
      Daniel Haddon Limited and renamed Seaty Ltd on 8 June 2020. It is
      registered with the
      [Information Commissioner's Office](https://ico.org.uk/ESDWebPages/Entry/ZA543843)
      under reference ZA543843. No ownership structure, investor backing, charity
      registration, B Corporation certification or co-operative status is
      described in the sources reviewed.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on
      Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was checked on 14 August 2026
      against the live Seaty fees page and its published terms. Fees may
      change. Check the links below for the latest figures.

      - [Seaty fees and pricing](https://www.seaty.co.uk/Docs/Fees) - 7.2% on online card payments, £0.50 minimum, no fees on cash, box office or free tickets, no subscription or setup cost
      - [How Seaty compares](https://www.seaty.co.uk/Compare) - 4.5% when you connect your own Stripe, feature comparison against Eventbrite and TicketSource
      - [Seaty terms of service](https://www.seaty.co.uk/Docs/TermsOfService) - Seaty as commercial agent, funds held until after the event, payout no sooner than four days after the event end date, Stripe Connect alternative, service fees non-refundable
      - [Seaty privacy policy](https://www.seaty.co.uk/Docs/Privacy) - Azure UK South hosting, ICO reference ZA543843, data controller and processor roles, promotional emails and event recommendations, card data handled by Stripe, Transparent Data Encryption
      - [Seaty developer API](https://www.seaty.co.uk/Docs/DeveloperApi) - REST API and signed webhooks
      - [Companies House: Seaty Ltd](https://find-and-update.company-information.service.gov.uk/company/08960314) - company number 08960314, incorporated 26 March 2014, formerly Daniel Haddon Limited
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
name: Open Source & Flat Fee Seaty Alternative | Chobble Tickets
---
