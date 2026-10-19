---
title: Political Organising - Chobble Tickets
meta_title: Ticketing for Political Organising - Chobble Tickets
meta_description: Event ticketing for political groups with encrypted attendee data, open source and self-hostable.
permalink: /perfect-for/political-organising/
eleventyNavigation:
  key: Political Organising
  parent: Perfect For
  order: 3
blocks:
  - type: hero
    class: gradient
    content: |-
      # Ticketing for political organising

      Chobble Tickets takes sign-ups and ticket sales for meetings, trainings and campaign events, and encrypts every attendee's name and contact details before saving them. A copy of the database on its own does not reveal who signed up, and a group can run the software on its own servers.
  - type: split-icon-links
    content: |
      ## Privacy by design

      Chobble Tickets encrypts all personally identifiable information at rest
      using standard published methods, [RSA-OAEP and
      AES-256-GCM](https://chobbledotcom.github.io/tickets/docs/crypto.ts).

      Some ticketing platforms use attendee records for event marketing.
      Chobble Tickets does not. Its complete product source is published under
      AGPL-3.0-only and can be inspected.

      You can run Chobble Tickets on your own infrastructure. Payment, email,
      SMS, address lookup and webhook providers receive data only when those
      optional services are configured.

      The same setup covers branch and union meetings, campaign launches,
      canvassing sessions, hustings, conferences and organising trainings.
    figure_items:
      - icon: hugeicons:lock
        text: Attendee data is encrypted at rest.
      - icon: hugeicons:source-code
        text: Product source published under AGPL-3.0-only.
      - icon: hugeicons:cloud-server
        text: Deploy on your own servers.
  - type: markdown
    content: |
      ## Who can read a sign-up list

      Names, emails, phone numbers, addresses and free-text answers can only
      be read by someone signed in to a keyed admin account. The keys are
      unlocked at login and forgotten when the session ends. [Editor
      accounts](/features/editors/), for volunteers who write event pages,
      cannot see attendees at all.

      ## Example

      A tenants' union runs a free monthly branch meeting with 60 places. Its
      listing asks for a name and email and one question, "Which building do
      you live in?". Organisers see the answers in the admin area and the
      [CSV download](/features/csv-export/), and no payment provider is
      involved because the meeting is free.

      ## Limits

      Encryption protects stored records, not every party a booking passes
      through. A paid booking sends the buyer's payment details to the
      payment provider, and confirmation emails pass the attendee's address
      to the email provider. Dates, quantities and the choice picked in a
      multiple-choice question are stored as plain values, so a choice can
      reveal something to anyone who also knows the form. The [encryption
      page](/features/encrypted/) sets out each layer.

  - type: features
    dark: true
    intro_content: "## Features for political organisers"
    items:
      - icon: hugeicons:source-code
        description: The complete product source is published under AGPL-3.0-only, so its data handling can be inspected.
        name: Fully auditable
      - icon: hugeicons:cloud-server
        description: Run Chobble Tickets on Bunny Edge, Deno Deploy or a Docker-capable host, with infrastructure and integrations selected by the operator.
        name: Self-Hostable
      - icon: hugeicons:security-check
        description: Built by a community interest company. There is no advertising revenue and no data economy subsidising the price.
        name: No data harvesting
  - type: markdown
    content: |
      ## Related uses

      [Community centres and village halls](/perfect-for/community-centres/)
      covers the rooms these meetings happen in.
      [Private adult events](/perfect-for/adult-parties/) covers the same
      encrypted guest lists, and
      [free events that still need a headcount](/perfect-for/free-events/)
      covers meetings with no ticket price.
  - type: markdown
    content: |
      ## Other options you might be considering

      You might be considering
      [SignUpGenius](/compared-to/signupgenius/), whose free sign-up
      sheets carry advertising, or
      [Google Forms](/compared-to/google-forms/), which is free but not
      built for payments or encrypted records. Each comparison covers
      pricing, features and attendee data, and the
      [full list](/compared-to/) names every platform checked so far.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started with encrypted event ticketing

      Sign up for managed hosting from £25/year for community groups, or self-host without paying Chobble a licence fee.
name: Ticketing for Political Organising - Chobble Tickets
---
