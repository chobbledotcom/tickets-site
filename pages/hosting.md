---
title: Hosting Options - Chobble Tickets
meta_title: Managed and Self-Hosted Event Ticketing | Chobble Tickets
meta_description: Use Chobble managed hosting for £50 a year or £5 a month, or run the complete open source event ticketing platform on your own infrastructure for free.
permalink: /hosting/
eleventyNavigation:
  key: Hosting
  order: 5
blocks:
  - type: hero
    class: gradient
    content: |-
      # Managed and self-hosted event ticketing

      Chobble can run a separate ticketing site for £50 a year or £5 a month. Technical users can instead run the same software on infrastructure they control.
    buttons:
      - text: Start for £5
        href: https://tix.chobble.com/ticket/register
        variant: primary
        size: lg
      - text: View source code
        href: https://github.com/chobbledotcom/tickets
        variant: secondary
        size: lg
  - type: split-image
    subtitle: Managed hosting
    content: |
      ## Chobble runs the site

      Payment assigns a separate ticketing site and sends its setup link by email. Each site has its own database, encryption key, hosted address and renewal date.

      Chobble manages deployment and software updates. Organisers manage their events, team, payment account, email settings, public pages and domain from the administration area.
    button:
      text: See pricing
      href: /pricing/
      variant: secondary
    figure_src: /images/screenshots/dashboard.png
    figure_alt: Chobble Tickets dashboard for a separate hosted ticketing site
    figure_caption: Hosted organisers control their own events, attendees, reports and site settings.
  - type: features
    dark: true
    intro_content: |
      ## What managed hosting includes
    items:
      - icon: hugeicons:flash
        name: Site created after payment
        description: A setup link is sent by email. It opens the new site's password and organisation setup process.
      - icon: hugeicons:database-01
        name: Separate site and database
        description: Each organiser receives a separate instance rather than an account inside a shared event marketplace.
      - icon: hugeicons:globe-02
        name: Hosted address and custom domain
        description: The site works on its supplied address and can also serve up to three configured domain names.
      - icon: hugeicons:refresh
        name: Software updates
        description: Chobble deploys product updates. Updates require a recent database backup before the in-app process can run.
      - icon: hugeicons:database-restore
        name: Backup and restore tools
        description: Database backups can be downloaded as zip files. Restores report the source-code version that matches the restored data.
      - icon: hugeicons:source-code
        name: No hosted-only features
        description: Managed hosting runs the same AGPL-3.0 code published on GitHub. The fee pays for hosting and maintenance.
  - type: markdown
    content: |
      ## Managed hosting or self-hosting

      | | Managed hosting | Self-hosting |
      |---|---|---|
      | Price paid to Chobble | £50/year or £5/month | £0 |
      | Initial deployment | Chobble | Organiser or technical provider |
      | Infrastructure account | Chobble | Organiser or technical provider |
      | Software updates | Chobble | Organiser or technical provider |
      | Source code | Complete AGPL-3.0 product | Complete AGPL-3.0 product |
      | Event and attendee administration | Organiser | Organiser |
      | Payment account | Organiser | Organiser |
      | Email provider settings | Organiser | Organiser |

      Managed hosting is intended for organisers who want to use the software without maintaining its deployment. Self-hosting is intended for people who are comfortable with databases, environment variables and deployment services.
  - type: markdown
    dark: true
    content: |
      ## Host one site

      A single instance can run through Docker or on services documented in the project README. The Bunny deployment path uses a fork of the GitHub repository, a database, an edge script and repository secrets.

      The database sets itself up on the first request. The organiser then opens the site and creates the first owner password.

      Because the organiser controls the deployment, no update reaches the site until its maintainer deploys it. [The GitHub README](https://github.com/chobbledotcom/tickets) contains the current deployment instructions.
  - type: markdown
    content: |
      ## Run hosting for several organisers

      Chobble Tickets also contains tools for technical providers who host sites for other organisers. A configured host can create a site, provision its database, set a new encryption key and publish it through the provider API.

      Hosted sites can use alpha, beta or release update channels. This lets a provider test a release on selected sites before deploying it more widely.

      The [technical documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html) covers site building, configuration and deployment. Providers can set their own hosting price and support terms.
  - type: cta
    button:
      text: Start for £5
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Use managed hosting

      The first month costs £5. Every current feature is included, with no per-ticket platform fee.
name: Managed and Self-Hosted Event Ticketing | Chobble Tickets
---
