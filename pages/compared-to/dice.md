---
competitor_key: dice
title: DICE Alternative
meta_title: Open Source & Flat Fee DICE Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and DICE on published fees, buyer pricing, app-based tickets, event discovery, wait-list resale, attendee data and features.
permalink: /compared-to/dice/
eleventyNavigation:
  key: vs DICE
  parent: Compared To
provider_facts:
  name: DICE
  kind: ticketing
  calculator_keys:
    - dice
  last_reviewed: "2026-11-27"
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
  seating_plans: included
  summary: "An app-based live event ticketing platform with published self sign-up fees and tickets held in its app."
  notes:
    established: "DICE was founded in London in 2014 by Phil Hutcheon (Wikipedia, checked 27 November 2026)."
    public_api: "DICE documents a read-only GraphQL Ticket Holders API. A token generated in MIO authorises queries for events, tickets, orders, returns and transfers, with segmentation by genre, spend and geography. No write operations are documented. Checked 27 November 2026."
    registration_country: "DICE FM UK Ltd (company no. 14373641) is named as the contracting company in the DICE self sign-up terms, with a registered office at 100 De Beauvoir Road, London N1 4EN. DICE FM Holdings Ltd (no. 08905651) is named in DICE's standard terms and in the UK privacy policy. Checked 27 November 2026."
    ethical_basis: "DICE is part of the Fever Group, with Fever as its parent company, according to its UK privacy policy. No charity, co-operative, B Corp or community-interest structure is described in the sources reviewed. Checked 27 November 2026."
    per_ticket_platform_fee: "The UK and Ireland self sign-up terms (updated 23 November 2026) set a service fee of 8.5% plus VAT on face value, with a £1 minimum, and a transaction fee of 2.5% plus VAT of the total transaction price (face value plus service fee). DICE calls the service fee outside commission and shows buyers one all-in price, so the service fee is added to what the buyer pays. The transaction fee is deducted from the organiser's proceeds. Free tickets carry no fees. No service fee applies where the face value goes to a registered charity, but the transaction fee does. Box office and door sales carry an 8% commission with a £1 to £3.50 range plus a 3% transaction fee. Food and drink add-ons carry a 5% service fee plus the transaction fee. Partnership fees are set in a signed term sheet. Checked 27 November 2026."
    managed_pricing: "DICE charges per sale rather than by subscription. Self sign-up accounts are charged the published service and transaction fees, with the service fee added to the buyer's price. Larger or custom partnerships set Service Fees in a signed term sheet, so no single published rate applies to them. No subscription price appears in the sources reviewed. Checked 27 November 2026."
    white_label: "No white-label offering is described in the sources reviewed. Tickets are sold through the DICE app and dice.fm marketplace under the DICE brand. Checked 27 November 2026."
    custom_domain: "No custom-domain offering is described in the sources reviewed. Checked 27 November 2026."
    public_website: "Events are sold through marketplace pages in the DICE app and on dice.fm, which lists events from many promoters and has city and category browse pages. No organiser website or content management area is described. Checked 27 November 2026."
    self_hosting: "No self-hosting option is described in the sources reviewed. DICE is a hosted platform. Checked 27 November 2026."
    source_code: "No platform source code is published and no open-source claim is made in the sources reviewed. Checked 27 November 2026."
    event_marketplace: "DICE presents a browsable discovery feed of events from many promoters, with city pages such as dice.fm/browse and category pages for gigs, comedy, workshops and other events. DICE says new shows appear on fans' home screens automatically. Whether a promoter's event is listed automatically or by opt-in is not documented. Checked 27 November 2026."
    attendee_cross_marketing: "The UK privacy policy for users (updated 11 February 2026) says DICE is the data controller for people who use its platform, and that Event Partners are also controllers and own the data. DICE collects music-library, location and purchase data for recommendations, sends marketing by email and push, and passes opted-in details to Event Partners and other third parties. Checked 27 November 2026."
    seating_plans: "The UK purchase terms say some tickets are issued for a particular seat or seating area, that the buyer may choose a seating area, and that the buyer may later choose a seat number for a charge. Checked 27 November 2026."
