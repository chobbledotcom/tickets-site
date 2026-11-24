---
competitor_key: dice
title: DICE Alternative
meta_title: Open Source & Flat Fee DICE Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and DICE on buyer and organiser fees, app requirements, event discovery, resale, attendee data and ticketing features.
permalink: /compared-to/dice/
eleventyNavigation:
  key: vs DICE
  parent: Compared To
provider_facts:
  name: DICE
  kind: ticketing
  calculator_keys:
    - dice
  last_reviewed: "2026-08-08"
  registration_country: united-kingdom
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: per-transaction-percentage
  managed_pricing: per-sale
  white_label: not-documented
  custom_domain: not-documented
  public_website: marketplace-pages
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: built-in
  attendee_cross_marketing: personalised-recommendations
  established: 2014
  public_api: read-only
  seating_plans: not-reviewed
  summary: "A mobile-first music ticketing platform with fees agreed per partnership and tickets held in its app."
  notes:
    established: "DICE was founded in England in 2014 (Wikipedia, checked 11 August 2026)."
    public_api: "DICE documents a GraphQL Ticket Holders API for reading events, tickets, orders, returns and transfers."
    registration_country: "DICE FM UK Ltd (company no. 14373641) is named as the contracting company in the DICE self sign-up terms, with a registered office at 100 De Beauvoir Road, London N1 4EN. Parent DICE FM Holdings Ltd (no. 08905651) is registered at the same address. Checked 8 August 2026."
    ethical_basis: "DICE FM was acquired by Fever in June 2025, a private live entertainment company. No charity, co-operative, B Corp or community-interest structure is described in the sources reviewed."
    per_ticket_platform_fee: "The DICE self sign-up terms charge a service fee of 8.5% plus VAT on the face value of each ticket with a £1 minimum, and a transaction fee of 2.5% plus VAT of the total transaction price. Free tickets carry no fees, and no service fee applies where the face value goes to a registered charity. Box office and door sales incur an 8% commission with a £1 to £3.50 range plus a 3% box office transaction fee. Larger or custom partnerships are negotiated separately."
    managed_pricing: "DICE is paid from fees on ticket sales rather than a subscription. The self sign-up path lists a per-sale service and transaction fee, and bigger or custom partnerships negotiate their own terms. No published subscription price appears in the sources reviewed."
    white_label: "No white-label offering is described in the sources reviewed. Tickets are sold through the DICE app and dice.fm marketplace under the DICE brand."
    custom_domain: "No custom-domain offering is described in the sources reviewed."
    public_website: "Events are sold through marketplace pages in the DICE app and on dice.fm, which lists events from many promoters. No organiser website or content management area is described."
    self_hosting: "No self-hosting option is described in the sources reviewed. DICE is a hosted platform."
    source_code: "No platform source code is published and no open-source claim is made in the sources reviewed."
    event_marketplace: "DICE presents a browsable discovery feed of events from many promoters, with pages per city such as dice.fm/browse. Whether a promoter's event is listed automatically or by opt-in was not documented."
    attendee_cross_marketing: "The UK privacy policy describes using music-library and location data to personalise recommendations about events nearby, and communicating by email, push and in-app message. Marketing from third-party event partners is described as consent-based."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs DICE

      DICE is a mobile-first ticketing platform popular with music venues and live events. Here is how Chobble Tickets compares on pricing, features, and data ownership.
  - type: markdown
    content: |
      ## Open source & flat fee DICE alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company, and its code is public under the
      AGPL-3.0-only licence: anyone can read it, fork it, or run their own
      copy of the platform. DICE is closed source and does not publish its code.

      DICE does not publish its fees, so rates are agreed case by case, and
      tickets live in the DICE app. Chobble Tickets costs £50/year or
      £5/month, and tickets are sent by email with [Apple and Google Wallet
      passes](/features/apple-wallet/), so attendees do not need to install
      an app.
  - type: markdown
    content: |
      ## Pricing comparison

      [DICE](https://dice.fm) doesn't put its prices on its website. You
      have to talk to them and agree a deal. Industry estimates suggest fees of
      around 10% per ticket, but what you pay will depend on your
      agreement.

      Chobble Tickets is a flat £50/year or £5/month (£25/year for charities and community
      groups) with [no per-ticket platform fees](/features/no-per-ticket-fees/). You also pay Stripe, Square or SumUp
      processing fees on top. If you sell more than a few dozen tickets in a
      year at typical prices, Chobble Tickets is already cheaper, and the
      savings grow the more you sell.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Data ownership and privacy

      Attendees who buy through DICE become DICE users. DICE markets other
      events to them through the app. Your attendee data is stored on DICE's
      platform.

      With Chobble Tickets, attendee data is encrypted with hybrid RSA/AES
      encryption and stays under your control. Chobble Tickets does not
      market other events to your attendees and does not send them marketing
      emails.
  - type: markdown
    content: |
      ## Payouts

      DICE pays out after your event ends. You're essentially lending DICE
      your ticket revenue until the event is over.

      Chobble Tickets uses Stripe, Square, or SumUp directly, so payments go straight
      to your account with standard processing times. You're always in control
      of your own payment processor account.
  - type: markdown
    content: |
      ## The app

      DICE is built around its mobile app. Tickets live in the app as a QR
      code tied to your phone number. This is how their anti-scalping system
      works: tickets are locked to the app, so they cannot be screenshotted
      and resold. If you can't use the app, DICE does offer limited web
      access as a fallback, but the app is very much the main event.

      Chobble Tickets works in any browser on any device. Attendees get their
      tickets via email with a QR code, and can add them to Apple or Google
      Wallet. No app download required.
  - type: markdown
    content: |
      ## Feature comparison


      <table class="comparison-table">
      <thead>
      <tr>
      <th scope="col">Feature</th>
      <th scope="col"><a href="https://dice.fm/partners">DICE</a></th>
      <th scope="col">Chobble Tickets</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <th scope="row">Online ticket sales with payment processing</th>
      <td data-label="DICE">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">QR code or barcode scanning for entry</th>
      <td data-label="DICE">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Email or in-app confirmations to ticket holders</th>
      <td data-label="DICE">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Event capacity limits</th>
      <td data-label="DICE">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Refund processing</th>
      <td data-label="DICE">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Apple Pay and Google Pay at checkout</th>
      <td data-label="DICE">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Upfront, all-in pricing (the price you see is the price you pay, with no surprise fees at checkout)</th>
      <td data-label="DICE">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row"><strong>Event discovery app</strong></th>
      <td data-label="DICE">DICE's mobile app helps fans discover events in their area based on their music tastes, location, and past attendance, which can drive extra ticket sales you wouldn't get on your own</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Spotify and Apple Music integration</strong></th>
      <td data-label="DICE">personalised event recommendations based on fans' listening history, plus the option to buy tickets through Spotify</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Anti-scalping via app lock</strong></th>
      <td data-label="DICE">tickets are tied to the DICE app and cannot be screenshotted or forwarded, making them very hard to resell on secondary markets</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Waiting list with face-value resale</strong></th>
      <td data-label="DICE">fans can join a waitlist for sold-out events, and if a ticket holder can't attend, DICE automatically resells their ticket at the original price</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Marketing attribution</strong></th>
      <td data-label="DICE">track which channels and campaigns are driving ticket sales via the <a href="https://mio.dice.fm">MIO dashboard</a></td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Algorithmic event recommendations</strong></th>
      <td data-label="DICE">personalised discover feed for each fan based on their tastes and location</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Large-scale access hardware</strong></th>
      <td data-label="DICE"><a href="https://dice.fm/partners">DICE Access</a> system with laser scanning hardware, zone-based scanning, and time-slot scanning</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Real-time audience insights</strong></th>
      <td data-label="DICE">segmentation by genre, spend, and geography via the MIO partner dashboard</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>DICE TV</strong></th>
      <td data-label="DICE">livestreaming platform for virtual events</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Multi-currency support</strong></th>
      <td data-label="DICE">sell in different currencies across DICE's international markets (UK, US, Europe, Australia)</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Partner API</strong></th>
      <td data-label="DICE">a <a href="https://partners-endpoint.dice.fm/graphql/docs/index.html">GraphQL Ticket Holders API</a> for reading events, tickets, orders, returns, and transfers</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/encrypted/">Encryption at rest</a></strong></th>
      <td data-label="DICE">Not documented</td>
      <td data-label="Chobble Tickets">attendee data is encrypted at rest with hybrid RSA-OAEP + AES-256-GCM</td>
      </tr>
      <tr>
      <th scope="row"><strong>No app required</strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">tickets work in any browser on any device</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/apple-wallet/">Apple &amp; Google Wallet tickets</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">attendees can add tickets to their phone wallet without a separate app</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/rss-and-calendar-feeds/">ICS calendar feeds</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">subscribers get automatic calendar updates</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/rss-and-calendar-feeds/">RSS feeds</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">syndicate your events to feed readers</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/stripe-and-square/">Pay-what-you-want pricing</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">let attendees choose their price</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/daily-events/">Daily/recurring event support</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">built for events that repeat on a schedule with per-date capacity</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/custom-domain/">Custom domain support</a></strong></th>
      <td data-label="DICE">Not documented</td>
      <td data-label="Chobble Tickets">get a host-provided subdomain instantly, or point your own domain</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/your-public-website/">Public-facing website and CMS</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">a homepage, content pages, news posts, and a contact form with spam protection, edited from the admin panel in Markdown with <a href="/features/customising-your-site/">custom CSS</a></td>
      </tr>
      <tr>
      <th scope="row"><strong>Fully brandable checkout</strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">your brand, not DICE's</td>
      </tr>
      <tr>
      <th scope="row"><strong>Self-hosting option</strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">run the platform on selected infrastructure without a Chobble software licence fee</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/open-source/">Open source</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">inspect, modify, and contribute to the code under AGPLv3</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/public-api/">Public &amp; admin API</a></strong></th>
      <td data-label="DICE">Read-only</td>
      <td data-label="Chobble Tickets">RESTful JSON API for building custom integrations, plus <a href="/features/admin-api/">authenticated admin API</a> with full event CRUD and booking creation via API keys</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/webhooks/">Webhooks</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">outbound POST on every registration</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/groups/">Event groups with tiered ticketing</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">organise related events into collections for multi-event bookings with a single checkout, and create ticket tiers sharing a venue capacity cap</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/email-providers/">Custom email providers</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">use Resend, Postmark, SendGrid, or Mailgun so emails come from your domain, not the platform's</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/email-templates/">Customisable email templates</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">full control over confirmation emails with Liquid syntax for a fully white-label experience</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/embeddable-widget/">Embeddable widget</a></strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">drop an iframe into your existing website</td>
      </tr>
      <tr>
      <th scope="row"><strong>No marketing emails to attendees</strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">your audience stays yours</td>
      </tr>
      <tr>
      <th scope="row"><strong>Transparent pricing</strong></th>
      <td data-label="DICE">Not offered</td>
      <td data-label="Chobble Tickets">no negotiations, no surprises</td>
      </tr>
      </tbody>
      </table>


  - type: markdown
    content: |
      ## When DICE might be better

      - You want access to DICE's event discovery platform and mobile app
        audience to drive extra ticket sales
      - You're running large music events and want DICE's app-based
        anti-scalping protection
      - You have very low volume and prefer negotiated per-ticket fees over
        an annual subscription
      - You want DICE's built-in waitlist and face-value resale features
  - type: markdown
    content: |
      ## When Chobble Tickets might be better

      - You want predictable, flat-rate pricing with no per-ticket platform fees
      - You don't want attendees forced to download an app
      - Privacy and encryption matter to you
      - You don't want a platform marketing to your attendees or promoting
        competing events
      - You're a charity, community group, artist or musician (£25/year or
        £2.50/month)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value open source and the ability to self-host
      - You want full control over your brand and checkout experience
      - You're selling enough tickets that per-ticket fees add up quickly
  - type: markdown
    content: |
      ## Who owns DICE?

      DICE was started in London and grew into one of the most well-known
      music ticketing apps in the world. Along the way it raised a lot of
      money from big investors, including SoftBank, one of the world's
      largest investment funds. It was then bought by
      [Fever](https://feverup.com), a large live entertainment company that
      helps people discover events in cities around the world.

      Chobble Tickets was never for sale, and could not be: it is run by
      one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction),
      a type of UK company that exists to benefit the community, not to
      make profit for shareholders. All of Chobble's code is public, and
      anyone can run the platform on their own servers.
  - type: markdown
    content: |
      ## Pricing sources

      DICE does not publicly disclose its fees. The estimate used here is
      based on industry analysis and publicly available comparisons.

      - [DICE](https://dice.fm) - fees negotiated per partnership (not publicly listed)
      - [DICE for partners](https://dice.fm/partners) - DICE's partner information and features
      - [MIO dashboard](https://mio.dice.fm) - DICE's partner analytics dashboard
      - [DICE Ticket Holders API](https://partners-endpoint.dice.fm/graphql/docs/index.html) - GraphQL API documentation
      - [Hi.Events DICE comparison](https://hi.events/dice-alternative) - third-party comparison estimating DICE fees
      - [DICE city browse pages](https://dice.fm/browse) - public listings of events from many promoters
      - [DICE UK privacy policy](https://dicefm.zendesk.com/hc/en-gb/articles/4412947716369-United-Kingdom-Privacy-Policy-for-DICE-Users) - personalised event recommendations and marketing consent
      - [Chobble Tickets features](/features/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Flat pricing, attendee data encrypted at rest, no attendee app requirement and no per-ticket platform fee.
name: vs DICE
---
