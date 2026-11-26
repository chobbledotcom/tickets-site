---
name: Day-Based Hire Software
subtitle: What a hire booking system has to do, from stock counts to handover
meta_title: Day-Based Hire Software Checklist | Chobble Tickets
meta_description: A checklist for day-based hire software covering date-range stock, duration prices, half-days, deposits, delivery, terms, check-in and data ownership.
guide-category: choosing-hire-software
order: 3
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      Day-based hire needs a count of what is free, a price for each hire
      length and a way to arrange handover. This checklist covers what to
      test, including where Chobble Tickets stops short.
  - type: markdown
    dark: true
    content: |
      ## The checklist

      | Requirement | Why it matters | Chobble Tickets |
      |---|---|---|
      | Capacity on every date in a range | A three-day hire uses stock on all three days | Yes, with [multi-day hire](/features/multi-day-hire/) |
      | A total price for each hire length | One day and three days are different products | Yes |
      | A count per stock type | Four mixers means four places | Yes, a number per listing |
      | A serial number per item | You need to know which mixer went out | No |
      | Half-day bookings | Morning and afternoon sessions | Separate named listings in a [group](/features/groups/); see limits below |
      | Hourly bookings | A two-hour kayak hire | Separate named listings for fixed slots, without a time picker |
      | Part-payment deposit | Customer pays some now and the rest later | Yes |
      | Refundable damage deposit | Money held against damage | Workaround, see below |
      | Delivery and collection run sheets | Drivers need their own list | Yes, [logistics](/features/logistics/) |
      | Terms acceptance | Customer agrees before the hire | Yes, a tick box |
      | Encrypted customer data | Names and answers are sensitive | Yes, encrypted at rest |
      | Public booking page | Customer books without staff entry | Yes |
      | Open source or data export | You can leave with your data | Yes, both |
  - type: markdown
    content: |
      ## Test the date range, not just the start date

      A hire booking is not a ticket for one evening. A three-day hire that
      starts on Friday uses stock on Friday, Saturday and Sunday. A system
      that checks only the start date will oversell the weekend.

      Test this before buying:

      1. Set capacity to one.
      2. Book a three-day hire starting Friday.
      3. Try to book a one-day hire on Saturday.
      4. Try to book a three-day hire starting Sunday.

      The two later booking attempts should fail when the first is confirmed.
      Also test the result when two customers pay for the last place at once.
      Chobble Tickets checks capacity on payment confirmation and refunds a
      later paid order that no longer fits.
  - type: markdown
    content: |
      ## Half-days

      Chobble Tickets books dates and has no time picker. For morning and
      afternoon hire, create two named listings, such as "Morning kayak" and
      "Afternoon kayak", and put them in a [group](/features/groups/).
      A customer can book one or both in the same order.

      Each listing has its own capacity. For four kayaks available in each
      half-day, set each listing's capacity to four. A group maximum of four
      would instead cap the combined morning and afternoon places at four,
      even if a kayak could be hired once in each slot.

      Named slots do not give the system clock times or automatic overlap
      checks between a full-day listing and the half-day listings. If both
      full-day and half-day hires draw on the same stock, manage that
      conflict separately or use software with timed availability.
  - type: markdown
    content: |
      ## Deposits and damage deposits

      A [part-payment deposit](/features/deposits-and-balance-payments/) is
      built in. The customer pays part of the hire price at booking and the
      rest through a balance link. The booking uses capacity when the
      deposit payment is confirmed.

      To take a refundable damage deposit, add a mandatory modifier or
      booking fee, then return the unused amount in the payment provider's
      dashboard. Chobble Tickets does not pre-authorise a card or issue a
      partial refund. The [hire deposits
      guide](/guide/choosing-hire-software/security-deposits-for-hire/)
      explains how to reconcile the return.
  - type: markdown
    content: |
      ## Delivery and handover

      A hire business usually needs more than a booking record. Test whether
      the system can:

      - collect a delivery address and access notes,
      - assign a drop-off and a collection to different people,
      - give each driver only the jobs they need,
      - mark each leg done,
      - hold stock for maintenance,
      - record a repair cost against the listing.

      Chobble Tickets does all of those. It does not optimise routes,
      calculate mileage or dispatch the nearest driver.
  - type: markdown
    content: |
      ## Data and exit

      Ask what happens to the customer records if you leave. A booking site
      should export the bookings, names, emails, answers and payment
      history. Chobble Tickets provides a CSV export and a complete database
      backup, and its source code is published under AGPL-3.0-only.

      A hosted provider may keep the data in its own system and delete it
      after a notice period. That is a commercial choice, but it should be
      in the contract before you migrate years of bookings into it.
  - type: markdown
    content: |
      ## See a working hire site

      [Chobble Skip Hire](https://skips.tix.chobble.net/) is a demo site that
      shows the same date-range, duration-price and delivery setup described
      here. Each skip size is its own listing, and the demo runs on a
      supplied chobble.net address.

      ## A worked example

      A tool hire shop has four cement mixers. It prices one day at £50 and
      three days at £120. The first hire runs Monday to Wednesday, which
      leaves three mixers free on each of those days.

      A second customer asks for Tuesday to Thursday. Three mixers remain
      free on Tuesday and Wednesday, and four on Thursday, so the booking
      is available. Once four hires overlap on any day, another confirmed
      booking cannot use that day.

      The shop assigns the delivery to a driver, who sees the address and
      marks the drop-off done. The shop does not know which of the four
      mixers went to which customer.
  - type: markdown
    content: |
      ## Limits

      Chobble Tickets is not a warehouse or fleet system. It does not track
      serial numbers, service histories, MOT dates, hour meters, operator
      certificates or insurance. It has no hourly time picker. If those
      records or automatic time-slot overlap checks are central to the
      business, a rental operations product may be a better fit.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Test a hire setup

      A hosted Chobble site costs £50/year or £5/month, with no per-booking platform fee.
---
