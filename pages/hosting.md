---
layout: design-system-base.html
title: Hosting - Chobble Tickets
meta_title: Host Chobble Tickets for Others
meta_description: Run Chobble Tickets for the event organisers you know. The platform is designed so that anyone with some technical knowledge can become a host.
permalink: /hosting/
eleventyNavigation:
  key: Hosting
  order: 4
blocks:
  - type: hero
    class: gradient
    title: Host Chobble Tickets for others
    lead: >-
      Chobble Tickets is designed so that anyone with some technical knowledge
      can run it for the event organisers they know. More hosts means a
      decentralised alternative to the big ticketing platforms.

  - type: markdown
    content: |
      ## Why decentralised hosting matters

      The big ticketing platforms are centralised. One company runs the
      infrastructure, holds the data, and sets the terms. If they change their
      pricing or policies, every organiser on the platform is affected at once.

      Chobble Tickets works differently. The code is open source and the system
      is built so that many different people can run it independently. Each host
      serves the organisers they know personally. No single point of control, no
      single company that can change the rules for everyone.

      Decentralisation is the design goal. Any alternative to Eventbrite that
      runs on a single company's servers becomes another centralised platform.
      Chobble Tickets only counts as an alternative if many people run their
      own independent copies.

  - type: markdown
    dark: true
    content: |
      ## Run a hosting platform

      If you are comfortable with web services and APIs, you can run a hosting
      platform that creates and manages ticketing sites for your customers.

      The way this works: you set up an account on
      [Bunny.net](https://bunny.net) (the cloud platform that Chobble Tickets
      runs on) and configure a few account-level settings. Once that is done,
      the platform has a built-in tool that creates new ticketing sites
      automatically. Each site gets its own database, its own encryption key,
      and its own web address.

      When you create a new site through the platform, it:

      - Downloads the latest release of Chobble Tickets from GitHub
      - Creates a new server on Bunny's network
      - Sets up the database connection and generates a fresh encryption key
      - Copies your shared settings across (your email provider, image storage,
        and wallet pass configuration)
      - Publishes the site live

      The whole process takes a few seconds once your account is configured.

      You can charge your customers whatever you like for hosting. Chobble
      charges £50/year with no per-ticket fees, but that is one choice among
      many. You might charge more, less, or nothing at all.

      At the moment, one step in the setup requires manual clicking: creating
      the database for each new site in the Bunny dashboard. Bunny's database
      product is still in beta and does not yet have a public API. Once it
      does, the entire flow from "organiser signs up" to "site is live" will
      be fully automatic with no manual steps.

  - type: markdown
    content: |
      ## Host a single site

      If you want to run one ticketing site for yourself or for someone you
      know, you do not need the full hosting platform. You can deploy a single
      instance using the project's GitHub Action.

      The steps are:

      1. Fork the [Chobble Tickets repository](https://github.com/chobbledotcom/tickets/fork) on GitHub
      2. Create a database and an edge script in the [Bunny dashboard](https://dash.bunny.net)
      3. Add your Bunny credentials as secrets in your GitHub repository
      4. Push to the main branch

      The GitHub Action builds the code and deploys it to Bunny automatically
      on every push. The database sets itself up on the first request. You then
      visit the site and set your admin password.

      You can also deploy with Docker, or use one-click deploy buttons for
      DigitalOcean, Heroku, Koyeb, Render, and Fly.io. The
      [README](https://github.com/chobbledotcom/tickets) has full instructions
      for each option.

      Because you control the fork, you choose when to pull in updates from the
      main project. No update reaches your site without your approval.

  - type: markdown
    dark: true
    content: |
      ## What hosts share, and what they control

      Every host runs the same open source code. Chobble does not have a
      special version with extra features. The hosted version at
      [tix.chobble.com](https://tix.chobble.com) and the code on
      [GitHub](https://github.com/chobbledotcom/tickets) are identical.

      Each host controls:

      - **Pricing**: what to charge customers, if anything
      - **Infrastructure**: which Bunny account, which region, which plan
      - **Email**: which email provider sends confirmations (Resend,
        Postmark, SendGrid, or Mailgun)
      - **Updates**: when to deploy new versions of the software
      - **Support**: how to help the organisers they host for

      Attendee data is encrypted and stays in each site's own database. Hosts
      cannot read their customers' attendee data. The encryption key is
      generated per site and only the site's admin can decrypt it.

  - type: markdown
    content: |
      ## Getting started

      To run a hosting platform, you need a [Bunny.net](https://bunny.net)
      account and some familiarity with APIs and environment variables. The
      [technical documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html)
      covers the configuration in detail.

      To host a single site, follow the deployment instructions in the
      [README on GitHub](https://github.com/chobbledotcom/tickets). The
      recommended path is forking the repository and deploying via GitHub
      Actions.

      If you have questions about hosting, open an issue on the
      [GitHub repository](https://github.com/chobbledotcom/tickets/issues).

  - type: cta
    title: View the source code
    description: >-
      Chobble Tickets is open source under AGPLv3. Browse the code, fork it,
      and deploy your own instance.
    button:
      text: GitHub
      href: https://github.com/chobbledotcom/tickets
      variant: primary
      size: lg
---
