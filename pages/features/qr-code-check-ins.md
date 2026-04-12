---
layout: design-system-base.html
title: QR Code Check-ins - Chobble Tickets
meta_title: QR Code Check-ins - Chobble Tickets
meta_description: Every ticket gets a unique QR code that you can scan with any phone camera, with no app required.
permalink: /features/qr-code-check-ins/
eleventyNavigation:
  key: QR Code Check-ins
  parent: Managing Events
  order: 0
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: QR code check-ins
    lead: >-
      Every ticket gets a unique QR code that staff can scan with their phone
      camera, with no app to install or special hardware needed.

  - type: markdown
    content: |
      ## How it works

      When someone books a ticket, they receive an email with a unique ticket
      URL and QR code. At the event, your staff open the built-in scanner on
      their phone and scan the code, and the system instantly shows whether
      the ticket is valid and marks the attendee as checked in.

      The scanner detects duplicate scans and cross-event mismatches, so you
      can spot problems immediately.

      ## Event QR codes for posters

      Each event also gets its own QR code SVG (at `/ticket/:slug/qr`) that
      links to the booking page. Print it on posters, flyers, or handouts so
      people can scan and book directly.

      ## Non-transferable tickets

      For events where you need to verify identity, you can mark tickets as
      non-transferable and the check-in screen will prompt staff to verify
      the attendee's ID against the name on the ticket.

      Read the [tickets documentation](https://chobbledotcom.github.io/tickets/docs/tickets.ts)
      for details on QR code generation and SVG ticket rendering.

  - type: markdown
    content: |
      ## What customers say

      > "The QR system is a game changer! No more holding data on paper,
      > it's now all simple."

      > "It's super quick and efficient, plus it also means that the code is
      > unique to the user - so you can't have someone share a screenshot of
      > the QR code and scam free tickets."

      > "You can have as many people as you want checking people into the
      > event and busting those queues without stupid excel lists and print
      > outs."

      [Read more reviews &rarr;](/reviews/)

  - type: cta
    title: Simple check-ins
    description: All you need is a phone camera to scan QR codes at the door.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
