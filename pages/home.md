---
title: Chobble Tickets - Open Source Event Ticketing
meta_title: Chobble Tickets - Open Source Event Ticketing
meta_description: Ticketing, equipment hire, and booking software from £50/year or £5/month with no per-ticket fees or commission. Open source, encrypted, and self-hostable.
permalink: /
eleventyNavigation:
  key: Home
  order: 0
blocks:
  - type: hero
    class: gradient
    badge: Open Source & Encrypted
    content: |-
      # Open source event ticketing with no per-ticket fees

      Chobble Tickets is an open source platform for event tickets, equipment hire, and session bookings. It charges a flat fee, adds no booking fees or commission, and collects no attendee data.
    buttons:
      - text: Sign Up
        href: https://tix.chobble.com/ticket/register
        variant: primary
        size: lg
      - text: GitHub
        href: https://github.com/chobbledotcom/tickets
        variant: secondary
        size: lg
  - type: stats
    dark: true
    items:
      - value: £50
        label: Per Year (or £5/month)
      - value: ∞
        label: Events & Tickets
      - value: 0%
        label: Commission
      - value: 100%
        label: Open Source
  - type: split-icon-links
    subtitle: Flat fee. No per-ticket charges.
    reverse: true
    reveal_content: right
    content: |
      ## Pricing

      Managed hosting costs £50/year, or £5/month if you prefer monthly billing. There are no service charges, no percentage cuts, and no surprise fees.

      Charities, community groups, artists, and musicians receive a 50% discount on the annual plan, bringing the cost to £25/year.

      Money from ticket sales goes directly to your Stripe, Square, or SumUp account. Chobble does not handle or touch your revenue.

      The source code is available on GitHub for self-hosting. One-click deployment is available for DigitalOcean, Heroku, Koyeb, and Render.

      [Compare all ticketing platforms](/compared-to/compare-all/) to see how Chobble Tickets' pricing works out against 20+ alternatives.
    figure_items:
      - icon: hugeicons:money-receive-square
        text: £50/year or £5/month
        url: /compared-to/compare-all/
      - icon: hugeicons:ticket-01
        text: Unlimited events and tickets
        url: /compared-to/compare-all/
      - icon: hugeicons:credit-card
        text: No commission, no per-ticket fees
        url: /compared-to/compare-all/
      - icon: hugeicons:discount
        text: 50% discount for charities and artists on annual
        url: /compared-to/compare-all/
  - type: features
    intro_content: |
      ## Platform comparisons

      Read how Chobble Tickets compares to other ticketing platforms on pricing, features, and data ownership.
    items:
      - icon: hugeicons:chart-bar-line
        description: See every platform side by side with an interactive fee calculator.
        name: <a href="/compared-to/compare-all/">Compare all platforms</a>
      - icon: hugeicons:ticket-01
        description: The big name in ticketing. Compare fees, features, and data ownership.
        name: <a href="/compared-to/eventbrite/">vs Eventbrite</a>
      - icon: hugeicons:ticket-01
        description: An independently owned platform with flat per-ticket fees. Compare pricing models.
        name: <a href="/compared-to/ticket-tailor/">vs Ticket Tailor</a>
      - icon: hugeicons:ticket-01
        description: Popular with student events and nightlife. Compare fees and features.
        name: <a href="/compared-to/fatsoma/">vs Fatsoma</a>
      - icon: hugeicons:ticket-01
        description: A UK-focused ticketing platform with per-ticket fees. Compare pricing and features.
        name: <a href="/compared-to/bookitbee/">vs BookitBee</a>
      - icon: hugeicons:source-code
        description: Another open source option. Compare features, hosting models, and pricing.
        name: <a href="/compared-to/hi-events/">vs Hi.Events</a>
  - type: features
    intro_content: |
      ## Features

      Chobble Tickets includes every feature as standard. There are no paid add-ons or tiered plans. [See the full feature list](/features/).
    items:
      - icon: hugeicons:lock
        description: All personal information is encrypted at rest using hybrid RSA-OAEP + AES-256-GCM encryption.
        name: <a href="/features/encrypted/">Encrypted by default</a>
      - icon: hugeicons:source-code
        description: AGPLv3 licensed with every feature included and no open-core bait-and-switch. Browse the code on GitHub.
        name: <a href="/features/open-source/">Fully open source</a>
      - icon: hugeicons:credit-card
        description: Pay a flat fee with no service charges or commission. Money from ticket sales goes directly to your Stripe, Square, or SumUp account.
        name: <a href="/features/no-per-ticket-fees/">No per-ticket fees</a>
      - icon: hugeicons:tag-01
        description: Offer promo codes, discount codes, and opt-in add-ons at checkout, with stock limits and a live running total.
        name: <a href="/features/promo-codes-and-add-ons/">Promo codes & add-ons</a>
      - icon: hugeicons:smart-phone-01
        description: Every ticket gets a unique QR code that you can scan with any phone camera, with no app required.
        name: <a href="/features/qr-code-check-ins/">QR code check-ins</a>
      - icon: hugeicons:wallet-01
        description: Attendees can add tickets to Apple Wallet or Google Wallet for quick access at the door.
        name: <a href="/features/apple-wallet/">Apple & Google Wallet</a>
      - icon: hugeicons:calendar-03
        description: Per-date capacity with a calendar picker, plus holiday and blackout dates, for sessions and recurring bookings.
        name: <a href="/features/daily-events/">Daily events</a>
      - icon: hugeicons:package
        description: Bundle several listings into one package with a single price, booked together in one checkout.
        name: <a href="/features/packages/">Packages</a>
      - icon: hugeicons:wallet-02
        description: Take a deposit at booking and send customers a link to pay the outstanding balance later.
        name: <a href="/features/deposits-and-balance-payments/">Deposits & balances</a>
      - icon: hugeicons:mail-send-01
        description: Send targeted email campaigns to attendee segments, with previews, drafts, and a public unsubscribe link.
        name: <a href="/features/bulk-email/">Bulk email</a>
      - icon: hugeicons:mail-01
        description: Send confirmations through your choice of Resend, Postmark, SendGrid, or Mailgun.
        name: <a href="/features/email-providers/">Your email provider</a>
      - icon: hugeicons:coins-01
        description: Every income figure, refund, and balance comes from a single double-entry ledger, with cash payments recorded too.
        name: <a href="/features/ledger/">Accounting ledger</a>
      - icon: hugeicons:api
        description: A public JSON API, an authenticated admin API, and webhooks that POST on every booking.
        name: <a href="/features/public-api/">API & webhooks</a>
      - icon: hugeicons:globe-02
        description: Run Chobble Tickets on your own servers, or use the £50/year (or £5/month) managed hosting at tix.chobble.com.
        name: <a href="/hosting/">Self-hostable</a>
  - type: split-icon-links
    subtitle: Bookings on your own website
    reveal_content: left
    content: |
      ## Sell from your own website

      Every Chobble Tickets account includes a [public booking website](/features/your-public-website/) with a homepage, contact page, and content pages, served on a [custom domain](/features/custom-domain/) if you have one.

      If you already have a website, you can keep it. An [iframe snippet](/features/embeddable-widget/) shows your listings inline, and the [order widget](/features/order-widget/) turns links on any page into add-to-cart buttons with a floating cart.

      Attendees book without leaving your site, and their data lands encrypted on your Chobble Tickets instance rather than with a third-party ticketing company.
    figure_items:
      - icon: hugeicons:layout-01
        text: A booking website is included
        url: /features/your-public-website/
      - icon: hugeicons:code
        text: Embed listings with one line of HTML
        url: /features/embeddable-widget/
      - icon: hugeicons:shopping-cart-01
        text: Add-to-cart buttons on your existing site
        url: /features/order-widget/
      - icon: hugeicons:globe-02
        text: Your own domain name
        url: /features/custom-domain/
  - type: features
    dark: true
    intro_content: |
      ## Hire and booking businesses

      Chobble Tickets also handles bookings that are not tickets. Multi-day hire with per-day prices, delivery and collection run sheets, deposits with balance payments, and servicing holds are built in.
    items:
      - icon: hugeicons:delivery-truck-02
        description: Per-day pricing, customer-chosen hire lengths, and drop-off and collection scheduling for anything that goes out and comes back.
        name: <a href="/perfect-for/equipment-hire/">Equipment hire</a>
      - icon: hugeicons:ferris-wheel
        description: Per-date capacity with a calendar picker, QR check-ins at the gate, and a flat fee however many admissions you sell.
        name: <a href="/perfect-for/attractions-and-days-out/">Attractions & days out</a>
      - icon: hugeicons:mortarboard-01
        description: Recurring sessions, registration deadlines, and bulk email to the whole class list.
        name: <a href="/perfect-for/classes-and-courses/">Classes & courses</a>
  - type: markdown
    dark: true
    content: |
      ## What organisers say

      > "The user journey is incredibly slick, reassuring, easy and fast - you
      > get them from thinking about it to having gone through and done it
      > within moments."

      > "Saves us a few bob and made it easier for customers! The QR system
      > is a game changer! No more holding data on paper, it's now all
      > simple."

      > "It honestly has all the settings and functionality that comes from a
      > matured system - but it's just getting started!"

      > "It's super quick and efficient, plus it also means that the code is
      > unique to the user - so you can't have someone share a screenshot of
      > the QR code and scam free tickets."

      [Read more reviews](/reviews/)
  - type: cta
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Get started

      Sign up for managed hosting at £50/year or £5/month, or download the source code from GitHub and self-host for free.
name: Chobble Tickets - Open Source Event Ticketing---
