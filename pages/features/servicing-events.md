---
title: Servicing Events - Chobble Tickets
meta_title: Block Capacity for Maintenance - Chobble Tickets
meta_description: Block out capacity for servicing, maintenance, deep cleans or staff holds without creating a customer booking. Customers see nothing.
permalink: /features/servicing-events/
ticket_evidence_capture: servicing-studio-floor-hold
eleventyNavigation:
  key: Servicing Events
  parent: Managing Events
  order: 14
blocks:
  - type: hero
    class: gradient
    content: |-
      # Servicing events

      Block out capacity for servicing, maintenance, deep cleans, or staff holds without creating a customer booking. The capacity is consumed, but customers never see the booking.
  - type: split-image
    content: |
      ## Hold the space your work needs

      Choose the dates, number of days, and quantity to hold. The saved service
      event reduces availability at once without adding a customer to the
      attendee list.
    figure_src: /images/screenshots/servicing-studio-floor-hold.png
    figure_alt: A screenshot of the service event form for a studio floor treatment, showing a two-day hold on four Ceramics Studio Sessions places
    figure_caption: 'Reserve capacity for maintenance across one day or several days. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/servicing/hold-and-cost.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## Capacity holds for anything that is not a customer

      Equipment goes out for repair, a venue needs a deep clean or staff need
      a date held for an internal event. A servicing event takes up places in
      the same way as a booking, but it has no QR code, ticket email, contact
      record or payment, and customers never see it. Without one, the only
      way to block the places is a fake customer booking, which clutters the
      attendee list and sends a confirmation email.

      ## Example

      A ceramics studio sells 10 places a day and needs to treat its floor
      over two days. It creates a servicing event called "Floor treatment"
      holding all 10 places on both days, so the booking page shows those
      dates as full. It records the £180 contractor's bill as a cost against
      the studio listing, and the [ledger](/features/ledger/) shows that
      listing's profit with the cost taken off.

      A servicing event is created from the admin panel with a name, a start
      date, a number of days and how many places of each listing it holds.
      If a listing has 10 places and a servicing event holds 3, customers can
      book 7.

      ## Where servicing events appear

      Servicing events appear in their own section of the admin panel, with
      a list, create, edit, duplicate, and delete. The dashboard shows
      upcoming service events so you can see what is coming.

      They do not appear anywhere a customer would look. The public ticket
      page, QR codes, wallet passes, check-in, bulk email targets, and CSV
      attendee exports all filter them out. The only place they appear
      alongside real bookings is the admin calendar, where they are labelled
      clearly.

      ## Record the cost

      A servicing event can have costs recorded against it - the price of the
      repair, the cleaning crew's fee, the part that was replaced. Each cost
      posts to the [ledger](/features/ledger/) against the listing it affects,
      so the listing's profit reflects both income and costs.

      Costs are recorded with an amount, a memo, and the listing they relate
      to. Editing a cost later adds an adjustment leg rather than rewriting
      history, so the ledger stays auditable.

      ## Limits

      A servicing event does not move or cancel customers who have already
      booked the dates it covers, so check the calendar before holding a busy
      day. Deleting the servicing event frees its places again.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Servicing holds come with every hosted site, at £50 a year or £5 a month.
name: Block Capacity for Maintenance - Chobble Tickets
---
