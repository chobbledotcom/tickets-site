---
layout: design-system-base.html
title: Groups - Chobble Tickets
meta_title: Event Groups & Tiered Ticket Types - Chobble Tickets
meta_description: Organise events into groups for multi-event bookings, single checkout, and tiered ticket types with shared capacity using Chobble Tickets.
permalink: /features/groups/
eleventyNavigation:
  key: Groups
  parent: Managing Events
  order: 2
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: Event groups
    lead: >-
      Organise related events together, let attendees book multiple events
      in a single checkout, and create tiered ticket types with shared
      capacity.

  - type: markdown
    content: |
      ![The groups management page for organising related events](/images/screenshots/groups.png)

      ## Multi-event bookings

      Running a festival with multiple stages? A conference with multiple
      tracks? A series of workshops? Group your events together and let
      attendees book several at once with a single checkout.

      The dashboard includes a multi-booking link builder that generates
      combined-event URLs (like `/ticket/event1+event2`), so attendees can
      book multiple events in one form and one payment.

      This is also useful for recurring events like a weekly class, a monthly
      meetup, or a season of concerts where grouping makes booking easy.

      ## Tiered ticket types with shared capacity

      Use **max attendees per group** to set a shared capacity cap across
      multiple events in a group. This lets you create tiered ticket types
      that share the same stock - for example:

      - **VIP + General Admission** - create two events in a group with a
        shared cap of 200. Set the VIP event to a max of 50 and price it
        higher. Once 200 total attendees are reached across both tiers,
        both stop selling.
      - **Early Bird + Standard** - offer a lower-priced early bird event
        with a small cap, then a standard-priced event sharing the same
        overall venue capacity.
      - **Adult + Child + Concession** - multiple price points for the
        same event, all counting against one venue limit.

      Each event in the group can have its own price, description, and
      individual cap, while the group-level max ensures you never exceed
      your venue's total capacity.

      ## Daily events

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
    title: Organise your events
    description: Group events together for a better booking experience.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
