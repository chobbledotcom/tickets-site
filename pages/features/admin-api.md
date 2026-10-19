---
title: Admin API - Chobble Tickets
meta_title: Admin API - Chobble Tickets
meta_description: Manage events programmatically with a RESTful JSON admin API. Create, update, delete, and list events using API keys or session authentication.
permalink: /features/admin-api/
eleventyNavigation:
  key: Admin API
  parent: Platform & Integrations
  order: 4
blocks:
  - type: hero
    class: gradient
    content: |-
      # Admin API

      The admin API lets another program manage a Chobble Tickets site with an API key instead of a login. A script, spreadsheet or shop screen can list, create, change and remove listings, groups, holidays and listing options, and read a listing's attendees.
  - type: markdown
    content: |
      ## Full event management

      The admin API gives you complete CRUD control over your events:

      - **List events** - fetch all your events with attendee counts
      - **Get event** - retrieve a single event with full details
      - **Create event** - set up new events with all options including
        capacity, pricing, dates, custom fields, and more
      - **Update event** - modify any event property, with automatic slug
        uniqueness checking
      - **Delete event** - safely remove events with a confirmation step
        (you must provide the event name to confirm)
      - **Activate / deactivate** - toggle events on and off without
        deleting them

      Groups, [holidays](/features/daily-events/) and listing attributes,
      such as sizes and their options, have the same list, read, create,
      update and delete calls.
  - type: split-image
    content: |
      ## Authentication

      The admin API supports two authentication methods:

      - **API keys** - generate keys in the admin panel, then pass them as
        Bearer tokens. Keys are stored securely using HMAC hashing, so the
        raw key is never saved to the database.
      - **Session cookies** - if you're already logged in, the API accepts
        your session cookie with a CSRF token header.

      API key authentication means you can integrate with CI/CD pipelines,
      cron jobs, or any system that can make HTTP requests, with no browser
      session needed.
    figure_src: /images/screenshots/named-admin-api-key.png
    figure_alt: An API keys page showing a key named Autumn programme with its creation date and a last-used date
    figure_caption: Each key carries the name its owner gave it, and the list shows when it was created and when it was last used.
  - type: markdown
    content: |
      ## Every event option

      The API exposes the same options as the admin panel: name, capacity,
      pricing (fixed or [pay-what-you-want](/features/stripe-and-square/)),
      descriptions, dates, locations,
      [groups](/features/groups/),
      contact field selection (email, phone, address),
      [webhook URLs](/features/webhooks/),
      [daily event settings](/features/daily-events/), registration
      deadlines, transferability, hidden events, and more.

      You send JSON, you get JSON back. No form encoding or multipart
      uploads to worry about.
  - type: markdown
    content: |
      ## Attendees and attributes

      The API can read a listing's attendees, so scripts and dashboards
      can pull the same attendee data you see in the admin panel. There is
      also an attributes resource, which covers listing options such as
      sizes.

      Combined with the [public API](/features/public-api/) (which needs
      no authentication for read-only event listings), the
      [webhooks](/features/webhooks/) system, and the
      [embeddable widget](/features/embeddable-widget/), you can build
      exactly the integration you need.
  - type: markdown
    content: |
      ## Example

      An owner makes a key called "Shopfront" on the API keys page and
      copies it straight away, because the site shows it only once. A
      script then sends `GET /api/admin/listings` with the header
      `Authorization: Bearer` followed by the key, and gets back every
      listing as JSON. The same key can `POST` a new listing, which goes on
      sale at once. The full list of calls is in the [API
      documentation](https://chobbledotcom.github.io/tickets/doc.ts/index.html).

      ## Limits

      A key acts as the site's owner within the API, so anyone holding it
      can change what you sell. It cannot open the admin pages a person
      uses, including the page where keys are made, and the owner can
      withdraw it at any time. The rules for keys are published as [test
      cases](https://github.com/chobbledotcom/tickets/blob/main/specs/access/letting-another-system-in.feature).

  - type: cta
    button:
      text: Read the API Docs
      href: https://chobbledotcom.github.io/tickets/doc.ts/index.html
      variant: secondary
      size: lg
    content: |-
      ## Automate your events

      Use the admin API to manage events from scripts, dashboards, or any tool that speaks HTTP.
name: Admin API - Chobble Tickets
---
