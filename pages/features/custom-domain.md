---
layout: design-system-base.html
title: Custom Domain - Chobble Tickets
meta_title: Custom Domain - Chobble Tickets
meta_description: Get a nice URL instantly with a host-provided subdomain, then upgrade to your own custom domain whenever you're ready.
permalink: /features/custom-domain/
eleventyNavigation:
  key: Custom Domain
  parent: Customising Your Site
  order: 0
blocks:
  - type: hero
    class: gradient
    title: Custom domain
    lead: >-
      Get a nice URL straight away with a host-provided subdomain, then
      add your own custom domain whenever you're ready.

  - type: markdown
    content: |
      ## A nice URL from day one

      When you sign up for managed hosting, you can choose a
      host-provided subdomain like **yourname.tix.chobble.net** straight
      away, with no DNS changes needed. It's a permanent, readable URL that
      replaces the default Bunny CDN address, so you can start sharing
      your ticketing site immediately.

      When you're ready, you can add your own custom domain (like
      **tickets.yourbusiness.com**) by pointing a CNAME record at your
      installation. Both addresses work at the same time, along with the
      original Bunny script URL, so if anything goes wrong with your
      custom domain your site stays accessible.

      ## Three URLs, all active at once

      - **Host-provided subdomain** - choose a name and get
        yourname.tix.chobble.net instantly, no configuration required
      - **Your own custom domain** - point a CNAME record at your
        installation whenever you're ready to upgrade
      - **Bunny script URL** - the underlying edge script address always
        works as a fallback

      All three resolve to the same installation. There's no downtime
      switching between them and no need to pick just one.

      ## Built-in public website

      Chobble Tickets comes with a public-facing website out of the box. It
      lists your events, handles bookings, and displays ticket information -
      all under your domain, with event descriptions supporting Markdown
      formatting and header images.

      You can configure terms and conditions that attendees must agree to
      before booking, set configurable contact fields (email, phone, postal
      address), and add a custom thank-you URL or use the default
      confirmation page.

      The site also publishes ICS calendar and RSS feeds, so attendees can
      subscribe to your events in their calendar app or feed reader, and you
      can customise the homepage and contact page content directly from the
      admin panel.

  - type: cta
    title: Get a nice URL today
    description: Choose your host-provided subdomain and start selling tickets under your own brand.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
