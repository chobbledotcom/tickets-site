---
layout: design-system-base.html
title: Encrypted - Chobble Tickets
meta_title: Encrypted Ticketing - Chobble Tickets
meta_description: All personal information is encrypted at rest using hybrid RSA-OAEP + AES-256-GCM encryption.
permalink: /features/encrypted/
eleventyNavigation:
  key: Encrypted
  parent: Features
  order: 1
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Encrypted by Default
    lead: >-
      All personally identifiable information is encrypted at rest as the
      baseline, not as a premium add-on.

  - type: markdown
    content: |
      ## Three Layers of Protection

      Chobble Tickets uses a multi-layered encryption approach:

      - **Hybrid RSA-OAEP + AES-256-GCM** for attendee PII (names, emails,
        phone numbers, addresses)
      - **AES-256-GCM** for payment identifiers, pricing data, check-in
        records, and API credentials
      - **PBKDF2** with 600,000 iterations and SHA-256 for password hashing

      A three-layer key hierarchy protects your data: an environment variable
      root key, an RSA key pair, and per-user wrapped data keys. Even if
      someone gains access to the database, they can't read your attendees'
      personal information without the encryption keys, and a lost password
      means permanently unreadable data because there is no backdoor.

      ## Additional Security Measures

      Beyond encryption at rest, the platform includes CSRF protection with
      256-bit random tokens, rate limiting on login attempts (5 failed attempts
      trigger a 15-minute IP lockout), constant-time password comparison,
      Content-Type validation on all POST endpoints, and session tokens with
      24-hour expiry using HttpOnly cookies.

      ## You Are the Data Controller

      With Chobble Tickets, you are the data controller - we don't have access
      to your attendees' personal information. This is by design: encryption
      keys are generated during setup and never leave your environment.

      **Important**: encryption keys are non-recoverable if lost, and admin
      passwords cannot be reset. A lost password means attendee data is
      permanently inaccessible, because there is no backdoor and no master key.

      Read the full
      [cryptography documentation](https://chobbledotcom.github.io/tickets/docs/crypto.ts)
      for implementation details.

  - type: cta
    title: Security You Can Verify
    description: Sign up for managed hosting at £50/year, or audit the encryption code yourself.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
