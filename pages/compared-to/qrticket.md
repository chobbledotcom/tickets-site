---
competitor_key: qrticket
title: QRTicket Alternative
meta_title: Open Source & Flat Fee QRTicket Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and QRTicket on per-ticket fees and who pays them, payment methods, seating plans, attendee data and source licensing.
permalink: /compared-to/qrticket/
eleventyNavigation:
  key: vs QRTicket
  parent: Compared To
provider_facts:
  name: QRTicket
  kind: ticketing
  calculator_keys:
    - qrticket
  last_reviewed: "2026-08-08"
  registration_country: germany
  ethical_basis:
    - owner-led
  per_ticket_platform_fee: fixed
  managed_pricing: per-sale
  white_label: not-documented
  custom_domain: not-documented
  public_website: hosted-event-pages
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-found
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: not-documented
  attendee_cross_marketing: not-documented
  notes:
    registration_country: "QRTicket is published by Franz Schuster, named in the Impressum as the responsible party and in the Datenschutzerklärung as the party responsible for data protection. The Impressum lists no company name or registration number beyond the operator's name and a German phone number."
    ethical_basis: "The Impressum names a single person as responsible for the service, with no company, registration number or ownership structure described. Reviewed 8 August 2026."
    per_ticket_platform_fee: "QRTicket charges €0.90 (incl. VAT) per ticket sold. By default the ticket buyer pays the fee; the organiser can choose to absorb it. Cancelled tickets and vouchers carry no fee. Benefit (Benefiz) events are free of charge provided all tickets are free."
    managed_pricing: "There is no registration fee, no annual fee and no minimum turnover. QRTicket is paid from the fee on each ticket sold."
    white_label: "Event pages carry QRTicket branding. The site does not document removing it. Events can be embedded on an organiser's own website with a single HTML tag."
    custom_domain: "No custom-domain option is documented. Ticket pages run on qrticket.de, and the embed module puts the ticket shop on the organiser's own site."
    public_website: "Event pages and the ticket shop run on qrticket.de. An embed module (one HTML tag) shows events with a description, image and buy button on the organiser's own website."
    self_hosting: "QRTicket is a fully managed web platform. No self-hosting option is offered."
    source_code: "QRTicket does not publish its source code."
    agent_instructions: "No agent or contributor instructions were found in the sources reviewed."
    event_marketplace: "The QRTicket site has no public event-discovery area or search. Buyers reach events through links or embeds the organiser shares."
    attendee_cross_marketing: "No statement was found on whether QRTicket markets to ticket buyers. Its published privacy policy covers the marketing website (cookies, server logs and Matomo) and the contact form, and does not describe attendee data handling on the ticket platform."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs QRTicket

      QRTicket is a German ticketing system, free for organisers because the ticket buyer pays a fee of €0.90 per ticket by default. This page compares it to Chobble Tickets on pricing, who pays what, features and data handling.
  - type: markdown
    content: |
      ## Open source & flat fee QRTicket alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company. Its source code is published under the
      AGPL-3.0-only licence, so anyone can read it, fork it, or run their own
      copy. QRTicket does not publish its source code.

      QRTicket is free for organisers to register and has no annual fee. Its
      income comes from a fee of €0.90 (incl. VAT) per ticket sold, which the
      ticket buyer pays by default. Chobble Tickets charges £50/year or
      £5/month whatever the volume, and adds no fee to any ticket, though the
      organiser pays Stripe, Square or SumUp processing separately.
  - type: markdown
    content: |
      ## Pricing comparison

      [QRTicket](https://qrticket.de) has no registration fee, no annual fee
      and no minimum turnover. It charges €0.90 (incl. VAT) for each ticket
      sold. By default the ticket buyer pays that fee on top of the ticket
      price, which makes QRTicket free for the organiser. The organiser can
      instead choose to absorb the fee itself.

      Ticket money goes directly to the organiser's own bank or PayPal
      account, so QRTicket never holds it. Buyers can pay by bank transfer,
      which costs the organiser nothing but means tickets are sent only after
      the organiser confirms the money has arrived. Buyers can also pay by
      PayPal, which sends tickets immediately but charges the organiser €0.39
      + 3.0% per payment (as of April 2022) unless that fee is passed to the
      buyer too.

      Benefit events (Benefiz-Veranstaltungen) are free of charge, provided
      every ticket on them is free. Cancelled tickets and vouchers carry no
      fee. QRTicket sends the organiser an invoice monthly after the event.

      Chobble Tickets is a flat £50/year or £5/month, with
      [no per-ticket platform fees](/features/no-per-ticket-fees/). Community
      groups, charities, artists and musicians pay £25/year on the annual
      plan. Payment processing is charged by your own Stripe, Square or SumUp
      account.

      If the organiser absorbs QRTicket's fees, each ticket costs about
      £1.40 at a £10 ticket price or £1.55 at £15 (QRTicket's €0.90 plus
      PayPal's €0.39 + 3.0%). Against £50 a year plus Stripe's 1.5% + 20p,
      the two cross over at around 45 to 50 paid tickets a year: below that,
      QRTicket costs less, and above that the flat Chobble price costs less.
      If the buyer pays QRTicket's fees instead, QRTicket is free to the
      organiser at any volume, but every ticket buyer pays roughly €1.30 or
      more on top of the ticket price.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison

      QRTicket has been built around the needs of small German event
      organisers, clubs and benefit events, and its feature set reflects
      that: seat plans, paper tickets, sales outlets and season passes sit
      beside a free check-in web app. Chobble Tickets covers a similar job
      with card checkout, a public website and data you control. Here is the
      breakdown:
  - type: markdown
    content: |
      ### Both platforms share some features

      - Online ticket sales with QR-coded tickets that buyers print or show
        on a phone
      - Door check-in by scanning QR codes with a phone, without a native
        app (QRTicket's web app and Chobble's browser-based scanner)
      - Multiple ticket types or variants with different prices
      - Discounted and free tickets (QRTicket through variants and vouchers;
        Chobble Tickets through promo codes, modifiers and free ticket types)
      - Refunds and cancellations from the admin panel (QRTicket charges no
        fee on cancelled tickets)
      - Sales statistics (QRTicket shows guests checked in and visitors still
        to arrive; Chobble Tickets reports on tickets sold, revenue, check-ins
        and refunds)
      - Email to attendees after booking (QRTicket has an automatic reminder
        before the event; Chobble Tickets has bulk email campaigns)
      - Embedding the booking page on the organiser's own website (QRTicket
        has a one-HTML-tag module; Chobble Tickets has an
        [order widget](/features/order-widget/))
      - Ticket income paid directly to the organiser's own account, not held
        by the platform
      - Free events for buyers and organiser alike
  - type: markdown
    content: |
      ### QRTicket has features Chobble Tickets doesn't

      - **Allocated seating** - a seat-plan editor with numbered rows and
        seats, and up to three price categories per ticket variant (Chobble
        Tickets has no seat plans)
      - **Sales outlets** - give third parties such as tourist offices or
        venues their own login to sell and print tickets, with commissions
        set in euros or percent
      - **Paper tickets** - print tickets on DIN A4 or a label printer, or
        ship printed tickets with configurable shipping costs
      - **Bank transfer payments** - buyers pay the organiser directly by
        transfer, with no card option (Chobble Tickets uses Stripe, Square
        or SumUp card checkout)
      - **Season and multi-entry tickets** - 10-entry cards and season
        tickets valid for a set period, each scanned per use
      - **Voucher module** - sell vouchers by link that buyers redeem at
        checkout, with no fee on vouchers
      - **Advertising banners on tickets** - attach a JPG banner
        (180mm x 90mm) to tickets to promote a future event
      - **Info PDFs with ticket emails** - attach up to two PDFs
        automatically to every ticket email
      - **Event reminder email** - buyers get a reminder with their ticket
        link a set number of days before the event
      - **Online seminar mode** - sell places on online seminars by sending a
        link and instructions instead of a QR ticket
      - **Benefit events free** - no fee on German charity events where all
        tickets are free
      - **German-language service** - the platform and support are in German,
        with phone support and tutorial videos
  - type: markdown
    content: |
      ### Chobble Tickets has features QRTicket doesn't

      - **[Open source](/features/open-source/)** - the complete product
        source is published under AGPL-3.0-only. QRTicket is proprietary
        software
      - **Self-hosting option** - run the platform on your own
        infrastructure without a Chobble software licence fee
      - **Flat pricing** - £50/year or £5/month with no per-ticket platform
        fees, so costs stay the same as volume grows
      - **[Encryption at rest](/features/encrypted/)** - attendee data is
        encrypted, and only the keys held by your own administrator accounts
        unlock it
      - **[Stripe, Square and SumUp](/features/stripe-and-square/)** card
        checkout. QRTicket offers only PayPal or bank transfer
      - **[Apple Wallet and Google Wallet passes](/features/apple-wallet/)** -
        attendees can add tickets to a phone's wallet
      - **[Your own custom domain](/features/custom-domain/)** - ticket pages
        run on your own web address. QRTicket pages run on qrticket.de
      - **[Public-facing website and CMS](/features/your-public-website/)** -
        a homepage, content pages, news posts and a contact form, edited from
        the admin panel
      - **[White labelling](/features/white-labelling/)** - remove platform
        branding. QRTicket does not document removing its branding
      - **[Custom email providers](/features/email-providers/)** and
        [Liquid email templates](/features/email-templates/) - confirmation
        emails come from your domain with the wording you choose
      - **[SMS messages](/features/sms-messages/)** - text attendees about
        their booking
      - **[Deposits and balance payments](/features/deposits-and-balance-payments/)** -
        take a deposit now and the balance later
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - let
        buyers enter their own price above a minimum
      - **[Subscribable calendar and RSS feeds](/features/rss-and-calendar-feeds/)** -
        one feed listing all your events
      - **[Admin API](/features/admin-api/)**,
        **[public API](/features/public-api/)** and
        **[webhooks](/features/webhooks/)** - QRTicket does not document an
        API
      - **[Packages](/features/packages/)** and
        [price-linked custom questions](/features/custom-questions/) - bundle
        listings or change prices by answer
      - **[CSV export](/features/csv-export/)** of sales and attendee data,
        [complete database backups](/features/backups/) and
        [event setup export](/features/catalogue-import-export/) you can move
        to another Chobble Tickets host
      - **English-language platform** - QRTicket is German-language only
      - **Community Interest Company** - run by a CIC, a UK legal structure
        that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## Data ownership

      QRTicket's published privacy policy covers its marketing website: it
      describes cookies, server logfiles, a self-hosted Matomo visitor
      statistics tool, and the contact form. It does not describe how the
      ticket platform stores or uses attendee data, and the site gives no
      statement about whether QRTicket markets to ticket buyers.

      Ticket money never passes through QRTicket; buyers pay the organiser's
      bank or PayPal account directly. The service is run by one person,
      Franz Schuster, who is named as responsible for data protection under
      the GDPR in the Impressum and privacy policy. The data is held in a
      proprietary system you cannot run yourself.

      With Chobble Tickets, attendee data is encrypted at rest. Only the
      keys held by your own administrator accounts, and the optional recovery
      account you can enable, unlock it. The platform is open source under
      AGPLv3, so you can self-host it and stop depending on Chobble as your
      host.
  - type: markdown
    content: |
      ## When QRTicket might be the better choice

      - You want a ticketing service with no cost to you, and you are happy
        for ticket buyers to pay the fees (QRTicket's default)
      - You run a German benefit or charity event with free tickets, which
        is free of charge
      - You sell fewer than about 45 to 50 paid tickets a year and would
        absorb QRTicket's fees yourself
      - You need allocated seating or seat plans
      - You sell tickets through physical outlets such as tourist offices,
        or need paper tickets printed on a label printer
      - You want buyers to pay you directly by bank transfer
      - You need season passes or multi-entry tickets such as 10-entry cards
      - You want a platform in German with German phone support
      - You want to attach advertising banners or info PDFs to tickets
        automatically
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You do not want ticket buyers to pay a per-ticket fee on top of the
        ticket price
      - You want a fixed price that does not change with ticket volume or
        value
      - You sell more than about 45 to 50 paid tickets a year and would pay
        QRTicket's fees yourself
      - You want card payments through Stripe, Square or SumUp (QRTicket
        offers only PayPal or bank transfer)
      - You want buyers to get tickets instantly by card rather than after a
        manual bank-transfer confirmation
      - You want attendee data encrypted at rest, and open source code you
        can read, fork or self-host
      - You want a [custom domain](/features/custom-domain/), a
        [public website](/features/your-public-website/), SMS messages,
        [deposits](/features/deposits-and-balance-payments/),
        pay-what-you-want pricing, Apple and Google Wallet passes, or an
        [API](/features/admin-api/)
      - You want [CSV exports](/features/csv-export/) and complete
        [database backups](/features/backups/) so your data is not locked in
      - You are a charity, community group, artist or musician (£25/year on
        the annual plan)
  - type: markdown
    content: |
      ## Who runs QRTicket?

      QRTicket is published by Franz Schuster, who is named in the Impressum
      as the responsible party and in the privacy policy as responsible for
      data protection. The Impressum lists no company name or registration
      number beyond the operator's name and a German phone number
      (+49 8592 1355). The service presents itself as a one-person
      operation.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under
      [AGPL-3.0-only](/features/open-source/), and the platform can be
      self-hosted by anyone without depending on Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was checked on 8 August 2026
      against the live QRTicket site. Fees may change. Check the links below
      for the latest figures.

      - [QRTicket homepage](https://qrticket.de/) - €0.90 (incl. VAT) per ticket, buyer pays by default, no registration or annual fee, benefit events free, vouchers free, monthly invoicing
      - [QRTicket payment methods](https://qrticket.de/zahlung.php) - bank transfer or PayPal, PayPal fees of €0.39 + 3.0% (as of April 2022), organiser chooses who pays the fees
      - [QRTicket money to your account](https://qrticket.de/ticketzahlungen.php) - ticket income goes directly to the organiser's bank or PayPal account
      - [QRTicket ticket control](https://qrticket.de/einlasskontrolle.php) - free browser web app, series scanning, check-in and check-out, statistics
      - [QRTicket print@home](https://qrticket.de/printathome.php) - A4 print@home, PDF tickets, ticket shipping with shipping costs
      - [QRTicket seat plans](https://qrticket.de/platzkarten.php) - seat-plan editor, three price categories per variant
      - [QRTicket ticket variants](https://qrticket.de/ticketvarianten.php) - unlimited variants with initials
      - [QRTicket sales outlets](https://qrticket.de/verkaufsstellen.php) - outlets with their own login and commissions in euros or percent
      - [QRTicket online seminars](https://qrticket.de/onlineseminare.php) - sell online seminar places by link
      - [QRTicket Impressum](https://qrticket.de/impressum.php) - published by QRTicket, responsible party Franz Schuster
      - [QRTicket privacy policy](https://qrticket.de/datenschutz.php) - GDPR, cookies, server logs, Matomo, responsible party Franz Schuster
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
name: Open Source & Flat Fee QRTicket Alternative | Chobble Tickets
---
