---
title: Hosting Event Ticketing Software with a Coding Agent - Chobble Tickets
meta_title: Host Event Ticketing Software with an AI Coding Agent | Chobble Tickets
meta_description: Chobble Tickets sells tickets for events, and publishes its whole source with 100% test coverage, a 0% duplication threshold and a complexity ceiling, so a coding agent such as Claude Code gets a mechanical verdict on the changes it makes.
permalink: /features/coding-agents/
eleventyNavigation:
  key: Coding Agents
  parent: Platform & Integrations
  order: 2
blocks:
  - type: hero
    class: gradient
    content: |-
      # Hosting event ticketing software with a coding agent

      Chobble Tickets sells tickets for events. It publishes its whole source and the instructions it expects an agent to follow, and its checks require 100% test coverage and refuse duplicated code, so an agent gets a mechanical verdict on its own work.
  - type: markdown
    content: |
      ## Who this page is for

      Chobble Tickets is event ticketing software. It lists an organiser's
      events, sells tickets to them, takes the payment through Stripe, Square
      or SumUp, and checks attendees in at the door.

      Most pages on this site are written for the organisers running those
      events. This one is written for people who use a coding agent, such as
      Claude Code, to set up and change the software they run.

      Organisers who would rather not deal with code can use
      [managed hosting](/hosting/) instead. Nothing on this page is needed to
      sell tickets on a hosted site.

      ## The whole product is readable

      Chobble Tickets is published under AGPL-3.0-only with no proprietary
      parts and no paid feature tier. That licence lets anyone read, change and
      run the software. Where a modified version is offered to users over a
      network, it requires that those users be offered its source. The
      [licence text](https://www.gnu.org/licenses/agpl-3.0.en.html) states the
      terms.

      An agent reading the repository is reading the same code that runs on
      managed hosting.

      That matters more for an agent than for a person. An agent asked to
      change behaviour that lives in a closed component cannot see what it is
      changing, and will guess.
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
      ## Checks that run before a change can merge

      The usual limit on letting an agent change software is that nobody can
      tell whether the change was any good without reading it. Chobble Tickets
      answers part of that question mechanically. Each check below either
      passes or names the file and line where it failed.

      | Check | What it refuses |
      |---|---|
      | Lint | Cognitive complexity above 12 in application code, files over 1,000 lines, `var`, `==`, `forEach`, unused variables and imports, and stray `console` calls. Warnings are treated as failures. |
      | Duplication | Any repeated block of 19 tokens or more across the source, the scripts and the payment tests. The threshold is 0%, described in the repository as non-negotiable. |
      | Coverage | Any line or branch the tests do not reach. 100% of both is required to merge. |
      | Type checking | Type errors across the source, tests, CLI and scripts. |
      | Copy | User-facing text with "click here" style links or double spaces. |
      | Build | A change that breaks the single-file edge bundle or pushes it past the size ceiling. |

      Two further tools run against chosen modules rather than the whole
      repository. Mutation testing changes operators in the source and reports
      any mutation the tests failed to notice. A test quality audit flags
      assertion patterns that pass without proving much.

      ## Why the limits sit where they do

      A complexity ceiling and a line ceiling stop a function growing past the
      point where the next reader, human or otherwise, can hold it in mind. An
      agent that keeps adding branches is told to stop while the function is
      still small enough to restructure.

      The duplication rule has a larger effect than its size suggests. Copying
      an existing block and adjusting it is the least effortful thing an agent
      can do, and at a 0% threshold it fails. The repository's guidance is to
      merge the two into one helper rather than edit around the check.

      The codebase therefore tends towards one way of doing each thing, which
      is worth more to whoever reads it next than to whoever wrote the rule.

      ## What the checks do not claim

      Much of Chobble Tickets is written by coding agents, and parts of it are
      rough. That is true of most repositories past a certain size, and none of
      these checks claims the code is better than a person would have written.

      What they change is when the work gets reviewed. The project's
      development shell installs a git pre-commit hook that runs the
      typecheck, lint, duplication, build and test steps, so an agent meets
      them at commit time, and the same checks run again before a merge.

      An agent working that way goes through rounds of revision it would
      otherwise skip by stopping at its first attempt. The hook can be
      bypassed, and continuous integration is the backstop when it is, but the
      ordinary path puts those revisions before anyone reads the change.

      The change a person then reads is shorter and closer to the project's
      conventions. The effort moves to the agent, which can run these checks
      repeatedly, and away from the reviewer, who would have to find the same
      problems by reading.

      ## Conventions the checks cannot enforce

      AGENTS.md states the rest for an agent to follow. It sets out seven test
      quality standards, including that tests call production functions rather
      than reimplementing them, and that they test behaviour rather than
      implementation detail.

      It also requires that errors are never suppressed, sets out the
      functional patterns the codebase uses, and describes how user-facing copy
      should read, with before and after examples.
  - type: markdown
    dark: true
    content: |
      ## Screenshots taken from the specifications

      A screenshot tool runs the same Cucumber specifications and photographs
      the result. An agent can describe a situation as a scenario, run it, and
      get back a picture of the running application in that state.

      This covers a gap the test suite leaves open. An agent can prove a
      function returns the right value without ever seeing that the page it
      produces is unreadable.

      Each capture records the story, rule and case it came from, along with
      the commit it was taken at. A `--themes` option dresses the captures in
      whatever CSS the publisher keeps for them, so one scenario can produce a
      plain image for the project's own checks and a styled one for a site like
      this.

      Some of the screenshots on this site are captures imported from those
      specifications, and each of those carries a caption linking to the
      specification file behind it, so a reader can check the claim against the
      behaviour that produced the picture. The rest come from scenarios this
      site maintains separately.

      The method is not specific to this site: anyone running the software can
      write a scenario for the situation they want to document and publish the
      capture alongside it.
  - type: markdown
    content: |
      ## One runtime, one file

      Chobble Tickets runs on Deno, and the repository pins the version. The
      production runtime, Bunny Edge Scripting, is Deno-based too, so code that
      runs in development runs at the edge.

      The build compiles the application to a single JavaScript file. A
      benchmark recorded on 14 July 2026 measured the self-contained build at
      5.51MB, and a production build is smaller because it publishes the shared
      browser assets to a CDN rather than inlining them.

      An edge script is not running while nobody is using it, so a request can
      arrive with nothing warm. The same benchmark loaded that 5.51MB file in
      about 156 milliseconds and served its first request in under 3
      milliseconds. A whole ticketing application at that size is the reason
      those numbers are small.

      Pages are rendered on the server from TSX templates, using a JSX runtime
      written inside the repository rather than React. There is no separate
      front-end application to build and deploy alongside the server.

      ## No server to maintain

      An edge script has no operating system to patch, no container to rebuild
      and no instance to keep running. The database is a managed Bunny
      database, and its schema migrates itself on the first request.

      For an agent helping somebody else deploy, that removes the part of the
      job that usually takes longest to explain. There is no virtual private
      server to provision, no reverse proxy, no TLS renewal and no SSH, so the
      work runs through a Bunny dashboard and a GitHub Actions workflow.
      [Deploying an event ticketing site](/features/deployment/) lists the steps.

      Docker deployments are also supported, against local SQLite or a remote
      libSQL database. Those do leave a host to maintain, for as long as the
      site runs.
  - type: markdown
    dark: true
    content: |
      ## Building the catalogue without the interface

      An agent can create and move a site's events through its APIs rather than
      by driving the admin screens. This covers the catalogue, not the whole
      site: the first owner password, country and currency are set at `/setup/`,
      and
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

      The repository also ships a command-line tool for the admin API, built on
      `curl` and configured with a hostname and an API key. It lists, reads,
      creates, updates and deletes each resource, which suits an agent that
      would rather run a command than compose a request.

      ## What an agent can and cannot read

      Attendee personal data is encrypted before it is stored. Reading the
      repository gives an agent no access to any site's records, because the
      source contains no keys and no data.

      Deploying gives an agent more than that, but not everything. The
      self-hosted steps set `DB_ENCRYPTION_KEY` alongside the database URL and
      token, and that combination decrypts what the server key protects,
      including listing and site details, email settings and stored
      payment-provider secrets.

      It does not decrypt attendee personal data. Those fields are unlocked by
      a key wrapped for each keyed account, and the wrapping key comes from
      that account's password, which the site never stores.

      Reading attendee records therefore needs a keyed account's password, or
      the recovery credentials where that route is enabled. The
      [encryption page](/features/encrypted/) sets out the layers in full.

      The [editor role](/features/editors/) rests on the same design. It can
      write listings and site copy but holds no data key, so attendee personal
      data stays undecryptable to it.
  - type: markdown
    content: |
      ## References

      - [Chobble Tickets on GitHub](https://github.com/chobbledotcom/tickets) - source, AGENTS.md and deployment steps
      - [Technical documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html) - generated module and configuration reference
      - [Deno](https://deno.com/) - the runtime the product is built on
      - [Bunny Edge Scripting](https://bunny.net/blog/introducing-bunny-edge-scripting-a-better-way-to-build-and-deploy-applications-at-the-edge/) - the serverless platform used for the recommended deployment
      - [Deploying an event ticketing site](/features/deployment/) - what setting a site up involves
  - type: cta
    button:
      text: View the source code
      href: https://github.com/chobbledotcom/tickets
      variant: primary
      size: lg
    content: |-
      ## Read the code

      The repository holds the product source, its behaviour specifications and its deployment steps. Managed hosting runs the same code for £50/year or £5/month, or £25/year for charities, community groups, artists and musicians, which applies to annual billing only.
name: Host Event Ticketing Software with an AI Coding Agent | Chobble Tickets
---
