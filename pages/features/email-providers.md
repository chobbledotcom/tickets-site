---
title: Email Providers - Chobble Tickets
meta_title: Email Provider Integration - Chobble Tickets
meta_description: Send Chobble Tickets booking emails through Resend, Postmark, SendGrid or Mailgun (US or EU), from your own address, with a test send to check the setup.
permalink: /features/email-providers/
eleventyNavigation:
  key: Email Providers
  parent: Platform & Integrations
  order: 3
blocks:
  - type: hero
    class: gradient
    content: |-
      # Choose your email provider

      Chobble Tickets sends booking emails through an email delivery company rather than from its own server. Five are supported: Resend, Postmark, SendGrid, Mailgun (US) and Mailgun (EU).
  - type: split-image
    content: |
      ## Connecting a provider

      In the advanced settings, pick the provider, paste in the API key it
      gives you and enter the address your emails should come from, such as
      tickets@yourvenue.org. The key cannot be read back after saving, so
      nobody with access to the settings page can copy it. Each change is
      written to the [activity log](/features/activity-logs/).

      After saving, a "Send Test Email" button sends a message to your
      business email address. If it fails, the page shows the provider's own
      error message, which usually names the problem, such as a wrong key or
      a sending address the provider has not approved yet.
    figure_src: /images/screenshots/mailgun-eu-settings.png
    figure_alt: An email settings form with Mailgun (EU) selected as the provider, a masked API key and a tickets@oakfieldevents.org sender address
    figure_caption: The organiser picks the provider, its region and the address tickets are sent from. The saved API key is shown masked rather than in plain text.
  - type: markdown
    content: |
      ## Why a delivery company is needed

      An ordinary email account is blocked after a few hundred messages,
      because sending many at once looks like spam. Delivery companies are
      built to send in bulk from your own domain. Their charges are separate
      from Chobble's price, so check each one's allowance against how many
      emails you send.

      Mailgun (EU) uses Mailgun's European region rather than its US one.

      ## What gets sent

      After each booking, the attendee gets a confirmation email with a
      picture of their ticket and its QR code, and you get a notification
      with the booking details. You can rewrite both with [email
      templates](/features/email-templates/). [Bulk email](/features/bulk-email/)
      to past attendees also goes through your provider.

      ## Without a provider

      Email is optional. When neither you nor your host has set up an email
      provider, the site sends no emails, and bookings, payments and check-in
      work as normal. Attendees then reach their ticket from the confirmation
      page after booking. A host can set up one provider for every site it
      runs, and the admin guide names it when it has. Bulk email always needs
      your own provider, so marketing from one site cannot get other sites
      on the same host marked as spam.

      ## Providers

      - [Resend](https://resend.com/)
      - [Postmark](https://postmarkapp.com/)
      - [SendGrid](https://sendgrid.com/)
      - [Mailgun](https://www.mailgun.com/), with US and EU regions
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Email provider support comes with every hosted site, at £50 a year or £5 a month.
name: Email Provider Integration - Chobble Tickets
---
