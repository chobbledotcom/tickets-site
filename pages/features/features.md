---
layout: design-system-base.html
title: Features - Chobble Tickets
meta_title: Features - Chobble Tickets
meta_description: Explore the features of Chobble Tickets - open source, encrypted, QR codes, webhooks, public API, and more.
permalink: /features/
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Features
    lead: >-
      Everything you need to run events, built into one open source platform.
      No premium tiers, no feature gating. You get everything.

  - type: features
    header_title: Platform
    items:
      - icon: "hugeicons:source-code"
        title: Open Source
        description: AGPLv3 licensed. Every feature included. No open-core model.
      - icon: "hugeicons:lock"
        title: Encrypted
        description: All personal data encrypted at rest with hybrid RSA-OAEP + AES-256-GCM.
      - icon: "hugeicons:qr-code"
        title: QR Code Check-ins
        description: Unique QR codes for every ticket. Scan with any phone camera.
      - icon: "hugeicons:mail-01"
        title: Email Providers
        description: Choose from Resend, Postmark, SendGrid, or Mailgun for notifications.
      - icon: "hugeicons:api"
        title: Public API
        description: RESTful JSON API for building custom integrations and frontends.
      - icon: "hugeicons:notification-03"
        title: Webhooks
        description: Get POST notifications on every booking to integrate with your tools.

  - type: features
    section_class: alt
    header_title: Management
    items:
      - icon: "hugeicons:user-multiple"
        title: Users
        description: Invite team members with role-based access. Manage sessions and permissions.
      - icon: "hugeicons:folder-02"
        title: Groups
        description: Organise events into groups for multi-event bookings and single checkout.
      - icon: "hugeicons:globe-02"
        title: Custom Domain
        description: Use your own domain name. Your brand, your URL.
      - icon: "hugeicons:smart-phone-01"
        title: Apple Wallet
        description: Attendees can add tickets to Apple Wallet for easy access at the door.

  - type: cta
    title: See It in Action
    description: Browse the full technical documentation or sign up for managed hosting.
    button:
      text: Read the Docs
      href: https://chobbledotcom.github.io/tickets/doc.ts/index.html
      variant: secondary
      size: lg
---
