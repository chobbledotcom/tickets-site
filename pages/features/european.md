---
title: Hosting Locations and Data - Chobble Tickets
meta_title: Hosting Locations and Data | Chobble Tickets
meta_description: Chobble managed hosting uses Bunny.net. Databases use Bunny's available primary and replica regions, while optional providers have their own data terms.
permalink: /features/european/
eleventyNavigation:
  key: Hosting and Data
  parent: Platform & Integrations
  order: 2.75
blocks:
  - type: hero
    class: gradient
    content: |-
      # Hosting locations and data

      Chobble is a UK company and Bunny, its managed-hosting provider, is headquartered in Slovenia. Managed databases use Bunny's available primary and replica regions, including locations outside Europe.
  - type: markdown
    content: |
      ## Where each part of Chobble is based

      A provider's headquarters and its data-processing regions are different
      facts. The table lists both where relevant. Organisers can also configure
      payment, email and other integration providers.

      | Part of the stack | Company | Headquartered in |
      |---|---|---|
      | Ticketing software | [Chobble](https://chobble.com) | United Kingdom |
      | Hosting and CDN | [Bunny.net](https://bunny.net) | Slovenia |
      | Ticketing database | [Bunny Database](https://bunny.net) | Bunny's available primary and replica regions; storage region `eu-west-1` |
      | Domain registrar | [Njalla](https://njal.la) | Sweden |
      | Default email provider | [Mailgun EU](https://www.mailgun.com/) | EU endpoint (US parent company) |
      | Payment processor | [Stripe](https://stripe.com), [Square](https://squareup.com) or [SumUp](https://sumup.com) | United States, United States or United Kingdom |

      Chobble is a [community interest company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      registered in England as a company limited by guarantee without share
      capital. Its community interest company structure includes an asset lock.
  - type: markdown
    dark: true
    content: |
      ## Bunny infrastructure and database regions

      Chobble Tickets runs on [Bunny.net](https://bunny.net), a content
      delivery network and edge computing platform headquartered in
      Ljubljana, Slovenia. Bunny operates its own infrastructure across
      Europe rather than reselling capacity from Amazon, Google, or
      Microsoft.

      Chobble's database builder asks Bunny for its current primary and replica
      regions and uses all of them. This allows regional database access but
      means records may be replicated outside the UK and EU. The configured
      database storage region is `eu-west-1`.

      On Chobble's managed hosting, attendee personal data is
      [encrypted at rest](/features/encrypted/). A
      [self-hosted operator](/hosting/) can choose a different database and
      infrastructure arrangement.
  - type: markdown
    content: |
      ## What this means for data protection

      Chobble's use of global Bunny database regions does not remove the
      organiser's obligations under UK GDPR or the EU General Data Protection
      Regulation. Organisers with data-residency requirements should assess
      whether this deployment model is suitable.

      Payment, email, webhook, SMS, address lookup and wallet providers may
      process data in other countries. Organisers should list the services they
      enable in their privacy information and review each provider's data terms.
      The [UK has an adequacy decision with the EU](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en).
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
      email provider receives attendee addresses. Other enabled integrations
      may still receive the fields they need. Attendees can view tickets on the
      confirmation page and add them to Apple or Google Wallet.
  - type: markdown
    content: |
      ## Optional services in other jurisdictions

      A managed site can use optional providers headquartered or operating
      outside the UK and EU.

      **Payment processors.** Chobble Tickets supports
      [Stripe, Square and SumUp](/features/stripe-and-square/). Their contracts,
      entities and processing locations vary by organiser location and account.
      If an event is free, no payment processor is involved.

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
      ## Provider jurisdictions

      A provider's legal obligations depend on its corporate structure,
      contracts and the countries in which it operates. Chobble CIC is a UK
      company and Bunny is headquartered in Slovenia. Optional providers may
      be based elsewhere, so organisers with specific legal requirements should
      review those providers before enabling them.
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
      registrar. Chobble has no operational access unless the operator grants
      it. The [application encryption keys](/features/encrypted/) remain in the
      selected environment.

      The recommended Bunny deployment uses all database regions returned by
      Bunny's configuration API. A Docker deployment can use local SQLite or a
      separately selected libSQL service. Other Docker-capable hosts include
      [Fly.io](https://fly.io),
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
      ## Review the hosting options

      Sign up for managed hosting at £50/year or £5/month, or choose the infrastructure for a self-hosted deployment.
name: Hosting Locations and Data | Chobble Tickets
---
