---
title: QR Code Ticket Check-In - Chobble Tickets
meta_title: QR Code Ticket Check-In | Chobble Tickets
meta_description: Each booking receives a QR code. Staff use an authenticated browser and phone camera to check it in and see duplicate or wrong-event warnings.
permalink: /features/qr-code-check-ins/
eleventyNavigation:
  key: QR Code Check-ins
  parent: Managing Events
  order: 0
blocks:
  - type: hero
    class: gradient
    content: |-
      # QR code ticket check-in

      Each booking receives a unique QR code. Staff can scan it through an authenticated browser on a phone with a camera, without a native app or dedicated scanner.
  - type: split-image
    content: |
      ## How it works

      When someone books, they receive an email with a unique booking URL and
      QR code. At the event, authorised staff open the built-in scanner in
      their browser and scan the code. The system validates the booking and
      marks its entry for the event being scanned as checked in.

      The scanner warns when a booking was already checked in or belongs to a
      different event. Check-in requires a network connection to the Chobble
      Tickets site. A manual name and token search is available when a camera
      cannot be used.
    figure_src: /images/screenshots/qr-code-check-in.png
    figure_alt: Mobile scanner showing Alex Morgan checked in with two tickets
    figure_caption: Scan a ticket and see its check-in result immediately.
  - type: markdown
    content: |
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
      ## What organisers say

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
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Scan tickets at the door

      Use the browser-based scanner to check bookings in at the door.
name: QR Code Ticket Check-In | Chobble Tickets
---
