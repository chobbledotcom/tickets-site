---
title: Refunds - Chobble Tickets
meta_title: Refunds - Chobble Tickets
meta_description: Issue a full refund for one booking or full refunds in bulk through Stripe, Square or SumUp. Partial refunds use the provider dashboard.
permalink: /features/refunds/
ticket_evidence_capture: refunded-booking
eleventyNavigation:
  key: Refunds
  parent: Selling Tickets
  order: 2
blocks:
  - type: hero
    class: gradient
    content: |-
      # Refunds

      Issue a full refund for one booking or full refunds in bulk from the admin panel. Stripe, Square or SumUp processes each refund.
  - type: split-image
    content: |
      ## One-click refunds

      Fully refund an individual booking or process full refunds for an entire
      event directly from the admin panel. When you issue a refund, the
      payment provider (Stripe, Square, or SumUp) processes it automatically, so
      there's no need to log into a separate dashboard.

      The refund undoes the sale as well as returning the money. The listing
      stops counting what the booking earned, and the customer is left owing
      nothing. A booking can only be refunded once.

      Partial refunds are not issued by Chobble Tickets. Use the payment
      provider's dashboard when only part of a payment should be returned.
    figure_src: /images/screenshots/refunded-booking.png
    figure_alt: A screenshot of one booking's money after a refund, showing a £45 sale, its payment, the income removed and the £45 handed back
    figure_caption: 'A refund undoes the sale and hands the money back, so the listing has earned nothing and the customer owes nothing. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/payments/refunding-a-booking.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## Bulk refunds

      Need to cancel an event? Process refunds for all attendees at once
      instead of handling them one by one. The system tracks refund status
      so you can see which refunds have been processed and which are
      pending.

      ## Clear records

      Refunded attendees are clearly marked in the admin panel so you can
      see at a glance who has been refunded and who hasn't, and the
      activity log records every refund for your audit trail.

      > "It's also much better for refunds as Eventbrite doesn't refund the
      > booking fee."
      >
      > - [Chris, British Bourbon Society](https://www.facebook.com/httkb/posts/pfbid0VPiUCz5UYAp8Z59LddLBw5GdGz3TA1xfErGmBhAP5dF7TisRNrXBZCadb4QP4T2Al)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Refund bookings

      Issue full refunds from the admin panel and keep the ledger in sync.
name: Refunds - Chobble Tickets
---
