---
title: Hosting a Ticket System with a Coding Agent - Chobble Tickets
meta_title: Hosting a Ticket System with an AI Coding Agent | Chobble Tickets
meta_description: Chobble Tickets publishes its whole source and enforces 100% test coverage, a 0% duplication threshold and a complexity ceiling, so a coding agent such as Claude Code gets a mechanical verdict on the changes it makes.
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

      Chobble Tickets publishes its whole source and the instructions it expects an agent to follow. Its checks require 100% test coverage and refuse duplicated code, so an agent gets a mechanical verdict on its own work.
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
        description: 39 Cucumber feature files describe how the product behaves in plain language. Screenshots on this site that were captured from those specifications carry a link to the file each one came from.
      - icon: hugeicons:api
        name: Generated API documentation
        description: The published documentation covers the modules and configuration keys, including every optional environment variable.
      - icon: hugeicons:checkmark-badge-01
        name: Tests larger than the source
        description: The test suite is around twice the size of the application source, so a change an agent proposes is checked against existing behaviour rather than accepted on sight.
  - type: markdown
    content: |
      ## Checks an agent can run against its own work

      The usual limit on letting an agent change software is that nobody can
      tell whether the change was any good without reading it. Chobble Tickets
      answers a large part of that question mechanically. The checks below run
      before a change can merge, and each one either passes or names the file
      and line where it failed.

      | Check | What it refuses |
      |---|---|
      | Lint | Cognitive complexity above 12 in application code, files over 1,000 lines, `var`, `==`, `forEach`, unused variables and imports, and stray `console` calls. Warnings are treated as failures. |
      | Duplication | Any repeated block of 19 tokens or more across the source, the scripts and the payment tests. The threshold is 0%, described in the repository as non-negotiable. |
      | Coverage | Any line or branch the tests do not reach. 100% of both is required to merge. |
      | Type checking | Type errors across the source, tests, CLI and scripts. |
      | Copy | User-facing text with "click here" style links or double spaces. |
      | Build | A change that breaks the single-file edge bundle or pushes it past the size ceiling. |

      Two further tools are run against chosen modules rather than the whole
      repository. Mutation testing changes operators in the source and checks
      whether the tests notice, and reports each surviving mutation as a real
      gap. A test quality audit flags assertion patterns that pass without
      proving much.

      ## Seeing what a change looks like

      Chobble Tickets includes a screenshot tool driven by those same Cucumber
      specifications. An agent can describe a situation as a scenario, run it,
      and get back a picture of the running application in that state.

      This closes a gap that tests alone leave open. An agent can prove a
      function returns the right value without ever seeing that the page it
      produces is unreadable, and a screenshot of the real scenario is the
      cheapest way to check.

      Each capture records the story, rule and case it came from, along with
      the commit of the application it was taken at. A `--themes` option dresses
      the captures in whatever CSS the publisher keeps for them, so the same
      scenario can produce a plain image for the project's own checks and a
      styled one for a site like this.

      ## How this site uses it

      The screenshots on these pages are produced that way. A screenshot
      captured from a Cucumber scenario can carry a caption linking to the
      specification file it came from, so a reader can check the claim against
      the behaviour that produced the picture.

      The same tooling is available to anyone running the software. Writing a
      scenario for the situation you want to document, capturing it, and
      publishing the result alongside the specification is how the guides on
      this site are made, and there is nothing site-specific about the method.

      ## Why those particular limits help

      A complexity ceiling and a line ceiling stop a function growing past the
      point where the next reader, human or otherwise, can hold it in mind. An
      agent that keeps adding branches to one function is told to stop while
      the function is still small enough to restructure.

      The duplication rule has a larger effect than its size suggests. Copying
      an existing block and adjusting it is the cheapest thing an agent can do,
      and at a 0% threshold it fails. The repository's own guidance is to merge
      the two into one helper rather than edit around the check.

      The result is that there tends to be one way of doing each thing in the
      codebase. That is worth more to an agent reading the code later than it
      is to the person who wrote the rule.

      ## What this does and does not claim

      Much of Chobble Tickets is written by coding agents, and parts of it are
      rough. That is true of most repositories past a certain size, and the
      checks are not a claim that the code is better than a person would have
      written.

      What they change is when the work gets reviewed. An agent has to satisfy
      coverage, duplication and complexity before a pull request exists, so it
      goes through rounds of revision that it would otherwise skip by stopping
      at its first attempt. The change a human then reads is shorter and closer
      to the project's conventions, which makes reviewing it a smaller job.

      That is the honest version of the benefit. The checks move effort from
      the reviewer to the agent, and they are cheap for an agent to run and
      expensive for a person to perform by reading.

      ## Written conventions alongside the checks

      Some things cannot be checked mechanically, and AGENTS.md states them for
      an agent to follow. It sets out seven test quality standards, including
      that tests call production functions rather than reimplementing them, and
      that they test behaviour rather than implementation detail.

      It also requires that errors are never suppressed, sets out the
      functional patterns the codebase uses, and describes how user-facing copy
      should read. Copy rules that a machine cannot judge are stated with
      before and after examples.

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

      This matters when an agent is helping someone else deploy. There is no
      virtual private server to provision, no reverse proxy, no TLS renewal and
      no SSH, so the work is a Bunny dashboard, repository secrets and a GitHub
      Actions workflow rather than a walkthrough of server administration.
      [Deploying a ticket site](/features/deployment/) lists the steps.

      Host maintenance is the part of running software that needs attention for
      as long as the software runs, and the part a coding agent is least able
      to take responsibility for over that period.

      Docker deployments are also supported, against local SQLite or a remote
      libSQL database. Those do involve a host to maintain.
  - type: markdown
    dark: true
    content: |
      ## Building the catalogue without the interface

      An agent can create and move a site's events through its APIs rather than
      by driving the admin screens. This covers the catalogue, not the whole
      site: the first owner password and the currency are set at `/setup/`, and
      payment, email, domain, user and branding settings are configured in the
      admin area.

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

      ## What an agent can and cannot read

      Attendee personal data is encrypted before it is stored. Reading the
      repository does not give an agent access to any site's records, because
      the source contains no keys and no data.

      Deploying gives an agent more than that, but not everything. The
      self-hosted steps involve setting `DB_ENCRYPTION_KEY` alongside the
      database URL and token. That combination decrypts what the server key
      protects, which includes listing and site details, email settings and
      stored payment-provider secrets, so it is not a small amount of access
      and should be granted deliberately.

      It does not decrypt attendee personal data. Those fields are unlocked by
      a key wrapped for each keyed account, and the wrapping key is derived from
      that account's password, which the site never stores. A database and the
      environment key alone cannot unwrap it. Reading attendee records needs a
      keyed account's password, or the recovery credentials if that route is
      enabled. The [encryption page](/features/encrypted/) sets out the layers
      in full.

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

      The repository holds the product source, its behaviour specifications and its deployment steps. Managed hosting runs the same code for £50/year or £5/month, or £25/year for charities, community groups, artists and musicians, which applies to annual billing only.
name: Hosting a Ticket System with a Coding Agent | Chobble Tickets
---
