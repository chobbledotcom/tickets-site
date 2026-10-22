---
name: Ticketing Payments
subtitle: What happens when a buyer pays for tickets, from the checkout to the organiser's account
meta_title: Ticketing Payments: How the Money Moves | Chobble Tickets
meta_description: How ticketing payments work on Chobble Tickets. Buyers pay into the organiser's Stripe, Square or SumUp account, Chobble holds no funds, and processing fees go to the payment provider.
guide-category: choosing-a-ticket-platform
order: 5.25
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      When someone buys a ticket, four things happen. A checkout opens, a
      card is charged, the money lands in an account, and the booking is
      recorded. Ticketing platforms differ most in the third step: whose
      account the money arrives in, and who takes a share on the way.

      This guide describes that payment path on Chobble Tickets, and the
      costs that sit around it.
  - type: markdown
    dark: true
    content: |
      ## The money goes to the organiser's account

      A paid booking opens the checkout of the site's payment provider,
      which is Stripe, Square or SumUp. The buyer pays there, and the money
      settles into the organiser's own account with that provider.

      Chobble Tickets never holds ticket money and takes no share of a
      sale. Payout timing is set by the payment provider, not by Chobble.

      Card details are entered at the provider's checkout and handled by
      the provider. What the platform stores is the booking record and a
      payment identifier from the provider, not the card.
  - type: markdown
    content: |
      ## The charges around a ticket

      Two figures sit beside each ticket. The ticket price is set by the
      organiser and goes to the organiser. Payment processing is charged
      by the provider at its own rate, such as Stripe's 1.5% + 20p on a UK
      card transaction.

      Chobble Tickets adds nothing to either figure. There is no platform
      fee per sale, no booking fee when a balance payment is made, and no
      charge that changes with volume. The
      [fee calculator](/compared-to/compare-all/) compares what providers
      take at different volumes, and
      [where ticketing money goes](/guide/choosing-a-ticket-platform/where-ticketing-money-goes/)
      separates platform income from processing costs.
  - type: markdown
    dark: true
    content: |
      ## Deposits, balances and unpaid checkouts

      A listing can take a deposit at booking and the balance later. The
      booking uses capacity when the deposit payment is confirmed, and the
      customer settles the rest through a signed payment link. A deposit
      of zero is also valid, which turns the booking into a reservation
      that is paid in full later.

      An unpaid checkout reserves nothing. Capacity is used when payment
      confirmation arrives, not when a checkout opens. If two confirmed
      payments race for the final place, the later payment is refunded
      automatically.
  - type: markdown
    content: |
      ## Refunds, cash and records

      The admin panel issues a full refund for one booking or for every
      booking on a cancelled event. You can record cash, bank transfers,
      card-machine payments or vouchers against the booking, so offline
      money and online money share one [ledger](/features/ledger/).

      Everything [exports as CSV](/features/csv-export/) for a treasurer
      or accountant.
  - type: markdown
    dark: true
    content: |
      ## Why the platform price does not follow sales

      Chobble Tickets is paid for hosting in advance: £50 a year or £5 a
      month, with a £25 annual rate for charities, community groups,
      artists and musicians. Because the income is that flat price rather
      than a share of sales, the platform costs the same at ten tickets or
      at ten thousand.

      The [Stripe, Square and SumUp page](/features/stripe-and-square/)
      describes how to connect an account, what happens when a payment
      fails, and how refunds are processed.
  - type: cta
    button:
      text: Get started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Connect your payment account

      Choose Stripe, Square or SumUp in the admin settings, and paid bookings settle straight into your account.
