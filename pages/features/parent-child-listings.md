---
title: Parent/Child Listings - Chobble Tickets
meta_title: Required Child Listings - Chobble Tickets
meta_description: A parent listing can require buyers to choose child listings - required extras, options, or bundled items - before they can check out.
permalink: /features/parent-child-listings/
eleventyNavigation:
  key: Parent/Child Listings
  parent: Selling Tickets
  order: 9
blocks:
  - type: hero
    class: gradient
    content: |-
      # Parent/child listings

      A parent listing can require buyers to choose child listings before they can check out. Useful for required extras, bundled items, and any booking where one thing requires another.
  - type: markdown
    content: |
      ## When one booking needs another

      Some bookings do not stand alone. A festival pass might need a camping
      pitch. A course booking might need a materials kit. A ticket might
      require a meal add-on. Chobble Tickets lets you mark a listing as a
      parent, and require buyers to choose one or more child listings before
      they can check out.

      The parent and child are both ordinary listings, each with its own
      price, capacity, dates, questions, and description. The parent/child
      link is a relationship between them, configured from the listing edit
      page.

      ## How buyers choose

      When a buyer books a parent, the booking form shows a child selector
      underneath. They pick quantities of the child listings that, together,
      match the parent's quantity. A live "X of Q chosen" hint shows whether
      they have picked enough.

      If only one child is bookable, it auto-selects, so the buyer does not
      have to do anything. Children that do not fit the chosen date or
      duration are disabled, so a buyer cannot pick an incompatible option.

      ## Children are only seen through the parent

      A child listing is not advertised on its own. It does not appear in
      public event listings, feeds, galleries, share links, QR codes, or the
      JSON API entry points. Buyers only encounter a child through its
      parent's booking page.

      A parent with no bookable children left shows as sold out, because
      there is nothing to choose.

      ## Single-level only

      A child cannot also be a parent. This keeps the booking flow simple
      and avoids deeply nested choices. A daily child inherits the parent's
      date, and a multi-day child must match the parent's duration.

      ## On the attendee record

      The attendee detail page shows the relationship: a parent row lists
      the children it "includes", and a folded child row shows it is an
      "add-on under" the parent. The shared order token ties them together.

      The [public JSON API](/features/public-api/) advertises a parent's
      required children on its detail and availability endpoints, and the
      booking endpoint accepts a `children` array alongside the parent
      quantity.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Bookings that come as a set

      Require child listings at checkout, without a separate add-on flow.
name: Required Child Listings - Chobble Tickets---
