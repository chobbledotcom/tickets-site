---
title: Catalogue Import and Export - Chobble Tickets
meta_title: Event Catalogue Import and Export | Chobble Tickets
meta_description: Export an event or group as versioned JSON and import it into another Chobble Tickets site with prices, memberships, packages and parent links.
permalink: /features/catalogue-import-export/
eleventyNavigation:
  key: Catalogue Import and Export
  parent: Managing Events
  order: 7
blocks:
  - type: hero
    class: gradient
    content: |-
      # Catalogue import and export

      Any listing or group in Chobble Tickets can be saved as one file and loaded into another Chobble Tickets site, which re-creates it with its prices, group memberships and package settings. It is how an organiser moves what they sell between hosts, including away from Chobble.
  - type: split-image
    content: |
      ## What the file contains

      A catalogue export contains the selected listing or group and the settings needed to recreate it. This includes prices, group memberships, package price overrides and parent references.

      The same file format is used for export and import. This provides a portable copy that can be stored separately from the site or passed to another Chobble Tickets host.

    figure_src: /images/screenshots/catalogue-import.png
    figure_alt: Catalogue import form with the Summer Sessions JSON export selected and ready to import
    figure_caption: Select an exported JSON file and check it before importing.
  - type: markdown
    content: |
      ## What stays behind

      Catalogue files do not contain attendees, payments or financial history. Images and attachments are also excluded, so personal records and uploaded files are not moved as part of a catalogue transfer.

      Referenced parent listings and groups must already exist at the destination. An import is rejected if its name is already in use or its data does not match the supported format, and the page names the field at fault.

      Moving attendees and payment history needs a full [database backup](/features/backups/) rather than a catalogue file.

      ## Example

      An organiser runs a "Summer Sessions" group of six workshops on a
      self-hosted copy of Chobble Tickets and decides to move to Chobble's
      managed hosting. They choose Export on the group's page and download a
      `.json` file named after the group. On the new site they choose Import
      under Groups and upload the file, and the group and its six listings
      are re-created with the same prices. The move works the same way in the
      other direction, or to any other host running Chobble Tickets.

      ## Why names, not numbers

      The file joins listings, groups and parents by name rather than by
      internal number. Numbers differ from one site to the next, while names
      survive the move. Each file carries a format version, so a file from an
      incompatible version is refused rather than loaded wrongly.

      ## Checked before changes are made

      Chobble Tickets validates the complete file before applying it. The import is atomic, which means a failed import does not leave part of a listing or group behind.

      ## Import from markdown frontmatter

      Catalogue content does not have to start as JSON. It can be kept as
      markdown frontmatter in a repository and imported through the command
      line. That suits a catalogue that is versioned and edited alongside the
      site's source.

      For copies within one site, [bulk event management](/features/bulk-event-management/) can duplicate a group and shift all its dates. [CSV export](/features/csv-export/) covers attendee, listing and calendar reports rather than reusable event setup.
  - type: cta
    button:
      text: Start for £5
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Catalogue import and export works the same on managed hosting and self-hosted sites.
name: Event Catalogue Import and Export | Chobble Tickets
---
