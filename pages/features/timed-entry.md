---
title: Timed Entry Ticketing - Chobble Tickets
meta_title: Timed Entry Ticketing - Chobble Tickets
meta_description: Sell entry slots by date and time for attractions, trails and exhibitions, with places counted per slot and an optional limit for the whole day.
permalink: /features/timed-entry/
eleventyNavigation:
  key: Timed Entry
  parent: Selling Tickets
  order: 5
blocks:
  - type: hero
    class: gradient
    content: |-
      # Timed entry ticketing

      Chobble Tickets sells timed entry by giving each entry time its own listing, such as "Entry at 10am" and "Entry at 2pm". Visitors choose a date and a time, each time slot has its own number of places, and a group can cap the total for the whole day.
  - type: split-image
    content: |
      ## How slots are set up

      Each time slot is a [daily listing](/features/daily-events/), so the
      visitor picks the date from a calendar and the slot's places are
      counted for that date on its own. Bookable days limit each slot to
      the days it runs. Four slots that run every Sunday are four listings,
      not a new listing for each Sunday.

      The slots go into one [group](/features/groups/). Hiding each slot
      from the public list leaves the group as the one thing visitors see,
      and they choose their time inside it.
    figure_src: /images/screenshots/industry-scare-attraction-calendar.png
    figure_alt: An admin calendar for Hollowtree Scare Trail with Friday 4 September 2026 selected and 25 of 40 places remaining at £18
    figure_caption: The admin calendar shows how many places are left on each date.
  - type: markdown
    content: |
      ## Example

      A farm park takes 60 visitors in each of three entry slots, at 10am,
      12pm and 2pm, but only 150 people on site in a day. It creates three
      daily listings with 60 places each and puts them in a group with a
      maximum of 150. On a busy Saturday, once 150 tickets have been sold
      across the three slots, all three stop selling, even if one slot still
      has places of its own.

      At the gate, staff scan each ticket with a phone, using the scanner for
      the slot that is arriving. If a 2pm ticket is scanned at the 10am
      slot, the [scanner](/features/qr-code-check-ins/) asks staff to confirm
      before checking the visitor in.

      ## Paid slots and capacity

      Opening the checkout does not hold a slot. Places are counted when the
      payment is confirmed, and if two payments race for the last place in a
      slot, the later one is [refunded automatically](/features/overbooking-prevention/).
      [Registration deadlines](/features/registration-deadlines/) can stop
      bookings a set number of days ahead.

      ## Limits

      There is no separate time field, so the slot's time is written in its
      name. Each slot is set up as its own listing, which takes longer for an
      attraction with many short slots across the day. Chobble Tickets does
      not sell seats, and does not run tills or kiosks for walk-up sales,
      though staff can [add walk-ups by hand](/features/manual-attendees/).

      The [attractions and days out page](/perfect-for/attractions-and-days-out/)
      covers farm parks, museums and grottos in more detail.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Timed entry needs no extra module, and managed hosting costs £50 a year or £5 a month.
name: Timed Entry Ticketing - Chobble Tickets
---
