---
title: Ledger - Chobble Tickets
meta_title: Double-entry Ledger - Chobble Tickets
meta_description: Every income figure, refund, and balance comes from a single double-entry ledger. Filter by date and listing, view per-account statements, and record cash payments.
permalink: /features/ledger/
eleventyNavigation:
  key: Ledger
  parent: Managing Events
  order: 12
blocks:
  - type: hero
    class: gradient
    content: |-
      # Accounting ledger

      Every income figure, refund, and balance in Chobble Tickets comes from a single double-entry ledger. Filter by date and listing, view per-account statements, and record payments taken outside the checkout.
  - type: markdown
    content: |
      ## One source of truth for money

      Every money figure in the platform - listing income, attendee balances,
      modifier revenue, refunds, and booking fees - is derived from a single
      append-only ledger. There are no separate running totals that can drift
      out of sync.

      When you view an event's income, an attendee's balance, or a promo
      code's revenue, the figure is calculated from the ledger at that moment.

      ## The ledger page

      The admin ledger page shows recent transfers with a date-range filter
      and a per-event filter. You can switch between a plain-language view
      ("Payment received for...") and a double-entry view showing where money
      moved from and to.

      A stats table at the top summarises the selected range: total income,
      total due, total refunded, and booking fees. When you filter to a
      single event, it shows gross ticket sales, recognised income, refunds,
      and the net balance in the ledger.

      ## Per-account statements

      Each account - an attendee, an event, or a modifier - has its own
      statement page showing a running balance. Every transfer in or out is
      listed with a time, the event, the counterparty, the change, and the
      running balance.

      The same statement appears inline on the attendee edit page, so you
      can see an attendee's full payment history without leaving their
      record.

      ## Income and reconciliation

      Each event page shows an "Income & ledger" reconciliation. It explains
      how gross ticket sales relate to recognised income, how refunds reduce
      it, and how costs paid outside the checkout affect the net balance. The
      page shows the figures side by side and explains how refunds, manual
      income, and costs affect the net balance.

      ## Record cash and offline payments

      Not every payment comes through the checkout. You can manually add
      ledger entries to record cash, bank transfers, card machine takings,
      or door income. Each entry posts a transfer to the right account, with
      a timestamp for when it happened.

      You can also record costs paid for an event - venue hire, equipment,
      catering - so the ledger reflects costs as well as income.

      Manual entries you can record include:

      - Payments received outside the checkout (cash, bank transfer, card
        machine)
      - Extra amounts an attendee needs to pay (damage charges, late fees)
      - Waiving or reducing what an attendee owes
      - Income received outside the checkout for an event (door takings,
        invoices)
      - Costs paid for an event (venue hire, equipment)
      - Manual adjustments to modifier income

      Editing an entry changes its amount and time. Deleting requires typing
      the exact amount as confirmation, so a stray click cannot remove a
      record.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Ledger-backed totals

      Income, refunds, costs, and balances are derived from one ledger.
name: Double-entry Ledger - Chobble Tickets---
