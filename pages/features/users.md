---
layout: design-system-base.html
title: Users - Chobble Tickets
meta_title: Multi-User Management - Chobble Tickets
meta_description: Invite team members with role-based access. Manage sessions and permissions in Chobble Tickets.
permalink: /features/users/
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Multi-User Management
    lead: >-
      Invite team members as managers. Everyone gets their own login. No
      sharing passwords.

  - type: markdown
    content: |
      ## Team Access

      Running events often involves a team. Chobble Tickets lets you invite
      managers via email with a 7-day expiring access link. Each person gets
      their own account and session.

      The admin dashboard tracks activity per user, so you can see who did
      what. Sessions expire after 24 hours with HttpOnly cookies for security.

      ## Session Management

      View and manage active sessions from the admin panel. If someone's
      access needs to be revoked, you can do it immediately.

      Read the [config documentation](https://chobbledotcom.github.io/tickets/doc.ts/docs/config.ts)
      for details on session management and user settings.

  - type: cta
    title: Collaborate Easily
    description: Invite your team and start managing events together.
    button:
      text: Get Started
      href: https://tix.chobble.com
      variant: secondary
      size: lg
---
