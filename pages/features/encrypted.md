---
title: Encrypted - Chobble Tickets
meta_title: Encrypted Ticketing - Chobble Tickets
meta_description: Chobble Tickets encrypts attendee personal data so it can only be read from an admin session unlocked with the organiser's password. Chobble staff cannot read it.
permalink: /features/encrypted/
eleventyNavigation:
  key: Encrypted
  parent: Platform & Integrations
  order: 1
blocks:
  - type: hero
    class: gradient
    content: |-
      # Encrypted by default

      Chobble Tickets encrypts attendee personal data so it can only be read from an admin session unlocked with the organiser's password. Chobble staff cannot read attendee data, because they do not have the organiser's password. Every plan includes this encryption.
  - type: markdown
    content: |
      ## How the encryption works

      Chobble Tickets encrypts attendee personal data,
      including names, emails, phone numbers, addresses, and
      free-text custom question answers, before saving it to the
      database. If someone copied the database, they could not read
      the data without the password-bound key material.

      The encryption keys themselves are also encrypted. Chobble
      Tickets uses the organiser's password, a per-account salt, and
      the server's environment key to unlock the private key for an
      admin session. The session keeps a wrapped copy of the data key
      and Chobble Tickets forgets it when the session ends.

      This means a database dump on its own cannot reveal attendee
      data. A database dump together with the server's environment
      key still cannot reveal attendee data. The attacker would also
      need the organiser's password.

      ## Three layers

      Chobble Tickets stores data in three layers:

      - **Personal data** (names, emails, phone numbers, addresses,
        free-text answers) is encrypted with a per-record AES-256-GCM
        key. RSA-OAEP wraps that key with the site owner's public key.
        The matching private key is encrypted and only an admin session
        unlocked with the password can use it.
      - **Listing and site details** (names, descriptions, locations,
        images, site text, email settings, and payment-provider secrets)
        are encrypted at rest with the server's encryption key.
      - **Operational numbers** (income, availability, capacity) are
        stored as plain values, because the database itself has to
        total them, compare them, and check remaining places. They
        hold no personal information.

      The exact algorithms (RSA-OAEP, AES-256-GCM, and PBKDF2 with
      600,000 iterations) follow current OWASP, NIST, and IETF
      recommendations. The references and source code are listed at
      the bottom of this page for anyone who wants to audit the
      implementation.

      ## Other security measures

      Chobble Tickets also protects you from common web attacks.

      - **Cross-site request forgery protection.** Each form
        contains a hidden token of 256 random bits, signed so it
        cannot be forged. The token stops other sites from tricking
        your browser into making changes on your behalf.
      - **Login rate limiting.** Five failed attempts from the same
        IP address trigger a 15-minute lockout.
      - **Constant-time password checks.** Chobble Tickets compares
        passwords in a way that takes the same amount of time
        whether they match or not, so an attacker cannot tell from
        the timing whether they got close.
      - **Content-type validation.** Chobble Tickets checks the
        content type of every form submission, so an attacker
        cannot smuggle requests through endpoints that expect form
        data.
      - **Short admin sessions.** Login sessions last for 24 hours.
        After that, Chobble Tickets signs you out and forgets your
        keys. The session cookie is HttpOnly, Secure, and
        SameSite=Strict, so other websites and scripts cannot read
        or send it.

      ## You hold the keys

      Attendee data is only readable while an admin is signed in. The
      server unlocks the keys with the admin password at the start of
      each session, and discards them when the session ends.

      Chobble staff cannot read your attendee data on managed
      hosting, because they do not have the organiser's password. If
      you self host, the same is true for everyone except the people
      who hold admin credentials.

      When you invite a team member, they set their own password at
      a self-activation link. The invite is single-use, and the keys
      are re-wrapped under the new password as part of joining. The
      person who sent the invite never sees the new password.

      **Important**: if you lose your admin password, the
      encryption keys cannot be recovered and admin passwords
      cannot be reset. There is no backdoor and no master key. A
      lost password means the attendee data on that account
      becomes permanently unreadable. This is the trade-off for
      binding the keys to your password rather than to a system
      Chobble controls.

      Read the full
      [cryptography documentation](https://chobbledotcom.github.io/tickets/docs/crypto.ts)
      for implementation details, or see
      [who can see your attendee data](/features/who-can-see-your-data/)
      for a list of every company that can access your attendees'
      information.
  - type: markdown
    content: |
      ## References

      - [OWASP Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html) - recommends 600,000 PBKDF2-SHA256 iterations
      - [NIST SP 800-38D](https://csrc.nist.gov/pubs/sp/800/38/d/final) - AES-GCM specification
      - [RFC 7518 §4.3](https://datatracker.ietf.org/doc/html/rfc7518#section-4.3) - RSA-OAEP key wrapping
      - [Chobble Tickets cryptography source](https://chobbledotcom.github.io/tickets/docs/crypto.ts)

      ## Algorithms in detail

      For anyone who wants to verify the technical claims:

      - **Personal data** (names, emails, phone numbers, addresses,
        payment identifiers, ticket tokens, and free-text answers):
        hybrid encryption using RSA-OAEP to wrap a per-record
        AES-256-GCM data key. Decryption requires the private key from
        the admin session.
      - **Encrypted site data** (listing text and location fields, site
        copy, payment-provider secrets, email settings, and wallet
        credentials): AES-256-GCM with the server's encryption key.
      - **Password hashing and key derivation**: PBKDF2-SHA256 with
        600,000 iterations.
  - type: cta
    button:
      text: Sign Up
      href: https://tix.chobble.com/ticket/register
      variant: primary
      size: lg
    content: |-
      ## Security you can audit

      Sign up for managed hosting at £50/year or £5/month, or read the encryption code yourself.
name: Encrypted Ticketing - Chobble Tickets
---
