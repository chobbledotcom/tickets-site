---
layout: design-system-base.html
competitor_key: eventbrite
title: No Per-Ticket Fees - Chobble Tickets
meta_title: No Per-Ticket Fees | Flat Annual Pricing - Chobble Tickets
meta_description: Chobble Tickets charges a flat £50/year with no per-ticket fees. See worked examples at different scales and compare total costs against percentage-based platforms.
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
      Chobble Tickets costs £50 per year. There are no per-ticket fees, no
      percentage cuts, and no hidden charges. You pay the same amount whether
      you sell 10 tickets or 10,000.

  - type: markdown
    content: |
      ## How the flat-fee model works

      Most ticketing platforms charge a percentage of each ticket sale plus a
      fixed fee per ticket. The more tickets you sell and the higher your
      prices, the more you pay.

      Chobble Tickets works differently. You pay a flat £50 per year for
      managed hosting. That covers unlimited events, unlimited tickets, and
      every feature on the platform. The only other cost is payment processing
      through Stripe (1.5% + 20p per transaction), which goes to Stripe, not
      to Chobble.

      Charities, community groups, artists, and musicians pay £25 per year.

      If you self-host, the software is free. You still pay Stripe's processing
      fees, but there is no annual fee and no licence cost.

  - type: markdown
    section_class: alt
    content: |
      ## Worked examples at different scales

      These examples compare the total annual cost of Chobble Tickets against
      a platform charging 6.95% + £0.59 per ticket (Eventbrite's current UK
      rate as of March 2026). Both include payment processing fees where
      applicable. Eventbrite's fee includes payment processing. Chobble's does
      not, so Stripe's 1.5% + 20p is shown separately.

      ### 50 tickets per year at £10 each

      | | Chobble Tickets | Percentage-based platform |
      |---|---|---|
      | Annual fee | £50.00 | £0.00 |
      | Platform fees | £0.00 | £64.25 |
      | Payment processing | £17.50 | £0.00 |
      | **Total cost** | **£67.50** | **£64.25** |
      | **Cost per ticket** | **£1.35** | **£1.29** |
      | **You keep** | **£432.50** | **£435.75** |

      At very low volumes, Chobble Tickets costs slightly more — £3.25 per
      year in this example. The breakeven point for £10 tickets is around
      54 tickets per year. Below that, a percentage-based platform costs less.

      ### 500 tickets per year at £15 each

      | | Chobble Tickets | Percentage-based platform |
      |---|---|---|
      | Annual fee | £50.00 | £0.00 |
      | Platform fees | £0.00 | £816.25 |
      | Payment processing | £212.50 | £0.00 |
      | **Total cost** | **£262.50** | **£816.25** |
      | **Cost per ticket** | **£0.53** | **£1.63** |
      | **You keep** | **£7,237.50** | **£6,683.75** |

      At 500 tickets, the difference is £553.75 per year. The cost per ticket
      with Chobble Tickets drops to 53p because the £50 annual fee is spread
      across more sales.

      ### 5,000 tickets per year at £20 each

      | | Chobble Tickets | Percentage-based platform |
      |---|---|---|
      | Annual fee | £50.00 | £0.00 |
      | Platform fees | £0.00 | £9,900.00 |
      | Payment processing | £2,500.00 | £0.00 |
      | **Total cost** | **£2,550.00** | **£9,900.00** |
      | **Cost per ticket** | **£0.51** | **£1.98** |
      | **You keep** | **£97,450.00** | **£90,100.00** |

      At 5,000 tickets, you keep £7,350 more per year with Chobble Tickets.
      The percentage model takes £9,900 in platform fees alone.

  - type: markdown
    content: |
      > "Eventbrite takes £275 per event, but Chobble is £87.50. Sure, I have
      > to pay £50 a year for Chobble, but that cost is absorbed in less than
      > the first event. It's literally paying for itself on the first event
      > and still saving nearly £100."
      >
      > — [Elliott's Bouncy Castle Hire](https://www.elliottsbouncycastlehire.co.uk/news/2026-02-13/new-ticket-platform-initial-review)

  - type: include
    file: price-comparator.html

  - type: markdown
    content: |
      ## Why percentage fees add up

      Percentage-based pricing is designed so that the platform earns more as
      you earn more. A 6.95% + £0.59 fee on a £10 ticket is £1.29. On a £50
      ticket it is £4.07. On a £100 ticket it is £7.54.

      The fee grows with the ticket price, even though the platform does the
      same amount of work regardless of whether the ticket costs £5 or £500.

      With flat annual pricing, the cost of the platform stays the same no
      matter what you charge for tickets or how many you sell.

  - type: markdown
    section_class: alt
    content: |
      ## What you still pay

      Chobble Tickets does not handle money directly. Payments go through
      Stripe (or Square), which charges its own processing fee. In the UK,
      Stripe charges 1.5% + 20p per transaction.

      This is the same payment processor fee you would pay on most other
      ticketing platforms. The difference is that Chobble Tickets does not add
      its own fee on top.

      | Cost | Amount |
      |---|---|
      | Chobble Tickets (managed hosting) | £50/year |
      | Chobble Tickets (self-hosted) | Free |
      | Stripe payment processing | 1.5% + 20p per transaction |
      | Per-ticket platform fee | None |

  - type: markdown
    content: |
      ## Why flat pricing exists

      Chobble is a community interest company. Its income comes from the
      annual fee that organisers pay, not from taking a cut of each ticket
      sale. There is no advertising revenue and no data economy subsidising
      the price.

      This structure means that Chobble has no financial incentive to
      encourage higher ticket prices or more frequent events. The fee is the
      same whether you run one event a year or one hundred.

  - type: cta
    title: Start selling tickets with no per-ticket fees
    description: >-
      Sign up for managed hosting at £50/year with no per-ticket fees, or
      self-host for free.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
