---
layout: design-system-base.html
title: Email Providers - Chobble Tickets
meta_title: Email Provider Integration - Chobble Tickets
meta_description: Send ticket confirmations through Resend, Postmark, SendGrid, or Mailgun (US and EU). You choose your email provider.
permalink: /features/email-providers/
eleventyNavigation:
  key: Email Providers
  parent: Features
  order: 3
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Choose Your Email Provider
    lead: >-
      Send confirmation emails through the provider you already use. Resend,
      Postmark, SendGrid, or Mailgun - including Mailgun EU.

  - type: markdown
    content: |
      ## Your Provider, Your Deliverability

      Rather than sending emails through a shared platform domain (which often
      lands in spam), Chobble Tickets lets you connect your own email provider.
      Emails come from your domain, with your reputation.

      Supported providers:

      - **Resend** - Modern email API with great developer experience
      - **Postmark** - Known for excellent deliverability
      - **SendGrid** - Widely used, generous free tier
      - **Mailgun** - US and EU endpoints supported

      Just add your API key in the settings. The system handles sending
      automatically.

      ## Customisable Email Templates

      Email templates use Liquid syntax, so you can customise the subject line,
      HTML body, and plain text body of confirmation emails. Built-in template
      filters include `currency` for formatting amounts and `pluralize` for
      natural language.

      See the [email documentation](https://chobbledotcom.github.io/tickets/doc.ts/docs/email.ts)
      for details on templates and provider configuration.

  - type: cta
    title: Better Email Delivery
    description: Use your own email provider for reliable ticket delivery.
    button:
      text: Get Started
      href: https://tix.chobble.com
      variant: secondary
      size: lg
---
