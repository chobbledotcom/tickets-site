---
layout: design-system-base.html
title: Open Source - Chobble Tickets
meta_title: Open Source Ticketing - Chobble Tickets
meta_description: Chobble Tickets is fully open source under AGPLv3. Every feature is included. No open-core bait-and-switch.
permalink: /features/open-source/
eleventyNavigation:
  key: Open Source
  parent: Features
  order: 0
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Fully Open Source
    lead: >-
      Every line of code is public. Every feature is included. Licensed under
      AGPLv3 with no proprietary extensions.

  - type: markdown
    content: |
      ## No Open-Core Tricks

      Some "open source" ticketing platforms only open-source the basics, then
      charge for the features you actually need. Chobble Tickets doesn't do
      that. The hosted version and the self-hosted version are exactly the same
      code.

      The entire codebase is on
      [GitHub](https://github.com/chobbledotcom/tickets) under the AGPLv3
      licence. You can read it, fork it, modify it, and run it yourself.

      ## Built by a Community Interest Company

      Chobble is a community interest company (CIC), not a VC-funded startup.
      There's no pressure to extract value from users or lock people into a
      platform. The software exists to be useful.

      ## Self-Host or Let Us Host

      You can deploy Chobble Tickets on any Deno-compatible environment.
      One-click deploy buttons are available for DigitalOcean, Heroku, Koyeb,
      and Render. You can also deploy with Fly.io, Docker, or Bunny Edge
      Scripting. Or pay £50/year and we'll handle the hosting for you. Browse
      the
      [technical documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html)
      to see how everything works under the hood.

  - type: cta
    title: View the Source
    description: The full codebase is on GitHub. Star it, fork it, or contribute.
    button:
      text: GitHub Repository
      href: https://github.com/chobbledotcom/tickets
      variant: secondary
      size: lg
---
