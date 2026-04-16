---
layout: design-system-base.html
title: Political Organising - Chobble Tickets
meta_title: Ticketing for Political Organising - Chobble Tickets
meta_description: Event ticketing for political groups with encrypted attendee data, open source and self-hostable.
permalink: /perfect-for/political-organising/
eleventyNavigation:
  key: Political Organising
  parent: Perfect For
  order: 3
blocks:
  - type: hero
    class: gradient
    title: Ticketing for political organising
    lead: >-
      Attendee data is encrypted at rest, and you can run the platform on your
      own servers so no data leaves your infrastructure.

  - type: split-icon-links
    title: Privacy by design
    reveal_content: left
    content: |
      Chobble Tickets encrypts all personally identifiable information at rest
      using
      [hybrid RSA-OAEP + AES-256-GCM encryption](https://chobbledotcom.github.io/tickets/docs/crypto.ts).

      Commercial ticketing platforms store attendee data and use it for
      marketing. Chobble Tickets is open source - every line of code is public
      under AGPLv3 and you can read it yourself.

      You can run Chobble Tickets on your own servers, so no data leaves your
      infrastructure.
    figure_items:
      - icon: "hugeicons:lock"
        text: "Attendee data is encrypted at rest."
      - icon: "hugeicons:source-code"
        text: "All code is public under AGPLv3."
      - icon: "hugeicons:cloud-server"
        text: "Deploy on your own servers."

  - type: features
    dark: true
    header_intro: "## Features for political organisers"
    items:
      - icon: "hugeicons:source-code"
        title: Fully auditable
        description: Every line of code is public under AGPLv3, so there are no black boxes, no hidden data collection, and no surprises.
      - icon: "hugeicons:cloud-server"
        title: Self-Hostable
        description: One-click deploy to DigitalOcean, Heroku, Koyeb, or Render, or run it in Docker, on Fly.io, or on Bunny Edge Scripting.
      - icon: "hugeicons:security-check"
        title: No data harvesting
        description: Built by a community interest company. There is no advertising revenue and no data economy subsidising the price.

  - type: cta
    title: Get started with encrypted event ticketing
    description: Self-host for free, or get managed hosting from £25/year for community groups.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
