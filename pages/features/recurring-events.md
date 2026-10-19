---
title: Recurring Events - Chobble Tickets
meta_title: Recurring Event Ticketing - Chobble Tickets
meta_description: Sell a weekly quiz, class or club night as one listing. Customers pick a date, each date has its own places, and holidays close the weeks you are shut.
permalink: /features/recurring-events/
eleventyNavigation:
  key: Recurring Events
  parent: Managing Events
  order: 9
blocks:
  - type: hero
    class: gradient
    content: |-
      # Recurring event ticketing

      A weekly quiz, class or club night can be one listing in Chobble Tickets rather than a new listing for every date. Customers choose the date they want, and each date has its own number of places.
  - type: split-image
    content: |
      ## One listing, every week

      A recurring event is a [daily listing](/features/daily-events/) with
      its bookable days set to the days it runs. A quiz every Tuesday is one
      listing with Tuesday ticked, and the booking page offers each Tuesday
      in turn. A full week does not stop people booking the next one,
      because each date counts its own places.

      The same listing keeps its price, description, booking questions and
      check-in settings for every date, so a change to the description
      shows on all future dates at once.
    figure_src: /images/screenshots/taproom-repeating-quiz-night.png
    figure_alt: A weekly quiz's admin calendar with Tuesday 1 September 2026 selected and 8 of 12 places remaining
    figure_caption: The admin calendar shows the places left on the chosen Tuesday.
  - type: markdown
    content: |
      ## Example

      A taproom runs a quiz every Tuesday for 12 teams of up to six. It
      creates one listing called "Tuesday Quiz" with 12 places, ticks
      Tuesday as the only bookable day and sets bookings to close a day
      ahead. When four teams have booked the first Tuesday, that date shows
      8 places left, and the Tuesday after still shows 12. The taproom adds
      a holiday for the week of its summer closure, and that Tuesday drops
      out of the dates on offer.

      ## Sessions at several times

      A class that runs at 10am and 2pm every Saturday is two daily
      listings, one per time, with the time in each name. Putting both in a
      [group](/features/groups/) shows them together on one page, and a
      group maximum can limit the total across both sessions on each date.
      The [timed entry page](/features/timed-entry/) sets this out for
      attractions.

      ## A run of dated events

      A course of six fixed dates, or a season of different shows, suits
      standard listings instead, because each one has its own date, title
      and price. [Duplicating a group](/features/duplicate-events/) copies a
      whole term with every date moved on by the same number of days.

      ## Limits

      A daily listing repeats on days of the week. It cannot express "the
      third Thursday of the month", so a monthly event such as a folk club
      night is a standard listing for each month. Holidays close a date for
      every daily listing on the site at once, not for one listing. Times
      are part of the listing name rather than a separate field.

      The rules for holidays are published as [test
      cases](https://github.com/chobbledotcom/tickets/blob/main/specs/bookings/taking-a-holiday.feature).
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Recurring listings come with every hosted site, at £50 a year or £5 a month, however many dates they run.
name: Recurring Event Ticketing - Chobble Tickets
---
