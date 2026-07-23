---
title: Who Can See Your Attendee Data - Chobble Tickets
meta_title: Who Can See Your Attendee Data | Chobble Tickets
meta_description: See which users and configured service providers may receive attendee data through Chobble Tickets, including payments, email, webhooks and managed hosting.
permalink: /features/who-can-see-your-data/
eleventyNavigation:
  key: Who Can See Your Data
  parent: Platform & Integrations
  order: 2.5
blocks:
  - type: hero
    class: gradient
    content: |-
      # Who can see your attendee data

      Authorised users and configured service providers may need attendee data to run an event. This page explains who receives which information through Chobble Tickets.
  - type: markdown
    content: |
      ## Chobble Tickets (managed hosting)

      On Chobble's managed hosting, attendee data is
      [encrypted at rest](/features/encrypted/) for keyed administration
      sessions. The encryption page explains which fields are protected and
      how organisers can choose whether to enable recovery credentials.

      These parties may receive attendee information, depending on which
      features the organiser configures:

      | Who | What they can see | Why |
      |-----|-------------------|-----|
      | **Authorised keyed users** | Names, emails, phone numbers, addresses, custom question answers | Each user logs in with separate credentials that unlock their wrapped copy of the site data key |
      | **Your email provider** (if configured) | Email addresses and names on confirmation emails | Mailgun, Resend, Postmark, or SendGrid delivers the email you choose to send |
      | **Stripe or Square** | Payment card details, name, email and payment metadata that may include phone, address or special instructions | The selected payment processor handles the transaction |
      | **SumUp** | Payment card details and the amount being charged | SumUp handles the transaction; booking metadata remains in Chobble Tickets |
      | **Webhook destinations** (if configured) | Booking fields selected by the webhook payload, including contact and address details | The organiser connects another system to booking notifications |
      | **SMS and address lookup providers** (if configured) | Phone numbers and message content, or a postcode used for lookup | The organiser enables SMS or postcode lookup |
      | **Chobble managed hosting** | Encrypted records at rest; the application processes decrypted fields when an authorised organiser views them | Chobble runs the hosting but does not use attendee data for advertising or other event marketing |

      If the organiser enables a recovery owner, its credentials are sent to a
      host-configured recovery address. Whoever controls those credentials is
      an authorised keyed user and can decrypt the protected attendee fields.

      Which rows apply depends on the site's settings. The public booking site
      contains no advertising network, audience-profiling or third-party
      analytics scripts. This marketing website uses GoatCounter analytics,
      which is separate from organisers' booking sites.

      A free event can run without a payment provider. If it also collects no
      email address and uses no webhook, SMS or address lookup integration,
      attendee records remain in the ticketing database and are readable only
      in a keyed administration session, including an optional recovery owner
      if one was enabled.
  - type: markdown
    content: |
      ## Chobble Tickets (self-hosted)

      If you [self-host](/hosting/) Chobble Tickets, the operator selects the
      infrastructure and integrations:

      | Who | What they can see | Why |
      |-----|-------------------|-----|
      | **You** (the organiser) | Everything you choose to collect | Your server, your encryption keys |
      | **Your email provider** (if you configure one) | Email addresses and names on confirmation emails | You choose the provider, or choose not to send emails at all |
      | **Stripe, Square, or SumUp** (if you charge for tickets) | Payment details | You connect your own payment account, or run free events without one |
      | **Your other configured providers** | The data required for webhooks, SMS or address lookup | You choose whether to enable these services |

      Chobble has no operational access to an independently self-hosted site
      unless the operator grants it. The application encryption keys remain in
      the selected infrastructure. The
      [open source code](https://github.com/chobbledotcom/tickets) documents
      how these integrations work.
  - type: markdown
    dark: true
    content: |
      ## How other platforms compare

      The independent tracker database
      [WhoTracks.me](https://www.ghostery.com/whotracksme) (run by Ghostery)
      counts how many third-party tracking companies are present on websites.
      Here is what they found on major ticketing platforms:

      | Platform | Trackers detected | Trackers per page |
      |----------|-------------------|-------------------|
      | **Ticketmaster** | 65 | not published |
      | **Eventbrite** | 42 | 6.07 |
      | **See Tickets** | 38 | not published |
      | **Ticket Tailor** | 18 | 3.88 |
      | **Chobble Tickets** | 0 | 0 |

      A detected tracker is a third-party request that may receive technical
      information such as an IP address, browser details and page context. Its
      purpose and the information processed depend on the provider.

      You can look up any platform on
      [WhoTracks.me](https://www.ghostery.com/whotracksme/websites) and
      see the full list for yourself. You can also read each platform's
      privacy policy and count the number of third-party companies listed
      in it. They are long documents.

      These tracker counts were checked in April 2026 and may change over
      time. The underlying pattern does not: platforms that make money from
      advertising and audience data have trackers, and platforms that do
      not make money from advertising and audience data do not.
  - type: markdown
    content: |
      ## Why providers differ

      Ticketing providers use different business and technical models. Their
      privacy policies and processor lists describe which companies receive
      data and why.

      Chobble receives income from monthly and annual managed-hosting
      fees rather than advertising or attendee data sales. Chobble CIC is a
      company limited by guarantee with an asset lock. The
      [source code](/features/open-source/) is published under
      AGPL-3.0-only, so organisers can inspect it or run an independent copy.
  - type: markdown
    content: |
      ## What your email provider can see

      If you configure an [email provider](/features/email-providers/) to
      send confirmation emails, that provider can see the email addresses
      and names of attendees who receive confirmations. On Chobble's managed
      hosting, the default provider is Mailgun.

      Mailgun, Postmark, Resend and SendGrid process messages under their own
      terms. The organiser chooses the provider and can switch it. A
      self-hosted operator can use another provider or choose not to send
      emails.

      If you do not want any third party to see email addresses, you can run
      events without collecting emails and without configuring an email
      provider. Attendees still receive their tickets via the confirmation
      page and can add them to Apple or Google Wallet.
  - type: markdown
    content: |
      ## What Stripe, Square, and SumUp can see

      If you charge for tickets, the payment processor
      ([Stripe](/features/stripe-and-square/) or Square) handles the
      transaction. They see the payment card details and checkout information.
      Stripe and Square metadata may also include the name, email, phone,
      address and special instructions needed to reconcile the booking.

      If you run free events, no payment processor is involved. Combined
      with not collecting emails and leaving optional integrations disabled,
      this limits access to authorised keyed users and the chosen hosting
      infrastructure.
  - type: markdown
    content: |
      ## Sources

      Tracker counts are from
      [WhoTracks.me](https://www.ghostery.com/whotracksme) (run by
      Ghostery), which analyses real browsing data. You can look up any
      website yourself. The counts on this page were checked in April 2026
      and may change over time.

      - [WhoTracks.me - Ticketmaster](https://www.ghostery.com/whotracksme/websites/ticketmaster.com)
      - [WhoTracks.me - Eventbrite](https://www.ghostery.com/whotracksme/websites/eventbrite.com)
      - [WhoTracks.me - See Tickets](https://www.ghostery.com/whotracksme/websites/seetickets.com)
      - [WhoTracks.me - Ticket Tailor](https://www.ghostery.com/whotracksme/websites/tickettailor.com)
      - [Chobble Tickets encryption documentation](https://chobbledotcom.github.io/tickets/docs/crypto.ts)
  - type: cta
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## No advertising trackers on booking sites

      Sign up for managed hosting at £50/year or £5/month, or run the software on infrastructure you select.
name: Who Can See Your Attendee Data | Chobble Tickets
---
