---
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
    content: |-
      # Embeddable widget

      Each listing's admin page gives you a short code to paste into your own website, which shows that listing's booking form inside your page. Customers book and pay without leaving your site, and the form resizes itself to fit.
  - type: markdown
    content: |
      ## Two ways to embed

      Each listing page in the admin area shows two embed codes, and you need
      only one. The Embed Script is a single `<script>` tag that builds the
      form and resizes it as the content changes, and is the recommended
      choice. The Embed Iframe suits a website that blocks outside scripts,
      or a designer who wants full control of the frame.

      ## Who has used it

      Ben, the webmaster for [Jersey Girls](https://www.jersey-girls.co.uk), an ice cream business,
      added Chobble Tickets booking to a static website, a site made of plain
      files with no database or plugins of its own. Chobble hosts the Jersey
      Girls ticket site, and Ben's review is quoted below.

      ## Events on your website

      The embedded form works on any website page where you can paste HTML.

      ## Choosing which sites can embed

      The "embed hosts" setting lists the websites allowed to show your
      booking forms. Chobble Tickets turns that list into a browser rule, a
      Content Security Policy, which stops any other site from framing your
      booking pages.

      ## How the widget behaves

      Your configured header image hides when a page is embedded in another
      site, so the embed shows booking content without a repeated banner. The
      site menu shows on booking pages unless the page is embedded.

      The embed cart is styled with an adopted stylesheet, which means its
      styles are part of the page itself rather than a separate file. A strict
      content security policy (CSP, the browser rule that says which outside
      sources a page may load) on your host cannot block the cart's styling.

      The widget can also add a [package](/features/packages/) to the cart,
      so a bundle can be sold from your own site in one step.

      ## Limits

      With no embed hosts listed in settings, any website can show your forms,
      so add your own domains, such as `example.com, *.mysite.org`, to stop
      other sites embedding them. The embed shows a booking form, not your
      whole site, so the homepage, news and contact pages stay on
      your [public website](/features/your-public-website/). Some website
      builders do not allow script tags, which is when the iframe code is
      needed.

      ## No custom code needed

      If you don't want to build a custom integration with the
      [public API](/features/public-api/), the embeddable widget works
      with a single line of HTML.

      See the [embed documentation](https://chobbledotcom.github.io/tickets/docs/embed.ts)
      for widget setup and configuration details.

      > "I dropped it into a static site without much hassle and had proper
      > ticketing functionality without having to reinvent the wheel."
      >
      > - [Ben, the webmaster for Jersey Girls](https://www.jersey-girls.co.uk)

      [Read more reviews &rarr;](/reviews/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Embed codes come with every hosted site, at £50 a year or £5 a month.
name: Embeddable Widget - Chobble Tickets
---
