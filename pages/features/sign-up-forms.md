---
layout: design-system-base.html
title: Sign-up Forms - Chobble Tickets
meta_title: Volunteer Sign-up Forms & Potluck Sheets | Chobble Tickets
meta_description: Use Chobble Tickets as a sign-up form for volunteers, potluck contributions, and other collections. Create a free event, add custom questions, and share the link.
permalink: /features/sign-up-forms/
eleventyNavigation:
  key: Sign-up Forms
  parent: Selling Tickets
  order: 7
blocks:
  - type: hero
    class: gradient
    lead: Create volunteer sign-up sheets, potluck coordinators, and other form-based collections by setting an event as free.
    name: Sign-up forms
  - type: markdown
    content: |
      ## How it works

      A free event on Chobble Tickets works as a sign-up form. Create an
      event, set the price to zero, add
      [custom questions](/features/custom-questions/) to collect the
      information you need, and share the link. People sign up, answer
      your questions, and get a confirmation email. You see all the
      responses in your admin panel.

      No payment setup is required for free events. You do not need to
      connect Stripe or Square.

      ## What you can collect

      Custom questions let you ask attendees to choose from a set of
      options at sign-up. This works for:

      - **Volunteer shifts** - list available time slots as options and
        let people pick one
      - **Potluck contributions** - list what's needed (salads, mains,
        desserts, drinks) so people can claim a category
      - **Equipment or supplies** - track who's bringing what to an
        event
      - **Role preferences** - let volunteers choose between setup,
        door duty, teardown, or other tasks
      - **Attendance with details** - collect meal choices, t-shirt
        sizes, or accessibility needs alongside the sign-up

      ## Capacity management built in

      Set a maximum number of sign-ups per event, and Chobble Tickets
      handles the rest. Once all places are filled, the form closes
      automatically.

      For events with multiple roles or shifts, use
      [groups](/features/groups/) to create separate sign-up forms with
      independent capacity limits under a single page.

      ## Everything else still works

      Free sign-up forms get all the same features as paid events:

      - **Email confirmations** sent automatically to each person who
        signs up
      - **QR codes** on each confirmation, useful if you want to check
        people in on the day
      - **[CSV export](/features/csv-export/)** of all sign-ups with
        custom question answers included
      - **[Webhooks](/features/webhooks/)** fired on each sign-up, so
        you can connect to Slack, Google Sheets, or other tools
      - **[API access](/features/public-api/)** to read sign-up data
        programmatically
      - **[Encrypted data](/features/encrypted/)** - names, emails, and
        question answers are encrypted at rest

      ## When a dedicated coordination tool is better

      Chobble Tickets handles straightforward sign-up collection. If
      you need participants to swap slots with each other, manage
      recurring weekly rotas, or coordinate complex multi-day task
      assignments, a dedicated tool like SignUpGenius has features
      built specifically for that. See the
      [full comparison](/compared-to/signupgenius/).
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Create a sign-up form

      Sign up for managed hosting at £50/year, or self-host for free.
name: Volunteer Sign-up Forms & Potluck Sheets | Chobble Tickets
---
