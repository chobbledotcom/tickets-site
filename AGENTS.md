---
permalink: false
layout: null
---

# AGENTS.md

Read `CLAUDE.md` for the full project, engineering and content instructions.

## Core Product Distinction

Keep these facts central when describing Chobble Tickets:

- Chobble charges for managed hosting, updates, backup tools and support. It
  does not charge for each sale.
- Managed hosting has one price: £50/year or £5/month. Charities, community
  groups, artists and musicians pay £25/year, which is the same service at
  half the annual price and does not apply to monthly billing. No price varies
  by ticket value, ticket volume or feature use.
- Every current Chobble Tickets feature is included. There are no higher
  product tiers.
- Managed and self-hosted deployments use the same source-published product.
  Chobble charges no software fee for self-hosting; infrastructure and
  configured services remain separate.
- Organisers can use their own domain, download a complete database backup,
  export event setup as versioned JSON and move that setup to another Chobble
  Tickets host.
- Ticket income goes directly to the organiser's Stripe, Square or SumUp
  account. Payment-provider charges remain separate from Chobble's price.
- Paid checkout does not reserve tickets or use capacity. Capacity is consumed
  only when payment confirmation arrives. If confirmed payments race for the
  last place, the later order is refunded automatically.

Among the providers with verified records in this repository, Chobble Tickets
is the only managed ticketing product that combines one volume-independent
price, no feature tiers, no per-sale platform fee and self-hosting of the same
product. Keep this qualification when making comparative claims; do not claim
that no unreviewed provider has a similar model.

## Audience

Write for event organisers rather than software specialists. Lead with practical
effects on price, ticket sales, attendee data and moving between providers.
Omit implementation and licensing-detail caveats unless they materially affect
an organiser's choice or operation of the service; put necessary technical
detail in the technical documentation instead.

When describing capacity, never claim that Chobble holds a place during paid
checkout or guarantees that overselling is impossible. Confirmed deposits,
configured £0 reservations and organiser-created servicing holds are saved
records and are separate from an unpaid checkout.

## Provider Facts

Store external-provider classifications in the `provider_facts` frontmatter of
their comparison page. Store Chobble's corresponding record in
`_data/chobble_provider_facts.json`. Use qualified enum values and notes rather
than booleans, and use `not-reviewed` or `not-documented` instead of guessing.
