---
title: Webhooks - Chobble Tickets
meta_title: Webhooks - Chobble Tickets
meta_description: Chobble Tickets sends a JSON message to your chosen address each time someone books, with the buyer's details, amount paid and tickets booked.
permalink: /features/webhooks/
eleventyNavigation:
  key: Webhooks
  parent: Platform & Integrations
  order: 5
blocks:
  - type: hero
    class: gradient
    content: |-
      # Webhooks

      A webhook is an automatic message one website sends to another when something happens. Chobble Tickets sends one each time someone books a listing that has a webhook address, so another tool such as Slack, Zapier, n8n or a spreadsheet can act on the booking.
  - type: markdown
    content: |
      ## How to set one up

      Each listing has a webhook address field. Enter the address of a service
      set up to receive the message, such as a Zapier or n8n trigger, and save
      the listing. To use one address for every listing, set it on the
      [listing defaults](/features/bulk-event-management/) page instead.

      When a booking is made, Chobble Tickets sends a POST request with a JSON
      body to that address. Bookings made online and bookings an admin adds by
      hand both send one, and a `source` field says which it was.

      ## What the message contains

      Each message carries the buyer's name, email, phone, address and
      special instructions, the amount paid, any balance still owed, the
      currency, the payment reference and a link to the ticket. A `tickets`
      list gives each listing booked, with its name, date, quantity and unit
      price. Amounts are in pence, so `1500` means £15.00.

      ```json
      {
        "notification_type": "registration.completed",
        "source": "public",
        "name": "Alice Smith",
        "email": "alice@example.com",
        "price_paid": 3000,
        "amount_owed": 0,
        "currency": "GBP",
        "ticket_url": "https://tickets.example.com/t/A1B2C3D4E5",
        "tickets": [
          {
            "listing_name": "Summer Workshop",
            "date": "2025-08-20",
            "quantity": 2,
            "unit_price": 1500
          }
        ]
      }
      ```

      This is a shortened copy of the example in the [published
      source](https://github.com/chobbledotcom/tickets/blob/main/src/shared/webhook-example.ts).
      A test compares that example with the real message, so the two cannot
      drift apart. The admin guide inside each site shows the full version.

      ## Orders for several listings

      An order covering several listings sends one combined message to each
      different webhook address involved, rather than one per listing. If a
      single order would send to more than 16 different addresses, none are
      sent.

      ## Limits

      Chobble Tickets tries each delivery once and waits up to 10 seconds for
      a reply. A failed delivery does not stop the booking. It is recorded in
      the [activity log](/features/activity-logs/), and you can re-send the
      notification from the attendee's page. Messages are not signed, so the
      receiving service cannot prove a message came from your site. The
      address must be a public `https://` address.
  - type: markdown
    content: |
      > "Webhooks allow you to set up connections and integrate with other
      > systems. The system is open source, it promotes integration to other
      > platforms and software, they're open to collaboration and will share
      > development and it has sooo much potential."

      [Read more reviews &rarr;](/reviews/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Webhooks come with every hosted site, at £50 a year or £5 a month.
name: Webhooks - Chobble Tickets
---
