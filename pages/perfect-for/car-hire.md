---
title: Car Hire - Chobble Tickets
meta_title: Car Hire Booking Software for Independent Operators | Chobble Tickets
meta_description: Take car, van and campervan hire bookings by the day, with per-class capacity, deposits, licence questions, delivery run sheets and no per-booking fee.
permalink: /perfect-for/car-hire/
eleventyNavigation:
  key: Car Hire
  parent: Perfect For
  order: 36
blocks:
  - type: hero
    class: gradient
    badge: For independent vehicle hire
    content: |-
      # Car hire booking software for independent operators

      Sell a vehicle class by the day, take a deposit at booking and add the handover to a delivery run sheet. This setup suits a small operator that checks the licence and takes the damage deposit at collection.

      Chobble Tickets does not hold a refundable damage deposit or store a copy of a driving licence. The page explains how to handle both around the booking.
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
      - value: 1, 3 or 7 days
        label: Set a total price for each hire length
      - value: Per class
        label: Count the cars in each class
      - value: Both legs
        label: Delivery and collection on a run sheet
      - value: £50
        label: Managed hosting per year
  - type: markdown
    content: |
      ## Sell a class, not a registration

      Create one [daily listing](/features/daily-events/) for each class of vehicle, such as compact, estate or seven-seat. Set its capacity to the number of cars in that class. A customer books the class, not a registration plate, and your staff assign the actual vehicle at handover.

      With [multi-day hire](/features/multi-day-hire/), the customer picks a start date and a hire length. You publish a total price for each length you offer, so three days can cost £120 while one day costs £50. Chobble Tickets checks capacity on every day in the range.

      A paid booking uses capacity only when payment confirmation arrives. If two payments reach the last car in a class on the same day, the later payment is refunded automatically. Opening checkout does not hold a car.

      The same listing model covers vans, minibuses and campervans. Each class has its own price and its own count.
  - type: split-icon-links
    content: |
      ## Handover, licence and return

      Add [custom questions](/features/custom-questions/) for the return time and other details the handover needs. Ask for a licence number only if you need it. Free-text answers are encrypted with the same key as the rest of the customer record. A question is a text box, not a document upload, so the licence itself is checked at collection.

      The [terms box](/features/terms-and-conditions/) can require the customer to tick the hire agreement before checkout. It does not record acceptance or the version shown.

      At collection, staff can scan the booking's [QR code](/features/qr-code-check-ins/) to check in the attendee. Staff must track the vehicle handover separately. The attendee record keeps the booking, the answers and the payment history together.
    figure_items:
      - icon: hugeicons:security-check
        text: Licence number and return time as questions
      - icon: hugeicons:qr-code
        text: Scan the booking at collection
      - icon: hugeicons:file-validation
        text: Require the hire terms at checkout
  - type: markdown
    content: |
      ## Delivery and collection

      [Logistics](/features/logistics/) lets an administrator assign a drop-off and a collection to a driver, a van or a crew. Agents see only their own run sheet, with the address, contact number and a map link, and they mark each leg done.

      [Postcode lookup](/features/postcode-lookup/) helps the customer enter a complete delivery address. Staff can review it before assigning the job.

      The system does not choose routes, calculate mileage or dispatch the nearest driver. Those decisions stay with the operator.
  - type: markdown
    content: |
      ## Taking a damage deposit

      Chobble Tickets supports a part-payment deposit: the customer pays part of the hire price at booking and the rest through a balance link. That is a payment plan, not a refundable security deposit.

      For a damage deposit, add a mandatory fixed-price modifier or a percentage-based booking fee at checkout. For part-payments, check that the amount collected before handover covers the deposit. After the vehicle returns, refund the unused amount through the Stripe, Square or SumUp dashboard.

      Chobble Tickets does not pre-authorise a card or hold the money. Refund the deposit through the payment provider and record the return separately, as Chobble Tickets does not update its ledger for a partial refund made there. The [guide to hire deposits](/guide/choosing-hire-software/security-deposits-for-hire/) explains how this works.
  - type: markdown
    content: |
      ## Half days and hourly hire

      Chobble Tickets books whole days. For morning and afternoon hire, create a separate listing for each half-day and put both listings in a [group](/features/groups/). The group page lets a customer book either half or both in one checkout.

      Each listing has its own price and capacity. A group can also set a shared maximum, but that counts bookings across both listings; it does not track which car is used in each half of the day. Full-day and half-day listings do not check shared stock or overlapping hires, so manage availability and assign vehicles outside the system.

      Fixed hourly hires can use separate named listings, grouped on one page. Customers cannot pick an arbitrary time, and those listings do not check overlaps with full-day hires.
  - type: markdown
    content: |
      ## Worked example

      A small operator has four compact cars. Three-day hire is £120. One car is already booked from Monday to Wednesday, and two more customers book those dates, leaving one car available. A fourth confirmed booking fills the class. If two payments race for that last car, the later order is refunded.

      The operator assigns the cars at collection, checks each licence and takes a £200 damage deposit at the counter. The online booking records the hire price and the licence number, not the registration.
  - type: markdown
    content: |
      ## What this setup does not do

      - It does not keep a fleet record by registration, MOT date, mileage, fuel level or insurance.
      - It does not upload or verify a driving licence.
      - It does not hold or pre-authorise a refundable damage deposit.
      - It does not offer an arbitrary hourly time picker or check overlaps between separate listings.
      - It does not provide insurance or a damage waiver.
      - It does not assign a specific vehicle to a booking.

      If those records are the centre of your operation, a fleet or rental operations system fits better than a booking site.
  - type: features
    dark: true
    intro_content: "## Features for vehicle hire"
    items:
      - icon: hugeicons:calendar-add-01
        description: Publish a total price for one, three or seven days and check capacity across the whole range.
        name: <a href="/features/multi-day-hire/">Multi-day hire</a>
      - icon: hugeicons:delivery-truck-02
        description: Assign drop-offs and collections to drivers and give each one a phone run sheet.
        name: <a href="/features/logistics/">Logistics</a>
      - icon: hugeicons:help-circle
        description: Ask for a licence number, return time or access notes before checkout.
        name: <a href="/features/custom-questions/">Custom questions</a>
  - type: markdown
    content: |
      ## Related uses

      [Clothing hire](/perfect-for/clothing-hire/) uses the same duration and deposit setup for garments. [Camping hire](/perfect-for/camping-hire/) covers tents and kit, and [hot tub hire](/perfect-for/hot-tub-hire/) covers a delivered weekly hire with a servicing hold after return.
  - type: markdown
    content: |
      ## Other options you might be considering

      [Booqable](/compared-to/booqable/) tracks serialised stock and supports security deposits, which a multi-car fleet may need. [EZRentOut](/compared-to/ezrentout/) covers maintenance and work orders for a larger fleet. [Yo!Rent](/compared-to/yo-rent/) is for building a multi-vendor rental marketplace rather than one operator's bookings.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Put your hire classes online

      Managed hosting is £50/year or £5/month, with no Chobble charge per booking. Payments settle into your own Stripe, Square or SumUp account.
name: Car Hire
---
