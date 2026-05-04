---
layout: design-system-base.html
title: Chobble Tickets - Open Source Event Ticketing
meta_title: Chobble Tickets - Open Source Event Ticketing
meta_description: Event ticketing for £50/year with no per-ticket fees or commission. Keep all your ticket revenue. Open source, encrypted, and self-hostable.
permalink: /
eleventyNavigation:
  key: Home
  order: 0
blocks:
  - type: hero
    class: gradient
    badge: Open Source & Encrypted
    title: Open source event ticketing with no per-ticket fees
    lead: >-
      Chobble Tickets is an open source ticketing platform with a flat annual
      fee, no booking fees or commission, and no attendee data collection.
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
      - value: "\u00A350"
        label: Per Year
      - value: "\u221E"
        label: Events & Tickets
      - value: "0%"
        label: Commission
      - value: "100%"
        label: Open Source

  - type: split-icon-links
    title: Pricing
    subtitle: Flat annual fee. No per-ticket charges.
    reverse: true
    reveal_content: right
    content: |
      Managed hosting costs £50 per year. There are no service charges, no percentage cuts, and no surprise fees.

      Charities, community groups, artists, and musicians receive a 50% discount.

      Money from ticket sales goes directly to your Stripe or Square account. Chobble does not handle or touch your revenue.

      The source code is available on GitHub for self-hosting. One-click deployment is available for DigitalOcean, Heroku, Koyeb, and Render.

      [Compare all ticketing platforms](/compared-to/compare-all/) to see how Chobble Tickets' pricing works out against 20+ alternatives.
    figure_items:
      - icon: "hugeicons:money-receive-square"
        text: "£50/year"
        url: /compared-to/compare-all/
      - icon: "hugeicons:ticket-01"
        text: "Unlimited events and tickets"
        url: /compared-to/compare-all/
      - icon: "hugeicons:credit-card"
        text: "No commission, no per-ticket fees"
        url: /compared-to/compare-all/
      - icon: "hugeicons:discount"
        text: "50% discount for charities and artists"
        url: /compared-to/compare-all/

  - type: features
    intro_content: |
      ## Platform comparisons

      Read how Chobble Tickets compares to other ticketing platforms on pricing, features, and data ownership.
    items:
      - icon: "hugeicons:chart-bar-line"
        title: '<a href="/compared-to/compare-all/">Compare all platforms</a>'
        description: See every platform side by side with an interactive fee calculator.
      - icon: "hugeicons:ticket-01"
        title: '<a href="/compared-to/eventbrite/">vs Eventbrite</a>'
        description: The big name in ticketing. Compare fees, features, and data ownership.
      - icon: "hugeicons:ticket-01"
        title: '<a href="/compared-to/ticket-tailor/">vs Ticket Tailor</a>'
        description: An independently owned platform with flat per-ticket fees. Compare pricing models.
      - icon: "hugeicons:ticket-01"
        title: '<a href="/compared-to/fatsoma/">vs Fatsoma</a>'
        description: Popular with student events and nightlife. Compare fees and features.
      - icon: "hugeicons:ticket-01"
        title: '<a href="/compared-to/bookitbee/">vs BookitBee</a>'
        description: A UK-focused ticketing platform with per-ticket fees. Compare pricing and features.
      - icon: "hugeicons:source-code"
        title: '<a href="/compared-to/hi-events/">vs Hi.Events</a>'
        description: Another open source option. Compare features, hosting models, and pricing.

  - type: features
    intro_content: |
      ## Features

      Chobble Tickets includes every feature as standard. There are no paid add-ons or tiered plans.
    items:
      - icon: "hugeicons:lock"
        title: Encrypted by default
        description: All personal information is encrypted at rest using hybrid RSA-OAEP + AES-256-GCM encryption.
      - icon: "hugeicons:source-code"
        title: Fully open source
        description: AGPLv3 licensed with every feature included and no open-core bait-and-switch. Browse the code on GitHub.
      - icon: "hugeicons:credit-card"
        title: No per-ticket fees
        description: Pay a flat annual fee with no service charges or commission. Money from ticket sales goes directly to your Stripe or Square account.
      - icon: "hugeicons:smart-phone-01"
        title: QR code check-ins
        description: Every ticket gets a unique QR code that you can scan with any phone camera, with no app required.
      - icon: "hugeicons:mail-01"
        title: Your email provider
        description: Send confirmations through your choice of Resend, Postmark, SendGrid, or Mailgun.
      - icon: "hugeicons:globe-02"
        title: Self-hostable
        description: Run Chobble Tickets on your own servers, or use the £50/year managed hosting at tix.chobble.com.

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
    title: Get started
    description: Sign up for managed hosting at £50/year, or download the source code from GitHub and self-host for free.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
