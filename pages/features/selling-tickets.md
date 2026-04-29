---
layout: design-system-base.html
title: Selling Tickets - Chobble Tickets
meta_title: Selling Tickets - Chobble Tickets
meta_description: Accept payments, prevent overbooking, handle refunds, and set booking rules for your events.
permalink: /features/selling-tickets/
eleventyNavigation:
  key: Selling Tickets
  parent: Features
  order: 1
blocks:
  - type: hero
    class: gradient
    title: Selling tickets
    lead: >-
      Accept payments, prevent overbooking, handle refunds, and set your own
      booking rules.

  - type: features
    items:
      - icon: "hugeicons:credit-card"
        title: '<a href="/features/stripe-and-square/">Stripe & Square</a>'
        description: Accept payments via Stripe or Square with fixed pricing or pay-what-you-want, and automatic refunds.
      - icon: "hugeicons:ticket-01"
        title: '<a href="/features/purchasable-events/">Purchasable events</a>'
        description: Collect donations, sell raffle tickets, and take payments for anything that doesn't require physical attendance.
      - icon: "hugeicons:clock-01"
        title: '<a href="/features/overbooking-prevention/">Overbooking prevention</a>'
        description: If two payments race for the last ticket, the second is refunded automatically.
      - icon: "hugeicons:money-receive-square"
        title: '<a href="/features/refunds/">Refunds</a>'
        description: Process individual or bulk refunds directly from the admin panel with automatic payment provider sync.
      - icon: "hugeicons:file-validation"
        title: '<a href="/features/terms-and-conditions/">Terms & conditions</a>'
        description: Set global terms that attendees must agree to before booking, with configurable contact fields and special instructions.
      - icon: "hugeicons:timer-01"
        title: '<a href="/features/registration-deadlines/">Registration deadlines</a>'
        description: Set cut-off times for bookings and configure purchase limits per event or per attendee.

  - type: cta
    title: Start selling tickets
    description: Sign up for managed hosting at £50/year, or browse the full technical documentation.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
