---
title: SMS Messages - Chobble Tickets
meta_title: SMS Messages - Chobble Tickets
meta_description: Text attendees from your own Android phone and number using the free SMS Gateway for Android app. Messages are encrypted in transit and replies are recorded.
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
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Text from your own number

      Sign up for managed hosting at £50/year or £5/month and connect a spare Android phone.
name: SMS Messages - Chobble Tickets---
