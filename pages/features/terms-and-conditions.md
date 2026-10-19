---
title: Terms & Conditions - Chobble Tickets
meta_title: Terms & Conditions - Chobble Tickets
meta_description: Show your terms on the booking page and require a ticked box before any order is sent. Groups of listings can carry their own terms.
permalink: /features/terms-and-conditions/
eleventyNavigation:
  key: Terms & Conditions
  parent: Selling Tickets
  order: 3
blocks:
  - type: hero
    class: gradient
    content: |-
      # Terms and conditions

      Chobble Tickets can show your terms on the booking page with a box beside them, and the booking cannot be sent until the box is ticked. One set of terms covers the whole site, and a group of listings can have its own terms instead.
  - type: split-image
    content: |
      ## How the agreement works

      Write your terms in the "Terms and Conditions" box in your site's
      settings. From then on every booking page shows them, with a box the
      customer must tick before the page will send the order. Clear the box
      in settings and the requirement goes away.

      One tick covers the whole order. A customer booking a workshop and a
      mug together agrees once, and both are booked.
    figure_src: /images/screenshots/workshop-terms-checkout.png
    figure_alt: Wheel-throwing taster workshop checkout filled for Maya Patel with two places and the workshop terms agreement selected
    figure_caption: Show the terms at checkout and require agreement before the booking can continue.
  - type: markdown
    content: |
      ## Different terms for different events

      A [group](/features/groups/) of listings can carry its own terms, which
      replace the site-wide terms on that group's booking page. A venue could
      use its standard terms for gigs and a separate group with a liability
      waiver for climbing sessions. The terms box accepts
      [formatting](/features/markdown-descriptions/), so it can hold headings,
      lists and a link to a longer policy.

      ## Choosing what to ask for

      Each listing has its own contact fields: email, phone, postal address
      and special instructions. Turn on only the ones that listing needs. A
      free community talk might ask for a name and email, while a delivered
      hire booking also asks for an address.

      Special instructions gives the customer a free-text box for dietary
      needs, access needs or anything else you should know. If a listing does
      not ask for an email address, the attendee is not emailed their ticket,
      and the listing form warns you of this.

      ## Where this is tested

      The terms box, the single agreement for a mixed order and the page with
      no terms are each a case in the [published terms
      tests](https://github.com/chobbledotcom/tickets/blob/main/specs/bookings/agreeing-to-the-terms-before-booking.feature).
      Chobble Tickets does not write terms for you, so the wording and its
      legal effect are the organiser's to decide.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Booking terms come with every hosted site, at £50 a year or £5 a month.
name: Terms & Conditions - Chobble Tickets
---
