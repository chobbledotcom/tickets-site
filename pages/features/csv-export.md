---
title: CSV Export - Chobble Tickets
meta_title: Attendee List CSV Export for Events | Chobble Tickets
meta_description: Download your attendee list as CSV with contact details, amounts paid, payment references, check-in state and answers to your custom questions.
permalink: /features/csv-export/
ticket_evidence_capture: attendee-csv-export
eleventyNavigation:
  key: CSV Export
  parent: Managing Events
  order: 6
blocks:
  - type: hero
    class: gradient
    content: |-
      # CSV export

      Each listing in Chobble Tickets has an Export CSV link that downloads its attendee list as a spreadsheet file. The file holds each booking's contact details, quantity, amount paid, payment reference, check-in state and answers to your booking questions.
  - type: markdown
    content: |
      ## What the attendee CSV contains

      The attendee file has one row per booking and these columns: Name,
      Email, Phone, Address, Special Instructions, Quantity, Registered, Price
      Paid, Transaction ID, Checked In, Ticket Token and Ticket URL. Each
      [booking question](/features/custom-questions/) adds a column headed
      with the question's text, so a question worded "Child's class" gives a
      column with that heading.

      A listing with a date or location adds Listing Date and Listing Location
      columns. A [daily listing](/features/daily-events/) adds a Date column
      showing the days each booking holds. Bookings whose payment failed are
      left out, as they are on screen.

      ## Example

      A quiz night listing called "Autumn Quiz" downloads as
      `Autumn_Quiz_attendees.csv`. Filtering the attendee tab to people not
      yet checked in before downloading gives a list of who has not arrived.
      Each download is recorded in the [activity log](/features/activity-logs/)
      with the listing name.

      ## Listing reports

      The listing export covers status, type, attendee count, capacity, ticket quantity, revenue, price, date and location. It can be used to compare sales across a programme or pass event data to another reporting process.

      ## Attendee reports

      Attendee exports can include contact details, amount paid, payment reference, check-in state, ticket URL and answers to custom questions. Daily listings can be filtered by date, and check-in filters can produce door or attendance lists.

      The attendee list CSV keeps the order shown on the attendee tab. A newest-first or oldest-first sort exports in that order, and a download with no chosen sort uses the table's own date-and-name order.

      The CSV writer marks any cell that could run as a spreadsheet formula, such as a name beginning with =, +, - or @. A booking cannot plant a formula that runs when the file is opened in Excel or Google Sheets.

      ## Staff calendars

      Calendar exports can include listing times, assigned logistics staff and map links for Google Maps and Apple Maps. This gives delivery, collection and event teams a portable schedule.

       CSV files can be opened in spreadsheet or accounting software. For moving reusable event setup between sites, use [catalogue import and export](/features/catalogue-import-export/) instead.
  - type: split-image
    content: |
      ## Export a listing's attendees

      Each listing has an attendee tab with a CSV export link. For listings
      booked by the day, the CSV gives the days the customer chose, not the
      longest stay the listing offers.
    figure_src: /images/screenshots/attendee-csv-export.png
    figure_alt: A screenshot of the Retreat attendee tab, showing one Guest place on Saturday 15 August 2026 and an Export CSV link
    figure_caption: 'The attendee tab names the booking date and the one place on the Retreat listing, with the CSV export link. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/attendees/downloading-the-attendee-list.feature">(src)</a></small>'
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      CSV exports come with every hosted site, at £50 a year or £5 a month.
name: Event and Attendee CSV Reports | Chobble Tickets
---
