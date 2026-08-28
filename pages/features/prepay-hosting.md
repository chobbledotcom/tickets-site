---
title: Prepay Hosting, Not Subscriptions - Chobble Tickets
meta_title: Prepay Hosting, Not Subscriptions | Chobble Tickets
meta_description: Chobble Tickets uses prepay hosting, not subscription billing. Pay for a month or a year in advance. If you stop, the site stays in read-only mode for 24 months while you export your data.
permalink: /features/prepay-hosting/
eleventyNavigation:
  key: Prepay Hosting
  parent: Platform & Integrations
  order: 1.5
blocks:
  - type: hero
    class: gradient
    content: |-
      # Prepay hosting, not subscriptions

      Chobble Tickets does not use subscription billing. Organisers pay for hosting in advance, a month or a year at a time. If a paid term ends without renewal, the site stays online in read-only mode for 24 months, and no back-payment is owed for that period.
  - type: markdown
    content: |
      ## How prepay billing works

      Managed hosting is paid in advance. An organiser pays £50 for a year or
      £5 for a month, and the site runs until that term ends. Annual hosting is
      £25 for charities, community groups, artists and musicians.

      Chobble does not store card details to take automatic renewals. Nothing is
      charged unless the organiser returns and pays for another term. There is no
      recurring payment that can fail, and no cancelled subscription to recover
      from.

      When a term ends, the organiser decides whether to pay for the next one.
      The [pricing page](/pricing/) lists what each term includes.
  - type: markdown
    content: |
      ## Read-only mode after a term ends

      If a paid term ends without renewal, the site enters read-only mode. New
      events, new bookings and new attendees cannot be created through the admin
      area or the public site.

      Existing tickets keep working. Attendees can still open their confirmation
      page, present a [QR code](/features/qr-code-check-ins/) at the door, and
      add a pass to [Apple or Google Wallet](/features/apple-wallet/).

      The organiser keeps full read access. They can still log in, view every
      record, [export attendee lists as CSV](/features/csv-export/) and
      [download a full database backup](/features/backups/). Read-only mode
      lasts for 24 months, and Chobble sends reminders during that period.
  - type: stats
    dark: true
    items:
      - value: "24"
        label: Months of read-only access
      - value: "£0"
        label: Back-payment to restart
      - value: "0"
        label: Automatic card charges
      - value: "£50"
        label: Prepay for a year
  - type: markdown
    content: |
      ## Restarting payments

      The organiser can restart payments at any time during read-only mode. As
      soon as a new prepay term is paid, the site returns to full operation and
      new sales can resume.

      No payment is owed for the months the site spent in read-only mode. The
      new term pays for the next month or year ahead, not for time that has
      already passed.

      Restarting does not need a new site. The database, listings, attendees,
      settings and domain all remain in place during read-only mode, so a
      restarted site picks up where it stopped.
  - type: markdown
    dark: true
    content: |
      ## After 24 months

      After 24 months in read-only mode, the site and its database are deleted.
      The deletion is permanent. Thirty days after deletion, any remaining
      encrypted backup is also removed.

      The read-only period exists so the organiser has time to act. Records can
      be exported as CSV, moved to another Chobble Tickets site using
      [catalogue import and export](/features/catalogue-import-export/), or
      migrated to an independent self-hosted deployment. None of that requires
      Chobble.
  - type: markdown
    content: |
      ## Why prepay instead of subscription

      Subscription billing keeps a service active while a recurring charge
      succeeds. Stopping the charge stops the service. Under that model, an
      organiser's access to their records and to the tickets already sold
      depends on the recurring payment continuing.

      Prepay separates paying for hosting from keeping access to records. The
      organiser always knows when a paid term ends, because they paid for it in
      advance. A missed renewal never removes access without notice, and the
      read-only window gives a long, fixed period to export or migrate.

      Chobble's income comes from the prepay terms organisers choose to buy,
      not from automatic charges that continue until cancelled. This is part of
      how the platform avoids lock-in: the data stays readable, the
      [source is published](/features/open-source/) under AGPL-3.0-only, and
      the organiser can move at any time.
  - type: markdown
    dark: true
    content: |
      ## How this compares

      Most hosted ticketing platforms reviewed on this site charge a recurring
      subscription or a fee on each ticket sold. A subscription keeps the
      service active while a recurring charge continues, and stops it when that
      charge stops. A per-ticket platform stops processing sales when payments
      to it stop.

      Chobble Tickets instead sells prepay terms and keeps an unpaid site
      readable in read-only mode for 24 months, with no back-payment owed for
      that period. The [provider directory](/compared-to/providers/) and the
      [platform fee calculator](/compared-to/compare-all/) show how each
      reviewed provider charges.
  - type: markdown
    content: |
      ## References

      - [Pricing](/pricing/) - the £50/year and £5/month prepay terms
      - [Hosting options](/hosting/) - managed hosting and self-hosting
      - [Backups and restore](/features/backups/) - download a full database backup at any time
      - [CSV export](/features/csv-export/) - export attendee records
      - [Catalogue import and export](/features/catalogue-import-export/) - move listings between Chobble Tickets sites
      - [No per-ticket fees](/features/no-per-ticket-fees/) - what each prepay term includes
  - type: cta
    button:
      text: Start for £5
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Start a hosted site

      The first prepay month costs £5. The site runs until the term ends, then stays readable in read-only mode if it is not renewed.
name: Prepay Hosting, Not Subscriptions | Chobble Tickets
---
