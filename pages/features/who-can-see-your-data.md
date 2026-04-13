---
layout: design-system-base.html
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
    container_width: full
    class: gradient
    title: Who can see your attendee data
    lead: >-
      On most ticketing platforms, dozens of companies can access your
      attendees' personal information. Here is exactly who can see what on
      Chobble Tickets, and how that compares to other platforms.

  - type: markdown
    content: |
      ## Chobble Tickets (managed hosting)

      On Chobble's managed hosting, attendee data is
      [encrypted at rest](/features/encrypted/) using hybrid RSA-OAEP +
      AES-256-GCM encryption, derived from your admin password. When an
      attendee registers for your event, their personal information is
      encrypted before it is written to the database. It is only decrypted
      when you log in and view it.

      Here is exactly who can access your attendees' personal information:

      | Who | What they can see | Why |
      |-----|-------------------|-----|
      | **You** (the organiser) | Names, emails, phone numbers, addresses, custom question answers | You log in and decrypt the data with your password |
      | **Your email provider** (if configured) | Email addresses and names on confirmation emails | Mailgun, Resend, Postmark, or SendGrid delivers the email you choose to send |
      | **Stripe or Square** | Payment card details, email, name | The payment processor handles the transaction |
      | **Chobble** | Encrypted data on the server, decrypted only when you view it | Chobble hosts the database but does not access, share, or use attendee data |

      That is the complete list. There are no advertising networks, no
      analytics trackers, no data brokers, and no audience profiling.

      If you run a free event and choose not to collect email addresses,
      nobody other than you can see your attendee records. The payment
      processor is not involved because there is no payment. The email
      provider is not involved because there are no emails. The data sits
      encrypted in the database, readable only by someone with your password.

  - type: markdown
    content: |
      ## Chobble Tickets (self-hosted)

      If you [self-host](/hosting/) Chobble Tickets, the list is even shorter:

      | Who | What they can see | Why |
      |-----|-------------------|-----|
      | **You** (the organiser) | Everything you choose to collect | Your server, your encryption keys |
      | **Your email provider** (if you configure one) | Email addresses and names on confirmation emails | You choose the provider, or choose not to send emails at all |
      | **Stripe or Square** (if you charge for tickets) | Payment details | You connect your own payment account, or run free events without one |

      Chobble has no access at all. The encryption keys never leave your
      infrastructure. You can choose whichever email provider you want, or
      none. You can inspect every line of the
      [open source code](https://github.com/chobbledotcom/tickets) to verify
      this.

  - type: markdown
    section_class: alt
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

      Each tracker is a separate company that receives some data about the
      person visiting the page. This data typically includes IP addresses,
      browser information, device identifiers, and browsing behaviour. On
      some platforms it also includes purchase history, event attendance, and
      demographic profiles.

      These numbers come from
      [WhoTracks.me](https://www.ghostery.com/whotracksme/websites), which
      analyses real browsing data. The counts were checked in April 2026.

  - type: markdown
    content: |
      ## Ticketmaster: 65 trackers

      [Ticketmaster](https://www.ticketmaster.co.uk) has the most trackers
      of any major ticketing platform. The 65 companies detected by
      WhoTracks.me include Google (multiple services), Facebook, TikTok,
      Criteo, LiveRamp, Adobe (multiple services), AppNexus, Amazon
      Advertising, Snapchat, Pinterest, Reddit, Microsoft, and dozens
      more.

      Ticketmaster's
      [privacy policy](https://privacy.ticketmaster.com/privacy-policy)
      names 11 global service providers (including Oracle, Salesforce, and
      AWS) and states that data is shared with "Event Partners," "Commercial
      Partners," "Business Partners," "Data Brokers," and "advertising and
      marketing partners who collate geodemographic information."

      The policy states that Ticketmaster creates user profiles from
      attendee data, including "age range, gender, or information about
      events you like or products you buy." It collects location data via
      GPS, photographs and CCTV footage from events, and browsing history
      across the platform.

      A January 2026
      [class action lawsuit](https://en.wikipedia.org/wiki/United_States_v._Live_Nation_Entertainment)
      (Scruggs v. Ticketmaster LLC) alleged that trackers fire before a user
      has the chance to click anything, routing IP addresses, page URLs, and
      device identifiers to third-party servers.

      In 2024, a breach exposed **560 million customer records** (1.3
      terabytes of data) after attackers compromised Snowflake, a
      third-party cloud warehouse used by Ticketmaster. The stolen data
      included names, email addresses, physical addresses, phone numbers,
      and order histories.

      Ticketmaster is owned by
      [Live Nation Entertainment](https://www.livenationentertainment.com).

  - type: markdown
    content: |
      ## Eventbrite: 42 trackers

      [Eventbrite](https://www.eventbrite.co.uk) has 42 trackers detected by
      WhoTracks.me, loading an average of 6.07 trackers per page. These
      include Google Tag, Google Analytics, Facebook, Branch, Heap, Intercom,
      and Datadog.

      Eventbrite's privacy policy states that data is shared with "marketing
      agencies, online advertising providers, data enhancement and data
      services providers, database service providers, email service
      providers, payment processing partners," and others. Eventbrite may
      also derive or infer demographic data about attendees, including "age
      range, gender, and parental status," based on their use of the
      platform.

      When attendees buy tickets through Eventbrite, they are encouraged to
      follow other events on the platform. Eventbrite sends recommendation
      emails about other organisers' events to attendees who have purchased
      tickets.

      Eventbrite is owned by
      [Bending Spoons](https://bendingspoons.com), an Italian software
      company that also owns Evernote, Meetup, and WeTransfer.

  - type: markdown
    content: |
      ## See Tickets: 38 trackers and 35 named partners

      [See Tickets](https://www.seetickets.com) (now rebranded as Eventim
      UK) has 38 trackers detected by WhoTracks.me. Its
      [privacy policy](https://www.eventimb2b.co.uk/privacy-policy/) names
      at least 35 third-party companies that receive attendee data, including
      AdRoll, Facebook, Google, TikTok, Microsoft, Quantcast, Mixpanel,
      HubSpot, Hotjar, and Tapad.

      Some of these partners carry out cross-device tracking, following users
      across multiple devices. The policy states that some cookies are
      "designed to stay on your computer for as long as possible."

      See Tickets retains personal data for **15 years**. It has suffered
      two known data breaches: one in 2022 where payment card details were
      exposed for over two years, and one in 2023 affecting 323,498
      consumers.

      See Tickets was previously owned by Vivendi, which also owns the
      advertising company Havas. It is now owned by
      [CTS Eventim](https://www.eventim.de).

  - type: markdown
    content: |
      ## Why the difference is structural

      The reason Chobble Tickets has zero trackers is not a policy choice
      that could change. It is a structural result of how the business works.

      Ticketing platforms that charge per-ticket fees or offer free tiers
      need other revenue to cover their costs. That revenue comes from
      advertising, audience profiling, and data partnerships. To support
      those revenue streams, they embed trackers on their pages and share
      attendee data with advertising networks.

      Chobble's income comes from the flat annual fee you pay. There is no
      advertising revenue. There is no data economy. As a
      [community interest company](https://www.gov.uk/government/publications/community-interest-companies-introduction),
      Chobble cannot distribute profit to shareholders. There is no
      financial incentive to collect or monetise attendee data, and no
      investor pressure to add trackers in the future.

      The [source code](https://github.com/chobbledotcom/tickets) is public.
      If trackers were ever added, anyone could see them.

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
      ## What Stripe and Square can see

      If you charge for tickets, the payment processor
      ([Stripe](/features/stripe-and-square/) or Square) handles the
      transaction. They see the attendee's payment card details, name, and
      email address as part of processing the payment.

      Stripe and Square are payment processors, not advertising companies.
      They do not market other events to your attendees or share payment
      data with advertising networks.

      If you run free events, no payment processor is involved. Combined
      with not collecting emails, this means the only person who can see
      your attendee records is you.

  - type: markdown
    content: |
      ## Sources

      - [WhoTracks.me - Ticketmaster](https://www.ghostery.com/whotracksme/websites/ticketmaster.com) - 65 trackers (checked April 2026)
      - [WhoTracks.me - Eventbrite](https://www.ghostery.com/whotracksme/websites/eventbrite.com) - 42 trackers (checked April 2026)
      - [WhoTracks.me - See Tickets](https://www.ghostery.com/whotracksme/websites/seetickets.com) - 38 trackers (checked April 2026)
      - [WhoTracks.me - Ticket Tailor](https://www.ghostery.com/whotracksme/websites/tickettailor.com) - 18 trackers (checked April 2026)
      - [Ticketmaster privacy policy](https://privacy.ticketmaster.com/privacy-policy)
      - [Eventbrite privacy policy](https://www.eventbrite.com/help/en-us/articles/460838/eventbrite-privacy-policy/)
      - [Eventim UK (See Tickets) privacy policy](https://www.eventimb2b.co.uk/privacy-policy/)
      - [Chobble Tickets encryption documentation](https://chobbledotcom.github.io/tickets/docs/crypto.ts)

  - type: cta
    title: Zero trackers, encrypted by default
    description: Sign up for managed hosting at £50/year, or self-host and keep everything on your own infrastructure.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
