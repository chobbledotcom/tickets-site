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

      A daily listing lets customers pick a date when they book, and its number of places applies to each date on its own. One listing can run every day with a fresh set of places, instead of one listing per date.
  - type: split-image
    content: |
      ## Admin calendar

      The admin dashboard includes a calendar view for daily events, so you
      can see at a glance which dates have bookings, how many places are
      left, and who's attending each session.
    figure_src: /images/screenshots/daily-events-calendar.png
    figure_alt: Admin calendar for Little Acorns Stay and Play, with four of twelve places remaining
    figure_caption: Check each date's bookings and remaining places from the calendar.
  - type: markdown
    content: |
      ## Perfect for recurring bookings

      Daily events are designed for classes, workshops, and recurring sessions
      where each date has its own capacity. Attendees pick their date from a
      calendar picker, and the system tracks availability for each date
      independently. The same [overbooking checks](/features/overbooking-prevention/)
      apply to each date.

      ## Example

      A stay and play session has 12 places a day and runs Monday to Friday.
      The organiser creates one daily listing with 12 places and sets its
      bookable days to weekdays. When four families have booked Tuesday, the
      Tuesday date shows eight places left, while Wednesday still has 12.

      ## Holidays

      Adding a holiday removes its days from the date choices of every daily
      listing on the site, while the days either side stay on sale. Deleting
      the holiday puts the days straight back. Holidays do not affect
      standard listings sold for one fixed date and time, so a one-off
      concert on a bank holiday still sells.

      Each daily listing can also set a minimum notice period and how far
      ahead customers may book, described on the [registration
      deadlines](/features/registration-deadlines/) page.

      ## Multi-day bookings

      A daily event can be booked for more than one day at once. Set a
      duration in days on the event, and the capacity engine checks every
      day in the range against both the event and group caps. The calendar
      picker excludes start dates whose full range would hit a non-bookable
      day, so a buyer cannot pick a Wednesday start for a three-day booking
      that runs into a blackout Friday.

      Per-day remaining capacity is shown for grouped daily events, so you
      can see how many places are left on each date at a glance. The rules
      for holidays and multi-day stays are published as test cases for
      [holidays](https://github.com/chobbledotcom/tickets/blob/main/specs/bookings/taking-a-holiday.feature)
      and [stays of several
      days](https://github.com/chobbledotcom/tickets/blob/main/specs/bookings/booking-several-days.feature).

  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Daily listings come with every hosted site, at £50 a year or £5 a month.
name: Daily Events - Chobble Tickets
---
