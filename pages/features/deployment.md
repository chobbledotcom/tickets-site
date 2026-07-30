---
title: Deploying an Event Ticketing Site - Chobble Tickets
meta_title: Deploying an Event Ticketing Site | Chobble Tickets
meta_description: Set up a site that sells tickets for your events, from a payment and a setup link, or deploy the same product yourself in five documented steps. The database migrates itself on the first request.
permalink: /features/deployment/
eleventyNavigation:
  key: Deployment
  parent: Platform & Integrations
  order: 1
blocks:
  - type: hero
    class: gradient
    content: |-
      # Deploying an event ticketing site

      Managed sites are created after payment and set up through an emailed link. Self-hosted sites follow five documented steps. Both run the same product with every feature already included.
  - type: markdown
    content: |
      ## Managed hosting

      Payment assigns a separate ticketing site and sends its setup link by
      email. Opening that link sets the first owner password, the organisation
      name and the currency.

      Each site has its own database, its own encryption key and its own
      hosted address. Chobble deploys the software and its updates.

      There is no separate onboarding stage in which features are switched on.
      Every current feature is present when the site opens, and the settings
      pages configure them.

      ## Self-hosted deployment

      The recommended self-hosted path uses Bunny Edge Scripting, a service
      that runs a single JavaScript file on Bunny's network instead of on a
      server the operator maintains. The
      [README](https://github.com/chobbledotcom/tickets) lists five steps:

      1. Fork or clone the repository.
      2. Create a Bunny database and note its URL and token.
      3. Create a Bunny Edge Script with the repository as its linked source.
      4. Add `DB_URL`, `DB_TOKEN`, `DB_ENCRYPTION_KEY` and
         `SCHEDULED_TASK_KEY` as secrets in the Bunny dashboard.
      5. Add `BUNNY_SCRIPT_ID` and `BUNNY_ACCESS_KEY` as GitHub Actions
         secrets in the fork.

      Pushes to `main` then trigger the deploy workflow. Image uploads need two
      further Bunny secrets, `STORAGE_ZONE_NAME` and `STORAGE_ZONE_KEY`.

      ## The database sets itself up

      There is no separate migration command to run before the first visit. The
      database schema migrates itself on the first request, and the site is
      then ready at `/setup/` for the first owner password and currency.

      Docker deployments follow the same pattern against local SQLite or a
      remote libSQL database.

      ## What deploying does not involve

      The Bunny path has no server administration in it. There is no virtual
      private server to rent or provision, no reverse proxy to configure, no
      TLS certificate to obtain or renew, no operating system to patch, no
      process manager to keep the application running, and no SSH access to
      set up.

      The whole deployment runs through the Bunny dashboard and a GitHub
      repository: a database, an edge script, a handful of secrets and the
      Actions workflow that ships each push. Nobody has to edit application
      code to get a working site.

      This is the main practical difference from ticketing software that
      installs onto a host. Those deployments are capable and widely used, but
      they leave someone responsible for the machine underneath them for as
      long as the site runs.
  - type: features
    dark: true
    intro_content: |
      ## Configuration that happens in the admin area
    items:
      - icon: hugeicons:credit-card
        name: Payment providers
        description: Enter a Stripe, Square or SumUp API key in admin settings. The webhook endpoint configures itself rather than being registered by hand.
      - icon: hugeicons:globe-02
        name: Addresses and domains
        description: Each site works on its supplied address straight away and can also serve up to three configured domain names.
      - icon: hugeicons:mail-01
        name: Email sending
        description: Choose Resend, Postmark, SendGrid or Mailgun and enter its key. Confirmation templates can be edited in Liquid syntax.
      - icon: hugeicons:file-import
        name: Catalogue import
        description: Export listings and groups from an existing site as JSON and import them into a new one, including prices, memberships and packages.
      - icon: hugeicons:copy-01
        name: Duplicate and bulk edit
        description: Copy one listing, or duplicate a whole group with name replacement and date shifting, rather than building each event from scratch.
      - icon: hugeicons:paint-board
        name: Branding
        description: Set the header image, site title and theme colours. Booking pages and emails carry no Chobble branding by default.
  - type: markdown
    content: |
      ## Moving a site between hosts

      There are two routes, and they carry different things.

      ### Restoring a database backup

      A backup is a zip holding every table, so a restore brings back listings,
      attendees, answers, settings and the ledger. Three things have to travel
      with it.

      - **The same `DB_ENCRYPTION_KEY`**, which covers listing and site
        details, email settings and payment-provider secrets.
      - **A keyed account's password**, or the recovery credentials where that
        route is enabled. The key that unlocks attendee personal data comes
        from a password the site never stores, so keeping the environment key
        while losing every keyed password leaves those records unreadable.
      - **The storage zone.** Images and attachments are not in the zip. The
        database holds their filenames while the files live in the configured
        zone, so the restored site has to point at that zone or a copy of it.

      A restore reports the source-code version that matches the restored data.

      ### Exporting the catalogue

      Catalogue export moves event setup rather than a whole site. It produces
      versioned JSON covering listings and groups with their prices,
      memberships, packages and parent references.

      This suits copying a programme into a different site rather than
      recreating the one you had. Updates refuse to run without a recent
      backup.

      ## Hosting several sites

      Chobble Tickets includes a site builder for technical providers who host
      sites for other organisers. It provisions a new site on Bunny Edge or
      Deno Deploy and creates its database and its own encryption key.

      Each site records the build it is running, so a host can see which sites
      are behind and redeploy them from the latest release. Sites can be put on
      alpha, beta or release update channels.
  - type: markdown
    dark: true
    content: |
      ## References

      - [Chobble Tickets README](https://github.com/chobbledotcom/tickets) - the deployment steps and required secrets
      - [Technical documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html) - configuration keys and deployment detail
      - [Hosting options](/hosting/) - what managed hosting and self-hosting each cover
  - type: cta
    button:
      text: Get started
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Set up a site

      Managed hosting costs £50/year or £5/month, or £25/year for charities, community groups, artists and musicians, which applies to annual billing only. The same product can be self-hosted with no Chobble software fee.
name: Deploying an Event Ticketing Site | Chobble Tickets
---
