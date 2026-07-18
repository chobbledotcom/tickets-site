---
title: Daily Events - Chobble Tickets
meta_title: Daily Events - Chobble Tickets
meta_description: Per-date capacity with a calendar picker and configurable holiday and blackout dates for classes and recurring bookings.
permalink: /features/daily-events/
eleventyNavigation:
  key: Daily Events
  parent: Managing Events
  order: 1
blocks:
  - type: hero
    class: gradient
    content: |-
      # Daily events

      Run events on specific dates with per-date capacity, a built-in calendar picker, and configurable holiday and blackout dates.
  - type: markdown
    content: |
      ## Perfect for recurring bookings

      Daily events are designed for classes, workshops, and recurring sessions
      where each date has its own capacity. Attendees pick their date from a
      calendar picker, and the system tracks availability for each date
      independently. The same [overbooking checks](/features/overbooking-prevention/)
      apply to each date.

      ## Holiday and blackout dates

      Configure holiday dates and blackout periods to automatically prevent
      bookings on days you're not running. This is ideal for term-time
      classes, weekly meetups that skip bank holidays, or any event with a
      recurring schedule that has exceptions.

      ## Multi-day bookings

      A daily event can be booked for more than one day at once. Set a
      duration in days on the event, and the capacity engine checks every
      day in the range against both the event and group caps. The calendar
      picker excludes start dates whose full range would hit a non-bookable
      day, so a buyer cannot pick a Wednesday start for a three-day booking
      that runs into a blackout Friday.

      Per-day remaining capacity is shown for grouped daily events, so you
      can see how many places are left on each date at a glance.

      ## Admin calendar

      The admin dashboard includes a calendar view for daily events, so you
      can see at a glance which dates have bookings, how many places are
      left, and who's attending each session.

      ![The admin calendar for Little Acorns Stay and Play, with four of twelve places remaining](/images/screenshots/daily-events-calendar.png)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Manage recurring events

      Set up daily events with per-date capacity and blackout dates.
name: Daily Events - Chobble Tickets
---
