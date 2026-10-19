---
title: QR Code Ticket Check-In - Chobble Tickets
meta_title: QR Code Ticket Check-In | Chobble Tickets
meta_description: Each booking receives a QR code. Staff use an authenticated browser and phone camera to check it in and see duplicate or wrong-event warnings.
permalink: /features/qr-code-check-ins/
ticket_evidence_capture: qr-code-check-in
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
      cannot be used. That search offers only the people still to arrive, so
      nobody is checked in twice.

      Check-ins are counted per ticket, not per booking. A booking with
      several places gets one bold Check in/out link, and the door can
      admit part of the booking, for example 2 of 5 places now and the
      rest later. At a large event, a paper list of who has half-arrived
      is not workable, so the count lives on the booking instead.

      Door staff do not need an admin account. Give volunteers a
      [scanner login](/features/users/) and the only page they can open
      is the scanner. One scanner session can cover every listing in a
      [group](/features/groups/), so one door list serves a multi-day
      festival or a weekend programme.

      The scanner shows what the attendee picked on the listing, such as
      a size or a session time, and check-in matches that option rather
      than the name alone.
    figure_src: /images/screenshots/qr-code-check-in.png
    figure_alt: A screenshot of the manual check-in search on a listing's scanner page, showing Alice and her one place ready to check in
    figure_caption: 'Look someone up by name when their ticket cannot be scanned. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/attendees/checking-people-in-at-the-door.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## Example

      A club night has 80 bookings, four of them for groups of five. Two
      volunteers sign in with scanner logins on their own phones and scan
      tickets from emails, printouts and [Apple or Google
      Wallet](/features/apple-wallet/) passes, which carry the same code.
      When a group of five arrives with two people, the volunteer checks in
      two places, and the other three scan in later on the same ticket.
      Someone without their ticket is found by name in the manual search.

      ## Event QR codes for posters

      Each event also gets its own QR code SVG (at `/ticket/:slug/qr`) that
      links to the booking page. Print it on posters, flyers, or handouts so
      people can scan and book directly.

      ## A booking code shown on the day

      Staff can also open a booking code for one listing and hold the
      screen up for a customer to scan. The code is signed, so it cannot
      be altered on the way, and it stops working a few minutes after it
      appears, which makes a photograph of the screen useless later. The
      admin page says how long each code lasts.

      The code can carry details the organiser has already filled in. When
      the name and the price are both set and the listing asks nothing
      else, the person scanning goes straight to paying that amount, which
      suits a stall, a door or a bar.

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
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      The door scanner comes with every hosted site, at £50 a year or £5 a month, for as many volunteers as you need.
name: QR Code Ticket Check-In | Chobble Tickets
---
