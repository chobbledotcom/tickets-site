---
layout: design-system-base.html
title: No Per-Ticket Fees - Chobble Tickets
meta_title: No Per-Ticket Fees | Flat Annual Fee Event Ticketing
meta_description: Chobble Tickets charges a flat £50/year with no per-ticket fees or percentage cuts. See worked examples at 50, 500, and 5,000 tickets to compare the cost against percentage-based platforms.
permalink: /features/no-per-ticket-fees/
eleventyNavigation:
  key: No Per-Ticket Fees
  parent: Selling Tickets
  order: 1
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
      discount). If you self-host, the software is free — you only pay Stripe's
      processing fees.

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

      Chobble is a [community interest company](/features/open-source/), not a
      venture-funded startup. Its income comes from annual fees, not from
      taking a cut of ticket sales. There is no advertising revenue and no
      data economy subsidising the price.

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
      ## Worked examples at different scales

      These examples compare the total annual cost of Chobble Tickets against
      a platform charging 6.95% + £0.59 per ticket (a common rate among large
      UK ticketing providers). Chobble's payment processing (Stripe: 1.5% +
      20p) is shown separately. The per-ticket platform's fee includes payment
      processing.

      ### 50 tickets per year at £10 each

      | | Per-ticket platform | Chobble Tickets |
      |---|---|---|
      | Annual fee | £0 | £50 |
      | Platform fees | £64.25 | £0 |
      | Payment processing | £0 (included above) | £17.50 |
      | **Total fees** | **£64.25** | **£67.50** |
      | **Cost per ticket** | **£1.29** | **£1.35** |
      | **You keep** | **£435.75** | **£432.50** |

      At very low volumes, a per-ticket platform is slightly cheaper — £3.25
      per year in this example. The breakeven point for £10 tickets is around
      54 tickets per year.

      ### 500 tickets per year at £15 each

      | | Per-ticket platform | Chobble Tickets |
      |---|---|---|
      | Annual fee | £0 | £50 |
      | Platform fees | £816.25 | £0 |
      | Payment processing | £0 (included above) | £212.50 |
      | **Total fees** | **£816.25** | **£262.50** |
      | **Cost per ticket** | **£1.63** | **£0.53** |
      | **You keep** | **£6,683.75** | **£7,237.50** |

      At 500 tickets, you keep £553.75 more with Chobble Tickets. The cost
      per ticket drops to 53p because the £50 annual fee is spread across
      more sales.

      ### 5,000 tickets per year at £20 each

      | | Per-ticket platform | Chobble Tickets |
      |---|---|---|
      | Annual fee | £0 | £50 |
      | Platform fees | £9,900 | £0 |
      | Payment processing | £0 (included above) | £2,500 |
      | **Total fees** | **£9,900** | **£2,550** |
      | **Cost per ticket** | **£1.98** | **£0.51** |
      | **You keep** | **£90,100** | **£97,450** |

      At 5,000 tickets, you keep £7,350 more per year with Chobble Tickets.
      The percentage-based platform takes £9,900 in fees alone.

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
      ## What you pay

      Chobble Tickets does not handle money directly. Payments go through
      Stripe (or Square) to your own account. Chobble never holds your revenue.

      The only per-transaction cost is Stripe's standard processing fee, which
      is the same rate you would pay on any platform that uses Stripe. Some
      platforms bundle this into their own fee so it is not visible separately.

      | Cost | Amount |
      |---|---|
      | Chobble Tickets (managed hosting) | £50/year |
      | Chobble Tickets (self-hosted) | Free |
      | Stripe payment processing | 1.5% + 20p per transaction |
      | Per-ticket platform fee | None |

      Because the infrastructure cost per ticket is less than a penny, there is
      no reason to charge you more when you sell more. The £50/year covers
      hosting, software updates, and support.

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
