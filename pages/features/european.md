---
layout: design-system-base.html
title: European - Chobble Tickets
meta_title: European Hosting and Data - Chobble Tickets
meta_description: Chobble Tickets is a UK community interest company hosted on Bunny.net in Slovenia. Attendee data stays in the EU, which simplifies GDPR compliance and keeps processing outside the US CLOUD Act.
permalink: /features/european/
eleventyNavigation:
  key: European
  parent: Platform & Integrations
  order: 2.75
blocks:
  - type: hero
    class: gradient
    lead: Chobble is a UK company hosted on Bunny.net in Slovenia. Attendee data stays in the EU, so processing is covered by UK-GDPR and EU data protection law rather than the US CLOUD Act.
    name: European infrastructure
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
      | Domain registrar | [Njalla](https://njal.la) | Sweden |
      | Default email provider | [Mailgun EU](https://www.mailgun.com/) | EU endpoint (US parent company) |
      | Payment processor | [Stripe](https://stripe.com) or [Square](https://squareup.com) | United States |

      Chobble is a [community interest company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      registered in England. A community interest company cannot distribute
      profit to shareholders, and its assets are locked to its stated social
      purpose.
  - type: markdown
    dark: true
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
      ## What this means for GDPR

      If your attendees are in the UK or EU, you are the data controller
      under UK-GDPR or the EU General Data Protection Regulation. On
      managed hosting, attendee data is stored on EU infrastructure by an
      EU-headquartered provider, and Chobble itself is a UK company. This
      keeps the processing within one compatible legal regime, which has
      a few practical effects:

      - You do not need to rely on the
        [EU-US Data Privacy Framework](https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en)
        or Standard Contractual Clauses to justify transferring attendee
        data outside the EU. The data does not leave the EU.
      - Your privacy policy does not need a section explaining an
        international data transfer.
      - If there is a data breach, you report it to the
        [ICO](https://ico.org.uk/) in the UK or your national data
        protection authority, under GDPR procedures you already
        understand.

      The [UK has an adequacy decision with the EU](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en),
      so attendee data can flow between Chobble (UK) and Bunny (Slovenia)
      without additional safeguards.
  - type: markdown
    dark: true
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
    dark: true
    content: |
      ## Who can legally compel access to the data

      When a government wants access to data held by a company, the law
      that applies depends on where the company is based, not where the
      data is stored.

      The US [CLOUD Act](https://en.wikipedia.org/wiki/CLOUD_Act), passed
      in 2018, allows US authorities to compel US-based companies to hand
      over data they hold, regardless of where the data physically sits.
      This applies to the US parent of any company with a US presence,
      including the EU subsidiaries of US cloud providers.

      Chobble is a UK company and Bunny is a Slovenian company. Neither
      is in scope for the CLOUD Act. A request for attendee data would
      have to go through UK or Slovenian courts under their respective
      data protection laws, which include judicial oversight and notice
      requirements that the CLOUD Act does not.

      For most organisers this is background detail. For groups running
      events that might attract official attention (political organising,
      campaigns on contested issues, migrant and refugee support, and
      reproductive healthcare) it is a more immediate concern.
  - type: markdown
    content: |
      ## A note on the domain registrar

      The chobble.com domain is registered with
      [Njalla](https://njal.la). Njalla operates from Sweden and is
      incorporated in Saint Kitts and Nevis. It was founded by Peter
      Sunde, one of the co-founders of The Pirate Bay.

      Njalla works differently from most registrars. It takes legal
      ownership of the domain on the customer's behalf and passes the
      usage rights to the customer. Takedown requests and legal process
      go to Njalla first. Njalla publishes the notices it receives
      alongside its responses, so its approach is a matter of public
      record.

      For most Chobble Tickets organisers, the registrar is invisible in
      day-to-day use. The reason to name it here is that the domain sits
      with a small Swedish operator rather than a US-based registrar,
      which is consistent with the rest of the stack. If you self-host,
      you pick your own registrar.
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
    dark: true
    content: |
      ## References

      - [Bunny.net - About](https://bunny.net/about/) - headquartered in Ljubljana, Slovenia
      - [Bunny.net - Edge Storage regions](https://docs.bunny.net/docs/edge-storage-overview) - configure which regions your data lives in
      - [Njalla](https://njal.la) - domain registrar operating from Sweden
      - [Mailgun - Data regions](https://www.mailgun.com/regions/) - US and EU endpoints
      - [UK Community Interest Companies guidance](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      - [US CLOUD Act (Wikipedia)](https://en.wikipedia.org/wiki/CLOUD_Act)
      - [UK-EU adequacy decision](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en)
  - type: cta
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Run events on European infrastructure

      Sign up for managed hosting at £50/year, or self-host in the region of your choice.
name: European Hosting and Data - Chobble Tickets
---
