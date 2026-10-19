---
title: Duplicate Events - Chobble Tickets
meta_title: Duplicate Events - Chobble Tickets
meta_description: Copy one listing with its price, capacity and settings, or copy a whole group of listings with new names and every date moved by the same number of days.
permalink: /features/duplicate-events/
eleventyNavigation:
  key: Duplicate Events
  parent: Managing Events
  order: 5
blocks:
  - type: hero
    class: gradient
    content: |-
      # Duplicate events

      Copy one event, or duplicate a complete group and shift all its dates together.
  - type: split-image
    content: |
      ## Review the whole group first

      Replace part of every copied event name and shift all dates by one offset.
      The live preview shows each original and replacement before you create the
      new group.
    figure_src: /images/screenshots/duplicate-event.png
    figure_alt: Duplicate Group form changing Spring Printmaking to Autumn and previewing six shifted dates
    figure_caption: Review every copied name and date before duplicating the group.
  - type: markdown
    content: |
      ## Copying one listing

      The Duplicate button on a listing opens a new listing form filled in
      with the original's price, capacity, booking fields, group and other
      settings. The name is left blank, because every listing on a site needs
      its own name. Fill it in, change anything that differs and save.

      The listing's image, any attached file and its assigned booking
      questions are not copied. Add those to the new listing separately.

      ## Copying a whole group

      Duplicate Group copies every listing in a [group](/features/groups/)
      into a new group in one step. You give the new group a name, and can
      replace part of every listing name and move every date by the same
      number of days. Links between listings in the group, such as a
      [required child listing](/features/parent-child-listings/), point at the
      new copies rather than the originals.

      ## Example

      A group called "Workshops" holds "Spring Workshop" on 16 April 2026.
      The organiser copies it as "Autumn Workshops", replaces "Spring" with
      "Autumn" and moves the dates on by seven days. The new group holds
      "Autumn Workshop" on 23 April 2026, and the original group is
      unchanged.

      ## Limits

      Names must be unique across a site. If any copied name would match an
      existing listing or group, Chobble Tickets refuses the whole copy before
      saving anything, so the organiser never has half a group. The example
      above comes from the [published test
      case](https://github.com/chobbledotcom/tickets/blob/main/specs/catalogue/copy-a-group-of-listings.feature)
      that checks this behaviour.

      [Bulk event management](/features/bulk-event-management/) covers shared
      listing defaults and group status changes. To copy listings to another
      site, use [catalogue import and export](/features/catalogue-import-export/).
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Copying listings and groups is included in managed hosting at £50 a year or £5 a month.
name: Duplicate Events - Chobble Tickets
---
