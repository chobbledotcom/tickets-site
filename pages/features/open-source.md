---
title: Open Source Event Ticketing - Chobble Tickets
meta_title: Open Source Event Ticketing | Chobble Tickets
meta_description: Chobble Tickets publishes its complete product source under AGPL-3.0-only. Managed hosting and self-hosted deployments use the same product code.
permalink: /features/open-source/
eleventyNavigation:
  key: Open Source
  parent: Platform & Integrations
  order: 0
blocks:
  - type: hero
    class: gradient
    content: |-
      # Open source event ticketing

      The complete product source is published under AGPL-3.0-only. Managed hosting and self-hosted deployments use the same product code.
  - type: markdown
    content: |
      ## The full codebase is open source

      The product repository is on
      [GitHub](https://github.com/chobbledotcom/tickets) under the
      AGPL-3.0-only licence. The licence permits people to read, fork, modify
      and run the software, subject to its terms. There is no separate
      proprietary product tier.

      ## Built by a community interest company

      Chobble began as Stefan Burke's freelance business in 2024. Chobble CIC
      was incorporated in 2026 and now operates Chobble Tickets. A community
      interest company has an asset lock and must report on how its work
      benefits the community.

      Chobble receives income from managed hosting and technical work.
      It does not carry advertising or sell attendee data.

      ## Three ways to deploy

      ### 1. Managed hosting

      Chobble handles infrastructure, updates, backups and support for
      [£50/year or £5/month](/pricing/). Charities, community groups, artists
      and musicians receive 50% off the annual rate. There is no per-ticket
      platform fee or application limit on events and tickets.

      ### 2. GitHub-controlled deployments

      For extra security, fork the
      [repository](https://github.com/chobbledotcom/tickets/fork) on GitHub.
      Chobble manages the infrastructure, while the repository owner controls
      when code updates are deployed through GitHub Actions.

      ### 3. Self-hosted

      Run Chobble Tickets on Bunny Edge, Deno Deploy or a Docker-capable host.
      Chobble charges no software licence fee for self-hosting, but the
      operator pays for any infrastructure and services it uses. Follow the
      [README](https://github.com/chobbledotcom/tickets) to get started, or
      browse the
      [technical documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html)
      for implementation details.

      The recommended Bunny deployment compiles the application to a single
      JavaScript file for a Bunny Edge Script and uses a Bunny database. Docker
      deployments can use local SQLite or a remote libSQL database. The
      [hosting page](/hosting/) describes the managed and self-hosted options.

      The comparison pages cover other open source ticketing systems, including
      [Hi.Events](/compared-to/hi-events/), [Pretix](/compared-to/pretix/) and
      [Swicket with alf.io](/compared-to/swicket/).
  - type: markdown
    content: |
      ## References

      - [AGPL version 3 licence text](https://www.gnu.org/licenses/agpl-3.0.en.html) - the licence Chobble Tickets uses without the "or later" option
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

      Sign up for managed hosting at £50/year or £5/month, or use the source code to run a self-hosted deployment.
name: Open Source Event Ticketing | Chobble Tickets
---
