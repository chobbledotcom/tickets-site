---
title: Bands - Chobble Tickets
meta_title: Ticketing and Merch Sales for Bands | Chobble Tickets
meta_description: Sell gig tickets and band merch from one site, styled with your own CSS, for £25 a year or £2.50 a month with no Chobble per-ticket fee.
permalink: /perfect-for/bands/
eleventyNavigation:
  key: Bands
  parent: Perfect For
  order: 35
blocks:
  - type: hero
    class: gradient
    badge: For bands and solo musicians
    content: |-
      # Sell gig tickets and merch from one site

      A band can sell tickets, records and shirts through one Chobble
      Tickets site and one payment account. Musicians pay half the
      standard price for managed hosting, which is £25 a year or £2.50 a
      month.
    buttons:
      - text: Start for £5
        href: https://tix.chobble.com/listings
        variant: primary
        size: lg
      - text: See pricing
        href: /pricing/
        variant: secondary
        size: lg
  - type: stats
    dark: true
    items:
      - value: £25
        label: A year for musicians, half the standard price
      - value: £0
        label: Chobble fee on each ticket or item
      - value: One order
        label: Tickets and merch paid for together
      - value: Your CSS
        label: Colours, fonts and spacing you write
  - type: split-icon-links
    content: |
      ## Tickets and merch in the same system

      Every item a band sells is a listing. A gig is an event listing with
      a date, a capacity and QR code tickets, and a shirt or a record is a
      physical product listing, where checkout collects the buyer's
      delivery address. A download is a digital product listing with a
      [file attachment](/features/images/), which the buyer fetches through
      a signed link.

      A fan can put a ticket and a shirt in one order and pay once. The
      band sees both sales in one admin area, one
      [ledger](/features/ledger/) and one
      [CSV export](/features/csv-export/), and the money goes to one
      Stripe, Square or SumUp account.

      A capacity on a product listing works as a stock limit, so 40 copies
      of a record stop selling at 40. Each listing can carry several
      pictures.
    figure_items:
      - icon: hugeicons:ticket-01
        text: Gigs with QR code tickets.
      - icon: hugeicons:package
        text: Shirts and records, with a delivery address.
      - icon: hugeicons:shopping-cart-01
        text: One order, paid once.
  - type: split-icon-links
    reverse: true
    content: |
      ## Half price for bands

      Managed hosting costs £50 a year or £5 a month. Musicians and
      artists get 50% off either way of paying, which makes it £25 a year
      or £2.50 a month.

      That price covers every gig, every product and every sale in the
      year. Chobble adds
      [no per-ticket platform fee](/features/no-per-ticket-fees/) and takes
      no cut of merch, so a £12 ticket costs the fan £12 and a £20 shirt
      costs £20.

      The payment provider's own charge is separate. Stripe's standard UK
      card rate is 1.5% + 20p on each payment, paid by the band to Stripe.
    figure_items:
      - icon: hugeicons:discount-tag-02
        text: £25 a year or £2.50 a month.
      - icon: hugeicons:money-receive-square
        text: No Chobble fee on tickets or merch.
      - icon: hugeicons:credit-card
        text: Card fees go to your payment provider.
  - type: split-icon-links
    content: |
      ## A site that looks like the band

      The [custom CSS](/features/light-and-dark-themes/) setting takes
      CSS, the code that controls how a web page looks. It loads on every
      page after the standard stylesheet, so it can change the colours,
      fonts and spacing of the public site, the booking pages and the
      ticket pages.

      A band that has a designer, or a member who writes CSS, can match
      the site to the artwork of the current release and change it again
      for the next one. Fonts from fonts.bunny.net load without extra
      setup.

      The site can also carry a header image, the band's own
      [domain](/features/custom-domain/) and
      [no Chobble branding](/features/white-labelling/). A light theme and
      a dark theme are built in for a band that does not want to write
      any CSS.
    figure_items:
      - icon: hugeicons:paint-board
        text: Your own colours and fonts.
      - icon: hugeicons:image-01
        text: A header image on every page.
      - icon: hugeicons:global
        text: Your own domain, with no Chobble branding.
  - type: features
    dark: true
    intro_content: "## Features for bands"
    items:
      - icon: hugeicons:copy-01
        description: Copy one date to set up the next town on a tour, and put the whole run on a single page as a group.
        name: <a href="/features/duplicate-events/">Duplicate listings</a>
      - icon: hugeicons:coins-01
        description: Let fans pay any amount above a minimum, for a donation-based gig or a pay-what-you-want download.
        name: <a href="/features/stripe-and-square/">Pay what you want</a>
      - icon: hugeicons:repeat
        description: Sell a fan club subscription that Stripe charges again every week, month or year.
        name: <a href="/features/purchasable-events/">Subscriptions</a>
      - icon: hugeicons:tag-01
        description: Offer a promo code for the mailing list, or an optional extra such as a signed copy, at checkout.
        name: <a href="/features/promo-codes-and-add-ons/">Promo codes and add-ons</a>
      - icon: hugeicons:mail-send-01
        description: Email everyone who booked a gig, or everyone who has ever bought from the band, through your own email provider.
        name: <a href="/features/bulk-email/">Bulk email</a>
      - icon: hugeicons:qr-code
        description: Scan tickets at the door with a phone camera, and add guest list places and cash sales by hand.
        name: <a href="/features/qr-code-check-ins/">QR code check-in</a>
  - type: markdown
    content: |
      ## What it does not do

      Chobble Tickets does not connect to any postage provider, so it has
      no live shipping rates, no postage labels and no parcel tracking. A
      band can set its own postage prices with a
      [custom question](/features/custom-questions/), such as "Where is
      this going?", where each answer adds the charge the band chose for
      it. The band then posts each order itself.

      A product with sizes is not one listing with a size menu that tracks
      stock for each size. A band that needs a stock count for each size
      makes one listing for each.

      Subscriptions need Stripe, and a subscription is bought in an order
      of its own. There is no fan marketplace and no music streaming, so
      sales come from the band's own site, mailing list and social media.
  - type: markdown
    content: |
      ## Related uses

      [Performers and artists](/perfect-for/performers-and-artists/)
      covers comedians, theatre companies and visual artists as well as
      musicians. [Music concerts](/perfect-for/music-concerts/) covers a
      single concert in more detail, and
      [music venues](/perfect-for/music-venues/) covers the rooms bands
      play in.
  - type: markdown
    content: |
      ## Other options you might be considering

      You might be considering [DICE](/compared-to/dice/), a gig discovery
      app, or [Eventbrite](/compared-to/eventbrite/), a marketplace with
      its own audience. Each comparison covers pricing, features and attendee data, and the [full list](/compared-to/) names every platform checked so far.
  - type: cta
    button:
      text: Start for £5
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Put your next gig and your merch on sale

      Managed hosting costs £50 a year or £5 a month. Musicians pay £25 a
      year or £2.50 a month.
name: Bands
---
