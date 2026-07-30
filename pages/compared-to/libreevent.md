---
title: libreevent Alternative
meta_title: Maintained & Hosted libreevent Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and libreevent on hosting, cost, seat plans, server requirements, Stripe and Payrexx support and the archived state of the libreevent code.
permalink: /compared-to/libreevent/
eleventyNavigation:
  key: vs libreevent
  parent: Compared To
provider_facts:
  name: libreevent
  kind: ticketing
  calculator_keys: []
  last_reviewed: "2026-07-30"
  registration_country: not-documented
  ethical_basis:
    - owner-led
  per_ticket_platform_fee: none
  managed_pricing: not-offered
  white_label: self-hosted
  custom_domain: self-hosted
  public_website: host-platform-dependent
  self_hosting: same-product
  source_code: open-source
  event_marketplace: none
  attendee_cross_marketing: none
  notes:
    registration_country: "libreevent is published by Janis Hutz as a personal project. No registered company was named in the sources reviewed on 30 July 2026."
    ethical_basis: "The project describes itself as developed by Janis Hutz and the community, funded by optional donations. Its GitHub repository was archived by its owner on 9 June 2026 and is read-only."
    per_ticket_platform_fee: "libreevent takes no fee of its own. The organiser pays their own payment gateway and their own hosting."
    managed_pricing: "There is no managed or hosted version of libreevent. The organiser installs it on their own web hosting."
    white_label: "A self-hosted deployment shows the organiser's own branding."
    custom_domain: "A self-hosted deployment uses whatever domain the organiser points at their server."
    public_website: "libreevent serves its own event listing and ticket ordering pages. Anything beyond that depends on the site the organiser runs alongside it."
    self_hosting: "Self-hosting is the only way to run libreevent. It needs Node.js and, for higher ticket volumes, a MySQL database with InnoDB enabled. The author sells a paid setup service for organisers who do not want to install it themselves."
    source_code: "libreevent is published under the GPL-3.0 licence."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs libreevent

      libreevent is free open source ticketing software that you install on your own web hosting. Its code has not been updated since June 2026.
  - type: markdown
    content: |
      ## Maintained & hosted libreevent alternative

      Chobble Tickets is made in the UK by a community interest company. Its
      [source code](/features/open-source/) is published under the AGPL-3.0-only
      licence, and it can be run as managed hosting or on the organiser's own
      infrastructure.

      libreevent is self-hosted only. There is no managed version to sign up
      for, so running it means installing Node.js on a web server, keeping
      that server online and applying updates yourself. The libreevent
      software is free of charge, and the project asks for optional donations.

      The main difference is upkeep. The libreevent GitHub repository was
      archived by its owner on 9 June 2026 and is read-only, so no further
      releases, bug fixes or security patches come from the project. Chobble
      Tickets is under active development, and managed hosting includes
      updates.
  - type: markdown
    content: |
      ## What libreevent is

      [libreevent](https://libreevent.janishutz.com/) is event management
      software written by Janis Hutz. It is built with Node.js and Vue, and it
      is published under the GPL-3.0 licence.

      The organiser installs it on their own hosting, creates events in an
      admin panel, and sells tickets from the pages libreevent serves. The
      installation guide asks for a host that lists Node.js as a feature, and
      the author sells a paid setup service for organisers who would rather
      not install it themselves.

      The admin panel is in English, and the version recorded in the archived
      repository is 1.1.16. Each installation sells in one currency, set with a
      three-letter currency code.

      Other open source comparisons cover
      [Pretix](/compared-to/pretix/),
      [Hi.Events](/compared-to/hi-events/) and
      [Swicket with alf.io](/compared-to/swicket/). The
      [open source page](/features/open-source/) describes Chobble Tickets
      without a competitor comparison.
  - type: markdown
    content: |
      ## Cost comparison

      **libreevent** charges nothing for the software. The organiser pays for
      web hosting that supports Node.js, and pays Stripe's or Payrexx's charges
      on ticket sales. Ticket income goes to the organiser's own gateway
      account. The documentation names asurahosting, novatrend and Hetzner as
      hosts that fit, and marks those links as affiliate links. Donations to
      the project are optional.

      **Chobble Tickets** managed hosting costs £50/year or £5/month, or
      £25/year for charities, community groups, artists and musicians on the
      annual plan. That covers hosting, updates, backup tools and support.
      There are [no per-ticket platform fees](/features/no-per-ticket-fees/)
      and no feature tiers. Ticket income goes straight to the organiser's
      Stripe, Square or SumUp account, and those providers charge their own
      processing fees.

      Chobble Tickets can also be self-hosted with no software fee, in which
      case the costs are the same shape as libreevent's: infrastructure and
      payment processing.

      Because libreevent has no managed price and no per-ticket fee, the
      [fee calculator](/compared-to/compare-all/) does not cover it. The
      comparison is between a bill for a server you run and a fixed fee for a
      service someone else runs.
  - type: markdown
    content: |
      ## Feature comparison
  - type: markdown
    content: |
      ### Both platforms share some features

      - Open source code that anyone can read, modify and self-host
      - An admin panel for creating and editing events
      - Online ticket sales through a payment gateway
      - Attendee accounts and self-service order pages
      - Ticket checking at the door with a scanner
      - Email confirmations after booking, sent from the organiser's own email
        account
  - type: markdown
    content: |
      ### libreevent has features Chobble Tickets doesn't

      - **Seat plan editor** - a visual editor for drawing the seating layout
        of a venue, so attendees pick a numbered seat. Chobble Tickets sells
        against a capacity figure and has no reserved seating
      - **Native entry control apps** - free iOS and Android apps for
        scanning tickets at the door. Chobble Tickets uses a
        [browser-based scanner](/features/qr-code-check-ins/) on a phone
        camera instead of a native app
      - **A plugin system** - extra functions can be added as plugins, and the
        project ships a newsletter plugin and a polls plugin. Payment gateways
        can also be added this way
      - **Two-factor authentication on accounts** - admin and attendee logins
        can require a code or link sent by email, and the root admin account
        always requires it
      - **Tickets held during checkout** - libreevent reserves the tickets an
        attendee has selected, and returns them to the pool after a period of
        inactivity that the organiser sets in seconds. Chobble Tickets uses
        capacity when payment confirmation arrives instead
  - type: markdown
    content: |
      ### Chobble Tickets has features libreevent doesn't

      - **[Managed hosting](/hosting/)** - Chobble runs the software,
        applies updates and keeps backups. libreevent has no hosted option, so
        the organiser runs the server
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        stored with hybrid RSA-OAEP + AES-256-GCM encryption. libreevent stores
        attendee records as ordinary rows in MySQL or as entries in a JSON
        file, and passwords are hashed
      - **[Stripe, Square and SumUp](/features/stripe-and-square/)** - three
        payment providers are supported directly. libreevent ships Stripe and
        Payrexx, a Swiss gateway, and one gateway is active at a time
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** -
        attendees choose their own price
      - **[Promo codes, add-ons and price rules](/features/promo-codes-and-add-ons/)** -
        discount codes, extras sold alongside tickets, surcharges and prices
        that change for returning customers
      - **[Apple and Google Wallet tickets](/features/apple-wallet/)** -
        attendees add tickets to their phone wallet
      - **[Daily and recurring events](/features/daily-events/)** - events
        that repeat on a schedule, with capacity per date
      - **[Event groups with shared capacity](/features/groups/)** - related
        events booked together in one checkout, sharing a venue cap
      - **[A public website and CMS](/features/your-public-website/)** - a
        homepage, content pages, news posts and a contact form with spam
        protection, edited in Markdown from the admin panel with
        [custom CSS](/features/customising-your-site/)
      - **[RSS and calendar feeds](/features/rss-and-calendar-feeds/)** -
        event listings syndicated to feed readers and calendar apps
      - **[Email provider APIs and editable templates](/features/email-providers/)** -
        confirmations are sent through Resend, Postmark, SendGrid or Mailgun,
        and the subject and body are edited from the admin panel. libreevent
        sends through an SMTP account entered during setup
      - **[An admin API](/features/admin-api/)** - authenticated API keys for
        reading and writing event data
      - **[Activity logs](/features/activity-logs/)** - an audit trail of
        admin actions and booking activity
      - **Active development** - the libreevent repository is archived and
        read-only, so anyone using it maintains their own copy of the code
  - type: markdown
    content: |
      ## What running libreevent involves

      libreevent needs a web host that supports Node.js. The documentation
      asks for a current Node.js version, and the repository records Node.js
      16.0 or newer as the minimum. The application listens on port 8080, and
      the install uses FTP to upload files.

      Setup offers two databases. MySQL takes about ten minutes to create and
      has to have InnoDB enabled. The alternative stores data in a JSON file,
      which the documentation says suits events selling fewer than ten tickets
      per minute. The same documentation warns that libreevent must never be
      uploaded to a publicly reachable folder, because a JSON database there
      would expose every attendee record.

      Updates are manual. The organiser downloads the new release, uploads the
      files over FTP without overwriting the data and config directories, and
      restarts the application.

      Chobble Tickets compiles to a single JavaScript file that runs as an
      edge script on Bunny.net with a Bunny.net edge database. On managed
      hosting there is no server to set up, and self-hosting has no database
      server to install.
  - type: markdown
    content: |
      ## The archived repository

      An archived GitHub repository is read-only. Nobody can merge a fix into
      it, and the project publishes no new releases. Anyone running libreevent
      keeps their own copy of the code, and any change, including a security
      fix, is theirs to write and apply.

      That is a fork rather than a dead end. The GPL-3.0 licence allows anyone
      to take the code and continue it, and the seat plan editor and entry
      control apps still work as built. It does mean the software needs a
      developer, not an organiser.
  - type: markdown
    content: |
      ## When libreevent might be better

      - You need reserved seating with a visual seat plan
      - You want tickets held while an attendee completes checkout
      - You want native scanning apps on iOS and Android
      - You already use Payrexx and want to keep it
      - You want to pay nothing for software and already run your own server
      - You have a developer who can maintain an archived codebase
  - type: markdown
    content: |
      ## When Chobble Tickets might be better

      - You want someone else to run and update the software
      - You want the code to keep receiving fixes and new features
      - You want attendee data encrypted at rest
      - You want Stripe, Square or SumUp, wallet tickets, or calendar feeds
      - You are a charity, community group, artist or musician paying £25/year
      - You sell against a capacity limit rather than numbered seats
  - type: markdown
    content: |
      ## Who builds libreevent?

      libreevent is written by Janis Hutz and published as a personal open
      source project, funded by optional donations. The sources reviewed named
      no registered company behind it. Its GitHub repository was archived by
      its owner on 9 June 2026.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. The code is published under
      [AGPL-3.0-only](/features/open-source/) with no attribution requirement,
      so anyone can self-host it without depending on Chobble as a company.
  - type: markdown
    content: |
      ## Sources

      This information was checked on 30 July 2026. Details may change. Check
      the links below for the latest position.

      - [libreevent website](https://libreevent.janishutz.com/) - features and cost
      - [libreevent documentation](https://libreevent.janishutz.com/docs/) - setup, admin panel and plugins
      - [libreevent on GitHub](https://github.com/janishutz/libreevent) - GPL-3.0 licence, requirements and archive notice. The source code and the documentation in that repository, at version 1.1.16, were read for this comparison
      - [libreevent project page](https://janishutz.com/projects/libreevent/)
      - [Chobble Tickets features](/features/)
      - [Chobble Tickets pricing](/pricing/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Flat pricing, managed updates, attendee data encrypted at rest and no per-ticket platform fee.
name: Maintained & Hosted libreevent Alternative | Chobble Tickets
---
