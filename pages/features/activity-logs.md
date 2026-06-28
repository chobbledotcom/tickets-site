---
title: Activity Logs - Chobble Tickets
meta_title: Activity Logs - Chobble Tickets
meta_description: Track all admin actions and booking activity with a built-in audit trail.
permalink: /features/activity-logs/
eleventyNavigation:
  key: Activity Logs
  parent: Managing Events
  order: 7
blocks:
  - type: hero
    class: gradient
    content: |-
      # Activity logs

      Track all admin actions and booking activity with a built-in audit trail.
  - type: markdown
    content: |
      ![The activity log showing a timeline of admin actions](/images/screenshots/activity-log.png)

      ## Full audit trail

      Every action in the admin panel is logged: bookings, check-ins,
      refunds, event changes, and user management. See who did what and
      when, which is essential for accountability when multiple team members
      are managing events.

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

      ## Debugging and support

      When something goes wrong or an attendee has a question, the activity
      log lets you trace exactly what happened, so there's no guesswork
      involved.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Activity records

      Track admin and booking activity with built-in activity logs.
name: Activity Logs - Chobble Tickets---
