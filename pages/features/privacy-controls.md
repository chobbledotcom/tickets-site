---
title: Attendee Privacy Controls - Chobble Tickets
meta_title: Attendee Data Retention and Privacy Controls | Chobble Tickets
meta_description: Encrypt attendee details, set retention for orphaned records, remove contact history, and export the records held by an event organiser.
permalink: /features/privacy-controls/
ticket_evidence_capture: record-put-right
eleventyNavigation:
  key: Privacy Controls
  parent: Platform & Integrations
  order: 3
blocks:
  - type: hero
    class: gradient
    content: |-
      # Attendee data retention and privacy controls

      Chobble Tickets encrypts personal data and gives organisers tools to export records, remove contact history and delete old orphaned bookings.
  - type: split-image
    content: |
      ## Retention for orphaned records

      Deleting a listing can leave attendee records that no longer belong to an active listing. The privacy page shows how many of these orphaned records remain.

      Owners can delete matching records at once or let Chobble Tickets clear them each day. The retention setting ranges from immediate deletion to five years, with six months as the default.

      ## Contact erasure

      A separate erasure tool accepts an email address or phone number. It removes that person's returning-customer recognition, unsubscribe state and contact history.

      The erasure does not delete ticket bookings. Booking records are kept separately because an organiser may need them for event operation, accounting or another stated purpose.

      ## Data access and portability

      Attendee CSV files can include contact details, answers, payment references, check-in state and ticket links. Organisers choose when to export this data and which other systems receive it.

      Catalogue exports do not include attendees or financial history. This keeps reusable event setup separate from personal and payment records.

      These controls support an organiser's data-protection work but do not decide its legal retention period. Each organiser remains responsible for deciding what it collects and how long it needs the records.

      Alongside the bookings themselves, the site keeps a short contact-history record for each person: how often they booked, how often they were in touch, and a private note. The counts and the note are for the organiser to correct, and the erasure tool removes that record without touching the bookings.
    figure_src: /images/screenshots/record-put-right.png
    figure_alt: A screenshot of a contact record with the counts corrected to 9 visits, 11 online bookings, 2 admin bookings and 7 messages, and a private note reading Paid in cash
    figure_caption: 'The counts and the private note are for the organiser to correct, and what they save is what the record then says. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/attendees/the-record-kept-about-someone.feature">(src)</a></small>'
  - type: cta
    button:
      text: Start for £5
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Set your retention period

      Privacy and retention controls are included with every hosted or self-hosted site.
name: Attendee Data Retention and Privacy Controls | Chobble Tickets
---
