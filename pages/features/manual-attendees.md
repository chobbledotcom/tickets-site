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

      Organisers can add a booking themselves for someone who rang up, paid cash or has a free place. A booking added by hand is a real booking: it uses up a place, appears in the attendee list and checks in at the door like one made online.
  - type: markdown
    content: |
      ## One list for every guest

      Add a name, contact details, and ticket quantity from the admin area.
      The new record appears in the same event list as online bookings, ready
      for check-in and export.
  - type: markdown
    content: |
      ## Example

      A community supper has 40 places, and 32 have sold online. A regular
      rings to book two places and will pay cash on the night. The organiser
      adds the booking with a quantity of two, so the listing shows six
      places left rather than eight. On the night, the cash goes into the
      [ledger](/features/ledger/) against that booking.

      A booking added by hand is refused if the listing has no room, in the
      same way an online booking is. The rule is one of the [published test
      cases](https://github.com/chobbledotcom/tickets/blob/main/specs/bookings/adding-a-booking-by-hand.feature)
      for bookings added by hand.

      ## Walk-ins and comp tickets

      Walk-up registrations and complimentary tickets go in from the admin
      area, so the attendee list includes everyone however they got their
      place.

      ## Edit and reassign

      Names, email addresses and other details can be corrected from the
      admin area, and a booking can move to a different listing without being
      cancelled and made again.

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
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Bookings added by hand come with every hosted site, at £50 a year or £5 a month.
name: Manual Attendees - Chobble Tickets
---
