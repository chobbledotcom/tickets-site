---
layout: design-system-base.html
title: Email Templates - Chobble Tickets
meta_title: Email Templates - Chobble Tickets
meta_description: Customise confirmation emails with Liquid syntax, including built-in currency and pluralise filters.
permalink: /features/email-templates/
eleventyNavigation:
  key: Email Templates
  parent: Customising Your Site
  order: 3
blocks:
  - type: hero
    class: gradient
    lead: Customise confirmation emails with Liquid syntax, including built-in currency and pluralise filters.
    name: Email templates
  - type: markdown
    content: |
      ## Full control over emails

      Customise the subject line, HTML body, and plain text body of your
      confirmation emails using Liquid template syntax. You can include
      attendee details, event information, ticket URLs, and QR codes
      exactly where you want them.

      ## Built-in template filters

      The template engine includes useful filters like `currency` for
      formatting amounts (so `1000` becomes `£10.00`) and `pluralize` for
      natural language (so `1 ticket` and `3 tickets` are both correct
      automatically).

      ## Works with your email provider

      Templates work with whichever
      [email provider](/features/email-providers/) you have configured
      (Resend, Postmark, SendGrid, or Mailgun). The
      template is rendered before sending, so the provider just delivers
      the final HTML.

      See the [email documentation](https://chobbledotcom.github.io/tickets/docs/email.ts)
      for template variables and filter details.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Branded emails

      Customise your confirmation emails to match your brand.
name: Email Templates - Chobble Tickets
---
