---
layout: design-system-base.html
title: Overbooking Prevention - Chobble Tickets
meta_title: Overbooking Prevention - Chobble Tickets
meta_description: Capacity is checked when each payment is confirmed. If two people race for the last ticket, the second is refunded automatically.
permalink: /features/overbooking-prevention/
eleventyNavigation:
  key: Overbooking Prevention
  parent: Selling Tickets
  order: 1
blocks:
  - type: hero
    class: gradient
    title: Overbooking prevention
    lead: >-
      Capacity is checked when each payment is confirmed. If two people
      race for the last ticket, the second is refunded automatically,
      so you never oversell an event.

  - type: markdown
    content: |
      ## How it works

      When someone opens the booking form, Chobble Tickets compares the
      number of confirmed attendees against the event capacity. If the
      event is full, the form is replaced with a sold-out message.

      ## What happens if two people pay for the last ticket

      Two people can both reach the payment page for the last ticket at
      the same time. When their payments come back from Stripe or Square,
      Chobble Tickets checks capacity again. The first payment to arrive
      gets the ticket. The second is refunded automatically and the
      customer sees the message:

      > Sorry, this event sold out while you were completing payment.

      You never oversell, and you do not have to issue the refund yourself.

      ## Per-date capacity

      For [daily events](/features/daily-events/), the same checks run for
      each date independently. A class on Monday filling up does not
      affect Tuesday's availability.

  - type: cta
    title: Sell with confidence
    description: Never oversell an event with built-in capacity management.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
