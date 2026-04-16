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
    title: Managing events
    lead: >-
      Daily scheduling, team access, attendee management, check-ins, and
      reporting tools to run your events smoothly.

  - type: markdown
    content: |
      ![The event creation form with fields for name, type, description, pricing, and more](/images/screenshots/create-event-form.png)

  - type: features
    items:
      - icon: "hugeicons:qr-code"
        title: '<a href="/features/qr-code-check-ins/">QR code check-ins</a>'
        description: Every ticket gets a unique QR code that you can scan with any phone camera.
      - icon: "hugeicons:calendar-03"
        title: '<a href="/features/daily-events/">Daily events</a>'
        description: Per-date capacity with a calendar picker and configurable holiday and blackout dates, which is perfect for classes and recurring bookings.
      - icon: "hugeicons:folder-02"
        title: '<a href="/features/groups/">Groups</a>'
        description: Organise events into groups for multi-event bookings and single checkout.
      - icon: "hugeicons:user-multiple"
        title: '<a href="/features/users/">Multi-user</a>'
        description: Invite team members as owners or managers, each with their own login and session.
      - icon: "hugeicons:user-add-01"
        title: '<a href="/features/manual-attendees/">Manual attendees</a>'
        description: Add walk-ins and comp tickets directly from the admin panel, and edit attendee details or reassign events as needed.
      - icon: "hugeicons:copy-01"
        title: '<a href="/features/duplicate-events/">Duplicate events</a>'
        description: Clone existing events to quickly set up similar bookings without re-entering all the details.
      - icon: "hugeicons:csv-02"
        title: '<a href="/features/csv-export/">CSV export</a>'
        description: Export attendee lists as CSV with date and check-in status filtering.
      - icon: "hugeicons:activity-01"
        title: '<a href="/features/activity-logs/">Activity logs</a>'
        description: Track all admin actions and booking activity with a built-in audit trail and calendar views.
      - icon: "hugeicons:book-open-01"
        title: '<a href="/features/admin-guide/">Built-in admin guide</a>'
        description: Integrated documentation at /admin/guide covers every feature, so new team members can get up to speed fast.

  - type: cta
    title: Start managing events
    description: Sign up for managed hosting at £50/year, or browse the full technical documentation.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
