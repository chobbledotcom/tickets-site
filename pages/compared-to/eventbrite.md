---
competitor_key: eventbrite
title: Eventbrite Alternative
meta_title: Open Source & Cheaper Eventbrite Alternative | Chobble Tickets
meta_description: Compare Chobble Tickets and Eventbrite on organiser and buyer fees, event discovery, attendee marketing, payments and ticketing features.
permalink: /compared-to/eventbrite/
eleventyNavigation:
  key: vs Eventbrite
  parent: Compared To
provider_facts:
  name: Eventbrite
  kind: ticketing
  calculator_keys:
    - eventbrite
  last_reviewed: "2026-08-08"
  registration_country: united-states
  ethical_basis:
    - not-documented
  per_ticket_platform_fee: per-transaction-percentage-plus-fixed
  managed_pricing: per-sale
  white_label: not-documented
  custom_domain: not-documented
  public_website: marketplace-pages
  self_hosting: not-offered
  source_code: proprietary
  agent_instructions: not-reviewed
  local_dev_runtime: not-reviewed
  local_dev_source: not-reviewed
  local_dev_reload: not-reviewed
  event_marketplace: built-in
  attendee_cross_marketing: provider-content-and-events
  established: 2006
  public_api: included
  seating_plans: included
  summary: "A large ticketing marketplace charging 6.95% + £0.59 per paid ticket in the UK, with built-in event discovery."
  notes:
    established: "Eventbrite was founded in 2006 in San Francisco (Wikipedia, checked 11 August 2026)."
    registration_country: "Eventbrite, Inc. is a Delaware corporation with its principal place of business at 95 Third Street, San Francisco, California. Its privacy policy names UK and Irish subsidiaries: Eventbrite UK Limited (Bristol) and Eventbrite Operations (IE) Limited (Cork). Checked 8 August 2026."
    ethical_basis: "Eventbrite is a for-profit Delaware corporation, and its privacy policy names Bending Spoons S.p.A. as its parent company. No charity, co-operative, community-interest or B Corp structure is claimed on the pages checked."
    per_ticket_platform_fee: "For the United Kingdom, Eventbrite charges 6.95% + £0.59 per sold ticket with no separate payment-processing fee; for the United States it is 3.7% + $1.79 per ticket plus 2.9% of the order. Free events carry no fees. Checked 8 August 2026."
    managed_pricing: "Organisers publish events for free and pay fees per paid ticket sold; publishing requires no subscription. An optional Eventbrite Premium subscription costs £59/month in the UK, and custom plans are negotiated for large or complex events."
    white_label: "No white-label offering is described on the pricing or features pages checked. Customisable event pages are page design within Eventbrite's marketplace."
    custom_domain: "No custom-domain feature is described on the pages checked; event pages are hosted on Eventbrite's own domains within its marketplace."
    public_website: "Organisers get hosted event listings inside Eventbrite's discovery marketplace. Eventbrite describes its marketplace as reaching 4.7 million events and 89 million monthly users. Checked 8 August 2026."
    self_hosting: "Eventbrite is a hosted marketplace. No self-hosting option is described on the pages checked."
    source_code: "Eventbrite publishes no platform source code and makes no open-source claim."
    event_marketplace: "Eventbrite runs a public events directory browsable by place and category. Its help centre states that a public event is shown in the Eventbrite public events directory, on major search engines and partner sites, and that a private event is not."
    attendee_cross_marketing: "The privacy policy states that Eventbrite may send electronic communications marketing or advertising the Services themselves or events on the Services, and may use inferences to target advertising or customise recommendations, including on behalf of organisers."
