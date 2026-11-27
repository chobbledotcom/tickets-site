---
name: Security Deposits for Hire
subtitle: Part-payments, refundable damage deposits and card pre-authorisations
meta_title: Security Deposits for Hire Bookings | Chobble Tickets
meta_description: Understand the difference between a part-payment deposit, a refundable damage deposit and a card pre-authorisation, and how each works on Chobble Tickets.
guide-category: choosing-hire-software
order: 4
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      Hire businesses use the word "deposit" for three different things. A
      part-payment reduces the price the customer owes. A damage deposit is
      taken in addition and may be returned after inspection. A
      pre-authorisation places a temporary hold on a card without taking
      payment. Each needs a different process.

      Chobble Tickets supports part-payments. A mandatory modifier or
      booking fee can collect a damage deposit, which the operator returns
      through the payment provider. Card pre-authorisation needs a separate
      payment product.
  - type: markdown
    dark: true
    content: |
      ## The three meanings

      | Type | What the customer pays | When it is returned | Chobble Tickets |
      |---|---|---|---|
      | Part-payment deposit | Part of the hire price | According to the booking's refund terms | Supported |
      | Refundable damage deposit | An amount on top of the hire | After inspection, in full or in part | Mandatory fee and provider refund |
      | Card pre-authorisation | Nothing is taken; a temporary hold is placed | Hold released or expires under provider rules | Not supported |

      A part-payment counts towards the hire price. A damage deposit is
      extra money the operator may have to return, so it needs a refund
      process and a record of what was returned.
  - type: markdown
    content: |
      ## How to take a damage deposit on Chobble Tickets

      Add the damage deposit as a mandatory modifier or booking fee at
      checkout. A mandatory modifier can add a fixed amount. A booking fee
      is a percentage of the subtotal, from 0% to 10%, so it can only
      collect an amount that fits that calculation. For a booking paid in
      full, the customer pays the hire price and deposit together.

      With a part-payment, a fixed surcharge may not be collected in full at
      booking. Check the amount due now, the balance and the tax shown at
      checkout against your intended terms before taking bookings.

      After inspection, use the Stripe, Square or SumUp dashboard to refund
      the amount due. Returning the deposit alone is a partial refund of the
      payment. Chobble Tickets does not issue partial refunds from its admin
      panel or automatically record a provider-dashboard refund in its
      ledger. Check the provider's refund rules and any time limits.

      Record the return separately and reconcile it with the provider's
      report. The [ledger](/features/ledger/) supports manual entries,
      including modifier income adjustments. Ask an accountant how to
      record the transaction and tax; do not assume an adjustment changes
      the payment provider's records.
  - type: markdown
    content: |
      ## Worked example

      A customer hires a carpet cleaner for £60 and pays a £150 damage
      deposit added as a mandatory fixed modifier. The customer pays the
      £210 order total in full. The cleaner comes back with a broken
      handle, and the repair costs £40.

      The operator refunds £110 from the payment dashboard and keeps £40.
      The booking record still shows £210 charged. The operator records the
      £110 return and the £40 retention in their accounts. Chobble Tickets
      does not change the booking total or post the partial refund to the
      ledger automatically.

      If the cleaner had come back undamaged, the operator would refund the
      full £150 and keep the £60 hire price.
  - type: markdown
    content: |
      ## What can go wrong

      - **Tax.** The treatment of a damage deposit and any retained amount
        depends on the facts. Ask an accountant about tax and accounting,
        including how the checkout fee is configured.
      - **Chargebacks.** A customer may dispute a deduction. Keep inspection
        notes and the agreed terms.
      - **Payment fees.** The provider may retain processing fees or charge
        for refunds. Check its terms.
      - **Cash flow.** The payment goes through the operator's payment
        account; it is not separately held by Chobble Tickets.
      - **Customer confusion.** Explain the deposit, deductions and return
        conditions before checkout.
  - type: markdown
    content: |
      ## Wording for the booking page

      Explain the deposit before checkout. The following is an example only;
      use a return period and deductions that match your own terms and law:

      > A refundable damage deposit of £150 is included in the total. It is
      > returned within five working days of the item being checked, less
      > the cost of any damage or missing parts.

      The [terms and conditions](/features/terms-and-conditions/) page can
      show that wording and require a tick before the order is sent.
  - type: markdown
    content: |
      ## Alternatives

      - **Take the deposit at collection.** Take a separate payment at
        handover and refund it through that payment provider, subject to
        its rules. Keep a separate record.
      - **Use a payment provider that supports pre-authorisation.** A card
        hold avoids taking the money, but it needs a provider and a process
        that Chobble Tickets does not supply. Holds can expire.
      - **Use a dedicated deposit product.** This adds another supplier
        and another reconciliation.
      - **Self-insure and skip the deposit.** This is a commercial choice;
        keep a written damage policy.
  - type: markdown
    content: |
      ## Limits

      Chobble Tickets does not hold client money, pre-authorise cards, issue
      partial refunds or reconcile a partial refund made elsewhere. A
      damage deposit taken as a surcharge is part of the order total, and
      the return happens in the payment provider's dashboard. The [refunds
      page](/features/refunds/) sets out what Chobble Tickets does and does
      not refund.

      If a native security deposit workflow is required,
      [Booqable](/compared-to/booqable/) and
      [TWICE](/compared-to/rentle/) list deposit handling. Check each
      provider's current features and payment conditions.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Take hire bookings

      A hosted hire site is £50 a year or £5 a month, and Chobble takes nothing from each booking.
---
