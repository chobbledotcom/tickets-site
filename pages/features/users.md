---
title: Users - Chobble Tickets
meta_title: Multi-User Management - Chobble Tickets
meta_description: Invite team members as owners, managers, editors, logistics agents, or scanner users to manage sessions and track activity in Chobble Tickets.
permalink: /features/users/
ticket_evidence_capture: team-and-roles
eleventyNavigation:
  key: Users
  parent: Managing Events
  order: 3
blocks:
  - type: hero
    class: gradient
    content: |-
      # Multi-user management

      Each person who helps run a Chobble Tickets site gets their own login and one of five roles: owner, manager, editor, delivery agent or scanner. The role decides which pages they can open, so a door volunteer can scan tickets without reaching attendee lists, settings or money.
  - type: split-image
    content: |
      ## Invite your team

      Invite somebody by username and hand them the link. They choose their
      password on it, so the person who sent the invite never sees it, and
      from then on they log in as themselves.

      Each person carries one role, which decides which pages they can open.
      The invite link expires after seven days.
    figure_src: /images/screenshots/riverside-events-team.png
    figure_alt: A screenshot of the users table, showing jo as the owner and sam as an editor, both active
    figure_caption: 'Somebody invited as an editor sets their own password, and from then on has their own login and one role. <small><a href="https://github.com/chobbledotcom/tickets/blob/main/specs/access/what-an-editor-can-do.feature">(src)</a></small>'
  - type: markdown
    content: |
      ## Five roles

      **Owners** have full access, including users, settings, holiday dates,
      email settings, the public site's pages and [API keys](/features/public-api/).

      **Managers** run the back office day to day. They reach listings, the
      calendar, attendees, the ledger and the deliveries run sheet, which
      suits a paid member of staff or a committee volunteer who handles
      bookings.

      **[Editors](/features/editors/)** write listings, groups and public
      site pages. They hold no key for reading attendee details and cannot
      see income, costs or the Money area, which suits a copywriter or
      someone helping with search engines.

      **Delivery agents** see only their own run sheet of drop-offs and
      collections, with a done switch for each. The role appears once
      [logistics](/features/logistics/) is turned on.

      **[Scanners](/features/qr-code-check-ins/)** see a list of scanner
      doors, one per listing and group, and can check people in and out.
      They cannot open attendee lists, settings or money pages.

      ## Example

      A summer fair committee has a chair, a treasurer, a volunteer who
      writes the stall listings and four people on the gate. The chair is
      the owner and the treasurer is a manager who reconciles the
      [ledger](/features/ledger/). The listings volunteer is an editor, and
      the gate team get scanner logins on their own phones. Nobody shares a
      password, and only the chair and treasurer can open the attendee lists.

      ## Removing someone

      An owner removes a person from the Users list by typing their username
      to confirm. Their account is deleted, every window they were signed in
      with is ended, and they cannot sign in again. Admin sessions last 24
      hours, and the Sessions page lists the ones currently open. The rules
      for each role are published as [access test
      cases](https://github.com/chobbledotcom/tickets/tree/main/specs/access).

      ## Limits

      Each person has exactly one role, so someone who both edits listings
      and works the door needs a role that covers both jobs.
      The [activity log](/features/activity-logs/) records what happened and
      when, but not which person did it.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/listings
      variant: secondary
      size: lg
    content: |-
      ## Get started

      Hosted sites can have as many logins as the team needs, at £50 a year or £5 a month.
name: Multi-User Management - Chobble Tickets
---
