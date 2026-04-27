---
layout: design-system-base.html
title: Stripe & Square - Chobble Tickets
meta_title: Stripe & Square Payments - Chobble Tickets
meta_description: Accept payments via Stripe or Square with fixed pricing or pay-what-you-want, and automatic refunds.
permalink: /features/stripe-and-square/
eleventyNavigation:
  key: Stripe & Square
  parent: Selling Tickets
  order: 0
blocks:
  - type: hero
    class: gradient
    title: Stripe & Square payments
    lead: >-
      Accept card payments through Stripe or Square with fixed pricing or
      pay-what-you-want, and process refunds directly from the admin panel.

  - type: markdown
    content: |
      ## Two payment providers, your choice

      Chobble Tickets supports both Stripe and Square as payment providers.
      Connect your existing account by adding your API keys in the settings,
      and the platform handles checkout, payment confirmation, and refund
      processing automatically.

      ## Flexible pricing

      Set a fixed ticket price, or enable pay-what-you-want so attendees can
      choose how much to pay above a minimum amount. This is ideal for
      community events, fundraisers, or any situation where you want to let
      people contribute what they can.

      Free events are supported too. Set the price to zero and attendees
      can register without entering payment details.

      ## Automatic refunds

      When you process a refund from the admin panel, the payment provider
      refund happens automatically. There is no need to log into Stripe or
      Square separately. The refund is handled in one place.

  - type: markdown
    content: |
      ## References

      - [Stripe UK pricing](https://stripe.com/gb/pricing) - 1.5% + 20p per transaction
      - [Square UK pricing](https://squareup.com/gb/en/pricing)

  - type: cta
    title: Start accepting payments
    description: Connect Stripe or Square and start selling tickets in minutes.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
