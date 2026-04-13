---
layout: design-system-base.html
title: Frequently Asked Questions - Chobble Tickets
meta_title: FAQ - Chobble Tickets Pricing, Fees, and Features
meta_description: Answers to common questions about Chobble Tickets, including pricing, per-ticket fees, data privacy, encryption, open source, self-hosting, and how it compares to other platforms.
permalink: /faq/
eleventyNavigation:
  key: FAQ
  order: 5
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: Frequently asked questions
    lead: >-
      Common questions about pricing, data privacy, open source, self-hosting,
      and how Chobble Tickets compares to other ticketing platforms.

  - type: markdown
    content: |
      ## Pricing and fees

      ### Which ticketing platforms don't charge per-ticket fees?

      Most ticketing platforms charge a percentage or fixed fee on every ticket
      sold. The more tickets you sell, the more you pay.

      Chobble Tickets charges a flat annual fee of £50 with no per-ticket
      charges. Money from ticket sales goes directly to your
      [Stripe or Square account](/features/stripe-and-square/). The only
      per-transaction cost is the payment processor's own fee (for example,
      Stripe charges 1.5% + 20p in the UK).

      ### How much does Eventbrite charge per ticket?

      Eventbrite charges organisers a percentage-based fee on each paid ticket,
      plus a fixed fee per ticket. In the UK this is typically 6.95% + £0.59
      per ticket. For a £15 ticket, that means £1 to £2 goes to Eventbrite on
      each sale. You can see a detailed breakdown on our
      [Eventbrite comparison page](/compared-to/eventbrite/).

      Chobble Tickets charges no per-ticket fees. You pay £50 per year
      regardless of how many tickets you sell.

      ### Is there a flat-rate alternative to Eventbrite?

      Chobble Tickets is a flat-rate alternative to Eventbrite. You pay £50 per
      year for managed hosting with no per-ticket fees, no commission, and no
      percentage cuts. Every feature is included at every price point.

      The software is [open source](/features/open-source/), so you can also
      [self-host](/hosting/) it for free.

      ### What is the cheapest ticketing platform for small events?

      For small events, per-ticket fees from other platforms can take a large
      share of your revenue. A 6-7% fee on a £5 ticket leaves noticeably less
      for the organiser.

      Chobble Tickets costs £50 per year with no per-ticket fees, which makes
      it cost-effective for events of any size. Charities, community groups,
      artists, and musicians get a 50% discount, bringing the cost to £25 per
      year. You can [compare fees across 17 platforms](/compared-to/compare-all/)
      using the interactive calculator.

      ### Can I sell tickets without paying commission?

      With Chobble Tickets, you pay no commission on ticket sales. You connect
      your own [Stripe or Square account](/features/stripe-and-square/) and
      money from sales goes directly to you. The only cost is the flat annual
      hosting fee of £50.

      Chobble is a [community interest company](/features/open-source/). Its
      income comes from the annual fee, not from taking a cut of your sales.

      ### What is the actual cost per ticket with Chobble Tickets?

      Chobble Tickets charges no per-ticket fee. The only per-transaction cost
      is the payment processor's fee. Stripe charges 1.5% + 20p per
      transaction in the UK. Square's fees are similar. On a £15 ticket, that
      is about 43p to Stripe. On platforms like Eventbrite, the same ticket
      would cost £1 to £2 in platform fees on top of payment processing.

      ### Is there a discount for charities or community groups?

      Charities, community groups, artists, and musicians get a 50% discount
      on managed hosting, bringing the annual cost to £25. There are still no
      per-ticket fees. You can also self-host for free, since the entire
      codebase is open source under AGPLv3.

  - type: markdown
    section_class: alt
    content: |
      ## Data privacy and security

      ### Is my attendee data safe?

      Chobble Tickets [encrypts](/features/encrypted/) all personally
      identifiable information at rest using hybrid RSA-OAEP + AES-256-GCM
      encryption. Names, emails, phone numbers, and addresses are encrypted
      before they are written to the database. Even if someone gained access to
      the database, they could not read the data without the encryption keys.

      Payment identifiers and API credentials are also encrypted with
      AES-256-GCM. Passwords are hashed with PBKDF2 using 600,000 iterations.
      The platform also includes CSRF protection, rate limiting on login
      attempts, and session tokens with 24-hour expiry.

      ### Can Chobble read my attendees' personal information?

      On managed hosting, attendee data is decrypted on the server when you
      view it, but Chobble does not access, share, or use that data for any
      other purpose. If you self-host, the encryption keys never leave your
      infrastructure and Chobble has no access at all.

      ### Does Chobble market to my attendees?

      No. Chobble does not collect attendee data, build audience profiles, or
      send marketing emails to your attendees. Attendees do not need a Chobble
      account, are not prompted to download an app, and are not added to any
      mailing list. Read more about this on the
      [no spying](/features/no-spying/) page.

      Many ticketing platforms encourage attendees to follow other events on the
      platform, and attendees receive emails about other organisers' events.
      Chobble does not do this. You are getting ticketing software, not a
      marketplace.

      ### Who owns the attendee data?

      You do. You are the data controller. Chobble does not claim any rights to
      your attendee data. It is not used for analytics, advertising, or product
      development, and it is not shared with third parties. You can
      [export your attendee lists as CSV](/features/csv-export/) at any time.
      If you leave Chobble, you take your data with you.

      ### What happens if I lose my admin password?

      Your attendee data becomes permanently inaccessible. There is no password
      reset, no backdoor, and no master key. This is a deliberate design
      decision. It means that nobody, including Chobble, can access your data
      without your password. Keep a secure backup of your credentials.

  - type: markdown
    content: |
      ## Open source and self-hosting

      ### What does open source mean for a ticketing platform?

      It means the entire codebase is publicly available on
      [GitHub](https://github.com/chobbledotcom/tickets) under the AGPLv3
      licence. You can read every line of code, verify the security claims,
      fork the repository, and modify the software to suit your needs.

      Unlike some platforms that call themselves open source but keep key
      features proprietary, Chobble Tickets includes every feature in the open
      source version. The managed hosting and the self-hosted version are
      exactly the same code.

      ### Can I self-host Chobble Tickets?

      Yes, and it is free. You can deploy with one-click buttons for
      DigitalOcean, Heroku, Koyeb, and Render, or use Docker, Fly.io, or
      Bunny Edge Scripting. The recommended approach is to fork the
      [GitHub repository](https://github.com/chobbledotcom/tickets/fork) and
      deploy via GitHub Actions to Bunny.net. Read more on the
      [hosting page](/hosting/).

      The software compiles to a single JavaScript file and runs on edge
      infrastructure, so there is no traditional server to manage, no scaling
      to configure, and no database replication to set up.

      ### Is self-hosting difficult?

      It depends on the deployment method. The simplest option is a one-click
      deploy button for platforms like DigitalOcean or Heroku. The recommended
      option is forking the GitHub repository and deploying to Bunny.net via
      GitHub Actions, which requires setting up a Bunny account and adding a
      few environment variables (database URL, token, and encryption key).
      There is no server to manage. The software runs on Bunny edge scripts
      with a Bunny edge database.

      ### What happens to my ticketing if Chobble shuts down?

      Because the software is open source under AGPLv3, the code remains
      available on GitHub regardless of what happens to Chobble as a company.
      If you self-host, nothing changes. If you use managed hosting, you can
      switch to self-hosting at any time by forking the repository and
      deploying it yourself. There is no proprietary lock-in.

      ### What is a community interest company?

      A community interest company (CIC) is a type of UK company designed for
      social enterprises. Profits cannot be distributed to shareholders. There
      is no venture capital investment and no requirement to grow at the expense
      of users. Chobble's income comes from the flat annual fees that
      organisers pay, not from advertising, data sales, or per-ticket
      commissions. This structure means there is no financial incentive to
      collect or monetise attendee data.

  - type: markdown
    section_class: alt
    content: |
      ## Features and customisation

      ### Can I use my own domain name?

      Yes. On managed hosting, you get an instant subdomain
      (yourname.tix.chobble.net) from day one, and you can add your own
      [custom domain](/features/custom-domain/) at any time. Up to three URLs
      can be active at the same time. If you self-host, you control the domain
      entirely.

      ### Can I send emails from my own domain?

      Yes. Chobble Tickets supports four
      [email providers](/features/email-providers/): Resend, Postmark,
      SendGrid, and Mailgun. You configure your own account with one of these
      providers, and confirmation emails are sent from your domain with your
      branding. [Email templates](/features/email-templates/) are customisable
      using Liquid syntax, with built-in filters for formatting currencies and
      pluralisation.

      ### How customisable is Chobble Tickets?

      You can [customise](/features/customising-your-site/) the header image,
      website title, and theme colours from the admin dashboard. Email
      templates use Liquid syntax so you can change the subject line, HTML
      body, and plain text body of confirmation emails. Event descriptions
      support [Markdown](/features/markdown-descriptions/) formatting. You can
      set custom thank-you URLs, configure
      [terms and conditions](/features/terms-and-conditions/), and add
      [custom multiple-choice questions](/features/custom-questions/) to the
      checkout form. If you self-host, you can modify the source code.

      ### Does Chobble Tickets support recurring or daily events?

      Yes. [Daily events](/features/daily-events/) have per-date capacity with
      a calendar date picker, so attendees choose which date they want to
      attend. You can set holiday and blackout dates to block bookings on
      specific days. This is designed for weekly classes, workshops, and
      attractions that run on a regular schedule.

      ### Can I sell different ticket tiers like VIP and general admission?

      Yes, using [event groups](/features/groups/). You create separate events
      for each tier and group them together. Groups can share capacity, so
      selling a VIP ticket reduces the number of general admission tickets
      available. Attendees see all the options in a single checkout. This also
      works for early bird and standard pricing, or adult and child tickets.

      ### How do QR code check-ins work?

      Every ticket gets a unique URL with a [QR code](/features/qr-code-check-ins/).
      Attendees receive the QR code in their confirmation email and can add it
      to [Apple Wallet or Google Wallet](/features/apple-wallet/). At the
      event, staff scan the QR code using any phone camera, with no app
      required. There is also a built-in QR scanner in the admin area. The
      system detects duplicate scans and warns if a ticket belongs to a
      different event.

      ### What payment providers does Chobble Tickets support?

      Chobble Tickets supports
      [Stripe and Square](/features/stripe-and-square/). You enter your API key
      in the admin settings and the webhook endpoint configures itself
      automatically. You can set fixed prices, pay-what-you-want pricing with
      optional minimum and maximum amounts, or run free events with no payment
      setup needed. [Refunds](/features/refunds/) can be issued individually or
      in bulk from the admin area.

      ### Can I integrate Chobble Tickets with other tools?

      Yes. Chobble Tickets has a [public JSON API](/features/public-api/) for
      event listings and booking (no authentication required), an
      [admin API](/features/admin-api/) with HMAC-secured keys for full event
      management, and [webhooks](/features/webhooks/) that send a POST request
      on every booking. Webhooks can connect to Slack, Zapier, CRMs, or any
      service that accepts HTTP requests. There are also
      [ICS calendar feeds and RSS feeds](/features/rss-and-calendar-feeds/)
      for event listings.

      ### What features does Chobble Tickets not have?

      Chobble Tickets does not have an event discovery marketplace, built-in
      email marketing campaigns, social media advertising tools, promo codes,
      reserved seating with venue maps, waitlists, multi-currency support,
      virtual event hosting, a mobile app for organisers, or phone support.

      If you need event discovery to find new audiences, or venue-specific
      seating maps, a larger platform like Eventbrite may be a better fit. You
      can see a full feature comparison on the
      [Eventbrite comparison page](/compared-to/eventbrite/). Chobble is
      designed for organisers who already have an audience and want to keep
      their revenue and their data.

  - type: cta
    title: Get started
    description: Sign up for managed hosting at £50/year, or download the source code from GitHub and self-host for free.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
