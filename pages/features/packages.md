---
title: Packages - Chobble Tickets
meta_title: Bundled Packages & Fixed-Price Bundles - Chobble Tickets
meta_description: Sell several listings together as one package with a bundle price, fixed quantities, per-member price overrides, and all-or-nothing booking.
permalink: /features/packages/
eleventyNavigation:
  key: Packages
  parent: Selling Tickets
  order: 10
blocks:
  - type: hero
    class: gradient
    content: |-
      # Packages

      Sell several listings together as one package. The buyer books the whole bundle at a set price, with fixed quantities of each item, in a single checkout.
  - type: markdown
    content: |
      ## What a package is

      A package is a [group](/features/groups/) of listings marked as a
      bundle. Buyers book the whole package or none of it - there is no
      picking individual items out of the bundle.

      Each member listing carries a fixed quantity, which is how many of
      that item one package includes. Booking two packages books two of
      everything.

      A hire company could sell a party package of one marquee, ten
      chairs, and one generator. A venue could sell a ticket and meal
      bundle, where every booking includes one ticket and one meal.
  - type: markdown
    content: |
      ## Package pricing

      Each member can carry its own price inside the package. A member
      with no override charges its normal listing price, a positive
      override replaces that price, and an override of zero makes the
      item free within the bundle.

      Members whose day count is customisable can also carry per-day
      price overrides, so a three-day booking of the package can cost a
      different amount per item than a one-day booking. A flat member
      override still wins over both.

      The public package page shows one bundle total. For a customisable
      package, each offered day count is shown with its own whole-bundle
      price.
  - type: markdown
    content: |
      ## Hidden members

      A package can hide its member listings, so buyers only ever see the
      package name. Hidden members do not appear on public pages, in the
      public API listing endpoints, or on tickets and confirmation
      emails, which show the package name instead.

      Members can also have [required child listings](/features/parent-child-listings/),
      such as add-ons the buyer picks per member. Capacity checks cover
      the whole bundle, so a package can only be booked when every member
      and every required child has room.
  - type: markdown
    content: |
      ## Packages in the API

      Packages are available through the public API. `GET
      /api/packages/:slug` returns the bundle's name, price, remaining
      availability, and (for a visible package) its members, and `POST
      /api/packages/:slug/book` books whole bundles with the same
      validation the web page uses.

      See the [public API page](/features/public-api/) for how API access
      works.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Sell bundles at one price

      Packages are included on every plan. Managed hosting costs £50/year or £5/month.
name: Bundled Packages & Fixed-Price Bundles - Chobble Tickets---
