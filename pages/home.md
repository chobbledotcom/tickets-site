---
layout: design-system-base.html
title: Chobble Tickets - Open Source Event Ticketing
meta_title: Chobble Tickets - Open Source Event Ticketing
meta_description: Open source event ticketing with a flat annual fee and no per-ticket charges, encrypted, self-hostable, and built for communities.
permalink: /
eleventyNavigation:
  key: Home
  order: 0
blocks:
  - type: hero
    container_width: full
    class: gradient
    badge: Open Source & Encrypted
    title: Open source event ticketing with no per-ticket fees
    lead: >-
      Chobble Tickets is an open source ticketing platform with a flat annual
      fee, no per-ticket charges, and no attendee data collection.
    buttons:
      - text: GitHub
        href: https://github.com/chobbledotcom/tickets
        variant: primary
        size: lg
      - text: Live Demo
        href: https://tix.chobble.com
        variant: secondary
        size: lg

  - type: stats
    section_class: alt
    items:
      - value: "\u00A350"
        label: Per Year
      - value: "\u221E"
        label: Events & Tickets
      - value: "0%"
        label: Commission
      - value: "100%"
        label: Open Source

  - type: features
    header_intro: |
      ## Why Chobble Tickets?

      Chobble is a community interest company. There is no venture capital
      investment and no requirement to grow at the expense of users. The
      software is funded by flat annual subscriptions.
    items:
      - icon: "hugeicons:lock"
        title: Encrypted by default
        description: All personal information is encrypted at rest using hybrid RSA-OAEP + AES-256-GCM encryption.
      - icon: "hugeicons:source-code"
        title: Fully open source
        description: AGPLv3 licensed with every feature included and no open-core bait-and-switch. Browse the code on GitHub.
      - icon: "hugeicons:credit-card"
        title: No per-ticket fees
        description: Pay a flat annual fee and money from ticket sales goes directly to your Stripe or Square account.
      - icon: "hugeicons:smart-phone-01"
        title: QR code check-ins
        description: Every ticket gets a unique QR code that you can scan with any phone camera, with no app required.
      - icon: "hugeicons:mail-01"
        title: Your email provider
        description: Send confirmations through your choice of Resend, Postmark, SendGrid, or Mailgun.
      - icon: "hugeicons:globe-02"
        title: Self-Hostable
        description: Run it on your own infrastructure or let us host it for you - either way, you're in control.

  - type: markdown
    section_class: alt
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

      [Read more reviews &rarr;](/reviews/)

  - type: split-full
    container_width: full
    variant: dark-left
    reveal_left: left
    reveal_right: right
    left_title: Perfect for
    left_content: |
      Chobble Tickets works for all kinds of events and organisations:

      - **[Kids Parties](/perfect-for/kids-parties/)** - Simple booking for parents
      - **[Music Concerts](/perfect-for/music-concerts/)** - Sell tickets directly, keep all the revenue
      - **[Charity Events](/perfect-for/charity-events/)** - 50% discount for charities and community groups
      - **[Political Organising](/perfect-for/political-organising/)** - Privacy-first event management
    right_title: Powerful features
    right_content: |
      - **[Open Source](/features/open-source/)** - AGPLv3, no hidden proprietary bits
      - **[Encrypted](/features/encrypted/)** - PII encrypted at rest
      - **[QR Code Check-ins](/features/qr-code-check-ins/)** - Scan to verify tickets
      - **[Public & Admin API](/features/public-api/)** - Build your own integrations
      - **[Webhooks](/features/webhooks/)** - Get notified on every booking
      - **[Custom Domain](/features/custom-domain/)** - Nice URL from day one, own domain when ready
      - **[Apple & Google Wallet](/features/apple-wallet/)** - Tickets in your pocket
      - **[Custom Questions](/features/custom-questions/)** - Collect answers at checkout
      - **[Event Groups](/features/groups/)** - Multi-event bookings, single checkout
      - **[Email Templates](/features/email-providers/)** - Customise confirmations with Liquid syntax
      - **[All Features](/features/)** - Refunds, CSV exports, activity logs, and more
      - **[FAQ](/faq/)** - Common questions about pricing, fees, and features

  - type: split
    title: Flat, fair pricing
    reverse: true
    reveal_content: right
    content: |
      **[Managed hosting is £50/year](https://tix.chobble.com/ticket/register)** with no per-ticket fees, no
      percentage cuts, and no surprise charges.

      **50% discount** for charities, community groups, artists, and musicians.

      Money from ticket sales goes straight to your Stripe or Square account
      and we never touch your revenue.

      You can also self-host for free - it's open source with one-click
      deploy to DigitalOcean, Heroku, Koyeb, and Render. Or use
      [GitHub-controlled deployments](/features/open-source/) for extra
      security where you approve every update.
    figure_type: html
    figure_html: |
      <p>£50/year</p>
      <ul>
        <li>Unlimited events. Unlimited tickets.</li>
        <li>No commission. No hidden fees.</li>
      </ul>

  - type: cta
    title: Get started
    description: Sign up for managed hosting at £50/year, or download the source code from GitHub and self-host for free.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
