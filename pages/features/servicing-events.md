---
title: Servicing Events - Chobble Tickets
meta_title: Block Capacity for Maintenance - Chobble Tickets
meta_description: Block out event capacity for servicing, maintenance, deep cleans, or staff holds without creating a customer booking. Capacity is consumed and customers see nothing.
permalink: /features/servicing-events/
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
    figure_alt: Service event form holding four Ceramics Studio Session places for a two-day floor treatment
    figure_caption: Reserve capacity for maintenance across one day or several days.
  - type: markdown
    content: |
      ## Capacity holds for anything that is not a customer

      Equipment goes out for repair. A venue needs a deep clean. A boiler is
      serviced. Staff need a hold on a date for an internal event.

      Without a way to reserve capacity, an organiser either creates a
      customer booking (which clutters the attendee list and triggers
      confirmations) or leaves the capacity open and hopes no one books it.

      Servicing events solve this. A servicing event consumes capacity the
      same way as a real booking, but it is not a customer. There is no QR
      code, no ticket email, no contact record, and no payment. Customers
      never see it.

      ## How it works

      A servicing event is created from the admin panel. You give it a
      name, a start date, a number of days, and how many units of each event
      it holds. The capacity is taken from the same pool as real bookings,
      so availability updates immediately.

      Because servicing events use the same capacity engine, there is nothing
      new to learn. If an event has 10 spaces and you create a servicing
      event holding 3, customers see 7 available.

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
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Capacity holds for operations

      Hold dates for maintenance without adding customer bookings.
name: Block Capacity for Maintenance - Chobble Tickets
---
