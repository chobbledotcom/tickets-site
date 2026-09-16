---
title: Enshittification-Resistant Ticket Sales - Chobble Tickets
meta_title: Enshittification-Resistant Ticket Sales | Chobble Tickets
meta_description: Enshittification is Cory Doctorow's name for the pattern by which online platforms decay. Chobble Tickets is structured against it with an open licence, an asset-locked community interest company, no feature tiers, no free plan, no subscription billing, encrypted attendee data, open APIs and payments that go straight to the organiser.
permalink: /features/enshittification-resistant-ticket-sales/
eleventyNavigation:
  key: Enshittification Resistant Ticket Sales
  parent: Platform & Integrations
  order: 0.75
blocks:
  - type: hero
    class: gradient
    content: |-
      # Enshittification-resistant ticket sales

      "Enshittification" is writer Cory Doctorow's name for the pattern by which online platforms decay. Chobble Tickets is structured against it: an open licence, an asset-locked company, one price with no tiers, no free plan, prepaid terms, encrypted attendee records, open APIs and payments that go straight to the organiser.
  - type: markdown
    content: |
      ## What enshittification means

      The writer [Cory Doctorow](https://pluralistic.net/2023/01/21/potemkin-ai/)
      coined the word in 2022, and the American Dialect Society chose it as its
      2023 word of the year. In his summary, platforms die in three stages:
      "first, they are good to their users; then they abuse their users to make
      things better for their business customers; finally, they abuse those
      business customers to claw back all the value for themselves."

      The pattern runs on what Doctorow calls a two-sided market, a platform
      sitting between two groups such as sellers and buyers, "holding each
      hostage to the other, raking off an ever-larger share of the value that
      passes between them". The platform first runs at a loss to attract users,
      then gives its value to the businesses on the other side, and finally
      moves the value to its own shareholders. Each step is taken after leaving
      has become expensive for everyone involved.
  - type: markdown
    dark: true
    content: |
      ## What the pattern needs

      The pattern runs only where leaving is costly. Doctorow describes the
      blocks on leaving as the thing that allows a platform to decay without
      losing its users, and names freedom of exit as the remedy: leaving a
      platform while keeping the data, purchases and communities held inside
      it.

      Ticketing has the same two sides. The organiser chooses the platform and
      pays it, and attendees' contact details and purchase records pass through
      it. The [provider directory](/compared-to/providers/) records how each
      platform reviewed on this site charges, and what its review found about
      attendee data and marketing.
  - type: markdown
    content: |
      ## Eight structural protections

      Chobble Tickets cannot stop the pattern across the ticketing market, and
      this page does not claim that it can. What its structure does is remove
      the pattern's preconditions from its own service. Each protection below
      is a fact about how the product is licensed, owned, sold and connected.

      - **An open licence.** The complete source is published under
        AGPL-3.0-only and can be self-hosted, so the exit stays cheap.
      - **A community interest company.** Chobble CIC has no shareholders and
        an asset lock, so the final stage has nowhere to pay out.
      - **No feature tiers.** One service includes every current feature, so
        an organiser's growth cannot be priced in.
      - **No free plan.** Every managed site is paid for, so the first stage
        has nothing to subsidise.
      - **No subscription billing.** Every prepay term is bought again by the
        organiser, so income has to be re-earned.
      - **Encrypted attendee data.** Personal fields are unreadable without
        the organiser's key, so there is no attendee database to monetise.
      - **Open APIs and webhooks.** Data is readable by other software and
        pushed out as it arrives, so an organiser's other tools keep working.
      - **Direct payments.** Ticket money goes straight to the organiser's
        payment account, so there is no share of it to raise.
  - type: markdown
    dark: true
    content: |
      ## The open licence

      The complete product source is published under
      [AGPL-3.0-only](/features/open-source/). AGPL is a copyleft licence:
      anyone who runs a changed version of the software as an online service
      must publish their changes under the same terms. The licence is already
      granted to everyone who holds the code, and it cannot be revoked for the
      versions already published.

      With the code public, the exit from Chobble's managed service is the
      software itself. An organiser can move to a
      [self-hosted deployment](/hosting/) or to another host running the same
      code, taking their records through
      [catalogue import and export](/features/catalogue-import-export/) and
      [database backups](/features/backups/). Chobble charges no software
      licence fee for self-hosting, so the exit costs no more than the
      infrastructure that runs it.
  - type: markdown
    content: |
      ## The company structure

      Chobble is a [community interest company](/about/), Chobble CIC, limited
      by guarantee without share capital. It has no shareholders, so it cannot
      pay dividends, and a CIC must reinvest its profits in its stated mission
      after paying its workers a reasonable wage.

      Assets owned by the company, including the Chobble Tickets source code,
      cannot be transferred to a private owner. The asset lock allows them to
      move only to another asset-locked body, such as another CIC or a
      registered charity, and the CIC Regulator oversees the lock.
      [Why Chobble Tickets cannot go closed source](/features/cannot-go-closed-source/)
      sets this out in full.

      The pattern's final stage moves value to a platform's shareholders. A
      company with no share capital, no dividends and no sellable assets has
      no final stage available.
  - type: markdown
    dark: true
    content: |
      ## No feature tiers

      Managed hosting is one service: £50 a year or £5 a month, or £25 a year
      for charities, community groups, artists and musicians. Every current
      product feature is included, and no rate varies by ticket value, ticket
      volume or feature use.

      A tier ladder turns usage into price. Among the platforms reviewed on
      this site, that includes free plans capped at a monthly ticket volume and
      features split across plans, as the
      [provider directory](/compared-to/providers/) records. Chobble Tickets
      has no higher plan to move features into and no lower plan to move them
      out of, so an organiser's costs cannot rise because their event sold
      more tickets or needed another feature.
  - type: markdown
    content: |
      ## No free plan

      The pattern's first stage is a platform paying users to arrive. In
      Doctorow's account of Amazon, the company sold below cost for years,
      funded by investors, until customers had few other places to shop. The
      service run at a loss is the first stage's tool, and the losses are
      recovered once the users are locked in.

      Chobble Tickets has no free hosted plan. Every managed site is paid for
      by the organiser who runs it, and Chobble's income comes from the prepay
      terms organisers choose to buy and from technical work, not from
      advertising or attendee data. The only way to run the software without
      paying Chobble is to self-host the published code, which involves no
      Chobble service at all.
  - type: markdown
    dark: true
    content: |
      ## No subscription billing

      Chobble does not use subscription billing. Organisers pay for a month or
      a year in advance, Chobble does not store card details for automatic
      renewal, and nothing is charged unless the organiser returns to pay for
      another term.

      A recurring charge keeps collecting while a service gets worse, because
      the default is to keep paying. Under
      [prepay hosting](/features/prepay-hosting/), each further term is a
      purchase the organiser makes again, so a service that declines has to
      keep being worth buying.

      If a paid term ends without renewal, the site stays online in read-only
      mode for 24 months. The organiser keeps full read access, can
      [export attendee records](/features/csv-export/) and
      [download a full database backup](/features/backups/), and owes no
      back-payment for the read-only months. There is no card on file, no
      dormant account and no automatic charge to cancel.
  - type: markdown
    content: |
      ## Encrypted attendee data

      Chobble Tickets encrypts attendee names, contact details, payment
      references and free-text answers before saving them. The keys that
      unlock them stay with the organiser's keyed administration accounts, and
      a database dump on its own cannot reveal the protected fields.
      [Who can see your data](/features/who-can-see-your-data/) lists every
      service that can receive attendee records.

      In Doctorow's account of Facebook, the platform's second side is
      advertisers paying to reach users through profiles assembled from
      harvested data. The ticketing equivalent would be a cross-event attendee
      database: many organisers' contact records pooled in one readable place.
      Chobble cannot assemble one, because the operator cannot read the
      records it hosts. Attendees get no Chobble account, no marketplace and
      no mailing list, and Chobble does not use attendee records for
      advertising, audience profiles or
      [marketing other events](/features/no-spying/).
  - type: markdown
    dark: true
    content: |
      ## Open APIs and webhooks

      Doctorow names blocked interoperability, such as banned third-party
      clients and narrowed APIs, among the things that make the decay easier,
      because each blocked door adds to the cost of leaving. The reverse also
      holds: data that other software can read cheaply keeps the exit open.

      Chobble Tickets keeps its data reachable. The
      [public API](/features/public-api/) serves listings, availability and
      bookings as JSON without a key, so the organiser's own website can be
      the shop window. The [admin API](/features/admin-api/) drives listings,
      groups and holidays with named keys the organiser can revoke. A
      [webhook](/features/webhooks/) POSTs every booking to any URL, keeping
      Slack channels, spreadsheets, mailing lists and CRMs up to date, and
      those receiving systems hold their own copies of what they receive.

      All of this is included in the one service. There is no integration
      tier to buy, no charge per connected tool, and no step where an
      integration moves behind a paywall.
  - type: markdown
    content: |
      ## Direct payments

      Chobble Tickets does not process ticket money. The attendee pays into
      the organiser's own Stripe, Square or SumUp account, and Chobble neither
      holds ticket income nor deducts a platform fee from it.

      The pattern's core motion is raking off an ever-larger share of the
      value that passes between the two sides. A platform that sits in the
      money flow can raise its share once organisers and attendees depend on
      it, and reviews on this site record platforms that hold ticket income
      until after an event before paying it out. Money that never passes
      through Chobble has no share to raise and no balance to hold.
  - type: stats
    items:
      - value: "1"
        label: Service, every feature included
      - value: "0"
        label: Feature tiers or free plans
      - value: "0"
        label: Automatic card charges
      - value: "24"
        label: Months to export before deletion
  - type: markdown
    content: |
      ## What an organiser can do

      Resistance to the pattern is measured at the exit. The structural
      protections above become these actions, available at any time:

      - [Download a complete database backup](/features/backups/) and restore
        it, including to an earlier point
      - [Export attendee records as CSV](/features/csv-export/) and use them
        anywhere
      - [Export the event setup as versioned JSON](/features/catalogue-import-export/)
        and import it on another site running the same code
      - [Run the site on a domain the organiser owns](/features/custom-domain/)
        and take the domain when leaving
      - Run their own frontends and automations on the
        [public API](/features/public-api/) and [webhooks](/features/webhooks/),
        with no integration tier to buy
      - Collect ticket income directly into the organiser's own Stripe, Square
        or SumUp account, which Chobble never holds
  - type: markdown
    dark: true
    content: |
      ## What the structure does not do

      The structure does not freeze the price or the feature set. The £50
      annual rate is the current rate, and future versions can add, change or
      remove features.

      Whether the service stays good is the work of the people running it.
      What the structure secures is the exit: the code stays published, the
      data stays exportable, and the terms stay prepaid. An organiser who
      decides the service has become worse can leave with their records,
      their domain and their ticket income already in their own hands.
  - type: markdown
    content: |
      ## References

      - [Cory Doctorow, "Tiktok's enshittification", Pluralistic, 21 January 2023](https://pluralistic.net/2023/01/21/potemkin-ai/) - the essay the definition and stages above are drawn from
      - [Enshittification, Wikipedia](https://en.wikipedia.org/wiki/Enshittification) - the term's history and its selection as the American Dialect Society's 2023 word of the year
      - [Open source](/features/open-source/) - the AGPL-3.0-only licence and deployment options
      - [Why Chobble Tickets cannot go closed source](/features/cannot-go-closed-source/) - the CIC structure, asset lock and absence of shareholders
      - [Prepay hosting](/features/prepay-hosting/) - the prepay terms and the 24-month read-only mode
      - [Encrypted](/features/encrypted/) - what the encryption covers and who holds the keys
      - [No attendee marketing](/features/no-spying/) - the no-advertising, no-cross-marketing policy for attendee records
      - [Public & admin API](/features/public-api/) - the JSON endpoints with no key required for public data
      - [Webhooks](/features/webhooks/) - booking notifications to any tool that accepts them
      - [Stripe, Square and SumUp](/features/stripe-and-square/) - how the organiser's own payment account is used
      - [Pricing](/pricing/) - the single service price and what it includes
      - [Provider directory](/compared-to/providers/) - how each reviewed platform charges, and what its review found about attendee data
  - type: cta
    button:
      text: Get started
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Get started

      Managed hosting costs £50 a year or £5 a month. The source code is published, and self-hosting carries no Chobble licence fee.
name: Enshittification-Resistant Ticket Sales | Chobble Tickets
---
