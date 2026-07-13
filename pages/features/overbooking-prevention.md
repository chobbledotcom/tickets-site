---
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
    content: |-
      # Overbooking prevention

      Capacity is checked when each payment is confirmed. If two people race for the last ticket, the second is refunded automatically.
  - type: markdown
    content: |
      ## How it works

      When someone opens the booking form, Chobble Tickets compares the
      number of confirmed attendees against the event capacity. If the
      event is full, the form is replaced with a sold-out message.

      ## What happens if two people pay for the last ticket

      Two people can both reach the payment page for the last ticket at
      the same time. When their payments come back from Stripe, Square, or SumUp,
      Chobble Tickets checks capacity again. The first payment to arrive
      gets the ticket. The second is refunded automatically and the
      customer sees the message:

      > Sorry, this event sold out while you were completing payment.

      The refund is issued automatically, so you do not have to handle it
      yourself.

      ## Per-date capacity

      For [daily events](/features/daily-events/), the same checks run for
      each date independently. A class on Monday filling up does not
      affect Tuesday's availability.

      ## Other checks after payment

      The confirmation step also checks prices, listing status, package
      members, required child choices and add-ons again. It does not rely on
      the values sent by the browser.

      If a paid order can no longer be honoured, Chobble Tickets keeps a
      quantity-zero record, issues the refund, records the cash movement and
      adds a note for the organiser. This leaves an audit trail of the failed
      booking without counting it against capacity.

      ## Limitations

      These checks are a best effort. They prevent overbooking under
      normal operation, but they are not a guarantee. A software bug, a
      database outage, or a delayed payment confirmation from Stripe, Square, or SumUp could still let an oversell through. If that happens,
      Chobble Tickets refunds the affected customer.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Capacity checks included

      Built-in capacity management for fixed-date and daily events.
name: Overbooking Prevention - Chobble Tickets
---
