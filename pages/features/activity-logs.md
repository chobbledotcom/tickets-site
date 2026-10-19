---
title: Activity Logs - Chobble Tickets
meta_title: Activity Logs - Chobble Tickets
meta_description: Track all admin actions and booking activity with a built-in audit trail.
permalink: /features/activity-logs/
ticket_evidence_capture: checked-in-on-the-day
eleventyNavigation:
  key: Activity Logs
  parent: Managing Events
  order: 7
blocks:
  - type: hero
    class: gradient
    content: |-
      # Activity logs

      The activity log is a dated record of what happened on a Chobble Tickets site: bookings, check-ins, refunds, listing changes, exports and failed email or webhook deliveries. Each listing and each attendee also keeps a record of its own.
  - type: split-image
    content: |
      ## What happened, and when

      Bookings, check-ins, refunds and listing changes are written to the
      log with the time they happened. A listing's own record
      shows only what happened to that listing, including each check-in at
      the door.
    figure_src: /images/screenshots/activity-log-summer-arts-fair.png
    figure_alt: A screenshot of a listing's activity record, showing an attendee checked in via scanner, the attendee created, and the listing created
    figure_caption: 'A check-in at the door is written into the record a listing keeps of its own day, alongside everything else that happened to it. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/attendees/checking-people-in-at-the-door.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## Global and per-event views

      View the full activity log across your entire installation at
      `/admin/log`, or drill down into a specific event's activity from
      its detail page to see only the actions related to that event.

      The global log shows Attendee and Event columns, each linking to the
      related person or event record. Per-event and per-attendee views omit
      these columns, since every row already relates to the same record.

      ## Encrypted at rest

      The entire activity log is encrypted with your owner key, the same
      key that protects attendee personal data. A database dump on its own,
      or a database dump together with the server's environment key, cannot
      decrypt the log. Only an admin signed in with the password can read
      it. Legacy entries are re-encrypted in the background after the
      update.

      This means the audit trail is subject to the same access control as
      the data it describes. If you [lose your admin password](/features/encrypted/),
      the activity log becomes permanently unreadable, alongside the
      attendee data.

      ## Example

      An attendee says they paid but never got a confirmation email. The
      organiser opens the global log and finds "Registration notification
      delivery failed." just after the time of the booking. The organiser
      then opens the attendee's page and re-sends the notification.

      ## Limits

      A log entry records what happened and when, but not which team member
      did it. The global log at `/admin/log` shows the latest 200 entries,
      so it is a view of recent activity. The record kept on each listing
      and attendee is the place to look further back.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      The activity log comes with every hosted site, at £50 a year or £5 a month.
name: Activity Logs - Chobble Tickets
---
