---
title: Who Can See Your Attendee Data - Chobble Tickets
meta_title: Who Can See Your Attendee Data | Chobble Tickets
meta_description: A breakdown of exactly which companies can access your attendees' personal information on Chobble Tickets compared to Eventbrite, Ticketmaster, and See Tickets.
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

      On most ticketing platforms, dozens of companies can access your attendees' personal information. Here is exactly who can see what on Chobble Tickets, and how that compares to other platforms.
  - type: markdown
    content: |
      ## Chobble Tickets (managed hosting)

      On Chobble's managed hosting, attendee data is
      [encrypted at rest](/features/encrypted/) for keyed administration
      sessions. The encryption page explains which fields are protected and
      how organisers can choose whether to enable recovery credentials.

      Here is exactly who can access your attendees' personal information:

      | Who | What they can see | Why |
      |-----|-------------------|-----|
      | **Authorised keyed users** | Names, emails, phone numbers, addresses, custom question answers | Each user logs in with separate credentials that unlock their wrapped copy of the site data key |
      | **Your email provider** (if configured) | Email addresses and names on confirmation emails | Mailgun, Resend, Postmark, or SendGrid delivers the email you choose to send |
      | **Stripe, Square, or SumUp** | Payment card details, email, name | The payment processor handles the transaction |
      | **Chobble managed hosting** | Encrypted records at rest; the application processes decrypted fields when an authorised organiser views them | Chobble runs the hosting but does not use attendee data for advertising or other event marketing |

      If the organiser enables a recovery owner, its credentials are sent to a
      host-configured recovery address. Whoever controls those credentials is
      an authorised keyed user and can decrypt the protected attendee fields.

      That is the complete list for the public booking site. It contains no
      advertising networks, audience profiling or third-party analytics
      trackers. This marketing website uses privacy-focused GoatCounter
      analytics, which is separate from organisers' booking sites.

      If you run a free event and choose not to collect email addresses, no
      payment or email provider receives attendee records. The data sits
      encrypted in the database and is readable only in a keyed administration
      session, including an optional recovery owner if one was enabled.
  - type: markdown
    content: |
      ## Chobble Tickets (self-hosted)

      If you [self-host](/hosting/) Chobble Tickets, the list is even shorter:

      | Who | What they can see | Why |
      |-----|-------------------|-----|
      | **You** (the organiser) | Everything you choose to collect | Your server, your encryption keys |
      | **Your email provider** (if you configure one) | Email addresses and names on confirmation emails | You choose the provider, or choose not to send emails at all |
      | **Stripe, Square, or SumUp** (if you charge for tickets) | Payment details | You connect your own payment account, or run free events without one |

      Chobble has no access at all. The encryption keys never leave your
      infrastructure. You can choose whichever email provider you want, or
      none. You can inspect every line of the
      [open source code](https://github.com/chobbledotcom/tickets) to verify
      this.
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

      Each tracker is a separate company that receives data about the
      person visiting the page. This typically includes IP addresses,
      browser information, device identifiers, and browsing behaviour.
      The trackers on these platforms include advertising networks, data
      brokers, social media companies, and analytics providers.

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
      ## Why the difference is structural

      The large ticketing platforms already charge per-ticket fees. Those
      fees do not go towards hosting your event page or storing your
      attendee records. The actual cost of doing that is almost
      unmeasurably small. The per-ticket fees pay for marketing budgets,
      sales teams, executive pay, and investor returns. On top of those
      fees, they also track your attendees across dozens of advertising
      networks. They charge you, and they track your attendees. They do
      both.

      Chobble's income comes from the flat fee you pay (£50/year or £5/month). There is no
      advertising revenue, no data partnerships, and no investor expecting
      growth at your attendees' expense. As a
      [community interest company](https://www.gov.uk/government/publications/community-interest-companies-introduction),
      Chobble cannot distribute profit to shareholders.

      Chobble does not want to be the only ticketing platform. The
      [source code](https://github.com/chobbledotcom/tickets) is public
      under AGPLv3 so that anyone can run their own instance. The goal is
      a distributed alternative to centralised ticketing, not a replacement
      monopoly. The more independent hosts there are, the harder it is for
      any single company to build a database of every event attendee in the
      country.
  - type: markdown
    content: |
      ## What your email provider can see

      If you configure an [email provider](/features/email-providers/) to
      send confirmation emails, that provider can see the email addresses
      and names of attendees who receive confirmations. On Chobble's managed
      hosting, the default provider is Mailgun.

      This is true of any system that sends email. The difference is what
      happens with that information:

      - Transactional email providers like Mailgun, Postmark, Resend, and
        SendGrid process emails on your behalf. They are not advertising
        companies and do not use your attendee list to market other products
        or events.
      - On Chobble Tickets, you choose which provider to use, and you can
        switch at any time. If you self-host, you can use any provider or
        choose not to send emails at all.

      If you do not want any third party to see email addresses, you can run
      events without collecting emails and without configuring an email
      provider. Attendees still receive their tickets via the confirmation
      page and can add them to Apple or Google Wallet.
  - type: markdown
    content: |
      ## What Stripe, Square, and SumUp can see

      If you charge for tickets, the payment processor
      ([Stripe](/features/stripe-and-square/) or Square) handles the
      transaction. They see the attendee's payment card details, name, and
      email address as part of processing the payment.

      Stripe, Square, and SumUp are payment processors, not advertising companies.
      They do not market other events to your attendees or share payment
      data with advertising networks.

      If you run free events, no payment processor is involved. Combined
      with not collecting emails, this means the only person who can see
      your attendee records is you.
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
      ## Zero trackers, encrypted by default

      Sign up for managed hosting at £50/year or £5/month, or self-host and keep everything on your own infrastructure.
name: Who Can See Your Attendee Data | Chobble Tickets
---
