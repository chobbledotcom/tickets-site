---
title: Purchasable Events - Chobble Tickets
meta_title: Collect Donations & Payments Without Ticketing - Chobble Tickets
meta_description: Use Chobble Tickets for fundraising, donations, raffle ticket sales, and general payment collection without an event to attend.
permalink: /features/purchasable-events/
ticket_evidence_capture: paid-more-than-asked
eleventyNavigation:
  key: Purchasable Events
  parent: Selling Tickets
  order: 6
blocks:
  - type: hero
    class: gradient
    content: |-
      # Purchasable events

      A listing with "No check-in" switched on takes payment for something nobody attends, such as a donation, raffle entries or membership dues. The buyer pays and gets a confirmation, but no entry ticket, QR code or wallet pass.
  - type: split-image
    content: |
      ## Flexible contributions without check-in

      Set a minimum contribution and let each supporter enter a higher amount.
      No Check-In listings collect the payment and any required answers without
      creating a door-entry workflow.
    figure_src: /images/screenshots/summer-appeal-purchase.png
    figure_alt: A screenshot of a Donate listing's income statement, showing an £80 balance from one booking of £80
    figure_caption: 'When a listing lets people pay more than it asks, it earns what they chose to pay. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/payments/paying-more-than-the-asking-price.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## What it is used for

      - **Donations and appeals**, with a set amount or [pay what you
        want](/features/stripe-and-square/) above a minimum
      - **Raffle entries**, sold online with a quantity picker, while the
        numbers and the draw stay with the organiser
      - **Club dues and membership fees**, collected once a year or a season
      - **School and PTA collections**, such as trip contributions and
        uniform deposits
      - **Merchandise and digital products**, sold alone or in the same order
        as a ticket

      ## Example

      [Crumpsall Folk Club](https://tickets.crumpsallfolkclub.co.uk) sells
      raffle tickets for its half-time draw as a separate listing next to its
      admission tickets. On a page selling several listings, a buyer can put
      admission and five raffle entries in one order and pay once.

      ## What changes with No check-in

      The booking button reads "Buy now" instead of "Reserve", and the
      confirmation page says "Your Purchase" rather than "Your Tickets". QR
      codes, the door scanner and Apple and Google Wallet passes are hidden,
      and the listing stays out of the calendar and news feeds.

      Payment, capacity, [booking questions](/features/custom-questions/),
      confirmation emails, refunds and [CSV export](/features/csv-export/)
      all work as they do for tickets. A capacity of 200 stops a raffle at
      200 entries, and a maximum per purchase limits how many one order can
      take.

      ## Buyer details

      Buyers' names, emails and answers are encrypted in the database in the
      same way as attendee details. Chobble does not market to buyers or show
      them other organisers' events, and charges no fee on the money raised.

      ## Limits

      Chobble Tickets records raffle sales but does not allocate numbers or
      draw winners. Gift Aid declarations are not collected automatically, so
      a charity claiming Gift Aid needs its own booking question and records.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Charities and community groups pay £25 a year for managed hosting on the annual plan, with No check-in listings included.
name: Collect Donations & Payments Without Ticketing - Chobble Tickets
---
