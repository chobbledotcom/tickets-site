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
    lead: Accept payments, prevent overbooking, handle refunds, and set your own booking rules.
    name: Selling tickets
  - type: features
    items:
      - icon: hugeicons:credit-card
        description: Accept payments via Stripe or Square with fixed pricing or pay-what-you-want, and automatic refunds.
        name: <a href="/features/stripe-and-square/">Stripe & Square</a>
      - icon: hugeicons:ticket-01
        description: Collect donations, sell raffle tickets, and take payments for anything that doesn't require physical attendance.
        name: <a href="/features/purchasable-events/">Purchasable events</a>
      - icon: hugeicons:clock-01
        description: If two payments race for the last ticket, the second is refunded automatically.
        name: <a href="/features/overbooking-prevention/">Overbooking prevention</a>
      - icon: hugeicons:money-receive-square
        description: Process individual or bulk refunds directly from the admin panel with automatic payment provider sync.
        name: <a href="/features/refunds/">Refunds</a>
      - icon: hugeicons:file-validation
        description: Set global terms that attendees must agree to before booking, with configurable contact fields and special instructions.
        name: <a href="/features/terms-and-conditions/">Terms & conditions</a>
      - icon: hugeicons:timer-01
        description: Set cut-off times for bookings and configure purchase limits per event or per attendee.
        name: <a href="/features/registration-deadlines/">Registration deadlines</a>
  - type: cta
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Start selling tickets

      Sign up for managed hosting at £50/year, or browse the full technical documentation.
name: Selling Tickets - Chobble Tickets
---
