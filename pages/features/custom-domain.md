---
title: Custom Domain - Chobble Tickets
meta_title: Custom Domain for Your Ticket Site - Chobble Tickets
meta_description: Sell tickets from your own domain, such as tickets.example.co.uk. Hosted sites also get a free tix.chobble.net address, and both keep working together.
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

      A Chobble Tickets site can sell tickets from a domain name you own, such as tickets.example.co.uk. Chobble does not charge extra for it, and a hosted site also has a free tix.chobble.net address that keeps working alongside it.
  - type: markdown
    content: |
      ## Sites running on their own domains

      [Tom Butterworth Gardening and Education](https://www.tbgardening.co.uk)
      sells places on gardening workshops from tbgardening.co.uk, and
      [Chalkie's School for Dogs](https://www.chalkiesdogs.co.uk) sells dog
      training classes from chalkiesdogs.co.uk. [Crumpsall Folk
      Club](https://tickets.crumpsallfolkclub.co.uk) keeps its main website
      at crumpsallfolkclub.co.uk and sells club night tickets from the
      subdomain tickets.crumpsallfolkclub.co.uk. Chobble hosts all three
      ticket sites.

      ## Start with a free address

      A hosted site can register a free address ending in `.tix.chobble.net`
      from its advanced settings. You choose the first part, using lowercase
      letters, numbers and hyphens, and it works straight away with no DNS
      changes. Once registered, the name cannot be changed, so choose it with
      care.

      ## Adding your own domain

      You need a domain name bought from a domain seller, which is a separate
      cost from Chobble's price.

      1. Type your domain name into the custom domain section of the advanced
         settings and save it.
      2. The page shows a CNAME record, a one-line DNS setting that sends
         visitors from your domain to your ticket site. Add it at the company
         that manages your domain's DNS, which is usually the seller.
      3. Come back and press "Validate custom domain".

      Validation checks that the domain points at your site, then sets up a
      free security certificate so the address uses HTTPS. It usually takes a
      few minutes, and a newly bought domain can take up to a day.

      ## Which address appears on tickets

      Ticket links, QR codes and emails use one address. Chobble Tickets uses
      your custom domain once it has passed validation, then your
      tix.chobble.net address if you have one. Until validation passes,
      nothing breaks, because links keep using the address that already
      works.

      Visitors can reach the site through either address at any time. The
      site includes a public homepage, event listings, news and a contact
      page, described on the [public website page](/features/your-public-website/).

      ## Self-hosted sites

      A self-hosted copy of Chobble Tickets on Bunny uses the same custom
      domain settings. Docker and other self-hosted deployments set their
      domain at the hosting provider or web server instead. The [guide to
      hosting your own ticket site](/guide/choosing-a-ticket-platform/host-your-own-ticket-site/)
      compares how other ticketing providers handle domains.

      ## Limits

      Chobble Tickets does not sell domain names or manage DNS, so the
      domain's own settings stay with the company you bought it from.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Managed hosting costs £50 a year or £5 a month, with custom domains and every other feature included.
name: Custom Domain - Chobble Tickets
---
