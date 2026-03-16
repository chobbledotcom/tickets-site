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
      Everything you need to run events, built into one open source platform
      with no premium tiers or feature gating.

  - type: features
    header_title: Platform
    items:
      - icon: "hugeicons:source-code"
        title: Open Source
        description: AGPLv3 licensed with every feature included and no open-core model.
      - icon: "hugeicons:lock"
        title: Encrypted
        description: All personal data encrypted at rest with hybrid RSA-OAEP + AES-256-GCM.
      - icon: "hugeicons:qr-code"
        title: QR Code Check-ins
        description: Every ticket gets a unique QR code that you can scan with any phone camera.
      - icon: "hugeicons:credit-card"
        title: Stripe & Square
        description: Accept payments via Stripe or Square with fixed pricing or pay-what-you-want, and automatic refunds.
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
        description: Per-date capacity with a calendar picker and configurable holiday and blackout dates, which is perfect for classes and recurring bookings.
      - icon: "hugeicons:folder-02"
        title: Groups
        description: Organise events into groups for multi-event bookings and single checkout.
      - icon: "hugeicons:user-multiple"
        title: Multi-User
        description: Invite team members as owners or managers, each with their own login and session.
      - icon: "hugeicons:csv-02"
        title: CSV Export
        description: Export attendee lists as CSV with date and check-in status filtering.
      - icon: "hugeicons:user-add-01"
        title: Manual Attendees
        description: Add walk-ins and comp tickets directly from the admin panel, and edit attendee details or reassign events as needed.
      - icon: "hugeicons:file-validation"
        title: Terms & Conditions
        description: Set global terms that attendees must agree to before booking, with configurable contact fields and special instructions.
      - icon: "hugeicons:clock-01"
        title: Overbooking Prevention
        description: 5-minute payment holds reserve places while attendees complete checkout, so you never oversell.
      - icon: "hugeicons:money-receive-square"
        title: Refunds
        description: Process individual or bulk refunds directly from the admin panel with automatic payment provider sync.
      - icon: "hugeicons:edit-01"
        title: Markdown Descriptions
        description: Write event descriptions in Markdown with header image uploads, so your events look great without a page builder.
      - icon: "hugeicons:copy-01"
        title: Duplicate Events
        description: Clone existing events to quickly set up similar bookings without re-entering all the details.
      - icon: "hugeicons:timer-01"
        title: Registration Deadlines
        description: Set cut-off times for bookings and configure purchase limits per event or per attendee.
      - icon: "hugeicons:activity-01"
        title: Activity Logs
        description: Track all admin actions and booking activity with a built-in audit trail and calendar views.
      - icon: "hugeicons:book-open-01"
        title: Built-in Admin Guide
        description: Integrated documentation at /admin/guide covers every feature, so new team members can get up to speed fast.

  - type: features
    header_title: Integrations
    items:
      - icon: "hugeicons:globe-02"
        title: Custom Domain
        description: Use your own domain name so your brand is front and centre.
      - icon: "hugeicons:smart-phone-01"
        title: Apple Wallet
        description: Attendees can add tickets to Apple Wallet for easy access at the door.
      - icon: "hugeicons:code"
        title: Embeddable Widget
        description: Drop an iframe snippet into your website to show events inline, with configurable CSP.
      - icon: "hugeicons:mail-edit-01"
        title: Email Templates
        description: Customise confirmation emails with Liquid syntax, including built-in currency and pluralize filters.
      - icon: "hugeicons:rss"
        title: RSS & Calendar Feeds
        description: ICS calendar and RSS feeds for your events, so attendees can subscribe in their calendar app or feed reader.
      - icon: "hugeicons:paint-brush-01"
        title: Light & Dark Themes
        description: Built-in public site with light and dark theme options, so your booking pages match your brand.
      - icon: "hugeicons:link-03"
        title: Custom Redirects
        description: Send attendees to a custom URL after booking, perfect for thank-you pages or post-purchase instructions.

  - type: cta
    title: See It in Action
    description: Sign up for managed hosting at £50/year, or browse the full technical documentation.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/join
      variant: primary
      size: lg
---
