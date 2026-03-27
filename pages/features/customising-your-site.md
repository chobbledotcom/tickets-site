---
layout: design-system-base.html
title: Customising Your Site - Chobble Tickets
meta_title: Customising Your Site - Chobble Tickets
meta_description: Use your own domain, choose themes, customise emails, embed widgets, and make your ticketing site match your brand.
permalink: /features/customising-your-site/
eleventyNavigation:
  key: Customising Your Site
  parent: Features
  order: 3
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Customising your site
    lead: >-
      Use your own domain, choose themes, customise emails, embed widgets,
      and make your ticketing site match your brand.

  - type: markdown
    content: |
      ![The settings page with options for header image, payment provider, themes, and more](/images/screenshots/settings.png)

  - type: features
    items:
      - icon: "hugeicons:globe-02"
        title: '<a href="/features/custom-domain/">Custom domain</a>'
        description: Get a host-provided subdomain instantly, then add your own custom domain whenever you're ready.
      - icon: "hugeicons:paint-brush-01"
        title: '<a href="/features/light-and-dark-themes/">Light & dark themes</a>'
        description: Built-in public site with light and dark theme options, so your booking pages match your brand.
      - icon: "hugeicons:edit-01"
        title: '<a href="/features/markdown-descriptions/">Markdown descriptions</a>'
        description: Write event descriptions in Markdown with header image uploads, so your events look great without a page builder.
      - icon: "hugeicons:mail-edit-01"
        title: '<a href="/features/email-templates/">Email templates</a>'
        description: Customise confirmation emails with Liquid syntax, including built-in currency and pluralise filters.
      - icon: "hugeicons:code"
        title: '<a href="/features/embeddable-widget/">Embeddable widget</a>'
        description: Drop an iframe snippet into your website to show events inline, with configurable CSP.
      - icon: "hugeicons:link-03"
        title: '<a href="/features/custom-redirects/">Custom redirects</a>'
        description: Send attendees to a custom URL after booking, perfect for thank-you pages or post-purchase instructions.

  - type: cta
    title: Make it yours
    description: Sign up for managed hosting at £50/year, or browse the full technical documentation.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
