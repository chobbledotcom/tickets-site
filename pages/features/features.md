---

title: Features - Chobble Tickets
meta_title: Features - Chobble Tickets
meta_description: Event ticketing software with payments, packages, QR check-in, refunds, bulk event tools, reports, privacy controls, APIs and a hosted booking website.
permalink: /features/
eleventyNavigation:
  key: Features
  order: 1
blocks:
- type: hero
  class: gradient
  content: |-
    # Features

    Chobble Tickets covers sales, event operations, reporting, public booking pages and integrations. Every hosted and self-hosted site includes the same product features.
- type: split-image
  content: |
    ## One place to run your events

    Create listings, manage bookings, check people in, send updates and review
    your money from one administration area. Every feature is included on
    hosted and self-hosted sites.
  figure_src: /images/screenshots/dashboard.png
  figure_alt: Chobble Tickets administration dashboard showing listings and booking totals
  figure_caption: Keep event setup, bookings and day-to-day work together.
- type: features
  intro_content: "## Selling tickets"
  items:
  - icon: hugeicons:credit-card
    description: Accept payments via Stripe, Square, or SumUp with fixed pricing or pay-what-you-want, and automatic refunds.
    name: <a href="/features/stripe-and-square/">Stripe, Square & SumUp</a>
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
    description: Set <a href="/features/terms-and-conditions/">terms and required contact fields</a>, plus <a href="/features/registration-deadlines/">booking cut-offs and purchase limits</a>.
    name: Booking rules
  - icon: hugeicons:tag-01
    description: Offer promo codes, discount codes, surcharges, and opt-in add-ons at checkout with stock limits and a live running total.
    name: <a href="/features/promo-codes-and-add-ons/">Promo codes & add-ons</a>
  - icon: hugeicons:link-04
    description: Require buyers to choose child listings, like required extras or options, when booking a parent event.
    name: <a href="/features/parent-child-listings/">Parent/child listings</a>
  - icon: hugeicons:package
    description: Bundle several listings into one package with a single price, booked together in one checkout.
    name: <a href="/features/packages/">Packages</a>
  - icon: hugeicons:wallet-02
    description: Take a deposit at booking and send customers a link to pay the outstanding balance later.
    name: <a href="/features/deposits-and-balance-payments/">Deposits & balances</a>
  - icon: hugeicons:calendar-add-01
    description: Let customers choose how many days to book, with a separate price for each day of the hire.
    name: <a href="/features/multi-day-hire/">Multi-day hire</a>
  - icon: hugeicons:location-01
    description: Customers type their postcode and pick their address from a list, with results cached encrypted.
    name: <a href="/features/postcode-lookup/">Postcode lookup</a>
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
    description: Invite team members as owners, managers, editors, or logistics agents, each with their own login and session.
    name: <a href="/features/users/">Multi-user</a>
  - icon: hugeicons:user-edit-01
    description: A content-only login that can write your listings and site copy but cannot decrypt attendee data.
    name: <a href="/features/editors/">Editors</a>
  - icon: hugeicons:user-add-01
    description: Add walk-ins and comp tickets directly from the admin panel, and edit attendee details or reassign events as needed.
    name: <a href="/features/manual-attendees/">Manual attendees</a>
  - icon: hugeicons:user-switch
    description: Compare two attendee records and choose which contact details, answers and bookings to retain, with payment conflicts handled explicitly.
    name: <a href="/features/manual-attendees/#merge-duplicate-attendees">Merge duplicate attendees</a>
  - icon: hugeicons:delivery-truck-02
    description: Manage deliveries, equipment hire, and collections at customer locations with a deliveries run sheet for agents.
    name: <a href="/features/logistics/">Logistics</a>
  - icon: hugeicons:wrench-01
    description: Block out capacity for servicing, maintenance, or staff holds without creating a customer booking.
    name: <a href="/features/servicing-events/">Servicing events</a>
  - icon: hugeicons:copy-01
    description: Copy one listing, or duplicate a whole group with name replacement and date shifting.
    name: <a href="/features/duplicate-events/">Duplicate events</a>
  - icon: hugeicons:layers-01
    description: Set inherited listing defaults, duplicate whole groups, and activate or deactivate related listings together.
    name: <a href="/features/bulk-event-management/">Bulk event management</a>
  - icon: hugeicons:file-import
    description: Move listings and groups between sites as validated JSON, including prices, memberships, packages and parent references.
    name: <a href="/features/catalogue-import-export/">Catalogue import and export</a>
  - icon: hugeicons:help-circle
    description: Add multiple-choice or free-text questions to events and collect structured answers from attendees at checkout, with answers visible across the admin interface.
    name: <a href="/features/custom-questions/">Custom questions</a>
  - icon: hugeicons:csv-02
    description: Export listings, attendees and staff calendars with revenue, capacity, payment, answer, check-in and location fields.
    name: <a href="/features/csv-export/">CSV export</a>
  - icon: hugeicons:activity-01
    description: Track all admin actions and booking activity with a built-in audit trail and calendar views.
    name: <a href="/features/activity-logs/">Activity logs</a>
  - icon: hugeicons:coins-01
    description: Every income figure, refund, and balance comes from a single double-entry ledger. Record cash and offline payments too.
    name: <a href="/features/ledger/">Accounting ledger</a>
  - icon: hugeicons:book-open-01
    description: Integrated documentation at /admin/guide covers every feature, so new team members can get up to speed fast.
    name: <a href="/features/admin-guide/">Built-in admin guide</a>
  - icon: hugeicons:mail-send-01
    description: Send targeted email campaigns to attendee segments, with previews, drafts, and a public unsubscribe link.
    name: <a href="/features/bulk-email/">Bulk email</a>
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
  - icon: hugeicons:image-02
    description: Upload images to listings and groups, with thumbnails, alt text, and automatic WebP conversion on upload.
    name: <a href="/features/images/">Images</a>
  - icon: hugeicons:layout-01
    description: Every site includes a public website with a homepage, contact page, content pages, and custom CSS.
    name: <a href="/features/your-public-website/">Your public website</a>
  - icon: hugeicons:shopping-cart-01
    description: One JavaScript file turns links on your existing website into add-to-cart buttons with a floating cart.
    name: <a href="/features/order-widget/">Order widget</a>
