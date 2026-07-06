---
title: Users - Chobble Tickets
meta_title: Multi-User Management - Chobble Tickets
meta_description: Invite team members as owners, managers, editors, or logistics agents to manage sessions and track activity in Chobble Tickets.
permalink: /features/users/
eleventyNavigation:
  key: Users
  parent: Managing Events
  order: 3
blocks:
  - type: hero
    class: gradient
    content: |-
      # Multi-user management

      Invite team members as owners, managers, editors, or logistics agents so everyone gets their own login instead of sharing passwords.
  - type: markdown
    content: |
      ![The users management page showing team members and their roles](/images/screenshots/users.png)

      ## Four roles

      Running events often involves a team, so Chobble Tickets lets you
      invite team members via email with a 7-day expiring access link where
      each person gets their own account and session.

      **Owners** have full access: events, calendar, users, settings, and
      logs. **Managers** can see events and the calendar, making them ideal
      for door staff or volunteers who need to check people in without
      accessing sensitive settings.

      **[Editors](/features/editors/)** are content-only accounts. They can
      write listings, groups, and your public site content, but they hold
      no decryption key, so attendee data is unreadable to them. This suits
      an SEO consultant or copywriter who works on your content and has no
      reason to see your bookings.

      When you enable [logistics](/features/logistics/), a fourth role
      becomes available. **Agents** see only the deliveries run sheet -
      their drop-offs and collections for today and tomorrow, with a done
      toggle for each leg. They cannot see events, attendees, settings, or
      logs. This is useful for drivers or crew who only need their day's
      jobs and should not see anything else.

      Team members set their own password when they accept an invite. The
      invite is single-use, and the encryption keys are re-wrapped under
      the new password as part of joining, so the person who sent the
      invite never sees it.

      The admin dashboard tracks activity per user so you can see who did
      what, and sessions expire after 24 hours with HttpOnly cookies for
      security.

      ## Session management

      View and manage active sessions from the admin panel, and if someone's
      access needs to be revoked you can do it immediately.

      ![The sessions management page showing active user sessions](/images/screenshots/sessions.png)

      Read the [config documentation](https://chobbledotcom.github.io/tickets/docs/config.ts)
      for details on session management and user settings.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Manage events as a team

      Invite volunteers and committee members so everyone can manage events without sharing a single login.
name: Multi-User Management - Chobble Tickets---
