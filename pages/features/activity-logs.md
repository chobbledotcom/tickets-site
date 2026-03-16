---
layout: design-system-base.html
title: Activity Logs - Chobble Tickets
meta_title: Activity Logs - Chobble Tickets
meta_description: Track all admin actions and booking activity with a built-in audit trail.
permalink: /features/activity-logs/
eleventyNavigation:
  key: Activity Logs
  parent: Features
  order: 20
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Activity Logs
    lead: >-
      Track all admin actions and booking activity with a built-in audit
      trail.

  - type: markdown
    content: |
      ## Full Audit Trail

      Every action in the admin panel is logged: bookings, check-ins,
      refunds, event changes, and user management. See who did what and
      when, which is essential for accountability when multiple team members
      are managing events.

      ## Global and Per-Event Views

      View the full activity log across your entire installation at
      `/admin/log`, or drill down into a specific event's activity from
      its detail page to see only the actions related to that event.

      ## Debugging and Support

      When something goes wrong or an attendee has a question, the activity
      log lets you trace exactly what happened, so there's no guesswork
      involved.

  - type: cta
    title: Full Visibility
    description: Track every action with built-in activity logs.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
