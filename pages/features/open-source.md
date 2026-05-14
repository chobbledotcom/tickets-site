---
layout: design-system-base.html
title: Open Source - Chobble Tickets
meta_title: Open Source Ticketing - Chobble Tickets
meta_description: Chobble Tickets is fully open source under AGPLv3 with every feature included and no open-core bait-and-switch.
permalink: /features/open-source/
eleventyNavigation:
  key: Open Source
  parent: Platform & Integrations
  order: 0
blocks:
  - type: hero
    class: gradient
    lead: Every line of code is public and every feature is included, licensed under AGPLv3 with no proprietary extensions.
    name: Fully open source
  - type: markdown
    content: |
      ## The full codebase is open source

      Some ticketing platforms release only part of their code under an open
      source licence, then charge for the features you need. The
      hosted version and the self-hosted version of Chobble Tickets are exactly
      the same code.

      The entire codebase is on
      [GitHub](https://github.com/chobbledotcom/tickets) under the AGPLv3
      licence. You can read it, fork it, modify it, and run it yourself.

      ## Built by a community interest company

      Chobble is a community interest company (CIC), not a VC-funded startup.
      There are no investors expecting a return, and no incentive to make
      switching away difficult.

      ## Three ways to deploy

      ### 1. Managed hosting

      [Sign up](https://tix.chobble.com/ticket/register) and Chobble handles
      everything (infrastructure, updates, backups, and support) for £50/year
      (50% off for charities, community groups, artists, and musicians). No
      per-ticket fees, unlimited events, unlimited tickets.

      ### 2. GitHub-controlled deployments

      For extra security, fork the
      [repository](https://github.com/chobbledotcom/tickets/fork) on GitHub.
      We manage the infrastructure, but you control exactly when code updates
      are deployed through GitHub Actions. No update can reach your instance
      without your explicit approval.

      ### 3. Fully self-hosted (free)

      Deploy on any Deno-compatible environment with one-click deploy buttons
      for DigitalOcean, Heroku, Koyeb, and Render (plus Fly.io, Docker, and
      Bunny Edge Scripting). You own and control everything. Follow the
      [README](https://github.com/chobbledotcom/tickets) to get started, or
      browse the
      [technical documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html)
      for implementation details.

      Unlike other self-hosted ticketing platforms that require you to set up
      and maintain a traditional server, Chobble Tickets compiles to a single
      JavaScript file that runs on [Bunny.net](https://bunny.net) edge scripts
      with a Bunny.net edge database. There is no server to manage, no scaling
      to worry about, and no database replication to configure, since the
      Bunny platform handles all of that. This makes self-hosting Chobble
      Tickets closer to deploying a static site than running a web
      application.
  - type: markdown
    content: |
      ## References

      - [AGPLv3 licence text](https://www.gnu.org/licenses/agpl-3.0.en.html) - the licence Chobble Tickets uses
      - [Chobble Tickets on GitHub](https://github.com/chobbledotcom/tickets)
      - [Bunny.net Edge Scripting](https://bunny.net/blog/introducing-bunny-edge-scripting-a-better-way-to-build-and-deploy-applications-at-the-edge/) - the serverless platform used for self-hosting
      - [Deno runtime](https://deno.com/) - the JavaScript runtime Chobble Tickets is built on
  - type: cta
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Get started

      Sign up for managed hosting at £50/year, or grab the source from GitHub and self-host for free.
name: Open Source Ticketing - Chobble Tickets
---
