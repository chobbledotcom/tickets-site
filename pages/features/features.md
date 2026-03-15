---
layout: design-system-base.html
title: Features - Chobble Tickets
meta_title: Features - Chobble Tickets
meta_description: Explore the features of Chobble Tickets - open source, encrypted, QR codes, webhooks, public API, and more.
permalink: /features/
eleventyNavigation:
  key: Features
  order: 1
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
      - icon: "hugeicons:credit-card"
        title: Stripe & Square
        description: Accept payments via Stripe or Square. Automatic refunds, webhook-driven attendee creation.
      - icon: "hugeicons:mail-01"
        title: Email Providers
        description: Choose from Resend, Postmark, SendGrid, or Mailgun (US and EU) for notifications.
      - icon: "hugeicons:api"
        title: Public API
        description: RESTful JSON API for building custom integrations and frontends.
      - icon: "hugeicons:notification-03"
        title: Webhooks
        description: Get POST notifications on every booking to integrate with your tools.

  - type: features
    section_class: alt
    header_title: Event Management
    items:
      - icon: "hugeicons:calendar-03"
        title: Daily Events
        description: Per-date capacity with a calendar picker. Set holidays and blackout dates. Perfect for classes and recurring bookings.
      - icon: "hugeicons:folder-02"
        title: Groups
        description: Organise events into groups for multi-event bookings and single checkout.
      - icon: "hugeicons:user-multiple"
        title: Multi-User
        description: Invite team members as owners or managers. Each gets their own login and session.
      - icon: "hugeicons:csv-02"
        title: CSV Export
        description: Export attendee lists as CSV with date and check-in status filtering.
      - icon: "hugeicons:user-add-01"
        title: Manual Attendees
        description: Add walk-ins and comp tickets directly from the admin panel. Edit attendee details or reassign events.
      - icon: "hugeicons:file-validation"
        title: Terms & Conditions
        description: Set global terms that attendees must agree to before booking. Configurable contact fields and special instructions.

  - type: features
    header_title: Integrations
    items:
      - icon: "hugeicons:globe-02"
        title: Custom Domain
        description: Use your own domain name. Your brand, your URL.
      - icon: "hugeicons:smart-phone-01"
        title: Apple Wallet
        description: Attendees can add tickets to Apple Wallet for easy access at the door.
      - icon: "hugeicons:code"
        title: Embeddable Widget
        description: Drop an iframe snippet into your website to show events inline. Configurable CSP.
      - icon: "hugeicons:mail-edit-01"
        title: Email Templates
        description: Customise confirmation emails with Liquid syntax. Built-in currency and pluralize filters.

  - type: cta
    title: See It in Action
    description: Browse the full technical documentation or sign up for managed hosting.
    button:
      text: Read the Docs
      href: https://chobbledotcom.github.io/tickets/doc.ts/index.html
      variant: secondary
      size: lg
---
