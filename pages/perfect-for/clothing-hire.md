---
title: Clothing Hire - Chobble Tickets
meta_title: Dress and Clothing Hire Booking Software | Chobble Tickets
meta_description: Take dress, suit and costume hire bookings by the day or week, with size options, encrypted measurements, deposits and return run sheets.
permalink: /perfect-for/clothing-hire/
eleventyNavigation:
  key: Clothing Hire
  parent: Perfect For
  order: 37
blocks:
  - type: hero
    class: gradient
    badge: For dress, suit and costume hire
    content: |-
      # Clothing and costume hire booking software

      Let customers choose a garment, a size and a hire length, and pay a deposit at booking. Free-text answers to measurement and event questions are encrypted.

      This suits a shop or studio hiring out its own stock. It does not track each garment by barcode, and it does not hold a refundable damage deposit. Both limits are explained below.
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
      - value: 3 or 7 days
        label: Publish the hire lengths you offer
      - value: By size
        label: Count stock for each style and size
      - value: Encrypted
        label: Free-text answers, including measurements
      - value: £50
        label: Managed hosting per year
  - type: markdown
    content: |
      ## One listing for each style and size

      A garment style that comes in several sizes is easiest to run as a [daily listing](/features/daily-events/) for each size. "Silk dress, size 10" has its own price and its own capacity, so the size-10 stock is counted separately from the size-12 stock.

      Customers pick a start date and a hire length. You publish a total price for each length, such as three days for £45 or seven days for £75. [Multi-day hire](/features/multi-day-hire/) checks capacity on every day the garment is out, including the days between collection and return.

      Capacity is a number, not a list of named garments. If two size-10 dresses are available, two bookings can use that listing on the same date, but Chobble Tickets will not say which dress went to which customer.
  - type: split-icon-links
    content: |
      ## Measurements and event details

      Use [custom questions](/features/custom-questions/) for height, measurements, the event date and whether the customer wants a fitting. Answers are required before checkout, and free-text answers are encrypted with the same owner key as the rest of the customer record.

      Questions can also drive price. A "premium alteration" answer can add a fixed charge, and the checkout total updates before payment.

      The [terms box](/features/terms-and-conditions/) requires the customer to tick the hire agreement before checkout. The shop can use it to show cleaning and late-return terms, but Chobble Tickets keeps no record of the tick or the wording shown.
    figure_items:
      - icon: hugeicons:file-02
        text: Collect measurements before the hire
      - icon: hugeicons:lock
        text: Free-text answers are encrypted
      - icon: hugeicons:file-validation
        text: Require hire terms at checkout
  - type: markdown
    content: |
      ## Collection, return and cleaning

      A booking can carry a collection and a return leg on the [logistics](/features/logistics/) run sheet. A shop can assign the legs to a member of staff or a courier, and each person sees only their own list.

      After a garment comes back, a [servicing event](/features/servicing-events/) can hold one place on its listing while it is cleaned or repaired. Check the calendar first: a hold does not move or cancel existing bookings.

      [Attendee statuses](/features/deposits-and-balance-payments/) can help staff track each booking from the admin panel.
  - type: markdown
    content: |
      ## Taking a damage deposit

      A Chobble Tickets reservation deposit pays part of the hire price. The customer pays some at booking and the rest through a balance link. That money is not held against damage or late return.

      To take a damage deposit, add a mandatory fixed-price modifier or a percentage-based booking fee to the order. On a part-payment booking, check how much is due before the garment goes out. After the garment is checked, return the unused part from the Stripe, Square or SumUp dashboard.

      Chobble Tickets does not keep the deposit, pre-authorise a card or return it automatically. A partial refund made in the provider dashboard is not issued or reconciled by Chobble Tickets. The [hire deposits guide](/guide/choosing-hire-software/security-deposits-for-hire/) covers the accounting risk.
  - type: markdown
    content: |
      ## Worked example

      A studio has six size-10 dresses and prices a three-day hire at £45. Four are already booked for a wedding weekend. A fifth booking leaves one dress. If two payments race for that final dress, the later order is refunded.

      Each customer answers height and measurement questions and accepts the cleaning terms. The studio adds a £50 damage deposit as a mandatory charge, checks each dress on return, and refunds the deposit in full from its payment dashboard.

      The studio does not record which of the six dresses each customer wore. It counts six available places, not six serial numbers.
  - type: markdown
    content: |
      ## What this setup does not do

      - It does not track individual garments by barcode or serial number.
      - It does not show a separate stock count for each size unless each size is its own listing.
      - It does not hold or pre-authorise a refundable damage deposit.
      - It does not offer an arbitrary fitting time picker. Fixed fitting times can be separate named listings in a group, but do not check overlaps with full-day hires.
      - It does not integrate with a courier's label or tracking service.

      A rental system built around serialised inventory is the better fit when every garment needs its own record.
  - type: features
    dark: true
    intro_content: "## Features for clothing hire"
    items:
      - icon: hugeicons:calendar-add-01
        description: Offer three-day and seven-day prices and count stock across every day of the hire.
        name: <a href="/features/multi-day-hire/">Multi-day hire</a>
      - icon: hugeicons:help-circle
        description: Ask for measurements, event dates and alteration choices before checkout.
        name: <a href="/features/custom-questions/">Custom questions</a>
      - icon: hugeicons:lock
        description: Keep names, contact details and free-text answers encrypted at rest.
        name: <a href="/features/encrypted/">Encrypted data</a>
  - type: markdown
    content: |
      ## Related uses

      [Personal stylists](/perfect-for/personal-stylists/) covers styling appointments rather than stock hire. [Equipment hire](/perfect-for/equipment-hire/) uses the same duration model for physical kit, and [mobility hire](/perfect-for/mobility-hire/) applies it to daily and weekly equipment.
  - type: markdown
    content: |
      ## Other options you might be considering

      [Booqable](/compared-to/booqable/) tracks unique items and supports security deposits. [TWICE Commerce](/compared-to/rentle/), formerly Rentle, also tracks serialised stock and includes deposits in its rental platform. Both cost more than Chobble Tickets and do more inventory work.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Put your rail online

      Chobble Tickets costs £50/year or £5/month for a hosted hire site. There is no Chobble fee on each booking.
name: Clothing Hire
---
