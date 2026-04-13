---
layout: design-system-base.html
title: No Per-Ticket Fees - Chobble Tickets
meta_title: No Per-Ticket Fees | Flat Annual Fee Event Ticketing
meta_description: Chobble Tickets charges a flat £50/year with no per-ticket fees or percentage cuts. See worked examples at 50, 500, and 5,000 tickets to compare the cost against percentage-based platforms.
permalink: /features/no-per-ticket-fees/
eleventyNavigation:
  key: No Per-Ticket Fees
  parent: Features
  order: 5
blocks:
  - type: hero
    container_width: full
    class: gradient
    title: No per-ticket fees
    lead: >-
      Chobble Tickets charges a flat £50/year regardless of how many tickets you
      sell. There is no percentage cut, no per-ticket charge, and no hidden fees.

  - type: markdown
    content: |
      ## How flat-fee ticketing works

      Most ticketing platforms take a percentage of every ticket you sell, plus a
      fixed fee per ticket. The more tickets you sell, the more you pay. If you
      raise your ticket prices, your fees go up too.

      Chobble Tickets works differently. You pay £50/year for managed hosting.
      That covers unlimited events and unlimited tickets. Money from ticket sales
      goes directly to your Stripe or Square account, minus only the payment
      processor's standard fee (1.5% + 20p per transaction in the UK).

      Charities, community groups, artists, and musicians pay £25/year (50%
      discount).

  - type: markdown
    section_class: alt
    content: |
      ## Why flat-fee pricing is possible

      Processing a ticket costs very little. When someone books a ticket, the
      server stores a small amount of data, sends a confirmation email, and
      generates a QR code. The infrastructure cost of doing this is less than a
      penny per attendee.

      That means the actual cost of running a ticketing platform does not go up
      meaningfully with each ticket sold. A platform that sells 100 tickets a
      month and one that sells 10,000 tickets a month have similar hosting
      costs. The expensive parts — building the software, maintaining it,
      providing support — are fixed costs that do not depend on ticket volume.

      Per-ticket fees on other platforms are not driven by per-ticket costs.
      They are a business model choice. Percentage-based pricing lets a platform
      take more money from organisers who sell more tickets or charge higher
      prices, even though the platform's cost of processing each ticket is the
      same.

      Chobble Tickets charges a flat annual fee because that reflects the actual
      cost structure: fixed costs covered by a fixed price. There is no
      per-ticket cost to pass on, so there is no per-ticket fee.

  - type: stats
    section_class: alt
    items:
      - value: "\u00A350"
        label: Per Year
      - value: "\u221E"
        label: Events
      - value: "\u221E"
        label: Tickets
      - value: "0%"
        label: Platform Commission

  - type: markdown
    content: |
      ## Worked examples

      These examples compare the total fees you would pay in a year on Chobble
      Tickets versus a platform that charges 6.95% + £0.59 per ticket (a common
      rate among large ticketing providers). Both include payment processing fees
      where applicable.

      ### 50 tickets at £15 each (£750 total sales)

      | | Per-ticket platform | Chobble Tickets |
      |---|---|---|
      | Annual fee | £0 | £50 |
      | Platform fees | £66.25 (6.95% + £0.59 &times; 50) | £0 |
      | Payment processing | £0 (included above) | £21.25 (1.5% + 20p &times; 50) |
      | **Total fees** | **£66.25** | **£71.25** |
      | **You keep** | **£683.75** | **£678.75** |

      At 50 tickets a year, a per-ticket platform is slightly cheaper. If you
      sell fewer than about 60 tickets a year at this price, a per-ticket model
      may cost less.

      ### 500 tickets at £15 each (£7,500 total sales)

      | | Per-ticket platform | Chobble Tickets |
      |---|---|---|
      | Annual fee | £0 | £50 |
      | Platform fees | £662.50 (6.95% + £0.59 &times; 500) | £0 |
      | Payment processing | £0 (included above) | £212.50 (1.5% + 20p &times; 500) |
      | **Total fees** | **£662.50** | **£262.50** |
      | **You keep** | **£6,837.50** | **£7,237.50** |

      At 500 tickets, you keep £400 more with Chobble Tickets.

      ### 5,000 tickets at £15 each (£75,000 total sales)

      | | Per-ticket platform | Chobble Tickets |
      |---|---|---|
      | Annual fee | £0 | £50 |
      | Platform fees | £6,625 (6.95% + £0.59 &times; 5,000) | £0 |
      | Payment processing | £0 (included above) | £2,125 (1.5% + 20p &times; 5,000) |
      | **Total fees** | **£6,625** | **£2,175** |
      | **You keep** | **£68,375** | **£72,825** |

      At 5,000 tickets, you keep £4,450 more with Chobble Tickets. The gap
      grows with every ticket you sell, because Chobble's cost stays flat while
      percentage-based fees scale with volume.

  - type: markdown
    section_class: alt
    content: |
      ## Why per-ticket fees add up

      Per-ticket pricing creates three problems for event organisers:

      **Fees scale with success.** If you sell more tickets or raise your prices,
      your platform costs go up, even though the platform does the same amount of
      work. A 6.95% + £0.59 fee on a £30 ticket is £2.68. Sell 1,000 of those
      and you have paid £2,680 in platform fees alone.

      **Fees are hard to predict.** When your costs depend on how many tickets
      you sell and at what price, you cannot know your costs in advance. With a
      flat annual fee, your platform cost is £50 whether you sell 10 tickets or
      10,000.

      **Fees discourage low-cost tickets.** If your event charges £3 per ticket,
      a £0.59 fixed fee per ticket is nearly 20% of the ticket price. This
      pushes organisers to raise prices or absorb the cost. Chobble Tickets has
      no per-ticket fee, so low-price events are not penalised.

  - type: markdown
    content: |
      > "Most stay and plays are somewhere between £1-£4 a ticket. If you add a
      > ticket fee of £1 to it, then in some cases you're literally double the
      > cost to the user - and if they are happy to pay that, then why should it
      > go to the ticket platform? It's better off in your pocket."
      >
      > — [Elliott's Bouncy Castle Hire](https://www.elliottsbouncycastlehire.co.uk/news/2026-02-13/new-ticket-platform-initial-review), who switched from Eventbrite after 12 years

      > "Eventbrite takes £275 per event, but Chobble is £87.50. Sure, I have to
      > pay £50 a year for Chobble, but that cost is absorbed in less than the
      > first event. It's literally paying for itself on the first event and
      > still saving nearly £100."

  - type: markdown
    section_class: alt
    content: |
      ## Compare fees across platforms

      Use the calculator below to enter your own ticket volume and price. It
      shows fees for 17+ ticketing platforms side by side.

  - type: include
    file: platform-comparison-grid.html

  - type: markdown
    content: |
      ## Where the money goes

      When someone buys a ticket through Chobble Tickets, the payment goes
      directly to your Stripe or Square account. Chobble never holds your
      revenue.

      The only per-transaction cost is Stripe's standard processing fee (1.5% +
      20p in the UK). Every platform that uses Stripe pays this same rate — some
      just bundle it into a larger per-ticket fee so it is not visible
      separately.

      Chobble's £50/year covers hosting, software updates, and support. Because
      the infrastructure cost per ticket is less than a penny, there is no
      reason to charge you more when you sell more. If you prefer, you can
      [self-host Chobble Tickets for free](/features/open-source/) and pay only
      the Stripe processing fees.

  - type: markdown
    section_class: alt
    content: |
      ## Who the flat fee works best for

      The flat-fee model is cheaper for most organisers who sell more than a
      handful of tickets per year. It works particularly well for:

      - **Regular event runners** who sell tickets every week or month, because
        the £50 cost is spread across all events
      - **High-volume events** where per-ticket fees would add up to hundreds
        or thousands of pounds
      - **Low-price events** (under £5 per ticket) where a fixed per-ticket fee
        would be a large proportion of the ticket price
      - **Charities and community groups** who pay £25/year and want every pound
        from ticket sales to go towards their cause

      If you run one small event per year with fewer than about 60 tickets, a
      per-ticket platform may cost less. The [fee calculator above](#compare-fees-across-platforms) can
      help you check.

  - type: cta
    title: Try Chobble Tickets
    description: Sign up for managed hosting at £50/year with no per-ticket fees, or self-host for free.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