feature_table:
    provider_link: "https://dice.fm/partners"
    shared:
      - "Online ticket sales with card payment"
      - "QR code scanning at the door"
      - "Offline scanning when the connection drops"
      - "Email confirmation to the buyer"
      - "Event capacity limits"
      - "Refund processing"
      - "Apple Pay and Google Pay at checkout"
      - "Free tickets with no platform fee"
    provider:
      - feature: "**Event discovery app**"
        detail: "DICE shows new shows on fans' home screens and recommends events from listening and purchase data. DICE says 22% of tickets sold come through recommendations."
      - feature: "**Listening-data recommendations**"
        detail: "With consent, DICE reads a fan's Spotify or Apple Music library and uses it for recommendations."
      - feature: "**Device-locked tickets**"
        detail: "Tickets are QR codes in the DICE app, tied to the buyer's phone number and activated two hours before doors. Screenshots are invalid and in-app transfers go only to DICE contacts."
      - feature: "**Wait-list resale inside the app**"
        detail: "A holder can return a sold-out ticket and receive the original price back. DICE sets the price the next buyer pays and keeps the difference, unless a partnership agrees a share."
      - feature: "**Live audience analytics**"
        detail: "MIO shows age, gender, location, taste, sales, saves, reminders and walk-ups as they happen, with automatic reports to agents, staff and bar teams."
      - feature: "**Seat and seating-area allocation**"
        detail: "Some events sell tickets for a seating area or a named seat, and the buyer may pay to choose a seat later."
      - feature: "**Dedicated door-scanning app**"
        detail: "DICE Access is a separate app for staff, with guest-list updates and a backup mode for when the connection drops."
    chobble:
      - feature: "**[Encrypted attendee data](/features/encrypted/)**"
        provider: "Not documented"
        detail: "Names, emails, phone numbers and free-text answers are encrypted with AES-256-GCM under a per-record key wrapped with RSA-OAEP. Reading them needs a keyed admin session."
      - feature: "**No app required**"
        provider: "Required"
        detail: "A booking link and QR code open in a web browser. Attendees do not need an account or a download."
      - feature: "**[Apple and Google Wallet tickets](/features/apple-wallet/)**"
        provider: "Not documented"
        detail: "An attendee can save the ticket to Apple Wallet or Google Wallet."
      - feature: "**[Flat price with no per-ticket fee](/features/no-per-ticket-fees/)**"
        provider: "Per-sale fees"
        detail: "£50/year or £5/month, or £25/year or £2.50/month for charities, community groups, artists and musicians. Chobble adds no fee of its own per ticket."
      - feature: "**[Open source](/features/open-source/)**"
        provider: "Proprietary"
        detail: "The complete product source is published under AGPL-3.0-only, with no proprietary feature tier."
      - feature: "**[White-label site and checkout](/features/white-labelling/)**"
        provider: "DICE branding"
        detail: "Booking pages, tickets and emails carry the organiser's name, domain and email address, with no Chobble branding on the public site."
      - feature: "**[Self-hosting](/features/deployment/)**"
        provider: "Not offered"
        detail: "Run the same product on your own infrastructure with no Chobble software fee."
      - feature: "**[Public website and CMS](/features/your-public-website/)**"
        provider: "Marketplace event pages"
        detail: "A homepage, event listings, news, content pages and an optional contact form, written in Markdown with [custom CSS](/features/customising-your-site/)."
      - feature: "**[Custom domain](/features/custom-domain/)**"
        provider: "Not documented"
        detail: "A free .tix.chobble.net address or your own domain, at no extra charge."
      - feature: "**[Public and admin API](/features/public-api/)**"
        provider: "Read-only"
        detail: "The public JSON API reads listings and availability without a key. An [admin API](/features/admin-api/) with a key manages events, groups, pages and bookings."
      - feature: "**[Webhooks](/features/webhooks/)**"
        provider: "Not documented"
        detail: "A POST with the booking details goes to the listing's webhook address on every booking."
      - feature: "**[Event groups and tiered tickets](/features/groups/)**"
        provider: "Not documented"
        detail: "Related listings share one public page and one checkout, and can share a capacity cap for tiered tickets."
      - feature: "**[Daily events](/features/daily-events/)**"
        provider: "Not documented"
        detail: "One listing can run every day with its own places for each date."
      - feature: "**[Pay-what-you-want pricing](/features/stripe-and-square/)**"
        provider: "Not documented"
        detail: "A listing can let the buyer choose the amount."
      - feature: "**[Custom email providers](/features/email-providers/)**"
        provider: "Not documented"
        detail: "Resend, Postmark, SendGrid or Mailgun, sending from your own address."
      - feature: "**[Liquid email templates](/features/email-templates/)**"
        provider: "Not documented"
        detail: "Rewrite the confirmation and notification emails with Liquid placeholders."
      - feature: "**[Embeddable widget](/features/embeddable-widget/)**"
        provider: "Not documented"
        detail: "Paste a script or iframe to show a booking form inside your own website."
      - feature: "**[RSS and ICS feeds](/features/rss-and-calendar-feeds/)**"
        provider: "Not documented"
        detail: "Public event feeds for calendar apps and feed readers."
      - feature: "**[No attendee marketing](/features/no-spying/)**"
        provider: "Recommendations and marketing"
        detail: "No Chobble account, mailing list or cross-promotion for attendees. The organiser can send [bulk email](/features/bulk-email/) through their own provider."
      - feature: "**Community interest company**"
        provider: "Not documented"
        detail: "Chobble CIC has an asset lock and no shareholders, so profits cannot be distributed."

blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs DICE

      DICE sells tickets for gigs, club nights, festivals and other live events through its app and website. This page compares what each service charges, how tickets reach attendees and what happens to attendee data.
  - type: markdown
    content: |
      ## Open source & flat fee DICE alternative

      Chobble Tickets is a white label ticketing platform run by a community
      interest company in the UK. Its complete source code is published under
      the AGPL-3.0-only licence, so anyone can read it, fork it or run it.
      DICE is proprietary and publishes no source code.

      DICE's self sign-up terms for the UK and Ireland set the rate: 8.5% plus
      VAT on the face value of each paid ticket, with a £1 minimum, and 2.5%
      plus VAT on the total transaction price. DICE adds the service fee to the
      price the buyer pays. Partnership agreements set their own fees.

      Chobble Tickets costs £50/year or £5/month, or £25/year or £2.50/month
      for charities, community groups, artists and musicians. Chobble adds no
      fee of its own to the ticket price. The ticket opens in a browser and can
      be saved to Apple Wallet or Google Wallet, so attendees do not need an
      app.
  - type: markdown
    content: |
      ## What each charges

      ### DICE

      DICE's UK and Ireland self sign-up terms were last updated on 23 November
      2026. They set two fees on each paid ticket. A service fee of 8.5% plus
      VAT applies to the face value, with a minimum of £1.

      A transaction fee of 2.5% plus VAT applies to the total transaction
      price, which the terms define as the face value plus the service fee.

      DICE calls the service fee outside commission: it is added to the face
      value, and the buyer pays it. Its event pages show one all-in price. On a
      £10 face value the £1 minimum applies, so the service fee and VAT at the
      standard 20% rate add £1.20 and the buyer pays £11.20.

      The transaction fee is taken from the organiser's proceeds: about £0.33
      on that ticket, leaving about £9.67.

      On a £5 ticket the £1 minimum applies: the buyer pays £6.20 and the
      organiser receives about £4.82.

      The terms say DICE does not show its fees in the app or on the website,
      and that the price the buyer sees at the start is the price they pay at
      the end. Free tickets carry no service fee or transaction fee. Where the
      face value goes to a registered charity, DICE charges no service fee but
      still charges the transaction fee.

      Add-on purchases carry the same service and transaction fees, except food
      and drink, which carry a 5% service fee plus the transaction fee. Box
      office and door sales carry an 8% commission with a £1 to £3.50 range,
      plus a 3% transaction fee.

      A partnership agreement sets its own fees in a signed term sheet. The
      self sign-up path has no annual or subscription fee. Either party can end
      a self sign-up agreement on written notice.

      ### Chobble Tickets

      Chobble Tickets charges one hosting fee: £50/year or £5/month. The
      charity, community group, artist and musician rate is £25/year or
      £2.50/month. The fee does not change with ticket volume, ticket value or
      feature use.

      Chobble adds no fee of its own to a ticket and takes no share of ticket
      income. The organiser's payment provider charges its own processing fee.
      Stripe's published UK card rate is 1.5% plus 20p per transaction.

      At a £10 face value, a Chobble Tickets buyer pays £10. After Stripe's UK
      card fee, the organiser receives about £9.65 and pays the £50 annual fee
      separately. At the same £11.20 buyer price that DICE charges, the Chobble
      Tickets organiser receives about £10.83.

      The cheaper option depends on the price the buyer pays. The table
      compares what the organiser keeps when the buyer pays the same amount.

      | Buyer pays | DICE organiser receives | Chobble Tickets organiser receives |
      | --- | --- | --- |
      | £10.00 | £8.51 | £9.65 |
      | £11.20 | £9.67 | £10.83 |

      The figures use DICE's fees including VAT and Stripe's published UK card
      rate. They assume one ticket per payment and no organiser-set booking
      fee.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Data ownership and privacy

      DICE's UK privacy policy was last updated on 11 February 2026. It says
      DICE is the data controller for people who use its platform, and that
      Event Partners are also controllers and own the data. DICE collects
      names, contact details, payment and billing details, location, purchase
      history and, with consent, the music library from Spotify or Apple Music.

      DICE uses that data to recommend events and sends marketing by email and
      push notification. At registration it asks for consent to DICE marketing
      and to marketing from Event Partners and other third parties. The policy
      says an opted-in buyer's name, email, city or address and date of birth
      may be passed to those partners, and that email addresses and other data
      may be shared with social media and search providers to target ads.

      Chobble Tickets does not create an attendee account and does not add
      buyers to a Chobble mailing list. Names, emails, phone numbers and
      free-text answers are encrypted with AES-256-GCM under a per-record key
      wrapped with RSA-OAEP, and reading them needs a keyed admin session. The
      organiser can export the attendee list as CSV and remove a person's
      contact history on request.

      Chobble's hosted service is funded by the hosting fee. It has no
      advertising income and does not use attendee records for its own
      marketing.
  - type: markdown
    content: |
      ## Payouts

      DICE collects the buyer's payment as a disclosed agent. The self sign-up
      terms say DICE pays the organiser within five business days after the
      performance, minus its fees. The same terms allow DICE to hold back up to
      5% of an event's sales for six months against chargebacks, and to agree an
      advance against sales at its discretion.

      Chobble Tickets does not collect the money. The buyer pays the
      organiser's own Stripe, Square or SumUp account when the payment clears,
      and the provider pays out on its own schedule. Chobble never holds the
      ticket income.
  - type: markdown
    content: |
      ## The app

      DICE tickets are QR codes held in the DICE app and linked to the buyer's
      phone number. The code activates two hours before the event. DICE does
      not email tickets or provide a PDF, and a screenshot is not valid.

      A ticket can be transferred in the app only to another DICE user in the
      buyer's contacts, and some events do not allow transfers.

      A buyer can complete a DICE purchase on the website as well as in the
      app. Entry still requires the app, unless the event provides a hard copy
      or staff accept identification at the door, which the purchase terms do
      not guarantee.

      Chobble Tickets emails a booking link and QR code. The link opens in a web
      browser, and the attendee can save the ticket to Apple Wallet or Google
      Wallet. No account or app is needed.

      Door staff [scan the code from a browser](/features/qr-code-check-ins/),
      and each scanner page keeps a 12-hour list of the door's tickets so
      scanning continues when the connection drops.
  - type: markdown
    content: |
      ## Feature comparison

      The table lists features documented on each provider's own pages on 27
      November 2026. "Not documented" means the feature was not found on the
      pages checked, not that it does not exist.

      DICE rows come from its partner pages, help centre, terms, privacy policy
      and API documentation. Chobble rows come from the product specifications
      and feature pages.

  - type: include
    file: feature-table.html


  - type: markdown
    content: |
      ## When DICE might be better

      - You want the platform fee added to the buyer's price, so your face
        value is not reduced
      - You want DICE's recommendation feed to find buyers you would not reach.
        DICE says 22% of tickets sold come through recommendations
      - You want device-locked tickets and wait-list resale inside the app
      - You want DICE's door tools: the DICE Access scanner, On Site
        contactless sales, Running Low alerts, cart recovery and Extras sold
        with a ticket
      - You want a read-only GraphQL API for ticket and order data
      - You sell at low volume, where the transaction fee you bear costs less
        than a £50 annual fee
      - You want an advance against sales, which DICE may offer at its
        discretion
  - type: markdown
    content: |
      ## When Chobble Tickets might be better

      - You want the buyer to pay the price you set, with no platform fee added
      - You want a fixed hosting cost that does not rise with the number or
        value of tickets
      - You want ticket money in your own payment account when the sale
        completes, not after the event
      - You do not want attendees to install an app or create an account
      - You want attendee data encrypted and no platform marketing to your
        buyers
      - You want open source code and the option to self-host
      - You want your own domain, public website and email domain
      - You want add-ons, API access, webhooks, event groups, daily events,
        pay-what-you-want pricing, wallet passes, calendar feeds or an
        embeddable widget
      - You are a charity, community group, artist or musician: £25/year or
        £2.50/month
  - type: markdown
    content: |
      ## Who owns DICE?

      DICE was founded in London in 2014 by Phil Hutcheon. Investors included
      SoftBank's Vision Fund. Fever, a live entertainment company, acquired
      DICE in June 2025.

      The UK self sign-up contract is with DICE FM UK Ltd, company 14373641,
      at 100 De Beauvoir Road, London N1 4EN.

      DICE FM Holdings Ltd, company 08905651, is named in DICE's standard terms
      at the same address.

      Chobble Tickets is run by Chobble CIC, a
      [community interest company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      registered in England, company 17050113. It was incorporated on 24
      February 2026 and has an asset lock and no shareholders, so profits
      cannot be distributed.

      Chobble started in 2024 as Stefan Burke's freelance business. The source
      code is public, and anyone can run the platform.
  - type: markdown
    content: |
      ## Sources

      The DICE pages below were checked on 27 November 2026. DICE's terms
      record their own update dates.

      - [DICE for promoters](https://dice.fm/partners) - discovery, MIO, DICE Access, On Site and Extras (checked 27 November 2026)
      - [DICE London browse page](https://dice.fm/browse/london-54d8a23438fe5d27d500001c) - events from many promoters and categories including gigs, comedy and workshops (checked 27 November 2026)
      - [DICE self sign-up terms, UK and Ireland](https://support.dice.fm/article/758-mio-ticketing-terms-and-conditions-uk) - service and transaction fees, box office fees, payout, wait list, advance and termination (updated 23 November 2026, checked 27 November 2026)
      - [DICE UK standard ticketing terms](https://support.dice.fm/article/286-standard-ticket-terms) - partnership fees set in a term sheet, and reserved seating (updated 20 November 2026, checked 27 November 2026)
      - [DICE UK purchase terms](https://dicefm.zendesk.com/hc/en-gb/articles/4412972204433-United-Kingdom-Purchase-Terms) - ticket in the app, refunds, wait list, seat selection and payment methods (updated 20 November 2026, checked 27 November 2026)
      - [DICE UK privacy policy for users](https://dicefm.zendesk.com/hc/en-gb/articles/4412947716369-United-Kingdom-Privacy-Policy-for-DICE-Users) - controller roles, data collected, marketing and ad sharing (updated 11 February 2026, checked 27 November 2026)
      - [DICE Ticket Holders API](https://partners-endpoint.dice.fm/graphql/docs/index.html) - read-only GraphQL queries (checked 27 November 2026)
      - [DICE Access on Google Play](https://play.google.com/store/apps/details?id=com.dice.check_in) - scanning, guest list and offline backup (updated 22 October 2026, checked 27 November 2026)
      - [DICE help: why tickets are stored in the app](https://dicefm.zendesk.com/hc/en-gb/articles/19414006984465-Why-your-DICE-tickets-are-stored-in-the-app) - QR code linked to a phone number (checked 27 November 2026)
      - [DICE help: can I print my tickets?](https://dicefm.zendesk.com/hc/en-gb/articles/43436806847633-Can-I-print-my-tickets) - no email or PDF ticket, activation two hours before the event (checked 27 November 2026)
      - [DICE help: reselling tickets](https://dicefm.zendesk.com/hc/en-gb/articles/18201556722961-Reselling-Tickets-on-DICE-and-Preventing-Scams) - wait-list returns, transfers and screenshots (checked 27 November 2026)
      - [DICE event page example](https://dice.fm/event/lqabnx-the-temper-trap-presents-sungazer-tour-12th-jun-fulham-palace-london-tickets) - the all-in price statement on The Temper Trap at Fulham Palace (checked 27 November 2026)
      - [DICE on Wikipedia](https://en.wikipedia.org/wiki/Dice_%28ticketing_company%29) - founding, Fever acquisition and app-only tickets (checked 27 November 2026)
      - [Chobble Tickets features](/features/) and [pricing](/pricing/) - product features and the £50/year, £5/month, £25/year and £2.50/month rates
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      One flat hosting price, no per-ticket platform fee, and tickets that open in a browser.
name: vs DICE
---
