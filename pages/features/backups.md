---
title: Backups & Restore - Chobble Tickets
meta_title: Backups & Restore - Chobble Tickets
meta_description: Download your whole database as a single zip, restore it from the admin panel, and know that updates refuse to run without a backup from the last hour.
permalink: /features/backups/
eleventyNavigation:
  key: Backups & Restore
  parent: Platform & Integrations
  order: 8
blocks:
  - type: hero
    class: gradient
    content: |-
      # Backups and restore

      Download your whole database as a single zip file, restore it from the admin panel, and know that updates refuse to deploy unless a backup was taken in the last hour.
  - type: markdown
    content: |
      ## One zip, everything included

      A backup exports every database table into a single zip file, with
      one SQL file per table and a manifest listing each table's row
      count. The site owner can download it from the admin panel and keep
      it anywhere.

      Attendee personal data stays [encrypted](/features/encrypted/)
      inside the backup, exactly as it is stored in the database. A copy
      of the backup file on its own does not reveal attendee details.

      ## Restore from the admin panel

      To restore, the owner uploads a backup zip and confirms by typing a
      confirmation phrase. Chobble Tickets shows what the backup contains
      and warns if it was made under a different database schema before
      anything is changed.

      Each site records which version of the code it is running. A backup
      carries that version with it, so after a restore Chobble Tickets
      shows the recorded version and the matching code can be redeployed,
      returning data and code to the same point. A restore also refuses
      to load a backup made by a newer version than the one running.

      ## Updates require a fresh backup

      The update button refuses to deploy a new version unless a backup
      of that site's database was taken within the last hour. This means
      there is always a recent restore point from before any update.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Your data, downloadable

      Sign up for managed hosting at £50/year or £5/month. Your database is yours to download at any time.
name: Backups & Restore - Chobble Tickets---
