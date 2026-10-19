---
title: Registration Deadlines - Chobble Tickets
meta_title: Registration Deadlines - Chobble Tickets
meta_description: Close bookings at a set date and time for each listing. Orders sent after the deadline are refused, even if the form was filled in before it.
permalink: /features/registration-deadlines/
eleventyNavigation:
  key: Registration Deadlines
  parent: Selling Tickets
  order: 4
blocks:
  - type: hero
    class: gradient
    content: |-
      # Registration deadlines

      Each listing in Chobble Tickets can stop taking bookings at a date and time you choose. After that moment the booking page says registration is closed, and any order sent late is refused.
  - type: split-image
    content: |
      ## How a deadline works

      Each listing has an optional "Registration closes at" date and time, in
      the timezone set for your site. Before that moment the booking page
      works as normal. After it, the page says registration is closed and has
      no form to fill in.

      An order sent after the deadline is refused, even if the customer
      opened the page and filled it in before the deadline passed. The
      customer is told that registration closed while they were sending it.
    figure_src: /images/screenshots/registration-deadline.png
    figure_alt: A pottery workshop booking page showing a Registration closed message in place of the booking form
    figure_caption: After the closes-at time passes, the public booking page shows a registration-closed message and accepts no further bookings.
  - type: markdown
    content: |
      ## Orders with several listings

      When one page sells several listings, a closed listing is labelled as
      closed and the others stay on sale. For example, a page selling a
      coach trip and a souvenir mug can stop taking trip bookings at the
      deadline and keep selling the mug. If the trip closes while a customer
      is sending an order for both, neither is booked, so the customer does
      not end up with part of the order.

      ## Notice periods for daily bookings

      [Daily listings](/features/daily-events/), where customers pick a date,
      use two rolling limits instead of a single deadline. "Minimum days'
      notice" sets how far ahead a booking must be made, and "Maximum days
      ahead" sets how far into the future customers can book.

      ## Tickets per order

      "Max tickets per purchase" sets how many places one order can take. Set
      it to 4 and the quantity picker stops at 4, or at the number of places
      left if that is lower. It limits a single order, not a person, so the
      same customer can place a second order.

      ## Where this is tested

      Each behaviour on this page, including the order sent after closing, is
      a case in the [published booking-deadline
      tests](https://github.com/chobbledotcom/tickets/blob/main/specs/bookings/when-booking-closes.feature).
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Booking deadlines come with every hosted site, at £50 a year or £5 a month.
name: Registration Deadlines - Chobble Tickets
---
