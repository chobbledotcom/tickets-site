---
layout: design-system-base.html
title: Apple & Google Wallet - Chobble Tickets
meta_title: Apple & Google Wallet Integration - Chobble Tickets
meta_description: Attendees can add tickets to Apple Wallet or Google Wallet for quick access at the door.
permalink: /features/apple-wallet/
eleventyNavigation:
  key: Apple Wallet
  parent: Platform & Integrations
  order: 2
blocks:
  - type: hero
    class: gradient
    title: Apple & Google Wallet
    lead: >-
      Attendees can add their ticket to Apple Wallet or Google Wallet so
      it's right there on their phone when they arrive at the event.

  - type: markdown
    content: |
      ## Tickets in your pocket

      After booking, attendees can save their ticket as an Apple Wallet or
      Google Wallet pass that includes the event name, date, and QR code
      for check-in, so there's no need to dig through emails at the door.

      ## Google Wallet customisation

      Admins can override the default Google Wallet configuration with
      their own Google Wallet issuer details if they've signed up for a
      Google Wallet API account. This lets you brand the wallet pass with
      your own organisation details.

      See the [tickets documentation](https://chobbledotcom.github.io/tickets/docs/tickets.ts)
      for details on wallet pass generation and QR code rendering.

  - type: cta
    title: Modern ticketing
    description: Give your attendees the convenience of Apple Wallet and Google Wallet passes.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
