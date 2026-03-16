---
layout: design-system-base.html
title: Chobble Tickets vs BookitBee
meta_title: No-Fee Alternative to BookitBee | Chobble Tickets
meta_description: Looking for a no-fee alternative to BookitBee? Chobble Tickets charges a flat annual fee with no per-ticket costs, and it's fully open source.
permalink: /compared-to/bookitbee/
eleventyNavigation:
  key: vs BookitBee
  parent: Compared To
  order: 1
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs BookitBee
    lead: >-
      BookitBee is a UK-based ticketing platform - here's how it compares to
      Chobble Tickets.

  - type: markdown
    content: |
      ## Pricing comparison

      BookitBee charges per ticket sold - typically around 5-6% plus a fixed
      fee per ticket, and for high-volume events those fees add up quickly.

      Chobble Tickets charges a flat £50/year (£25 for charities) with no
      per-ticket fees or percentage cuts, which works out significantly
      cheaper for most event organisers.

  - type: markdown
    content: |
      ## Interactive cost calculator

      Drag the sliders to see how costs compare at different volumes:

      {% assign competitor_key = "bookitbee" %}
      {% include price-comparator.html %}

      *BookitBee fees: 2% + 50p per ticket, plus Stripe processing
      (1.5% + 20p). Chobble Tickets: £50/year flat + Stripe processing
      (1.5% + 20p).*

  - type: markdown
    content: |
      ## An open source, no-fee alternative to BookitBee

      BookitBee is a proprietary platform, so you can't see how your data is
      handled, you can't self-host, and if the company changes direction
      you're stuck.

      Chobble Tickets is open source under AGPLv3, so you can inspect every
      line of code, self-host if you want, and you're never locked in.

      ## When BookitBee might be better

      BookitBee has been around longer and has a more polished marketing
      presence. If you need phone support or a well-established brand name on
      your tickets, BookitBee may be the better fit, whereas Chobble Tickets
      is newer and more DIY-friendly.

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing with open source code and no lock-in.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
