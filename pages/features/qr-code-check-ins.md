---
layout: design-system-base.html
title: QR Code Check-ins - Chobble Tickets
meta_title: QR Code Check-ins - Chobble Tickets
meta_description: Every ticket gets a unique QR code. Scan with any phone camera. No app required.
permalink: /features/qr-code-check-ins/
eleventyNavigation:
  key: QR Code Check-ins
  parent: Features
  order: 2
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: QR Code Check-ins
    lead: >-
      Every ticket gets a unique QR code. Staff scan it with their phone
      camera. No app to install, no special hardware needed.

  - type: markdown
    content: |
      ## How It Works

      When someone books a ticket, they receive an email with a unique ticket
      URL and QR code. At the event, your staff open the built-in scanner on
      their phone and scan the code. The system instantly shows whether the
      ticket is valid and marks the attendee as checked in.

      The scanner detects duplicate scans and cross-event mismatches, so you
      can spot problems immediately.

      ## Event QR Codes for Posters

      Each event also gets its own QR code SVG (at `/ticket/:slug/qr`) that
      links to the booking page. Print it on posters, flyers, or handouts so
      people can scan and book directly.

      ## Non-Transferable Tickets

      For events where you need to verify identity, you can mark tickets as
      non-transferable. The check-in screen will prompt staff to verify the
      attendee's ID against the name on the ticket.

      Read the [tickets documentation](https://chobbledotcom.github.io/tickets/doc.ts/docs/tickets.ts)
      for details on QR code generation and SVG ticket rendering.

  - type: cta
    title: Simple Check-ins
    description: No apps. No hardware. Just phones and QR codes.
    button:
      text: Get Started
      href: https://tix.chobble.com
      variant: secondary
      size: lg
---
