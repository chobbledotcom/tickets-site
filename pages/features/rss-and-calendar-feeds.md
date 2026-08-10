---
title: RSS & Calendar Feeds - Chobble Tickets
meta_title: RSS & Calendar Feeds - Chobble Tickets
meta_description: ICS calendar and RSS feeds for your events, so attendees can subscribe in their calendar app or feed reader.
permalink: /features/rss-and-calendar-feeds/
eleventyNavigation:
  key: RSS & Calendar Feeds
  parent: Platform & Integrations
  order: 6
blocks:
  - type: hero
    class: gradient
    content: |-
      # RSS & calendar feeds

      ICS calendar and RSS feeds for your events, so attendees can subscribe in their calendar app or feed reader.
  - type: markdown
    content: |
      ## Calendar subscriptions

      Your Chobble Tickets installation publishes an ICS feed that attendees
      can subscribe to in Apple Calendar, Google Calendar, Outlook, or any
      calendar app that supports ICS. New events appear automatically,
      so there's no need for attendees to keep checking your website.

      ## RSS feed

      An RSS feed lists your upcoming events for feed readers and
      aggregators. This is useful for attendees who prefer RSS, and for
      embedding event listings on other websites or newsletters.

      ## News feed

      When your site publishes news posts, they get their own RSS feed
      alongside the events one, so a reader or an aggregator can follow
      announcements as well as dates.

      ## Staff calendar feed

      A separate calendar feed carries the bookings themselves, for staff
      rather than the public. It is switched off until you enable it.

      A staff calendar app subscribes to it with an
      [API key](/features/public-api/), which is a long secret string the
      site generates for one person, in the way a password is. Anyone who
      finds the feed's address without a key sees nothing, which is what
      separates it from the public feeds above.

      Owners and managers see every booking in it. A
      [delivery agent](/features/logistics/) sees only the jobs assigned
      to them, which is the same run sheet they get in the admin panel.

      ## Always up to date

      Both feeds update automatically when you create, modify, or remove
      events, so subscribers always see the latest information without any
      manual publishing step.

      ## Compatible with Mobilizon

      The standard ICS and RSS formats mean your Chobble Tickets
      installation works as an external source in
      [Mobilizon](https://joinmobilizon.org/), the federated event
      platform, so your events can be discoverable across the fediverse.
  - type: markdown
    content: |
      ## References

      - [RFC 5545](https://datatracker.ietf.org/doc/html/rfc5545) - iCalendar (ICS) specification
      - [RSS 2.0 specification](https://www.rssboard.org/rss-specification)
      - [Mobilizon](https://joinmobilizon.org/) - federated event platform by Framasoft
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Keep attendees informed

      Let attendees subscribe to your events via calendar or RSS.
name: RSS & Calendar Feeds - Chobble Tickets
---
