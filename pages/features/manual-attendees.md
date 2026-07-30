---
title: Manual Attendees - Chobble Tickets
meta_title: Manual Attendees - Chobble Tickets
meta_description: Add walk-ins and comp tickets, edit bookings, merge duplicate attendee records and keep offline payments with the same event record.
permalink: /features/manual-attendees/
ticket_evidence_capture: contact-record
eleventyNavigation:
  key: Manual Attendees
  parent: Managing Events
  order: 4
blocks:
  - type: hero
    class: gradient
    content: |-
      # Manual attendees

      Add walk-ins and complimentary tickets, edit booking records, and merge duplicate attendees from the administration area.
  - type: markdown
    content: |
      ## One list for every guest

      Add a name, contact details, and ticket quantity from the admin area.
      The new record appears in the same event list as online bookings, ready
      for check-in and export.
  - type: markdown
    content: |
      ## Walk-ins and comp tickets

      Not every attendee books online. Add walk-up registrations and
      complimentary tickets directly from the admin panel, so your attendee
      list stays complete and accurate regardless of how someone got their
      place.

      ## Edit and reassign

      Need to correct a name, update an email address, or move someone to a
      different event? Edit attendee details and reassign events from the
      admin panel without needing to cancel and rebook.

      ## Complete records

      Manually added attendees appear alongside online bookings in your
      attendee lists, CSV exports, and check-in screens, so you always have
      one complete picture of who's coming.

  - type: split-image
    content: |
      ## What is kept about one person

      Each person the site has dealt with has a record of their own: how many
      times they booked online, how many bookings you added for them, how
      often they have been in touch, and a private note only you can read.

      The record is filed under a one-way code made from their email address,
      so the address itself is never stored beside it. You can correct every
      figure on it, and the note, yourself.
    figure_src: /images/screenshots/manual-attendee-community-supper.png
    figure_alt: A screenshot of a contact record, showing 9 visits, 5 online bookings, 2 admin bookings, 4 messages sent and a private note reading VIP Sam
    figure_caption: 'What the site remembers about someone, and the private note only the organiser reads. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/attendees/the-record-kept-about-someone.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## Notes per attendee

      A booking also carries system notes: auto-generated red alerts when
      something needs your attention, such as a booking that was charged but
      could not be honoured and was refunded. They appear on the attendee
      record, plus an expandable summary at the top of the event's attendee
      list and the global attendee list, so outstanding issues are visible
      without opening every record.

      ## Merge duplicate attendees

      Administrators can compare two records and choose which contact details,
      answers and bookings to keep. Bookings and ledger entries move to the
      retained record in one operation.

      If both records contain payments that conflict, Chobble Tickets requires
      an explicit credit or write-off choice before completing the merge. This
      prevents a duplicate record from silently changing the account balance.

      ## Bookings summary

      The attendee edit page shows a read-only summary table of everything
      that attendee has booked - each event, the date range for daily
      events, the quantity, and the check-in or refund status, with a total
      ticket count. You can see what someone booked without expanding the
      editor.

      ## No-quantity lines

      Sometimes a booking line should stay on the record for bookkeeping but
      not count towards capacity or check-in - a comp, a staff place, or a
      placeholder. You can mark a line as "no quantity" so it stays visible
      on the attendee record but counts as zero tickets.

      A no-quantity line is excluded from ticket counts, capacity, check-in,
      bulk email audiences, and the public ticket page. A paid line must be
      refunded before it can be marked no-quantity.

      Cash and offline payments can be recorded against an attendee on the
      [ledger](/features/ledger/), so a walk-in who pays in cash still has
      their payment reflected in the balance.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Attendee records

      Handle walk-ins and comp tickets alongside online bookings.
name: Manual Attendees - Chobble Tickets
---
