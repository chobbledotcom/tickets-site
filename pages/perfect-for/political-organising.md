---
layout: design-system-base.html
title: Political Organising - Chobble Tickets
meta_title: Ticketing for Political Organising - Chobble Tickets
meta_description: Privacy-first event ticketing for political groups with encrypted attendee data, open source and self-hostable.
permalink: /perfect-for/political-organising/
eleventyNavigation:
  key: Political Organising
  parent: Perfect For
  order: 3
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: Ticketing for political organising
    lead: >-
      Privacy-first event management where attendee data is encrypted at rest,
      and you can self-host it yourself if you want full control.

  - type: split
    title: Privacy by design
    reveal_content: left
    content: |
      When you're organising politically, the privacy of your supporters
      matters. Chobble Tickets encrypts all personally identifiable information
      at rest using
      [hybrid RSA-OAEP + AES-256-GCM encryption](https://chobbledotcom.github.io/tickets/docs/crypto.ts).

      Unlike commercial platforms that mine attendee data for marketing, Chobble
      Tickets is open source and designed to protect your members, and you
      can inspect every line of the code yourself.

      For maximum control, self-host it on your own infrastructure so no data
      ever leaves your servers.
    figure_type: code
    figure_filename: Privacy first
    figure_code: |
      Encrypted at rest. Open source. Self-hostable.
      Your supporters' data stays protected.

  - type: features
    section_class: alt
    header_intro: "## Why organisers choose us"
    items:
      - icon: "hugeicons:source-code"
        title: Fully auditable
        description: Every line of code is public under AGPLv3, so there are no black boxes, no hidden data collection, and no surprises.
      - icon: "hugeicons:cloud-server"
        title: Self-Hostable
        description: One-click deploy to DigitalOcean, Heroku, Koyeb, or Render, or run it in Docker, on Fly.io, or on Bunny Edge Scripting.
      - icon: "hugeicons:security-check"
        title: No data harvesting
        description: Built by a community interest company rather than a VC-funded startup, so we have no interest in your attendee data.

  - type: cta
    title: Protect your supporters
    description: Self-host for free, or get managed hosting from £25/year for community groups.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
