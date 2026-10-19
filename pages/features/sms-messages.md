---
title: SMS Messages - Chobble Tickets
meta_title: SMS Messages - Chobble Tickets
meta_description: Text attendees from your own Android phone and number using the free SMS Gateway for Android app. Messages are encrypted and replies are recorded.
permalink: /features/sms-messages/
eleventyNavigation:
  key: SMS Messages
  parent: Platform & Integrations
  order: 7
blocks:
  - type: hero
    class: gradient
    content: |-
      # SMS messages

      Text your attendees from your own Android phone and your own phone number, using the free SMS Gateway for Android app. Chobble Tickets does not charge per message.
  - type: markdown
    content: |
      ## How it works

      Chobble Tickets integrates with
      [SMS Gateway for Android](https://sms-gate.app), a free third-party
      app you install on an Android phone. When you send a text from an
      admin page, the message is relayed to that phone, and the phone
      sends it over its own SIM.

      This means texts come from your own number, and attendees can reply
      to it like any other message. Chobble Tickets adds no per-message
      charge; each text uses the phone's own mobile plan.

      By default the message travels through the gateway's free cloud
      relay at api.sms-gate.app. You can point Chobble Tickets at a
      private gateway server instead by setting a different server URL.

      ## Encrypted in transit

      The message text and the recipient's phone number are encrypted
      before they leave the server, using a passphrase of at least 12
      characters that you set in both Chobble Tickets and the phone app.
      The relay only carries ciphertext; only the phone, which holds the
      passphrase, can decrypt and send the message.

      ## Delivery reports and replies

      The gateway can call a webhook on your Chobble Tickets instance to
      report what happened to each message. Deliveries, failures, and
      inbound replies are recorded in the encrypted
      [activity log](/features/activity-logs/) against the right attendee.

      Webhook calls are verified with a signature and a timestamp, and
      duplicate events are ignored, so a retried delivery report cannot
      create a second record. Each message you send is also added to the
      attendee's contact history.
  - type: markdown
    content: |
      ## Example

      An outdoor theatre moves a show indoors at short notice. The organiser
      opens a booker's page, writes "Tonight's show has moved to the church
      hall on Mill Lane, doors at seven", and sends it. The text joins a
      queue, the spare Android phone in the box office sends it from the
      theatre's own number, and any reply is recorded against that booker.

      ## Limits

      Texts go one person at a time from each attendee's page, so this is
      not a bulk text service; [bulk email](/features/bulk-email/) covers
      messages to everyone booked. The phone must be an Android phone that
      stays switched on with signal. A booker who gave no phone number cannot
      be texted, and nothing can be written until the gateway is set up. The
      rules are published as [test
      cases](https://github.com/chobbledotcom/tickets/blob/main/specs/attendees/sending-somebody-a-text.feature).
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Text messaging comes with every hosted site, at £50 a year or £5 a month, and needs a spare Android phone.
name: SMS Messages - Chobble Tickets
---
