---
name: Open Source Ticketing Platforms
subtitle: Ticketing software with published source code, compared by licence and how you can run it
meta_title: Open Source Ticketing Platforms | Chobble Tickets
meta_description: Compare open source and source-available ticketing platforms by licence, whether the hosted service runs the published code, per-ticket fees and self-hosting.
guide-category: choosing-a-ticket-platform
order: 3.5
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      Open source software publishes its source code, the human-readable
      instructions a program is built from. For an event organiser this means
      you, or someone you hire, can read how the platform works, change it, and
      run your own copy without asking the original maker.

      Publishing code is not one single promise. The licence sets what you may
      do with the code, whether the hosted service runs that same published
      code, and whether self-hosting is free. This guide groups the providers
      reviewed on this site by those questions.

      This is a list of the providers with detailed comparisons here, not a
      directory of every open source ticketing project.
  - type: markdown
    dark: true
    content: |
      ## Chobble Tickets is open source

      The complete Chobble Tickets product is published under
      [AGPL-3.0-only](/features/open-source/), a copyleft licence. Copyleft
      means anyone can read, change and run the code, and a business that runs a
      changed version as a service must publish its changes under the same
      licence.

      There is no hosted-only feature tier and no separate charge to self-host.
      The managed service at £50/year or £5/month runs the same
      source-published product, with
      [no per-ticket platform fee](/features/no-per-ticket-fees/).
  - type: markdown
    content: |
      ## Open source and source-available providers reviewed here

      Each provider below publishes source code, but under different licences
      and with different conditions. The table records the licence, whether the
      hosted service runs the published code, and the main qualification.

      | Provider | Licence | Hosted service runs the published code? | Main qualification |
      |---|---|---|---|
      | **Chobble Tickets** | AGPL-3.0-only (copyleft) | Yes, the same product | £50/year or £5/month managed, or self-host with no Chobble fee, and no per-ticket platform fee. |
      | [Hi.Events](/compared-to/hi-events/) | AGPL-3.0 with attribution terms | Yes | Free self-hosting shows a "Powered by" link; a commercial licence removes it. The hosted plan charges per paid ticket. |
      | [Pretix](/compared-to/pretix/) | AGPLv3 core | Core yes; enterprise plugins proprietary | The Community edition is free to self-host; some enterprise features are sold as closed plugins. The hosted plan charges a percentage per ticket. |
      | [Revel](/compared-to/revel/) | MIT (permissive) | Yes, the same product | A permissive licence lets anyone use, change, rebrand or resell the code. The hosted service charges 3% + €0.50 per paid ticket. |
      | [Event Schedule](/compared-to/event-schedule/) | Open source | Yes, the same product | No per-ticket platform fee; hosted plans are tiered by feature. See the comparison for the licence. |
      | [libreevent](/compared-to/libreevent/) | GPLv3 | Self-hosted only | The project is archived and no longer updated, so you maintain the code and server yourself. |
      | [EventPrime](/compared-to/eventprime/) | GPLv2 | Runs on your WordPress site | An open-core plugin for WordPress, with paid add-ons. It needs a WordPress site to run. |
      | [Swicket with alf.io](/compared-to/swicket/) | alf.io is GPLv3 | Engine yes; Swicket is a separate managed service | alf.io is the open source engine; Swicket is a hosted service built on it. |
      | [Cal.com](/compared-to/cal-com/) | AGPLv3 community edition | Production is proprietary | Cal.diy is a separate community edition; the hosted product's production code is closed. It is a scheduling tool rather than event ticketing. |
      | [Dandelion](/compared-to/dandelion/) | Source-available | Hosted service; code opens on a delay | The code is published to read, but an open licence applies only after a delay, so it is not open source at release. |

      A published repository answers only the first column. The other columns
      decide what you can actually run and what it costs.
  - type: markdown
    dark: true
    content: |
      ## What the licence lets you do

      The licences fall into a few groups, and the group matters more than the
      name:

      - **Permissive (MIT)**, used by [Revel](/compared-to/revel/): you can
        use, change, rebrand and even resell the code, with no duty to publish
        your changes.
      - **Copyleft (AGPL-3.0, GPLv3)**, used by Chobble Tickets,
        [Hi.Events](/compared-to/hi-events/), [Pretix](/compared-to/pretix/)
        core, [Event Schedule](/compared-to/event-schedule/),
        [libreevent](/compared-to/libreevent/) and alf.io: you can run and
        change the code for free, but if you run a changed version as a service,
        you must publish those changes under the same licence.
      - **Open core**, used by [Pretix](/compared-to/pretix/) and
        [EventPrime](/compared-to/eventprime/): the core is open, and some
        features are sold as separate proprietary add-ons.
      - **Source-available**, used by [Dandelion](/compared-to/dandelion/): the
        code is published to read, but the open licence applies only after a
        delay.
      - **Community edition separate from production**, used by
        [Cal.com](/compared-to/cal-com/): the hosted product is proprietary, and
        a separate community edition carries the open licence.

      None of these licences charges a fee to read or run the code. The
      differences are about republishing changes and which parts are open.
  - type: markdown
    content: |
      ## Published code is not the same as free hosting

      Reading the source does not, by itself, get you a running site. Three
      separate questions decide what open source is worth to you.

      - **Can you deploy it?** Published source is not always the same code the
        hosted service runs, and some projects are harder to install than
        others. The
        [systems a coding agent can deploy guide](/guide/choosing-a-ticket-platform/event-ticketing-systems-a-coding-agent-can-deploy/)
        separates readable code from deployable code.
      - **What does hosting cost?** Most of these providers still charge for
        their managed service, often per ticket. The
        [flat-rate ticketing](/guide/choosing-a-ticket-platform/flat-rate-ticketing/)
        and
        [no per-attendee fees](/guide/choosing-a-ticket-platform/no-per-attendee-ticket-sales/)
        guides compare those charges.
      - **Who runs the server?** Self-hosting is free of a licence fee but still
        needs a server and upkeep. The
        [host your own ticket site guide](/guide/choosing-a-ticket-platform/host-your-own-ticket-site/)
        covers what that involves.

      A closed alternative sits at the other end.
      [EventMS Pro](/compared-to/eventms-pro/) is self-hosted but ships a
      licensed build with no source code, so you cannot read or change how it
      works.
  - type: markdown
    dark: true
    content: |
      ## Why source access matters for organisers

      Open source lets you check privacy and security claims rather than take
      them on trust, move to another host that runs the same code, and keep
      using the software if the original maker stops. Chobble Tickets pairs its
      published code with
      [encryption of attendees' personal data](/features/encrypted/) and a
      [site builder](/features/deployment/) for running separate sites for
      several organisers.

      Related guides group the same providers by other concerns:
      [ethical ticket sales options](/guide/choosing-a-ticket-platform/ethical-ticket-sales-options/),
      [UK-made ticket platforms](/guide/choosing-a-ticket-platform/uk-made-ticket-platforms/)
      and
      [removing platform branding](/guide/choosing-a-ticket-platform/remove-ticket-platform-branding/).
---
