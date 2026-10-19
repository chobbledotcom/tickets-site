---
title: Bulk Event Management - Chobble Tickets
meta_title: Bulk Event Management and Listing Defaults | Chobble Tickets
meta_description: Set shared defaults, duplicate event groups with shifted dates, and activate or deactivate several listings at once.
permalink: /features/bulk-event-management/
eleventyNavigation:
  key: Bulk Event Management
  parent: Managing Events
  order: 6
blocks:
  - type: hero
    class: gradient
    content: |-
      # Bulk event management and listing defaults

      Listing defaults let you set common settings once and have every new listing follow them. Group tools copy a whole set of listings with new names and dates, or take the whole set off sale in one step.
  - type: markdown
    content: |
      ## Listing defaults

      The listing defaults page holds seven settings: bookable days, minimum
      days' notice, maximum days ahead, whether a listing needs
      [delivery and collection details](/features/logistics/), a [webhook
      address](/features/webhooks/), a [thank-you
      address](/features/custom-redirects/) and whether the listing is hidden.
      Leave any of them as "No default" to keep deciding it per listing.

      Each listing has one "Use defaults" switch. While it is on, the fields
      that have a default are hidden on that listing's form and follow the
      defaults page. Change a default and every listing using defaults
      changes with it, while a listing with the switch off keeps its own
      values.

      ## Example

      A hire business rents equipment by the day. It takes bookings on
      weekdays only, with two days' notice, and sends every booking to the
      same Zapier webhook. It sets those three
      defaults once. Each new hire item it adds starts with the same rules,
      and when it later opens on Saturdays, one change to the bookable days
      default updates every item.
  - type: split-image
    content: |
      ## Duplicate a complete group

      A group and its listings can be copied together. The copy tool can replace text in their names and shift the dates by a set number of days.

      This supports a new term of classes, another festival day or a repeated programme with the same prices and booking rules. Links between the copied group and its copied listings remain in place.
    figure_src: /images/screenshots/group-bulk-actions.png
    figure_alt: Duplicate group form previewing new Spring Printmaking listing names and shifted dates
    figure_caption: Preview every new name and date before duplicating the group.
  - type: markdown
    content: |
      ## Taking a group off sale

      Each [group](/features/groups/) has a bulk actions page. "Deactivate
      Group" takes every listing in the group off sale at once, which suits
      the end of a season or a cancelled run of events. "Reactivate Group"
      puts every listing back on sale, and the page offers it once every
      listing in the group is off sale.

      The [duplicate events page](/features/duplicate-events/) covers copying
      single listings and what a copy leaves out. The [catalogue transfer
      tool](/features/catalogue-import-export/) copies listings between
      separate Chobble Tickets sites.

      ## Limits

      Defaults cover the seven settings above, not prices or capacity, so
      those are still set per listing or carried over by duplicating. Bulk
      status changes work on a group, so listings outside a group are taken
      off sale one at a time. The rules for which group actions appear are
      published as [test
      cases](https://github.com/chobbledotcom/tickets/blob/main/specs/catalogue/choosing-a-bulk-action-for-a-group.feature).
  - type: cta
    button:
      text: Start for £5
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Manage repeated events

      Bulk tools and listing defaults are included with managed hosting and self-hosting.
name: Bulk Event Management and Listing Defaults | Chobble Tickets
---
