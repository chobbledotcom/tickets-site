---
title: Custom Redirects - Chobble Tickets
meta_title: Custom Redirects - Chobble Tickets
meta_description: Send attendees to your own thank-you page after they book. Each listing can hold one HTTPS address, or show the standard confirmation page.
permalink: /features/custom-redirects/
eleventyNavigation:
  key: Custom Redirects
  parent: Customising Your Site
  order: 5
blocks:
  - type: hero
    class: gradient
    content: |-
      # Custom redirects

      Each listing in Chobble Tickets can send people to a page of your choosing once they have booked. Leave the setting empty and they see the standard confirmation page instead.
  - type: markdown
    content: |
      ## How the redirect works

      The setting is called "Thank you URL" and sits in the advanced section
      of a listing's form. It takes one web address, which must start with
      `https://`.

      After a free booking, the attendee goes straight to that address. After
      a paid booking, the payment confirmation page shows a link to the ticket
      first, then moves on to your page after three seconds. That page also
      carries a link to your thank-you page in case the browser does not move
      on by itself.

      ## Example

      A pottery studio sells a Saturday wheel class. Its own website has a
      page listing what to wear, where to park and when to arrive. The studio
      puts that page's address in the class listing, so every buyer lands on
      it after paying, with their ticket link already shown.

      ## Setting it for every listing

      The thank-you address is one of the fields on the [listing
      defaults](/features/bulk-event-management/) page. Set it there and every
      listing using defaults sends people to the same page. Change the default
      later and those listings follow it.

      ## Limits

      The redirect only applies when an order is for one listing. When an
      attendee books several different listings in one checkout, Chobble
      Tickets shows its standard confirmation page, because the listings could
      each name a different address. The redirect does not pass booking
      details to your page, so use [webhooks](/features/webhooks/) if another
      system needs to know who booked.

      Chobble Tickets is run by Chobble CIC, a community interest company in
      Prestwich, Manchester. Its [source code is published](/features/open-source/),
      including the code for this redirect.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Thank-you redirects are part of managed hosting at £50 a year or £5 a month.
name: Custom Redirects - Chobble Tickets
---
