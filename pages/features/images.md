---
title: Images - Chobble Tickets
meta_title: Image Uploads, Thumbnails & Attachments - Chobble Tickets
meta_description: Upload images to listings and groups with automatic WebP resizing, thumbnails, and alt text. Files are encrypted before they reach CDN storage.
permalink: /features/images/
eleventyNavigation:
  key: Images
  parent: Customising Your Site
  order: 6
blocks:
  - type: hero
    class: gradient
    content: |-
      # Images

      Upload images to your listings and groups from an image library. Each upload is resized, converted to WebP, encrypted, and served from CDN storage.
  - type: markdown
    content: |
      ## The image library

      Images live in a library in the admin panel, where each image has a
      name and alt text. One image can be attached to any number of
      listings and groups, and each listing or group can show several
      images in an order you choose.

      Alt text is stored with the image, so screen readers and search
      engines get a description wherever the image appears. Deleting an
      image removes it from storage and from every place it was used.
  - type: markdown
    content: |
      ## Automatic resizing and thumbnails

      Every upload is decoded and re-encoded to WebP using WebAssembly
      codecs. JPEG, PNG, and WebP uploads are accepted.

      Two variants are produced from each upload: a full-size image at up
      to 1,600 pixels wide for listing pages, and a thumbnail at up to
      480 pixels wide for admin tables and gallery cards. Buyers never
      download the original multi-megabyte file.
  - type: markdown
    content: |
      ## Encrypted storage

      Image files are encrypted with the server's encryption key before
      they are uploaded to CDN storage. Someone with access to the
      storage account would see only encrypted files.

      Images pair well with [Markdown descriptions](/features/markdown-descriptions/)
      for building listing pages without a page builder.
  - type: markdown
    content: |
      ## File attachments

      A listing can also carry a file attachment, such as a PDF of
      joining instructions or a hire agreement. Attachments are encrypted
      in storage the same way images are.

      Attendees download the file through a signed link that expires
      after one hour, so the link cannot be shared usefully. Each
      download is counted per attendee, so you can see who has fetched
      the file.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Images on every plan

      Image uploads and attachments are included on every plan. Managed hosting costs £50/year or £5/month.
name: Image Uploads, Thumbnails & Attachments - Chobble Tickets---
