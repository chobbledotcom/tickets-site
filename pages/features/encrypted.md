---
layout: design-system-base.html
title: Encrypted - Chobble Tickets
meta_title: Encrypted Ticketing - Chobble Tickets
meta_description: Chobble Tickets encrypts attendee personal data with a key only your admin password can unlock. Even Chobble staff cannot read it.
permalink: /features/encrypted/
eleventyNavigation:
  key: Encrypted
  parent: Platform & Integrations
  order: 1
blocks:
  - type: hero
    class: gradient
    lead: Chobble Tickets encrypts your attendees' personal data with a key that only your admin password can unlock. Even Chobble staff cannot read your attendee data, because they do not have your password. Every plan includes this encryption.
    name: Encrypted by default
  - type: markdown
    content: |
      ## How the encryption works

      Chobble Tickets encrypts your attendees' personal data,
      including names, emails, phone numbers, addresses, and
      free-text custom question answers, before saving it to the
      database. If someone copied the database, they could not read
      the data without your password.

      The encryption keys themselves are also encrypted. The key
      that unlocks them is derived from your admin password, combined
      with a per-account salt and the server's environment key. When
      you log in, Chobble Tickets uses your password to unlock the keys
      for that session, and forgets them when you log out.

      This means a database dump on its own cannot reveal attendee
      data. A database dump together with the server's environment
      key still cannot reveal attendee data. An attacker would also
      need your password.

      ## Three layers

      Chobble Tickets stores data in three layers:

      - **Personal data** (names, emails, phone numbers, addresses,
        free-text answers) is protected by two keys at once - the
        server's encryption key and a key derived from your account
        password. A stolen copy of the database, even together with the
        server's key, cannot reveal them. Only an admin signed in with
        the password can decrypt them.
      - **Listing details** (names, descriptions, locations, dates)
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

      Your attendee data is only readable while you are signed in.
      The server unlocks the keys with your password at the start
      of each session, and discards them when you sign out.

      Chobble staff cannot read your attendee data on managed
      hosting, because they do not have your password. If you self
      host, the same is true for everyone except you.

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
        free-text answers): hybrid encryption using RSA-OAEP to wrap a
        per-record AES-256-GCM data key. The data key itself is wrapped
        under a key derived from your password, so the database and the
        server key together are not enough to decrypt it.
      - **Other sensitive data** (payment identifiers, pricing,
        check-in records, API credentials): AES-256-GCM.
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