- type: features
  dark: true
  intro_content: "## Platform & integrations"
  items:
  - icon: hugeicons:source-code
    description: AGPLv3 licensed with every feature included and no open-core model.
    name: <a href="/features/open-source/">Open source</a>
  - icon: hugeicons:view-off
    description: Managed hosting processes encrypted attendee records but does not use them for audience profiles, advertising or other event marketing.
    name: <a href="/features/no-spying/">No attendee marketing</a>
  - icon: hugeicons:lock
    description: All personal data encrypted at rest with hybrid RSA-OAEP + AES-256-GCM.
    name: <a href="/features/encrypted/">Encrypted</a>
  - icon: hugeicons:delete-02
    description: Set retention for orphaned records, erase contact history and export the attendee records held by the organiser.
    name: <a href="/features/privacy-controls/">Privacy controls</a>
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
    description: Public JSON endpoints for listings and booking, plus authenticated administration of listings, groups and holidays.
    name: <a href="/features/public-api/">Public & Admin API</a>
  - icon: hugeicons:notification-03
    description: Get POST notifications on every booking to integrate with your tools.
    name: <a href="/features/webhooks/">Webhooks</a>
  - icon: hugeicons:rss
    description: ICS calendar and RSS feeds for your events, so attendees can subscribe in their calendar app or feed reader.
    name: <a href="/features/rss-and-calendar-feeds/">RSS & calendar feeds</a>
  - icon: hugeicons:message-01
    description: Send and receive SMS messages from your own Android phone and number, with replies recorded per contact.
    name: <a href="/features/sms-messages/">SMS messages</a>
  - icon: hugeicons:database-restore
    description: Full database backups to a single zip file, with point-in-time restore. Updates refuse to run without a recent backup.
    name: <a href="/features/backups/">Backups & restore</a>
- type: cta
  button:
    text: Sign Up
    href: https://tix.chobble.com/ticket/register
    variant: primary
    size: lg
  content: |-
    ## See it in action

    Sign up for managed hosting at £50/year or £5/month, or browse the source code and documentation on GitHub.
name: Features - Chobble Tickets
---
