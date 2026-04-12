---
layout: design-system-base.html
title: Email Providers - Chobble Tickets
meta_title: Email Provider Integration - Chobble Tickets
meta_description: Send ticket confirmations through your choice of Resend, Postmark, SendGrid, or Mailgun (US and EU).
permalink: /features/email-providers/
eleventyNavigation:
  key: Email Providers
  parent: Platform & Integrations
  order: 3
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: Choose your email provider
    lead: >-
      Send confirmation emails through the provider you already use, whether
      that's Resend, Postmark, SendGrid, or Mailgun (including Mailgun EU).

  - type: markdown
    content: |
      ## Your provider, your deliverability

      Rather than sending emails through a shared platform domain (which often
      lands in spam), Chobble Tickets lets you connect your own email provider
      so emails come from your domain, with your reputation.

      Supported providers:

      - **Resend** - Modern email API with great developer experience
      - **Postmark** - Known for excellent deliverability
      - **SendGrid** - Widely used, generous free tier
      - **Mailgun** - US and EU endpoints supported

      Just add your API key in the settings and the system handles sending
      automatically.

      ## Customisable email templates

      Email templates use Liquid syntax, so you can customise the subject line,
      HTML body, and plain text body of confirmation emails. Built-in template
      filters include `currency` for formatting amounts and `pluralize` for
      natural language.

      See the [email documentation](https://chobbledotcom.github.io/tickets/docs/email.ts)
      for details on templates and provider configuration.

  - type: markdown
    content: |
      ## References

      - [Resend](https://resend.com/) - email API for developers
      - [Postmark](https://postmarkapp.com/) - transactional email service
      - [SendGrid](https://sendgrid.com/) - email delivery platform
      - [Mailgun](https://www.mailgun.com/) - email API service (US and EU regions)

  - type: cta
    title: Better email delivery
    description: Use your own email provider for reliable ticket delivery.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
