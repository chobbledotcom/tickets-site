---
layout: design-system-base.html
title: Features - Chobble Tickets
meta_title: Features - Chobble Tickets
meta_description: All features included at every price with no booking fees or commission. Open source event ticketing with encryption, QR codes, webhooks, and API access.
permalink: /features/
eleventyNavigation:
  key: Features
  order: 1
blocks:
  - type: hero
    class: gradient
    lead: Everything you need to run events, built into one open source platform with a flat annual fee, no booking fees, and no feature gating.
    name: Features
  - type: markdown
    content: |
      ![The Chobble Tickets admin dashboard](/images/screenshots/dashboard.png)
  - type: features
    intro_content: "## Selling tickets"
    items:
      - icon: hugeicons:credit-card
        description: Accept payments via Stripe or Square with fixed pricing or pay-what-you-want, and automatic refunds.
        name: <a href="/features/stripe-and-square/">Stripe & Square</a>
      - icon: hugeicons:ticket-01
        description: Collect donations, sell raffle tickets, and take payments for anything that doesn't require physical attendance.
        name: <a href="/features/purchasable-events/">Purchasable events</a>
      - icon: hugeicons:clipboard
        description: Create volunteer sign-up sheets, potluck coordinators, and other form-based collections by setting an event as free.
        name: <a href="/features/sign-up-forms/">Sign-up forms</a>
      - icon: hugeicons:clock-01
        description: If two payments race for the last ticket, the second is refunded automatically.
        name: <a href="/features/overbooking-prevention/">Overbooking prevention</a>
      - icon: hugeicons:money-receive-square
        description: Process individual or bulk refunds directly from the admin panel with automatic payment provider sync.
        name: <a href="/features/refunds/">Refunds</a>
      - icon: hugeicons:file-validation
        description: Set global terms that attendees must agree to before booking, with configurable contact fields and special instructions.
        name: <a href="/features/terms-and-conditions/">Terms & conditions</a>
      - icon: hugeicons:timer-01
        description: Set cut-off times for bookings and configure purchase limits per event or per attendee.
        name: <a href="/features/registration-deadlines/">Registration deadlines</a>
  - type: features
    dark: true
    intro_content: "## Managing events"
    items:
      - icon: hugeicons:qr-code
        description: Every ticket gets a unique QR code that you can scan with any phone camera.
        name: <a href="/features/qr-code-check-ins/">QR code check-ins</a>
      - icon: hugeicons:calendar-03
        description: Per-date capacity with a calendar picker and configurable holiday and blackout dates, which is perfect for classes and recurring bookings.
        name: <a href="/features/daily-events/">Daily events</a>
      - icon: hugeicons:folder-02
        description: Organise events into groups for multi-event bookings and single checkout.
        name: <a href="/features/groups/">Groups</a>
      - icon: hugeicons:user-multiple
        description: Invite team members as owners or managers, each with their own login and session.
        name: <a href="/features/users/">Multi-user</a>
      - icon: hugeicons:user-add-01
        description: Add walk-ins and comp tickets directly from the admin panel, and edit attendee details or reassign events as needed.
        name: <a href="/features/manual-attendees/">Manual attendees</a>
      - icon: hugeicons:copy-01
        description: Clone existing events to quickly set up similar bookings without re-entering all the details.
        name: <a href="/features/duplicate-events/">Duplicate events</a>
      - icon: hugeicons:help-circle
        description: Add multiple-choice questions to events and collect structured answers from attendees at checkout, with answers visible across the admin interface.
        name: <a href="/features/custom-questions/">Custom questions</a>
      - icon: hugeicons:csv-02
        description: Export attendee lists as CSV with date and check-in status filtering.
        name: <a href="/features/csv-export/">CSV export</a>
      - icon: hugeicons:activity-01
        description: Track all admin actions and booking activity with a built-in audit trail and calendar views.
        name: <a href="/features/activity-logs/">Activity logs</a>
      - icon: hugeicons:book-open-01
        description: Integrated documentation at /admin/guide covers every feature, so new team members can get up to speed fast.
        name: <a href="/features/admin-guide/">Built-in admin guide</a>
  - type: features
    intro_content: "## Customising your site"
    items:
      - icon: hugeicons:globe-02
        description: Get a host-provided subdomain instantly, then add your own custom domain whenever you're ready.
        name: <a href="/features/custom-domain/">Custom domain</a>
      - icon: hugeicons:paint-brush-01
        description: Built-in public site with light and dark theme options, so your booking pages match your brand.
        name: <a href="/features/light-and-dark-themes/">Light & dark themes</a>
      - icon: hugeicons:edit-01
        description: Write event descriptions in Markdown with header image uploads, so your events look great without a page builder.
        name: <a href="/features/markdown-descriptions/">Markdown descriptions</a>
      - icon: hugeicons:mail-edit-01
        description: Customise confirmation emails with Liquid syntax, including built-in currency and pluralise filters.
        name: <a href="/features/email-templates/">Email templates</a>
      - icon: hugeicons:code
        description: Drop an iframe snippet into your website to show events inline, with configurable CSP.
        name: <a href="/features/embeddable-widget/">Embeddable widget</a>
      - icon: hugeicons:link-03
        description: Send attendees to a custom URL after booking, perfect for thank-you pages or post-purchase instructions.
        name: <a href="/features/custom-redirects/">Custom redirects</a>
  - type: features
    dark: true
    intro_content: "## Platform & integrations"
    items:
      - icon: hugeicons:source-code
        description: AGPLv3 licensed with every feature included and no open-core model.
        name: <a href="/features/open-source/">Open source</a>
      - icon: hugeicons:view-off
        description: Chobble does not collect attendee data, build audience profiles, or market to your attendees.
        name: <a href="/features/no-spying/">No spying</a>
      - icon: hugeicons:lock
        description: All personal data encrypted at rest with hybrid RSA-OAEP + AES-256-GCM.
        name: <a href="/features/encrypted/">Encrypted</a>
      - icon: hugeicons:global
        description: UK company, Slovenian hosting. Attendee data stays in the EU, under UK-GDPR and EU data protection law.
        name: <a href="/features/european/">European</a>
      - icon: hugeicons:smart-phone-01
        description: Attendees can add tickets to Apple Wallet or Google Wallet for easy access at the door.
        name: <a href="/features/apple-wallet/">Apple & Google Wallet</a>
      - icon: hugeicons:mail-01
        description: Choose from Resend, Postmark, SendGrid, or Mailgun (US and EU) for notifications.
        name: <a href="/features/email-providers/">Email providers</a>
      - icon: hugeicons:api
        description: RESTful JSON API for building custom integrations, plus authenticated admin API with API keys for reading and editing private data.
        name: <a href="/features/public-api/">Public & Admin API</a>
      - icon: hugeicons:dashboard-square-edit
        description: Full CRUD for events via API keys (create, update, list, delete, and toggle events) programmatically with JSON.
        name: <a href="/features/admin-api/">Admin API</a>
      - icon: hugeicons:notification-03
        description: Get POST notifications on every booking to integrate with your tools.
        name: <a href="/features/webhooks/">Webhooks</a>
      - icon: hugeicons:rss
        description: ICS calendar and RSS feeds for your events, so attendees can subscribe in their calendar app or feed reader.
        name: <a href="/features/rss-and-calendar-feeds/">RSS & calendar feeds</a>
  - type: cta
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## See it in action

      Sign up for managed hosting at £50/year, or browse the source code and documentation on GitHub.
name: Features - Chobble Tickets
---
