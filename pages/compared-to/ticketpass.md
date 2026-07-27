---
competitor_key: ticketpass_essentials
title: Ticketpass Alternative
meta_title: Open Source & Flat Fee Ticketpass Alternative | Chobble Tickets
meta_description: "Chobble Tickets vs Ticketpass: compare the booking fee, the separate service fee, the Give Back 50 donation, features and attendee data handling."
permalink: /compared-to/ticketpass/
eleventyNavigation:
  key: vs Ticketpass
  parent: Compared To
provider_facts:
  name: Ticketpass
  kind: ticketing
  calculator_keys:
    - ticketpass_essentials
    - ticketpass_pro
  last_reviewed: "2026-07-27"
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: percentage-plus-fixed
  managed_pricing: per-sale
  white_label: higher-tier
  custom_domain: not-documented
  public_website: marketplace-pages
  self_hosting: not-offered
  source_code: proprietary
  event_marketplace: built-in
  attendee_cross_marketing: provider-content-and-events
  notes:
    ethical_basis: "Ticketpass describes itself as an ethical ticketing platform and pledges up to 50% of its booking fee to charity. The privacy policy names Fanex Group Ltd as the operator. No charitable, co-operative or certified structure was documented in the sources reviewed."
    per_ticket_platform_fee: "Paid tickets carry a booking fee and a separate service fee at the same published rate, both excluding VAT. Card processing is covered inside the booking fee."
    managed_pricing: "There is no subscription. Free events have no fee, and paid events are charged per ticket on the Essentials, Pro or Enterprise plan."
    white_label: "Custom branding and custom tickets are listed on the Enterprise plan only."
    custom_domain: "The features table lists an ethicalticketing.org domain on the Enterprise plan. An organiser-owned domain was not documented."
    public_website: "Organisers get an event page and an organiser profile page inside the Ticketpass marketplace."
    attendee_cross_marketing: "The privacy policy says Ticketpass may send marketing about Ticketpass and specially selected parties, in line with the attendee's marketing preferences."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Ticketpass

      Ticketpass is a UK ticketing platform that donates up to half of its booking fee to charity projects. This page compares it to Chobble Tickets on pricing, features and data handling.
  - type: markdown
    content: |
      ## Open source & flat fee Ticketpass alternative

      Ticketpass charges for each paid ticket sold and gives part of that
      charge to a charity the organiser or the attendee chooses. Free events
      cost nothing to list.

      Chobble Tickets charges £50/year or £5/month for managed hosting and adds
      [no per-ticket platform fee](/features/no-per-ticket-fees/). Its source
      code is published under the AGPL-3.0-only licence, so anyone can read it,
      fork it, or run their own copy. Ticketpass does not publish its source
      code.
  - type: markdown
    content: |
      ## Pricing comparison

      Paid tickets on [Ticketpass](https://ticketpass.org/pricing) carry two
      separate charges at the same published rate: a booking fee and a service
      fee. Both exclude VAT. The Essentials plan lists a booking fee of 1.9% +
      £0.20 and a service fee of 1.9% + £0.20, so the combined charge is 3.8% +
      £0.40 per paid ticket. The Pro plan lists 3.5% + £0.35 twice, a combined
      7% + £0.70. Enterprise pricing is quoted on request.

      Ticketpass says card processing is covered inside the booking fee, so
      there is no separate payment-provider charge. The organiser can absorb
      the fees or add them to the ticket price so the buyer pays them.

      Chobble Tickets charges a flat £50/year or £5/month, or £25/year for
      charities, community groups, artists and musicians. Ticket income goes
      straight to the organiser's own Stripe, Square or SumUp account, and that
      provider charges its normal processing rate, typically 1.5% + 20p on a UK
      card.

      On a £15 ticket, the Essentials charge is about £0.97 and the Pro charge
      is about £1.75. Across 500 tickets that is about £485 on Essentials or
      about £875 on Pro. An organiser who absorbs the charges pays that
      amount, and an organiser who passes them on adds it to what attendees
      pay. The same 500 tickets on Chobble Tickets cost £50 in hosting, or £25
      at the community rate, plus processing paid to the organiser's own
      payment provider.
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Where the donation comes from

      Ticketpass calls its donation pledge Give Back 50. It donates up to 50%
      of its booking fee, and the organiser or the attendee picks the charity
      project. The service fee is not part of the pledge. Ticketpass says the
      donation is sent after the event has finished and refunds have settled,
      in the next quarterly payment cycle.

      The [Ticketpass terms and conditions](https://ticketpass.org/terms-and-conditions)
      state that the pledge "is not a binding contractual obligation but a
      commitment in line with Ticketpass's ethos of social responsibility".
      They also reserve the right to withhold, suspend or cancel a donation in
      defined circumstances, such as a project no longer operating.

      The money donated is part of the fee charged on the ticket. On an
      Essentials £15 ticket the booking fee is about £0.49, so the donation is
      up to about £0.24. The rest of the £0.97 charge is outside the pledge and
      covers card processing and whatever else Ticketpass spends it on. Across
      500 tickets that is up to about £121 donated out of about £485 charged.

      Chobble Tickets does not add a charge to tickets, so no part of a ticket
      price is directed to a charity by Chobble. Chobble CIC donates 10% of its
      own income to the Against Malaria Foundation, funded from the hosting fee
      organisers pay. The [guide to donation and profit
      pledges](/guide/choosing-a-ticket-platform/where-ticketing-money-goes/)
      explains how to read pledges of this kind on any platform.
  - type: markdown
    content: |
      ## Feature comparison
  - type: markdown
    content: |
      ### Both platforms share some features

      - Online ticket sales with card payment processing
      - Unlimited events, free or paid, in one account
      - Multiple ticket types per event
      - Recurring events
      - QR code scanning for check-in at the door
      - Email confirmations to attendees after booking
      - Apple Wallet and Google Wallet passes
      - Printable tickets as well as phone tickets
      - Event capacity limits
      - Free event support with no payment setup required
      - Age restrictions on tickets
      - Unlisted, private events
      - Attendee lists and the ability to contact attendees
      - Discount codes
      - Donations collected alongside tickets
      - Door sales
      - Refunds from the admin panel
      - Team members with permissions
      - Custom checkout questions (Ticketpass Pro plan and above; included on
        Chobble Tickets)
  - type: markdown
    content: |
      ### [Ticketpass](https://ticketpass.org/features) has features Chobble Tickets doesn't

      - **Charity donation from the booking fee** - up to half the booking fee
        goes to a project the organiser or attendee selects, which Chobble
        cannot match because it takes no fee from tickets
      - **Consumer marketplace** - events are listed on ticketpass.org for
        buyers to browse, which can bring sales from people who were not
        looking for that organiser. Chobble does not run a marketplace
      - **Native iOS and Android scanning apps** - Chobble has a web-based
        scanner that runs in a phone browser but no native app
      - **Reserved seating** - seat maps and seat selection at checkout
        (Ticketpass Pro plan and above). Chobble supports general admission only
      - **Face-value resale marketplace** - attendees who cannot attend can
        resell a ticket through Ticketpass at face value
      - **Waiting lists for sold-out events** (Ticketpass Pro plan and above)
      - **Memberships and season passes** with paid subscriptions (Ticketpass
        Pro plan and above)
      - **Invite previous attendees** to a new event from inside the platform
        (Ticketpass Pro plan and above)
      - **Managing multiple organiser accounts from one place** (Ticketpass Pro
        plan and above)
      - **135 currencies** at checkout. Chobble uses one currency per instance
      - **Live streaming and video on demand** (Ticketpass Enterprise plan)
      - **Box office hardware and ticket printers**, with onsite support,
        staff training and a dedicated account manager (Ticketpass Enterprise
        plan)
      - **Payouts before the event** (Ticketpass Enterprise plan)
      - **Email marketing integrations** (Ticketpass Enterprise plan)
  - type: markdown
    content: |
      ### Chobble Tickets has features Ticketpass doesn't

      - **[Encryption at rest](/features/encrypted/)** - attendee personal data
        is stored scrambled, so someone reading the database directly cannot
        read names or contact details. Only a user the organiser has
        authorised can unlock it. Ticketpass does not document how it stores
        attendee data at rest
      - **[Open source](/features/open-source/)** - the complete product source
        is published under AGPL-3.0-only with no proprietary feature tier.
        Ticketpass is closed source
      - **Self-hosting option** - run the platform on selected infrastructure
        without a Chobble software licence fee. Ticketpass is hosted-only
      - **Flat pricing** - £50/year or £5/month covers every current Chobble
        feature, whatever the ticket price or sales volume
      - **Payments straight to the organiser's own account** - Stripe, Square
        or SumUp, with no waiting for a platform payout
      - **[Custom domain](/features/custom-domain/)** - point your own domain
        at your ticket site with TLS handled for you. Ticketpass lists an
        ethicalticketing.org domain on its Enterprise plan
      - **[Public-facing website and CMS](/features/your-public-website/)** - a
        homepage, content pages, news posts and a contact form with spam
        protection, edited in Markdown with
        [custom CSS](/features/customising-your-site/). Ticketpass provides
        event pages and an organiser profile inside its marketplace
      - **[Admin API](/features/admin-api/) and [public
        API](/features/public-api/)** on every plan
      - **[Webhooks](/features/webhooks/)** - outbound POST on every
        registration
      - **[Subscribable ICS calendar feeds and RSS
        feeds](/features/rss-and-calendar-feeds/)**
      - **[Custom email providers](/features/email-providers/)** - Resend,
        Postmark, SendGrid or Mailgun, so confirmations come from your own
        domain
      - **[Liquid email templates](/features/email-templates/)** - control the
        subject, HTML and text of confirmation emails
      - **[Pay-what-you-want pricing](/features/stripe-and-square/)** - buyers
        enter their own price above a minimum
      - **[Parent/child listings](/features/parent-child-listings/)** and
        **[listing groups](/features/groups/)** with shared capacity caps
      - **[Daily listings](/features/daily-events/)** with holiday blackouts
        and a calendar picker
      - **Buying without an account** - Ticketpass requires ticket buyers to
        sign up before they can complete a booking
      - **Community Interest Company** - Chobble CIC is a UK legal structure
        that locks the company's assets for community benefit
  - type: markdown
    content: |
      ## Data ownership

      Ticketpass stores attendee data on its servers, where Ticketpass staff
      can read it. Buyers must create a Ticketpass account before completing a
      booking, so the platform holds a relationship with every attendee. The
      [Ticketpass privacy policy](https://ticketpass.org/privacy-policy) says
      it may contact users with marketing about Ticketpass and specially
      selected parties, in line with the marketing preferences the user has
      set. It names Stripe as the payment processor and Fanex Group Ltd as the
      operating company.

      With Chobble Tickets, [attendee data is encrypted at
      rest](/features/encrypted/) with the site's public key and can be
      decrypted only by an authorised keyed user. The product is published
      under AGPL-3.0-only, so it can run on infrastructure the organiser
      selects. Chobble does not run a marketplace and does not send marketing
      to attendees.
  - type: markdown
    content: |
      ## When Ticketpass might be the better choice

      - You want a share of the ticket charge to go to a charity project you
        or your attendees pick
      - You want your events listed on a consumer marketplace
      - You need reserved seating with a seat picker
      - You need native iOS and Android scanning apps
      - You want waiting lists, memberships or season passes
      - You want a face-value resale route for attendees who cannot come
      - You sell in currencies other than pounds
      - You need live streaming, box office hardware or onsite event support
      - You sell few tickets a year and prefer paying per ticket to paying an
        annual fee
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You want a platform price that stays the same as ticket prices and
        sales volume grow, with payment processing the only cost that scales
      - You want [attendee data encrypted at rest](/features/encrypted/)
      - You want ticket income paid straight into your own Stripe, Square or
        SumUp account
      - You want your [own domain](/features/custom-domain/) and a
        [full public website](/features/your-public-website/) rather than a
        marketplace profile
      - You are a charity, community group, artist or musician (£25/year)
      - You value [open source](/features/open-source/) code and the ability to
        self-host without a Chobble software licence fee
      - You do not want your attendees asked to create an account with a
        ticketing platform
      - You want [API access](/features/admin-api/) and white-label email
        without moving to a higher tier
  - type: markdown
    content: |
      ## Who runs Ticketpass?

      The Ticketpass privacy policy names Fanex Group Ltd as the company
      behind the service, a private limited company registered in England
      (company number
      [16765338](https://find-and-update.company-information.service.gov.uk/company/16765338)).
      Ticketpass says it was founded in 2017 and describes itself as an
      ethical ticketing platform. Its terms record a transitional
      notice: on 9 October 2025 Fanex Group Ltd acquired the assets and
      business operations of Ticketpass Limited and became the operator of the
      platform.

      Fanex Group Ltd has two people with significant control on the
      [public register](https://find-and-update.company-information.service.gov.uk/company/16765338/persons-with-significant-control),
      both notified on 6 October 2025. One is recorded as having significant
      influence or control. The other is recorded as holding 75% or more of
      the shares and voting rights, with the right to appoint and remove
      directors.

      That majority shareholder is the executive chairman of the investment
      firm [Liberté Capital](https://liberte-capital.com/teams/philippe-paillart/).
      The firm's published profile describes a career in international banking and
      finance, including chief executive and vice chairman of DBS Bank in
      Singapore, chairman and chief executive of Ford Credit and Ford
      Financial Services, and board positions at Citibank Germany and Standard
      Chartered Bank.

      An ordinary limited company can be sold, as the 2025 transfer of the
      Ticketpass business shows, and its owners can change its pricing and its
      donation policy. Ticketpass's own terms describe the pledge as a
      commitment rather than a binding obligation. The sources reviewed on
      27 July 2026 did not document a charitable, co-operative or certified
      structure.

      Chobble Tickets is run by one person as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction)
      (CIC), a UK legal structure that locks the company's assets for
      community benefit. The registered name is Chobble CIC, company number
      17050113, registered in Prestwich, Manchester.

      Chobble CIC is limited by guarantee and has no share capital, so there
      are no shares to buy and no dividends to pay, and control cannot be
      acquired by purchasing a stake. Under section 53 of the
      Companies (Audit, Investigations and Community Enterprise) Act 2004, a
      CIC can stop being a CIC only by dissolving or by becoming a charity, so
      it cannot convert into an ordinary company. Assets cannot be transferred
      out for less than their market value except to another asset-locked
      body, and the CIC Regulator in the UK reviews the company's annual
      community interest report. All of Chobble's code is public under AGPLv3,
      and the platform can be self-hosted by anyone without depending on
      Chobble as a company.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing and feature information on this page was verified on
      27 July 2026. Fees and feature allocations may change. Check the links
      below for the latest figures.

      - [Ticketpass pricing](https://ticketpass.org/pricing) - free events free, Essentials booking fee 1.9% + £0.20 with a service fee of 1.9% + £0.20, Pro 3.5% + £0.35 with a service fee of 3.5% + £0.35, Enterprise custom
      - [Ticketpass features](https://ticketpass.org/features) - plan-by-plan feature table. Some rows of that table list Essentials at 2.5% + £0.25 rather than the 1.9% + £0.20 on the pricing page, so confirm the rate before signing up
      - [Ticketpass Give Back 50](https://ticketpass.org/give-back-50) - up to 50% of the booking fee donated to a chosen project
      - [Ticketpass FAQs](https://ticketpass.org/pricing) - card processing included in the booking fee, fees absorbed or passed on, donation paid after the event in the next quarterly cycle
      - [Ticketpass privacy policy](https://ticketpass.org/privacy-policy) - operator, payment processor and marketing preferences
      - [Ticketpass terms and conditions](https://ticketpass.org/terms-and-conditions) - the 9 October 2025 transitional notice, and the pledge described as a commitment rather than a binding contractual obligation
      - [Liberté Capital](https://liberte-capital.com/teams/philippe-paillart/) - the firm's published profile of its executive chairman describes the banking and finance career summarised above
      - [Fanex Group Ltd people with significant control](https://find-and-update.company-information.service.gov.uk/company/16765338/persons-with-significant-control) - the ownership and voting-rights entries on the public register
      - [CIC business activities guidance](https://www.gov.uk/government/publications/community-interest-companies-business-activities/cic-business-activities-forms-and-step-by-step-guidelines) - a CIC can only stop being a CIC by dissolving or becoming a charity
      - [Chobble Tickets features](/features/)
      - [Chobble Tickets pricing and no-per-ticket-fees explanation](/features/no-per-ticket-fees/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Sign up for managed hosting at £50/year or £5/month, or self-host without paying Chobble a licence fee.
name: Open Source & Flat Fee Ticketpass Alternative | Chobble Tickets
---
