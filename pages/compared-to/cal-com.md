---
layout: design-system-base.html
title: Chobble Tickets vs Cal.com
meta_title: Open Source Ticketing vs Cal.com Scheduling | Chobble Tickets
meta_description: Cal.com is a scheduling platform that took its production code closed source in April 2026. See how Chobble Tickets compares for paid bookings and event ticketing.
permalink: /compared-to/cal-com/
eleventyNavigation:
  key: vs Cal.com
  parent: Compared To
blocks:
  - type: hero
    class: gradient
    title: Chobble Tickets vs Cal.com
    lead: >-
      Cal.com is a scheduling platform that built its reputation as the
      open source alternative to Calendly. On 14 April 2026, the company
      announced its production codebase is moving closed source. Here is
      how it compares to Chobble Tickets.

  - type: markdown
    content: |
      ## Different tools for different jobs

      [Cal.com](https://cal.com) is a scheduling platform. People use it
      to share a booking link, let others pick a time slot from their
      calendar, and confirm appointments. It supports paid bookings
      through Stripe and PayPal, so it is sometimes used for
      consultations, coaching sessions, classes, and one-to-one events
      that need a fee.

      Chobble Tickets is an event ticketing platform. It is designed for
      events with a fixed date and capacity (workshops, gigs, club nights,
      charity dinners, and kids' parties) where attendees buy a ticket, get
      a QR code, and scan in at the door.

      The two platforms overlap when you need to charge people to book a
      time. If your "event" is a 30-minute slot in your calendar, Cal.com
      fits well. If your event is a workshop with 40 places on a Saturday
      afternoon, a ticketing platform fits better.

      This page is for organisers who have been using Cal.com to take
      payments for events and are now reconsidering after the closed
      source announcement, or who are choosing between a scheduling tool
      and a ticketing tool for the first time.

  - type: markdown
    content: |
      ## The closed source announcement

      On 14 April 2026, Cal.com published a [blog post explaining that
      its production codebase is moving closed
      source](https://cal.com/blog/cal-com-goes-closed-source-why). The
      reason given was security: the company argues that AI tools can
      now scan open source code for vulnerabilities at a scale that was
      not previously possible.

      This is one view. The more common response among open source
      projects to AI-assisted vulnerability scanning has been to invite
      more scrutiny rather than less, by publishing more tests, accepting
      more reports, and fixing issues faster. Closing the code does not make
      vulnerabilities go away; it makes them harder for defenders to
      find and fix.

      A few facts from the announcement:

      - The production application that runs cal.com is no longer
        publicly available
      - A new project called **Cal.diy** has been released under the
        MIT licence as a community version
      - The company states the production code has "significantly
        diverged" from the open source version, with major rewrites of
        authentication and data handling
      - Self-hosting is still possible using the community version, but
        it is not the same code that runs cal.com

      For most users, this is a change in marketing rather than a change
      in day-to-day use. Cal.com worked the same on the day after the
      announcement as it did on the day before. The change matters if
      any of these were reasons you chose Cal.com:

      - You wanted to read the code that handles your customers' data
      - You wanted to self-host the same software the vendor runs
      - You wanted to fork or audit the platform if it ever went away
      - You picked Cal.com over Calendly because it was open source

      Chobble Tickets is licensed under
      [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html). Every
      line of code that runs at tix.chobble.com is in the public
      [GitHub repository](https://github.com/chobbledotcom/tickets).
      You can read it, fork it, and run the same software on your own
      server.

  - type: markdown
    content: |
      ## Pricing comparison

      Cal.com charges per user, per month:

      - **Free** - $0/month, one user. Includes paid bookings through
        Stripe and PayPal, unlimited event types, calendar integrations,
        and the mobile app.
      - **Teams** - $12 per user per month (about £115/user/year at
        annual billing rates). Adds team scheduling, round-robin, custom
        APIs, branded booking pages, and routing forms.
      - **Organizations** - $28 per user per month (about £270/user/year
        at annual billing). Adds SSO, sub-teams, SCIM provisioning, and
        compliance certifications (SOC 2, HIPAA, ISO 27001).
      - **Enterprise** - custom pricing, contact sales.

      There are no per-booking platform fees. Stripe payment processing
      is charged separately at the standard rate (1.5% + 20p in the UK).

      Chobble Tickets is a flat **£50 per year** for the whole site, with
      [no per-ticket fees](/features/no-per-ticket-fees/) and no per-user
      charge. Community groups, charities, and schools pay £25/year.
      Stripe processing is charged separately at the standard 1.5% + 20p.
      Self-hosting is free.

      ### Which one is cheaper depends on what you're doing

      For a single freelancer running a Free Cal.com account, taking
      payment for one-to-one sessions, Cal.com costs nothing in platform
      fees. Stripe takes its 1.5% + 20p. Chobble Tickets would cost £50
      a year in addition to the same Stripe fees.

      For a team of five people running paid sessions on Cal.com Teams
      ($12/user/month), the platform cost is around $720/year (about
      £575/year). Chobble Tickets stays at £50/year regardless of team
      size.

      For a community group running events with a fixed date and
      capacity, Cal.com is not designed for the job. You would end up
      creating one event type per event date, which gets messy quickly.

  - type: markdown
    content: |
      ## Cal.ai is a separate paid add-on

      Cal.com sells an AI phone agent called **Cal.ai**. It calls
      attendees on the phone, books meetings, and handles reminders
      using a synthetic voice.

      Cal.ai is charged per minute on top of any subscription:

      - **$0.29 per minute** of call time (29 credits per minute)
      - Free plan: no included credits, all minutes purchased separately
      - Teams plan: 750 credits (about 25 minutes) per member, per month
      - Organizations plan: 1,000 credits (about 34 minutes) per member,
        per month

      Cal.ai is sold as an add-on to all plans rather than included in
      any of them. Free plan users who want to use it must buy credits
      separately.

      Chobble Tickets does not have an AI phone agent and does not
      charge AI usage fees. Confirmation emails are sent through your
      chosen email provider with [customisable
      templates](/features/email-templates/).

  - type: markdown
    content: |
      ## Feature comparison

      Cal.com is a scheduling platform with payment support. Chobble
      Tickets is a ticketing platform. They share some basics but the
      core jobs are different, so a feature-by-feature comparison only
      goes so far. Here is the breakdown:

      **Both platforms share some features:**

      - Online payment collection through Stripe
      - Email confirmations after booking
      - Embeddable on your own website
      - Custom questions on the booking form
      - Calendar feed exports (ICS)
      - Mobile-friendly booking pages
      - Webhooks for integrations
      - REST API for automation
      - Free tier or self-hosting option

      **Cal.com has features Chobble Tickets does not:**

      - **Calendar availability sync** - Cal.com reads your Google,
        Outlook, iCloud, or other calendar to show only the times you
        are free. This is the core feature of a scheduling tool.
      - **Round-robin routing** - distribute incoming bookings across a
        team based on availability or load (Teams plan and above)
      - **Routing forms** - branching questions that route the booker to
        a specific person, team, or event type based on their answers
      - **Time zone detection** - automatic time zone handling for
        international one-to-one calls
      - **Buffer time and minimum notice** - block out time before and
        after each meeting, set how far in advance bookings can be made
      - **Conflict detection across calendars** - prevent double-booking
        across multiple calendars
      - **Video conferencing integrations** - automatic Zoom, Google
        Meet, Microsoft Teams, Daily, and Jitsi links generated for each
        booking
      - **CRM integrations** - native Salesforce and HubSpot sync, plus
        100+ other integrations
      - **AI phone agent (Cal.ai)** - charged per minute, see above
      - **Native mobile app** - iOS and Android apps for managing
        bookings on the go
      - **Calendly import** - migrate event types from Calendly
      - **Round-robin reassignment** - reassign bookings between team
        members
      - **Workflows** - automated email and SMS reminders triggered by
        booking events
      - **SCIM provisioning and SAML SSO** - enterprise identity
        management (Organizations plan)
      - **HIPAA, SOC 2, ISO 27001 compliance certifications**
        (Organizations plan)

      **Chobble Tickets has features Cal.com does not:**

      - **[Capacity management for fixed-date events](/features/overbooking-prevention/)** -
        sell a fixed number of tickets for an event with automatic
        sold-out handling and 5-minute payment holds to prevent
        double-booking
      - **[QR code tickets and check-in](/features/qr-code-check-ins/)** -
        every attendee gets a unique scannable QR code, with a
        check-in interface for the door
      - **[Apple and Google Wallet tickets](/features/apple-wallet/)** -
        attendees can add tickets to the Wallet app on their phone
      - **[Password-derived encryption](/features/encrypted/)** -
        attendee data is encrypted with a key derived from your admin
        password using hybrid RSA-OAEP and AES-256-GCM. A database
        dump and the server's encryption key together are still not
        enough to decrypt attendee data - an attacker would also need
        your password. If you forget your password, the data is
        permanently unrecoverable.
      - **[Open source production code](/features/open-source/)** - the
        same code that runs tix.chobble.com is public under AGPLv3
      - **Flat annual pricing** - £50/year regardless of how many
        tickets you sell or how many staff you have
      - **[Tiered ticket types via groups](/features/groups/)** - VIP,
        early bird, general admission, and other tiers sharing one
        venue capacity cap
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** -
        let attendees pick their own price within a range
      - **[Daily and recurring events](/features/daily-events/)** -
        per-date capacity with a calendar picker and holiday blackouts
      - **[Refund processing](/features/refunds/)** - issue individual
        or bulk refunds from the admin panel
      - **[Custom email providers](/features/email-providers/)** - send
        confirmations through Resend, Postmark, SendGrid, or Mailgun so
        emails come from your own domain
      - **[Liquid email templates with full HTML control](/features/email-templates/)** -
        edit the subject, HTML body, and text body of confirmation
        emails. Combined with a custom email provider, the email is
        fully white-label - it does not mention Chobble at all.
      - **[Full custom domain](/features/custom-domain/)** - run the
        ticketing site on your own domain (Cal.com offers
        yourcompany.cal.com subdomains on the Organizations plan but
        does not support a custom apex or subdomain on your own
        domain)
      - **[Activity logs](/features/activity-logs/)** - full audit
        trail of all admin actions
      - **[CSV export](/features/csv-export/)** of attendee lists with
        filtering
      - **[No per-user pricing](/features/users/)** - add as many
        manager accounts (for door staff, volunteers, or co-organisers)
        as you need without changing the bill

  - type: markdown
    content: |
      ## Data ownership

      Cal.com stores booking data, calendar data, and any custom
      questions you collect on its servers. With the production
      codebase now closed, you can no longer read the code that handles
      that data. The Cal.diy community version exists, but the company
      has stated the two codebases have diverged.

      Cal.com's privacy policy and terms govern what the company does
      with the data. Like most hosted SaaS platforms, Cal.com staff can
      access booking data on the server.

      Chobble Tickets encrypts attendee data with a key derived from
      your admin password. The data is decrypted only when you log in
      and view it. A database dump on its own is not enough to read
      attendee data, and a database dump combined with the server's
      environment encryption key is still not enough, since an attacker
      would also need your password. Chobble staff cannot read your
      attendee data, even on managed hosting. The full code is public,
      so you can verify how the encryption works.

      The trade-off is that there is no password reset and no
      backdoor. If you lose your password, the attendee data tied to
      that account becomes permanently unreadable.

      Chobble Tickets can also be self-hosted under AGPLv3. The same
      software that runs tix.chobble.com runs on a self-hosted server.
      There is no separate "community version" with rewritten core
      systems.

  - type: markdown
    content: |
      ## When Cal.com is the better choice

      - You need a scheduling tool that reads your calendar and offers
        free time slots to bookers
      - Your "event" is a one-to-one meeting, consultation, or
        appointment, not a fixed-date event with capacity
      - You need round-robin distribution across a team
      - You need automatic Zoom, Google Meet, or Teams links per
        booking
      - You need native CRM integrations with Salesforce or HubSpot
      - You need an AI phone agent and are happy to pay per minute
      - You need enterprise features like SCIM, SAML SSO, or HIPAA
        compliance and have the budget for the Organizations plan

  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You are selling tickets to events with a fixed date and
        capacity
      - You need QR code check-in at the door
      - You want flat annual pricing that does not scale with team size
        or ticket volume
      - You want the production code itself to be open source, not a
        separate diverged community version
      - Privacy and encryption matter to you and you want to be able to
        verify how data is handled
      - You want [Apple and Google Wallet tickets](/features/apple-wallet/)
      - You are a community group, charity, or school (£25/year)
      - You want to send emails from your own domain with
        [your own email provider](/features/email-providers/)
      - You want to add door staff, volunteers, or co-organisers as
        manager accounts without paying per-user fees

  - type: markdown
    content: |
      ## About Cal.com

      Cal.com is a US-based company that built its product as the open
      source alternative to Calendly. Until 14 April 2026, the
      production codebase was open source under the AGPLv3 licence,
      with a small enterprise component under a commercial licence.
      The [closed source announcement](https://cal.com/blog/cal-com-goes-closed-source-why)
      changes that going forward.

      Cal.com has raised $32.4 million in venture capital across two
      rounds: a $7.4 million seed and a $25 million Series A in April
      2022, led by Seven Seven Six. Investors who provide that capital
      expect a financial return on it.

      Chobble Tickets is run by one person as a UK
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC) - a legal structure that locks the company's assets for
      community benefit. There is no per-user pricing and no AI add-on.
      Income comes from the £50 annual fee paid by managed-hosting
      customers.

  - type: markdown
    content: |
      ## Why this cannot happen to Chobble Tickets

      Cal.com closed its production codebase after eight years of
      operating as an open source company. Three structural decisions
      make the same change impossible for Chobble Tickets, regardless
      of who is running it.

      **Community Interest Company asset lock.** Chobble is a UK
      Community Interest Company. The software is owned by the company,
      not by any individual. A CIC has an "asset lock", meaning the
      company's assets, including the source code, cannot be transferred to
      a private owner. They can only be transferred to another
      asset-locked body, such as another CIC or a registered charity.

      **AGPLv3 with no premium tiers.** Every line of code that runs
      at tix.chobble.com is licensed under AGPLv3. There is no "open
      core" model where features are held back behind a commercial
      licence. Anyone can fork the code, modify it, and run it
      themselves, provided they release their changes under the same
      licence.

      **Reinvested profits.** A CIC must reinvest its profits in its
      stated mission (building software for small organisations and
      independent groups) after paying its workers a reasonable wage.
      There are no shareholders to pay dividends to, because the
      structure does not allow them.

      The combined effect is that there is no version of "Chobble
      Tickets goes closed source" that produces a buyout or a payout
      for anyone. The exit does not exist.

  - type: markdown
    content: |
      ## Sources

      The information on this page was verified in April 2026. Pricing
      and licensing may change. Check the links below for the latest
      figures.

      - [Cal.com closed source announcement](https://cal.com/blog/cal-com-goes-closed-source-why) - the original blog post, dated 14 April 2026
      - [Cal.com pricing](https://cal.com/pricing) - Free, Teams ($12/user/month), Organizations ($28/user/month), Enterprise
      - [Cal.ai](https://cal.com/ai) and [Cal.ai credit pricing](https://cal.com/help/billing-and-usage/messaging-credits) - $0.29 per minute (29 credits), 750 credits per Teams seat, 1000 credits per Organizations seat, no included credits on Free
      - Cal.diy - the new MIT-licensed community version, announced alongside the closed source change
      - [Cal.com Series A funding announcement (April 2022)](https://venturebeat.com/business/open-source-calendly-rival-cal-com-raises-25m) - $25 million Series A led by Seven Seven Six, on top of a previous $7.4 million seed
      - [Chobble Tickets features](/features/)
      - [Chobble Tickets source code on GitHub](https://github.com/chobbledotcom/tickets)

  - type: cta
    title: Try Chobble Tickets
    description: Open source event ticketing with flat annual pricing and no per-user fees.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
