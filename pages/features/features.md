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
        title: '<a href="/features/open-source/">Open Source</a>'
        description: AGPLv3 licensed with every feature included and no open-core model.
      - icon: "hugeicons:lock"
        title: '<a href="/features/encrypted/">Encrypted</a>'
        description: All personal data encrypted at rest with hybrid RSA-OAEP + AES-256-GCM.
      - icon: "hugeicons:qr-code"
        title: '<a href="/features/qr-code-check-ins/">QR Code Check-ins</a>'
        description: Every ticket gets a unique QR code that you can scan with any phone camera.
      - icon: "hugeicons:credit-card"
        title: '<a href="/features/stripe-and-square/">Stripe & Square</a>'
        description: Accept payments via Stripe or Square with fixed pricing or pay-what-you-want, and automatic refunds.
      - icon: "hugeicons:mail-01"
        title: '<a href="/features/email-providers/">Email Providers</a>'
        description: Choose from Resend, Postmark, SendGrid, or Mailgun (US and EU) for notifications.
      - icon: "hugeicons:api"
        title: '<a href="/features/public-api/">Public API</a>'
        description: RESTful JSON API for building custom integrations and frontends.
      - icon: "hugeicons:notification-03"
        title: '<a href="/features/webhooks/">Webhooks</a>'
        description: Get POST notifications on every booking to integrate with your tools.

  - type: features
    section_class: alt
    header_title: Event Management
    items:
      - icon: "hugeicons:calendar-03"
        title: '<a href="/features/daily-events/">Daily Events</a>'
        description: Per-date capacity with a calendar picker and configurable holiday and blackout dates, which is perfect for classes and recurring bookings.
      - icon: "hugeicons:folder-02"
        title: '<a href="/features/groups/">Groups</a>'
        description: Organise events into groups for multi-event bookings and single checkout.
      - icon: "hugeicons:user-multiple"
        title: '<a href="/features/users/">Multi-User</a>'
        description: Invite team members as owners or managers, each with their own login and session.
      - icon: "hugeicons:csv-02"
        title: '<a href="/features/csv-export/">CSV Export</a>'
        description: Export attendee lists as CSV with date and check-in status filtering.
      - icon: "hugeicons:user-add-01"
        title: '<a href="/features/manual-attendees/">Manual Attendees</a>'
        description: Add walk-ins and comp tickets directly from the admin panel, and edit attendee details or reassign events as needed.
      - icon: "hugeicons:file-validation"
        title: '<a href="/features/terms-and-conditions/">Terms & Conditions</a>'
        description: Set global terms that attendees must agree to before booking, with configurable contact fields and special instructions.
      - icon: "hugeicons:clock-01"
        title: '<a href="/features/overbooking-prevention/">Overbooking Prevention</a>'
        description: 5-minute payment holds reserve places while attendees complete checkout, so you never oversell.
      - icon: "hugeicons:money-receive-square"
        title: '<a href="/features/refunds/">Refunds</a>'
        description: Process individual or bulk refunds directly from the admin panel with automatic payment provider sync.
      - icon: "hugeicons:edit-01"
        title: '<a href="/features/markdown-descriptions/">Markdown Descriptions</a>'
        description: Write event descriptions in Markdown with header image uploads, so your events look great without a page builder.
      - icon: "hugeicons:copy-01"
        title: '<a href="/features/duplicate-events/">Duplicate Events</a>'
        description: Clone existing events to quickly set up similar bookings without re-entering all the details.
      - icon: "hugeicons:timer-01"
        title: '<a href="/features/registration-deadlines/">Registration Deadlines</a>'
        description: Set cut-off times for bookings and configure purchase limits per event or per attendee.
      - icon: "hugeicons:activity-01"
        title: '<a href="/features/activity-logs/">Activity Logs</a>'
        description: Track all admin actions and booking activity with a built-in audit trail and calendar views.
      - icon: "hugeicons:book-open-01"
        title: '<a href="/features/admin-guide/">Built-in Admin Guide</a>'
        description: Integrated documentation at /admin/guide covers every feature, so new team members can get up to speed fast.

  - type: features
    header_title: Integrations
    items:
      - icon: "hugeicons:globe-02"
        title: '<a href="/features/custom-domain/">Custom Domain</a>'
        description: Use your own domain name so your brand is front and centre.
      - icon: "hugeicons:smart-phone-01"
        title: '<a href="/features/apple-wallet/">Apple Wallet</a>'
        description: Attendees can add tickets to Apple Wallet for easy access at the door.
      - icon: "hugeicons:code"
        title: '<a href="/features/embeddable-widget/">Embeddable Widget</a>'
        description: Drop an iframe snippet into your website to show events inline, with configurable CSP.
      - icon: "hugeicons:mail-edit-01"
        title: '<a href="/features/email-templates/">Email Templates</a>'
        description: Customise confirmation emails with Liquid syntax, including built-in currency and pluralise filters.
      - icon: "hugeicons:rss"
        title: '<a href="/features/rss-and-calendar-feeds/">RSS & Calendar Feeds</a>'
        description: ICS calendar and RSS feeds for your events, so attendees can subscribe in their calendar app or feed reader.
      - icon: "hugeicons:paint-brush-01"
        title: '<a href="/features/light-and-dark-themes/">Light & Dark Themes</a>'
        description: Built-in public site with light and dark theme options, so your booking pages match your brand.
      - icon: "hugeicons:link-03"
        title: '<a href="/features/custom-redirects/">Custom Redirects</a>'
        description: Send attendees to a custom URL after booking, perfect for thank-you pages or post-purchase instructions.

  - type: cta
    title: See It in Action
    description: Sign up for managed hosting at £50/year, or browse the full technical documentation.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
