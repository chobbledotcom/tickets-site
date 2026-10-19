---
title: Markdown Descriptions - Chobble Tickets
meta_title: Formatted Event Descriptions - Chobble Tickets
meta_description: Format event descriptions with headings, bold text, links and lists, using a visual editor or plain Markdown. Raw HTML is shown as text, never run.
permalink: /features/markdown-descriptions/
eleventyNavigation:
  key: Markdown Descriptions
  parent: Customising Your Site
  order: 2
blocks:
  - type: hero
    class: gradient
    content: |-
      # Formatted event descriptions

      Listing descriptions in Chobble Tickets can have headings, bold and italic text, links, lists and quotes. You format them with toolbar buttons in a visual editor, and Chobble Tickets saves the result as Markdown, a plain-text way of marking up formatting.
  - type: markdown
    content: |
      ## The visual editor

      Each formatted field opens with a toolbar for bold, italic, links,
      headings, bulleted and numbered lists, and quotes. Ctrl+B and Ctrl+I
      work as they do in a word processor.

      You can also type the Markdown marks yourself. A line starting with
      `- ` becomes a list, `# ` becomes a heading and `[text](address)`
      becomes a link, and each one converts as you type.

      ## Writing Markdown directly

      The "Edit markdown" button under a field shows the plain text. This is
      where you write anything the toolbar does not cover, such as a table.
      A field that already holds formatting the visual editor cannot keep
      opens as plain Markdown, so nothing is rewritten without you seeing it.

      ## Which fields take formatting

      Formatting works in listing descriptions, terms and conditions, the
      homepage text and the contact page text. Booking questions, extra site
      pages and [news posts](/features/your-public-website/) take it too, so a
      question can include a link to your full policy.

      ## Example

      A description written as:

      ```
      **Bring:** an apron and a packed lunch.

      - Doors open 9.30am
      - Class starts 10am
      ```

      shows "Bring:" in bold, followed by a two-item list. Each listing can
      also carry an [image](/features/images/) in JPEG, PNG or WebP format,
      shown on the booking page and in the public list of listings.

      ## Limits

      Chobble Tickets shows any HTML typed into a description as text rather
      than running it, so embedded videos, forms and scripts do not work in
      descriptions. A link must be a web, email or phone address
      (`https://`, `http://`, `mailto:` or `tel:`) or a page on your own
      site. The rules live in the [published
      source](https://github.com/chobbledotcom/tickets/blob/main/src/shared/markdown.ts).
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      The visual editor comes with every hosted site, at £50 a year or £5 a month.
name: Markdown Descriptions - Chobble Tickets
---
