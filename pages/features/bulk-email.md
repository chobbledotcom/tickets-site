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
      specific listing, everyone booked on one date of a listing sold
      date by date, or a single attendee.

      A date's own group is reached from that date on the listing's
      attendee list. A booking covering several days belongs to each day
      it covers, so a hall booked Friday to Sunday hears about Saturday.

      The listing, date and single-attendee targets are reachable from
      the relevant admin pages, so you can start an email from the
      listing, date or attendee you are already looking at.
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
      ## Promotions and news about a booking

      You mark a campaign as a promotion or leave it as news. A promotion
      skips anyone who has asked not to hear from you, and the preview says
      how many people that is. A promotion with nobody left to write to is
      refused rather than sent to no one.

      A message that is not a promotion is news about something the person
      booked, so it reaches everyone whose booking left an email address,
      whether or not they unsubscribed. A moved start time, a change of
      room or a cancelled session reaches the whole list.

      You choose which contact fields a listing collects, and an email
      address is one you can leave out. A listing that does not ask for one
      has nowhere to send these messages, so ask for an email on any listing
      whose attendees you may need to write to.

      A paid listing taking payment through
      [Square](/features/stripe-and-square/) has to ask for an email
      whatever you decide here, because Square's checkout will not open
      without one.

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
