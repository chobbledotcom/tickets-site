---
layout: design-system-base.html
title: Chobble Tickets - Open Source Event Ticketing
meta_title: Chobble Tickets - Open Source Event Ticketing
meta_description: Open source event ticketing with a flat annual fee. No per-ticket charges. Encrypted, self-hostable, and built for communities.
permalink: /
blocks:
  - type: hero
    full_width: true
    class: gradient
    badge: Open Source & Encrypted
    title: Event Ticketing That Respects You
    lead: >-
      Chobble Tickets is an open source ticketing platform with a flat annual
      fee. No per-ticket charges, no data harvesting, no lock-in. Your events,
      your data, your way.
    buttons:
      - text: Get Started
        href: https://tix.chobble.com
        variant: primary
        size: lg
      - text: View Source
        href: https://github.com/chobbledotcom/tickets
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
    header_title: Why Chobble Tickets?
    header_subtitle: >-
      Built by a community interest company. No venture capital, no
      growth-at-all-costs mentality. Just solid software that does what you need.
    items:
      - icon: "hugeicons:lock"
        title: Encrypted by Default
        description: All personal information is encrypted at rest using hybrid RSA-OAEP + AES-256-GCM encryption.
      - icon: "hugeicons:source-code"
        title: Fully Open Source
        description: AGPLv3 licensed. Every feature is included. No open-core bait-and-switch.
      - icon: "hugeicons:credit-card"
        title: No Per-Ticket Fees
        description: Pay a flat annual fee. Money from ticket sales goes directly to your Stripe or Square account.
      - icon: "hugeicons:smart-phone-01"
        title: QR Code Check-ins
        description: Every ticket gets a unique QR code. Scan with any phone camera. No app required.
      - icon: "hugeicons:mail-01"
        title: Your Email Provider
        description: Send confirmations through Resend, Postmark, SendGrid, or Mailgun. You choose.
      - icon: "hugeicons:globe-02"
        title: Self-Hostable
        description: Run it on your own infrastructure, or let us host it for you. Either way, you're in control.

  - type: split-full
    full_width: true
    variant: dark-left
    reveal_left: left
    reveal_right: right
    left_title: Perfect For
    left_content: |
      Chobble Tickets works for all kinds of events and organisations:

      - **[Kids Parties](/perfect-for/kids-parties/)** - Simple booking for parents
      - **[Music Concerts](/perfect-for/music-concerts/)** - Sell tickets directly, keep all the revenue
      - **[Charity Events](/perfect-for/charity-events/)** - 50% discount for charities and community groups
      - **[Political Organising](/perfect-for/political-organising/)** - Privacy-first event management
    right_title: Powerful Features
    right_content: |
      - **[Open Source](/features/open-source/)** - AGPLv3, no hidden proprietary bits
      - **[Encrypted](/features/encrypted/)** - PII encrypted at rest
      - **[QR Code Check-ins](/features/qr-code-check-ins/)** - Scan to verify tickets
      - **[Public API](/features/public-api/)** - Build your own integrations
      - **[Webhooks](/features/webhooks/)** - Get notified on every booking
      - **[Custom Domain](/features/custom-domain/)** - Your brand, your URL
      - **[Apple Wallet](/features/apple-wallet/)** - Tickets in your pocket

  - type: split
    title: Flat, Fair Pricing
    reverse: true
    reveal_content: right
    content: |
      **Managed hosting is just £50/year.** That's it. No per-ticket fees, no
      percentage cuts, no surprise charges.

      **50% discount** for charities, community groups, artists, and musicians.

      Money from ticket sales goes straight to your Stripe or Square account.
      We never touch your revenue.

      You can also self-host for free - it's open source.
    figure_type: code
    figure_filename: Pricing
    figure_code: |
      £50/year

      Unlimited events. Unlimited tickets.
      No commission. No hidden fees.

  - type: cta
    title: Ready to Sell Tickets?
    description: Sign up for managed hosting, or grab the source code and self-host. Either way, you're in good hands.
    button:
      text: Get Started at tix.chobble.com
      href: https://tix.chobble.com
      variant: secondary
      size: lg
---
