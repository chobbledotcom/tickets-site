---
title: Your Public Website - Chobble Tickets
meta_title: Your Public Website - Chobble Tickets
meta_description: Enable a public website with a homepage, listings, news, content pages and an optional contact page, or switch it off and use direct booking links.
permalink: /features/your-public-website/
ticket_evidence_capture: page-anybody-can-read
eleventyNavigation:
  key: Your Public Website
  parent: Customising Your Site
  order: 7
blocks:
  - type: hero
    class: gradient
    content: |-
      # Your public website

      A Chobble Tickets site can provide a homepage, listings, news, content pages and an optional contact page. If you already have a website, you can switch the public site off and share booking links directly.
  - type: split-image
    content: |
      ## Pages you write, alongside the listings

      Write a page, give it a name and choose the web address it lives at.
      There is no separate step to publish it: it is at that address from the
      moment you save it, and the site's navigation offers it beside Home and
      Listings.
    figure_src: /images/screenshots/oakfield-public-website.png
    figure_alt: A screenshot of a public site page called Directions, reached from the site's own navigation alongside Home and Listings
    figure_caption: 'A page is live at the address its owner chose as soon as it is written, for a visitor who never signs in. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/pages/writing-the-pages-people-read.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## What a page holds

      A page's content is written in Markdown, and it carries an ordered
      list of items: sub-pages, listings, and groups.

      These items form a navigable menu, so a page about workshops can
      link straight to the workshop listings and to further sub-pages.
      You choose the order the pages are offered in, and you can take one
      down by typing its name to confirm.

      ## Appearance

      You set the site title, which appears as the main heading on every
      public page, and can upload a header image. The homepage text and
      contact page text are written in Markdown.

      The site renders in a [light or dark theme](/features/light-and-dark-themes/),
      and a toggle controls whether links are underlined. For anything
      beyond that, you can write your own CSS, which is served to
      visitors at /custom.css. The site can also run on your own
      [custom domain](/features/custom-domain/).

      ## Contact form

      The contact page appears when it has contact content or an enabled form.
      The form can be switched on or off from the admin panel. Spam protection is available through
      Botpoison, a service that makes each sender's browser solve a small
      computational puzzle before the form submits.

      ## Or switch it all off

      If you only want Chobble Tickets for bookings, you can turn the
      public site off. Public pages then redirect away, but direct ticket
      links keep working, so you can link to bookings from your existing
      website.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## A website included

      Sign up for managed hosting at £50/year or £5/month and get a public website alongside your ticketing.
name: Your Public Website - Chobble Tickets
---
