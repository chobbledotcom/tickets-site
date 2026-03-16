---
layout: design-system-base.html
title: Selling Tickets - Chobble Tickets
meta_title: Selling Tickets - Chobble Tickets
meta_description: Accept payments, prevent overbooking, handle refunds, and set booking rules - everything you need to sell tickets with confidence.
permalink: /features/selling-tickets/
eleventyNavigation:
  key: Selling Tickets
  parent: Features
  order: 1
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Selling Tickets
    lead: >-
      Accept payments, prevent overbooking, handle refunds, and set your own
      booking rules - everything you need to sell tickets with confidence.

  - type: features
    items:
      - icon: "hugeicons:credit-card"
        title: '<a href="/features/stripe-and-square/">Stripe & Square</a>'
        description: Accept payments via Stripe or Square with fixed pricing or pay-what-you-want, and automatic refunds.
      - icon: "hugeicons:clock-01"
        title: '<a href="/features/overbooking-prevention/">Overbooking Prevention</a>'
        description: 5-minute payment holds reserve places while attendees complete checkout, so you never oversell.
      - icon: "hugeicons:money-receive-square"
        title: '<a href="/features/refunds/">Refunds</a>'
        description: Process individual or bulk refunds directly from the admin panel with automatic payment provider sync.
      - icon: "hugeicons:file-validation"
        title: '<a href="/features/terms-and-conditions/">Terms & Conditions</a>'
        description: Set global terms that attendees must agree to before booking, with configurable contact fields and special instructions.
      - icon: "hugeicons:timer-01"
        title: '<a href="/features/registration-deadlines/">Registration Deadlines</a>'
        description: Set cut-off times for bookings and configure purchase limits per event or per attendee.

  - type: cta
    title: Start Selling Tickets
    description: Sign up for managed hosting at £50/year, or browse the full technical documentation.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/join
      variant: primary
      size: lg
---
