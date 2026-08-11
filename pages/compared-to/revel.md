---
competitor_key: revel
selfhosted_chobble_key: chobble_selfhosted
selfhosted_competitor_key: revel_selfhosted
title: Revel Alternative
meta_title: Flat Fee & Encrypted Revel Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Revel (letsrevel.io) on pricing, licences, self-hosting, attendee vetting, private guest lists and how each keeps community data private.
permalink: /compared-to/revel/
eleventyNavigation:
  key: vs Revel
  parent: Compared To
provider_facts:
  name: Revel
  kind: ticketing
  calculator_keys:
    - revel
    - revel_selfhosted
  last_reviewed: "2026-08-10"
  registration_country: austria
  ethical_basis:
    - owner-led
  per_ticket_platform_fee: percentage-plus-fixed
  managed_pricing: per-sale
  white_label: self-hosted
  custom_domain: self-hosted
  public_website: organiser-microsite
  self_hosting: same-product
  source_code: open-source
  agent_instructions: published
  local_dev_runtime: runtime-plus-local-services
  local_dev_source: runs-checkout
  local_dev_reload: automatic-restart
  event_marketplace: not-documented
  attendee_cross_marketing: none
  established: not-reviewed
  public_api: not-reviewed
  seating_plans: included
  summary: "An open source community ticketing platform first built for queer, LGBTQ+ and kink groups, with private guest lists."
  notes:
    ethical_basis: "Revel's terms name Biagio Distefano as the operator, an individual based in Vienna, Austria (letsrevel.io/legal/terms). The site describes the project as free and open source with no ads, no data mining and no shareholders. Its pricing and invoicing are in euros with EU VAT handling. Checked 10 August 2026."
    per_ticket_platform_fee: "Revel's hosted service charges 3% + €0.50 on each paid ticket it processes. Free events, and events where the organiser handles payment, carry no Revel charge. Stripe processing is separate."
    managed_pricing: "The hosted commission is charged per paid ticket, so total cost rises with ticket volume."
    white_label: "The code is MIT licensed with no attribution requirement, so a self-hosted deployment can be fully rebranded. Hosted white-labelling was not established."
    custom_domain: "A self-hosted deployment uses its configured domain. Hosted custom-domain support was not established."
    public_website: "Revel gives each community or organisation a page that lists its events and manages membership, alongside individual event pages."
    self_hosting: "The hosted and self-hosted versions run the same MIT-licensed source, published on GitHub under the letsrevel organisation."
    attendee_cross_marketing: "The Revel site states \"No ads. No data mining\" and describes membership data as staying with the community rather than being marketed to."
    local_dev_runtime: "Django runs on the host via a Makefile, with PostgreSQL, Redis, ClamAV and Mailpit provided by a Docker Compose file (compose.yaml). Checked 10 August 2026."
    local_dev_reload: "make run starts Django's development server, which restarts on a file change. Checked 10 August 2026."
    agent_instructions: "The revel-backend repository carries a CLAUDE.md file for AI agents. Checked 10 August 2026."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Revel

      Revel (letsrevel.io) is another open source ticketing platform. It was first built for queer, LGBTQ+ and kink communities, so like Chobble Tickets it is designed to keep attendee lists private.
  - type: markdown
    content: |
      ## Two platforms built for private communities

      Both platforms are made for groups that cannot use a mainstream
      ticketing site. Revel was first built for queer, LGBTQ+ and
      sex-positive communities. Chobble Tickets is used by community groups,
      artists and small organisers who want to keep control of attendee data.

      The two platforms protect privacy in different ways. Revel screens
      people with membership questionnaires before an event address is
      shared, and keeps guest lists private. Chobble Tickets
      [encrypts attendee data at rest](/features/encrypted/), so even someone
      with access to the server cannot read it without the organiser's
      private key.

      Both platforms publish their source code and both can be self-hosted.
      The main practical differences are pricing, payment providers, the
      licence, and how much work self-hosting takes.
  - type: markdown
    content: |
      ## Two open source options

      [Revel](https://letsrevel.io/) is a source-published ticketing platform
      built with Python and Django. Its code is on GitHub under the
      [letsrevel organisation](https://github.com/letsrevel) and is licensed
      under the MIT licence, which lets anyone use, change or self-host it
      without a fee.

      This page compares the two platforms to help you decide which fits your
      needs. Other open source comparisons cover
      [Hi.Events](/compared-to/hi-events/), [Pretix](/compared-to/pretix/) and
      [Swicket with alf.io](/compared-to/swicket/). The
      [open source page](/features/open-source/) describes Chobble Tickets
      without a competitor comparison.
  - type: markdown
    content: |
      ## Pricing comparison

      The pricing models are different.

      **Revel hosted** charges no annual fee. It takes 3% + €0.50 (about 43p,
      since Revel prices in euros) on each paid ticket it processes, and
      nothing for free events. It takes payment through Stripe, so Stripe
      processing fees apply on top of Revel's commission.

      **Revel self-hosted** has no platform fee at all, because the code is
      MIT licensed. You pay only Stripe processing and your own server costs.

      **Chobble Tickets** charges a flat £50/year or £5/month (£25/year for
      charities, community groups, artists and musicians on the annual plan)
      with
      [no per-ticket platform fees](/features/no-per-ticket-fees/). You also
      pay Stripe, Square or SumUp processing on top.

      For small numbers of paid tickets, Revel hosted is cheaper because there
      is no annual fee. As volume grows, Chobble's flat fee becomes better
      value: if you sell more than about 57 tickets at £15 each in a year, you
      will pay less with Chobble Tickets. Neither platform charges a per-ticket
      fee on free events, though Chobble's flat annual fee still applies
      whether events are free or paid.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison
  - type: markdown
    content: |
      ### Both platforms share some features

      - Open source with a self-hosting option
      - Stripe payment processing
      - QR code check-in at the door
      - Apple Wallet tickets on the attendee's phone
      - Free events with no per-ticket fee and no payment setup
      - Custom questions asked when someone signs up
      - Discount and promo codes
      - Private attendee lists, built for communities that need them

      Both platforms cover the core ticketing basics, but they focus on
      different things beyond that.
  - type: markdown
    content: |
      ### Revel has features Chobble Tickets doesn't

      - **Attendee vetting** - membership questionnaires screen people before
        an event address is shared, so an organiser can approve or decline a
        request
      - **Digital door policy** - questionnaires designed for community
        vetting at the door
      - **Reserved seating** - a seat-map designer with zone pricing for
        venues (Chobble Tickets uses shared capacity, not allocated seats)
      - **Potluck boards** - coordinate who brings what, with dietary flags
      - **Community membership** - organisations manage members with roles and
        permissions, not only ticket buyers
      - **Global banning** - block a person across all of your events at once
      - **Referral programme** - track sign-ups that come from existing members
      - **XLSX export** - export attendee data as an Excel file (Chobble
        Tickets exports CSV)
      - **Automated invoicing** - sequentially numbered invoices with VAT
        handling, including EU business reverse charge
      - **Telegram integration** - send updates through Telegram
  - type: markdown
    content: |
      ### Chobble Tickets has features Revel doesn't

      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        stored with hybrid RSA-OAEP + AES-256-GCM encryption rather than plain
        database rows
      - **[Square and SumUp payments](/features/stripe-and-square/)** - Chobble
        Tickets supports Stripe, Square and SumUp; Revel is Stripe only
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        attendees choose their own price
      - **[Daily and recurring events](/features/daily-events/)** - built for
        events that repeat on a schedule, with capacity set per date
      - **[Custom email providers](/features/email-providers/)** - send
        confirmations through Resend, Postmark, SendGrid or Mailgun, from your
        own domain
      - **[Customisable email templates](/features/email-templates/)** - full
        control over confirmation emails using Liquid syntax
      - **[RSS and calendar feeds](/features/rss-and-calendar-feeds/)** -
        attendees get ICS calendar updates, and events can be syndicated over
        RSS
      - **[Public website and CMS](/features/your-public-website/)** - a
        homepage, content pages, news posts and a contact form with spam
        protection, all edited in Markdown with
        [custom CSS](/features/customising-your-site/)
      - **[Custom domain included](/features/custom-domain/)** - managed
        hosting can use your own domain at no extra cost
      - **[Activity logs](/features/activity-logs/)** - an audit trail of admin
        actions and booking activity
      - **Flat annual pricing** - a fixed £50/year or £5/month with no
        per-ticket platform fee, rather than a commission on each paid ticket
      - **Serverless edge deployment** - Chobble Tickets compiles to a single
        JavaScript file that runs on Bunny.net edge scripts with an edge
        database, so there is no server to keep online
  - type: markdown
    content: |
      ## Different philosophies

      The two platforms are built very differently.

      **Revel** is a Python and Django application with a PostgreSQL database,
      Redis and background workers. It is feature-rich, with community
      membership, vetting, seating plans and invoicing. Self-hosting it means
      running an always-on server; Revel's own guidance suggests around 2 CPU
      cores and 4GB of memory as a starting point.

      **Chobble Tickets** is built on Deno and compiles to a single JavaScript
      file that runs as an edge script on Bunny.net, with an edge database. It
      focuses on privacy through encryption, data ownership and flat-rate
      pricing. It is run by a Community Interest Company, which cannot pay
      profit to shareholders and donates 10% of income to the Against Malaria
      Foundation.
  - type: markdown
    content: |
      ## Licensing and self-hosted costs

      Both platforms are open source, but under different licences.

      **Revel** uses the [MIT licence](https://github.com/letsrevel). This is a
      permissive licence: anyone can use, change, rebrand or resell the code,
      and there is no requirement to publish changes or to show a "Powered by"
      link. Self-hosting is free.

      **Chobble Tickets** uses [AGPL-3.0-only](/features/open-source/). This is
      a copyleft licence: a business that changes Chobble Tickets and runs it
      as a service for others must publish its changes under the same licence.
      There is no attribution requirement, no commercial licence to buy, and
      self-hosting is free.

      Neither platform charges a software fee to self-host. The difference in
      cost is the server: Revel needs a running application server with a
      database and background workers, while Chobble Tickets runs on serverless
      edge infrastructure with no server to manage.
  - type: include
    file: price-comparator-selfhosted.html
  - type: markdown
    content: |
      The self-hosted comparison above shows both platforms with no software
      licence fee. The real difference is the infrastructure each one needs,
      which is not modelled here.
  - type: markdown
    content: |
      ## When Revel might be better

      - You need to vet attendees with questionnaires and approve them before
        sharing an address
      - You want reserved seating with a seat-map designer
      - You run a membership community, not only ticketed events
      - You want per-ticket pricing with no annual fee for lower volumes
      - You need invoicing with EU VAT handling
      - You want potluck coordination or Telegram updates
  - type: markdown
    content: |
      ## When Chobble Tickets might be better

      - You want predictable flat-rate pricing with no per-ticket platform fee
      - You want attendee data encrypted at rest
      - You want Stripe, Square or SumUp, rather than Stripe only
      - You prefer serverless hosting with no server to keep online
      - You are a charity, community group, artist or musician (£25/year on the
        annual plan)
      - You want a public website, calendar feeds, custom email providers or
        pay-what-you-want pricing
      - You value a Community Interest Company, which cannot pay profit to
        shareholders
  - type: markdown
    content: |
      ## Who builds Revel?

      Revel is published on GitHub under the
      [letsrevel organisation](https://github.com/letsrevel) and licensed under
      the MIT licence. Its [terms](https://letsrevel.io/legal/terms) name Biagio
      Distefano as the operator, an individual based in Vienna, Austria. Its
      pricing and invoicing are in euros with EU VAT handling.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for community
      benefit. Chobble Tickets is published under
      [AGPL-3.0-only](/features/open-source/) and can be self-hosted by anyone
      without depending on Chobble as a company. The [hosting page](/hosting/)
      describes its deployment options.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing and project information was checked on 10 August 2026. Fees
      may change. Check the links below for the latest figures.

      - [Revel](https://letsrevel.io/) - 3% + €0.50 per paid ticket (hosted)
      - [Revel on GitHub](https://github.com/letsrevel) - MIT licensed, free to
        self-host
      - [Chobble Tickets features](/features/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Flat pricing, attendee data encrypted at rest and no per-ticket platform fee.
name: Flat Fee & Encrypted Revel Alternative | Chobble Tickets
---
