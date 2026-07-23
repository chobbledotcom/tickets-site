---
title: Custom Domain - Chobble Tickets
meta_title: Custom Domain - Chobble Tickets
meta_description: Managed and Bunny-hosted sites can use a host subdomain and validated custom domains. Other self-hosted deployments can configure domains at the host.
permalink: /features/custom-domain/
eleventyNavigation:
  key: Custom Domain
  parent: Customising Your Site
  order: 0
blocks:
  - type: hero
    class: gradient
    content: |-
      # Custom domain

      Managed and Bunny-hosted sites can use a host-provided subdomain and validated custom domains. Other self-hosted deployments configure domains through their host.
  - type: markdown
    content: |
      ## A nice URL from day one

      When you sign up for managed hosting, you can choose a
      host-provided subdomain like **yourname.tix.chobble.net** straight
      away, with no DNS changes needed. It's a permanent, readable URL that
      replaces the default Bunny CDN address, so you can start sharing
      your ticketing site immediately.

      On a Bunny-hosted deployment, you can add your own custom domain (like
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

      All three can resolve to the same Bunny-hosted installation. Docker and
      other self-hosted deployments can use a domain configured through their
      hosting provider or reverse proxy instead.

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
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Get a nice URL today

      Choose your host-provided subdomain and start selling tickets under your own brand.
name: Custom Domain - Chobble Tickets
---
