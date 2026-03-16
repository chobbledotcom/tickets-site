---
layout: design-system-base.html
title: Groups - Chobble Tickets
meta_title: Event Groups - Chobble Tickets
meta_description: Organise events into groups for multi-event bookings and single checkout with Chobble Tickets.
permalink: /features/groups/
eleventyNavigation:
  key: Groups
  parent: Features
  order: 7
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Event Groups
    lead: >-
      Organise related events together and let attendees book multiple events
      in a single checkout.

  - type: markdown
    content: |
      ## Multi-Event Bookings

      Running a festival with multiple stages? A conference with multiple
      tracks? A series of workshops? Group your events together and let
      attendees book several at once with a single checkout.

      The dashboard includes a multi-booking link builder that generates
      combined-event URLs (like `/ticket/event1+event2`), so attendees can
      book multiple events in one form and one payment.

      This is also useful for recurring events like a weekly class, a monthly
      meetup, or a season of concerts where grouping makes booking easy.

      ## Daily Events

      For events that run on specific dates (classes, workshops, recurring
      sessions), daily events offer per-date capacity with a built-in calendar
      picker, and you can set holiday and blackout dates to prevent bookings
      on certain days.

      ## Organisation

      Groups help you keep your admin tidy too - you can filter and manage
      events by group in the dashboard, and each group gets its own public
      page listing all its events.

      See the [events documentation](https://chobbledotcom.github.io/tickets/docs/events.ts)
      for details on event grouping and availability management.

  - type: cta
    title: Organise Your Events
    description: Group events together for a better booking experience.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
