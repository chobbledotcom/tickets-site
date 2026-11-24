---
competitor_key: fatsoma
title: Fatsoma Alternative
meta_title: Open Source & Cheaper Fatsoma Alternative | Chobble Tickets
meta_description: Compare Fatsoma and Chobble Tickets on buyer fees, event discovery, follower marketing, payouts, ticketing features and self-hosting.
permalink: /compared-to/fatsoma/
eleventyNavigation:
  key: vs Fatsoma
  parent: Compared To
provider_facts:
  name: Fatsoma
  kind: ticketing
  calculator_keys:
    - fatsoma
  last_reviewed: "2026-08-08"
  registration_country: united-kingdom
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: per-transaction-percentage
  managed_pricing: per-sale
  white_label: higher-tier
  custom_domain: higher-tier
  public_website: marketplace-pages
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: built-in
  attendee_cross_marketing: provider-content-and-events
  established: 2005
  public_api: not-documented
  seating_plans: not-reviewed
  summary: "A UK ticketing and promotion platform for student events and nightlife, charging 10% per ticket with a £1 minimum."
  notes:
    registration_country: "Fatsoma Limited is registered in England and Wales, company number 05495880, with its registered office at The Hive, 47-49 Lever Street, Manchester, per its terms and conditions. Checked 8 August 2026."
    ethical_basis: "Fatsoma Limited is a private company limited by shares. Neither fatsoma.com nor ticketing.fatsoma.com describes its ownership structure, so no ownership category could be verified."
    per_ticket_platform_fee: "The free Ticketing plan charges a booking fee of 10% per ticket sold, with a £1 minimum, and no fee on free tickets. Professional is priced from £1,500 plus a 10% fee, and Enterprise is custom-priced. The fee can be paid by the organiser or passed to the buyer."
    managed_pricing: "The core platform is free to use, with Fatsoma's revenue coming from a per-sale booking fee of 10% (minimum £1) on each paid ticket. Paid Professional (from £1,500 plus 10%) and Enterprise (custom) tiers add a branded website, apps and managed services."
    white_label: "The free tier sells on Fatsoma-branded pages. Professional includes a website styled to the organiser's brand and branded iPhone and Android apps, and Enterprise offers a fully branded app and website powered by Fatsoma's ticketing technology."
    custom_domain: "The Enterprise tier includes a checkout under the organiser's own domain. The pricing pages do not name custom domains on the Professional tier."
    public_website: "Events are listed on Fatsoma's public marketplace with SEO-optimised Fatsoma brand pages on the free tier. Professional and Enterprise add an organiser-owned website."
    self_hosting: "Fatsoma is a hosted platform. No self-hosting option is described in the sources reviewed."
    source_code: "No source code is published and no open-source distribution is mentioned on the Fatsoma pages reviewed."
    event_marketplace: "Fatsoma runs a public events marketplace at fatsoma.com/discover with categories and search, and buying a ticket makes the buyer a follower the organiser can market to for free."
    attendee_cross_marketing: "The privacy policy says Fatsoma may contact users about events, offers or services that may interest them and uses profiling to tailor that information, and that a customer's email is available to the promoter of the event they bought from. Its communication policy also states that people receive brand announcements only if they follow that brand, where buying a ticket makes someone a follower."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Fatsoma

      Fatsoma is popular with student events and nightlife promoters. This page compares it with Chobble Tickets, a small open source alternative, on pricing, features and data ownership.
  - type: markdown
    content: |
      ## Open source & cheaper Fatsoma alternative

      Chobble Tickets is built in the UK by a community interest company,
      and every line of it is published under the AGPL-3.0-only licence:
      read it, fork it, or run your own copy, with your branding on the
      ticket pages instead of Chobble's. Fatsoma is closed source and does
      not publish its code.

      Fatsoma charges 10% per ticket with a £1 minimum, plus Stripe
      processing. Chobble Tickets charges £50/year or £5/month, so an
      organiser selling more than about 34 tickets at £15 in a year pays
      less.
  - type: markdown
    content: |
      ## Pricing comparison

      [Fatsoma](https://ticketing.fatsoma.com) charges 10% per ticket with a
      minimum of £1, plus Stripe payment processing fees (1.5% + 20p in the
      UK). So on a £15 ticket, that's £1.50 to Fatsoma plus roughly 43p to
      Stripe, totalling £1.93 gone per ticket before you see a penny.

      Chobble Tickets is a flat £50/year or £5/month (£25/year for charities and community
      groups) with [no per-ticket platform fees](/features/no-per-ticket-fees/). You also pay Stripe, Square or SumUp
      processing fees on top. If you sell more than about 34 tickets at £15
      each in a year, Chobble Tickets is already cheaper.

      On higher-priced tickets the gap grows quickly. A £30 ticket costs you
      £3.00 in Fatsoma platform fees alone, so 17 tickets cover a full year
      of Chobble Tickets.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Data ownership and privacy

      Fatsoma lists events in a public catalogue, so your event appears
      alongside other promoters' events. Its communication policy says people
      receive announcements about a brand only if they follow it, and buying a
      ticket makes someone a follower of that promoter.

      With Chobble Tickets, attendee data is encrypted with hybrid RSA/AES
      encryption and stays under your control. Chobble Tickets has no public
      catalogue, so your event is not listed next to anyone else's, and
      Chobble sends no marketing emails to your attendees.
  - type: markdown
    content: |
      ## Payouts

      Fatsoma pays out after your event ends, typically 2 or more days
      after. You're essentially lending Fatsoma your ticket revenue until
      they decide to release it.

      Chobble Tickets uses Stripe, Square, or SumUp directly, so payments go
      straight to your account with standard processing times. You're always
      in control of your own payment processor account.
  - type: markdown
    content: |
      ## Feature comparison


      <table class="comparison-table">
      <thead>
      <tr>
      <th scope="col">Feature</th>
      <th scope="col">Fatsoma</th>
      <th scope="col">Chobble Tickets</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <th scope="row">Online ticket sales with Stripe payment processing</th>
      <td data-label="Fatsoma">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Apple Pay and Google Pay at checkout (via Stripe)</th>
      <td data-label="Fatsoma">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">QR code scanning for check-in at the door</th>
      <td data-label="Fatsoma">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Email confirmations to attendees after booking</th>
      <td data-label="Fatsoma">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Event capacity limits</th>
      <td data-label="Fatsoma">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Free event support with no payment setup required</th>
      <td data-label="Fatsoma">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Refund processing</th>
      <td data-label="Fatsoma">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Custom questions at checkout</th>
      <td data-label="Fatsoma">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row"><strong>Rep/affiliate network</strong></th>
      <td data-label="Fatsoma">a built-in system where promoters sell tickets on your behalf and earn configurable commission per ticket type, with rep-only tickets and tracking dashboards showing which reps are driving the most sales. Reps are paid out directly through Fatsoma. See <a href="https://ticketing.fatsoma.com/f/reps">Fatsoma Reps</a></td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Consumer mobile app</strong></th>
      <td data-label="Fatsoma"><a href="https://ticketing.fatsoma.com/f/the-fatsoma-app">the Fatsoma App</a> is a consumer-facing app where attendees browse and discover events. <a href="https://ticketing.fatsoma.com/f/the-fatsoma-app">Fatsoma report</a> that 70% of their ticket sales come through the app</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Follower system</strong></th>
      <td data-label="Fatsoma">every ticket buyer automatically becomes a follower you can market to for free with future event announcements</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Push notifications</strong></th>
      <td data-label="Fatsoma"><a href="https://ticketing.fatsoma.com/f/event-announcements">event announcements</a> hit followers' phones via push notification and email</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Cross-sell</strong></th>
      <td data-label="Fatsoma"><a href="https://ticketing.fatsoma.com/f/cross-sell">promote your other events</a> on the order confirmation screen after each purchase</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Ad pixel tracking</strong></th>
      <td data-label="Fatsoma">built-in <a href="https://ticketing.fatsoma.com/f/ad-pixels">retargeting and lookalike audience</a> support for Facebook and other ad platforms</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Structured customer profiles</strong></th>
      <td data-label="Fatsoma">structured data capture (age, gender, social handles, phone, location) with <a href="https://ticketing.fatsoma.com/f/customer-questions">profile saving</a> across events (Chobble supports multiple-choice and free-text custom questions per event)</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Hidden ticket access codes</strong></th>
      <td data-label="Fatsoma">tickets hidden behind access codes for presales, VIP access, or invite-only events</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Event discovery platform</strong></th>
      <td data-label="Fatsoma">Fatsoma's website and app function as a marketplace where attendees browse and discover events, particularly strong in student and nightlife markets</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Fatsoma Chat</strong></th>
      <td data-label="Fatsoma">social sharing features within the consumer app</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Custom branded apps</strong></th>
      <td data-label="Fatsoma">on the Professional tier (~£1,500), Fatsoma builds custom branded iOS/Android apps and websites for your events</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Fast 3-tap checkout</strong></th>
      <td data-label="Fatsoma">checkout with saved card details via the Fatsoma app</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/encrypted/">Encryption at rest</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">attendee data is encrypted at rest with hybrid RSA-OAEP + AES-256-GCM</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/apple-wallet/">Apple &amp; Google Wallet tickets</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">attendees can add tickets to their phone wallet</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/rss-and-calendar-feeds/">ICS calendar feeds</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">subscribers get automatic calendar updates</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/rss-and-calendar-feeds/">RSS feeds</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">syndicate your events to feed readers</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/stripe-and-square/">Pay-what-you-want pricing</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">let attendees choose their price</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/daily-events/">Daily/recurring event support</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">built for events that repeat on a schedule with per-date capacity</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/custom-domain/">Custom domain support</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">get a host-provided subdomain instantly, or point your own domain</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/your-public-website/">Public-facing website and CMS</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">a homepage, content pages, news posts, and a contact form with spam protection, edited from the admin panel in Markdown with <a href="/features/customising-your-site/">custom CSS</a></td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/promo-codes-and-add-ons/">Promo codes, discounts, and add-ons</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">create promo codes, discount codes, surcharges, and opt-in add-ons with stock limits and a live running total</td>
      </tr>
      <tr>
      <th scope="row"><strong>Self-hosting option</strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">run the platform on selected infrastructure without a Chobble software licence fee</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/open-source/">Open source</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">inspect, modify, and contribute to the code under AGPLv3</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/custom-questions/">Custom questions</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">add multiple-choice and free-text questions to events and collect structured answers at checkout, with answers visible across the admin interface, CSV exports, and webhooks</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/public-api/">Public &amp; admin API</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">RESTful JSON API for building custom integrations, plus <a href="/features/admin-api/">authenticated admin API</a> with full event CRUD and booking creation via API keys</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/webhooks/">Webhooks</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">outbound POST on every registration</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/groups/">Event groups with tiered ticketing</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">organise related events into collections for multi-event bookings with a single checkout, and create ticket tiers sharing a venue capacity cap</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/email-providers/">Custom email providers</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">use Resend, Postmark, SendGrid, or Mailgun so emails come from your domain, not the platform's</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/email-templates/">Customisable email templates</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">full control over confirmation emails with Liquid syntax for a fully white-label experience</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/embeddable-widget/">Embeddable widget</a></strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">drop an iframe into your existing website</td>
      </tr>
      <tr>
      <th scope="row"><strong>No marketing emails to attendees</strong></th>
      <td data-label="Fatsoma">Not offered</td>
      <td data-label="Chobble Tickets">your audience stays yours</td>
      </tr>
      </tbody>
      </table>


  - type: markdown
    content: |
      ## When Fatsoma might be better

      - You're running student events or university nightlife and want
        access to Fatsoma's promoter network
      - You need a rep/affiliate system to incentivise ticket sellers
      - You want your events listed on a discovery platform aimed at
        students
      - You have very low volume (under ~50 tickets/year) and prefer paying
        per ticket over a flat fee
  - type: markdown
    content: |
      ## When Chobble Tickets might be better

      - You want predictable, flat-rate pricing with no per-ticket platform fees
      - Privacy and encryption matter to you
      - You don't want a platform marketing to your attendees
      - You're a charity, community group, artist or musician (£25/year or
        £2.50/month)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value open source and the ability to self-host
      - You're selling enough tickets that 10% per ticket adds up quickly
  - type: markdown
    content: |
      ## Who owns Fatsoma?

      Fatsoma was founded in 2005 in Manchester (originally as YourNightOut
      Limited, renamed in 2006). It is a private limited company
      ([Companies House #05495880](https://find-and-update.company-information.service.gov.uk/company/05495880))
      owned by its two remaining co-founders, Paul Stacey and Chris Pearson.
      A third co-founder, Ben Taylor, stepped back from a controlling role
      in 2019. The company has around 35 employees and raised modest
      funding from AXM Venture Capital and via a Seedrs crowdfunding
      campaign, but remains independently owned with no corporate parent.

      Fatsoma kept its independence after crowdfunding; Chobble Tickets
      started independent and stays that way, because a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) run by one person cannot sell its locked assets to an
      investor. Chobble publishes every line under AGPLv3, so the platform
      can be self-hosted by anyone who would rather not rely on Chobble
      as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in March 2026. Fees
      may change.

      - [Fatsoma pricing](https://ticketing.fatsoma.com/pricing) - 10% per ticket (minimum £1), plus Stripe processing
      - [Fatsoma for Business](https://ticketing.fatsoma.com/) - event ticketing and promotion platform
      - [Fatsoma Reps](https://ticketing.fatsoma.com/f/reps) - affiliate/rep network feature
      - [The Fatsoma App](https://ticketing.fatsoma.com/f/the-fatsoma-app) - consumer mobile app
      - [Fatsoma discover](https://www.fatsoma.com/discover) - public catalogue of events from many promoters
      - [Fatsoma communication policy](https://www.fatsoma.com/policies/communication) - announcements only from brands a person follows
      - [Chobble Tickets features](/features/)
      - [Fatsoma Limited on Companies House](https://find-and-update.company-information.service.gov.uk/company/05495880) - corporate structure
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Flat pricing, attendee data encrypted at rest and no per-ticket platform fee.
name: vs Fatsoma
---
