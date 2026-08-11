---
name: Host Your Own Ticket Site
subtitle: Providers that support an organiser domain, a standalone public site or self-hosting
meta_title: Host Your Own Ticket Site | Chobble Tickets
meta_description: Compare ticketing providers that support custom domains, public event websites, WordPress ticketing or software hosted on infrastructure the organiser controls.
guide-category: choosing-a-ticket-platform
order: 3
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      "Your own ticket site" can describe three different arrangements. A
      provider can host ticket pages at an organiser's domain, supply a full
      public website, or let the organiser run the software on selected
      infrastructure.

      A custom subdomain such as `tickets.example.org` controls the public web
      address but does not mean the organiser runs the server. A provider can
      still host and maintain everything behind that address.

  - type: markdown
    dark: true
    content: |
      ## Managed services with an organiser domain

      | Provider | Domain and public site | Hosting model |
      |---|---|---|
      | [Chobble Tickets](/features/custom-domain/) | Includes a `yourname.tix.chobble.net` address and supports an organiser's own domain. The public site can contain a homepage, event listings, news, content pages and a contact form. | Chobble can manage the deployment, or the same software can be self-hosted. |
      | [Ticket Tailor](/compared-to/ticket-tailor/) | A custom domain costs £7/month separately or is included in the £39/month White Label add-on. Ticket Tailor supplies hosted box-office pages and embeddable event-listing, calendar and checkout widgets. | Hosted by Ticket Tailor. |
      | [tickts](/compared-to/tickts/) | The Pro plan removes tickts branding and supplies an event-listing storefront. Its pricing page lists a tickts.co.uk subdomain, while its white-label page documents pointing an organiser-owned domain by CNAME. | Hosted by tickts. Confirm custom-domain availability before purchase. |
      | [Pretix](/compared-to/pretix/) | Supplies an organiser profile, event shops and mini-CMS pages for static content. Hosted custom domains are available by arrangement. | Hosted plans are available; Community and Enterprise editions can also be self-hosted. |
      | [Wix Events](/compared-to/wix-events/) | Ticketing sits inside a complete Wix website with its page builder. | Hosted as part of the organiser's Wix site. |

      A hosted custom domain reduces technical maintenance while keeping the
      organiser's name in the web address. It does not by itself determine who
      can read attendee data, whether the service adds branding, or whether the
      site can be moved to another host.

  - type: markdown
    content: |
      ## Software installed on an organiser's hosting

      | Software | Site and domain | Main qualification |
      |---|---|---|
      | [Chobble Tickets](/hosting/) | Docker and other self-hosted deployments use a domain configured through the selected host. The same public website and ticketing product are included. | No Chobble software licence fee. The operator manages deployment, updates and services. |
      | [FooEvents](/compared-to/fooevents/) | Event and checkout pages run inside the organiser's WordPress and WooCommerce site, on its domain. | Commercial plugins include 12 months of updates and support. The operator maintains WordPress, WooCommerce and hosting. |
      | [alf.io](/compared-to/swicket/) | A self-hosted deployment runs at the domain configured by its operator. | GPL-3.0 software with separate infrastructure and payment costs. Swicket is its managed enterprise service. |
      | [Hi.Events](/compared-to/hi-events/) | Self-hosted deployments can use their production domain and provide an organiser homepage and event pages. | Free use requires visible Hi.Events branding. Removing it requires a commercial licence. |
      | [Pretix Community](/compared-to/pretix/) | The organiser runs the shop front and configures its domain. | The free edition covers core ticketing. Some larger-event features require paid enterprise plugins. |
      | [Event Schedule](/compared-to/event-schedule/) | A Docker, one-click or manual install runs at its configured domain, with the same public site as the hosted service. | Open source under the Attribution Assurance License, with no per-ticket fee. The operator maintains the server. |
      | [Revel](/compared-to/revel/) | A self-hosted deployment runs at its configured domain. | MIT licensed and free to self-host. The operator runs a Django server with PostgreSQL and Redis. |
      | [libreevent](/compared-to/libreevent/) | A self-hosted deployment runs at its configured domain. | GPLv3, but the project is archived, so the operator maintains their own copy of the code and the server. |
      | [EventPrime](/compared-to/eventprime/) | Event pages run inside the organiser's WordPress site, on its domain. | Free core plugin under GPLv2 or later; paid extensions are sold separately. The operator maintains WordPress and hosting. |
      | [EventMS Pro](/compared-to/eventms-pro/) | A self-hosted deployment runs at its own domain; the licence covers one deployment. | A closed build sold as a one-time licence ($4,999 early-bird or $7,999), with no per-ticket fee. The operator maintains the server. |

      Self-hosting gives the organiser or its technical provider responsibility
      for the deployment. This includes updates, backups, security, email
      delivery, domain settings and availability.

      A technical provider hosting several organisers can use Chobble's
      [site builder](/features/deployment/), which provisions a separate site
      for each organiser with its own database and key. The
      [open source ticketing platforms guide](/guide/choosing-a-ticket-platform/open-source-ticketing-platforms/)
      compares the licences of the open source options above.

  - type: markdown
    dark: true
    content: |
      ## Other kinds of public ticket page

      Several providers supply branded public pages with different scope or
      without documented support for an organiser-owned domain.

      - [Dandelion](/compared-to/dandelion/) supplies organisation profiles,
        custom landing pages, event listings and iframe embeds. Its public
        documentation does not describe organiser-owned domains.
      - [Humanitix](/compared-to/humanitix/) supplies customisable event pages
        and widgets that can sell tickets on an existing website.
      - [EVENTIM.Light](/compared-to/eventim-light/) supplies branded ticket
        shops, direct links and iframe embeds.
      - [Ticketebo](/compared-to/ticketebo/) designs and builds an organiser
        home page listing all upcoming events plus individual event pages, all
        on the ticketebo.co.uk domain. Bespoke event websites are offered as a
        premium service.
      - [PTA Events](/compared-to/pta-events/) supplies a branded fundraising
        website with news, custom pages, events, products, volunteer management
        and committee listings.
      - [Cheddar Up](/compared-to/cheddar-up/) supplies branded Group Pages on
        its Team plan. Its website buttons lead to hosted collection pages
        rather than an inline checkout.

  - type: markdown
    content: |
      ## Choosing a model

      - Choose a managed custom domain when an organiser wants its own web
        address without maintaining the ticketing deployment.
      - Choose a full website product when events, general pages and contact
        information need to live in one site.
      - Choose a widget when an existing website should remain the main public
        site and only the booking form needs to come from the ticketing
        provider.
      - Choose self-hosting when the organiser or its technical provider can
        maintain the deployment and wants control over where the software runs.
---
