---
title: Groups - Chobble Tickets
meta_title: Event Groups & Tiered Ticket Types - Chobble Tickets
meta_description: Organise events into groups for multi-event bookings, single checkout, and tiered ticket types with shared capacity using Chobble Tickets.
permalink: /features/groups/
ticket_evidence_capture: group-booking-arrives
eleventyNavigation:
  key: Groups
  parent: Managing Events
  order: 2
blocks:
  - type: hero
    class: gradient
    content: |-
      # Event groups

      A group puts related listings on one public page, so a customer can book several of them in one checkout. A group can also share one capacity between its listings, which is how Chobble Tickets sells different ticket types for the same room.
  - type: split-image
    content: |
      ## Multi-event bookings

      For a festival with multiple stages, a conference with multiple
      tracks, or a series of workshops, you can group your events together
      and let attendees book several at once with a single checkout.

      The dashboard includes a multi-booking link builder that generates
      combined-event URLs (like `/ticket/event1+event2`), so attendees can
      book multiple events in one form and one payment.

      This is also useful for recurring events like a weekly class, a monthly
      meetup, or a season of concerts where grouping makes booking easy.

      A listing can carry options the buyer picks, such as a size. In the
      example above, Jane picked a Medium, and that choice reaches the
      attendee roster and the door. See
      [listing attributes](/features/managing-events/) for how to set
      options on a listing.

      A booking made that way is an ordinary booking: it reaches the listing's
      own attendee list with the person's name, their email, the places they
      took and the answers they gave.
    figure_src: /images/screenshots/the-tempest-group-checkout.png
    figure_alt: A screenshot of the Summer Concert attendee list, showing Jane Doe, her email, the Medium size she picked and one place
    figure_caption: 'A booking made on a group page arrives with the person, how to reach them, what they picked and the one place they took. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/bookings/book-through-the-site.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## Selling group tickets

      A group page also handles group tickets: one person buying for
      several people. The buyer chooses a quantity for each listing, and
      the [maximum per purchase](/features/registration-deadlines/) caps
      what one order can take. One payment covers the whole group.

      On a booking that spans several events, buyers answer each [custom
      question](/features/custom-questions/) once per order rather than
      once per listing.

      ## Tiered ticket types with shared capacity

      Use **max attendees per group** to set a shared capacity cap across
      multiple events in a group. This lets you create tiered ticket types
      that share the same stock. For example:

      - **VIP + General Admission** - create two events in a group with a
        shared cap of 200. Set the VIP event to a max of 50 and price it
        higher. Once 200 total attendees are reached across both tiers,
        both stop selling.
      - **Early Bird + Standard** - offer a lower-priced early bird event
        with a small cap, then a standard-priced event sharing the same
        overall venue capacity.
      - **Adult + Child + Concession** - multiple price points for the
        same event, all counting against one venue limit.

      Each event in the group can have its own price, description, and
      individual cap. The group maximum is rechecked when payment confirmation
      arrives. A paid order that no longer fits is refunded automatically.

      A group can also keep its hidden tiers off the group's public page.
      The tiers stay bookable through their own links.

      One scanner session covers the whole group. A door volunteer with a
      [scanner login](/features/users/) can check people in across every
      listing in the group, so a multi-day festival, a multi-venue event
      or a weekend programme runs on one door list.

      ## Example

      [Crumpsall Folk Club](https://tickets.crumpsallfolkclub.co.uk) sells
      each club night as a £5 normal ticket, a £10 solidarity ticket and a
      £2 concession, each its own listing. Put in one group with a shared
      maximum equal to the room's size, three price points like these stop
      selling together when the room is full, whichever mix of tickets sold.

      ## Limits

      Shared capacity counts places, not seats, so a group cannot sell named
      seats or seating sections. The shared maximum is checked when payment
      confirmation arrives rather than held during checkout, so if two
      payments race for the last place, the later one is refunded
      automatically.

      ## Daily events

      For events that run on specific dates (classes, workshops, recurring
      sessions), daily events offer per-date capacity with a built-in calendar
      picker, and you can set holiday and blackout dates to prevent bookings
      on certain days.

      ## Organisation

      Groups help you keep your admin tidy too. The admin listings and
      attendees pages can be filtered to one group, and a CSV download from
      a filtered page holds only that group's rows. Each group also gets its
      own public page listing all its events.

      See the [API documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html)
      for details on event grouping and availability management.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Groups and shared capacity come with every hosted site, at £50 a year or £5 a month.
name: Event Groups & Tiered Ticket Types - Chobble Tickets
---
