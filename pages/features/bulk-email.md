---
title: Bulk Email - Chobble Tickets
meta_title: Bulk Email - Chobble Tickets
meta_description: Send email campaigns to attendee segments through your own email provider, with a preview step, saved templates, and a public unsubscribe page.
permalink: /features/bulk-email/
eleventyNavigation:
  key: Bulk Email
  parent: Managing Events
  order: 15
blocks:
  - type: hero
    class: gradient
    content: |-
      # Bulk email

      Send email campaigns to segments of your attendees through your own email provider, with a preview step before anything goes out, saved templates, and a public unsubscribe page.
  - type: markdown
    content: |
      ## Choose who receives it

      Each campaign targets a segment of your attendees. You can email
      everyone who has ever booked, attendees of active listings,
      attendees of listings that have not happened yet, attendees of one
      specific listing, or a single attendee.

      The listing and single-attendee targets are reachable from the
      relevant admin pages, so you can start an email from the listing
      or attendee you are already looking at.
  - type: split-image
    content: |
      ## Preview before sending

      Sending is a two-step process. You compose the email, then Chobble
      Tickets shows a preview with the rendered message, the recipient
      count, and how many recipients will be skipped because they have
      unsubscribed.

      Your draft is saved between the compose and preview steps, encrypted
      with your account's key. You can also save subject and body pairs as
      reusable templates for future campaigns.
    figure_src: /images/screenshots/bulk-email-preview.png
    figure_alt: A mobile bulk email preview for Saturday's Fun Run showing the audience, subject, recipient count, and weather update
    figure_caption: Check the audience, recipient count, subject, and rendered message before anything is sent.
  - type: markdown
    content: |
      ## Unsubscribe and contact history

      Every marketing email includes an unsubscribe link. The link leads to
      a public page where the recipient can unsubscribe, resubscribe, or ask
      for their contact record to be deleted, without logging in.

      Unsubscribed recipients are excluded from marketing sends
      automatically. Chobble Tickets also keeps a per-contact history
      showing how many times each person has been contacted, when, and
      with what subject line, plus a private notes field. The preview page
      uses this history to show how often the audience has already been
      contacted.
  - type: markdown
    content: |
      ## Sent through your own provider

      Bulk email sends through the
      [email provider](/features/email-providers/) you configure: Resend,
      Postmark, SendGrid, or Mailgun. Messages are sent in batches using
      each provider's batch endpoint, and the send report shows how many
      emails were attempted and whether any batch failed.

      Because the emails come from your own provider account and your own
      sending address, its delivery records stay in that account. If no
      provider is configured, the preview can open a prepared message in your
      email program with recipients placed in BCC, or show the address list for
      copying.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Email your attendees

      Sign up for managed hosting at £50/year or £5/month and send campaigns through your own email provider.
name: Bulk Email - Chobble Tickets
---
