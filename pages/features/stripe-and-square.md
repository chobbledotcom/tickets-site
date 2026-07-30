---
title: Stripe, Square & SumUp - Chobble Tickets
meta_title: Stripe, Square & SumUp Payments - Chobble Tickets
meta_description: Accept payments via Stripe, Square, or SumUp with fixed pricing or pay-what-you-want, and automatic refunds.
permalink: /features/stripe-and-square/
ticket_evidence_capture: payment-provider-choice
eleventyNavigation:
  key: Stripe, Square & SumUp
  parent: Selling Tickets
  order: 0
blocks:
  - type: hero
    class: gradient
    content: |-
      # Stripe, Square & SumUp payments

      Accept card payments through Stripe, Square, or SumUp with fixed pricing or pay-what-you-want, and process refunds directly from the admin panel.
  - type: split-image
    content: |
      ## Choose one provider

      Select Stripe, Square or SumUp for paid bookings. Credentials for the
      other providers remain saved when you switch, and the settings identify
      whether a configured key accepts test or live payments.
    figure_src: /images/screenshots/payment-provider-choice.png
    figure_alt: A screenshot of the payment provider settings, showing Stripe chosen from None, Square, Stripe and SumUp, and a saved Stripe test key
    figure_caption: 'Choose one active provider and keep saved credentials available when switching. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/payments/payment-provider-choice.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## Three payment providers, your choice

      Chobble Tickets supports Stripe, Square and SumUp as payment providers,
      with one active provider per site. Connect your existing account by
      adding its credentials in the settings. Credentials for the other
      providers remain saved when you switch. The settings also identify
      whether a configured key accepts test or live payments.

      Paid bookings continue to the provider's hosted checkout. Chobble
      Tickets records payment confirmation and refund results.

      ## Flexible pricing

      Set a fixed ticket price, or enable pay-what-you-want so attendees can
      choose how much to pay above a minimum amount. This is ideal for
      community events, fundraisers, or any situation where you want to let
      people contribute what they can.

      Free events are supported too. Set the price to zero and attendees
      can register without entering payment details.

      ## Automatic refunds

      Chobble Tickets can issue a full refund for one booking or full refunds
      in bulk. The selected payment provider processes each refund and reports
      the result. Partial refunds must be handled in the provider's dashboard.
  - type: markdown
    content: |
      ## References

      - [Stripe UK pricing](https://stripe.com/gb/pricing) - 1.5% + 20p per transaction
      - [Square UK pricing](https://squareup.com/gb/en/pricing)
      - [SumUp UK pricing](https://www.sumup.com/en-gb/pricing/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Start accepting payments

      Connect Stripe, Square, or SumUp and start selling tickets in minutes.
name: Stripe, Square & SumUp Payments - Chobble Tickets
---
