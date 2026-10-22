---
title: Hidden Pages - Chobble Tickets
meta_title: Hidden Pages - Chobble Tickets
meta_description: Tick Hidden in the page editor and the menus stop offering a page while it stays at its address. Anyone with the link can still read it.
permalink: /features/hidden-pages/
eleventyNavigation:
  key: Hidden Pages
  parent: Customising Your Site
  order: 8
blocks:
  - type: hero
    class: gradient
    content: |-
      # Hidden pages

      Tick Hidden on a page and the menus stop offering it, while it stays at
      its address. Anyone with the link can still read it.
  - type: markdown
    content: |
      ## Off the menus is not taken down

      Writing a page and advertising it in the menus are two different
      decisions. The page editor has a Hidden box. Tick it and no menu offers
      the page, but a visitor reading its address sees it as normal.

      A hidden page also stays out of the site's sitemap, so search engines
      are never pointed at it. Finding the page means having its address.

      ## What organisers use it for

      A directions page meant only for the people who have its link. A page
      that is written but not ready to sit in the menus. A handout address
      you print on a poster. The page stays readable for those who have the
      address, and stays out of the way for everyone else.

      Hidden pages work the same on managed hosting and on a self-hosted
      copy, like every other feature.
  - type: markdown
    content: |
      ## Where the idea came from

      [Chalkie's Dogs](https://www.chalkiesdogs.co.uk) suggested hidden pages,
      and they now ship on every hosted and self-hosted site. The
      [credits page](/credits/) tells that story. Pages themselves are part
      of [your public website](/features/your-public-website/), and the
      [customising guide](/features/customising-your-site/) collects the
      other ways to make the site yours.
  - type: markdown
    content: |
      ## The spec behind it

      The feature's behaviour is published as a product spec, in the same
      words the tests use:
      [keeping a page off the menus](https://github.com/chobbledotcom/tickets/blob/main/specs/pages/keeping-a-page-off-the-menus.feature).
      The [source repository](https://github.com/chobbledotcom/tickets) holds
      the rest.
  - type: cta
    button:
      text: Sign Up
      href: https://tix.chobble.com/listings
      variant: primary
      size: lg
    content: |-
      ## Included, like everything else

      Hidden pages are part of every hosted or self-hosted site. There is no
      tier to buy and nothing to switch on.
name: Hidden Pages - Chobble Tickets
---
