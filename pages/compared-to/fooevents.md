---
layout: design-system-base.html
competitor_key: fooevents
title: Chobble Tickets vs FooEvents
meta_title: Chobble Tickets vs FooEvents | Hosted Ticketing vs a WooCommerce Plugin
meta_description: FooEvents is a WordPress plugin that adds ticketing to WooCommerce sites. Chobble Tickets is a purpose-built ticketing platform. See how they compare on pricing, features, and setup.
permalink: /compared-to/fooevents/
eleventyNavigation:
  key: vs FooEvents
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    title: Chobble Tickets vs FooEvents
    lead: >-
      FooEvents is a set of WordPress plugins that adds ticket sales to a
      WooCommerce shop. Chobble Tickets is a dedicated ticketing platform.
      Here is how they compare.

  - type: markdown
    content: |
      ## Two different approaches

      [FooEvents](https://www.fooevents.com) is a paid plugin suite for
      WordPress. You install it into a WooCommerce shop and the shop
      products become tickets. FooEvents says it has been used on more
      than 10,000 sites.

      Chobble Tickets is a standalone ticketing platform. You sign up at
      [tix.chobble.com](https://tix.chobble.com) and run events from the
      admin area, or [self-host the code](/features/open-source/) on
      your own server. There is no WordPress site required.

      Which one is right depends on whether you already run a WordPress
      shop and want ticketing to sit inside it, or whether you want
      ticketing as its own thing.

  - type: markdown
    content: |
      ## Pricing comparison

      FooEvents is sold as annual bundles. Each bundle includes the
      listed plugins plus 12 months of support and updates. The prices
      below are for a Single Domain licence - licences for multiple or
      unlimited domains cost more.

      **Basic Bundle** - $139/year (approx. £103)

      - FooEvents for WooCommerce (core)
      - FooEvents PDF Tickets
      - FooEvents Calendar
      - FooEvents Express Check-in
      - Check-ins App

      **Bookings Bundle** - $169/year (approx. £125)

      - FooEvents for WooCommerce
      - FooEvents Bookings
      - FooEvents Custom Attendee Fields
      - FooEvents PDF Tickets
      - FooEvents Calendar
      - Check-ins App

      **Premium Bundle** - $199/year (approx. £147)

      - FooEvents for WooCommerce
      - FooEvents Custom Attendee Fields
      - FooEvents PDF Tickets
      - FooEvents Calendar
      - FooEvents Express Check-in
      - FooEvents Multi-day
      - FooEvents Seating
      - Check-ins App

      **Point of Sale Bundle** - $349/year (approx. £258)

      - FooEvents for WooCommerce
      - FooEvents POS
      - FooEvents Bookings
      - FooEvents Custom Attendee Fields
      - FooEvents PDF Tickets
      - FooEvents Multi-day
      - FooEvents Seating
      - Check-ins App

      FooEvents takes no per-ticket fee and no commission. You also pay
      your own WooCommerce payment gateway fees (for example, Stripe at
      1.5% + 20p in the UK), plus WordPress hosting for your site
      (typically £5 to £25 per month for shared or managed WordPress
      hosting).

      Chobble Tickets is a flat £50/year for hosted use, with
      [no per-ticket fees](/features/no-per-ticket-fees/). You pay
      Stripe or Square processing fees on top. Charities and community
      groups pay £25/year. Self-hosting is free.

      The price comparator below uses the FooEvents Basic Bundle at
      approximately £103/year as the platform cost, with Stripe at 1.5%
      + 20p for payment processing. It does not include your WordPress
      hosting bill, which is an extra cost on top of the FooEvents
      subscription.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Feature comparison

      Not every FooEvents feature is in every bundle. Seating, Bookings,
      Multi-day, Custom Attendee Fields, and POS are separate plugins
      that only come with the higher-tier bundles - so the Basic Bundle
      covers a much smaller feature set than the POS Bundle.

      **Both platforms share some features:**

      - No commission or per-ticket platform fees
      - Unlimited ticket sending
      - QR code check-in at the door
      - Multiple ticket types per event with capacity limits
      - CSV export of attendee lists
      - Refund processing (via the payment gateway)
      - Support for free events
      - Custom domain support for event pages

  - type: markdown
    content: |
      **FooEvents has features Chobble Tickets doesn't:**

      - **WooCommerce integration** - tickets sit alongside your other
        WooCommerce products, use the same cart and checkout, and
        inherit any WooCommerce extensions you already run (shipping,
        tax, accounting, CRM)
      - **100+ payment gateways** - any WooCommerce-compatible gateway
        works, including PayPal, Square, Stripe, Authorize.net,
        regional gateways, and offline methods like bank transfer
      - **Seating plans** - the FooEvents Seating plugin provides a
        graphical seat picker for theatres and reserved seating events
        (included in the Premium and POS bundles)
      - **Bookings with time slots** - the FooEvents Bookings plugin
        lets attendees pick a specific date and time slot (included in
        the Bookings and POS bundles)
      - **Point of sale** - the FooEvents POS plugin is an in-person
        till app for selling and scanning tickets at the door (included
        in the POS bundle)
      - **Custom PDF ticket designs** - the FooEvents Stationery
        Builder lets you design your own printed tickets, badges, and
        name cards inside the WordPress admin
      - **Coupons and discount codes** - WooCommerce coupon codes work
        on ticket products
      - **Custom attendee fields** - the FooEvents Custom Attendee
        Fields plugin adds free-text, dropdown, and other field types
        to the registration form (included in the Bookings, Premium,
        and POS bundles; Chobble supports multiple-choice custom
        questions)
      - **Dedicated Check-ins mobile app** - the free FooEvents
        Check-ins app runs on iOS and Android with barcode and QR
        scanning (Chobble uses browser-based QR scanning)
      - **Translation files for 9 languages** - Afrikaans, Catalan,
        Czech, German, Spanish, French, Italian, Dutch, and Portuguese
        ship with the plugins, plus support for custom language files
      - **WordPress multisite support** - run FooEvents across multiple
        WordPress sites under one network
      - **Lifetime support option** - FooEvents offers a lifetime
        licence on request (Chobble Tickets hosted is
        subscription-only)
      - **14-day money-back guarantee** - FooEvents offers a full
        refund within 14 days of purchase
      - **Any WooCommerce extension** - because FooEvents is a
        WooCommerce plugin, you can add any of the thousands of
        WooCommerce extensions to extend checkout, marketing,
        shipping, or reporting

  - type: markdown
    content: |
      **Chobble Tickets has features FooEvents doesn't:**

      - **No WordPress required** - Chobble Tickets runs on its own,
        so you do not need to install, update, or secure a WordPress
        site just to sell tickets
      - **[End-to-end encryption](/features/encrypted/)** - Chobble
        encrypts attendee personal data at rest with a hybrid
        RSA-OAEP + AES-256-GCM scheme, so the server operator cannot
        read attendee data without your private key
      - **[Open source](/features/open-source/) under AGPLv3** - every
        line of Chobble Tickets code is public, with no paid editions
        or feature gates. FooEvents is commercial, closed-source
        software that requires a paid subscription to use
      - **[Self-host for free](/features/open-source/)** - Chobble
        Tickets can be self-hosted at no cost with every feature
        included. FooEvents has no free tier - even self-installed,
        you need to buy a bundle
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets straight to their phone wallet
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic calendar updates when new events are
        added
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate
        your events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** -
        let attendees choose their own ticket price within a range
      - **[Daily/recurring events](/features/daily-events/)** - per-date
        capacity with a calendar picker (FooEvents needs the paid
        Multi-day plugin for anything similar)
      - **[Event groups with shared capacity](/features/groups/)** -
        tie related events together with a shared attendee cap
      - **[Embeddable ticket widget](/features/embeddable-widget/)** -
        drop an iframe into any website to show your events inline
      - **[Admin API](/features/admin-api/) and
        [public API](/features/public-api/)** - create and manage
        events from scripts or external tools using API keys
      - **[Webhooks](/features/webhooks/)** - outbound POST on every
        registration, configured per event in the admin
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so confirmation emails
        come from your own domain
      - **[Customisable email templates](/features/email-templates/)** -
        full control over confirmation emails with Liquid syntax
      - **[Activity logs](/features/activity-logs/)** - full audit
        trail of admin actions and booking activity
      - **Serverless edge deployment** - Chobble Tickets compiles to a
        single JavaScript file that runs on Bunny.net edge scripts
        with an edge database, so there is no server to patch.
        FooEvents runs on your WordPress site, which you are
        responsible for keeping patched and online

  - type: markdown
    content: |
      ## Setup and hosting

      FooEvents is a plugin, not a hosted service. To use it, you
      need:

      - A WordPress site you host yourself
      - WooCommerce installed and configured
      - A payment gateway plugin for the gateway you want to use
      - The FooEvents plugins, installed via the WordPress admin
      - Ongoing WordPress, WooCommerce, and plugin updates

      This works well if you already run a WordPress site, because
      everything sits inside the admin you already use. It also means
      attendee data stays on your own server, under your control,
      rather than on a third party's.

      Chobble Tickets hosted is the opposite trade-off: you sign up,
      log in, and create an event. There is no WordPress, no
      WooCommerce, no plugin updates, and no server patching. Chobble
      encrypts attendee personal data so the operator cannot read it
      without your private key. If you want full control of the
      infrastructure, you can [self-host](/features/open-source/)
      Chobble Tickets instead - the code is AGPLv3 with no paid tier.

  - type: markdown
    content: |
      ## Licensing tiers

      FooEvents sells each bundle in three tiers: Single Domain,
      Multiple Domain, and Unlimited Domain. The prices on this page
      are the Single Domain prices. If you run more than one WordPress
      site and want to use FooEvents on all of them, you will pay
      more. You can change tier at any time from your FooEvents
      account.

      Chobble Tickets does not use per-domain licensing. The £50/year
      hosted plan covers your account, and self-hosting the AGPLv3
      code costs nothing regardless of how many sites you run.

  - type: markdown
    content: |
      ## Data and attendee privacy

      Both platforms keep attendee data out of a third-party marketing
      database. FooEvents stores attendees in your own WordPress
      database. Chobble Tickets stores attendees encrypted on its own
      infrastructure, or on your own server if you self-host.

      FooEvents relies on the security of your WordPress install.
      WordPress sites are a common target for attackers, and the
      WooCommerce database containing your attendee data sits on the
      same server as the plugins, themes, and any other WooCommerce
      products you sell. If a plugin on the site is compromised, the
      attendee database can be read. Chobble Tickets encrypts attendee
      personal data with RSA-OAEP + AES-256-GCM, so an attacker who
      reaches the database still cannot read it without the private
      key.

  - type: markdown
    content: |
      ## When FooEvents might be the better choice

      - You already run a WordPress and WooCommerce site and want
        ticketing inside it
      - You want to mix tickets with other WooCommerce products in
        the same cart
      - You need a payment gateway that Stripe and Square do not
        cover, and your gateway has a WooCommerce plugin
      - You need seating plans, in-person point of sale, or booking
        time slots
      - You need custom PDF ticket designs with printed badges and
        name cards
      - You are happy to manage WordPress, WooCommerce, and plugin
        updates yourself
      - You want the checkout to appear in Afrikaans, Catalan, Czech,
        German, Spanish, French, Italian, Dutch, or Portuguese
        without custom translation work

      ## When Chobble Tickets is the better choice

      - You do not want to run a WordPress site just to sell tickets
      - You want attendee personal data encrypted at rest
      - You want predictable flat-rate pricing (£50/year, or £25/year
        for charities and community groups)
      - You value open source code with no paid tier or feature gates
      - You want [Apple and Google Wallet](/features/apple-wallet/),
        [calendar feeds](/features/rss-and-calendar-feeds/), or an
        [embeddable widget](/features/embeddable-widget/)
      - You would rather self-host for free than pay an annual plugin
        licence
      - You prefer to work with a
        [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
        rather than a commercial plugin vendor

  - type: markdown
    content: |
      ## Who builds FooEvents?

      FooEvents is a commercial WordPress plugin from FooEvents.com.
      It is closed-source paid software sold as an annual
      subscription, with bundles from $139 to $349 per domain.
      Payments are processed in US dollars by Stripe, in South African
      rand by Paystack for South African customers, and PayPal is
      offered in most other countries.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3
      with no paid tier, and the platform can be self-hosted by anyone
      without depending on Chobble as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in April
      2026. Fees may change - check the links below for the latest
      figures.

      - [FooEvents pricing](https://www.fooevents.com/pricing/) -
        bundle prices from $139 to $349 per year
      - [FooEvents for WooCommerce](https://www.fooevents.com/products/fooevents-for-woocommerce/) -
        core plugin
      - [FooEvents POS](https://www.fooevents.com/products/fooevents-pos/) -
        point of sale plugin
      - [FooEvents Bookings](https://www.fooevents.com/products/fooevents-bookings/) -
        time slot bookings plugin
      - [FooEvents Seating](https://www.fooevents.com/products/fooevents-seating/) -
        seating plans plugin
      - [FooEvents Multi-day](https://www.fooevents.com/products/fooevents-multi-day/) -
        multi-day event plugin
      - [FooEvents Custom Attendee Fields](https://www.fooevents.com/products/fooevents-custom-attendee-fields/) -
        custom registration fields plugin
      - [FooEvents refund policy](https://www.fooevents.com/refunds/) -
        14-day money-back guarantee
      - [FooEvents 24-hour demo](https://fooevents.com/24-hour-demo/) -
        test the plugin in a sandbox
      - [Chobble Tickets features](/features/)

  - type: cta
    title: Try Chobble Tickets
    description: Flat annual pricing, encrypted attendee data, and no WordPress site required.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
