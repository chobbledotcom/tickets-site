---
name: The Cheapest Ticket Sales System
subtitle: What each reviewed provider charges on a year of 1,000 tickets at £20, and which options cost less below that volume
meta_title: The Cheapest Ticket Sales System | Chobble Tickets
meta_description: What each reviewed ticketing provider charges on a year of 1,000 tickets at £20, with the break-even volumes where a flat annual fee starts to cost less than a per-ticket fee.
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
      ## The short answer

      Card processing is a cost on every provider, because a card payment
      carries a fee wherever it is taken. Stripe's UK rate of 1.5% + 20p a
      payment comes to £500 on this example if every ticket is paid for
      separately, and less when buyers pay for several tickets at once.
      Some providers charge on top of processing and some include it in one
      combined rate, so the tables below say which is which.

      Three managed plans charge nothing beyond processing:
      [tickts](/compared-to/tickts/) Starter,
      [SumUp Online Store](/compared-to/sumup-store/) and
      [Dandelion](/compared-to/dandelion/) before its requested
      contribution. Every other provider charges more, and the rest of this
      guide measures how much.

      Chobble Tickets managed costs £50 a year on top of processing, so it
      is not the cheapest managed service: the three plans above charge
      nothing, and [Event Schedule](/compared-to/event-schedule/) Pro is
      about £40. The £50 is the lowest managed price that includes
      white-label branding, an organiser-owned domain and a full API, which
      is the connection other software uses to read and change event and
      booking data, without moving to a higher tier.

      The cheapest way to run the software yourself is Chobble Tickets, at
      about £9 a year. It compiles to an edge script with nothing running
      between requests, so its hosting bill is Bunny's $1 a month account
      minimum, while every other self-hostable product reviewed here needs
      an always-on server costing £56 to £104 a year.
  - type: markdown
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

      The £50 hosting fee is the whole difference between tickts Starter and
      Chobble Tickets, at any volume. Spread across 50 tickets it adds £1 to
      each one, twice what Stripe charges to process it, and spread across
      1,000 it adds 5p.

      At the volume this guide works through, the £50 is small enough that the
      choice turns on what each plan includes rather than what it costs. On
      tickts, white-label subdomains, custom domains and full API access are on
      the £690/year Pro plan, and Chobble Tickets includes them in the £50.

      [SumUp Online Store](/compared-to/sumup-store/) also charges nothing a
      year, and its 2.5% includes payment processing, which is also 50p on a
      £20 ticket. It is shop software rather than event software, with no
      event dates, no capacity limits, no QR tickets and no check-in.
      [Dandelion](/compared-to/dandelion/) charges no mandatory fee, but
      normally requests 1% of completed sales, which is £200 on £20,000.
  - type: markdown
    dark: true
    content: |
      ## Where the break-even falls

      Chobble Tickets costs £50 a year plus the same payment processing an
      organiser would pay anyway. Against a provider that charges a fee on each
      ticket, £50 buys back that fee after a set number of tickets.

      These figures use £20 tickets and one ticket per payment. A cheaper
      ticket moves every percentage-based row further out, and a dearer one
      brings it closer. Where a provider's rate includes card processing, the
      break-even counts only what the rate charges above Stripe's 50p on a
      £20 ticket.

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
    dark: true
    content: |
      ## Providers that charge nothing themselves

      These options leave the organiser paying only for payment processing, or
      for the infrastructure the software runs on.

      | Option | Beyond processing | What makes up the cost |
      |---|---|---|
      | [tickts](/compared-to/tickts/) (Starter) | Nothing | Stripe's charge is the only cost. Starter caps platform emails at 100 a month, gives read-only API access, and keeps white-label subdomains and custom domains on the £690/year Pro plan. |
      | [SumUp Online Store](/compared-to/sumup-store/) | Nothing | The 2.5% per online payment is the processing, with nothing added. Shop software, not event software. |
      | [Dandelion](/compared-to/dandelion/) | A requested 1%, about £200 | No mandatory fee. The organiser contribution is requested rather than charged, and buyers are asked for donations. |
      | [Chobble Tickets](/hosting/) self-hosted | About £9 of hosting | No Chobble licence fee. An edge deployment rents no server, so hosting is Bunny's $1 a month account minimum. A Docker deployment needs a server like the rows below. |
      | [Revel](/compared-to/revel/) self-hosted | £56 to £104 of server | MIT licensed. Needs an always-on server running Django, PostgreSQL and Redis. |
      | [Pretix](/compared-to/pretix/) Community self-hosted | £56 to £104 of server | Free for core ticketing, with some plugins sold separately. Needs an always-on server. |
      | [Hi.Events](/compared-to/hi-events/) self-hosted | £56 to £104 of server | Free under the AGPL with a "Powered by Hi.Events" notice, which a $499 licence removes. Needs an always-on server. |

      Self-hosting replaces a provider's fee with a server bill and the work of
      running it. The size of that bill depends mostly on what the software
      needs to run, which is the next section.
  - type: markdown
    content: |
      ## What the server costs

      Most self-hosted ticketing software is a program that has to be running
      all the time, waiting for someone to open the page. That means renting a
      virtual server by the month, whether or not any tickets sell that month.

      These are the cheapest always-on servers at three European hosts,
      checked on 11 August 2026:

      | Host | Cheapest plan | Price | About |
      |---|---|---|---|
      | [Hetzner](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/) (Germany) | CX23, 2 vCPU, 4 GB | €5.49 a month excluding VAT | £56 a year |
      | [netcup](https://www.netcup.com/en/server/vps) (Germany) | VPS 500 G12, 2 vCore, 4 GB | €5.91 a month including 19% VAT | £60 a year |
      | [Scaleway](https://www.scaleway.com/en/play2/) (France) | PLAY2-PICO, 1 vCPU, 2 GB | €0.014 an hour, about €10.22 a month | £104 a year |

      Those figures use about 85p to the euro. A server bill is also not fixed
      for good: Hetzner raised the CX23 from €3.99 to €5.49 a month on 15 June
      2026, and first-year promotional rates at other hosts sit below these
      standard prices.

      The floor for running most self-hosted ticketing software is therefore
      about £5 a month, or £60 a year, before anything else. That is more than
      Chobble's £50 a year for managed hosting, and backups, monitoring, a
      domain and the operator's own time sit on top of it.
  - type: markdown
    dark: true
    content: |
      ## Where an edge script is different

      Chobble Tickets compiles to a single JavaScript file that runs as a
      [Bunny Edge Script](/features/open-source/). Nothing runs between
      requests, so there is no monthly server to rent.

      [Bunny charges](https://bunny.net/docs/edge-scripting-pricing) $0.20 per
      million requests and $0.02 per 1,000 seconds of processor time, with no
      fixed monthly fee. Selling 1,000 tickets, and the browsing around those
      sales, is a long way below a million requests. No site Chobble hosts has
      used more than £0.20 of Bunny resources in total across several months.

      What a self-hoster pays is therefore the account minimum rather than the
      usage. [Bunny bills $1 a month](https://support.bunny.net/hc/en-us/articles/360000235911-How-does-the-bunny-net-credit-and-billing-system-work)
      when an account with active zones uses less than that, which is about £9
      a year. Bunny's database is billed by what it stores and does rather than
      by the hour, and was in public preview when checked on 11 August 2026.

      [Deno Deploy](https://deno.com/deploy/pricing), the other documented
      option, has a free tier covering 1 million requests and 20 GB of outbound
      traffic a month, with its first paid plan at $20 a month.

      What decides which of these an organiser can use is the software, not the
      host. [Revel](/compared-to/revel/) needs an always-on Django server with
      PostgreSQL and Redis, [pretix](/compared-to/pretix/) is a Python
      application with a database, and
      [FooEvents](/compared-to/fooevents/) and
      [EventPrime](/compared-to/eventprime/) need a WordPress site, which is
      itself an always-on server. Those products start from the £56 to £104 a
      year above; a Chobble Tickets edge deployment costs about £9.
  - type: markdown
    content: |
      ## Providers that charge a fixed amount a year

      These providers charge a subscription or licence for the year, with
      payment processing separate at the organiser's own rate. Wix Events and
      Cheddar Up are the exceptions, charging a subscription and a share of
      each sale, so their rows carry the per-sale charge as well.

      | Option | Beyond processing | What makes up the cost |
      |---|---|---|
      | [Event Schedule](/compared-to/event-schedule/) (Pro) | £40 | The free plan stops at 25 paid tickets a month, and custom domains need the £120/year Enterprise plan. |
      | **Chobble Tickets** managed | £50 | £25 on the charity, community group, artist and musician rate, or £60 paying £5 a month. |
      | [EventPrime](/compared-to/eventprime/) (Professional) | £73 + £60 to £300 | About £73 a year for a single site, renewed for updates. Needs a WordPress site, typically £5 to £25 a month. |
      | [FooEvents](/compared-to/fooevents/) (Basic) | £103 + £60 to £300 | About £103 a year. Needs WordPress and WooCommerce on the same sort of hosting. |
      | [Resova](/compared-to/resova/) (Lite) | £380 | About £380 a year for 100 bookings a month. 1,000 bookings fit only if no month goes over, otherwise 16p a booking or the £685 Pro plan. |
      | [Hi.Events](/compared-to/hi-events/) single-domain licence | £476 to £524 in year one | A $499 licence, about £420, which removes the branding notice from a self-hosted install, plus the server. The licence is perpetual for the version it covers, so later years are the £56 to £104 server alone. |
      | [Pretix](/compared-to/pretix/) Enterprise Starter | £476 to £524 | About £420 a year for the enterprise plugins on a self-hosted install, plus the server the organiser still rents. |
      | [tickts](/compared-to/tickts/) (Pro) | £690 | £690 a year for white-label subdomains, full API access and season passes. |
      | [Wix Events](/compared-to/wix-events/) | £776, plus Wix processing | A website plan from about £276 a year, plus a 2.5% ticket service fee, which is about £500 at this volume. Wix Payments processes at 2.1% + 20p, which costs more than Stripe's rate. |
      | [SmartGig](/compared-to/smartgig/) | £800 or more | £800 a year for the ticketing module. Its published prices list no fee per ticket, and no reviewed source states that none applies, so this figure assumes none and is a floor. |
      | [Tessera Tickets](/compared-to/tessera-tickets/) | £1,200 + website hosting | About £1,200 a year for up to 10,000 tickets. WordPress hosting for the public site is a separate £1,440 to £3,840 a year. |
      | [Cheddar Up](/compared-to/cheddar-up/) | £1,523, processing included | About £335 a year for the plan that includes ticketing, plus 3.59% + 47p a transaction. The per-transaction fee includes Stripe's processing. |

      A fixed price is not automatically a low one, and it is not automatically
      independent of volume. Resova counts bookings each month and Tessera
      Tickets prices in annual ticket bands, so both can rise as an event grows.
  - type: markdown
    dark: true
    content: |
      ## Providers that charge on each ticket or booking

      The first table lists providers whose charge sits on top of card
      processing, so processing is still to pay on each figure. The second
      lists providers whose rate includes processing, so each figure there
      covers the whole year.

      | Option | Beyond processing | What makes up the cost |
      |---|---|---|
      | [SignUpGenius](/compared-to/signupgenius/) | £200 | About 20p a ticket. Free pages carry advertising. |
      | [Ticket Generator](/compared-to/ticket-generator/) | £310 | About 31p a ticket buying credits 1,000 at a time. Small packs cost about 47p a credit, and an event with a venue layout uses two credits a ticket. |
      | [TixFox](/compared-to/tixfox/) | £380 | 38p a ticket, or 30p under £5. Platform fees are not returned on a refund. |
      | [Ticket Tailor](/compared-to/ticket-tailor/) | £410 | 41p a ticket buying prepaid credits 500 at a time. Pay-as-you-go is 60p a ticket, which is £600, and the largest bundles reach 22p. Charities get 50% off. |
      | [Hi.Events](/compared-to/hi-events/) cloud | £470 | 0.75% + about 32p a ticket. |
      | [Pretix Hosted](/compared-to/pretix/) | £500 | 2.5% of ticket value, capped at about £13 a ticket. |
      | [PTA Events](/compared-to/pta-events/) | £600 | The £299.99 + VAT Premium plan charges 1.5% a transaction. The free Starter plan charges 3.95%, which is £790 at this volume. |
      | [Tito](/compared-to/tito/) | £600 | 3% a ticket. 2.5% for charities and community groups. |
      | [BookitBee](/compared-to/bookitbee/) | £700 | From 3.5% a ticket, minimum 50p, capped at £19.95. |
      | [QRTicket](/compared-to/qrticket/) | £770 | About 77p a ticket, paid through PayPal, whose processing rate is higher than Stripe's. The buyer pays by default. |
      | [Revel](/compared-to/revel/) hosted | £1,030 | 3% + about 43p a ticket. |
      | [Fatsoma](/compared-to/fatsoma/) | £2,000 | 10% a ticket, minimum £1. |

      | Option | Year, processing included | What makes up the cost |
      |---|---|---|
      | [Ticketebo](/compared-to/ticketebo/) | £990 | 4.95% including VAT of each order, 75p minimum. The buyer pays by default. |
      | [Ticketpass](/compared-to/ticketpass/) (Essentials) | £1,160 | A booking fee and a service fee of 1.9% + 20p each, excluding VAT. |
      | [Ticketted](/compared-to/ticketted/) | £1,290 | 3.95% + A$0.95 a ticket, converted at 52.3p to the Australian dollar. Charities and schools pay 2.45% + A$0.45. |
      | [Humanitix](/compared-to/humanitix/) | £1,394 | 4.67% + 46p a ticket, excluding VAT. Charities and schools pay 3.33% + 25p, which is about £916. |
      | [TicketSource](/compared-to/ticketsource/) | £1,400 | 7% a booking excluding VAT with TicketSource processing, or 4.5% plus the organiser's own Stripe, which comes to the same figure on a £20 ticket. |
      | [FIXR](/compared-to/fixr/) (Pro) | £1,488 | 4.99% + 49p a ticket plus VAT, £1 minimum. Buyers usually pay it. |
      | [Weezevent](/compared-to/weezevent/) | £1,490 | 2.5% + 99p a ticket including tax, with banking fees included. |
      | [EVENTIM.Light](/compared-to/eventim-light/) | £1,600 | 8% a ticket. The fee can be passed to buyers. |
      | [Eventbrite](/compared-to/eventbrite/) | £1,980 | 6.95% + 59p a ticket. |
      | [Ticketpass](/compared-to/ticketpass/) (Pro) | £2,100 | 3.5% + 35p each on the booking fee and the service fee. |

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
    dark: true
    content: |
      ## What the cheapest options include

      The options that charge about £100 a year or less are not the same
      product. This table sets them beside Chobble Tickets on what the
      organiser can read, run, brand and move, using the classifications
      recorded on each comparison page.

      | Option | Source code | Self-hosting | Own domain and branding | Marketplace |
      |---|---|---|---|---|
      | **Chobble Tickets** managed, £50 a year | AGPL-3.0-only, complete product | Same product, no licence fee | Both included in the £50 | None |
      | **Chobble Tickets** self-hosted, about £9 a year | AGPL-3.0-only, complete product | The deployment described above | Both, on the organiser's own account | None |
      | [tickts](/compared-to/tickts/) Starter, nothing beyond processing | Not published | Not offered | Both on the £690 Pro plan | Events listed on tickts |
      | [SumUp Online Store](/compared-to/sumup-store/), nothing beyond processing | Not published | Not offered | Own domain and storefront branding, SumUp checkout | None |
      | [Dandelion](/compared-to/dandelion/), a requested 1% | Source-available, Apache 2.0 after two years | Internal use only for two years | Neither documented | Events listed on Dandelion |
      | [Event Schedule](/compared-to/event-schedule/) Pro, about £40 a year | Attribution Assurance Licence | Same product | Branding on Pro, domain on the £120 Enterprise plan | Events listed for discovery |
      | [Revel](/compared-to/revel/) self-hosted, £56 to £104 a year | MIT | Same product | Both, on the organiser's own server | Not documented |
      | [Pretix](/compared-to/pretix/) Community, £56 to £104 a year | Open core, enterprise plugins sold separately | Community edition | Both, on the organiser's own server | None |
      | [Hi.Events](/compared-to/hi-events/) self-hosted, £56 to £104 a year | AGPL with additional terms | Same product with conditions | Both, with a branding notice unless a $499 licence removes it | Not documented |

      The self-hosted rows let an organiser read the code, run it on a server
      they control, and keep their own domain and branding, which is what
      Chobble Tickets allows as well. That is why the claim below is about the
      combination rather than about published source alone.

      What each asks in return differs. Revel asks only for the server. Pretix
      Community leaves the enterprise plugins on a paid edition, and Hi.Events
      shows a "Powered by Hi.Events" notice until a $499 licence removes it.

      Among the providers with verified records on this site, Chobble Tickets
      is the only managed product that combines one volume-independent price,
      every current feature in that price, no per-sale platform fee, and
      self-hosting of the same source-published product. Ticket income goes
      straight to the organiser's own Stripe, Square or SumUp account, and the
      database and event setup can be [downloaded](/features/backups/) and
      [exported](/features/catalogue-import-export/) and taken to another host.

      Some costs sit outside the fee. A provider that lists events in a public
      marketplace can market other organisers' events to attendees, and a
      provider that holds ticket money pays it out on its own schedule rather
      than as each sale clears.
  - type: markdown
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
