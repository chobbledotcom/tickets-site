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

      Move a listing or event group between Chobble Tickets sites using a versioned JSON file.
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

      Referenced parent listings and groups must already exist at the destination. An import is rejected if its name is already in use or its data does not match the supported format.

      ## Checked before changes are made

      Chobble Tickets validates the complete file before applying it. The import is atomic, which means a failed import does not leave part of a listing or group behind.

      For copies within one site, [bulk event management](/features/bulk-event-management/) can duplicate a group and shift all its dates. [CSV export](/features/csv-export/) covers attendee, listing and calendar reports rather than reusable event setup.
  - type: cta
    button:
      text: Start for £5
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Keep event setup portable

      Catalogue transfer is included with managed hosting and self-hosting.
name: Event Catalogue Import and Export | Chobble Tickets
---
