---
name: Event Ticketing Systems a Coding Agent Can Deploy
subtitle: Which event ticketing providers publish code an agent can read, and whether it is the code the provider runs
meta_title: Event Ticketing Systems a Coding Agent Can Deploy | Chobble Tickets
meta_description: Compare event ticketing providers by whether their source is published, whether the published code is the code that runs, and what a coding agent would have to maintain after deploying it.
guide-category: choosing-a-ticket-platform
order: 7
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      A coding agent, such as Claude Code, can read a repository, change it and
      deploy it. Whether that helps an organiser sell tickets to their events
      depends on three separate questions, and a provider's answer to one does
      not settle the other two.

      The first is whether the source is published at all. The second is
      whether the published source is the same software the provider runs,
      rather than a reduced or diverged version. The third is what remains to
      be maintained once the software is deployed.

      This page uses the licence and hosting records stored on each provider's
      comparison page. Providers marked `not-reviewed` there are left out
      rather than guessed at.

      The licence names below decide what an operator may do with the code.
      All of them permit reading it, changing it and running it. They differ in
      what an operator owes in return, and the difference matters most to
      somebody running a modified copy.

      The GPL attaches its condition to giving copies out: distribute the
      software, changed or not, and the matching source goes with it under the
      same licence. The AGPL adds a condition for network use, so offering a
      modified version to users over a network means offering those users its
      source as well. A self-hosted site can reach that second condition
      without ever handing anyone a copy.

      MIT and Apache 2.0 permit the same uses with fewer conditions attached.
      The Functional Source License is not an open source licence: it permits
      internal use but restricts running a competing service for two years,
      after which Apache 2.0 terms apply.

      A licence permitting self-hosting is separate from whether the provider's
      branding may be removed, which the table records where it applies. Read
      the licence itself before relying on any summary, including this one.

  - type: markdown
    dark: true
    content: |
      ## Published source and deployed source

      | Provider | Published source | Same product as the hosted service |
      |---|---|---|
      | [Chobble Tickets](/features/open-source/) | AGPL-3.0-only, with no proprietary parts and no paid feature tier. | Yes. Managed hosting runs the published code. |
      | [Hi.Events](/compared-to/hi-events/) | AGPL-3.0 with additional attribution terms. | The same product, with conditions. Free use requires visible Hi.Events branding, and removing it requires a commercial licence. |
      | [Pretix](/compared-to/pretix/) | Core ticketing is AGPLv3. Several enterprise plugins are proprietary. | The Community edition covers core ticketing. Some larger-event features need paid plugins. |
      | [alf.io](/compared-to/swicket/) | GPL-3.0. | alf.io is the engine beneath Swicket. Swicket is a separate managed service, and its service additions are not established as sharing that licence. |
      | [libreevent](/compared-to/libreevent/) | GPL-3.0, with no proprietary parts. | Not applicable. There is no hosted service. Its repository was archived by its owner on 9 June 2026 and is read-only, so an operator maintains their own copy of the code. |
      | [EventPrime](/compared-to/eventprime/) | The free core plugin is GPLv2 or later on WordPress.org. Paid extensions are not published. | Not applicable. The plugin runs on the organiser's own WordPress site and is not sold as a hosted service. The extensions an event may need are closed. |
      | [Dandelion](/compared-to/dandelion/) | Functional Source License, which adds Apache 2.0 after two years. | Not documented. The licence permits internal use and restricts running a competing service for two years, but the records here do not establish whether the hosted service runs the published repository. |
      | [Cal.com](/compared-to/cal-com/) | The production code became proprietary in April 2026. Cal.diy remains MIT-licensed. | No. Cal.diy is a community version that has diverged from the hosted production code. |
      | [FooEvents](/compared-to/fooevents/) | Proprietary. | Not applicable. The plugins run on the organiser's own WordPress site. |

      The distinction in the third column is the one that matters most to an
      agent. Code an agent can read but cannot deploy tells it how a feature is
      meant to work. Code an agent can read and deploy lets it check whether
      the change it made had the effect it expected.

  - type: markdown
    content: |
      ## What is left to maintain

      Deploying ticketing software is rarely the ongoing cost. The ongoing cost
      is the host underneath it, and that is the part an agent is least suited
      to taking responsibility for over months.

      - **A plugin on an existing site.** [FooEvents](/compared-to/fooevents/)
        and [EventPrime](/compared-to/eventprime/) run inside WordPress. The
        operator maintains WordPress, its other plugins, WooCommerce where it
        applies, and the hosting.
      - **A self-hosted application.** [Pretix Community](/compared-to/pretix/)
        is Python and Django, [Hi.Events](/compared-to/hi-events/) is PHP,
        Laravel and React, [alf.io](/compared-to/swicket/) is Java and
        Spring Boot with PostgreSQL, and [libreevent](/compared-to/libreevent/)
        is Node.js and Vue over MySQL or a JSON file. Each is deployed as a
        server or container and then maintained by its operator. That covers
        updates, backups, security, email delivery and availability.
      - **A self-hosted application with no upstream releases.**
        [libreevent](/compared-to/libreevent/) is the one case here where the
        original project has stopped. Its archived repository publishes no
        further releases, so fixes come from an operator's own changes or from
        a fork, meaning a copy of the project that somebody else continues. Its
        own documented update route is copying the new files onto the server by
        hand.
      - **An edge script.** [Chobble Tickets](/features/deployment/) compiles
        to a single JavaScript file that runs on Bunny Edge Scripting, with a
        managed database. There is no operating system to patch and no
        container to rebuild. Its Docker image can run on a managed host such
        as Fly, Render, DigitalOcean, Heroku or Koyeb, and only running that
        image on your own server leaves a host to maintain.

      Of the deployment paths checked for this page, which are the seven named
      above, Chobble Tickets on Bunny is the only one with no container in it at
      all. The others are published as a server or a container image, and a
      managed container platform will run those images too, which takes away the
      server without taking away the image.

      So the distinction is narrower than managed against self-hosted. An
      operator running any container still decides when to rebuild it against a
      new release. Dandelion's records establish what its licence permits rather
      than how it is deployed, so its shape is not documented here.

      That is a difference in what an agent can be asked to take on, rather
      than a difference in code quality.

  - type: markdown
    dark: true
    content: |
      ## Running it on your own machine first

      Before an agent can see whether its change worked, it has to get the
      software running locally. Each project's own development documentation
      and compose files were read for this section on 30 July 2026, because the
      answer is not written down anywhere as a comparison.

      Each provider's `local_dev_runtime`, `local_dev_source` and
      `local_dev_reload` records on its comparison page hold the
      classification, the detail and the date it was checked, and read
      `not-reviewed` where no setup was examined.

      Two things decide how quickly an agent can work: what has to be running,
      and whether the running application is the checkout being edited. The
      table records what happens after a file changes as well, which matters
      more to a person than to an agent.

      | Project | What has to be running | Runs your checkout | After an edit |
      |---|---|---|---|
      | Chobble Tickets | One Deno process. The database can be held in memory, so nothing runs beside it. | Yes | Restart the process. There is no watch task. |
      | [Pretix](/compared-to/pretix/) | A Python process and a Vite dev server, over a local SQLite database created by migrations. | Yes | The Django server reloads, and Vite hot-reloads the Vue components. Celery workers, where used, are restarted by hand. |
      | [Hi.Events](/compared-to/hi-events/) | Nine containers: a Laravel backend, two frontend variants, nginx, PostgreSQL, Redis, Mailpit, MinIO and a bucket initialiser. | Yes. The backend and frontend directories are bind-mounted into their containers. | The frontend containers run `yarn dev` watchers. The backend is interpreted from the mount. |
      | [alf.io](/compared-to/swicket/) | Two containers: the application from the prebuilt `alfio/alf.io` image, and PostgreSQL 10. | No. The compose file mounts no source. | Rebuild the image, or run the application from Gradle with Java 17 against that database. |
      | [libreevent](/compared-to/libreevent/) | Three Node.js processes: the Express server, and a `vite` dev server for each of the two Vue frontends. MySQL is optional, so the JSON database needs nothing running beside them. Setting up first needs `npm i` in each of the three directories. | Yes | The two Vite dev servers hot-reload their frontends. The Express server has no watch task, so it is restarted. |

      Reload behaviour matters less to an agent than to a person. An agent
      checks a change by running the project's tests rather than by watching a
      browser refresh, so a restart usually costs it little. A change with no
      test covering it is the exception, because seeing that one work means
      running the application.

      What differs is how much has to stand up first. One process against nine
      containers is the same change taking a different amount of setting up, and
      it is the part an agent pays for on a machine it does not control.
      libreevent sits between the two, running three processes on the host
      without a database service beside them.

      alf.io is the one case where the running application is not the code being
      edited, because its compose file pulls a published image. Its documented
      development route is Gradle rather than that file, which needs Java 17 and
      the database from it.

      Changing a WordPress plugin such as [FooEvents](/compared-to/fooevents/)
      or [EventPrime](/compared-to/eventprime/) means running WordPress itself,
      which needs PHP and a MySQL or MariaDB database, and WooCommerce for
      FooEvents. Neither plugin publishes a development setup, so what an agent
      would stand up depends on the WordPress installation it is given.

  - type: markdown
    content: |
      ## Instructions written for agents

      Some projects now commit instructions telling a coding agent how to work
      in their repository. Five repositories were checked for this page, and
      two of them carry such a file.

      [Hi.Events](/compared-to/hi-events/) publishes `AGENTS.md`, `CLAUDE.md`
      and `.cursorrules` in its repository root. Chobble Tickets publishes
      `AGENTS.md`, `CLAUDE.md` and a structure reference, alongside 39 Cucumber
      feature files describing its behaviour in plain English.

      [Pretix](/compared-to/pretix/), [alf.io](/compared-to/swicket/) and
      [libreevent](/compared-to/libreevent/) carried none at the time of
      review. Chobble Tickets additionally states
      what its checks refuse: 100% line and branch coverage, no repeated block
      of 19 tokens or more, and a ceiling on how complex a single function may
      become.

      Each provider's `agent_instructions` record on its comparison page holds
      this classification and the date it was checked, and reads `not-reviewed`
      where no repository was examined.

      Test and lint thresholds were not compared across the five, so nothing
      here says another project's checks are weaker. Pretix tracks coverage
      through Codecov. What this section records is which repositories carry
      agent instructions, and what Chobble Tickets enforces.

  - type: markdown
    dark: true
    content: |
      ## Choosing

      - If an agent should be able to change behaviour and see the change
        running, the published source and the deployed source need to be the
        same. Among the providers reviewed here, Chobble Tickets and Hi.Events
        meet that for their hosted services, each with the qualifications in
        the table above.
      - A self-hosted alf.io or libreevent deployment also runs the published
        code. Swicket is a separate managed service whose additions are not
        established as sharing alf.io's licence, and libreevent's original
        project publishes no further releases.
      - If the site already runs WordPress, a plugin keeps ticketing inside a
        system that is already being maintained.
      - If nobody wants to maintain a host at all, a managed service fits
        better than a self-hosted deployment. Chobble Tickets, Pretix and
        Swicket each offer one over the same or related code.
      - Check branding terms before committing. Open source does not
        necessarily mean the provider's name can be removed from ticket pages.
---
