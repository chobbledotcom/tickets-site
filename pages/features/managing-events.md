---
layout: design-system-base.html
title: Managing Events - Chobble Tickets
meta_title: Managing Events - Chobble Tickets
meta_description: Daily scheduling, team access, attendee management, check-ins, and reporting tools to run your events smoothly.
permalink: /features/managing-events/
eleventyNavigation:
  key: Managing Events
  parent: Features
  order: 2
blocks:
  - type: hero
    class: gradient
    lead: Daily scheduling, team access, attendee management, check-ins, and reporting tools to run your events smoothly.
    name: Managing events
  - type: markdown
    content: |
      ![The event creation form with fields for name, type, description, pricing, and more](/images/screenshots/create-event-form.png)
  - type: features
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
      - icon: hugeicons:csv-02
        description: Export attendee lists as CSV with date and check-in status filtering.
        name: <a href="/features/csv-export/">CSV export</a>
      - icon: hugeicons:activity-01
        description: Track all admin actions and booking activity with a built-in audit trail and calendar views.
        name: <a href="/features/activity-logs/">Activity logs</a>
      - icon: hugeicons:book-open-01
        description: Integrated documentation at /admin/guide covers every feature, so new team members can get up to speed fast.
        name: <a href="/features/admin-guide/">Built-in admin guide</a>
  - type: cta
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Start managing events

      Sign up for managed hosting at £50/year, or browse the full technical documentation.
name: Managing Events - Chobble Tickets
---
