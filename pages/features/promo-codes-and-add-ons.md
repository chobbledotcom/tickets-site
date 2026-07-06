---
title: Promo Codes and Add-ons - Chobble Tickets
meta_title: Promo Codes, Discount Codes & Add-ons - Chobble Tickets
meta_description: Offer promo codes, discount codes, surcharges, and opt-in add-ons at checkout. Stock limits, scoping, and a live running total come built in.
permalink: /features/promo-codes-and-add-ons/
eleventyNavigation:
  key: Promo Codes & Add-ons
  parent: Selling Tickets
  order: 8
blocks:
  - type: hero
    class: gradient
    content: |-
      # Promo codes and add-ons

      Offer promo codes, discount codes, surcharges, and opt-in add-ons at checkout. Stock limits, scoping, and a live running total are built in.
  - type: markdown
    content: |
      ## Discounts and extras at checkout

      Chobble Tickets handles price changes as "modifiers". A modifier is a
      rule that changes the total - a discount, a surcharge, or an optional
      add-on the buyer can pick.

      You can create:

      - **Promo codes** - buyers enter a code at checkout to get a discount
      - **Discount codes** - code-triggered discounts that reduce the total
      - **Surcharge codes** - code-triggered charges that add to the total
      - **Opt-in add-ons** - the buyer picks a quantity, like "add a meal for
        £5" or "add a parking pass"
      - **Automatic discounts** - a discount that applies to every order, with
        an optional minimum spend
      - **Tiered pricing** - link a discount or surcharge to a
        [custom question answer](/features/custom-questions/), so picking
        "VIP upgrade" changes the price automatically
  - type: markdown
    content: |
      ## How pricing works

      Each modifier uses one of three calculation types:

      - **Fixed amount** - a flat amount added to or taken off the total
      - **Percentage** - a percentage of the relevant items
      - **Multiplier** - scales the price by a factor, useful for surge
        pricing or member discounts

      Modifiers can be scoped to the whole order, to specific events, or to
      specific groups. A minimum-spend threshold can be set, so a discount
      only applies above a certain total.
  - type: markdown
    content: |
      ## Promo codes

      When you create a promo code, Chobble stores the code encrypted and
      matches it to the buyer's input by a blind index. The database stores
      the encrypted code and the blind index, not the readable code.

      The checkout form shows a promo-code field only when a code modifier
      exists. When the buyer enters a code, the order summary updates to show
      the discount as a named line item, like "10% off -£1.00". Promo-code
      usage is logged to the activity log when a payment completes.
  - type: markdown
    content: |
      ## Opt-in add-ons

      Add-ons let the buyer choose a quantity. You can cap an add-on's stock,
      and two buyers cannot oversell the last available unit. An add-on can be
      scoped to the whole order, to specific events, or to groups.

      Common uses include meals, parking, merchandise, workshops add-ons, or
      optional extras on a ticket.
  - type: markdown
    content: |
      ## Answer-triggered pricing

      A modifier can be linked to a [custom question answer](/features/custom-questions/).
      When the buyer picks that answer, the modifier applies automatically.
      This lets you offer pricing tiers, such as VIP upgrades, meal add-ons, or
      concessions, directly from the question.

      The answer-triggered modifier uses the same pricing engine as promo
      codes and add-ons, so stock limits, scoping, and the live running total
      all work the same way.
  - type: markdown
    content: |
      ## Live running total

      The booking form updates the running total as the buyer changes
      quantities, picks answers, or enters a promo code. Without JavaScript,
      the form submits to a summary that opens in a new tab. With JavaScript,
      the summary updates inline on every change.

      Discounts show as named line items before the total is finalised, so
      the buyer can see what each code or add-on did to the price.
  - type: markdown
    content: |
      ## Verified server-side

      Every modifier total is re-checked on the server when the payment is
      confirmed. The server re-derives the expected total from the stored
      modifier rules, never trusting the figures the browser sent. If the
      total does not match, the booking is refunded and the buyer is told.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Offer discounts and extras

      Promo codes, discount codes, and add-ons are included on every plan.
name: Promo Codes, Discount Codes & Add-ons - Chobble Tickets
---
