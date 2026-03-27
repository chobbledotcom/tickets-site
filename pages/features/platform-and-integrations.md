---
layout: design-system-base.html
title: Platform & Integrations - Chobble Tickets
meta_title: Platform & Integrations - Chobble Tickets
meta_description: Open source, encrypted, with a public API, webhooks, Apple Wallet, and calendar feeds to connect your tools.
permalink: /features/platform-and-integrations/
eleventyNavigation:
  key: Platform & Integrations
  parent: Features
  order: 4
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Platform & integrations
    lead: >-
      Open source and encrypted by default, with a public API, webhooks,
      Apple Wallet, and calendar feeds to connect your existing tools.

  - type: features
    items:
      - icon: "hugeicons:source-code"
        title: '<a href="/features/open-source/">Open source</a>'
        description: AGPLv3 licensed with every feature included and no open-core model.
      - icon: "hugeicons:lock"
        title: '<a href="/features/encrypted/">Encrypted</a>'
        description: All personal data encrypted at rest with hybrid RSA-OAEP + AES-256-GCM.
      - icon: "hugeicons:smart-phone-01"
        title: '<a href="/features/apple-wallet/">Apple Wallet</a>'
        description: Attendees can add tickets to Apple Wallet for easy access at the door.
      - icon: "hugeicons:mail-01"
        title: '<a href="/features/email-providers/">Email providers</a>'
        description: Choose from Resend, Postmark, SendGrid, or Mailgun (US and EU) for notifications.
      - icon: "hugeicons:api"
        title: '<a href="/features/public-api/">Public API</a>'
        description: RESTful JSON API for building custom integrations and frontends.
      - icon: "hugeicons:notification-03"
        title: '<a href="/features/webhooks/">Webhooks</a>'
        description: Get POST notifications on every booking to integrate with your tools.
      - icon: "hugeicons:rss"
        title: '<a href="/features/rss-and-calendar-feeds/">RSS & calendar feeds</a>'
        description: ICS calendar and RSS feeds for your events, so attendees can subscribe in their calendar app or feed reader.

  - type: cta
    title: Explore the platform
    description: Sign up for managed hosting at £50/year, or browse the full technical documentation.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
