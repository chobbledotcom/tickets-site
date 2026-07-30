---
title: Deploying a Ticket Site - Chobble Tickets
meta_title: Deploying a Ticket Site | Chobble Tickets
meta_description: Set up a Chobble Tickets site from a payment and a setup link, or deploy the same product yourself in five documented steps. The database migrates itself on the first request.
permalink: /features/deployment/
eleventyNavigation:
  key: Deployment
  parent: Platform & Integrations
  order: 1
blocks:
  - type: hero
    class: gradient
    content: |-
      # Deploying a ticket site

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

      Catalogue export produces versioned JSON, and that is what moves event
      setup between Chobble Tickets hosts. It carries listings and groups with
      their prices, memberships, packages and parent references, and can be
      imported into a site on managed hosting or a self-hosted deployment.

      Database backups are a separate tool with a separate purpose. They
      produce a complete database as a single zip file for restoring a site,
      and a restore reports the source-code version that matches the restored
      data. Encrypted settings and attendee fields depend on the site's key
      material, so a backup is not a substitute for the catalogue export when
      moving to a different host.

      Updates refuse to run without a recent backup.

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
name: Deploying a Ticket Site | Chobble Tickets
---
