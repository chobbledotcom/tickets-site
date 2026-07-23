---
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
    content: |-
      # Ticketing for political organising

      Attendee personal data is encrypted at rest, and organisations can run the platform on infrastructure they select.
  - type: split-icon-links
    content: |
      ## Privacy by design

      Chobble Tickets encrypts all personally identifiable information at rest
      using
      [hybrid RSA-OAEP + AES-256-GCM encryption](https://chobbledotcom.github.io/tickets/docs/crypto.ts).

      Some ticketing platforms use attendee records for event marketing.
      Chobble Tickets does not. Its complete product source is published under
      AGPL-3.0-only and can be inspected.

      You can run Chobble Tickets on your own infrastructure. Payment, email,
      SMS, address lookup and webhook providers receive data only when those
      optional services are configured.
    figure_items:
      - icon: hugeicons:lock
        text: Attendee data is encrypted at rest.
      - icon: hugeicons:source-code
        text: Product source published under AGPL-3.0-only.
      - icon: hugeicons:cloud-server
        text: Deploy on your own servers.
  - type: features
    dark: true
    intro_content: "## Features for political organisers"
    items:
      - icon: hugeicons:source-code
        description: The complete product source is published under AGPL-3.0-only, so its data handling can be inspected.
        name: Fully auditable
      - icon: hugeicons:cloud-server
        description: Run Chobble Tickets on Bunny Edge, Deno Deploy or a Docker-capable host, with infrastructure and integrations selected by the operator.
        name: Self-Hostable
      - icon: hugeicons:security-check
        description: Built by a community interest company. There is no advertising revenue and no data economy subsidising the price.
        name: No data harvesting
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Get started with encrypted event ticketing

      Sign up for managed hosting from £25/year for community groups, or self-host without paying Chobble a licence fee.
name: Ticketing for Political Organising - Chobble Tickets
---
