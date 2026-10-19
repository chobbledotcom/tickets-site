---
title: Apple & Google Wallet - Chobble Tickets
meta_title: Apple Wallet and Google Wallet Tickets - Chobble Tickets
meta_description: Attendees can save Chobble Tickets tickets to Apple Wallet or Google Wallet. The pass carries the event details and the QR code staff scan at the door.
permalink: /features/apple-wallet/
eleventyNavigation:
  key: Apple Wallet
  parent: Platform & Integrations
  order: 2
blocks:
  - type: hero
    class: gradient
    content: |-
      # Apple Wallet and Google Wallet tickets

      Attendees can save a Chobble Tickets ticket to Apple Wallet on an iPhone or Google Wallet on an Android phone. The saved pass carries the same QR code that door staff scan at check-in.
  - type: markdown
    content: |
      ## What the attendee sees

      Once wallet passes are set up, each ticket page shows an "Add to Apple
      Wallet" or "Add to Google Wallet" button. One tap saves the ticket to
      the phone, and an Apple Wallet pass also appears on a paired Apple
      Watch.

      The pass shows the listing name, date, location, number of tickets,
      price paid and the [check-in QR code](/features/qr-code-check-ins/).
      Door staff scan it the same way as a ticket on screen or on paper.

      ## When event details change

      Apple Wallet checks with the ticket site about once a day and updates
      the pass with the latest details. An attendee can also pull down on the
      pass in the Wallet app to update it straight away.

      Google Wallet passes do not update. A Google Wallet pass is a copy made
      at the moment the attendee saves it. If you move the date or venue, the
      attendee needs to remove the pass and add it again from their ticket
      page.

      ## Setting it up

      On Chobble's managed hosting, Apple Wallet and Google Wallet are already
      set up, so the buttons appear on every ticket page with nothing to
      configure. The admin guide inside your site names the pass type and
      issuer ID in use.

      You can use your own credentials instead, in the advanced settings.
      Apple Wallet needs five values from an Apple Developer account, which
      Apple charges for each year, and Google Wallet needs three values from a
      Google Cloud account. A self-hosted site needs these before the buttons
      appear, and works as normal without them.

      ## Limits

      Google Wallet passes go out of date if the listing changes after the
      attendee saves them, so tell attendees to re-add the pass after a date
      or venue change. The code that builds both kinds of pass is in the
      [published source](https://github.com/chobbledotcom/tickets/tree/main/src/features/wallet).
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Wallet passes are switched on for every managed site, at £50 a year or £5 a month.
name: Apple & Google Wallet Integration - Chobble Tickets
---
