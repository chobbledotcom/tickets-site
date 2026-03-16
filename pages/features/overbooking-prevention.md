---
layout: design-system-base.html
title: Overbooking Prevention - Chobble Tickets
meta_title: Overbooking Prevention - Chobble Tickets
meta_description: 5-minute payment holds reserve places while attendees complete checkout, so you never oversell.
permalink: /features/overbooking-prevention/
eleventyNavigation:
  key: Overbooking Prevention
  parent: Selling Tickets
  order: 1
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Overbooking Prevention
    lead: >-
      Five-minute payment holds reserve places while attendees complete
      checkout, so you never oversell an event.

  - type: markdown
    content: |
      ## How It Works

      When an attendee starts the checkout process, a five-minute hold
      reserves their place. This prevents two people from buying the last
      ticket at the same time. If the hold expires without payment, the
      place is released back into the available pool.

      ## No Overselling

      The system checks real-time availability including active holds
      before allowing a booking to proceed. When an event is full, the
      booking form is automatically disabled and a sold-out message is
      displayed.

      ## Per-Date Capacity

      For daily events, overbooking prevention works on a per-date basis,
      so each session has its own independent capacity tracking with holds.

  - type: cta
    title: Sell with Confidence
    description: Never oversell an event with built-in capacity management.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/join
      variant: secondary
      size: lg
---
