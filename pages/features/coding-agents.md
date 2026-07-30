---
title: Hosting a Ticket System with a Coding Agent - Chobble Tickets
meta_title: Hosting a Ticket System with an AI Coding Agent | Chobble Tickets
meta_description: Chobble Tickets publishes its whole source, its written behaviour specifications and its agent instructions, so a coding agent such as Claude Code can read, change and deploy the same product Chobble runs.
permalink: /features/coding-agents/
eleventyNavigation:
  key: Coding Agents
  parent: Platform & Integrations
  order: 2
blocks:
  - type: hero
    class: gradient
    content: |-
      # Hosting a ticket system with a coding agent

      Chobble Tickets publishes its whole source, its written behaviour specifications, its generated API documentation and the instructions it expects an agent to follow. Managed hosting runs the same code.
  - type: markdown
    content: |
      ## Who this page is for

      Most pages on this site are written for event organisers. This one is
      written for people who use a coding agent, such as Claude Code, to set up
      and change the software they run.

      Organisers who would rather not deal with code can use
      [managed hosting](/hosting/) instead. Nothing on this page is needed to
      run events on a hosted site.

      ## The whole product is readable

      Chobble Tickets is published under AGPL-3.0-only with no proprietary
      parts and no paid feature tier. An agent reading the repository is
      reading the same code that runs on managed hosting.

      This matters more for agents than for people. An agent asked to change
      behaviour that lives in a closed component cannot see what it is changing,
      and will guess.
  - type: features
    dark: true
    intro_content: |
      ## What the repository publishes
    items:
      - icon: hugeicons:book-open-01
        name: Instructions for agents
        description: The repository root holds AGENTS.md and CLAUDE.md, which set out the development shell, the pinned runtime version and the commands to run before committing.
      - icon: hugeicons:folder-02
        name: A written structure reference
        description: REPO_STRUCTURE.md describes the src layout and the import aliases, so an agent can locate a feature without searching the whole tree.
      - icon: hugeicons:test-tube-01
        name: Behaviour written in English
        description: 39 Cucumber feature files describe how the product behaves in plain language. The screenshot captions on this site link to the exact file each one came from.
      - icon: hugeicons:api
        name: Generated API documentation
        description: The published documentation covers the modules and configuration keys, including every optional environment variable.
      - icon: hugeicons:checkmark-badge-01
        name: Tests larger than the source
        description: The test suite is around twice the size of the application source, so a change an agent proposes is checked against existing behaviour rather than accepted on sight.
  - type: markdown
    content: |
      ## One runtime, one file

      Chobble Tickets runs on Deno, and the repository pins the version. The
      production runtime, Bunny Edge Scripting, is Deno-based too, so code that
      runs in development runs at the edge.

      The build compiles the application to a single JavaScript file. A
      benchmark recorded on 14 July 2026 measured that file at 5.51MB, under
      the 10MB ceiling Bunny sets for an edge script.

      Pages are rendered on the server from TSX templates, using a JSX runtime
      written inside the repository rather than React. There is no separate
      front-end application to build and deploy alongside the server.

      ## No server to maintain

      An edge script has no operating system for its owner to patch, no
      container to rebuild and no instance to keep running. The database is a
      managed Bunny database, and its schema migrates itself on the first
      request.

      Host maintenance is the part of running software that needs attention for
      as long as the software runs, and the part a coding agent is least able
      to take responsibility for over that period.

      Docker deployments are also supported, against local SQLite or a remote
      libSQL database. Those do involve a host to maintain.
  - type: markdown
    dark: true
    content: |
      ## Configuring a site without the interface

      An agent can set a site up through its APIs rather than by driving the
      admin screens.

      - The [public API](/features/public-api/) covers listings, availability
        and booking.
      - The [admin API](/features/admin-api/) covers listings, groups and
        holidays.
      - [Catalogue import and export](/features/catalogue-import-export/) moves
        a whole catalogue as versioned JSON, including prices, memberships,
        packages and parent references.
      - [Webhooks](/features/webhooks/) send a POST request on every booking.

      Catalogue JSON is the practical route for bulk setup. An agent can write
      a season of events as one file, import it, and export it again to check
      what the site stored.

      ## What an agent cannot read

      Attendee personal data is encrypted before it is stored, and the keys
      belong to the site owner. An agent working on the code, or on a
      deployment, does not thereby gain readable attendee records.

      The [editor role](/features/editors/) exists for the same reason. It can
      write listings and site copy but holds no data key, so attendee personal
      data stays undecryptable to it.
  - type: markdown
    content: |
      ## References

      - [Chobble Tickets on GitHub](https://github.com/chobbledotcom/tickets) - source, AGENTS.md and deployment steps
      - [Technical documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html) - generated module and configuration reference
      - [Deno](https://deno.com/) - the runtime the product is built on
      - [Bunny Edge Scripting](https://bunny.net/blog/introducing-bunny-edge-scripting-a-better-way-to-build-and-deploy-applications-at-the-edge/) - the serverless platform used for the recommended deployment
      - [Deployment steps](/features/deployment/) - what setting up a site involves
  - type: cta
    button:
      text: View the source code
      href: https://github.com/chobbledotcom/tickets
      variant: primary
      size: lg
    content: |-
      ## Read the code

      The repository holds the product source, its behaviour specifications and its deployment steps. Managed hosting runs the same code for £50/year or £5/month.
name: Hosting a Ticket System with a Coding Agent | Chobble Tickets
---
