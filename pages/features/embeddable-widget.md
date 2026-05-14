---
layout: design-system-base.html
title: Embeddable Widget - Chobble Tickets
meta_title: Embeddable Widget - Chobble Tickets
meta_description: Drop an iframe snippet into your website to show events inline, with configurable CSP.
permalink: /features/embeddable-widget/
eleventyNavigation:
  key: Embeddable Widget
  parent: Customising Your Site
  order: 4
blocks:
  - type: hero
    class: gradient
    lead: Drop an iframe snippet into your existing website to show your events inline, with configurable Content Security Policy headers.
    name: Embeddable widget
  - type: markdown
    content: |
      ## Events on your website

      Add your events to any website by pasting a small HTML snippet. The
      widget displays your event listings in an iframe that automatically
      resizes to fit the content, so attendees can browse and book without
      leaving your site.

      ## Configurable CSP

      The widget supports Content Security Policy (CSP) configuration, so
      you can control which domains are allowed to embed your events. This
      prevents unauthorised sites from embedding your booking pages.

      ## No custom code needed

      If you don't want to build a custom integration with the
      [public API](/features/public-api/), the embeddable widget gives you
      a working solution with just a single line of HTML.

      See the [embed documentation](https://chobbledotcom.github.io/tickets/docs/embed.ts)
      for widget setup and configuration details.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Embed your events

      Show your events on your existing website with one line of HTML.
name: Embeddable Widget - Chobble Tickets
---
