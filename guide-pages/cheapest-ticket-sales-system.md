---
name: The Cheapest Ticket Sales System
subtitle: What a year of 1,000 tickets at £20 costs on each reviewed provider, and which options cost less below that volume
meta_title: The Cheapest Ticket Sales System | Chobble Tickets
meta_description: Estimated annual costs for selling 1,000 tickets at £20 on each reviewed ticketing provider, with the break-even volumes where a flat fee starts to cost less than a per-ticket fee.
guide-category: choosing-a-ticket-platform
order: 4.5
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      There is no single cheapest ticketing provider. The cheapest one depends
      on how many tickets an organiser sells, what each ticket costs, and
      which features the event needs.

      This guide works through one example. An organiser sells 1,000 tickets
      at £20 each over a year, which is £20,000 of ticket income, and pays
      every fee themselves rather than adding it to the ticket price.

      Every figure is an estimate built from the published rates on the
      comparison pages linked below. Rates change, and several providers do
      not publish one at all.
  - type: markdown
    dark: true
    content: |
      ## Below this volume, a free plan costs less

      An annual hosting fee is a fixed cost, so its share of each ticket falls
      as more tickets sell. Below a certain number of tickets, a provider that
      charges nothing per year costs less, even when it charges a fee on each
      ticket.

      At £20 a ticket, the option with the lowest total charge and no annual
      fee is [tickts](/compared-to/tickts/) on its free Starter plan. It takes
      no commission and no booking fee, and ticket money goes to the
      organiser's own Stripe account, so the only cost is Stripe's 1.5% + 20p.
      That is 50p a ticket at any volume, which is £50 a year less than
      Chobble Tickets charges for the same 1,000 tickets.

      [SumUp Online Store](/compared-to/sumup-store/) also charges nothing a
      year, and its 2.5% includes payment processing, which is also 50p on a
      £20 ticket. It is shop software rather than event software, with no
      event dates, no capacity limits, no QR tickets and no check-in.
      [Dandelion](/compared-to/dandelion/) charges no mandatory fee, but
      normally requests 1% of completed sales, which is £200 on £20,000.
  - type: markdown
    content: |
      ## Where the break-even falls

      Chobble Tickets costs £50 a year plus the same payment processing an
      organiser would pay anyway. Against a provider that charges a fee on each
      ticket, £50 buys back that fee after a set number of tickets.

      These figures use £20 tickets and one ticket per payment. A cheaper
      ticket moves every percentage-based row further out, and a dearer one
      brings it closer.

      | Compared with | Break-even at £20 a ticket |
      |---|---|
      | [SignUpGenius](/compared-to/signupgenius/) at 20p a ticket | 250 tickets |
      | [TixFox](/compared-to/tixfox/) at 38p a ticket | 132 tickets |
      | [Pretix Hosted](/compared-to/pretix/) at 2.5% | 100 tickets |
      | [Ticket Tailor](/compared-to/ticket-tailor/) at 60p a ticket | 84 tickets |
      | [Tito](/compared-to/tito/) at 3% | 84 tickets |
      | [BookitBee](/compared-to/bookitbee/) at 3.5% | 72 tickets |
      | [Humanitix](/compared-to/humanitix/) at 4.67% + 46p | 56 tickets |
      | [TicketSource](/compared-to/ticketsource/) at 7% a booking | 56 tickets |
      | [Eventbrite](/compared-to/eventbrite/) at 6.95% + 59p | 34 tickets |
      | [Fatsoma](/compared-to/fatsoma/) at 10% | 25 tickets |

      An organiser selling 40 tickets a year at £20 pays less on most of these
      than on any provider with an annual fee. An organiser selling 1,000 pays
      less on the flat fee than on all of them.
  - type: markdown
    dark: true
    content: |
      ## What the estimate assumes

      - 1,000 paid tickets at £20 each, sold over one year, all in the United
        Kingdom
      - One ticket per payment, so 1,000 separate card payments
      - The organiser pays every fee rather than adding it to the ticket price
      - Stripe's UK rate of 1.5% + 20p where the provider uses the organiser's
        own payment account
      - Headline rates as published, which for several providers exclude VAT

      One ticket per payment is the most expensive assumption, because it
      charges every fixed amount 1,000 times. Where payment processing is
      separate, a booking of four tickets pays Stripe's 20p once instead of
      four times, which is 60p saved on that booking.

      Percentages do not work that way. [TicketSource](/compared-to/ticketsource/)
      and [Ticketebo](/compared-to/ticketebo/) charge their fee once per
      booking, but 7% or 4.95% of an £80 booking is the same amount as the
      same percentage of four £20 bookings, and both include processing rather
      than adding a separate fixed charge. What a grouped booking saves them is
      the per-booking minimum, not the percentage.
  - type: markdown
    content: |
      ## Providers that charge nothing themselves

      These options leave the organiser paying only for payment processing, or
      for the infrastructure the software runs on.

      | Option | Estimated year | What makes up the cost |
      |---|---|---|
      | [tickts](/compared-to/tickts/) (Starter) | £500 | Stripe processing only. Starter caps platform emails at 100 a month, gives read-only API access, and keeps white-label subdomains and custom domains on the £690/year Pro plan. |
      | [Chobble Tickets](/hosting/) self-hosted | £500 + infrastructure | No Chobble licence fee. The organiser pays for hosting, deployment and updates. |
      | [Revel](/compared-to/revel/) self-hosted | £500 + infrastructure | MIT licensed. Needs an always-on server running Django, PostgreSQL and Redis. |
      | [Pretix](/compared-to/pretix/) Community self-hosted | £500 + infrastructure | Free for core ticketing. Some plugins are sold separately. |
      | [Hi.Events](/compared-to/hi-events/) self-hosted | £500 + infrastructure | Free under the AGPL with a "Powered by Hi.Events" notice, which a $499 licence removes. |
      | [SumUp Online Store](/compared-to/sumup-store/) | £500 | 2.5% per online payment, processing included. Shop software, not event software. |
      | [Dandelion](/compared-to/dandelion/) | £500 + requested 1% | No mandatory fee. The requested organiser contribution is about £200 on £20,000, and buyers are asked for donations. |

      Self-hosting replaces a provider's fee with a server bill and the work of
      running it. The size of that bill depends on the host, the software and
      how much traffic the events draw, so this guide does not put a number on
      it.
  - type: markdown
    dark: true
    content: |
      ## Providers that charge a fixed amount a year

      These providers charge a subscription or licence for the year. Most take
      nothing from each sale, and payment processing is separate at Stripe's UK
      rate. Wix Events and Cheddar Up are the exceptions, charging a
      subscription and a share of each sale, so they appear here for their
      annual charge and carry their per-sale rate in the same row.

      | Option | Estimated year | What makes up the cost |
      |---|---|---|
      | [Event Schedule](/compared-to/event-schedule/) (Pro) | £540 | About £40 a year. The free plan stops at 25 paid tickets a month, and custom domains need the £120/year Enterprise plan. |
      | **Chobble Tickets** managed | £550 | £50 hosting plus £500 processing. £525 on the £25 charity, community group, artist and musician rate, or £560 paying £5 a month. |
      | [EventPrime](/compared-to/eventprime/) (Professional) | £573 + WordPress hosting | About £73 a year for a single site, renewed for updates. Needs a WordPress site. |
      | [FooEvents](/compared-to/fooevents/) (Basic) | £603 + WordPress hosting | About £103 a year. Needs WordPress and WooCommerce. |
      | [Resova](/compared-to/resova/) (Lite) | £880 | About £380 a year for 100 bookings a month. 1,000 bookings fit only if no month goes over, otherwise 16p a booking or the £685 Pro plan. |
      | [Hi.Events](/compared-to/hi-events/) single-domain licence | £920 + infrastructure | A $499 licence, about £420, which removes the branding notice from a self-hosted install. The organiser still runs the server. |
      | [Pretix](/compared-to/pretix/) Enterprise Starter | £920 + infrastructure | About £420 a year for the enterprise plugins on a self-hosted install. The organiser still runs the server. |
      | [tickts](/compared-to/tickts/) (Pro) | £1,190 | £690 a year for white-label subdomains, full API access and season passes. |
      | [SmartGig](/compared-to/smartgig/) | £1,300 | £800 a year for the ticketing module. No per-ticket fee is published, and none is confirmed either. |
      | [Wix Events](/compared-to/wix-events/) | £1,396 | A website plan from about £276 a year, plus a 2.5% ticket service fee and 2.1% + 20p Wix Payments processing. |
      | [Cheddar Up](/compared-to/cheddar-up/) | £1,523 | About £335 a year for the plan that includes ticketing, plus 3.59% + 47p a transaction. |
      | [Tessera Tickets](/compared-to/tessera-tickets/) | £1,700 + website hosting | About £1,200 a year for up to 10,000 tickets. WordPress hosting for the public site is a separate £1,440 to £3,840 a year. |

      A fixed price is not automatically a low one, and it is not automatically
      independent of volume. Resova counts bookings each month and Tessera
      Tickets prices in annual ticket bands, so both can rise as an event grows.
  - type: markdown
    content: |
      ## Providers that charge on each ticket or booking

      | Option | Estimated year | What makes up the cost |
      |---|---|---|
      | [SignUpGenius](/compared-to/signupgenius/) | £700 | About 20p a ticket plus Stripe processing. Free pages carry advertising. |
      | [Ticket Generator](/compared-to/ticket-generator/) | £810 | About 31p a ticket buying credits 1,000 at a time, plus Stripe processing. Small packs cost about 47p a credit, and an event with a venue layout uses two credits a ticket. |
      | [TixFox](/compared-to/tixfox/) | £880 | 38p a ticket plus Stripe processing. 30p under £5. Platform fees are not returned on a refund. |
      | [Ticket Tailor](/compared-to/ticket-tailor/) | £910 | 41p a ticket buying prepaid credits 500 at a time, plus Stripe processing. Pay-as-you-go is 60p a ticket, which is £1,100, and the largest bundles reach 22p. Charities get 50% off. |
      | [Hi.Events](/compared-to/hi-events/) cloud | £970 | 0.75% + about 32p a ticket plus Stripe processing. |
      | [Ticketebo](/compared-to/ticketebo/) | £990 | 4.95% including VAT of each order, card processing included, 75p minimum. The buyer pays by default. |
      | [Pretix Hosted](/compared-to/pretix/) | £1,000 | 2.5% of ticket value, capped at about £13 a ticket, plus separate processing. |
      | [Tito](/compared-to/tito/) | £1,100 | 3% a ticket plus Stripe processing. 2.5% for charities and community groups. |
      | [Ticketpass](/compared-to/ticketpass/) (Essentials) | £1,160 | A booking fee and a service fee of 1.9% + 20p each, excluding VAT, with processing included. |
      | [BookitBee](/compared-to/bookitbee/) | £1,200 | From 3.5% a ticket, minimum 50p, capped at £19.95, plus Stripe processing. |
      | [PTA Events](/compared-to/pta-events/) | £1,290 | 3.95% a transaction plus Stripe processing. The £299.99 + VAT Premium plan drops the platform fee to 1.5%. |
      | [Ticketted](/compared-to/ticketted/) | £1,290 | 3.95% + A$0.95 a ticket, converted at 52.3p to the Australian dollar. Charities and schools pay 2.45% + A$0.45. |
      | [Humanitix](/compared-to/humanitix/) | £1,394 | 4.67% + 46p a ticket, processing included, excluding VAT. Charities and schools pay 3.33% + 25p, which is about £916. |
      | [TicketSource](/compared-to/ticketsource/) | £1,400 | 7% a booking excluding VAT with TicketSource processing, or 4.5% plus the organiser's own Stripe, which comes to the same figure on a £20 ticket. |
      | [FIXR](/compared-to/fixr/) (Pro) | £1,488 | 4.99% + 49p a ticket plus VAT, £1 minimum, processing included. Buyers usually pay it. |
      | [Weezevent](/compared-to/weezevent/) | £1,490 | 2.5% + 99p a ticket including tax, with banking fees included. |
      | [Revel](/compared-to/revel/) hosted | £1,530 | 3% + about 43p a ticket plus Stripe processing. |
      | [EVENTIM.Light](/compared-to/eventim-light/) | £1,600 | 8% a ticket with processing included. The fee can be passed to buyers. |
      | [QRTicket](/compared-to/qrticket/) | £1,700 | About 77p a ticket plus PayPal processing. The buyer pays by default. |
      | [Eventbrite](/compared-to/eventbrite/) | £1,980 | 6.95% + 59p a ticket with processing included. |
      | [Ticketpass](/compared-to/ticketpass/) (Pro) | £2,100 | 3.5% + 35p each on the booking fee and the service fee. |
      | [Fatsoma](/compared-to/fatsoma/) | £2,500 | 10% a ticket, minimum £1, plus Stripe processing. |

      Two of these rows are not options for a UK organiser.
      [Ticketted](/compared-to/ticketted/)'s FAQ says the platform is for
      events in Australia, and [QRTicket](/compared-to/qrticket/) is
      German-language only. Their rates are converted to pounds so the charges
      can be read beside the rest.

      [DICE](/compared-to/dice/), [Resident Advisor](/compared-to/resident-advisor/),
      [Ticketmaster](/compared-to/ticketmaster/) and
      [Ticketek](/compared-to/ticketek/) publish no general rate schedule, so
      none of them has a row. Third-party estimates of around 10% put DICE and
      Resident Advisor near £2,000 on this example and Ticketmaster near
      £4,500, and a typical Ticketek service and handling fee of about A$8 a
      transaction is near £4,000. Ticketek also sells mainly for large venues
      in Australia and New Zealand.
  - type: markdown
    dark: true
    content: |
      ## What these figures leave out

      VAT is the largest omission. Ticketpass, Humanitix, FIXR and
      TicketSource all quote rates that exclude it, so a VAT-registered
      organiser reclaims it and everyone else pays 20% more than the figure
      shown.

      Minimums, caps and discounts move real bills in both directions. Fatsoma
      has a £1 minimum, BookitBee caps its fee at £19.95, Pretix caps at about
      £13 a ticket, and Ticket Tailor, Humanitix, Tito, Ticketted and Chobble
      all publish a lower rate for charities or community organisations.

      Refunds, currency conversion and payment methods change the total again.
      TixFox does not return its platform fee when a ticket is refunded, and
      several figures here are converted from dollars, euros or Australian
      dollars at one day's rate.
  - type: markdown
    content: |
      ## Cost is not the only difference

      The cheapest options in the first table give up things the paid ones
      include. tickts keeps white-label subdomains, custom domains and full
      API access on its £690 plan, the SumUp Online Store has no capacity
      limits or check-in, and self-hosting moves updates, backups and outages
      onto the organiser.

      Some costs also sit outside the fee. A provider that lists events in a
      public marketplace can market other organisers' events to attendees,
      and a provider that holds ticket money pays it out on its own schedule
      rather than as each sale clears.

      Chobble Tickets includes every current feature in its £50, with no
      higher tier, no per-sale charge, and ticket income paid straight into
      the organiser's own Stripe, Square or SumUp account. Among the providers
      with verified records on this site, it is the only managed product that
      combines one volume-independent price, no feature tiers, no per-sale
      platform fee and self-hosting of the same product.
  - type: markdown
    dark: true
    content: |
      ## Working out your own figure

      The [platform fee calculator](/compared-to/compare-all/) applies each
      reviewed rate to a ticket price and volume you set, so a different
      example can be checked directly against the same sources.

      Two related guides cover the ground beside the arithmetic. [How
      ticketing platforms disguise their fees](/guide/choosing-a-ticket-platform/how-ticketing-platforms-disguise-fees/)
      explains why a headline rate can understate a charge, and
      [flat-rate ticketing](/guide/choosing-a-ticket-platform/flat-rate-ticketing/)
      compares the pricing models themselves.

      Rates on this page were taken from the comparison pages linked in each
      row, which record the source and the date each figure was checked.
---
