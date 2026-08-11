---
name: Flat-Rate Ticketing and Hosting
subtitle: Ticketing prices that stay independent of ticket value, sales volume and feature use
meta_title: Flat-Rate Ticketing and Hosting | Chobble Tickets
meta_description: Compare flat-rate ticketing with per-sale fees, feature tiers, volume tiers and self-hosted software costs.
guide-category: choosing-a-ticket-platform
order: 4
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      "Flat rate" can mean a fixed fee for each ticket or a fixed subscription
      for the whole service. This guide uses it to mean a managed-service price
      that does not change with ticket value, ticket volume or feature use.

      Payment providers still charge for processing transactions. Those charges
      are separate from the ticketing platform's price and can vary by card,
      country and provider.
  - type: markdown
    dark: true
    content: |
      ## Paying for hosting rather than sales

      Chobble Tickets' £50/year or £5/month price pays for managed hosting,
      updates, backup tools and support. Every current Chobble feature is
      included, with no higher product tier and no application limit on events
      or tickets.

      Chobble does not add a percentage or fixed charge to each ticket. Ticket
      income goes directly to the organiser's Stripe, Square or SumUp account,
      and that provider applies its own processing terms.

      This resembles ordinary website hosting: the organiser pays for a site to
      be maintained rather than giving the host a share of each sale. Wix Events
      also requires a website subscription, but it adds a 2.5% service fee to
      paid tickets.
  - type: markdown
    content: |
      ## How the reviewed pricing models differ

      This table covers providers with detailed comparisons on this site. It is
      not a directory of every ticketing service.

      | Provider | Managed pricing model | Main qualification |
      |---|---|---|
      | **Chobble Tickets** | One volume-independent price | £50/year or £5/month includes every current feature, with no per-sale platform fee. |
      | [tickts](/compared-to/tickts/) | Volume-independent feature tiers | Starter is free, while Growth and Pro charge fixed subscriptions for additional features. There is no per-ticket platform fee. |
      | [Dandelion](/compared-to/dandelion/) | No mandatory managed price | Dandelion asks for voluntary contributions and charges for some off-platform listings and marketplace boosts. |
      | [Resova](/compared-to/resova/) | Booking allowances with overage charges | Published plans include a monthly booking allowance, then charge for each extra booking. The custom Enterprise plan lists unlimited bookings. |
      | [Tessera Tickets](/compared-to/tessera-tickets/) | Ticket-volume subscription tiers | The monthly subscription rises with annual ticket volume. |
      | [Ticket Tailor](/compared-to/ticket-tailor/) | Fixed charge for each paid ticket | Prepaid credits and discounts can reduce the per-ticket amount. |
      | [Ticket Monkey](/compared-to/ticketmonkey/) | Fixed charge for each paid ticket | Core charges 25p per paid ticket including VAT. Pro normally costs 60p, though it shares the 25p launch rate as of August 2026, and a managed tier is a custom percentage. |
      | [Pretix Hosted](/compared-to/pretix/) | Percentage of each paid ticket | The hosted platform charge is capped per ticket, and payment processing remains separate. |
      | [Ticketebo](/compared-to/ticketebo/) | Percentage of each paid transaction | The 4.95% (incl. VAT) charge applies per order, not per ticket, with a 75p minimum. Card processing is included. |
      | [Wix Events](/compared-to/wix-events/) | Website subscription plus a percentage of paid tickets | The ticket service fee is additional to the Wix website plan and payment processing. |

      A fixed subscription is not automatically volume-independent. Booking
      allowances, annual ticket bands and paid feature tiers can still make the
      organiser's cost change as the service grows.
  - type: markdown
    dark: true
    content: |
      ## The same product on another host

      Managed and self-hosted Chobble Tickets deployments use the same
      source-published product. Chobble charges no software fee for self-hosting;
      the operator instead pays for infrastructure, email, payment processing
      and any technical work it needs.

      The complete product is open source, with no hosted-only feature tier.

      Other self-installed products also avoid a per-ticket fee, but use
      different models:

      - [Event Schedule](/compared-to/event-schedule/) is open source with no
        per-ticket fee; its free hosted plan is capped at 25 paid tickets a
        month, and higher plans are tiered by feature.
      - [Revel](/compared-to/revel/) is MIT licensed and free to self-host,
        while the Revel-hosted service charges 3% + €0.50 per paid ticket.
      - [Pretix Community](/compared-to/pretix/) is free for core ticketing,
        with proprietary enterprise plugins sold separately.
      - [Hi.Events](/compared-to/hi-events/) requires visible attribution for
        free self-hosting, or a commercial licence to remove it.
      - [libreevent](/compared-to/libreevent/) is open source but archived, so
        an operator maintains their own copy of the code.
      - [FooEvents](/compared-to/fooevents/) requires WordPress, WooCommerce and
        a commercial plugin subscription.
      - [EventMS Pro](/compared-to/eventms-pro/) takes no per-ticket fee but is
        a closed self-hosted build sold as a large one-time licence.

      The
      [open source ticketing platforms guide](/guide/choosing-a-ticket-platform/open-source-ticketing-platforms/)
      compares the licences of the open source options above.
  - type: markdown
    content: |
      ## Portability and interoperability

      The hosting model is supported by practical ways to move or integrate the
      site:

      - Use an [organiser-owned domain](/features/custom-domain/) rather than a
        permanent platform marketplace address
      - Download a [complete database backup](/features/backups/) from the
        administration area
      - Export event setup as [versioned JSON](/features/catalogue-import-export/)
        and import it into another Chobble Tickets site
      - Use the [public API](/features/public-api/),
        [administration API](/features/admin-api/) and
        [webhooks](/features/webhooks/) to connect other systems

      These features do not make switching hosts automatic. A new operator
      still needs to configure infrastructure, payment and email services, but
      the organiser is not limited to a hosted-only product or an event setup
      that can be read only by one provider.
  - type: markdown
    dark: true
    content: |
      ## What is unusual about the combination

      Among the providers with verified records on this site, Chobble Tickets
      is the only managed ticketing product that combines:

      - One price independent of ticket value and volume
      - Every current feature in that price, with no higher product tiers
      - No percentage or fixed platform charge for each sale
      - Self-hosting of the same source-published product
      - An organiser-owned domain and portable database and event-setup exports

      This is a claim about the providers reviewed here, not every ticketing
      product in existence. Other providers may share individual parts of the
      model or offer services that have not yet been reviewed.
---
