---
layout: design-system-base.html
title: Encrypted - Chobble Tickets
meta_title: Encrypted Ticketing - Chobble Tickets
meta_description: Attendee personal information is encrypted with a key derived from your admin password. Even Chobble staff cannot read attendee data without your password.
permalink: /features/encrypted/
eleventyNavigation:
  key: Encrypted
  parent: Platform & Integrations
  order: 1
blocks:
  - type: hero
    class: gradient
    title: Encrypted by default
    lead: >-
      Attendee personal information is encrypted with a key derived from
      your admin password. Even Chobble staff cannot read your attendee
      data without your password. This is included in every plan, not
      sold as a paid add-on.

  - type: markdown
    content: |
      ## How the encryption works

      Chobble Tickets uses a multi-layered encryption approach:

      - **Hybrid RSA-OAEP + AES-256-GCM** for attendee PII (names, emails,
        phone numbers, addresses)
      - **AES-256-GCM** for payment identifiers, pricing data, check-in
        records, and API credentials
      - **PBKDF2** with 600,000 iterations and SHA-256 for password hashing
        and key derivation

      The key hierarchy ties decryption to your admin password:

      1. Your password is run through PBKDF2 to derive a key.
      2. That key unwraps your personal RSA private key, which is stored
         in the database in encrypted form.
      3. Your RSA private key decrypts per-record AES data keys.
      4. Those AES keys decrypt the actual attendee data.

      A database dump on its own is not enough to read attendee data. A
      database dump together with the server's environment encryption
      key is still not enough - an attacker would also need your
      password. Your private key is held in memory only for the duration
      of an authenticated admin session, and is discarded when you log
      out.

      ## Additional security measures

      Beyond encryption at rest, the platform includes CSRF protection with
      256-bit random tokens, rate limiting on login attempts (5 failed attempts
      trigger a 15-minute IP lockout), constant-time password comparison,
      Content-Type validation on all POST endpoints, and session tokens with
      24-hour expiry using HttpOnly cookies.

      ## You are the data controller

      Attendee data is decrypted on the server only during an
      authenticated admin session, using keys unlocked by the admin's
      password. The server does not keep the decryption keys after the
      session ends. Chobble staff cannot read your attendee data, even
      on managed hosting, because they do not have your password. If
      you self-host, the same is true for everyone except you.

      **Important**: encryption keys are non-recoverable if lost, and admin
      passwords cannot be reset. A lost password means attendee data is
      permanently inaccessible, because there is no backdoor and no master key.

      Read the full
      [cryptography documentation](https://chobbledotcom.github.io/tickets/docs/crypto.ts)
      for implementation details, or see
      [who can see your attendee data](/features/who-can-see-your-data/)
      for a breakdown of exactly which companies can access your attendees'
      information.

  - type: markdown
    content: |
      ## References

      - [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) - recommends 600,000 PBKDF2-SHA256 iterations
      - [NIST SP 800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) - AES-GCM specification
      - [RFC 7518 §4.3](https://datatracker.ietf.org/doc/html/rfc7518#section-4.3) - RSA-OAEP key wrapping
      - [Chobble Tickets cryptography source](https://chobbledotcom.github.io/tickets/docs/crypto.ts)

  - type: cta
    title: Security you can verify
    description: Sign up for managed hosting at £50/year, or audit the encryption code yourself.
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
---
