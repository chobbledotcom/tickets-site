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

      Chobble Tickets keeps your pictures in one image library, and any picture can appear on as many listings, groups and site pages as you like. Each upload is resized for the web and stored encrypted.
  - type: split-image
    content: |
      ## The image library

      Images live in a library in the admin panel, where each image has a
      name and alt text. One image can be attached to any number of
      listings and groups, and each listing or group can show several
      images in an order you choose.

      Alt text is stored with the image, so screen readers and search
      engines get a description wherever the image appears. Deleting an
      image removes it from storage and from every place it was used.
    figure_src: /images/screenshots/image-library.png
    figure_alt: A pottery workshop listing's Images tab listing three linked images with their thumbnails, names and alt text, beside checkboxes to reuse any library image
    figure_caption: A listing's Images tab shows the images linked to it and every other image in the library, ready to reuse.
  - type: markdown
    content: |
      ## Automatic resizing and thumbnails

      Every upload is decoded and re-encoded to WebP using WebAssembly
      codecs. JPEG, PNG, and WebP uploads are accepted. A phone photo taken
      sideways is turned upright first, using the orientation the camera
      recorded in the file, so it does not appear on its side.

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
  - type: markdown
    content: |
      ## Example

      A pottery studio takes a 6 MB photo of its wheel room on a phone and
      uploads it once, with the alt text "Six pottery wheels in a bright
      studio". It links the picture to its taster class, its weekly course
      and its homepage. Customers download a version no wider than 1,600
      pixels instead of the 6 MB original, and screen readers read the same
      description on all three pages.

      ## Limits

      Images can be up to 32 MB each and attachments up to 25 MB, by
      default. The image library needs the host's file storage switched on,
      and shows a notice until it is. Deleting a picture removes it from every page that uses
      it, so the admin area asks you to type the picture's name to confirm.

  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      The image library and file attachments come with every hosted site, at £50 a year or £5 a month.
name: Image Uploads, Thumbnails & Attachments - Chobble Tickets
---
