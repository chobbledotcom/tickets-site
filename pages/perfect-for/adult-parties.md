---
layout: design-system-base.html
title: Adult Parties - Chobble Tickets
meta_title: Ticketing for Adult Parties - Chobble Tickets
meta_description: Event ticketing for adult parties with encrypted attendee data, no data sharing, and self-hosting options.
permalink: /perfect-for/adult-parties/
eleventyNavigation:
  key: Adult Parties
  parent: Perfect For
  order: 5
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: Ticketing for adult parties
    lead: >-
      Attendee data is encrypted at rest and never shared with third parties.
      Your guest list stays private.

  - type: split-icon-links
    title: Your attendees have real reasons for privacy
    reveal_content: left
    content: |
      If you're running any kind of 18+ event, your attendees are trusting
      you with sensitive
      information. Their name, email address, and the fact that they attended
      your event are all things they may not want anyone else to know about.

      On a commercial ticketing platform, that data sits in plain text on
      someone else's servers. Platform staff and contractors can access it.
      A data breach would expose not just names and emails but a record of
      which events each person attended.

      Chobble Tickets encrypts all personally identifiable information at rest
      using
      [hybrid RSA-OAEP + AES-256-GCM encryption](https://chobbledotcom.github.io/tickets/docs/crypto.ts).
      Even if someone gained access to the database, they could not read
      attendee names or contact details without your private key.
    figure_items:
      - icon: "hugeicons:lock"
        text: "Attendee data is encrypted at rest."
      - icon: "hugeicons:security-check"
        text: "Only you hold the decryption key."
      - icon: "hugeicons:view-off"
        text: "No platform staff can read your guest list."

  - type: split-icon-links
    title: What happens on commercial platforms
    reveal_content: right
    content: |
      Commercial ticketing platforms make money by connecting attendees with
      more events. That means your attendees' data is an asset to the platform,
      not just a record of a transaction.

      On Eventbrite, attendees who buy a ticket to your event will see
      recommendations for "similar events" and receive marketing emails based
      on their attendance history. For someone who attended a private adult
      event, that means the platform is actively trying to surface related
      events to them, which could appear in a shared inbox or on a screen at
      the wrong moment.

      Chobble Tickets does not do this. There is no event discovery feature,
      no recommendation engine, and no marketing emails sent to your
      attendees. The only emails they receive are the booking confirmation and
      any messages you choose to send yourself.
    figure_items:
      - icon: "hugeicons:notification-03"
        text: 'No "similar events" recommendations.'
      - icon: "hugeicons:mail-01"
        text: "No marketing emails to your attendees."
      - icon: "hugeicons:globe-02"
        text: "No event discovery or public directory."

  - type: split-icon-links
    title: Your event, your branding
    reveal_content: left
    content: |
      Chobble Tickets is white-labelled by default. Your attendees see your
      event name and your branding on the booking page, not a ticketing
      platform's logo. There is no public event directory linking your event
      to a wider catalogue.

      If you self-host, your booking page runs on your own domain. Attendees
      interact with your site and your site only. There is no redirect to a
      third-party checkout, no "Powered by" banner, and no account creation
      required.

      For events where attendees prefer not to have the name of a ticketing
      platform appearing in their email inbox or bank statement alongside the
      event name, this matters.
    figure_items:
      - icon: "hugeicons:globe-02"
        text: "Your domain, your branding."
      - icon: "hugeicons:view-off"
        text: "No public event directory."
      - icon: "hugeicons:smart-phone-01"
        text: "No third-party account required."

  - type: features
    section_class: alt
    header_intro: "## Built for events where discretion matters"
    items:
      - icon: "hugeicons:security-check"
        title: Encrypted attendee data
        description: All personally identifiable information is encrypted at rest. Even if someone gained access to the server, they could not read attendee names or contact details without your private key.
      - icon: "hugeicons:source-code"
        title: Fully auditable
        description: Every line of code is public under AGPLv3. You can verify exactly what data is collected, how it is stored, and that there is no hidden tracking or data collection.
      - icon: "hugeicons:cloud-server"
        title: Self-hostable
        description: One-click deploy to DigitalOcean, Heroku, Koyeb, or Render, or run it in Docker, on Fly.io, or on Bunny Edge Scripting. No attendee data needs to leave your infrastructure.

  - type: features
    header_intro: "## No advertising, no data sales"
    items:
      - icon: "hugeicons:view-off"
        title: No data harvesting
        description: Chobble is a community interest company. There is no advertising revenue and no data economy subsidising the price. Your attendees will not receive marketing emails from the platform.
      - icon: "hugeicons:lock"
        title: No public event directory
        description: There is no discovery page, no "events near you" feature, and no way for anyone to browse a list of events hosted on the platform. Your event is only visible to people you share the link with.
      - icon: "hugeicons:credit-card"
        title: Flat annual fee
        description: Chobble charges a flat annual fee with no per-ticket charges. The business model is based on the fee you pay, not on monetising your attendees' data.

  - type: cta
    title: Get started with private event ticketing
    description: Self-host for free, or get managed hosting from £25/year for community groups.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
