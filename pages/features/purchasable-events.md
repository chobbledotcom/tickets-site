---
layout: design-system-base.html
title: Purchasable Events - Chobble Tickets
meta_title: Collect Donations & Payments Without Ticketing - Chobble Tickets
meta_description: Use Chobble Tickets for fundraising, donations, raffle ticket sales, and general payment collection without an event to attend.
permalink: /features/purchasable-events/
eleventyNavigation:
  key: Purchasable Events
  parent: Selling Tickets
  order: 6
blocks:
  - type: hero
    class: gradient
    title: Purchasable events
    lead: >-
      Collect donations, sell raffle tickets, take membership dues, or run
      any kind of payment collection without an event to attend.

  - type: markdown
    content: |
      ## Beyond ticketing

      Most ticketing platforms are built around a single assumption: someone
      buys a ticket and shows up. But plenty of payment collection doesn't
      work that way.

      With purchasable events, you can take payments for things that don't
      involve physical attendance:

      - **Fundraising collections** - accept contributions for a cause with
        a named amount or pay-what-you-want pricing
      - **Raffle ticket sales** - sell numbered entries online with quantity
        selection so supporters can buy multiple tickets at once
      - **Club dues and membership fees** - collect annual or seasonal
        payments from members without an event to attend
      - **School and PTA collections** - book fees, trip contributions,
        uniform deposits, and other group payments
      - **Community group fundraisers** - sports clubs, Scout troops,
        neighbourhood associations, and similar groups collecting money
        online
      - **Merchandise and goods** - sell items alongside or independently
        from events

      ## How it works

      When you mark an event as purchase-only, the public listing shows a
      **Buy now** button instead of the usual **Book now**, signalling that
      no attendance is involved.

      Everything else works exactly as normal: Stripe or Square processes
      the payment, the buyer gets an email confirmation, and all purchases
      appear in your admin panel with full CSV export. You can still set
      capacity limits (for example, limiting a raffle to 200 tickets), use
      custom questions to collect information, and process refunds if needed.

      ## Buying multiple at once

      Purchasable events support quantity selection, so a supporter can buy
      5 raffle tickets or contribute multiple units in a single checkout.
      Set a maximum quantity per purchase to keep things fair.

      ## Pay what you want

      For donation-style collections, enable
      [pay-what-you-want pricing](/features/stripe-and-square/) so
      supporters can contribute any amount above a minimum. This works for
      fundraisers where people want to give more than the suggested amount.

      ## Still encrypted, still yours

      Purchaser data (names, emails, and any custom question answers) is
      encrypted at rest the same as regular attendee data. There is no
      marketing to your supporters, no cross-promotion, and no platform fee
      beyond the flat annual subscription.

  - type: cta
    title: Start collecting payments
    description: Sign up for managed hosting at £50/year, or self-host for free.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
