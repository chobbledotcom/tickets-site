---
title: No Per-Ticket Platform Fees - Chobble Tickets
meta_title: No Per-Ticket Platform Fees | Chobble Tickets
meta_description: Managed hosting costs £50 a year or £5 a month regardless of ticket volume. Payment-provider charges remain separate; worked examples show the total cost.
permalink: /features/no-per-ticket-fees/
eleventyNavigation:
  key: No Per-Ticket Fees
  parent: Selling Tickets
  order: 1
blocks:
  - type: hero
    class: gradient
    content: |-
      # No per-ticket platform fees

      Chobble Tickets charges a flat £50/year, or £5/month, regardless of how many tickets you sell. Chobble adds no percentage cut or per-ticket platform charge. Payment-provider fees remain separate.
  - type: markdown
    content: |
      ## How flat-fee ticketing works

      Many ticketing platforms take a percentage of every ticket you sell, plus a
      fixed fee per ticket. The more tickets you sell, the more you pay. If you
      raise your ticket prices, your fees go up too.

      Chobble Tickets works differently. You pay £50/year for
      [managed hosting](/pricing/), or £5/month
      if you prefer monthly billing. That covers unlimited events and unlimited
      tickets. Money from ticket sales goes directly to your Stripe, Square, or
      SumUp account. The selected provider charges its normal processing fee;
      for example, Stripe's standard UK card rate is 1.5% + 20p per transaction.

      Monthly billing works out at £60 over a year, which is £10 more than the
      annual rate. The difference covers the extra Stripe transaction fees on
      the additional charges and the admin overhead of failed payments.

      Charities, community groups, artists, and musicians pay £25/year on the
      annual plan (50% discount). The discount applies to annual billing only.
      If you self-host, Chobble charges no software licence fee. The operator
      pays for infrastructure, payment processing and any other configured
      services.
  - type: markdown
    dark: true
    content: |
      ## What the hosting fee covers

      The managed-hosting fee covers the ticketing software, infrastructure,
      updates, backup tools and written support. Chobble does not vary that fee
      by ticket volume or ticket value.

      Payment providers still charge for processing each transaction. Those
      charges vary by provider, card type and country. Organisers can compare
      them separately from Chobble's hosting price.

      Chobble CIC receives income from hosting and technical work rather than
      advertising or attendee data sales. The [About page](/about/) explains
      the company structure.
  - type: stats
    dark: true
    items:
      - value: £50
        label: Per Year (or £5/month)
      - value: ∞
        label: Events
      - value: ∞
        label: Tickets
      - value: 0%
        label: Platform Commission
  - type: markdown
    content: |
      ## Worked examples at different scales

      These examples compare the total annual cost of Chobble Tickets against
      a platform charging 6.95% + £0.59 per ticket (a common rate among large
      UK ticketing providers). The examples use the £50/year annual plan.
      Monthly billing (£5/month, total £60/year) adds £10 to the Chobble
      Tickets total. Chobble's payment processing (Stripe: 1.5% + 20p) is
      shown separately. The per-ticket platform's fee includes payment
      processing. Each example assumes one ticket per payment transaction;
      buying several tickets in one payment changes the fixed processing total.

      ### 50 tickets per year at £10 each

      | | Per-ticket platform | Chobble Tickets |
      |---|---|---|
      | Annual fee | £0 | £50 |
      | Platform fees | £64.25 | £0 |
      | Payment processing | £0 (included above) | £17.50 |
      | **Total fees** | **£64.25** | **£67.50** |
      | **Cost per ticket** | **£1.29** | **£1.35** |
      | **You keep** | **£435.75** | **£432.50** |

      At very low volumes, a per-ticket platform is slightly cheaper, by
      £3.25 per year in this example. The breakeven point for £10 tickets is
      around 54 tickets per year.

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
      per ticket drops to 53p because the £50/year annual fee is spread
      across more sales.

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
    dark: true
    content: |
      ## Why per-ticket fees add up

      Per-ticket pricing creates three problems for event organisers:

      **Fees scale with success.** If you sell more tickets or raise your prices,
      your platform costs go up, even though the platform does the same amount of
      work. A 6.95% + £0.59 fee on a £30 ticket is £2.68. Sell 1,000 of those
      and you have paid £2,680 in platform fees alone.

      **Fees are hard to predict.** When your costs depend on how many tickets
      you sell and at what price, you cannot know your costs in advance. With a
      flat fee, your platform cost is £50/year (or £5/month) whether you sell
      10 tickets or 10,000.

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
      > - [Elliott's Bouncy Castle Hire](https://www.elliottsbouncycastlehire.co.uk/news/2026-02-13/new-ticket-platform-initial-review), who switched from Eventbrite after 12 years

      > "Eventbrite takes £275 per event, but Chobble is £87.50. Sure, I have to
      > pay £50 a year for Chobble, but that cost is absorbed in less than the
      > first event. It's literally paying for itself on the first event and
      > still saving nearly £100."
  - type: markdown
    dark: true
    content: |
      ## Compare fees across platforms

      Use the calculator below to enter your own ticket volume and price. It
      shows fees for 17+ ticketing platforms side by side. The separate
      [platform fee calculator](/compared-to/compare-all/) explains the
      comparison assumptions.
  - type: include
    file: platform-comparison-grid.html
  - type: markdown
    content: |
      ## What you pay

      Chobble Tickets does not hold ticket income. Payments go through the
      organiser's selected Stripe, Square or SumUp account. The provider
      charges its own processing fee under the organiser's account terms.

      | Cost | Amount |
      |---|---|
      | Chobble Tickets (managed hosting, annual) | £50/year |
      | Chobble Tickets (managed hosting, monthly) | £5/month (£60/year) |
      | Chobble Tickets software (self-hosted) | No Chobble licence fee; infrastructure and services separate |
      | Stripe payment processing | 1.5% + 20p per transaction |
      | Per-ticket platform fee | None |

      The £50/year or £5/month managed-hosting price does not change with the
      number or value of tickets sold.
  - type: markdown
    dark: true
    content: |
      ## Who the flat fee works best for

      The flat-fee model is cheaper for most organisers who sell more than a
      handful of tickets per year. It works particularly well for:

      - **Regular event runners** who sell tickets every week or month, because
        the £50/year (or £5/month) cost is spread across all events
      - **High-volume events** where per-ticket fees would add up to hundreds
        or thousands of pounds
      - **Low-price events** (under £5 per ticket) where a fixed per-ticket fee
        would be a large proportion of the ticket price
      - **Charities and community groups** who pay £25/year on the annual plan
        and want every pound from ticket sales to go towards their cause

      If you run one small event per year with fewer than about 60 tickets, a
      per-ticket platform may cost less. The
      [platform fee calculator](/compared-to/compare-all/) can help you check.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Try Chobble Tickets

      Sign up for managed hosting at £50/year or £5/month with no per-ticket platform fee, or self-host without paying Chobble a licence fee.
name: No Per-Ticket Platform Fees | Chobble Tickets
---
