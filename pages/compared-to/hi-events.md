---
competitor_key: hi_events
selfhosted_chobble_key: chobble_selfhosted
selfhosted_competitor_key: hi_events_selfhosted
title: Hi.Events Alternative
meta_title: UK Made & Flat Fee Hi.Events Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Hi.Events on cloud and self-hosted pricing, licences, server requirements, branding rules and event features.
permalink: /compared-to/hi-events/
eleventyNavigation:
  key: vs Hi.Events
  parent: Compared To
provider_facts:
  name: Hi.Events
  kind: ticketing
  calculator_keys:
    - hi_events
    - hi_events_selfhosted
  last_reviewed: "2026-07-25"
  registration_country: ireland
  ethical_basis:
    - independently-maintained
  per_ticket_platform_fee: percentage-plus-fixed
  managed_pricing: per-sale
  white_label: paid-add-on
  custom_domain: self-hosted
  public_website: hosted-event-pages
  self_hosting: same-product-with-conditions
  source_code: open-source-with-additional-terms
  agent_instructions: published
  local_dev_runtime: containers
  local_dev_source: bind-mounted
  local_dev_reload: hot-reload
  event_marketplace: not-documented
  attendee_cross_marketing: not-documented
  established: 2024
  public_api: included
  seating_plans: not-reviewed
  summary: "A source-published ticketing platform, hosted or self-hosted, with a per-ticket fee on its cloud service."
  notes:
    established: "The Hi.Events repository's first commit and first release tag are dated 24 May 2024 (github.com/HiEventsDev/hi.events, checked 11 August 2026)."
    local_dev_runtime: "Nine containers in docker/development/docker-compose.dev.yml: Laravel backend, two frontend variants, nginx, PostgreSQL, Redis, Mailpit, MinIO and a bucket initialiser. Backend and frontend directories are bind-mounted; the frontend containers run yarn dev watchers. Checked 30 July 2026."
    agent_instructions: "Repository root carries AGENTS.md, CLAUDE.md and .cursorrules. Checked 30 July 2026."
    ethical_basis: "Hi.Events is operated by Hi.Events Ltd. Dave Earley accounted for most repository contributions when checked on 25 July 2026; public sources reviewed did not establish its funding status."
    per_ticket_platform_fee: "The cloud ticket fee is separate from Stripe payment processing."
    managed_pricing: "Hi.Events Cloud charges a percentage and fixed amount for each paid ticket."
    white_label: "Free self-hosting requires visible attribution; a commercial licence removes it."
    custom_domain: "A self-hosted deployment can use its configured domain; hosted custom-domain support was not established."
    public_website: "Hi.Events supplies a branded organiser homepage and event pages."
    source_code: "The self-hosted code uses AGPL-3.0 with additional attribution terms."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Hi.Events

      Hi.Events is another open source ticketing platform, so this is a comparison between two projects with similar values but different approaches.
  - type: markdown
    content: |
      ## UK made & flat fee Hi.Events alternative

      Chobble Tickets is made in the UK by a community interest company, so
      prices are set in pounds and profit cannot be paid out to
      shareholders.

      Both platforms publish their source code, and both can be self-hosted.
      The hosted pricing differs: Hi.Events Cloud takes 0.75% + 40¢ per
      ticket sold, while Chobble Tickets charges a flat £50/year or £5/month
      with no per-ticket platform fee. Above roughly 116 tickets at £15 a
      year, the flat fee costs less.

      Chobble Tickets managed hosting runs on serverless edge infrastructure,
      so the organiser has no server to manage. Self-hosting either platform
      means running and updating your own infrastructure. Hi.Events
      self-hosting is AGPL-3.0 with additional attribution terms.
  - type: markdown
    content: |
      ## Two open source options

      [Hi.Events](https://hi.events) is another source-published ticketing
      platform, built with React and Laravel. Free self-hosting uses AGPL-3.0
      with additional attribution terms.

      Other open source comparisons cover
      [Pretix](/compared-to/pretix/) and
      [Swicket with alf.io](/compared-to/swicket/). The
      [open source page](/features/open-source/) describes Chobble Tickets
      without a competitor comparison.
  - type: markdown
    content: |
      ## Pricing comparison

      The pricing models are quite different:

      **Hi.Events Cloud** charges no upfront fee but takes 0.75% + 40¢ (~32p)
      per ticket sold, plus Stripe processing fees. You can pass these to the
      buyer or absorb them yourself. Free events are completely free.

      **Hi.Events Self-Hosted** has no platform fees at all. You only pay
      Stripe processing and your own server costs (roughly £16-32/month for
      hosting).

      **Chobble Tickets** charges a flat £50/year or £5/month (£25/year or
      £2.50/month for charities and community groups) with [no per-ticket
      platform fees](/features/no-per-ticket-fees/). You also pay Stripe,
      Square or SumUp processing fees on top.

      For small numbers of tickets, Hi.Events Cloud is cheaper since there's
      no annual fee. As volume grows, Chobble's flat fee becomes better
      value: if you sell more than about 116 tickets at £15 each in a year,
      you will pay less with Chobble Tickets.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison


      <table class="comparison-table">
      <thead>
      <tr>
      <th scope="col">Feature</th>
      <th scope="col">Hi.Events</th>
      <th scope="col">Chobble Tickets</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <th scope="row">Open source with self-hosting option</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Stripe payment processing</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Apple Pay and Google Pay at checkout (via Stripe)</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">QR code scanning for check-in at the door, including offline scans (Hi.Events when the connection is lost; Chobble Tickets queues browser scans for 12 hours)</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">API access for custom integrations</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Custom questions at checkout</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Event capacity limits</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Email confirmations to attendees after booking</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Free event support with no payment setup required</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Refund processing</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Recording payments taken outside checkout, such as cash or bank transfer, in the ledger</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row"><a href="/features/promo-codes-and-add-ons/">Add-ons</a> sold alongside tickets, such as merchandise, parking or meal upgrades</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Embeddable ticket widgets for your own website</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Multiple ticket types per event with shared capacity limits - both platforms support VIP, early bird, and tiered pricing with a shared attendee cap across ticket types</th>
      <td data-label="Hi.Events">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row"><strong>Drag-and-drop event page builder</strong></th>
      <td data-label="Hi.Events">a visual editor for designing event pages with custom layouts, images, and sections</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Affiliate and referral tracking</strong></th>
      <td data-label="Hi.Events">track which promoters and links are driving ticket sales with commission tracking</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Custom PDF ticket designs</strong></th>
      <td data-label="Hi.Events">design your own ticket layouts with branding, logos, and custom fields</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Multi-currency support</strong></th>
      <td data-label="Hi.Events">sell in different currencies for international events</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Donation and tiered ticket types</strong></th>
      <td data-label="Hi.Events">offer donation options and pricing tiers beyond fixed and pay-what-you-want</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Custom fee management and per-event tax reporting</strong></th>
      <td data-label="Hi.Events">add service fees, set VAT rates per event, and manage tax reporting. Chobble Tickets has <a href="/features/ledger/">one tax setting for the site</a>, not a separate rate per event or a service-fee builder</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Real-time sales dashboard</strong></th>
      <td data-label="Hi.Events">live analytics showing ticket sales, revenue, and check-in rates as they happen</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Stripe Connect instant payouts</strong></th>
      <td data-label="Hi.Events">receive payments directly to your Stripe account with faster payout times</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Custom registration questions with more field types</strong></th>
      <td data-label="Hi.Events">add free-text, date, and other custom field types beyond multiple choice per ticket type (Chobble supports multiple-choice and free-text custom questions)</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Bulk messaging by ticket type</strong></th>
      <td data-label="Hi.Events">send targeted emails and updates to attendees based on which ticket type they bought</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Waitlists</strong></th>
      <td data-label="Hi.Events">automatic notifications when places open up on sold-out events</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Ticket transfers</strong></th>
      <td data-label="Hi.Events">allow attendees to transfer their tickets to someone else</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Automatic invoicing</strong></th>
      <td data-label="Hi.Events">generate invoices for orders automatically. Chobble Tickets <a href="/features/ledger/">invoices</a> are made by the organiser, one booking at a time, for a balance still owed</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>XLSX export</strong></th>
      <td data-label="Hi.Events">export attendee and order data in Excel format (Chobble supports CSV only)</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Branded organiser homepage</strong></th>
      <td data-label="Hi.Events">a page showcasing all your events under your organiser profile</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Multiple check-in lists</strong></th>
      <td data-label="Hi.Events">create separate lists for different areas, gates, or purposes (Chobble Tickets' scanner can cover a whole <a href="/features/groups/">event group</a>)</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Multi-language support</strong></th>
      <td data-label="Hi.Events">serve the checkout in multiple languages</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Hidden/locked tickets</strong></th>
      <td data-label="Hi.Events">tickets hidden behind promo codes for presales, VIP access, or invite-only events</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Abandoned cart handling</strong></th>
      <td data-label="Hi.Events">detect and act on incomplete checkouts to recover lost sales</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Event badge designer</strong></th>
      <td data-label="Hi.Events">a browser-based badge design tool for printing attendee badges at events</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>SEO tools</strong></th>
      <td data-label="Hi.Events">per-event custom meta titles, descriptions, Open Graph images, and XML sitemap generation</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Marketing opt-in</strong></th>
      <td data-label="Hi.Events">checkbox during checkout for attendees to opt into marketing communications</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/encrypted/">Encryption at rest</a></strong></th>
      <td data-label="Hi.Events">Not documented</td>
      <td data-label="Chobble Tickets">attendee data is stored with hybrid RSA-OAEP + AES-256-GCM encryption rather than plain database rows</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/promo-codes-and-add-ons/">Surcharges and returning-customer pricing</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">beyond the promo codes and add-ons both platforms offer, a price rule can add a surcharge, scale a price, or change it for someone who has booked before</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/apple-wallet/">Apple &amp; Google Wallet tickets</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">attendees can add tickets to their phone wallet</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/rss-and-calendar-feeds/">ICS calendar feeds</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">subscribers get automatic calendar updates</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/rss-and-calendar-feeds/">RSS feeds</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">syndicate your events to feed readers</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/stripe-and-square/">Pay-what-you-want pricing</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">let attendees choose their price</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/daily-events/">Daily/recurring event support</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">built specifically for events that repeat on a schedule with per-date capacity</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/groups/">Event groups with shared capacity</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">organise related events into collections for multi-event bookings with a single checkout, and use max attendees per group to create tiered ticket types (VIP, early bird, etc.) sharing a venue cap</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/qr-code-check-ins/">Scanner logins and per-ticket check-ins</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">door staff get their own login that opens only the scanner, and check-ins are counted per place, so a door can admit part of a booking</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/ledger/">Tax on bookings</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">set one site-wide rate, added to or included in listed prices, and record it in the ledger</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/admin-api/">Admin API</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">authenticated API with API keys for full event CRUD, booking creation and reading private data</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/email-providers/">Custom email providers</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">use Resend, Postmark, SendGrid, or Mailgun so emails come from your domain, not the platform's</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/email-templates/">Customisable email templates</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">full control over confirmation emails with Liquid syntax for a fully white-label experience</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/markdown-descriptions/">Markdown event descriptions</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">write content in markdown with header image uploads</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/custom-domain/">Custom domain support</a></strong></th>
      <td data-label="Hi.Events">Self-hosted deployments only</td>
      <td data-label="Chobble Tickets">use your own domain name</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/your-public-website/">Public-facing website and CMS</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">a homepage, content pages, news posts, and a contact form with spam protection, edited from the admin panel in Markdown with <a href="/features/customising-your-site/">custom CSS</a>. Hi.Events provides event pages but not a full composable website</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/activity-logs/">Activity logs</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">full audit trail of all admin actions and booking activity</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/stripe-and-square/">Square payment support</a></strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">Chobble supports Stripe, Square, and SumUp; Hi.Events is Stripe-only</td>
      </tr>
      <tr>
      <th scope="row"><strong>No branding requirements</strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">Chobble's AGPLv3 licence has no "Powered by" requirement; Hi.Events requires visible "Powered by Hi.Events" branding unless you buy a $499+ commercial licence</td>
      </tr>
      <tr>
      <th scope="row"><strong>Serverless edge deployment</strong></th>
      <td data-label="Hi.Events">Not offered</td>
      <td data-label="Chobble Tickets">Chobble compiles to a single JS file that runs on Bunny.net edge scripts with a Bunny.net edge database, so there is no server to manage, no scaling to configure, and no database replication to maintain. Hi.Events needs a traditional server (2 CPU, 4GB RAM minimum) that you're responsible for keeping online, updated, and backed up</td>
      </tr>
      </tbody>
      </table>


  - type: markdown
    content: |
      ## Different philosophies

      The two platforms differ most in their underlying approach.

      **Hi.Events** is built on PHP/Laravel with a React frontend. It's a
      full-featured web application with a polished, modern UI aimed at
      nightclubs, festivals, conferences, and professional event organisers.
      It has instant Stripe Connect payouts and strong branding customisation.
      The self-hosted version requires a server with at least 2 CPU cores and
      4GB RAM.

      **Chobble Tickets** is built on Deno and compiles to a single
      JavaScript file that runs as an edge script on Bunny.net, with no
      traditional server required. Its database is a hosted libSQL database
      on Turso or Bunny, so there's no server to manage, no scaling to worry about, and no
      database replication to configure. It prioritises simplicity, privacy
      (hybrid RSA/AES encryption for attendee data), and predictable
      flat-rate pricing. It is aimed at community groups, schools, small
      organisers, and anyone who values data ownership over feature density.
      It is run by a Community Interest Company.
  - type: markdown
    content: |
      ## Licensing and self-hosted costs

      Both platforms are open source, but with very different licences and
      self-hosting economics:

      **Hi.Events** uses AGPL-3.0 with additional terms. The free self-hosted
      version requires a visible "Powered by Hi.Events" link. To remove
      branding, you need a commercial licence:

      - **Single Domain** - $499 (~£420) for one production domain
      - **Multi-Tenant (SaaS)** - available at higher tiers for running your
        own ticketing platform (contact Hi.Events for pricing)

      **Chobble Tickets** is open source with no branding requirements and
      no commercial licence needed. Self-host for free, modify as you like,
      and use your own domain at no extra cost.

      Hosting many organisers needs no separate tier. Rather than a paid
      multi-tenant licence, Chobble includes a
      [site builder](/features/deployment/) that provisions a separate site for
      each organiser, each with its own database and encryption key.
  - type: include
    file: price-comparator-selfhosted.html
  - type: markdown
    content: |
      The self-hosted comparison above uses the Hi.Events Single Domain
      commercial licence ($499/~£420) since most organisations will want to
      remove the "Powered by" branding. The Single Domain licence is
      perpetual for the covered version, so there is no annual fee. If
      you are happy keeping the branding, Hi.Events self-hosted is free,
      as Chobble Tickets is.
  - type: markdown
    content: |
      ## When Hi.Events might be better

      - You want a polished, modern UI with a visual page builder
      - You need affiliate tracking
      - You prefer a pay-per-ticket model with no upfront cost
      - You're running large nightlife events or festivals and want instant
        payouts
      - You need multi-currency support
      - You want a more feature-rich platform and don't mind the complexity
  - type: markdown
    content: |
      ## When Chobble Tickets might be better

      - You want predictable, flat-rate pricing with no per-ticket platform fees
      - Privacy and encryption matter to you
      - You prefer a serverless, edge-deployed platform with no server management
      - You're a charity, community group, artist or musician (£25/year or
        £2.50/month)
      - You want Apple/Google Wallet integration, calendar feeds, or RSS
      - You value a Community Interest Company over a traditional startup
  - type: markdown
    content: |
      ## Who builds Hi.Events?

      Hi.Events is operated by Hi.Events Ltd, an Irish company with company
      number 795885. Dave Earley is the main repository contributor and
      previously created Attendize. Public sources checked on 25 July 2026 did
      not establish the company's funding status.

      Free self-hosting uses AGPL-3.0 with an additional attribution
      requirement. A "Powered by Hi.Events" link must remain visible unless
      the operator buys a commercial licence. The $499 Single Domain licence
      covers the licensee's own events; providing ticketing to other organisers
      requires a different licence.

      Chobble Tickets publishes its full source with no attribution
      requirement and no commercial licence gate, because it is built by
      a one-person
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) whose assets are locked for community benefit, and anyone can
      self-host that source without depending on Chobble as a company. The
      [hosting page](/hosting/) describes its
      deployment options.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing and company information was checked again on 25 July 2026. Fees
      may change.

      - [Hi.Events pricing](https://hi.events/pricing) - 0.75% + 40¢ per ticket (cloud)
      - [Hi.Events open source / self-hosted](https://hi.events/open-source-event-ticketing) - $499 single domain commercial licence
      - [Hi.Events Single Domain licence terms](https://hi.events/single-domain-licence)
      - [Hi.Events on GitHub](https://github.com/HiEventsDev/Hi.Events)
      - [Hi.Events terms](https://hi.events/terms-of-service) - Hi.Events Ltd company details
      - [Chobble Tickets features](/features/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Flat pricing, attendee data encrypted at rest and no per-ticket platform fee.
name: vs Hi.Events
---
