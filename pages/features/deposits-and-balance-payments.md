---
title: Deposits & Balance Payments - Chobble Tickets
meta_title: Deposits, Reservations & Balance Payments - Chobble Tickets
meta_description: Take a deposit at booking time and collect the balance later through a secure payment link. Statuses, ledger tracking, and offline payments included.
permalink: /features/deposits-and-balance-payments/
eleventyNavigation:
  key: Deposits & Balances
  parent: Selling Tickets
  order: 11
blocks:
  - type: hero
    class: gradient
    content: |-
      # Deposits and balance payments

      Take a deposit at booking time and collect the rest later. Chobble Tickets tracks each booking's outstanding balance and gives the customer a secure link to pay it online.
  - type: markdown
    content: |
      ## Reservations

      A booking can be a reservation rather than a payment in full. You
      define the deposit as part of an attendee status, in one of three
      forms: a percentage of the order total (such as "10%"), a flat
      amount for the whole order (such as "10"), or an amount per item
      booked (such as "10x").

      A deposit of zero is also valid, which means the customer reserves
      now and pays the whole amount later. The deposit is always capped
      at the full order price.
  - type: split-image
    content: |
      ## Attendee statuses

      Statuses are labels you define and order yourself, such as
      "Reserved", "Confirmed", or "Collected". Each booking sits in one
      status, and you move it between them from the admin panel.

      One status can be the default for new public bookings, one can be
      the status a booking moves to once its balance is paid, and any
      status can be flagged as a reservation with its own deposit rule.
      A fresh account starts with a single "Confirmed" status, so
      bookings are paid in full unless you set up reservations.
    figure_src: /images/screenshots/attendee-statuses.png
    figure_alt: Attendee statuses table with Reserved, Confirmed and Collected in order, including reservation, public default and paid badges
    figure_caption: Set clear booking stages, choose the defaults, and arrange them in the order your team uses.
  - type: split-image
    content: |
      ## The customer payment link

      Each reserved booking has a payment link at a tokenised URL. The
      page shows what was booked, what has been paid, and what is left,
      then takes the customer to your payment provider to pay the
       outstanding balance.
      The link is signed, so it cannot be guessed, and it contains no
      personal data. Once the balance is settled, the page reports that
      there is nothing left to pay, and the booking moves to your
      paid status.
    figure_src: /images/screenshots/deposits-and-balance-payments.png
    figure_alt: Weekend Pottery Course balance page showing a £120 order, £30 paid and £90 left to pay
    figure_caption: Customers can see what they paid and settle the exact balance online.
  - type: markdown
    content: |
      ## Balance tracking and offline payments

      The attendee record has a Balance tab showing the deposit, the
      amount paid so far, the remaining balance, and the payment history.
      Every figure is read from the [double-entry ledger](/features/ledger/),
      so the numbers always reconcile.

      Payments received outside checkout can be recorded in the ledger
      too, for cash, bank transfer, a separate card machine, or vouchers.
      A recorded offline payment reduces the outstanding balance in the
      same way an online one does.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Take deposits without extra fees

      Sign up for managed hosting at £50/year or £5/month. Reservations and balance payments are included on every plan.
name: Deposits, Reservations & Balance Payments - Chobble Tickets
---
