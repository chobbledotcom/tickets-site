---
layout: design-system-base.html
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
    title: Admin API
    lead: >-
      A RESTful JSON API for managing your events programmatically. Create,
      update, list, and delete events with API key authentication, so you
      can automate your workflow and build custom integrations.

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

      Every change is recorded in the
      [activity log](/features/activity-logs/), so you have a full audit
      trail of programmatic actions alongside manual ones.

  - type: markdown
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
      ## What's next

      Attendee management endpoints are coming next, with read, edit, and
      export operations available via the API, just like you can for events
      today.

      Combined with the [public API](/features/public-api/) (which needs
      no authentication for read-only event listings), the
      [webhooks](/features/webhooks/) system, and the
      [embeddable widget](/features/embeddable-widget/), you can build
      exactly the integration you need.

  - type: cta
    title: Automate your events
    description: Use the admin API to manage events from scripts, dashboards, or any tool that speaks HTTP.
    button:
      text: Read the API Docs
      href: https://chobbledotcom.github.io/tickets/doc.ts/index.html
      variant: secondary
      size: lg
---
