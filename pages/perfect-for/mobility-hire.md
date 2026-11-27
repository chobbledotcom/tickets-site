---
title: Mobility Hire - Chobble Tickets
meta_title: Mobility Scooter and Wheelchair Hire Software | Chobble Tickets
meta_description: Take daily and weekly mobility scooter or wheelchair hire bookings, with delivery, encrypted access details, deposits and no attendee marketing.
permalink: /perfect-for/mobility-hire/
eleventyNavigation:
  key: Mobility Hire
  parent: Perfect For
  order: 40
blocks:
  - type: hero
    class: gradient
    badge: For mobility equipment hire
    content: |-
      # Mobility equipment hire booking software

      Hire out wheelchairs, mobility scooters and walking aids by the day or week. Customers give the delivery address and access details, pay a deposit, and staff add the drop-off and collection to a run sheet.

      This suits a local hire service. It does not keep a serial number, service history or insurance record for each item, and it does not hold a refundable damage deposit.
    buttons:
      - text: Start for £5
        href: https://tix.chobble.com/listings
        variant: primary
        size: lg
      - text: See pricing
        href: /pricing/
        variant: secondary
        size: lg
  - type: stats
    dark: true
    items:
      - value: Daily or weekly
        label: Price the hire lengths you offer
      - value: Delivered
        label: Drop-off and collection run sheets
      - value: Encrypted
        label: Free-text access details at rest
      - value: £50
        label: Managed hosting per year
  - type: markdown
    content: |
      ## Daily and weekly hire

      Create a [daily listing](/features/daily-events/) for each type of equipment, such as a four-wheel scooter, a transit wheelchair or a shower chair. Set capacity to the number of units you hold.

      You publish a total price for each hire length. A scooter might cost £25 for one day, £60 for a week and £200 for a month. [Multi-day hire](/features/multi-day-hire/) counts every day in the range, and a confirmed booking uses capacity on each one.

      For a paid hire, capacity is checked when payment confirmation arrives. If two payments reach the last scooter for the same dates, the later one is refunded. Checkout does not hold it.
  - type: split-icon-links
    content: |
      ## Delivery, access and privacy

      Use [custom questions](/features/custom-questions/) for the floor and whether a lift is available. Free-text answers are encrypted with the owner key. Ask only for details needed to arrange the hire.

      [Logistics](/features/logistics/) assigns the drop-off and collection to a driver. An agent-class user sees the jobs assigned to their agent, including the address, phone number and map link. Arrange any access instructions the driver needs separately.

      Chobble Tickets does not send marketing to customers. The operator can send messages about bookings.
    figure_items:
      - icon: hugeicons:lock
        text: Access details are encrypted at rest
      - icon: hugeicons:delivery-truck-02
        text: Drivers see only their own run sheet
      - icon: hugeicons:security-check
        text: No attendee marketing from Chobble
  - type: markdown
    content: |
      ## Taking a damage deposit

      Chobble Tickets can split the hire price into a deposit at booking and a balance later. That is a part-payment, not a refundable security deposit.

      A damage deposit can be added as a mandatory fixed-price modifier or a percentage-based booking fee. A reservation payment may cover only part of the total with that modifier. After the equipment is returned and checked, return the unused part from the Stripe, Square or SumUp dashboard.

      No card pre-authorisation or held balance is part of the Chobble product. A partial refund is made in the payment provider's dashboard, not the Chobble admin panel, and the ledger does not reconcile it automatically. The [hire deposits guide](/guide/choosing-hire-software/security-deposits-for-hire/) covers the risk.
  - type: markdown
    content: |
      ## Worked example

      A hire service has five scooters and charges £60 for a week. Four bookings start on the same Monday, leaving one scooter. A fifth confirmed booking fills the listing. If two payments race for that last scooter, the later order is refunded.

      Each customer gives a flat number and lift details. Staff arrange to pass any instructions the driver needs to them separately. The service adds a £100 damage deposit as a mandatory charge, checks each scooter on return, and refunds the deposit in the payment dashboard.

      The service does not record which scooter went to which customer. It counts five available units.
  - type: markdown
    content: |
      ## What this setup does not do

      - It does not track individual scooters or wheelchairs by serial number.
      - It does not keep a service, repair or MOT-style history for each unit.
      - It does not hold or pre-authorise a refundable damage deposit.
      - Booking balance invoices are available, but specialist NHS, insurer or care authority billing integrations should be checked separately.
      - It does not offer an arbitrary hourly time picker. Fixed hire times can be separate named listings in a group, but do not check overlaps with full-day hires.

      A rental operations or asset management system is the better fit when each item needs its own maintenance and compliance record.
  - type: features
    dark: true
    intro_content: "## Features for mobility hire"
    items:
      - icon: hugeicons:calendar-add-01
        description: Offer daily, weekly and monthly prices and check stock across the whole range.
        name: <a href="/features/multi-day-hire/">Multi-day hire</a>
      - icon: hugeicons:lock
        description: Encrypt names, addresses and free-text access details at rest.
        name: <a href="/features/encrypted/">Encrypted data</a>
      - icon: hugeicons:delivery-truck-02
        description: Give each driver a run sheet with addresses, phone numbers and map links.
        name: <a href="/features/logistics/">Logistics</a>
  - type: markdown
    content: |
      ## Related uses

      [Equipment hire](/perfect-for/equipment-hire/) covers tools and home equipment. [Camping hire](/perfect-for/camping-hire/) covers delivered kit, and [community centres](/perfect-for/community-centres/) covers room and hall hire for local groups.
  - type: markdown
    content: |
      ## Other options you might be considering

      [Booqable](/compared-to/booqable/) tracks unique inventory and supports security deposits. [EZRentOut](/compared-to/ezrentout/) records maintenance and work orders for each asset. [TWICE Commerce](/compared-to/rentle/) also handles serialised stock and deposits. Each does more asset tracking than Chobble Tickets and costs more.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Take mobility hire bookings

      A hosted Chobble site is £50/year or £5/month, with no Chobble fee per booking. Payments go to your own Stripe, Square or SumUp account.
name: Mobility Hire
---
