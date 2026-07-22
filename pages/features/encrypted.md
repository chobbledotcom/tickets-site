---
title: Encrypted - Chobble Tickets
meta_title: Encrypted Ticketing - Chobble Tickets
meta_description: Chobble Tickets encrypts attendee names, contact details, payment references, ticket tokens, and free-text answers for keyed admin sessions.
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

      Chobble Tickets encrypts attendee names, contact details, payment references, ticket tokens, special instructions, and free-text answers for keyed administration sessions. Each authorised user has separate credentials, and organisers can choose whether to enable a recovery owner account. Every plan includes this encryption.
  - type: markdown
    content: |
      ## How the encryption works

      Chobble Tickets encrypts names, emails, phone numbers, addresses,
      payment identifiers, ticket tokens, special instructions, and
      free-text custom question answers before saving them. Reading these
      fields requires a keyed administration session.

      The encryption keys themselves are also encrypted. Each keyed user
      has a protected copy of the site's data key. An administration
      session unwraps that key after login and Chobble Tickets forgets it
      when the session ends.

      A database dump on its own cannot reveal these protected fields.
      Access requires the additional key material held by a keyed
      administration session.

      ## Three layers

      Chobble Tickets stores data in three layers:

      - **Personal data** (names, emails, phone numbers, addresses,
        free-text answers) is encrypted with a per-record AES-256-GCM
        key. RSA-OAEP wraps that key with the site owner's public key.
        The matching private key is encrypted and only a keyed admin
        session can use it.
      - **Listing and site details** (names, descriptions, locations,
        images, site text, email settings, and payment-provider secrets)
        are encrypted at rest with the server's encryption key.
      - **Booking and operational metadata** (relationships, dates,
        quantities, selected choice identifiers, income, availability,
        and capacity) is stored as plain values because the application
        has to total and compare it. This excludes direct contact fields,
        but selected identifiers can reveal information if someone also
        knows the corresponding form choices.

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

      ## Keyed accounts and recovery

      Protected attendee fields are readable while a keyed administrator
      is signed in. The server unlocks the user's wrapped data key at the
      start of each session and discards it when the session ends.

      Chobble staff do not receive the passwords for organiser-created
      accounts as part of managed hosting. Owners, managers, and
      logistics agents have their own credentials and key material.
      [Content-only editors](/features/editors/) receive no attendee
      data key and cannot decrypt bookings.

      When you invite a team member, they set their own password at
      a self-activation link. The invite is single-use, and the keys
      are re-wrapped under the new password as part of joining. The
      person who sent the invite never sees the new password.

      An owner can choose to enable a recovery owner account when the
      host has configured a valid recovery email address and email
      delivery works. Chobble Tickets creates separate random
      credentials, wraps the same site data key for that account, and
      emails the credentials to the host-configured recovery address.
      Whoever controls those credentials can decrypt protected attendee
      fields and invite a replacement owner.

      Organisers need to retain at least one keyed account or the enabled
      recovery credentials. Losing one person's password does not cause
      data loss while another keyed account remains available.

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
      - [Chobble Tickets recovery owner source](https://github.com/chobbledotcom/tickets/blob/main/src/features/admin/settings-superuser.ts)
      - [Chobble Tickets attendee schema](https://github.com/chobbledotcom/tickets/blob/main/src/shared/db/migrations/schema/tables-attendees.ts#L71-L107)

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
