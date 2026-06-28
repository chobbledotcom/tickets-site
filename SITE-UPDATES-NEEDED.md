# Site updates needed - new platform features

This document lists every improvement the marketing site needs so it reflects
features added to the Chobble Tickets platform since the last site update.

Each item notes: what changed, the supporting commits, which existing pages are
affected, and what the copy should convey. Items are grouped by priority.

Every fact below has been verified against the actual source code in
`../tickets/`, not just commit messages or PR descriptions. File paths and line
numbers are from that repo.

The CLAUDE.md content style guide applies to all copy changes: third person,
British English, no marketing language, concrete facts only.

---

## Priority 1 - Corrects false claims on the current site

These items fix pages that currently state Chobble does NOT have a feature it
now has. Fix these first - they are factually wrong.

### 1.1 Promo codes, discount codes, and add-ons (price modifiers)

**What changed.** A full price-modifier system landed in mid-June 2026.
Owners can create modifiers that add a surcharge, apply a discount, or add an
optional item to the order. Modifiers support four triggers, defined in
`src/shared/price-modifier.ts:30-35`:

- **Automatic** - applies to every order. Can be gated on a minimum subtotal.
- **Code** (promo codes) - an encrypted `code` column with an HMAC blind index
  (`code_index`). The checkout form shows a promo-code field when any code
  modifier is active; the entered code is trimmed and lowercased
  (`normalizeCode`, `price-modifier.ts:53-54`), then matched by blind index at
  resolve time (`modifier-resolve.ts:127-129, 249-251`), never trusted from
  metadata.
- **Optional** (opt-in add-ons) - the buyer picks a quantity via a number input
  clamped to remaining stock (`reservations.tsx:516-538`, capped at 20 per
  add-on when stock is unlimited). Add-ons can be scoped to the whole order,
  specific listings, or specific groups (`modifiers.ts:213-217, 256-263`).
- **Answer** - a custom-question answer triggers a price change, reusing the
  full modifier engine. Linked via a `modifier_id` column on `answers`
  (migration `2026-06-18_answer_modifiers.ts`). Resolved scope-aware so an
  answer picked on an out-of-scope listing does not inflate the charge
  (`modifier-resolve.ts:175-200`).

Modifiers support three calculation types (`price-modifier.ts:18`):

- **Fixed** - a flat signed amount.
- **Percent** - a percentage of the in-scope subtotal.
- **Multiply** - scales the subtotal by a factor (factor < 1 reduces, > 1
  raises). Renders as a "x{value}" label.

Each modifier has a charge or discount direction, optional stock limits (an
append-only `modifier_usages` ledger with atomic guarded consumption,
`modifier-usage.ts:83-101`, so two concurrent checkouts cannot oversell the
last unit; a sold-out race rolls back the order and refunds), per-order
maximums, minimum-subtotal thresholds, and listing or group scoping. Discounts
use exact per-unit largest-remainder allocation so no minor units are lost. The
public booking form shows a live running total with named discount line items
(e.g. "10% off -£1.00"), rendered from `order.modifierApplications`
(`order-summary.tsx:84-88`). List prices show before modifier discounts to
avoid double-counting. Promo-code usage is logged to the activity log on
payment completion, only for code-triggered modifiers, only after a
successfully honoured booking (`payment-processing.ts:1056-1073, 1304-1312`).
The webhook re-derives the modifier specs by id via `specsFromRefs`
(`modifier-resolve.ts:412-428`), never trusting metadata amounts, recomputes
the total with `priceCheckout`, and refunds on any mismatch
(`payment-processing.ts:1240-1260`).

