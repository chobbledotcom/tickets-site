---
layout: design-system-base.html
title: Email Templates - Chobble Tickets
meta_title: Email Templates - Chobble Tickets
meta_description: Customise confirmation emails with Liquid syntax, including built-in currency and pluralize filters.
permalink: /features/email-templates/
eleventyNavigation:
  key: Email Templates
  parent: Features
  order: 23
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Email Templates
    lead: >-
      Customise confirmation emails with Liquid syntax, including built-in
      currency and pluralize filters.

  - type: markdown
    content: |
      ## Full Control Over Emails

      Customise the subject line, HTML body, and plain text body of your
      confirmation emails using Liquid template syntax. Include attendee
      details, event information, ticket URLs, and QR codes exactly where
      you want them.

      ## Built-in Template Filters

      The template engine includes useful filters like `currency` for
      formatting amounts (so `1000` becomes `£10.00`) and `pluralize` for
      natural language (so `1 ticket` and `3 tickets` are both correct
      automatically).

      ## Works with Your Email Provider

      Templates work with whichever [email provider](/features/email-providers/)
      you've configured - Resend, Postmark, SendGrid, or Mailgun. The
      template is rendered before sending, so the provider just delivers
      the final HTML.

      See the [email documentation](https://chobbledotcom.github.io/tickets/docs/email.ts)
      for template variables and filter details.

  - type: cta
    title: Branded Emails
    description: Customise your confirmation emails to match your brand.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/join
      variant: secondary
      size: lg
---
