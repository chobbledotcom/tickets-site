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
      All personally identifiable information is encrypted at rest. Not as a
      premium add-on. As the baseline.

  - type: markdown
    content: |
      ## Three Layers of Protection

      Chobble Tickets uses a multi-layered encryption approach:

      - **Hybrid RSA-OAEP + AES-256-GCM** for attendee PII (names, emails,
        phone numbers, addresses)
      - **AES-256-GCM** for payment identifiers, pricing data, check-in
        records, and API credentials
      - **PBKDF2** with 600,000 iterations and SHA-256 for password hashing

      This means that even if someone gains access to the database, they can't
      read your attendees' personal information without the encryption keys.

      ## Additional Security Measures

      Beyond encryption at rest, the platform includes CSRF protection with
      256-bit random tokens, rate limiting on login attempts (5 failed attempts
      trigger a 15-minute IP lockout), and session tokens with 24-hour expiry
      using HttpOnly cookies.

      Read the full
      [cryptography documentation](https://chobbledotcom.github.io/tickets/doc.ts/docs/crypto.ts)
      for implementation details.

  - type: cta
    title: Security You Can Verify
    description: The encryption code is open source. Audit it yourself.
    button:
      text: View Crypto Docs
      href: https://chobbledotcom.github.io/tickets/doc.ts/docs/crypto.ts
      variant: secondary
      size: lg
---
