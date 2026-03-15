---
layout: design-system-base.html
title: Political Organising - Chobble Tickets
meta_title: Ticketing for Political Organising - Chobble Tickets
meta_description: Privacy-first event ticketing for political groups. Encrypted attendee data. Open source and self-hostable.
permalink: /perfect-for/political-organising/
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Ticketing for Political Organising
    lead: >-
      Privacy-first event management. Attendee data is encrypted at rest.
      Self-host it yourself if you want full control.

  - type: split
    title: Privacy by Design
    reveal_content: left
    content: |
      When you're organising politically, the privacy of your supporters
      matters. Chobble Tickets encrypts all personally identifiable information
      at rest using
      [hybrid RSA-OAEP + AES-256-GCM encryption](https://chobbledotcom.github.io/tickets/doc.ts/docs/crypto.ts).

      Unlike commercial platforms that mine attendee data for marketing, Chobble
      Tickets is open source and designed to protect your members. You can
      inspect every line of the code yourself.

      For maximum control, self-host it on your own infrastructure. No data
      ever leaves your servers.
    figure_type: code
    figure_filename: Privacy first
    figure_code: |
      Encrypted at rest. Open source. Self-hostable.
      Your supporters' data stays protected.

  - type: features
    section_class: alt
    header_title: Why Organisers Choose Us
    items:
      - icon: "hugeicons:source-code"
        title: Fully Auditable
        description: Every line of code is public under AGPLv3. No black boxes, no hidden data collection, no surprises.
      - icon: "hugeicons:cloud-server"
        title: Self-Hostable
        description: Run it on your own Deno server, in Docker, or on edge infrastructure. Your data, your rules.
      - icon: "hugeicons:security-check"
        title: No Data Harvesting
        description: Built by a community interest company, not a VC-funded startup. We have no interest in your attendee data.

  - type: cta
    title: Protect Your Supporters
    description: Self-host for free, or get managed hosting from £25/year for community groups.
    button:
      text: Get Started
      href: https://tix.chobble.com
      variant: secondary
      size: lg
---
