---
layout: design-system-base.html
competitor_key: eventim_light
title: Chobble Tickets vs EVENTIM.Light
meta_title: Open Source Alternative to EVENTIM.Light | Chobble Tickets
meta_description: Chobble Tickets is an alternative to EVENTIM.Light, with flat annual pricing, no per-ticket fees, full data ownership, and encrypted attendee data. Compare pricing and features.
permalink: /compared-to/eventim-light/
eleventyNavigation:
  key: vs EVENTIM.Light
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    title: Chobble Tickets vs EVENTIM.Light
    lead: >-
      EVENTIM.Light is the self-service ticketing platform from Europe's largest
      ticketing company. Here's how a small, open source alternative compares
      on pricing, features, and data ownership.

  - type: markdown
    content: |
      ## What is EVENTIM.Light?

      [EVENTIM.Light](https://www.eventim-light.co.uk/) is the self-serve
      ticketing arm of CTS EVENTIM, the parent company behind eventim.co.uk
      and one of the largest ticketing operations in Europe, with [250+
      million tickets sold in
      2019](https://www.eventimb2b.co.uk/ticketing-technology/eventim-light/)
      and operations across 23+ countries. EVENTIM.Light is aimed at independent
      organisers, artists, and small-to-medium promoters who want to create and
      sell tickets without negotiating an enterprise deal.

      It is a solid platform backed by serious infrastructure. The
      trade-offs (particularly around fees, data ownership, and flexibility)
      are worth understanding before you commit.

  - type: markdown
    content: |
      ## Pricing comparison

      EVENTIM.Light charges **8% per ticket** in the UK, with payment processing
      included in that fee. There are no fixed costs or contracts. As an
      organiser you can choose whether to absorb the fee or pass it on to ticket
      buyers.

      So on a £15 ticket, that's **£1.20** going to EVENTIM per sale. On a £30
      ticket, it's **£2.40**. Those numbers climb fast at volume.

      Chobble Tickets is a flat **£50/year** (£25 for charities and community
      groups) with [no per-ticket fees](/features/no-per-ticket-fees/) at all. You only pay Stripe or Square
      processing fees (1.5% + 20p) on top. If you sell more than about 65
      tickets at £15 in a year, Chobble Tickets is already cheaper.

      It's worth noting that EVENTIM.Light's 8% is competitive compared to some
      platforms (Eventbrite charges 6.95% + 59p, Fatsoma charges 10%), but it's
      still a percentage that grows with every ticket sold. A flat annual fee
      doesn't.

      One important detail: according to [EVENTIM.Light's German
      FAQ](https://www.eventim-light.de/en/faq/), once you choose whether to
      absorb the fee or pass it to buyers, **you can't change that setting
      after your event is published**. Choose carefully.

      Also be aware that if you opt into the EVENTIM network distribution
      (selling through eventim.co.uk), buyers may incur an **additional
      advance booking fee on top of the 8%**.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Payouts

      EVENTIM.Light pays out **within five working days** after you manually
      mark your event as "Finished." That means your money sits with EVENTIM
      until after the event is over and you change its status yourself. There's
      no option for advance payouts. For cancelled or postponed events,
      settlement only happens after all buyer refund claims are resolved -
      which could take considerably longer.

      Chobble Tickets uses Stripe or Square directly, so payments flow straight
      to your own payment processor account with standard processing times
      (typically 2–3 business days from each sale). You control your own
      payout schedule through Stripe or Square, not through the ticketing
      platform.

  - type: markdown
    content: |
      ## Feature comparison

      **Both platforms share some features:**

      - Online ticket sales with payment processing
      - QR code scanning for check-in at the door
      - Email confirmations to attendees
      - Capacity management to prevent overselling
      - Embeddable ticket shop for your own website (iframe)
      - Box office / door sales support
      - Real-time sales reporting and dashboards
      - Free event support (no payment setup required for free events)
      - Event series / recurring events
      - Custom branding on your ticket shop
      - Custom checkout questions

      **EVENTIM.Light has features Chobble Tickets doesn't:**

      - **EVENTIM network distribution** - your events get listed on
        [eventim.co.uk](https://www.eventim.co.uk) (500,000+ monthly visitors
        in the UK), giving you access to an existing audience of ticket buyers
        browsing for events
      - **Seating plan editor** - create custom venue seating charts and offer
        reserved seating or best-seat booking, useful for theatres and seated
        venues (note: seating plans cannot be edited after the event is
        published)
      - **Facebook event integration** - create and sync Facebook events
        directly from the platform
      - **Promotion codes** - create individual discount and presale codes for
        marketing campaigns
      - **Ad pixel tracking** - embed Google and Meta (Facebook) tracking
        pixels to analyse where your ticket buyers come from and build
        retargeting audiences
      - **Google Analytics integration** - built-in tracking for monitoring
        visitor behaviour on your ticket shop pages
      - **EVENTIM brand recognition** - backed by Europe's largest ticketing
        company, which may carry trust with some ticket buyers
      - **Multiple payment methods** - PayPal, PayPal Express, Apple Pay,
        Google Pay, Visa, and MasterCard built in (Chobble Tickets supports
        Apple Pay and Google Pay via Stripe, plus Square, but not PayPal)
      - **Video tutorials and quick guides** - step-by-step help resources
        built into the platform

  - type: markdown
    content: |
      **Chobble Tickets has features EVENTIM.Light doesn't:**

      - **[End-to-end encryption](/features/encrypted/)** - attendee data is
        encrypted at rest with hybrid RSA-OAEP + AES-256-GCM, not just stored
        in a database
      - **[Open source](/features/open-source/)** - every line of code is
        public under AGPLv3, fully auditable, no proprietary lock-in
      - **Self-hosting option** - run the platform on your own servers for
        free, with no licence fee
      - **Flat annual pricing** - £50/year with no per-ticket fees, no matter
        how many you sell
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets to their phone wallet
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic calendar updates when you add events
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate your
        events to feed readers
      - **[Tiered ticket types via groups](/features/groups/)** - create VIP,
        early bird, and other tiers using event groups with a shared capacity
        cap
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        attendees choose their own price
      - **[Daily/recurring events with per-date capacity](/features/daily-events/)**
        - calendar picker with holiday blackouts for classes, workshops, and
        regular bookings
      - **[Custom questions](/features/custom-questions/)** - add
        multiple-choice questions to events and collect structured answers
        at checkout, with answers visible across the admin interface, CSV
        exports, and webhooks
      - **[Public & admin API](/features/public-api/)** - RESTful JSON API
        for building custom integrations, plus [authenticated admin
        API](/features/admin-api/) with full event CRUD via API keys
        (EVENTIM.Light has no public API)
      - **[Webhooks](/features/webhooks/)** - outbound POST on every
        registration for real-time integrations
      - **[Custom email providers](/features/email-providers/)** - use Resend,
        Postmark, SendGrid, or Mailgun so emails come from your domain
      - **[Customisable email templates](/features/email-templates/)** - full
        control over confirmation emails with Liquid syntax
      - **[Custom domain](/features/custom-domain/)** - get a
        yourname.tix.chobble.net subdomain instantly, or point your own
        domain
      - **Automatic refunds** - process refunds directly from the admin panel
      - **[CSV export](/features/csv-export/)** - download attendee lists for
        your own records
      - **No marketing to your attendees** - your audience stays yours, with
        no cross-promotion of other events on the platform
      - **Community Interest Company** - run by a CIC, with profits
        reinvested rather than distributed to shareholders

  - type: markdown
    content: |
      ## Data ownership and privacy

      This is where the trade-offs get serious. Under EVENTIM.Light's
      [UK terms of use](https://www.eventim-light.com/uk/api/legal/terms?format=pdf&lang=en),
      you and CTS EVENTIM are **joint data controllers** under GDPR Article 26
      (clause 9.5). In practice, this means:

      - EVENTIM can send **personalised mailings about similar events** to
        your ticket buyers - their
        [UK terms](https://www.eventim-light.com/uk/api/legal/terms?format=pdf&lang=en)
        (clause 9.2) confirm they may contact buyers about "events which are
        identical or similar to the one for which the customer purchased a
        ticket"
      - If you sell through the EVENTIM network (eventim.co.uk), **you have
        no claim to that customer data** - clause 9.4 states "the Event
        Organiser has no claim against EVENTIM UK Ltd. to the transmission
        of such customer data"
      - EVENTIM can **amend their terms unilaterally** with notification -
        clause 14.1 states an amendment "is deemed approved unless the Event
        Organiser lodges an objection in text form within one month"
      - Your **first event requires authorisation** from the EVENTIM UK team
        before it goes live (clause 1.2) - subsequent events do not

      The consumer-facing eventim.co.uk has a
      [3.7-star rating on Trustpilot](https://uk.trustpilot.com/review/eventim.co.uk)
      (UK), though reviews are mixed - common complaints include refund
      difficulties and customer service responsiveness. While EVENTIM.Light
      is a separate product, buyer issues are typically directed back to the
      event organiser rather than EVENTIM's support team.

      With Chobble Tickets, attendee data is encrypted with hybrid RSA/AES
      encryption and stays entirely under your control. There's no platform
      marketing to your attendees, no joint data controller arrangement, and
      no third party with access to your customer data.

  - type: markdown
    content: |
      ## Flexibility and lock-in

      EVENTIM.Light has some rigidity worth knowing about (confirmed in their
      [UK FAQ](https://www.eventim-light.co.uk/faq/) and
      [German FAQ](https://www.eventim-light.de/en/faq/)):

      - You **cannot change the venue** once an event is published
      - You **cannot edit the seating plan** after publishing (no adding or
        removing seats)
      - The scan app's **barcode synchronisation only works within 12 hours**
        of the event start, requiring an internet connection during that window
      - Offline scanning devices **cannot sync with each other**
      - **Cancelling in EVENTIM.Light doesn't cancel your linked Facebook
        event** - you have to do that separately
      - Box office ticket buyers **cannot be contacted** if you cancel or
        relocate - EVENTIM doesn't hold their contact details

      Chobble Tickets lets you edit event details at any time before the event.
      There's no approval process, no locked settings, and no dependency on
      syncing windows.

  - type: markdown
    content: |
      ## When EVENTIM.Light might be the better choice

      - You want your events listed on eventim.co.uk to reach an existing
        audience of ticket buyers
      - You need a seating plan editor for reserved seating at a theatre or
        seated venue
      - You want Facebook event integration and ad pixel tracking built in
      - You prefer the backing and brand recognition of a large, established
        ticketing company
      - You have very low volume and prefer paying 8% per ticket over an
        annual fee
      - You want promotion codes for marketing campaigns

  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You already have your own audience and don't need a discovery platform
      - You want predictable, flat-rate pricing with no per-ticket fees
      - Privacy and encryption matter to you
      - You want a [public API](/features/public-api/) or
        [webhooks](/features/webhooks/) for custom integrations (EVENTIM.Light
        has neither)
      - You don't want a platform marketing competing events to your attendees
      - You're a community group, charity, or school (£25/year)
      - You want [Apple/Google Wallet](/features/apple-wallet/), [calendar
        feeds](/features/rss-and-calendar-feeds/), or [pay-what-you-want
        pricing](/features/stripe-and-square/)
      - You value [open source](/features/open-source/) and the ability to
        self-host
      - You want the flexibility to edit event details after publishing
        without restrictions
      - You sell enough tickets that 8% per ticket adds up to more than
        £50/year

  - type: markdown
    content: |
      ## Who owns CTS EVENTIM?

      CTS EVENTIM AG & Co. KGaA was founded in 1989 and is headquartered in
      Bremen, Germany. It is publicly traded on the Frankfurt Stock Exchange
      (EVD) and is Europe's largest ticketing company and the second-largest
      globally after Live Nation. The company operates across 26 countries
      and markets over 300 million tickets annually through its systems.

      EVENTIM.Light is CTS EVENTIM's self-service product, operated in the
      UK by EVENTIM UK Ltd. The parent company also runs the consumer-facing
      eventim.co.uk marketplace and provides enterprise ticketing solutions
      to major venues and promoters.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3, and
      the platform can be self-hosted by anyone without depending on Chobble
      as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change. Check the links below for the latest figures.

      - [EVENTIM.Light UK pricing](https://www.eventim-light.co.uk/pricing/) - 8% per ticket (includes payment processing)
      - [EVENTIM.Light UK features](https://www.eventim-light.co.uk/features/) - full feature list
      - [EVENTIM.Light UK FAQ](https://www.eventim-light.co.uk/faq/) - frequently asked questions for organisers
      - [EVENTIM.Light UK terms of use](https://www.eventim-light.com/uk/api/legal/terms?format=pdf&lang=en) - organiser terms (PDF)
      - [EVENTIM.Light overview](https://www.eventimb2b.co.uk/ticketing-technology/eventim-light/) - B2B product page (250M+ tickets in 2019)
      - [Eventim UK on Trustpilot](https://uk.trustpilot.com/review/eventim.co.uk) - consumer reviews
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing, encrypted data, and no per-ticket fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
