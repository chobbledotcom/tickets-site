---
title: Email Templates - Chobble Tickets
meta_title: Email Templates - Chobble Tickets
meta_description: Rewrite the confirmation and notification emails Chobble Tickets sends, with placeholders for attendee details, tickets, amounts and question answers.
permalink: /features/email-templates/
eleventyNavigation:
  key: Email Templates
  parent: Customising Your Site
  order: 3
blocks:
  - type: hero
    class: gradient
    content: |-
      # Email templates

      You can rewrite the confirmation email each attendee receives and the notification email you receive after a booking. Each email has a subject line, an HTML version and a plain text version, and booking details go in through placeholders such as `{% raw %}{{ attendee.name }}{% endraw %}`.
  - type: split-image
    content: |
      ## Where to edit them

      The templates sit in the advanced settings of your site. Each form lists
      the placeholders it accepts underneath. Clearing a field puts back the
      built-in wording.
    figure_src: /images/screenshots/confirmation-email-template-editor.png
    figure_alt: Confirmation email template editor with a workshop booking subject and HTML and plain text messages using attendee and ticket variables
    figure_caption: Edit the subject, HTML message and plain text message from one settings form.
  - type: markdown
    content: |
      ## What you can put in an email

      Placeholders cover the attendee's name, email, phone, address and
      special instructions, the listing names, the ticket link, the amount
      paid and any amount still owed. A loop prints one line for each listing
      in the order, and an inner loop prints the buyer's answers to your
      [booking questions](/features/custom-questions/). Door staff, caterers
      and volunteers forwarded the email can read dietary or access needs
      without an admin login.

      The templates use Liquid, a template language created by Shopify.
      Chobble Tickets adds two filters: `currency` shows a number as money,
      and `pluralize` picks "ticket" or "tickets" to match a number.

      ## Example

      These lines in a confirmation template:

      {% raw %}
      ```liquid
      {% for entry in entries %}
      {{ entry.listing.name }}: {{ entry.attendee.quantity }} {{ entry.attendee.quantity | pluralize: "ticket", "tickets" }}, {{ entry.attendee.price_paid | currency }}
      {% endfor %}
      ```
      {% endraw %}

      prints "Pottery taster: 2 tickets, £30.00" for a buyer who booked two
      places at £15 each. The same template prints "1 ticket" for a single
      place.

      ## What the attendee also gets

      Every confirmation email carries a picture of the ticket with its QR
      code, one per listing, outside the template. Listings set to no
      check-in leave the QR code out. Your business email address is the
      reply-to address, so replies come to you.

      ## Limits

      Templates cannot show the payment reference, the payment provider or
      the time of payment. If a custom template has an error, Chobble Tickets
      sends the built-in wording instead, so the attendee still gets a
      confirmation. Emails go out through the [email
      provider](/features/email-providers/) you or your host have set up, and
      a site with no email provider sends no emails at all.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Email templates come with every hosted site, at £50 a year or £5 a month.
name: Email Templates - Chobble Tickets
---
