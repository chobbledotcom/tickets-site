---
title: Logistics - Chobble Tickets
meta_title: Delivery, Collection & Logistics - Chobble Tickets
meta_description: Manage deliveries, collections and servicing at customer locations. Assign agents, view a run sheet, edit its day templates, and mark legs done.
permalink: /features/logistics/
eleventyNavigation:
  key: Logistics
  parent: Managing Events
  order: 13
blocks:
  - type: hero
    class: gradient
    content: |-
      # Logistics

      For bookings that need something taken to the customer, Chobble Tickets gives each booking a drop-off and a collection, each assigned to a van, driver or crew. Drivers sign in to a run sheet of today's and tomorrow's jobs and mark each one done.
  - type: markdown
    content: |
      ## For events with a physical delivery

      Some bookings involve getting something to the customer - a portable
      toilet dropped off, a marquee put up, a van arriving at a specific
      time. Chobble Tickets has a built-in logistics system for these.

      When you enable logistics on your site, events gain a "Needs logistics"
      option. Each booking line on a logistics event gets a drop-off agent
      (the start) and a collection agent (the end), plus optional times for
      each.

      ## Logistics agents

      An agent is a named resource - a van, a driver, a crew. You create and
      manage agents from the logistics settings page, and assign users to
      each one. Agents are encrypted like the rest of your data.

      On the attendee record, you can keep one shared pair of agents for the
      whole booking, or split them so each delivered event has its own
      drop-off and collection agent.
  - type: split-image
    content: |
      ## The deliveries run sheet

      Users assigned to an agent see a deliveries run sheet showing today's
      and tomorrow's drop-offs and collections. Each entry shows the booking
      details, the address, phone number, a map link, and the ticket token.
      With [postcode lookup](/features/postcode-lookup/) enabled, customers
      pick their address from a list at checkout, so the address on the run
      sheet is accurate.

      Each leg has a "Mark done" toggle, so the agent can confirm a delivery
      or collection as it happens, from any device with a browser.

      Owners and managers reach the run sheet from the calendar menu. The
      calendar also gains an agent filter, so you can see only the bookings a
      specific agent is handling.
    figure_src: /images/screenshots/logistics-deliveries.png
    figure_alt: Mobile delivery run sheet showing Maya Patel's marquee drop-off and collection
    figure_caption: Each delivery day keeps the customer details, map links, times, assigned agent, and completion controls together.
  - type: markdown
    content: |
      ## Servicing jobs on the same round

      A [servicing event](/features/servicing-events/) assigned to an agent
      appears on that agent's run sheet too, so maintenance and repairs travel
      with the day's customer work. A servicing event has no customer contact
      details, so its entry shows the event name and the listing it holds
      without an address or phone line.

      ## Change what a day says

      The owner can change each day's heading and body in advanced settings.
      The two boxes take Liquid, the template language the email templates
      use, and the settings page lists the day and booking values they accept.
      A blank box puts the built-in wording back.

      A template the site cannot read is refused before it is saved, and the
      refusal names the box to fix. The run sheet carries a small Edit
      template link that only the owner sees.
  - type: markdown
    content: |
      ## Agent-class users

      You can invite a team member as an agent-class user. An agent sees only
      the deliveries run sheet - no events, no attendees, no settings. This
      is useful for drivers or crew who only need their day's jobs and
      should not see anything else.

      See the [multi-user page](/features/users/) for more on user roles.
  - type: markdown
    content: |
      ## Example

      A skip hire firm has two lorries set up as agents, "Lorry 1" and
      "Lorry 2". A customer books a four-yard skip for a week from Monday,
      choosing their address by postcode at checkout. The office assigns the
      drop-off to Lorry 1 on Monday and the collection to Lorry 2 the
      following Monday. Each driver sees the job on their run sheet the day
      before, with the address, phone number and a map link. Chobble's [skip
      hire demo](https://skips.tix.chobble.net/) shows the booking side of
      this setup.

      ## Limits

      Logistics records who goes where and when. They do not plan routes,
      track vehicles or work out delivery prices by distance or zone. An
      agent's run sheet shows today and tomorrow. Staff can open any date from
      the run sheet's calendar picker, and each section covers that date and
      the day after.

  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Delivery and collection run sheets come with every hosted site, at £50 a year or £5 a month.

name: Delivery, Collection & Logistics - Chobble Tickets
---
