---
title: Built-in Admin Guide - Chobble Tickets
meta_title: Built-in Admin Guide - Chobble Tickets
meta_description: Every Chobble Tickets site has a help guide inside its admin area, with over 200 questions and answers on listings, payments, refunds, email and check-in.
permalink: /features/admin-guide/
eleventyNavigation:
  key: Built-in Admin Guide
  parent: Managing Events
  order: 8
blocks:
  - type: hero
    class: gradient
    content: |-
      # Built-in admin guide

      Every Chobble Tickets site has a help guide inside its own admin area, at `/admin/guide`. It answers over 200 questions about running the site, grouped into sections such as listings, payments, refunds, email and check-in.
  - type: split-image
    content: |
      ## Questions and answers in one place

      Each answer sits under a question you can open and close, such as "What
      happens when someone books a paid ticket?" or "How do I refund one
      attendee?". The whole guide is one page, so it can be read from top to
      bottom or opened at a single answer.
    figure_src: /images/screenshots/admin-guide-listings.png
    figure_alt: Mobile admin guide with an answer about standard and daily listings expanded
    figure_caption: Open an answer while you work, without leaving your ticket site.
  - type: markdown
    content: |
      ## What the guide covers

      The guide has 49 sections. They run from getting started and setting up
      listings, through payments, refunds and ticket check-in, to email
      templates, custom domains, backups, webhooks and the APIs. The payments
      section explains how to find a Stripe secret key or a Square location ID,
      step by step.

      Some answers change to match your site. If the host has set up email
      sending for you, the email section names the provider and the address
      your confirmations come from.

      ## Links from the page you are on

      Admin pages that have a matching guide section show a guide link at the
      bottom. The link opens the guide at that section, so help on refunds
      opens at the refunds answers.

      ## Who can read it

      The full guide is for owners and managers. [Editors](/features/editors/),
      who write listings and site content but cannot see bookings, get a help page
      that covers text formatting only.

      ## Where the answers come from

      The guide is part of the Chobble Tickets source code, which is
      [published in full](/features/open-source/). It ships in the same
      software updates as the features it describes.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Managed hosting costs £50 a year or £5 a month, with the guide and every other feature included.
name: Built-in Admin Guide - Chobble Tickets
---
