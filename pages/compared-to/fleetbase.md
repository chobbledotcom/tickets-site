---
title: Fleetbase Alternative
meta_title: Open Source & Low Cost Fleetbase Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Fleetbase on driver run sheets, route optimisation, pricing, modules, deployment and source licences.
permalink: /compared-to/fleetbase/
eleventyNavigation:
  key: vs Fleetbase
  parent: Compared To
provider_facts:
  name: Fleetbase
  kind: adjacent-software
  calculator_keys: []
  last_reviewed: "2026-08-16"
  registration_country: singapore
  ethical_basis:
    - owner-led
  per_ticket_platform_fee: not-documented
  managed_pricing: per-user-tiered-volume-independent
  white_label: partial
  custom_domain: not-documented
  public_website: not-offered
  self_hosting: same-product
  source_code: open-source
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: none
  attendee_cross_marketing: none
  established: 2018
  public_api: included
  seating_plans: not-offered
  summary: "An open source logistics and fleet management platform from Singapore, priced at $29 a month plus $5 per driver or vehicle, with a self-hosted edition."
  notes:
    registration_country: "The About page states that Fleetbase was founded in Singapore in 2018 and is headquartered in Singapore. The site does not publish a registered legal entity name or company number beside the Fleetbase product name. Checked 16 August 2026."
    ethical_basis: "The About page describes Fleetbase as led by two founders who built the platform from the ground up, and says the company has taken a bootstrapped path. The page does not name a charity, co-operative, community-interest company or B Corp structure."
    per_ticket_platform_fee: "Fleetbase is not a ticketing platform and charges no per-ticket fee. Its per-driver and per-vehicle pricing is recorded under managed_pricing. Checked 16 August 2026."
    managed_pricing: "Fleetbase Cloud is $29.00 per month plus $5.00 per month for each driver and each vehicle (and each storefront beyond the first). Orders and deliveries are free at any volume. Annual billing saves 20 percent over monthly. Metered usage adds $0.10 for each gateway-paid invoice and $0.25 per 100,000 API calls or webhook sends, with the first 100,000 calls and 100,000 sends free each period. Self-hosted installation is a $2,500 one-time service. Checked 16 August 2026."
    white_label: "The platform page describes the Navigator driver app as 'fully white-label' and the Storefront module as including a white-label mobile app. 'White-label solutions' is also listed under Professional Services at custom pricing. The Cloud plan lists source code modifications as not included, so customising the dispatcher dashboard's branding on Cloud requires Professional Services or self-hosting rather than the standard Cloud plan."
    custom_domain: "The pricing page does not state whether the dispatcher dashboard, storefront or Navigator app can run on a custom domain. None of the deployment options or support tiers names a custom-domain feature by name."
    public_website: "Fleetbase is a fleet operations platform with a storefront e-commerce module. It does not build a public-facing website with content pages the organiser can compose in Markdown the way an event or hire site needs."
    self_hosting: "Fleetbase's open-source platform runs on the operator's own infrastructure under the AGPL-3.0 licence. The same source code runs Fleetbase Cloud, so managed and self-hosted deployments use the same product. A $2,500 one-time installation service is offered separately, and a commercial licence waives AGPL obligations for proprietary extensions."
    source_code: "Fleetbase is published under the AGPL-3.0 licence at github.com/fleetbase/fleetbase. The pricing page states that a commercial licence waives AGPL obligations for closed-source custom code, and that most teams do not need one."
    event_marketplace: "Fleetbase runs no public event directory. Deliveries and orders are created by the operator or pulled in through integrations."
    attendee_cross_marketing: "Fleetbase is a tool used by the operator for its own deliveries and fleet operations. It does not market other events or services to delivery recipients."
    public_api: "The pricing page lists API credentials, webhook endpoints and an unlimited number of API calls and webhook sends on every Cloud plan. Business and higher support tiers add full configuration assistance and technical troubleshooting."
    established: "The About page states that Fleetbase was founded in 2018 in Singapore, and was open-sourced in 2022 under AGPL-3.0. Checked 16 August 2026."
    seating_plans: "Fleetbase is logistics and fleet management software and does not include reserved-seating or venue seat maps."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Fleetbase

      Both platforms put a run sheet in a driver's hands and publish their source under the AGPL. Fleetbase is open source logistics and fleet management. Chobble Tickets is ticketing and hire with logistics attached.
  - type: markdown
    content: |
      ## Open source & low cost Fleetbase alternative

      Chobble Tickets is made in the UK by a community interest company, with
      its [source code](/features/open-source/) published under the
      AGPL-3.0-only licence.

      [Fleetbase](https://fleetbase.io) is open source fleet management
      software priced at $29 a month plus $5 for each driver or vehicle, with
      orders and deliveries free at any volume. Chobble Tickets charges
      £50/year or £5/month with no per-driver, per-vehicle or per-task fee,
      and no Chobble software licence fee if you self-host it.

      The two suit different operations. Fleetbase is built for courier,
      last-mile delivery, haulage and food and grocery delivery businesses
      that need dispatch, route optimisation, live tracking and a driver
      app. Chobble Tickets is for a small operator who runs events or hire
      bookings, delivers items to customer addresses, and needs a simple
      driver run sheet without the cost or scope of a logistics platform.
  - type: markdown
    content: |
      ## Two open source platforms, two scopes

      Fleetbase and Chobble Tickets both publish their source code under
      the AGPL-3.0 licence, and both ship a managed Cloud edition and a
      self-hosted edition of the same product. They differ in what they
      cover.

      Fleetbase is a multi-module logistics platform. Its modules include
      Fleet-Ops for dispatch and routing, Storefront for e-commerce,
      Navigator for the driver app, and Ledger for accounting. It targets
      food and grocery delivery, courier and parcel services, trucking and
      haulage, healthcare and pharmacy, waste and recycling, container
      operations and military and government clients.

      Chobble Tickets is an event ticketing and hire platform with a
      built-in [logistics system](/features/logistics/). When you enable
      logistics on a booking, each line gets a drop-off agent and a
      collection agent. Users assigned to an agent log in to a deliveries
      run sheet showing today's and tomorrow's drop-offs and collections,
      with the address, phone number, a map link, and a "mark done"
      toggle for each leg.

      The difference is scope. Fleetbase covers the full last-mile
      delivery workflow with optimisation, live tracking, proof of
      delivery and a native driver app. Chobble Tickets covers the
      booking, the address, and the driver's run sheet, and leaves the
      driving itself to the driver.
  - type: markdown
    content: |
      ## How Chobble Tickets handles logistics

      A booking with logistics enabled has a drop-off agent (the start)
      and a collection agent (the end), plus optional times for each.
      An agent is a named resource, such as a van, a driver, or a crew,
      and you assign users to it. Agents are encrypted like the rest of
      your data.

      Users assigned to an agent see a deliveries run sheet on their
      phone showing today's and tomorrow's drop-offs and collections.
      Each entry shows the booking details, the address, phone number, a
      map link, and the ticket token. Each leg has a "Mark done" toggle,
      so the agent can confirm a delivery or collection as it happens,
      from any device with a browser.

      With [postcode lookup](/features/postcode-lookup/) enabled,
      customers type their postcode at checkout and pick their address
      from a list, so the address on the run sheet is accurate. You can
      invite a team member as an agent-class user who sees only the run
      sheet and nothing else.

      This suits an operator hiring out equipment or running events
      where something needs to reach a customer. It does not add route
      optimisation, live vehicle tracking, proof-of-delivery photo or
      signature capture, barcode scanning, or automated dispatch.
      Fleetbase does all of those.
  - type: markdown
    content: |
      ## Pricing comparison

      Fleetbase Cloud prices per month, with a flat platform fee plus a
      per-driver and per-vehicle charge. Orders are free at any volume,
      so order count alone never moves the bill. Annual billing saves 20
      percent over monthly.

      | Fleetbase Cloud line | Price (USD) | Approx. GBP |
      |---|---|---|
      | Platform fee (monthly) | $29.00/month | ~£23/month |
      | Platform fee (annual, 20 percent off) | $278.40/year | ~£220/year |
      | Each driver or vehicle | $5.00/month | ~£4/month |
      | Each storefront beyond the first | $5.00/month | ~£4/month |
      | Gateway-paid invoice | $0.10 each | ~£0.08 each |
      | API calls (over 100,000 per period) | $0.25 per 100,000 | ~£0.20 per 100,000 |
      | Webhook sends (over 100,000 per period) | $0.25 per 100,000 | ~£0.20 per 100,000 |

      Three usage meters sit on top of the platform fee, charged only on
      what you actually use: gateway-paid invoices at $0.10 each with no
      free allowance, and API calls and webhook sends at $0.25 per
      100,000 with the first 100,000 of each free each period. A 7-day
      free trial covers the chosen plan. GBP figures use an approximate
      rate of £0.79 to $1 as of August 2026.

      Fleetbase also sells a self-hosted implementation service at $2,500
      one-time, which includes deployment on your infrastructure, CI/CD
      pipeline setup, environment configuration and branding, and a
      go-live handover session. Professional services, such as custom
      development and ERP or CRM integration, are quoted on request.

      | Fleetbase support tier | Price (USD/month) | Approx. GBP/month |
      |---|---|---|
      | Community | Free | Free |
      | Business (72-hour SLA) | $1,000 | ~£790 |
      | Developer (24-hour SLA) | $3,500 | ~£2,765 |
      | Fractional CTO (dedicated engineer) | $5,000 | ~£3,950 |

      Chobble Tickets is a flat **£50/year (or £5/month)** for the whole
      site, with
      [no per-driver, per-vehicle or per-task fee](/features/no-per-ticket-fees/).
      Charities, community groups, artists and musicians pay £25/year on
      the annual plan. There is no task allowance and no tier to move up.
      Payment processing through Stripe, Square or SumUp is charged
      separately at the provider's standard rate. Self-hosting Chobble
      Tickets has no Chobble software licence fee. Infrastructure and
      other configured services remain separate costs.

      The two price points reflect different products. Fleetbase Cloud
      with five drivers and three vehicles is roughly $69/month or
      $660/year before usage charges, and includes route optimisation,
      live tracking, proof of delivery, a driver mobile app, e-commerce
      and analytics. Chobble Tickets at £50/year gives an operator a
      driver run sheet, accurate addresses, and bookings, without those
      delivery-platform features.
  - type: markdown
    content: |
      ## Feature comparison

      Both platforms give a driver a list of jobs for the day and
      publish their source under the AGPL-3.0 licence. Fleetbase is
      built for last-mile delivery operations; Chobble Tickets is built
      for ticketing and hire with logistics attached. Here is the
      breakdown:
  - type: markdown
    content: |
      ### Both platforms share some features

      - A run sheet a driver can view on their phone
      - Jobs assigned to named drivers, vehicles or agents
      - A customer address and a way to mark a job done from the device
      - Unlimited orders or bookings on the base plan
      - A documented API and webhook endpoints
      - Open source under the AGPL-3.0 licence
      - A self-hosted edition of the same product as the Cloud edition
      - A managed Cloud edition with automatic updates
      - An accounting ledger module
  - type: markdown
    content: |
      ### Fleetbase has features Chobble Tickets does not

      - **Route optimisation** - sequence and optimise multi-stop routes
        across a fleet of drivers
      - **Live GPS tracking** - see each driver's location on a map in
        real time, with dynamic ETAs
      - **Proof of delivery** - capture photos, QR codes and digital
        signatures on completion
      - **Auto-dispatch** - assign tasks to drivers automatically based
        on rules or geofences
      - **Native driver mobile app** - Navigator, the open-source driver
        app available on iOS and Android, with turn-by-turn navigation
      - **Recipient tracking page** - a branded live tracking page and
        ETA notifications for the customer
      - **Storefront e-commerce module** - headless e-commerce for
        on-demand businesses, with a multi-vendor marketplace option,
        separate from delivery
      - **Service areas and zones** - define geographic zones and
        service rates per zone
      - **Vendors, places and contacts directories** - structured records
        for the parties and sites in your network
      - **Logistics AI co-pilot** - an AI assistant for operations
        described in the platform modules list
      - **Extensions marketplace** - a marketplace of third-party
        extensions extending the platform
      - **Container operations** - specialist solutions for container
        operations, listed among the platform's target industries
      - **Professional services and fractional CTO** - custom
        development, integrations, and a dedicated engineer on the
        Fractional CTO tier
      - **Commercial licence** - a paid commercial licence waives AGPL
        obligations for closed-source custom code
  - type: markdown
    content: |
      ### Chobble Tickets has features Fleetbase does not

      - **[Event ticketing in the same tool](/features/selling-tickets/)** -
        run ticketed events with paid bookings, alongside delivery
      - **[Hire bookings](/features/multi-day-hire/)** - hire out items
        by date with capacity consumed only on payment confirmation
      - **[Servicing holds](/features/servicing-events/)** - block an
        item's dates while it is out for repair or cleaning
      - **[QR code check-in](/features/qr-code-check-ins/)** - scannable
        codes for events and bookings
      - **[Apple and Google Wallet](/features/apple-wallet/)** -
        customers can add bookings to the Wallet app on their phone
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** -
        let customers pick their own price above a minimum
      - **[Promo codes, discounts, and add-ons](/features/promo-codes-and-add-ons/)** -
        create promo codes, surcharges, and opt-in add-ons with stock
        limits
      - **[Encryption at rest](/features/encrypted/)** - customer data
        is encrypted at rest with hybrid RSA-OAEP + AES-256-GCM, so a
        database dump on its own cannot be read
      - **[Open source under AGPLv3](/features/open-source/)** - every
        line of code that runs the platform is public and freely
        licensed
      - **[Self-hosting](/hosting/)** - run the same product on your own
        servers with no Chobble software licence fee and no one-time
        installation charge
      - **[Custom email providers](/features/email-providers/)** - send
        confirmations through Resend, Postmark, SendGrid, or Mailgun so
        emails come from your own domain
      - **[Liquid email templates](/features/email-templates/)** - full
        control over the subject and body of confirmation emails
      - **[Public-facing website and CMS](/features/your-public-website/)** -
        a homepage, content pages, news posts, and a contact form with
        spam protection, edited from the admin panel in Markdown and
        [custom CSS](/features/customising-your-site/). Fleetbase builds
        a storefront, not a content website
      - **[UK postcode address lookup](/features/postcode-lookup/)** -
        customers pick their address from a list at checkout, so
        delivery addresses are accurate
      - **[RSS and calendar feeds](/features/rss-and-calendar-feeds/)** -
        publish a feed of your listings that customers can follow
      - **[Refund processing](/features/refunds/)** - issue refunds from
        the admin panel
  - type: markdown
    content: |
      ## Data ownership and licensing

      Both platforms are open source under the AGPL-3.0 licence and can
      run on infrastructure the operator controls. The licensing
      differences sit around what each one charges for.

      Fleetbase's open-source edition is published at
      [github.com/fleetbase/fleetbase](https://github.com/fleetbase/fleetbase)
      and runs under the AGPL-3.0 licence. A commercial licence waives
      AGPL obligations for closed-source custom code, which most teams do
      not need. A $2,500 one-time installation service is offered for
      operators who want Fleetbase deployed on their infrastructure by
      the Fleetbase team. Delivery data, driver data, and recipient
      contact details live on infrastructure you control when you
      self-host. The Cloud plan lists source code modifications as not
      included, so full customisation of the dispatcher dashboard's
      branding on Cloud requires Professional Services or self-hosting.
      The platform page describes the Navigator driver app as "fully
      white-label".

      The complete Chobble Tickets product source is published under
      AGPL-3.0-only in a public
      [GitHub repository](https://github.com/chobbledotcom/tickets). You can
      read it, fork it and run the software without paying Chobble a
      licence fee. There is no commercial-licence upsell and no one-time
      installation charge. Self-hosting keeps customer data on your own
      server. Customer data is encrypted at rest, so stored names and
      addresses require credentials for an authorised keyed user.

      An operator who needs live tracking and route optimisation across a
      fleet of drivers will not find them in Chobble Tickets. An operator
      who wants a simple run sheet, accurate addresses, and full control
      of the source code without an installation fee can get all three
      for £50/year.
  - type: markdown
    content: |
      ## When Fleetbase is the better choice

      - You run a courier or last-mile delivery operation with many
        deliveries per day
      - You need route optimisation across several drivers to cut drive
        time and fuel
      - You need live GPS tracking of drivers and dynamic ETAs for
        recipients
      - You need proof of delivery with photos, signatures, or barcode
        and ID scanning
      - You want auto-dispatch rules that assign tasks to drivers
        without a dispatcher
      - You want a native driver mobile app with turn-by-turn navigation
      - You want a storefront e-commerce module alongside your delivery
        operations
      - You deliver at a volume where driver and vehicle counts are part
        of your unit economics
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You are one small operator with a few vans or drivers running
        deliveries alongside events or hire
      - You hire out items such as marquees, AV gear, or event
        equipment and deliver them to customer addresses
      - You need a driver run sheet with accurate addresses and a "mark
        done" toggle, but not route optimisation or live tracking
      - You run ticketed events or hire bookings and want one tool for
        both, with delivery attached
      - You want a flat £50/year fee with no per-driver, per-vehicle, or
        per-task charge
      - You value [open source](/features/open-source/) code,
        [self-hosting](/hosting/) without an installation fee, and
        [encryption](/features/encrypted/) at rest
      - You are a charity, community group, artist or musician (£25/year
        on the annual plan)
  - type: markdown
    content: |
      ## Who makes Fleetbase?

      Fleetbase is an open-source logistics platform founded in Singapore
      in 2018 and open-sourced under the AGPL-3.0 licence in 2022. Its
      source code is published at
      [github.com/fleetbase/fleetbase](https://github.com/fleetbase/fleetbase).
      The About page describes the company as led by two founders, Shiv
      Thakker (CEO) and Ronald Richardson (CTO), and as having taken a
      bootstrapped path without outside investors. The platform page lists
      modules including Fleet-Ops, Storefront, Navigator and Ledger, and
      the solutions page lists trucking, food and grocery delivery, courier
      and parcel services, e-commerce, healthcare, waste and recycling,
      container operations and military and government.

      Chobble Tickets is run by one person as a UK
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on
      Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The information on this page was verified on 16 August 2026. Pricing
      and features may change. Check the links below for the latest
      figures.

      - [Fleetbase pricing](https://fleetbase.io/pricing) - Cloud plan at $29/month plus $5 per driver or vehicle, three usage meters, and self-hosted installation
      - [Fleetbase platform overview](https://fleetbase.io/platform) - Fleet-Ops, Storefront, Navigator, Ledger and extensions
      - [Fleetbase solutions](https://fleetbase.io/solutions) - trucking, delivery, courier, e-commerce, healthcare, waste, container and government use cases
      - [Fleetbase on GitHub](https://github.com/fleetbase/fleetbase) - open source under the AGPL-3.0 licence
      - [Fleetbase commercial licensing](https://fleetbase.io/licensing/commercial) - commercial licence waives AGPL obligations for proprietary extensions
      - [Chobble Tickets logistics](/features/logistics/) - agents, run sheets, and agent-class users
      - [Chobble Tickets postcode lookup](/features/postcode-lookup/) - accurate addresses at checkout
      - [Chobble Tickets source code on GitHub](https://github.com/chobbledotcom/tickets)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Open source ticketing, hire bookings, and delivery run sheets with flat pricing and no per-driver or per-task fee.
name: Open Source & Low Cost Fleetbase Alternative | Chobble Tickets
---
