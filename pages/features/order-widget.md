---
title: Order Widget - Chobble Tickets
meta_title: Order Widget - Chobble Tickets
meta_description: Add one JavaScript file to your existing website to turn its links into add-to-cart buttons, with a floating cart that hands off to the hosted booking page.
permalink: /features/order-widget/
eleventyNavigation:
  key: Order Widget
  parent: Customising Your Site
  order: 8
blocks:
  - type: hero
    class: gradient
    content: |-
      # Order widget

      Add one JavaScript file to your existing website and its links become add-to-cart buttons. A floating cart shows a running total, and checkout hands off to your hosted booking page.
  - type: markdown
    content: |
      ## One script, your own buttons

      The widget is a single file served from your Chobble Tickets site
      at /order.js, added to any website with one script tag. Any link on
      your site marked with a `data-add-listing` attribute, pointing at a
      listing's booking page, becomes an add-to-cart button.

      An optional `data-add-quantity` attribute sets how many are added
      per click. The link's normal address stays in place, so visitors
      without JavaScript follow it straight to the booking page instead.

      ## A floating cart

      As visitors add items, a floating cart button appears with the item
      count. Opening it shows each line with quantity controls, line
      totals, and a subtotal, with a note that the final total, fees, and
      availability are confirmed at checkout.

      The cart is stored in the visitor's own browser and holds only
      listing references and quantities, no personal data. Pressing
      Continue sends the visitor to the hosted booking page with the
      chosen items and quantities filled in, where payment and attendee
      details are collected as normal.

      ## Controlled by a domain allowlist

      The widget is off by default. You switch it on and list the domains
      allowed to use it; a wildcard entry such as `*.example.com` covers
      every subdomain. Requests from other domains receive no listing
      data.

      ## Widget or iframe

      The order widget is separate from the
      [embeddable widget](/features/embeddable-widget/). The iframe embed
      shows your listings inline on a page, while the order widget turns
      your own site's existing links and buttons into a cart. The two can
      run on the same website and share the same domain allowlist.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Sell from your own site

      Sign up for managed hosting at £50/year or £5/month and add the order widget to the website you already have.
name: Order Widget - Chobble Tickets
---
