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

  - type: markdown
    content: |
      ![The Chobble Tickets admin dashboard](/images/screenshots/dashboard.png)

  - type: features
    header_intro: "## Selling tickets"
    items:
      - icon: "hugeicons:credit-card"
        title: '<a href="/features/stripe-and-square/">Stripe & Square</a>'
        description: Accept payments via Stripe or Square with fixed pricing or pay-what-you-want, and automatic refunds.
      - icon: "hugeicons:clock-01"
        title: '<a href="/features/overbooking-prevention/">Overbooking prevention</a>'
        description: 5-minute payment holds reserve places while attendees complete checkout, so you never oversell.
      - icon: "hugeicons:money-receive-square"
        title: '<a href="/features/refunds/">Refunds</a>'
        description: Process individual or bulk refunds directly from the admin panel with automatic payment provider sync.
      - icon: "hugeicons:file-validation"
        title: '<a href="/features/terms-and-conditions/">Terms & conditions</a>'
        description: Set global terms that attendees must agree to before booking, with configurable contact fields and special instructions.
      - icon: "hugeicons:timer-01"
        title: '<a href="/features/registration-deadlines/">Registration deadlines</a>'
        description: Set cut-off times for bookings and configure purchase limits per event or per attendee.

  - type: features
    section_class: alt
    header_intro: "## Managing events"
    items:
      - icon: "hugeicons:qr-code"
        title: '<a href="/features/qr-code-check-ins/">QR code check-ins</a>'
        description: Every ticket gets a unique QR code that you can scan with any phone camera.
      - icon: "hugeicons:calendar-03"
        title: '<a href="/features/daily-events/">Daily events</a>'
        description: Per-date capacity with a calendar picker and configurable holiday and blackout dates, which is perfect for classes and recurring bookings.
      - icon: "hugeicons:folder-02"
        title: '<a href="/features/groups/">Groups</a>'
        description: Organise events into groups for multi-event bookings and single checkout.
      - icon: "hugeicons:user-multiple"
        title: '<a href="/features/users/">Multi-user</a>'
        description: Invite team members as owners or managers, each with their own login and session.
      - icon: "hugeicons:user-add-01"
        title: '<a href="/features/manual-attendees/">Manual attendees</a>'
        description: Add walk-ins and comp tickets directly from the admin panel, and edit attendee details or reassign events as needed.
      - icon: "hugeicons:copy-01"
        title: '<a href="/features/duplicate-events/">Duplicate events</a>'
        description: Clone existing events to quickly set up similar bookings without re-entering all the details.
      - icon: "hugeicons:help-circle"
        title: '<a href="/features/custom-questions/">Custom questions</a>'
        description: Add multiple-choice questions to events and collect structured answers from attendees at checkout, with answers visible across the admin interface.
      - icon: "hugeicons:csv-02"
        title: '<a href="/features/csv-export/">CSV export</a>'
        description: Export attendee lists as CSV with date and check-in status filtering.
      - icon: "hugeicons:activity-01"
        title: '<a href="/features/activity-logs/">Activity logs</a>'
        description: Track all admin actions and booking activity with a built-in audit trail and calendar views.
      - icon: "hugeicons:book-open-01"
        title: '<a href="/features/admin-guide/">Built-in admin guide</a>'
        description: Integrated documentation at /admin/guide covers every feature, so new team members can get up to speed fast.

  - type: features
    header_intro: "## Customising your site"
    items:
      - icon: "hugeicons:globe-02"
        title: '<a href="/features/custom-domain/">Custom domain</a>'
        description: Use your own domain name so your brand is front and centre.
      - icon: "hugeicons:paint-brush-01"
        title: '<a href="/features/light-and-dark-themes/">Light & dark themes</a>'
        description: Built-in public site with light and dark theme options, so your booking pages match your brand.
      - icon: "hugeicons:edit-01"
        title: '<a href="/features/markdown-descriptions/">Markdown descriptions</a>'
        description: Write event descriptions in Markdown with header image uploads, so your events look great without a page builder.
      - icon: "hugeicons:mail-edit-01"
        title: '<a href="/features/email-templates/">Email templates</a>'
        description: Customise confirmation emails with Liquid syntax, including built-in currency and pluralise filters.
      - icon: "hugeicons:code"
        title: '<a href="/features/embeddable-widget/">Embeddable widget</a>'
        description: Drop an iframe snippet into your website to show events inline, with configurable CSP.
      - icon: "hugeicons:link-03"
        title: '<a href="/features/custom-redirects/">Custom redirects</a>'
        description: Send attendees to a custom URL after booking, perfect for thank-you pages or post-purchase instructions.

  - type: features
    section_class: alt
    header_intro: "## Platform & integrations"
    items:
      - icon: "hugeicons:source-code"
        title: '<a href="/features/open-source/">Open source</a>'
        description: AGPLv3 licensed with every feature included and no open-core model.
      - icon: "hugeicons:view-off"
        title: '<a href="/features/no-spying/">No spying</a>'
        description: We don't market to your customers, collect their data, or claim any rights to it. Chobble Tickets is a tool for you to use - not us.
      - icon: "hugeicons:lock"
        title: '<a href="/features/encrypted/">Encrypted</a>'
        description: All personal data encrypted at rest with hybrid RSA-OAEP + AES-256-GCM.
      - icon: "hugeicons:smart-phone-01"
        title: '<a href="/features/apple-wallet/">Apple & Google Wallet</a>'
        description: Attendees can add tickets to Apple Wallet or Google Wallet for easy access at the door.
      - icon: "hugeicons:mail-01"
        title: '<a href="/features/email-providers/">Email providers</a>'
        description: Choose from Resend, Postmark, SendGrid, or Mailgun (US and EU) for notifications.
      - icon: "hugeicons:api"
        title: '<a href="/features/public-api/">Public & Admin API</a>'
        description: RESTful JSON API for building custom integrations, plus authenticated admin API with API keys for reading and editing private data.
      - icon: "hugeicons:dashboard-square-edit"
        title: '<a href="/features/admin-api/">Admin API</a>'
        description: Full CRUD for events via API keys — create, update, list, delete, and toggle events programmatically with JSON.
      - icon: "hugeicons:notification-03"
        title: '<a href="/features/webhooks/">Webhooks</a>'
        description: Get POST notifications on every booking to integrate with your tools.
      - icon: "hugeicons:rss"
        title: '<a href="/features/rss-and-calendar-feeds/">RSS & calendar feeds</a>'
        description: ICS calendar and RSS feeds for your events, so attendees can subscribe in their calendar app or feed reader.

  - type: cta
    title: See it in action
    description: Sign up for managed hosting at £50/year, or browse the source code and documentation on GitHub.
    button:
      text: View on GitHub
      href: https://github.com/chobbledotcom/tickets
      variant: primary
      size: lg
---
