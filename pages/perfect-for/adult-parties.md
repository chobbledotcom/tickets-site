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

  - type: split
    title: Privacy your attendees can rely on
    reveal_content: left
    content: |
      People attending 18+ events have practical reasons to keep their
      attendance private. A data breach or a marketing email from a ticketing
      platform can cause real problems for attendees who expected discretion.

      Commercial ticketing platforms store attendee data in plain text and use
      it to market other events. Chobble Tickets encrypts all personally
      identifiable information at rest using
      [hybrid RSA-OAEP + AES-256-GCM encryption](https://chobbledotcom.github.io/tickets/docs/crypto.ts).

      You can run Chobble Tickets on your own servers, so no attendee data
      passes through any third party.
    figure_type: html
    figure_html: |
      <ul>
        <li>Attendee data is encrypted at rest.</li>
        <li>No marketing emails sent to your guests.</li>
        <li>Deploy on your own servers.</li>
      </ul>

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
        title: White-labelled by default
        description: Attendees see your branding, not ours. There is no "Powered by Chobble" banner drawing attention to the platform or linking your event to a public directory.
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
