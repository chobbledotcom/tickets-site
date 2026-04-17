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
      products become tickets. It has been used on more than 10,000
      WordPress sites.

      Chobble Tickets is a standalone ticketing platform. You sign up at
      [tix.chobble.com](https://tix.chobble.com) and run events from the
      admin area, or [self-host the code](/features/open-source/) on your
      own server. There is no WordPress site required.

      Which one is right depends on whether you already run a WordPress
      site and want ticketing to sit inside it, or whether you want
      ticketing as its own thing.

      ## Pricing comparison

      FooEvents is sold as annual bundles. The prices below include 12
      months of support and updates, after which you renew to keep
      receiving updates:

      - **Basic Bundle** - $139/year (approx. £110) - FooEvents for
        WooCommerce, PDF Tickets, Calendar, Express Check-in, and the
        Check-ins App
      - **Bookings Bundle** - $169/year (approx. £135) - adds Bookings
        and Custom Attendee Fields
      - **Premium Bundle** - $199/year (approx. £160) - adds Seating and
        Multi-day
      - **Point of Sale Bundle** - $349/year (approx. £275) - adds the
        POS plugin and Bookings

      FooEvents takes no per-ticket fee and no commission. You also pay
      your own WooCommerce payment gateway fees (for example, Stripe at
      1.5% + 20p in the UK), plus WordPress hosting for your site
      (typically £5 to £25 per month for shared or managed WordPress
      hosting).

      Chobble Tickets is a flat £50/year for hosted use, with
      [no per-ticket fees](/features/no-per-ticket-fees/). You pay Stripe
      or Square processing fees on top. Charities and community groups pay
      £25/year. Self-hosting is free.

      The price comparator below uses the FooEvents Basic Bundle at
      approximately £110/year as the platform cost, with Stripe at 1.5%
      + 20p for payment processing. It does not include your WordPress
      hosting bill, which is an extra cost on top of the FooEvents
      subscription.

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Feature comparison

      **Both platforms share some features:**

      - No commission or per-ticket platform fees
      - Unlimited ticket sending
      - QR or barcode check-in with a free mobile app
      - Multiple ticket types per event with capacity limits
      - Coupons and discount codes
      - Custom registration questions
      - CSV export of attendee lists
      - Refund processing (via the payment gateway)
      - Support for free events
      - Custom branded tickets
      - Recurring and multi-day event support

      **FooEvents has features Chobble Tickets doesn't:**

      - **WooCommerce integration** - tickets sit alongside your other
        WooCommerce products, use the same cart and checkout, and inherit
        any WooCommerce extensions you already run (shipping, tax,
        accounting, CRM)
      - **100+ payment gateways** - any WooCommerce-compatible gateway
        works, including PayPal, Square, Stripe, Authorize.net, regional
        gateways, and offline methods like bank transfer
      - **Seating plans** - the FooEvents Seating plugin provides a
        graphical seat picker for theatres and reserved seating events
        (included in the Premium and POS bundles)
      - **Bookings with time slots** - the FooEvents Bookings plugin lets
        attendees pick a specific date and time slot (included in the
        Bookings and POS bundles)
      - **Point of sale** - the FooEvents POS plugin is an in-person till
        app for selling and scanning tickets at the door (included in the
        POS bundle)
      - **Built-in stationery builder** - design printed tickets, badges,
        and name cards inside the WordPress admin
      - **Translation files for 9 languages** - Afrikaans, Catalan,
        Czech, German, Spanish, French, Italian, Dutch, and Portuguese
        ship with the plugins, plus support for custom language files
      - **WordPress multisite support** - run FooEvents across multiple
        WordPress sites under one network
      - **Lifetime support option** - you can contact FooEvents for a
        custom lifetime licence (Chobble Tickets hosted is
        subscription-only)
      - **14-day money-back guarantee** - FooEvents offers a full refund
        within 14 days of purchase
      - **Any WooCommerce extension** - because FooEvents is a
        WooCommerce plugin, you can add any of the thousands of
        WooCommerce extensions to extend checkout, marketing, shipping,
        or reporting

      **Chobble Tickets has features FooEvents doesn't:**

      - **No WordPress required** - Chobble Tickets runs on its own, so
        you do not need to install, update, or secure a WordPress site
        just to sell tickets
      - **[End-to-end encryption](/features/encrypted/)** - attendee
        personal data is encrypted at rest with hybrid RSA-OAEP +
        AES-256-GCM, so the server operator cannot read attendee data
        without your private key
      - **[Open source](/features/open-source/) under AGPLv3** - every
        line of Chobble Tickets code is public, with no paid editions or
        feature gates. FooEvents is commercial, closed-source software
        that requires a paid subscription to use
      - **[Self-host for free](/features/open-source/)** - Chobble
        Tickets can be self-hosted at no cost with every feature
        included. FooEvents has no free tier - even self-installed, you
        need to buy a bundle
      - **[Apple & Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets straight to their phone wallet
      - **[ICS calendar feeds](/features/rss-and-calendar-feeds/)** -
        subscribers get automatic calendar updates when new events are
        added
      - **[RSS feeds](/features/rss-and-calendar-feeds/)** - syndicate
        your events to feed readers
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** -
        let attendees choose their own ticket price within a range
      - **[Event groups with shared capacity](/features/groups/)** - tie
        related events together under a single booking with a shared
        attendee cap
      - **[Embeddable ticket widget](/features/embeddable-widget/)** -
        drop an iframe into any website to show your events inline
      - **[Admin API](/features/admin-api/) and
        [public API](/features/public-api/)** - create and manage events
        from scripts or external tools using API keys
      - **[Webhooks](/features/webhooks/)** - outbound POST on every
        registration, configured per event in the admin
      - **[Custom email providers](/features/email-providers/)** - use
        Resend, Postmark, SendGrid, or Mailgun so confirmation emails
        come from your own domain
      - **[Customisable email templates](/features/email-templates/)** -
        full control over confirmation emails with Liquid syntax
      - **[Custom domain](/features/custom-domain/) support** - point
        your own domain at a Chobble Tickets site
      - **[Activity logs](/features/activity-logs/)** - full audit trail
        of admin actions and booking activity
      - **Serverless edge deployment** - Chobble Tickets compiles to a
        single JavaScript file that runs on Bunny.net edge scripts with
        an edge database, so there is no server to patch. FooEvents runs
        on your WordPress site, which you are responsible for keeping
        patched and online

      ## Setup and hosting

      FooEvents is a plugin, not a hosted service. To use it, you need:

      - A WordPress site you host yourself
      - WooCommerce installed and configured
      - A payment gateway plugin for the gateway you want to use
      - The FooEvents plugins, installed via the WordPress admin
      - Ongoing WordPress, WooCommerce, and plugin updates

      This works well if you already run a WordPress site, because
      everything sits inside the admin you already use. It also means
      attendee data stays on your own server, under your control, rather
      than on a third party's.

      Chobble Tickets hosted is the opposite trade-off: you sign up, log
      in, and create an event. There is no WordPress, no WooCommerce, no
      plugin updates, and no server patching. Attendee data is encrypted
      on Chobble's infrastructure so the operator cannot read it without
      your private key. If you want full control of the infrastructure,
      you can [self-host](/features/open-source/) Chobble Tickets
      instead - the code is AGPLv3 with no paid tier.

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
      reaches the database still cannot read it without the private key.

      ## When FooEvents might be the better choice

      - You already run a WordPress and WooCommerce site and want
        ticketing inside it
      - You want to mix tickets with other WooCommerce products in the
        same cart
      - You need a payment gateway that Stripe and Square do not cover,
        and your gateway has a WooCommerce plugin
      - You need seating plans, in-person point of sale, or booking time
        slots
      - You are happy to manage WordPress, WooCommerce, and plugin
        updates yourself
      - You want the checkout to appear in Afrikaans, Catalan, Czech,
        German, Spanish, French, Italian, Dutch, or Portuguese without
        custom translation work

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

      FooEvents is a commercial WordPress plugin from FooEvents.com. It
      is closed-source paid software sold as an annual subscription,
      with bundles from $139 to $349. Payments are processed in US
      dollars by Stripe, in South African rand by Paystack for South
      African customers, and PayPal is offered in most other countries.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a UK legal structure that locks the company's assets for
      community benefit. All of Chobble's code is public under AGPLv3
      with no paid tier, and the platform can be self-hosted by anyone
      without depending on Chobble as a company.

  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in April 2026.
      Fees may change - check the links below for the latest figures.

      - [FooEvents pricing](https://www.fooevents.com/pricing/) -
        bundle prices from $139 to $349 per year
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
