---
layout: design-system-base.html
title: European - Chobble Tickets
meta_title: European Hosting and Data - Chobble Tickets
meta_description: Chobble Tickets is a UK community interest company hosted on Bunny.net in Slovenia. Attendee data can stay in EU regions, and the domain is registered with Njalla.
permalink: /features/european/
eleventyNavigation:
  key: European
  parent: Platform & Integrations
  order: 2.75
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: European infrastructure
    lead: >-
      Chobble is a UK community interest company. The platform runs on
      Bunny.net in Slovenia, and the chobble.com domain is registered with
      Njalla. Attendee data can be kept in EU regions only.

  - type: markdown
    content: |
      ## Where each part of Chobble is based

      The companies that Chobble Tickets depends on are listed below, along
      with where they are headquartered. Most of the stack is based in the
      UK or EU. The payment processors are the main exception, and that
      trade-off is explained further down this page.

      | Part of the stack | Company | Headquartered in |
      |---|---|---|
      | Ticketing software | [Chobble](https://chobble.com) | United Kingdom |
      | Hosting and CDN | [Bunny.net](https://bunny.net) | Slovenia |
      | Domain registrar | [Njalla](https://njal.la) | Run by the team behind The Pirate Bay |
      | Default email provider | [Mailgun EU](https://www.mailgun.com/) | EU endpoint (US parent company) |
      | Payment processor | [Stripe](https://stripe.com) or [Square](https://squareup.com) | United States |

      Chobble is a [community interest company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      registered in England. A community interest company cannot distribute
      profit to shareholders, and its assets are locked to its stated social
      purpose.

  - type: markdown
    section_class: alt
    content: |
      ## Hosting in the EU

      Chobble Tickets runs on [Bunny.net](https://bunny.net), a content
      delivery network and edge computing platform headquartered in
      Ljubljana, Slovenia. Bunny operates its own infrastructure across
      Europe rather than reselling capacity from Amazon, Google, or
      Microsoft.

      Bunny lets you restrict where your data is stored. Edge storage zones
      can be configured to replicate only within specified regions, so
      attendee data can be kept inside the EU. If you host Chobble Tickets
      yourself, you choose which Bunny region your instance runs in and
      where the database sits.

      On Chobble's managed hosting, attendee data is
      [encrypted at rest](/features/encrypted/) and the storage zone is
      configured to keep data in EU regions. You can also
      [run your own instance](/hosting/) and pick whichever region suits
      you.

  - type: markdown
    content: |
      ## Domain registered with Njalla

      The chobble.com domain is registered with [Njalla](https://njal.la),
      a domain registrar run by the team behind The Pirate Bay.

      The domain registrar is the company that can take a site offline by
      revoking the domain. Njalla has a long public record of resisting
      takedown requests that it considers improper, and is based outside
      the usual US- and UK-aligned jurisdictions that most registrars
      operate in.

      If you self-host Chobble Tickets, you use your own registrar. You can
      choose Njalla, a national registrar like
      [Nominet](https://www.nominet.uk/) in the UK, or any other registrar
      you prefer.

  - type: markdown
    section_class: alt
    content: |
      ## Email provider choice

      Chobble Tickets lets you pick which email provider sends confirmation
      emails. The managed hosting default is Mailgun's EU endpoint, which
      stores email data inside the EU.

      The supported providers and where they are based are listed below.
      You can switch at any time.

      | Provider | Data location |
      |---|---|
      | [Mailgun EU](https://www.mailgun.com/regions/) | EU endpoint (Frankfurt) |
      | [Mailgun US](https://www.mailgun.com/regions/) | United States |
      | [Postmark](https://postmarkapp.com/) | United States |
      | [Resend](https://resend.com/) | United States |
      | [SendGrid](https://sendgrid.com/) | United States |

      If you do not configure an email provider, no emails are sent and no
      third party sees attendee email addresses. Attendees still receive
      their tickets on the confirmation page and can add them to Apple or
      Google Wallet.

  - type: markdown
    content: |
      ## Where Chobble cannot avoid US companies

      Chobble Tickets depends on a few US-based services. This page lists
      them rather than hiding them.

      **Payment processors.** Chobble Tickets supports
      [Stripe](/features/stripe-and-square/) and Square. Both are US
      companies. Both operate EU subsidiaries (Stripe Payments Europe in
      Ireland, Square Up Europe in Ireland) that process European
      transactions under GDPR, but the parent companies are US-domiciled
      and subject to the US [CLOUD Act](https://en.wikipedia.org/wiki/CLOUD_Act).
      There are no equivalent EU-based payment processors with the same
      reach. If you run free events, no payment processor is involved.

      **Apple and Google Wallet.** Chobble Tickets can generate passes for
      [Apple Wallet and Google Wallet](/features/apple-wallet/). Both are
      US companies. Wallet passes are optional. Tickets also work as QR
      codes on the confirmation page and in email.

      **GitHub.** The source code is hosted on
      [GitHub](https://github.com/chobbledotcom/tickets), which is owned by
      Microsoft. GitHub holds the code, not attendee data. The code is also
      mirrored on [git.chobble.com](https://git.chobble.com), a self-hosted
      Forgejo instance. You can fork from either one.

  - type: markdown
    section_class: alt
    content: |
      ## Why the CLOUD Act matters

      The US [CLOUD Act](https://en.wikipedia.org/wiki/CLOUD_Act), passed
      in 2018, allows US authorities to compel US-based companies to hand
      over data they hold, regardless of where the data is physically
      stored. This applies to the US parent of any company with a US
      presence, including EU subsidiaries of US cloud providers.

      The [Schrems II](https://en.wikipedia.org/wiki/Schrems_II) ruling
      from the Court of Justice of the European Union in 2020 found that
      EU-US data transfers under the Privacy Shield framework did not
      provide adequate protection, partly because of this. The successor
      framework, the
      [EU-US Data Privacy Framework](https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en),
      is being challenged in the European courts on similar grounds.

      Keeping attendee data on EU infrastructure, with an EU-headquartered
      provider, reduces the number of legal regimes the data is exposed
      to. For most event organisers this is a compliance and risk
      question, not a political one. For some organisers - political
      groups, activist groups, groups running events that might attract
      unwanted attention - it is a more immediate concern.

  - type: markdown
    content: |
      ## For self-hosters

      If you [self-host](/hosting/) Chobble Tickets, you choose the hosting
      region, the email provider, the payment processor, and the domain
      registrar. Chobble has no access to your data at all. The
      [encryption keys](/features/encrypted/) never leave your environment.

      The recommended deployment path uses Bunny.net with EU regions
      selected. You can also deploy to any Deno-compatible host, including
      [Fly.io](https://fly.io) (regions include Frankfurt, Amsterdam,
      Madrid, Paris, Stockholm, and Warsaw),
      [Scaleway](https://www.scaleway.com) in France, or
      [Hetzner](https://www.hetzner.com) in Germany and Finland.

  - type: markdown
    section_class: alt
    content: |
      ## References

      - [Bunny.net - About](https://bunny.net/about/) - headquartered in Ljubljana, Slovenia
      - [Bunny.net - Edge Storage regions](https://docs.bunny.net/docs/storage-regions) - configure which regions your data lives in
      - [Njalla](https://njal.la) - privacy-focused domain registrar
      - [Mailgun - Data regions](https://www.mailgun.com/regions/) - US and EU endpoints
      - [UK Community Interest Companies guidance](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      - [US CLOUD Act (Wikipedia)](https://en.wikipedia.org/wiki/CLOUD_Act)
      - [Schrems II ruling (Wikipedia)](https://en.wikipedia.org/wiki/Schrems_II)

  - type: cta
    title: Run events on European infrastructure
    description: Sign up for managed hosting at £50/year, or self-host in the region of your choice.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
