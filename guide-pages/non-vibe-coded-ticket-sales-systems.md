---
name: Non Vibe Coded Ticket Sales Systems
subtitle: How to tell engineered ticketing software from prompted software, when the code takes payments and counts places
meta_title: Non Vibe Coded Ticket Sales Systems | Chobble Tickets
meta_description: What vibe coding means for ticketing, the risks unreviewed AI code brings to payment and availability logic, and the engineering signals that separate tested software from prompted software.
guide-category: choosing-a-ticket-platform
order: 7.5
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      "Vibe coding" is a name for making software by prompting an AI, accepting
      what it writes and moving on without reading it. The AI researcher
      Andrej Karpathy [coined the term in February
      2025](https://x.com/karpathy/status/1886192184808149383) to describe
      working with code he never opened. For a personal project or a
      prototype, that is a reasonable way to build. This guide is about the
      cases where it is not.

      A ticketing platform is one of those cases. Two parts of it have to be
      exactly right: the money it moves and the places it counts. Everything
      else, from the storefront design to the reminder emails, can be rebuilt
      after a mistake. A double charge or an oversold room cannot be quietly
      undone the same way.

      Chobble, which writes this guide, also sells Chobble Tickets and
      publishes its source code and tests, so its own engineering record is
      listed below alongside the general signals. Every claim about a specific
      platform links to its comparison page with its sources and the date it
      was checked.
  - type: markdown
    dark: true
    content: |
      ## Why payments are the risky part

      Ticket money is not one number. A single booking can carry a deposit, a
      balance, a discount code, an add-on and a refund, and the platform has
      to keep every one of those attached to the right person and the right
      order. Payment logic that was generated and never reviewed produces
      mistakes that look small in the code and are large in the world: a
      refund applied to the wrong booking, a balance charged twice, a deposit
      that vanishes between the card processor and the booking record.

      The pain comes afterwards. An organiser who finds a mismatch has to
      reconcile card statements against bookings by hand, contact every
      affected buyer, and answer for money they cannot account for. Software
      engineering exists to prevent exactly this class of problem, through
      tests that repeat the same money paths thousands of times and fail the
      build when a change breaks one.

      ## Why availability checking is the risky part

      The same applies to the headcount. Two buyers can finish paying for the
      last place at the same moment, and a checkout that checks availability
      first and takes payment second can sell that place twice, because the
      check was true when each buyer started.

      Correct behaviour is testable and specific: a place is used only when a
      payment is confirmed, and when two confirmed payments race for the last
      place, the later order is refunded automatically rather than honoured.
      Software that was prompted rather than designed usually holds the
      simpler belief, that checking is the same as holding, and the first
      oversold event is where the organiser finds out.
  - type: markdown
    content: |
      ## What prompted software looks like from outside

      No organiser can read a closed codebase, but the build process leaves
      marks that are visible without one. None of these marks proves anything
      alone, and a platform can show several and still work. Together they
      describe how the software was made.

      - Live pages containing leftover addresses from a developer's own
        machine, which means nobody checked the page before publishing it
      - Blog posts and support pages carrying bylines from an "AI team"
        rather than a person who answers for the product
      - Version numbers and feature lists that grow faster than the company
        could plausibly engineer them
      - No public source repository, no changelog and no status page
      - Documentation that reads as marketing, describing what the product
        promises rather than how it behaves

      The [Whizzly comparison](/compared-to/whizzly/) is a worked example of
      reading these marks, dated to the day each was checked.

      ## How Chobble Tickets is built

      Chobble Tickets is written by Stefan Burke, who has worked in software
      and web technology since around 2007, spent five years on the payments
      team at [Bandcamp](https://bandcamp.com), and was lead developer at
      Bouncy Castle Network for ten years writing booking software. The
      [about page](/about/) carries the details.

      The complete product is published at
      [github.com/chobbledotcom/tickets](https://github.com/chobbledotcom/tickets)
      under AGPL-3.0-only, so every claim below can be checked against the
      repository. These figures were counted on 24 October 2026.

      - More than 2,300 test files, plus browser contract tests
      - 88 Cucumber feature files holding 494 scenarios, written in plain
        English, that describe bookings, payments, refunds and check-ins as
        an organiser would observe them
      - A test runner that enforces 100% line and branch coverage, with a
        ratchet that fails the build if anyone excludes code from coverage
      - Mutation testing that deliberately breaks the source code and fails
        unless the test suite catches every break
      - A linter that fails on warnings, and a pre-commit check that runs
        the same gates before any change is pushed
      - End-to-end payment tests that drive a real browser through real
        Stripe, Square and SumUp sandboxes, because a mocked payment
        provider cannot reveal that the real one has drifted
      - A checkout that uses a place only when the payment confirms, with
        the later of two racing confirmed payments refunded
        automatically ([overbooking prevention](/features/overbooking-prevention/))

      Each of these gates is written up at
      [Chobble Coding Standards](https://coding-standards.chobble.com/), with its configuration
      and examples from the repository.
  - type: markdown
    dark: true
    content: |
      ## AI, used inside the process

      None of that record means Chobble avoids AI. The repository publishes
      `AGENTS.md` and `CLAUDE.md` with instructions for coding agents, and
      changes are made with AI assistance every day. The
      [coding agents page](/features/coding-agents/) describes that workflow.

      The difference is what happens to the AI's output. Code that an AI
      wrote at Chobble passes the same coverage, mutation, lint and
      end-to-end payment gates as code a person wrote, and a change that
      breaks a money path or an availability rule is rejected before it
      reaches a customer. Vibe coding is not the presence of AI in the
      process. It is the absence of the process.

      That distinction matters when reading any provider, including this
      one. A platform can use AI heavily and still be engineered, and a
      platform written entirely by hand can still be careless. What an
      organiser can verify is the process, not the effort behind it.
  - type: markdown
    content: |
      ## How to check any platform

      - Ask whether the source code is published. Published code lets you or
        someone you hire read how payments and capacity are handled, and
        [open source ticketing](/guide/choosing-a-ticket-platform/open-source-ticketing-platforms/)
        lists the providers whose code can be read.
      - Ask what happens when two buyers pay for the last place at the same
        moment. A provider with a tested answer will say so plainly, and a
        provider that cannot answer has told you something too.
      - Look for a status page, a changelog and a named engineer with a work
        history. Accountability leaves a paper trail.
      - Check when the operating company was registered. Companies House
        records this for UK companies, and a platform younger than its own
        marketing claims is worth a slower look.
      - Read the checkout's fine print for capacity wording. Language about
        holding or reserving a place during payment is the simpler belief
        described above, and it fails under load.

      Software built quickly is not automatically bad software, and software
      built slowly is not automatically good. The signals above are about
      verifiability: whether the platform can show its work. For a system
      that takes your buyers' money and counts the places at your door,
      showing the work is the minimum standard worth paying for.