blocks:
  - type: hero
    class: gradient
    content: |-
      # Chobble Tickets vs Eventbrite

      Eventbrite is the biggest name in event ticketing. This page compares it with Chobble Tickets, a small open source alternative.
  - type: markdown
    content: |
      ## Open source & cheaper Eventbrite alternative

      Chobble Tickets is a white label ticketing platform made in the UK by a
      community interest company, so profit cannot be paid out to
      shareholders, and its source is published under the AGPL-3.0-only
      licence for anyone to read, fork, or run as their own copy.
      Eventbrite is closed source and does not publish its code.

      Eventbrite charges 6.95% + £0.59 per ticket in the UK and markets other
      organisers' events to your attendees. Chobble Tickets charges £50/year
      or £5/month with no per-ticket platform fee, and sends no marketing to
      your attendees.
  - type: markdown
    content: |
      ## Eventbrite fees comparison

      [Eventbrite](https://www.eventbrite.co.uk) charges a percentage plus a fixed fee per ticket, and their
      pricing has changed multiple times over the years (generally trending
      upward), so for a £15 ticket you might lose £1-2 per sale to the
      platform.

      Chobble Tickets is a flat £50/year or £5/month, with [no per-ticket platform fee](/features/no-per-ticket-fees/),
      so the maths is simple: if you sell more than a few dozen tickets
      a year, Chobble Tickets is cheaper.
  - type: markdown
    content: |
      > "Eventbrite takes £275 per event, but Chobble is £87.50. Sure, I have
      > to pay £50 a year for Chobble, but that cost is absorbed in less than
      > the first event. It's literally paying for itself on the first event
      > and still saving nearly £100."

      [Read more reviews &rarr;](/reviews/)
  - type: include
    file: price-comparator.html
  - type: markdown
    content: |
      ## Feature comparison

      Eventbrite is a massive platform with features Chobble Tickets doesn't
      have, and vice versa. The comparison below sets out the differences:

      <table class="comparison-table">
      <thead>
      <tr>
      <th scope="col">Feature</th>
      <th scope="col">Eventbrite</th>
      <th scope="col">Chobble Tickets</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <th scope="row">Online ticket sales with payment processing via Stripe</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Apple Pay and Google Pay at checkout (via Stripe)</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">QR code scanning for check-in at the door</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Email confirmations to attendees after booking</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row"><a href="/features/bulk-email/">Bulk email</a> to ticket holders with updates before and after the event</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Event capacity limits</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Free event support with no payment setup required</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Refund processing from the admin panel</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Embeddable ticket widgets for your own website</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">API access for custom integrations</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Custom questions on the registration form</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Event grouping into collections for multi-event bookings</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row">Multiple ticket types per event: use event groups with shared capacity limits to create VIP, general admission, early bird, and other tiers with different prices</th>
      <td data-label="Eventbrite">Included</td>
      <td data-label="Chobble Tickets">Included</td>
      </tr>
      <tr>
      <th scope="row"><strong>Event discovery marketplace</strong></th>
      <td data-label="Eventbrite"><a href="https://www.eventbrite.com/organizer/features/sell-tickets/">90 million+ active ticket buyers</a> browsing Eventbrite for events, which can drive organic sales you wouldn't get on your own</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Built-in email marketing</strong></th>
      <td data-label="Eventbrite">send campaigns to attendees and followers with up to 10,000 daily sends on <a href="https://www.eventbrite.com/organizer/pricing/">Pro</a>, including audience segmentation and automated event reminders. Chobble Tickets sends <a href="/features/bulk-email/">bulk email</a> to attendee segments through your own email provider, but has no follower list and no automatic reminders</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Social media ad tools</strong></th>
      <td data-label="Eventbrite">launch Facebook and Instagram ad campaigns directly from Eventbrite with audience targeting and <a href="https://www.eventbrite.co.uk/blog/ds00-the-surprising-roi-of-retargeting-for-events/">retargeting</a> (Eventbrite claim 6x average ROI on retargeting campaigns)</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Hidden ticket tiers</strong></th>
      <td data-label="Eventbrite">ticket types hidden behind access codes or time-limited availability windows for presales and invite-only access</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Reserved seating</strong></th>
      <td data-label="Eventbrite">design interactive venue maps with assigned seating sections and let attendees pick their seats</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Timed entry ticketing</strong></th>
      <td data-label="Eventbrite">time-slot-based ticket distribution for museums, tours, and similar events</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Waitlists</strong></th>
      <td data-label="Eventbrite">built-in waitlists for sold-out events, with automatic notifications when places open up</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Scheduled payouts</strong></th>
      <td data-label="Eventbrite">receive advance payments on customised schedules before your event occurs</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>AI-powered event creation</strong></th>
      <td data-label="Eventbrite">automated tools for generating event descriptions and building event pages</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Organiser mobile app</strong></th>
      <td data-label="Eventbrite">dedicated iOS/Android app for managing events, scanning check-ins, and monitoring sales on the go</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>App marketplace</strong></th>
      <td data-label="Eventbrite"><a href="https://www.eventbrite.com/apps/">100+ third-party integrations</a> including Zoom, Mailchimp, Salesforce, Zapier, HubSpot, and more</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Multi-currency support</strong></th>
      <td data-label="Eventbrite">sell in different currencies for international events across nearly 180 countries</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Virtual event support</strong></th>
      <td data-label="Eventbrite">integrations with Zoom, livestreaming tools, and online event hosting</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Collections</strong></th>
      <td data-label="Eventbrite">group related events for easier discovery and cross-promotion</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Conditional logic questions</strong></th>
      <td data-label="Eventbrite">follow-up registration questions that appear based on previous answers</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Attendee self-service transfers</strong></th>
      <td data-label="Eventbrite">attendees can change ticket type, transfer to a different event date, or reassign to another person themselves</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Post-event surveys</strong></th>
      <td data-label="Eventbrite">built-in NPS scoring and follow-up surveys after events</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Lineup feature</strong></th>
      <td data-label="Eventbrite">dedicated artist profiles with auto-syndication to <a href="https://www.eventbrite.com/blog/press/newsroom/lineup-tool-helps-music-venues-reach-more-fans/">Spotify, Bandsintown, and Google</a></td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>"See Who's Going"</strong></th>
      <td data-label="Eventbrite">social proof feature showing which friends are attending an event</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Multi-language support</strong></th>
      <td data-label="Eventbrite">platform available in <a href="https://www.eventbrite.com/help/en-us/articles/364490/how-to-change-the-language-settings-for-your-event/">multiple languages</a> for international audiences</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>On-site mobile box office</strong></th>
      <td data-label="Eventbrite">sell tickets and merchandise in person with credit card processing via the organiser app</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Tap to Pay</strong></th>
      <td data-label="Eventbrite">accept contactless on-site payments at the door using NFC</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Tracking pixels and links</strong></th>
      <td data-label="Eventbrite">add conversion tracking pixels and attribution links across ad platforms</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Sell through social platforms</strong></th>
      <td data-label="Eventbrite">sell tickets directly through Facebook, TikTok, and LinkedIn without attendees leaving those apps</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>1:1 onboarding and phone support</strong></th>
      <td data-label="Eventbrite">Pro customers get onboarding sessions and 24/7 phone and live chat support</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>AI Marketing Copilot</strong></th>
      <td data-label="Eventbrite">AI-generated ad copy, email campaigns, event images, and descriptions (<a href="https://www.eventbrite.com/blog/eventbrite-ai-powered-tools/">Eventbrite claim</a> 30% faster campaign launches and 17% better CPC)</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Nonprofit discount</strong></th>
      <td data-label="Eventbrite">50% off Pro plans and discounted fees on donation tickets for qualifying organisations</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong>Automated pre-event reminders</strong></th>
      <td data-label="Eventbrite">series of emails at 48 hours, 2 hours, and 10 minutes before the event with "Join Now" links</td>
      <td data-label="Chobble Tickets">Not offered</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/promo-codes-and-add-ons/">Promo codes, discounts, and add-ons</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">create promo codes, discount codes, surcharges, and opt-in add-ons with stock limits and a live running total</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/custom-questions/">Custom questions with free-text answers</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">add multiple-choice or free-text questions to events, and link answers to price changes for tiered pricing</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/parent-child-listings/">Parent/child listings</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">require buyers to choose child listings (add-ons, options) when booking a parent</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/encrypted/">Password-derived encryption</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">attendee data is encrypted with a key derived from your admin password using hybrid RSA-OAEP + AES-256-GCM. A database dump and the server's environment encryption key together are still not enough to decrypt attendee data, since an attacker would also need your password. If you forget it, the data is permanently unrecoverable.</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/open-source/">Open source</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">the complete product source is published under AGPL-3.0-only with no proprietary feature tier</td>
      </tr>
      <tr>
      <th scope="row"><strong>Self-hosting option</strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">run the platform on selected infrastructure without a Chobble software licence fee</td>
      </tr>
      <tr>
      <th scope="row"><strong>Flat pricing</strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">£50/year or £5/month with no per-ticket platform fees, no matter how many you sell</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/apple-wallet/">Apple &amp; Google Wallet tickets</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">attendees can add tickets to their phone wallet</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/rss-and-calendar-feeds/">ICS calendar feeds</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">subscribers get automatic calendar updates</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/rss-and-calendar-feeds/">RSS feeds</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">syndicate your events to feed readers</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/groups/">Tiered ticket types via groups</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">create VIP, early bird, and other tiers using event groups with a shared capacity cap (max attendees per group)</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/stripe-and-square/">Pay-what-you-want pricing</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">let attendees choose their own price</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/daily-events/">Daily/recurring events</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">per-date capacity with calendar picker and holiday blackouts</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/custom-questions/">Custom questions</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">add multiple-choice and free-text questions to events and collect structured answers at checkout, with answers visible across the admin interface, CSV exports, and webhooks</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/admin-api/">Admin API</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">full CRUD for events and booking creation via API keys, so you can automate event management from scripts or external tools</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/webhooks/">Webhooks</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">outbound POST on every registration for custom integrations</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/email-providers/">Custom email providers</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">use Resend, Postmark, SendGrid, or Mailgun so emails come from your domain, not the platform's</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/email-templates/">Customisable email templates</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">full control over confirmation emails with Liquid syntax for a fully white-label experience</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/custom-domain/">Custom domain</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">get a yourname.tix.chobble.net subdomain instantly, or point your own domain. Eventbrite events run on eventbrite.co.uk by default.</td>
      </tr>
      <tr>
      <th scope="row"><strong><a href="/features/your-public-website/">Public-facing website and CMS</a></strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">a homepage, content pages, news posts, and a contact form with spam protection, all edited from the admin panel with Markdown and <a href="/features/customising-your-site/">custom CSS</a>. Eventbrite provides an event page but not a full website with pages you can compose</td>
      </tr>
      <tr>
      <th scope="row"><strong>No marketing to your attendees</strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">your audience stays yours, with no cross-promotion of competing events</td>
      </tr>
      <tr>
      <th scope="row"><strong>Community Interest Company</strong></th>
      <td data-label="Eventbrite">Not offered</td>
      <td data-label="Chobble Tickets">run by a CIC, with profits reinvested rather than distributed to shareholders</td>
      </tr>
      </tbody>
      </table>
  - type: markdown
    content: |
      ## Data ownership

      Eventbrite stores attendee data and uses it to market other events to
      attendees. Your event page is on Eventbrite's platform, where attendees
      are encouraged to follow other events.

      With Chobble Tickets, attendee data is encrypted and stays under your
      control. Chobble Tickets does not market to your attendees or promote
      other events to them.
  - type: markdown
    content: |
      ## When Eventbrite might be the better choice

      - You need a discovery platform to help attendees find your events
      - You want built-in marketing tools, retargeting ads, follower lists,
        and automatic event reminders
      - You need reserved seating with venue maps
      - You're running international events in multiple currencies
      - You want an app marketplace with 100+ integrations
      - You have very low volume and prefer paying per ticket over a flat fee

      > "I've launched my first tickets with it and have already done things
      > like switch tickets to other time slots, issued refunds, amended the
      > price, copied tickets over, used the check-in and check-out. It
      > genuinely feels like it's a like-for-like of my current provider, but
      > with far more potential and a fraction of the cost."
      >
      > - [Elliott's Bouncy Castle Hire](https://www.elliottsbouncycastlehire.co.uk/news/2026-02-13/new-ticket-platform-initial-review)

      > "Chobble tickets is very easy to use and takes no cut (even though
      > Stripe takes a very small amount). It's also much better for refunds as
      > Eventbrite doesn't refund the booking fee."
      >
      > - [Chris, British Bourbon Society](https://www.facebook.com/httkb/posts/pfbid0VPiUCz5UYAp8Z59LddLBw5GdGz3TA1xfErGmBhAP5dF7TisRNrXBZCadb4QP4T2Al)
  - type: markdown
    content: |
      ## When Chobble Tickets is the better choice

      - You already have your own audience and don't need a discovery platform
      - You want predictable, flat-rate pricing with no per-ticket platform fees
      - Privacy and encryption matter to you
      - You don't want a platform marketing to your attendees
      - You're a charity, community group, artist or musician (£25/year or
        £2.50/month)
      - You want [Apple/Google Wallet](/features/apple-wallet/), [calendar
        feeds](/features/rss-and-calendar-feeds/), or a [public
        API](/features/public-api/)
      - You value [open source](/features/open-source/) and the ability to
        self-host
  - type: markdown
    content: |
      ## Who owns Eventbrite?

      Eventbrite is owned by
      [Bending Spoons](https://bendingspoons.com), an Italian software
      company that buys well-known tech brands like Evernote, Meetup, and
      WeTransfer. Before that, Eventbrite was a publicly traded company on
      the New York Stock Exchange.

      Chobble Tickets was never a listed company and was never for sale:
      one person runs it as a
      [Community Interest Company](https://www.gov.uk/government/publications/community-interest-companies-introduction),
      a type of UK company that exists to benefit the community. All of
      Chobble's code is public, and anyone can run the platform on their
      own servers.
  - type: markdown
    content: |
      ## Pricing sources

      The pricing information on this page was verified in June 2026. Fees
      may change.

      - [Eventbrite pricing for organisers](https://www.eventbrite.co.uk/organizer/pricing/) - 6.95% + £0.59 per ticket (UK)
      - [Eventbrite ticketing fees (Help Centre)](https://www.eventbrite.co.uk/help/en-gb/articles/755615/how-much-does-it-cost-for-organizers-to-use-eventbrite/)
      - [Eventbrite organiser features overview](https://www.eventbrite.com/organizer/overview/)
      - [Eventbrite features - sell tickets](https://www.eventbrite.com/organizer/features/sell-tickets/)
      - [Eventbrite AI-powered marketing tools](https://www.eventbrite.com/blog/eventbrite-ai-powered-tools/) - 17% CPC and 30% campaign launch claims
      - [Eventbrite retargeting ROI](https://www.eventbrite.co.uk/blog/ds00-the-surprising-roi-of-retargeting-for-events/) - 6x average ROI claim
      - [Eventbrite event privacy listing details](https://www.eventbrite.com/help/en-us/articles/305873/) - public events appear in the Eventbrite directory, on search engines and partner sites
      - [Eventbrite privacy policy](https://www.eventbrite.com/help/en-us/articles/460838/) - marketing communications about events on the Services, and targeted recommendations
      - [Chobble Tickets features](/features/)
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Sign up for managed hosting at £50/year or £5/month, or self-host without paying Chobble a licence fee.
name: vs Eventbrite
---
