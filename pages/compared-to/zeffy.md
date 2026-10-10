---
competitor_key: zeffy
title: Zeffy Alternative
meta_title: Open Source & Self-Hosted Zeffy Alternative | Chobble Tickets
meta_description: Compare Zeffy and Chobble Tickets on donor tips, payouts, payment processing, ticketing features, eligibility, integrations and attendee data.
permalink: /compared-to/zeffy/
eleventyNavigation:
  key: vs Zeffy
  parent: Compared To
provider_facts:
  name: Zeffy
  kind: ticketing
  calculator_keys:
    - zeffy
  last_reviewed: "2026-10-10"
  registration_country: canada
  ethical_basis:
    - certified-b-corporation
  per_ticket_platform_fee: voluntary-contributions
  managed_pricing: no-mandatory-price
  white_label: partial
  custom_domain: not-offered
  public_website: hosted-event-pages
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: none
  attendee_cross_marketing: provider-content-and-events
  established: not-documented
  public_api: read-only
  seating_plans: not-offered
  summary: "A Montreal fundraising platform for registered nonprofits where every tool is free and donors are asked for optional tips at checkout."
  notes:
    established: "Third-party sources disagree: CB Insights dates the founding to 2016, several directories to 2017, and Stripe's customer story to 2018. The company began as Simplyk and rebranded to Zeffy in April 2022."
    registration_country: "The privacy policy names 9355-0861 Québec Inc., d.b.a. Zeffy, a Quebec corporation with an office at 917 Mont-Royal Avenue East, Montreal. The site footer shows a copyright for Zeffy, Inc."
    per_ticket_platform_fee: "Zeffy asks donors for an optional contribution at checkout, shown twice and adjustable to zero, with around 60% of donors leaving one. The wording and suggested amounts cannot be customised, and a contribution is not refunded when the underlying payment is."
    managed_pricing: "There is no subscription and no mandatory charge for organisations. Optional donor contributions are Zeffy's only revenue, and its documentation describes reaching out, with a possible temporary card payment limit, when large card volumes attract few contributions."
    white_label: "Forms take the organisation's colours, images, and logo, but pages run on zeffy.com addresses, the contribution request appears twice on every form with fixed wording, and Zeffy branding appears in emails and tickets."
    custom_domain: "Campaign URLs are generated from the form name on www.zeffy.com and cannot be edited after creation. The CRM email tool can connect a custom domain for sending email, which is not form hosting."
    public_website: "Each campaign is a hosted page on zeffy.com with the organiser's description, colours, and images. No content website or CMS is described."
    event_marketplace: "No browsable directory of other organisations' events appears in the reviewed product documentation. Campaigns are shared by link, QR code, or embed. Checked 10 October 2026."
    attendee_cross_marketing: "The privacy policy describes retargeting ads for Zeffy through Google Ads and Facebook Custom Audience using email addresses submitted on forms, with an opt out. No marketing of other organisations' events to attendees was described."
    public_api: "The API gives read access to payments, contacts, and campaigns, and webhooks send payment.completed events. Only the organisation's admin can generate keys, and the documentation lists no write endpoints."
    seating_plans: "No seat-map feature is described. The help centre documents a workaround using a chart image, per-row ticket rates, and single-select custom questions limited to one seat each."
    ethical_basis: "Zeffy is a certified B Corporation, announced on its blog and stated on its about page."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Zeffy

      Zeffy is a Canadian fundraising platform for registered nonprofits. It charges nothing for its tools and asks donors for an optional contribution to Zeffy at checkout. Here is how Chobble Tickets compares.
  - type: markdown
    content: |
      ## Open source & self-hosted Zeffy alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. Zeffy does not publish its source code.

      Zeffy is free for organisations. Donors see a request for an optional
      contribution to Zeffy on every form. That contribution is Zeffy's only
      income, and it pays for card processing on every organisation using the
      platform, including those whose donors do not tip. Chobble Tickets
      charges organisers £50/year or £5/month and takes no per-ticket fee.

      Both platforms sell tickets, scan QR codes at the door, and take no cut
      of ticket income. They differ in who can sign up, how money reaches the
      organiser, and how much of the checkout carries the provider's own
      branding.
  - type: markdown
    content: |
      ## Pricing comparison

      [Zeffy](https://www.zeffy.com) has no subscription and no fee on tickets
      sold. It covers card processing on every payment. Its only revenue is the
      optional contribution asked at checkout: the wording and suggested
      amounts cannot be customised, the suggested percentage falls as the
      payment grows, and around 60% of donors leave something. A contribution
      is not refunded when the underlying payment is refunded.

      Zeffy's documentation describes one safeguard on this model. If an
      organisation raises large amounts by card with few or no contributions,
      Zeffy says it would reach out and could agree a temporary limit on card
      payments while other payment methods stay open.

      Chobble Tickets is a flat £50/year or £5/month, or £25/year for
      charities, community groups, artists and musicians on the annual plan.
      There are [no per-ticket platform fees](/features/no-per-ticket-fees/)
      and no feature tiers. You pay Stripe, Square, or SumUp processing
      separately, and ticket income goes straight to your own payment account.

      Managed hosting is [prepaid](/features/prepay-hosting/), not a
      subscription. Chobble stores no card details for automatic renewal. If a
      prepaid term ends without renewal, the site enters read-only mode for 24
      months: the organiser keeps full read access and can export everything,
      payments can restart at any time, and nothing is owed for the read-only
      months.

      At the calculator's default of 200 tickets at £10, Chobble Tickets costs
      £50 plus about £70 of processing at Stripe's UK rate, £120 in total.
      Zeffy costs nothing beyond the tips some donors choose to leave.

      Zeffy is free, so it costs less than Chobble Tickets at every volume. The
      calculator shows what Chobble Tickets costs after processing, which is
      the part Zeffy asks donors to cover instead.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison

      Zeffy is an all-in-one fundraising platform for nonprofits: donations,
      events, memberships, auctions, raffles, an online store, and a donor CRM.
      Chobble Tickets is a purpose-built ticketing and hire platform for any
      organiser. Here is the breakdown:
  - type: markdown
    content: |
      ### Both platforms offer

      - Online ticket sales with multiple ticket rates and prices
      - Free tickets alongside paid ones
      - Capacity limits on ticket sales
      - Events that run across several dates, with per-date lists or capacity
      - Custom questions on the booking form
      - Discount codes
      - Automatic sales cut-offs that close booking when a deadline passes
      - Pay-what-you-want pricing
      - E-tickets with QR code check-in by phone
      - Confirmation emails to buyers
      - Recording offline payments such as cash or bank transfers
      - Attendance and sales reports as downloads
      - Refunds and cancellations managed by the organiser
      - Multiple team members with different permissions
      - Forms that can be embedded on another website
      - Data exports as spreadsheets
  - type: markdown
    content: |
      ### Zeffy has features Chobble Tickets doesn't

      - **Raffles** - prize pools, ticket bundles, numbered tickets, and a
        winner draw from the entrant list
      - **Auctions** - item listings with images, outbid alerts, and automatic
        payment collection from winners
      - **Memberships** - tiered memberships with renewal options and
        personalised membership cards by email
      - **Peer-to-peer campaigns** - supporters fundraise for your cause with
        leaderboards, built for a-thons
      - **Online store** - merchandise with photos, variants, discounts, and
        stock tracking
      - **Donor CRM** - contact profiles with giving history, attendance, and
        email engagement, with segments and saved lists
      - **Email campaigns and newsletters** - send to your contacts and track
        opens, clicks, and unsubscribes, plus printed letters through Donor
        Mail and a custom domain for the sending address
      - **Automated reminder emails** - schedule a reminder to attendees with
        the details they need on the day
      - **Scheduled ticket rates** - give each rate its own start and end sale
        dates for early bird windows and timed releases
      - **Ticket bundles** - combine several tickets into one purchase
      - **Tax receipts and Gift Aid** - automatic tax receipts in the US and
        Canada with eligible amounts configurable per ticket rate, and Gift
        Aid claims through a Swiftaid connection in the UK
      - **Recurring donations** - monthly giving plans that donors manage in
        their own Zeffy account
      - **AI grant finder** - a free tool on Zeffy's website that searches
        thousands of grants for your nonprofit
      - **Tap to Pay app** - take in-person card payments through an iPhone or
        Android phone, with no card reader hardware and no fees. It runs in
        the US, Canada, the UK, Ireland, and Germany, and does not support
        tablets, auction forms, recurring donations, or membership forms
      - **QuickBooks sync** - one-way sync of payouts into QuickBooks Online,
        broken down by campaign
      - **Zapier and viaSocket** - no-code automations, with viaSocket
        connecting Zeffy data to more than 2,300 apps
      - **AI assistants** - read-only Claude and ChatGPT connectors that
        answer questions about your fundraising data
      - **Translated forms** - Spanish in the US and French in Canada
      - **WordPress plugin and tracking** - a donate button plugin, campaign
        embeds, Google Analytics for US accounts, and Meta Pixel
  - type: markdown
    content: |
      ### Chobble Tickets has features Zeffy doesn't

      - **[Open source](/features/open-source/)** - the complete product source
        is published under AGPL-3.0-only with no proprietary feature tier
      - **Self-hosting** - run the same product on your own servers without a
        Chobble software charge
      - **[Custom domain](/features/custom-domain/)** - a
        yourname.tix.chobble.net address instantly, or point your own domain
        at it. Zeffy forms live on zeffy.com addresses generated from the form
        name, which cannot be changed after creation
      - **[Public-facing website and CMS](/features/your-public-website/)** -
        a homepage, content pages, news posts, and a contact form with spam
        protection, edited in Markdown
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        stored with hybrid RSA-OAEP + AES-256-GCM encryption rather than plain
        database rows
      - **Direct payments** - ticket income goes straight into your own
        Stripe, Square, or SumUp account, with no payout schedule and no
        platform holding the money first
      - **[A checkout with no provider branding](/features/white-labelling/)** -
        no contribution request, no powered-by line, and no provider emails
        about the platform. On Zeffy the contribution request appears twice on
        every form with wording you cannot change
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit or set a £0 reservation, then collect the balance by
        link, cash, or bank transfer
      - **[Daily and multi-day events](/features/daily-events/)** - per-date
        capacity with a calendar picker and holiday blackouts
      - **[Groups and tiered tickets](/features/groups/)** - VIP, early bird,
        and other tiers through event groups with a shared capacity cap
      - **[Packages and required choices](/features/packages/)** - sell several
        listings as one package, or require a choice such as a room, meal, or
        materials kit
      - **[Payment-confirmed capacity](/features/overbooking-prevention/)** - a
        place is used only when payment confirmation arrives, and if confirmed
        payments race for the last place, the later order is refunded
        automatically
      - **[Promo codes, discounts, and add-ons](/features/promo-codes-and-add-ons/)** -
        surcharges and opt-in add-ons with stock limits
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets to their phone wallet
      - **[ICS calendar and RSS feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic calendar updates, and events syndicate to
        feed readers
      - **[Write-capable APIs](/features/admin-api/)** - a public API for
        listings and availability plus an authenticated admin API that can
        change data, and [webhooks](/features/webhooks/) on every
        registration. Zeffy's API and webhooks are read-only
      - **[Custom email providers](/features/email-providers/)** - send
        confirmations from your own domain through Resend, Postmark, SendGrid,
        or Mailgun, with [editable templates](/features/email-templates/)
      - **[Purchasable events and sign-up forms](/features/purchasable-events/)** -
        donations, dues, and volunteer sheets without an event to attend
      - **No advertising to your attendees** - Zeffy's privacy policy describes
        retargeting ads for Zeffy through Google Ads and Facebook Custom
        Audience using email addresses submitted on its forms
      - **Open to any organiser** - Zeffy accepts only nonprofits with a bank
        account in the organisation's name, in six countries
      - **Community Interest Company** - a UK CIC whose assets are locked for
        community benefit
  - type: markdown
    content: |
      ## Payments and payouts

      Zeffy processes payments itself through Stripe and sends payouts to your
      bank account: weekly by default (every Monday), monthly on the first
      Monday, or the next business day for eligible organisations. Payments
      pass a security and anti-fraud review that typically takes 1 to 3
      business days, payouts cannot be triggered manually, and money received
      late in the week can miss the Monday payout and arrive in the next cycle.

      With Chobble Tickets, each payment is charged to your own Stripe, Square,
      or SumUp account at the moment of purchase. There is no payout schedule
      to wait for and no platform holding the money.

      Both platforms let the organiser issue refunds. On Zeffy, a donor's
      contribution to Zeffy is not refunded automatically when you refund a
      ticket, because it covers the processing Zeffy paid on your behalf.
  - type: markdown
    content: |
      ## Who can sign up

      Zeffy is only for nonprofits and registered charities in the United
      States, Canada, the United Kingdom, Ireland, Australia, and Germany, with
      a bank account in the organisation's name. Individuals and for-profit
      businesses are not eligible. The US requires an EIN, Ireland a Charity
      Registration Number, Germany a Vereinsregisternummer, and Australia an
      ABN; the UK needs no charity number. Each Zeffy organisation has a single
      admin account, and other users work with the permissions that admin
      grants.

      Chobble Tickets has no nonprofit-only requirement and no country
      restriction of that kind. Community groups, charities, schools, caterers,
      venues, and hire businesses all run on it, alongside commercial events.
  - type: markdown
    content: |
      ## Data and attendee relationships

      Zeffy stores user and donor data on Amazon RDS servers in Canada, with
      images on S3, and says it stores no card details, which Stripe processes
      under PCI Service Provider Level 1. It offers two-factor authentication,
      account change notifications, and breach procedures, and states
      compliance with GDPR, UK GDPR, PIPEDA, Quebec's Law 25, and the CCPA.
      Canada carries a European adequacy decision, and US processors are
      covered by standard contractual clauses, per the policy.

      Under the GDPR, Zeffy's privacy policy places Zeffy as the data
      controller for personal data collected through its services, and as a
      processor when it sends organisation emails on an organisation's behalf.
      Its policy also describes advertising for Zeffy through Google Ads and
      Facebook Custom Audience, matching submitted email addresses to online
      profiles, with an opt out.

      On Zeffy, buyers and donors become contacts in the provider's CRM, which
      tracks giving history, attendance, and email engagement, and donors can
      hold accounts on zeffy.com. Organisers can export payments, transactions,
      payouts, tax receipts, and contacts as spreadsheets, and import contacts
      from a spreadsheet or Mailchimp.

      Chobble Tickets does not run a marketplace, build platform-level
      profiles, or advertise to your attendees. Attendee names, contact
      details, ticket links, payment references, and written answers are
      encrypted at rest, and every registration reaches you by webhook and
      through a documented API.

      Both platforms let you take your data with you. Chobble Tickets adds a
      complete [database backup](/features/backups/) and event setup export as
      versioned JSON through [catalogue import and
      export](/features/catalogue-import-export/), so a site can move to
      another Chobble Tickets host.
  - type: markdown
    content: |
      ## Source code and self-hosting

      Zeffy is proprietary hosted software. There is no public source
      repository, no self-hosting option, and no published local development
      setup.

      Chobble Tickets publishes its full source under AGPL-3.0-only. Managed
      and self-hosted deployments run the same product, and self-hosting
      carries no Chobble software charge, with infrastructure and payment
      services arranged separately.
  - type: markdown
    content: |
      ## When Zeffy might be the better choice

      - You are a registered nonprofit and want to pay nothing at all
      - Your donors do not mind a contribution request at checkout
      - You want auctions, raffles, memberships, peer-to-peer campaigns, or an
        online store beside ticketing
      - You need a donor CRM with segments, email campaigns, and printed
        letters
      - You want recurring donations and automatic tax receipts or Gift Aid
      - You need in-person card payments through a phone with no card reader
      - You want QuickBooks, Zapier, or AI-assistant connections
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You want ticket income paid straight into your own Stripe, Square, or
        SumUp account rather than arriving by payout
      - You want a checkout with no provider branding and no contribution
        request
      - You need a custom domain, a public website, or full white labelling
      - Privacy matters: encrypted attendee data, no ad retargeting, and no
        platform profiles
      - You are not a registered nonprofit, or you are outside Zeffy's six
        countries
      - You want open source code you can read, fork, or self-host
      - You need a write API, webhooks, wallet passes, or calendar and RSS
        feeds
      - You need deposits, balance payments, or daily events that hold
        capacity per date
      - You want a complete database backup and event setup you can move to
        another host
      - You want a predictable flat cost: £50/year or £5/month, or £25/year
        for charities, community groups, artists and musicians on the annual
        plan
  - type: markdown
    content: |
      ## Who runs Zeffy?

      Zeffy was founded in Montreal by François de Kerret and Thibaut Jaurou,
      who began with a volunteering marketplace before building the fundraising
      platform under the name Simplyk. The company announced its rebrand to
      Zeffy in April 2022 as it expanded to the United States. Third-party
      sources disagree on the founding year: CB Insights says 2016, several
      directories say 2017, and Stripe's customer story says 2018.

      In November 2021 Simplyk raised a $3.7M CAD seed round led by Ring
      Capital with Real Ventures and Panache Ventures. The privacy policy names
      the operating company as 9355-0861 Québec Inc., doing business as Zeffy,
      a Quebec corporation. Zeffy is a certified B Corporation, lists a team of
      60 or more, and has offices in Montreal, Paris, and Newark, Delaware. Its
      marketing site reports more than 100,000 charities using the platform and
      over $2 billion raised.

      Chobble Tickets is run by Chobble CIC, company number 17050113, a UK
      Community Interest Company. A CIC has an asset lock that limits how
      company assets can be transferred and requires them to be used for
      community benefit. All of Chobble's code is public under AGPLv3, and the
      platform can be self-hosted without depending on Chobble as a company.
  - type: markdown
    content: |
      ## Sources

      The pricing, feature, privacy, and company information on this page was
      checked on 10 October 2026. Features and policies may change. Check the
      source pages for current details.

      - [Zeffy pricing](https://www.zeffy.com/home/free-online-fundraising-platform) - free plans, the tipping model, and a fee comparison table
      - [Zeffy home](https://www.zeffy.com/) - product list and the free AI grant finder
      - [Zeffy ticketing](https://www.zeffy.com/home/ticketing-system-fundraising-events) - event ticketing product page
      - [Zeffy about page](https://www.zeffy.com/home/about-us) - story, B Corp status, offices, and team size
      - [Zeffy event feature overview](https://support.zeffy.com/an-overview-of-zeffys-event-feature-j6ymd) - ticket rates, bundles, questions, check-in, and reports
      - [Zeffy contributions explained](https://support.zeffy.com/what-is-the-contribution-made-towards-zeffy-why-was-i-charged-extra-s41ae) - the optional donor contribution and its refund rules
      - [Zeffy really is free](https://support.zeffy.com/zeffy-really-is-free-no-fees-no-catch-4zjir) - fixed contribution wording, tipping rates, and the card limit safeguard
      - [Zeffy payouts](https://support.zeffy.com/zeffy-payouts-schedules-amounts-and-reports-ajuec) - schedules, the review period, and payout reports
      - [Zeffy check-in](https://support.zeffy.com/checking-in-guests-the-day-of-your-event-scan-their-e-ticket-or-check-them-in-manually-using-the-check-in-manager-kpd21) - QR scanning, the check-in manager, and volunteer access
      - [Zeffy in-person payments](https://support.zeffy.com/accept-in-person-payments-with-a-card-reader-or-a-qr-code-8n6vm) - Tap to Pay availability and limits
      - [Zeffy seating chart workaround](https://support.zeffy.com/adding-a-seating-chart-to-your-event-go5x8) - a chart image plus custom questions
      - [Zeffy campaign URLs](https://support.zeffy.com/how-to-customize-your-campaign-url-7re8y) - zeffy.com URLs that cannot be edited after creation
      - [Zeffy eligibility](https://support.zeffy.com/is-my-organization-eligible-to-use-zeffy-8m24r) - registration numbers, country rules, and exclusions
      - [Zeffy countries](https://support.zeffy.com/which-countries-and-regions-can-nonprofits-use-zeffy-in-r7gpt) - the six supported countries
      - [Zeffy API](https://support.zeffy.com/get-started-with-the-zeffy-api-yourg) - read access, webhooks, and admin-only keys
      - [Zeffy integrations](https://support.zeffy.com/integrating-zeffy-with-other-softwares-74zts) - QuickBooks, Zapier, viaSocket, AI connectors, and embeds
      - [Zeffy CRM](https://support.zeffy.com/getting-started-with-zeffys-crm-97cgd) - contacts, segments, campaigns, and custom sending domains
      - [Zeffy data and security](https://support.zeffy.com/data-privacy-and-security-at-zeffy-protecting-user-donor-and-account-data-fou67) - storage, two-factor authentication, and compliance
      - [Zeffy privacy policy](https://support.zeffy.com/privacy-policy-5tndw) - legal entity, advertising, and data sharing
      - [Simplyk seed announcement](https://www.newswire.ca/news-releases/simplyk-raises-3-7m-seed-round-to-bring-free-fundraising-platform-to-nonprofits-890895756.html) - funding, founders, and model
      - [Simplyk rebrand announcement](https://markets.financialcontent.com/stocks/article/newswire-2022-4-21-simplyk-rebrands-to-zeffy-to-bring-their-zero-fee-fundraising-platform-to-the-united-states) - the April 2022 rebrand
      - [Zeffy on Stripe](https://stripe.com/en-it/customers/zeffy) - founding account and scale
      - [Chobble Tickets features](/features/)
      - [Chobble Tickets pricing](/pricing/) - hosting, discounts, processing, and self-hosting costs
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Flat pricing, open source code, and encrypted attendee data.
name: Open Source & Self-Hosted Zeffy Alternative | Chobble Tickets
---
