---
title: Deposits & Balance Payments - Chobble Tickets
meta_title: Deposits, Reservations & Balance Payments - Chobble Tickets
meta_description: Take a deposit at booking time and collect the balance later through a secure payment link, a two-step payment plan with statuses, ledger tracking and offline payments.
permalink: /features/deposits-and-balance-payments/
ticket_evidence_capture: balance-payment-link
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

      For a paid reservation, the booking is created and uses capacity only
      when the deposit payment is confirmed. Opening checkout does not reserve
      the place.

      A deposit of zero is also valid, which means the customer reserves
      without opening a payment-provider checkout and pays the whole amount
      later. The deposit is always capped at the full order price.

      This two-step arrangement is the payment plan Chobble Tickets
      provides: a deposit at booking and one balance payment afterwards.
      Chobble Tickets does not split a price into a run of instalments.
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
      page names what was booked, what has been paid, and what is left,
      and offers a button that pays the outstanding balance through your
      payment provider.
      The link is signed, so it cannot be guessed, and it names nobody:
      not the person who booked, nor their email address. Once the
      balance is settled, the page reports that there is nothing left to
      pay, and the booking moves to your paid status.
    figure_src: /images/screenshots/deposits-and-balance-payments.png
    figure_alt: A screenshot of the balance payment page for a Retreat booking, showing an £80 full order price, £30 already paid and a £50 balance due
    figure_caption: The page a customer opens from their payment link, naming what they booked, what they have paid and what is left. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/payments/paying-a-deposit.feature">(src)</a></small>
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
  - type: markdown
    content: |
      ## Example

      A hall charges £400 for a Saturday party booking and asks for 25% up
      front. The organiser sets a "Reserved" status with a deposit rule of
      "25%", makes it the default for public bookings and sets "Confirmed" as
      the paid status. The customer pays
      £100 at checkout, which takes the date, and the booking shows £300
      still owed. The organiser sends the customer the payment link from
      the booking's Balance tab, and once the £300 is paid the booking moves
      to "Confirmed" by itself.

      ## Limits

      Chobble Tickets does not send balance reminders or set a due date. The
      payment link appears in the admin area, and the organiser sends it to
      the customer when it suits them. A booking fee is not added when the
      balance is paid through the link. The deposit rules are published as
      [test cases for paying a
      deposit](https://github.com/chobbledotcom/tickets/blob/main/specs/payments/paying-a-deposit.feature).
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Take deposits without extra fees

      Deposits and balance links come with every hosted site, at £50 a year or £5 a month, and Chobble takes no share of either payment.
name: Deposits, Reservations & Balance Payments - Chobble Tickets
---