**Supporting commits.** `58acb4e0` (#1213), `1f358dd7` (#1232),
`67ca5d53` (#1235), `ae90ed89` (#1236), `604aa0d7` (#1242),
`1d304981` (#1245), `1c83d5b6` (#1247), `6a48d8d1` (#1258),
`4bb80464` (#1275), `029f2953` (#1295), `c2764c91` (#1299),
`b1d62eea` (#1301), `d4aa5c98` (#1310), `b6105e4e` (#1314),
`263aaf5d` (#1325), `a0073919` (#1337), `645fec08` (#1360),
`95143923` (#1343), `fbcbc668` (#1433), `43e04611` (#1434).

**Affected pages.**

- `_data/faq.json:165` - currently lists "promo codes" among features Chobble
  does NOT have. This is now false. Remove "promo codes" from that list.
  Consider adding a new FAQ question: "Can I create promo codes, discount
  codes, or add-ons?"
- `pages/features/custom-questions.md:51` - states "questions that affect
  booking values may come in the future". Answer-triggered modifiers now exist.
  Update this section.
- `pages/compared-to/eventbrite.md:76` - lists "Promo codes and discounts"
  and `:109` "Sell add-ons" as things Eventbrite has that Chobble does not.
  Move these to "Both share" or note that Chobble now supports promo codes,
  add-ons, and answer-triggered pricing (Eventbrite's implementation differs
  in scope - it has conditional logic and bundles, which Chobble does not).
- `pages/compared-to/ticket-tailor.md:84` - lists "Discount codes" and `:86`
  "Ticket bundles" as Ticket Tailor exclusives. Discount codes now exist.
  Bundles remain a gap (ticket groups cover multi-ticket checkout but not
  discounted bundles).
- `pages/compared-to/wix-events.md:74` - lists "Discount and promo codes" as
  a Wix exclusive. Move to "Both share".
- `pages/compared-to/tessera-tickets.md:91` - lists "Coupon and promo codes"
  as a Tessera exclusive. Move to "Both share".
- `pages/compared-to/fixr.md:87` - lists "Promo codes" as a FIXR exclusive.
  Move to "Both share".
- `pages/features/features.md` - add a new feature page entry under "Selling
  tickets" for promo codes, discounts, and add-ons.

**Suggested new page.** Create `pages/features/promo-codes-and-add-ons.md`
(permalink `/features/promo-codes-and-add-ons/`). Cover: promo codes with
blind-index matching, opt-in add-ons with stock limits, answer-triggered
pricing tiers, fixed/percentage/multiply calculations, scoping to listings or
groups, minimum-subtotal thresholds, stock limits with oversell protection,
and the live running total. Add to `eleventyNavigation` under "Selling
Tickets".

---

## Priority 2 - New user-facing features not mentioned anywhere on the site

These are genuine new capabilities the site does not currently describe.

### 2.1 Free-text custom questions

**What changed.** Custom questions now support a "free text" display type in
addition to multiple-choice. Attendees type an answer in a textarea. Free-text
answers are encrypted with the owner RSA keypair via `encryptWithOwnerKey`
(`src/shared/db/questions.ts:596`), the same hybrid path as other PII, and
decrypted with `decryptWithOwnerKey` on read (`questions.ts:883`). Only an HMAC
of the text is kept for dedup (`text_index`). Choice answers can be deactivated
instead of deleted, so historic selections stay valid. A question cannot be
switched between free-text and choice once answers exist.

**Supporting commits.** `a2f0d516` (#1344), `d03922cf` (#1375 fix dropped
answer string ids at checkout).

**Affected pages.**

- `pages/features/custom-questions.md` - the entire page describes
  multiple-choice only. Rewrite to cover both types. Remove lines 44-52
  ("Multiple choice for now" and "may come in the future"). Update the hero
  lead, the meta description, and the features index entry
  (`pages/features/features.md:65-66`).
- `pages/compared-to/eventbrite.md:104` - lists "free-text fields" as an
  Eventbrite exclusive. Move to "Both share".
- `pages/compared-to/google-forms.md:37` - lists "any field type" as a Google
  Forms advantage. Note Chobble now offers free-text and multiple-choice,
  though Google Forms still has more field types.

### 2.2 Double-entry accounting ledger

**What changed.** Every runtime money figure (listing income, attendee
balances, modifier revenue, refunds, booking fees) now comes from a single
append-only double-entry `transfers` table
(`src/shared/db/migrations/schema.ts:834-859`). Six migrations on 2026-06-22
dropped every stored money aggregate (`income`, `price_paid`, `refunded`,
`remaining_balance`, `total_revenue`) and replaced them with ledger
projections. Schema comments confirm "Balances are always derived"
(`schema.ts:838`). Non-money counts (`booked_quantity`, `tickets_count`,
`usage_count`) remain stored as aggregates.

The admin Ledger page at `/admin/ledger` (`handleLedgerGet`,
`src/features/admin/ledger.ts:283`) shows:

- A from/to date-range picker built from two `DatePicker` components
  (`ledger.tsx:684-728`).
- A by-listing select that scopes both the stats and the transfer list
  (`ledger.tsx:732`).
- A stats table whose rows differ by scope: "All listings" shows Total income,
  Total due, Total refunded, Booking fees; one listing chosen shows Gross
  ticket sales, Recognised income, Refunds, Net balance in ledger
  (`ledger.tsx:248-272`).
- A view toggle between "Plain-language log" (default) and "Double-entry view"
  showing From/To columns (`ledger.tsx:756, 817-829`).
- The transfer list, capped at 500 rows. Cash (external) legs are hidden
  (`ledger.tsx:281`).

Per-account statements at `/admin/ledger/:type/:ref`
(`handleAccountStatementGet`, `ledger.ts:421`) show a running balance in a
5-column table: Time, Event, Counterparty, Change (signed delta), Balance
(`ledger.tsx:488-515`). The param is `:ref` not `:id` so singletons like
`external:world` do not 404 (`ledger.ts:13-17`). Attendee account statements
flip the sign so a charge reads as a positive amount owed
(`isReversedAccount`, `ledger.tsx:418-426`).

The attendee edit page embeds a collapsible "Ledger" panel using the same
shared statement component (`AttendeeLedgerSection`,
`attendee-detail.tsx:267-282`), loaded owner-only
(`attendee-form-routes.ts:236-246`), with a "View full ledger" link.

Listing admin pages show two sections: an "Income & ledger" reconciliation
(`ListingIncomeLedgerSection`, `listings.tsx:391-453`) with rows for Gross
ticket sales, Income received outside checkout (when non-zero), Manual
adjustments (when non-zero), Recognised income subtotal, Refunds, Costs paid
outside checkout (when non-zero), Net balance in ledger subtotal, and a note
explaining how the two reconcile; plus an owner-only "Account statement" full
statement (`ListingLedgerSection`, `listings.tsx:455-472`).

**Supporting commits.** `cbec6bf9` (#1369 design doc), `382b5d9a` (#1381),
`9775b890` (#1380), `5eceee4d` (#1387), `816a1ecd` (#1414),
`0eb1b3e8` (#1418), `b5330e1f` (#1404).

**Affected pages.**

- `pages/features/features.md` - add a new feature entry under "Managing
  events" for the accounting ledger.
- Create `pages/features/ledger.md` covering: the `/admin/ledger` page, the
  date-range and listing filters, the plain-language and double-entry views,
  per-account statements with running balances, the attendee ledger panel,
  and the listing reconciliation.

### 2.3 Manual ledger entry maintenance

**What changed.** Owners can manually add, edit, and delete ledger entries on
the admin Ledger page. The manual entry form
(`handleLedgerEntryAddGet`/`handleLedgerEntryAddPost`, `ledger.ts:605-651`;
template `ledger.tsx:898-955`) offers a "What happened?" select, an amount, a
"when it happened" datetime field, and an "Add entry" button.

The code at `src/shared/accounting/manual-entries.ts:56-113` defines seven
entry types, filtered per account type by `manualLedgerEntryOptionsFor`
(`manual-entries.ts:121-126`). Locale labels are in `admin.json:180-193`:

| Label | Constant | Account type | Legs |
|---|---|---|---|
| "Payment received outside checkout" | `MANUAL_ATTENDEE_PAYMENT` | attendee | world -> attendee |
| "Extra amount this attendee needs to pay" | `MANUAL_ATTENDEE_CHARGE` | attendee | attendee -> writeoff |
| "Waive or reduce what this attendee owes" | `MANUAL_ATTENDEE_WRITEOFF` | attendee | writeoff -> attendee |
| "Income received outside checkout" | `MANUAL_LISTING_INCOME` | revenue | world -> revenue |
| "Cost paid for this listing" | `MANUAL_LISTING_COST` | revenue | revenue -> world |
| "Extra modifier income" | `MANUAL_MODIFIER_INCOME` | modifier | writeoff -> modifier |
| "Reduce modifier income" | `MANUAL_MODIFIER_REDUCTION` | modifier | modifier -> writeoff |

Edit form (`handleLedgerEntryEditGet`/`handleLedgerEntryEditPost`,
`ledger.ts:653-698`) edits amount and timestamp only. Deleting requires typing
the exact formatted amount into a confirmation box (`deletePostedTransfer`,
`ledger.ts:683-695`, using `verifyOrRedirect` with `formatCurrency(amount)`).

**Supporting commit.** `39f17277`.

**Affected pages.** Part of the ledger feature page (2.2). Useful for
organisers who take cash or bank-transfer payments and need to record them
alongside online bookings. Mention in `pages/features/refunds.md` and
`pages/features/manual-attendees.md` where relevant.

### 2.4 No-quantity booking lines

**What changed.** Admins can mark an attendee's booking line as "no quantity"
using a quantity-0 sentinel (`hasTicketQuantity` rule,
`src/shared/types.ts:146-147`). The line stays on the record for bookkeeping
but counts as zero tickets. Ghost lines are excluded from:

- Ticket counts (`tickets_count` counts only `quantity > 0`; migration
  `2026-06-23_ticket_count_no_quantity.ts`, trigger at `schema.ts:950-953`).
- Capacity (the sentinel adds 0; `types.ts:141-145`).
- Check-in (`attendees.ts:146-154`).
- Bulk-email audiences: all-attendees, per-listing, and single-token
  (`attendees/queries.ts:220-279`).
- CSV ticket URLs (blanked when `quantity === 0`; `attendees-csv.ts:78-82`).
- The public `/t/:token` ticket page, which 404s for a ghost-only attendee
  (`src/features/tickets/index.ts:38-48`).

A paid line must be refunded before it can be marked no-quantity, enforced
server-side (`attendee-form-routes.ts:867-871`). The merge path also blocks
stranding a paid line via a ghost (`attendee-merge.ts:451`).

**Supporting commits.** `57aa7428` (#1366), `5d69f1d5` (#1428),
`ef344278` (#1422).

**Affected pages.**

- `pages/features/manual-attendees.md` - add a section on marking lines as
  no-quantity for comps and staff.
- `pages/features/groups.md` - mention that no-quantity lines work within
  group bookings.

### 2.5 Per-attendee system and operator notes

**What changed.** A `system_notes` table (`system-notes.ts:27-36`) with a
`type` of "system" or "owner". System notes are encrypted with the symmetric
DB key; owner notes are encrypted with the owner public key
(`system-notes.ts:1-11, 63-77`).

System notes are auto-generated red alerts with `class "system-note
system-note-alert"` and `role="alert"` (`attendee-notes.tsx:49-71`; CSS at
`style.scss:1257-1272`, light red `#ffeeee / #cc0000`, dark `#3c2020 /
#ff5555`). There is one system-note trigger in the codebase: the "charged but
could not be honoured, payment was refunded" case
(`payment-processing.ts:1157-1160`, text at `:789-802`).

Owner notes are operator-authored private notes, rendered neutrally. Both
appear in a prominent `AttendeeNotesSection` block on the attendee edit page
(`attendee-notes.tsx:77-98`, rendered at `attendee-form.tsx:893-895`) plus an
expandable `AttendeeNotesSummary` above the listing-attendee list
(`listings.tsx:1376`) and the global attendee list (`attendees-list.tsx:221`).
Locale strings are in `notes.json`.

**Supporting commit.** `eec8c0a1` (#1420).

**Affected pages.**

- `pages/features/manual-attendees.md` - add operator notes as a feature and
  the system-note alert.
- `pages/features/activity-logs.md` - mention system notes as complementary to
  the activity log.

### 2.6 Account-password-bound attendee data (KEK v2)

**What changed.** The key that decrypts attendee PII (names, emails,
addresses, free-text answers) is now derived from the organiser's account
password, not just the server environment key.

Previously the `DATA_KEY` wrapping KEK was derived from the stored password
hash (`deriveKEK`, `src/shared/crypto/keys.ts:78-79`), and the password hash
itself was only encrypted with `DB_ENCRYPTION_KEY` (`users.ts:131-133`). So a
database dump plus the environment key could re-derive the KEK and decrypt
every PII blob without the password.

KEK v2 rebinds the wrapping KEK to the raw password
(`deriveKEKFromPassword`, `keys.ts:93-96`), salted with `DB_ENCRYPTION_KEY`
plus a per-user PBKDF2 salt (the salt is embedded in the stored password hash,
`hashing.ts:72-77`). Legacy v1 rows are re-wrapped to v2 on the owner's next
login (`migrateUserToV2Kek`, `users.ts:373-394`, triggered at `auth.ts:157-159`,
guarded on `kek_version < 2`).

Invited users self-activate at `/join/:code` (`join.ts:121-133` calling
`acceptInvite`, `users.ts:343-365`). The inviter wraps the `DATA_KEY` under the
single-use invite code (`users.ts:240-252`); `/join` unwraps it and re-wraps
under the new password's v2 KEK in one atomic UPDATE guarded on
`invite_wrapped_data_key IS NOT NULL`, so only the first of a raced pair wins.
The manual "Activate" flow is removed: there is no `activate` /
`activateUser` / `setUserPassword` route in `users.ts:373-383`. Expired
un-activated invites are pruned (`pruneExpiredInvites`, `users.ts:468-484`).

Setup (`settings.ts:910-914`), password change (`settings.ts:954-990`),
superuser escrow (`superuser.ts:166-171`), and user creation
(`buildCreateUserStatement` defaults `kekVersion = 2`, `users.ts:201`) all wrap
at v2 via the single `wrapDataKeyForPassword` choke point (`keys.ts:167-172`).

**Supporting commit.** `1ff9cb20` (#1351).

**Affected pages.**

- `pages/features/encrypted.md` - the most important update. The page
  currently says "DB dump alone, or DB dump + server env key, still cannot
  reveal data" - that framing is now stronger and more precise. Update to
  explain that PII is bound to the account password: an attacker needs the
  database, the environment key, AND the password. Emphasise that this is why
  a lost password is permanently unrecoverable.
- `_data/faq.json` - the "Lost admin password" and "Can Chobble read attendee
  data" answers should reflect the password-bound key.
- `pages/features/who-can-see-your-data.md` - update the self-hosted "keys
  never leave" framing to reflect that the password is now part of the key
  chain.

### 2.7 Activity log encrypted with the owner key + new columns

**What changed.** The entire activity log is now encrypted with the owner's
RSA key (`logActivity` calls `encryptWithOwnerKey`,
`src/shared/db/activityLog.ts:121`, the same hybrid `hybridEncrypt` path as
attendee PII, `keys.ts:323-341`). The env-key write fallback was removed, so
`logActivity` unconditionally encrypts to the owner public key. A database
dump plus the environment key can no longer decrypt the log - only an
authenticated admin can. A resumable backfill re-encrypts legacy `enc:` rows
(`src/shared/db/activity-log-backfill.ts:40-59`, fire-and-forget,
interval-gated, self-marking done via `settings.activityLogBackfillDone`).
Reads route by prefix: `hyb:1:` rows use the owner private key, legacy `enc:`
rows use the DB key (`decryptLogMessage`, `activityLog.ts:78-84`).

The global `/admin/log` page now shows Attendee and Listing columns
(`activityLog.tsx:117-126`), each linking to the relevant record via
`refLink` (`:51-59`, to `/admin/attendees/:id` and `/admin/listing/:id`). The
columns appear only on the global view; per-listing and per-attendee log
views omit them by design (`:102-105`).

**Supporting commits.** `fab42141` (#1374 columns), `32d1d21e` (#1396 owner-
key encryption).

**Affected pages.**

- `pages/features/activity-logs.md` - update to mention the new Attendee and
  Listing columns and the owner-key encryption. The screenshot
  `images/screenshots/activity-log.png` needs refreshing.

### 2.8 Multi-day event capacity engine

**What changed.** Events gain a `duration_days` column with `DEFAULT 1`
(`schema.ts:102`), clamped to 1-90 by `normalizeDurationDays`
(`src/shared/types.ts:149-164`).

The capacity engine builds one clause per day AND-ed together, each evaluating
listing and group caps (`buildCapacityCondition`,
`src/shared/db/capacity.ts:239-263`). Per-day load helpers are at
`attendees/capacity.ts:179-220`.

The calendar picker excludes start dates whose full `[start, start+duration)`
range hits a non-bookable day or exceeds the booking window
(`isRangeBookable` / `getAvailableDates`, `src/shared/dates.ts:146-192`).
Per-day remaining capacity is shown for daily-event groups
(`groupPerDayRemainingByGroup` / `getListingRemainingForRange`,
`attendees/capacity.ts:537-589`).

**Supporting commits.** `0bd454b2` (#1085), `227dca5d` (#1086).

**Affected pages.**

- `pages/features/daily-events.md` - add a section on multi-day bookings (e.g.
  weekend festivals, multi-day courses).
- `pages/features/groups.md` - mention multi-day capacity within groups.

### 2.9 Contact records with booking stats and a record editor

**What changed.** Per-contact booking stats are split by source: online vs
admin-entered bookings are counted separately (`publicBookingCount` and
`adminBookingCount`, `src/shared/db/contact-preferences.ts:178-182`, rendered
`src/ui/templates/admin/contact-history.tsx:80-89`).

A per-contact record editor at `/admin/history/:hmac`
(`src/features/admin/contact-history.ts:75-118, 120-123`) lets admins view and
edit a contact's encrypted record. The `ContactStats` type carries
`contactCount`, `lastContact`, `lastSubject`, `adminNotes`
(`contact-preferences.ts:168-173`). Note: `lastContact` is the timestamp of
operator outreach (email/SMS), not a booking. There is no "last booking date"
field.

The record editor includes private admin notes with a Markdown editor and live
preview (`contact-history.tsx:101-128`).

**Supporting commits.** `29ace1f7` (#1332), `c08d9a88` (#1333),
`0a6f3c7a` (#1357 markdown editor for private notes).

**Affected pages.** Currently no feature page covers contact records. Consider
adding a section to `pages/features/no-spying.md` or
`pages/features/who-can-see-your-data.md` explaining that Chobble keeps a
returning-customer recognition record (encrypted, GDPR-erasable, with booking
history split by source) - this is a privacy-respecting alternative to
attendee accounts.

### 2.10 Bookings summary table on attendee edit page

**What changed.** A read-only `AttendeeBookingsTable`
(`src/ui/templates/admin/attendee-detail.tsx:143-202`) renders above the edit
form on the attendee edit page (`attendee-form.tsx:923`, after the heading,
notes section, form-error outputs, and PII block). Columns: Listing (link to
`/admin/listing/:id`), Date (formatted range for daily listings, dash
otherwise), Quantity, Status (checked-in/refunded badges). The tfoot totals
the quantity.

**Supporting commit.** `e2913c2f` (#1358).

**Affected pages.** Small admin improvement. Mention in
`pages/features/manual-attendees.md` alongside the notes block (2.5).

### 2.11 Provider-less paid bookings record the owed balance

**What changed.** When a site has no payment provider configured, a visitor
booking a paid item is treated as a zero-deposit reservation - the full value
is recorded as the amount owed via `owedOrderForLedger`
(`src/features/public/ticket-submit.ts:694-736`).

The owed amount surfaces in:

- The booking success JSON API response: `amountOwed` reads from
  `attendee.remaining_balance` (`src/features/api/index.ts:262-271`).
- Default email templates: the Liquid variable `amount_owed` is populated
  from `entries[0].attendee.remaining_balance`
  (`src/ui/templates/email/defaults.ts:16, 26, 46, 58`; renderer
  `src/shared/email-renderer.ts:83, 127`).

Note: the owed amount does NOT surface in webhook event payloads. The webhook
path deals with payment success page rendering and does not emit `amountOwed`.

**Supporting commit.** `f38101cf` (#1365).

**Affected pages.**

- `pages/features/purchasable-events.md` - mention that paid items can be sold
  without a payment provider, recording what is owed for offline collection.
- `pages/features/stripe-and-square.md` - note that unpaid sites still track
  owed balances.

### 2.12 Progressive booking-form running total

**What changed.** The booking form has a progressively-enhanced live running
total. Without JavaScript it POSTs to `/calculate/:slug`
(`ticket-routes.ts:100` -> `handleCalculateBySlug` -> `renderQuote`,
`ticket-submit.ts:767-806`) and returns an `orderSummary` HTML fragment in a
new tab. With JavaScript, `initRunningTotal`
(`src/ui/client/admin/running-total.ts:32-87`) hijacks the
`[data-running-total]` button, strips PII fields from the body (`pricingBody`,
`:22-30`), and on every `input`/`change` event debounces 250ms then fetches
the `/calculate` action, updating the summary inline.

Promo-code discounts render as named line items via
`order.modifierApplications.filter((app) => app.delta < 0)` each as a
`SummaryRow` with the modifier's decrypted name (`order-summary.tsx:84-88`).
List prices show before modifier discounts to avoid double-counting
(`43e04611`). The "show total" button hides once the JavaScript enhancement
takes over (`0542eca9`).

**Supporting commits.** `95143923` (#1343), `0542eca9` (#1361),
`fbcbc668` (#1433), `43e04611` (#1434).

**Affected pages.** Attendee-facing UX. Mention in the new promo-codes page
(1.1) and in `pages/features/selling-tickets.md` or on the homepage feature
list.

### 2.13 Per-site update channels (alpha/beta/release)

**What changed.** Each built client site carries an update channel stored in
the `updates` column (TEXT NOT NULL DEFAULT 'release', CHECK constrained to
'alpha', 'beta', 'release'; `src/shared/db/migrations/schema.ts:680-683`;
row field `updates: UpdateTier`, `built-sites.ts:80`). The deploy workflow
takes a `tier` input and deploys only to sites at that tier or more eager:
`UPDATE_TIERS = ["alpha", "beta", "release"]` and `siteAcceptsDeployTier`
checks `indexOf(site) <= indexOf(deploy)` (`built-sites.ts:25-47`). A release
deploy reaches every site; beta reaches beta and alpha; alpha reaches alpha
only. The default is alpha (smallest blast radius) so risky builds ship to
alpha sites first.

A channel selector appears on the create/edit form (`fields.ts:667-670`,
`built-sites.ts:179, 195`) and an "Updates" column appears in the fleet list
(`built-sites.tsx:126, 152`). The workflow filters by tier at
`.github/workflows/deploy-clients.yml:33-34`.

**Supporting commit.** `d87a6fd8` (#1439).

**Affected pages.**

- `pages/hosting.md` - add a section on update channels. Operators of hosting
  fleets can choose how quickly client sites receive updates. Relevant to
  self-hosters who want to control rollout.

### 2.14 Point-in-time site restore

**What changed.** Each backup carries the git commit the site was running,
recorded as `current_script_commit` at boot and travelling inside the backup
(`src/shared/update.ts:28-34, 134-177`). Restoring a backup
(`restoreFromZip`, `src/features/admin/backup.ts:240-260`) rolls back the data
and surfaces the commit only when it is a full 40-character SHA.

The `restore-deploy.yml` workflow rebuilds the edge bundle from the repo at
that exact commit via `actions/checkout@v4` with `ref: ${{ inputs.commit }}`
(`.github/workflows/restore-deploy.yml:47-63`), validates the SHA is 40-char
hex (`:8-11, :47-55`), so a SHA absent from project history fails the
checkout. Restores only ever redeploys a commit from the project's own
history, never code from an uploaded backup file.

**Supporting commits.** `cb0da687` (#1389), `5b40df48` (#1390).

**Affected pages.**

- `pages/hosting.md` - add a section on point-in-time restore. Relevant to
  operators and self-hosters. Pair with the backups note (2.15).

### 2.15 Out-of-band database backups with pre-deploy gate

**What changed.** Database backups run out-of-band with keyset-paginated
table reads. A backup is taken by GitHub Actions or `deno task backup` before
deploying. The admin update page refuses to deploy unless a backup of that
database was taken in the last hour. Backups land in per-site storage folders.

**Supporting commits.** `d0fe7183` (#1342), `607a7a0b` (#1348),
`253bf69f` (#1347), `9657ed23` (#1354).

**Affected pages.**

- `pages/hosting.md` - mention backups and the pre-deploy gate as part of the
  hosting reliability story.

### 2.16 Settings take effect immediately

**What changed.** Replaced the wall-clock TTL settings cache with a
`settings_version` counter stored as a settings row keyed
`CONFIG_KEYS.SETTINGS_VERSION` (`src/shared/db/settings.ts:135`).
`bumpSettingsVersion` atomically increments on every write (`settings.ts:257-263`),
invoked at the end of every `writeRaw` (`:513`), `deleteRaw` (`:527`), and a
third call site at `:938`. Each request probes the counter once
(`versionProbe` / `prefetchVersion`, `settings.ts:237-249`); the cache stamp
is compared and reloaded only when changed (`settings.ts:184-206`). A change
saved on one isolate is visible to every other isolate on its next request.

**Supporting commit.** `d91fb444` (#1432).

**Affected pages.** Small reliability note. Worth a line in
`pages/features/open-source.md` or a reliability section if one exists.

### 2.17 Universal link styling with an "Underline links" setting

**What changed.** Links are blue with no underline by default, gain an
underline on hover or focus, and turn to the text colour when active. A new
owner toggle `underline_links` (boolean, default false; `settings.ts:157, 381,
424, 722-723, 1259-1260, 1385`) on the Site Theme form
(`src/ui/templates/admin/settings/theme.tsx:36-45`, persisted via
`/admin/settings/theme`, `settings-general.ts:113, 120`) universally controls
whether every link carries a default underline, including navigation. When
set, `<html data-underline-links>` is applied at render time
(`src/features/index.ts:251, 266`) and CSS makes every link underlined
(`style.scss:535-550`). A `:where()` wrapper keeps specificity equal so
opt-outs (buttons, calendar chips, skip link) still win.

**Supporting commit.** `8c56e2c7` (#1400).

**Affected pages.**

- `pages/features/light-and-dark-themes.md` - add the link-styling toggle as
  an additional branding control.

### 2.18 Locale (country) write-once at setup

**What changed.** The country setting (which derives timezone, currency, and
phone prefix) is now configured once during initial `/setup`
(`src/ui/templates/setup.tsx:78-90`, validated and stored via
`src/features/setup.ts:53-80, 146`) and can no longer be changed from admin
settings. There is no country field in any admin settings form
(`settings-general.ts`, `settings-logistics.ts`, `settings-page.ts`,
`fields.ts`). The write path `settingUpsert(CONFIG_KEYS.COUNTRY, country)`
(`settings.ts:933`) is reachable only from setup. The locale string confirms
write-once intent (`src/locales/en/setup.json:21-22`: "Sets your timezone,
currency, and phone prefix").

**Supporting commit.** `ae7bf862` (#1394).

**Affected pages.** Mention in onboarding or setup documentation. Small note
in `pages/features/european.md` that the locale is a setup-time decision.

---

## Priority 3 - New systems (logistics, parent/child, servicing)

These are three substantial new systems, all shipped to `main` in June 2026,
that the marketing site has no coverage of.

### 3.1 Logistics system (equipment delivery and collection)

**What changed.** A logistics system for listings handled by an agent at the
customer's location - deliveries, equipment hire, transport, set-up and
teardown. Shipped June 16 2026 (PRs #1210, #1220, #1225, #1227, #1229, #1249,
#1264).

A per-site owner-only Logistics settings page at `/admin/logistics`
(`src/features/admin/settings-logistics.ts:145-149`) has:

- A Yes/No "Enable logistics" toggle (`logistics.enable_hint`: "Enable
  logistics for listings handled by an agent at the customer's location -
  deliveries, equipment hire, transport, set-up and teardown. When on,
  listings gain a 'Needs logistics' option and logistics agents can be managed
  below.", `src/locales/en/logistics.json`).
- A `logistics_agents` table (`src/shared/db/migrations/2026-06-16_logistics_agents.ts`)
  with encrypted names. CRUD for named agents (e.g. vans, drivers, crew),
  each with a checkbox list of assigned users (`logistics.agents_hint`,
  `logistics.json`).
- A `user_logistics_agents` link table mapping which users drive which agents
  (migration `2026-06-16_agent_users.ts`).

When logistics is enabled, listings gain a "Needs logistics" option. Each
booking line on a logistics listing gets a drop-off agent (start) and a
collection agent (end), plus optional logistics times, stored per line on
`listing_attendees` (`start_agent_id`, `end_agent_id`, `start_time`,
`end_time`). The attendee edit form has a per-attendee "split logistics"
toggle (`split_logistics_agents` on `attendees`): one shared pair of agents by
default, or a distinct pair per logistics listing.

A dedicated **agent-class user** sees only a deliveries run sheet at
`/admin/deliveries` (`src/features/admin/deliveries.ts:208-210`). The run
sheet (`src/ui/templates/admin/deliveries.tsx`) shows today's and tomorrow's
drop-offs and collections grouped per booking, with addresses, phone numbers,
map links, ticket tokens, and a per-leg "Mark done"/"Mark not done" toggle
(`start_done`, `end_done` flags on `listing_attendees`, migration
`2026-06-16_agent_users.ts`; `setLegDone` scoped to the agent's own ids,
`src/shared/db/logistics.ts`). Agent-class users can only see the deliveries
page; owners and managers reach it from the Calendar menu
(`logistics.assigned_users_hint`, `logistics.json`). Deleting an agent clears
any booking references first. The calendar gains an agent filter (all / none
/ each agent) via an `?agent=` query param, matching either the drop-off or
collection agent.

**Supporting commits.** `60ba6b2c` (#1210), `55889730` (#1220),
`fae3261e` (#1225), `d2425cc1` (#1227), `9615a9e4` (#1229),
`31e579ff` (#1249), `e778a9fe` (#1264).

**Suggested new page.** Create `pages/features/logistics.md` (permalink
`/features/logistics/`). Cover: the enable toggle, named logistics agents,
the "Needs logistics" listing flag, per-attendee drop-off and collection
agents with optional times, the split-logistics toggle, the agent-class user
and the deliveries run sheet, the calendar agent filter, and per-leg done
toggles. Add to `eleventyNavigation` under "Managing Events".

**Other affected pages.**

- `pages/features/features.md` - add a new feature entry under "Managing
  events".
- `pages/features/users.md` - add the new agent-class user role (a third role
  alongside Owners and Managers, restricted to the deliveries run sheet).
- `pages/features/daily-events.md` - mention the calendar agent filter.

### 3.2 Parent/child listings (required child selection at booking)

**What changed.** A parent listing can declare required child listings. When
a buyer books the parent, they must also choose child units totalling the
parent's quantity before they can check out. Shipped June 27 2026 (PR #1363,
commit `b583c0ad`).

A `listing_parents` link table (`parent_listing_id`, `child_listing_id`) with
a unique pair index and a child-side index (migration
`2026-06-21_listing_parents.ts`; schema `schema.ts:542-554`) stores directed
edges. Booking a parent does not auto-assign a child: the server-side fold
`resolveChildSelections` (`src/features/public/ticket-payment.ts:407-463`)
enforces that chosen child quantities must sum to exactly the parent's
quantity, returning `child_too_few` or `child_too_many` errors. When exactly
one bookable child exists and nothing was submitted, the fold auto-fills the
whole parent quantity to it (`ticket-payment.ts:443-444`). Folded child rows
record `parentListingId` and a shared `orderToken` UUID
(`src/shared/db/attendees/order-parents.ts:62-82`).

**Admin UI.** A "Required children" section renders on the listing edit page
inside an open "Advanced settings" `<details>`
(`src/ui/templates/admin/listings.tsx:2175-2219`). Route: `POST
/admin/listing/:id/children` (`src/features/admin/listings-parents.ts:376-402`,
`handleAdminListingChildren`). The form is checkboxes named
`child_listing_ids`, one per candidate listing, with ineligible candidates
pre-disabled showing the reason inline. If the listing is itself a child, it
shows "offered under" parent names and the candidate list is fully disabled.

**Validation errors** (`src/shared/listing-parents-rules.ts` and
`listings-parents.ts`):

- A parent that is itself a child of another parent (`children_err_parent_is_child`)
- A chosen child that is itself a parent (`children_err_child_is_parent`)
- Renewal tiers on either side (`children_err_parent_renewal` /
  `children_err_child_renewal`)
- A daily child needs a daily parent (`children_err_child_daily`)
- Child duration must match parent span (`children_err_child_duration`)
- A child carrying an opt-in add-on reachable only through the suppressed
  child (`children_err_child_addon`)

**Booking page.** A `<fieldset class="child-selector">` renders under each
parent (`src/ui/templates/public/reservations.tsx:855-935`). A "X of Q
chosen" hint updates live (`src/ui/client/admin/child-required.ts:23-31`). A
"Choose Q add-on(s) in total" note is shown. A per-child `<select>` renders
for multi-child parents (`reservations.tsx:772-794`). A sole bookable child
auto-selects via `renderSoleChildOption` (`reservations.tsx:820-845`).
`child-compat.ts` disables children incompatible with the selected date or
day-count using `data-child-dates` and `data-child-spans` attributes; a sole
incompatible child disables the parent.

**Discovery suppression.** `src/features/public/discovery.ts` is the single
source of truth. Child listings return 404 at explicit slug entry points
(`ticket-payment.ts:840-842`). Indirect pages (group/order) drop child rows
via `dropChildListings` (`ticket-payment.ts:812-817`). `applyParentSoldOut`
(`discovery.ts:293-299`) projects parents with no bookable child to sold-out.
Group QR/share CTAs are suppressed when no member is standalone-bookable
(`groupHasBookableMember`, `discovery.ts:270-278`). Children are filtered from
the multi-booking link builder (`dashboard.ts:97`).

**Single-level only.** `childEdgeIncompatibility`
(`listings-parents.ts:61-78`) blocks a parent that is itself a child and a
candidate that is itself a parent, enforced both on the edit page and at
save. `durationsCompatible` (`rules.ts:53-69`) checks a child's booking span
can match the parent's - a daily child takes the parent's date and span; a
customisable child must price the inherited span. `edgeIncompatibilityAfterChange`
(`listing-parents.ts:237-249`) re-checks every touching edge against post-save
field values.

**Attendee detail.** The parent/child relationship is shown on the admin
attendee detail page (`attendee-detail.tsx:143-219`): a folded child row shows
"addon under {parentName}" (`:189-197`); a parent row shows "includes
{childNames}" via reverse-link resolution (`:155-166, 198-206`).

**API.** Parents advertise required children on the detail/availability
endpoints (`buildChildPublicListings`, `api/index.ts:224-238`;
`buildChildAvailability`, `api/index.ts:417-443`). The booking POST accepts a
`children` array: `[{ slug, quantity, customPrice? }]` (`parseApiChildSelections`,
`api/index.ts:632-652`), translated into the `child_qty_*`/`child_price_*` form
by `buildParentFoldForm` (`api/index.ts:660-712`), then charged via
`completeFoldedBooking` (`api/index.ts:729-779`). Child listings return 404 on
detail/availability API endpoints (`guardChildListing`, `api/index.ts:313`).

**Supporting commits.** `b583c0ad` (#1363, merged June 27 2026). Core commit
on the merged branch: `67ad15e1` (DB layer and admin editor).

**Suggested new page.** Create `pages/features/parent-child-listings.md`
(permalink `/features/parent-child-listings/`). Cover: the required-child
relationship, the booking-page child selector with the live "X of Q chosen"
hint, sole-child auto-selection, the parent sold-out projection, discovery
suppression of children (they are only encountered via the parent), the single-
level and date/duration constraints, the attendee-detail "addon under"/"includes"
labels, and the API. Use cases: a ticket that requires a meal add-on, a
festival pass that requires a camping pitch, a workshop that requires a
materials kit. Add to `eleventyNavigation` under "Selling Tickets".

**Other affected pages.**

- `pages/features/features.md` - add a new feature entry under "Managing
  events" or "Selling tickets".
- `pages/features/groups.md` - explain the difference between event groups
  (multi-event checkout) and parent/child listings (required bundled
  selection).
- `pages/features/admin-api.md` - add the `children` array on the booking POST
  and the child fields on parent detail/availability responses.

### 3.3 Servicing events (block out capacity for maintenance)

**What changed.** Operators can block out listing capacity for servicing -
boiler service, deep clean, maintenance, equipment out for repair - without
creating a fake customer. Shipped June 27 2026 (PRs #1395, #1453, #1455).

A servicing event uses an `attendees.kind = 'servicing'` discriminator
(`src/shared/db/attendees/kind.ts`: `ATTENDEE_KIND = "attendee"`,
`SERVICING_KIND = "servicing"`, with `isServicing()` type guard). Schema
constraint at `migrations/schema.ts:278`: `TEXT NOT NULL DEFAULT 'attendee'
CHECK (kind IN ('attendee', 'servicing'))`. Servicing events are created
through the same `createAttendeeAtomic` path as bookings (`servicing.ts:247`),
so they consume listing capacity identically, holding `listing_attendees`
booking lines with positive quantities. A migration
(`2026-06-24_attendee_kind.ts`) backfills existing rows to `kind = 'attendee'`
and rebuilds listing aggregate triggers so `tickets_count` counts only
customer rows while `booked_quantity` still counts servicing (so capacity is
consumed).

**Admin UI.** All routes exist on `main` (`src/features/admin/servicing.tsx:542-551`):

| Route | Handler |
|---|---|
| `GET /admin/servicing` | List all service events (`renderServicingList`) |
| `GET /admin/servicing/new` | Create form (`renderCreate`) |
| `GET /admin/servicing/:id` | Edit form (`loadEditPage`) |
| `POST /admin/servicing/new` | Create (`createServicingEvent`) |
| `POST /admin/servicing/:id` | Update or record cost (`handleServicingPost` + `handleCostPost`) |
| `POST /admin/servicing/:id/delete` | Delete (`deleteServicingEvent`) |
| `POST /admin/servicing/:id/duplicate` | Duplicate (`duplicateServicingEvent`) |
| `POST /admin/servicing/:id/cost/:costId` | Edit a recorded cost (`editServiceCost`) |

"Servicing" appears in the admin nav (`nav.tsx:96`). The create/edit form
(`servicing-form-model.ts:39-58`) has: Name, Start date, Days (number min 1),
and a per-listing quantity table (`<input name="quantity_${listingId}"
type="number" min="0">` per active listing, plus inactive held listings on
edit with an "(inactive)" marker). If a held listing has been entirely
deleted, the edit page shows "N held listing(s) no longer exist and will be
removed" (`servicing.tsx:171-176`). Buttons use `SubmitButton` with named
icons (Create: plus, Save: save, Duplicate: rotate-ccw, Delete: trash-2,
Record Cost: plus, Edit cost: save).

**Dashboard.** An "Upcoming service events" `<details open>` section renders
(`src/ui/templates/admin/dashboard.tsx:202-229`), backed by
`getUpcomingServicingEvents` (`servicing.tsx:330-336`), filtering `WHERE
a.kind = ? AND (ea.start_at IS NULL OR DATE(ea.start_at) >= ?)`. Each event
links to `/admin/servicing/{id}` with date, listing count, and total quantity.

**Ledger integration.** `costAccount(listingId)` exists at
`src/shared/accounting/accounts.ts:62` - builds a `cost:{listingId}` account
ref. `recordServiceCost` (`servicing.ts:554-603`) posts a `service_cost`
transfer from `cost:{listingId}` to `WORLD`, with an encrypted memo, idempotent
on a per-render reference key (`servicing.ts:569-573` short-circuits if the
reference already exists). A "Record Cost" form (`servicing.tsx:212-233`) posts
amount, memo, and target listing, validating the service event holds the
listing (`servicingHoldsListing`, `servicing.ts:505-520`) before posting. The
edit page shows recorded costs with current amount (original plus adjustment
legs), date, listing, decrypted memo, and an inline edit form
(`servicing.tsx:234-272`).

**Visibility filtering.** Servicing events are hidden from all public and
customer surfaces via the `kind` filter in shared queries
(`src/shared/db/attendees/queries.ts` consistently uses `WHERE a.kind =
'attendee'` at lines 130, 148, 198, 201, 229, 251, 278, 365, 382, 462):

- Token lookup (`/t/:token`) returns 404 (`queries.ts:462`).
- QR SVG (`/t/:token/svg`) returns 404 (same lookup).
- Wallet passes return 404 (same lookup).
- Check-in operates on attendee-kind rows only.
- Public booking page availability is unaffected (listing aggregate counts
  exclude servicing, `listings.ts:699`).
- Bulk-email targets are filtered `kind = 'attendee'`.
- Merge candidates (`attendees-merge.ts:56`).
- Dashboard recents (`getNewestAttendeesRaw` via filtered queries).
- Attendees CSV excludes servicing (`attendees-csv.ts:84`).
- The admin calendar uses `kindScope: "attendees-and-servicing"` as an explicit
  opt-in (`calendar.ts:257`) - the only place servicing appears alongside
  attendees. The admin attendee link resolver (`src/shared/attendee-links.ts:9`)
  routes servicing rows to `/admin/servicing/:id` and attendee rows to
  `/admin/attendees/:id`. Calendar CSV labels servicing as "Service event"
  (`calendar-csv.ts:140`, admin-only).

**Follow-up fixes.** PR #1455 (commit `80fc664b`) removed the "Hidden from
public" checkbox (it was cosmetic - hiding is enforced structurally via
`kind='servicing'`) and removed the custom-questions section from the admin
form, though the data path (`saveServicingAnswers`, `servicing.ts:156-164`) is
fully preserved for API submissions. PR #1454 (commit `3d1e233b`) added a
default-deny read-only mode that blocks all `/admin/servicing/*` POST routes
in read-only mode (`src/features/index.ts:480-499`).

**Supporting commits.** `e2390d98` (#1395, planning doc), `3398fd9a` (#1453,
follow-up fixes doc), `80fc664b` (#1455, remove hidden indicator and questions,
add button icons), `3d1e233b` (#1454, read-only default-deny).

**Suggested new page.** Create `pages/features/servicing-events.md` (permalink
`/features/servicing-events/`). Cover: what a servicing event is (capacity
hold with no customer), the admin CRUD routes, the create/edit form (name,
start date, days, per-listing quantity), the dashboard upcoming-events
section, the Record Cost ledger integration, visibility filtering (hidden from
all public/customer surfaces, customers never see a reduction in headline
availability that is actually a servicing hold), read-only mode behaviour,
and duplicate/delete. Use cases: boiler servicing, deep cleans, maintenance
windows, staff holds, equipment out for repair. Add to `eleventyNavigation`
under "Managing Events".

**Other affected pages.**

- `pages/features/features.md` - add a new feature entry under "Managing
  events".
- `pages/features/ledger.md` (from 2.2) - cross-reference the servicing cost
  accounts (`cost:{listingId}`) and the `service_cost` transfer.

---

## Priority 4 - Internal improvements, likely skip

These are internal reliability, testing, or developer-experience changes.
They do not need marketing-site updates unless the site explicitly discusses
internal operations. Listed for completeness.

- **Sentry server-side error reporting** (`0b16a273`, `59a4813f`) - operator
  monitoring, not organiser-facing. Skip unless `pages/hosting.md` adds an
  operational-monitoring section.
- **Cross-document view transitions / pinned admin sidebar** (`6268ec7a`,
  `890201b0`, `c433aa3e`, `ab3f48a9`, `ded7bed1`) - admin UX polish. The
  marketing site does not document admin internals at this depth. Skip,
  though a passing mention in `pages/features/admin-guide.md` is fine.
- **Migration safety internals** (`c8406223`, `5bb2fa11`, `5f965a26`) - named
  migrations, TTL locks, atomic recreateTable. Skip.
- **Transaction round-trip guards and batch finalize** (`78092a27`,
  `d2bd8132`, `69ff585d`) - eliminates a rare timeout error class. Skip.
- **Mutation testing tooling and test hardening** (`f2222e20`, `3f79467d`,
  `6eb2eae7`, `4cd5d728`, plus many "harden X tests" commits). Skip.
- **Test-suite dedup** (`d799deea`, `b21b7777`, `9fd02f7b`, `08b8741d`,
  `c87170c0`). Skip.
- **Valibot adoption** (`8b9b021c` and follow-ups) - dependency change, no
  user-facing surface. Skip.
- **Typed pipes, deno-loader for client assets, CI config** (`d065d265`,
  `7dbbe383`, `00b32496`). Skip.
- **Settings registry refactor** (`#1109`, `#1105`). Skip.
- **Flash rendering backstop** (`#1370`, `#1371`, `#1368`). Skip. Note:
  `#1368` I18N_REPLACEMENTS lets operators rename "ticket" to "booking"
  etc. - could be a line in a customisation page, but probably skip.
- **Builder internals** (auto-provision Bunny DB, auto-build on demand,
  monthly renewals) - operator-facing. Skip for marketing site.
- **Superuser and support page** (`#1097`-`#1100`). Skip.
- **Path-traversal, IP, attachment hardening** (`#1107`, `#1106`). Skip.
- **Public `/scheduled` endpoint** (`3c7bc956`) - cron-guaranteed pruning. The
  README documents it. Skip for marketing site.
- **Admin guide encryption overview** (`3ca0bcd6`) - in-app documentation.
  Align the marketing-site encryption copy with the three-layer framing if
  desired, but this is covered by the KEK v2 update in 2.6. The three layers,
  verified in `src/locales/en/guide.json:194`, are: (a) attendee PII and
  free-text answers protected by two keys (server key plus account-password-
  derived key); (b) listing details encrypted at rest with the server key;
  (c) operational numbers (income, availability, capacity) stored as plain
  values so the database can total and compare them.

---

## Suggested implementation order

1. **Fix the false claims first.** Update `_data/faq.json` to remove "promo
   codes" from the "does not have" list. Update
   `pages/features/custom-questions.md` to remove "may come in the future".
   Update the competitor pages that list promo codes, discount codes,
   free-text fields, and add-ons as competitor exclusives (items 1.1 and 2.1).
2. **Add the promo-codes-and-add-ons feature page** (item 1.1). This is the
   largest new pricing capability and resolves the most competitor-comparison
   gaps.
3. **Update the encrypted feature page** with the password-bound key framing
   (item 2.6). This is a meaningful security improvement worth highlighting.
4. **Add the accounting ledger feature page** (items 2.2 and 2.3). This is a
   distinct capability with no current site coverage. Include the seven
   manual entry types.
5. **Add the three new system pages** (items 3.1, 3.2, 3.3) - logistics,
   parent/child listings, and servicing events. These are substantial new
   capabilities with no site coverage.
6. **Update the daily-events and manual-attendees pages** for multi-day
   capacity (2.8), no-quantity lines (2.4), system notes (2.5), and the
   bookings summary table (2.10).
7. **Update the hosting page** with update channels (2.13), point-in-time
   restore (2.14), and backups (2.15).
8. **Update the activity-logs page** for owner-key encryption and new columns
   (2.7).
9. **Add contact records coverage** (2.9) to the privacy pages.
10. **Update the customising and european pages** for link styling (2.17) and
    locale write-once (2.18).
11. **Update the users feature page** to add the new agent-class user role
    (item 3.1).
12. **Refresh the features index and homepage** to include the new feature
    pages in navigation and the feature grid.

---

## Screenshots to refresh

Several admin screenshots in `images/screenshots/` need updating because the
admin UI changed (sticky sidebar, view transitions, ledger page, modifier
admin, attendee edit page with notes and bookings table, servicing nav,
logistics settings):

- `activity-log.png` - now has Attendee and Listing columns; log entries are
  owner-key encrypted
- `dashboard.png` - admin layout changed (sticky sidebar); now has "Upcoming
  service events" section
- `settings.png` - locale removed from settings; link-styling toggle added;
  logistics settings page is new
- `users.png` - may show the new `/join` self-activation flow and the
  agent-class role

Consider adding new screenshots for:

- The Ledger page (`/admin/ledger`) with date-range filter and double-entry
  toggle
- The Modifiers admin (`/admin/modifiers`)
- The attendee edit page with system/operator notes and the bookings summary
  table
- The promo-code field and named discount line item on the booking form
- The Logistics settings page (`/admin/logistics`) and the deliveries run
  sheet (`/admin/deliveries`)
- The parent/child "Required children" section on the listing edit page and
  the booking-page child selector with the "X of Q chosen" hint
- The Servicing list (`/admin/servicing`) and the create/edit form with the
  per-listing quantity table and Record Cost form
