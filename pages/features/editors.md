---
title: Editors - Chobble Tickets
meta_title: Editor Accounts Without Booking Access - Chobble Tickets
meta_description: Invite an editor who can write your listings and site content but cannot decrypt attendee data. Useful for SEO help, copywriters, and agencies.
permalink: /features/editors/
ticket_evidence_capture: editor-listings-without-takings
eleventyNavigation:
  key: Editors
  parent: Managing Events
  order: 3.5
blocks:
  - type: hero
    class: gradient
    content: |-
      # Editor accounts

      An editor is a login that can write your content but cannot see your bookings. Useful when someone helps with your SEO, descriptions, or images and has no reason to see customer data.
  - type: markdown
    content: |
      ## Content access only

      Editors can create and edit listings and groups, and edit your
      [public website](/features/your-public-website/): the homepage,
      contact page, and content pages. That is the whole job, so that is
      the whole login.

      Editors have no access to the attendee lists, the
      [ledger](/features/ledger/), the settings, API keys, or the
      deliveries run sheet. Links that would normally open a booking
      detail page take an editor to the edit form instead.

      ## Not hidden, undecryptable

      Attendee personal data in Chobble Tickets is
      [encrypted](/features/encrypted/), and decrypting it requires a data
      key. An editor account is never issued one.

      This is stronger than hiding pages. Even if an editor reached a
      booking record, their session could not decrypt the personal data
      in it.

      ## Inviting an editor

      Invite an editor by username from the [users](/features/users/) page,
      the same way as owners, managers, and agents. The invite link is
      single use, expires after 7 days, and the editor sets their own
      password when they join.

      This suits an SEO consultant rewriting your event descriptions, a
      copywriter, a photographer uploading [images](/features/images/), or
      a web agency that maintains your site. When the work is done, the
      owner removes the account, which ends any session it still has open.

      ## Example

      A theatre company hires a freelance copywriter to rewrite its autumn
      season listings. The owner invites the copywriter as an editor, who
      rewrites twelve listing descriptions and the homepage. The copywriter
      sees how many places each show has booked, but no names, emails or
      takings, and the owner removes the login once the season is live.

      ## What else an editor cannot change

      An editor cannot change where people's details are sent. The webhook
      address on a listing is hidden from editors everywhere, including in
      [catalogue exports](/features/catalogue-import-export/), so an editor
      cannot point new bookings at an address of their own. This rule is one
      of the published [editor test
      cases](https://github.com/chobbledotcom/tickets/blob/main/specs/access/what-an-editor-can-do.feature).
  - type: split-image
    content: |
      ## A money-free listing view

      An editor can see each listing's status and booked-place count while
      working on it. The listing view does not show ticket income, costs or
      profit.
    figure_src: /images/screenshots/editor-listings-without-takings.png
    figure_alt: A screenshot of an editor's listings table, showing the Pottery listing's status, booked-place count and ticket count with no income, cost or profit columns
    figure_caption: 'An editor sees the listing and booked-place count, but no ticket income, costs or profit. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/access/what-an-editor-can-do.feature">(src)</a></small>'
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Editor logins are part of every hosted site, at £50 a year or £5 a month.
name: Editor Accounts Without Booking Access - Chobble Tickets
---
