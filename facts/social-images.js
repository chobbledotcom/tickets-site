/**
 * Product facts behind the social screenshots.
 *
 * Each fact records the Tickets commit it was checked against, because the
 * app moves and a line range only means something in one checkout. A fact
 * added today records today's commit; an older fact keeps the commit it was
 * actually read at, rather than being re-stamped by somebody who did not
 * re-read it.
 *
 * `bun run facts:verify` resolves every source at its own fact's commit.
 * `bun run facts:review` puts a fact set beside the copy it backs.
 */

export const SOCIAL_IMAGE_FACTS = {
  "activity-log": {
    reviewed: "1f5b757deee05b0cb5a12963f08fd0a87f5686472c5c922bd248cd0bc0c5a542",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A listing has its own activity view, separate from the global one, holding what happened to that listing including a door check-in.",
        sources: [
          "../tickets/specs/attendees/checking-people-in-at-the-door.feature:28-36",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Activity log rows store a time, message and optional attendee and listing links. They do not store the account that performed an action.",
        sources: [
          "../tickets/src/shared/db/activityLog.ts:49-56",
          "../tickets/src/shared/db/activityLog.ts:128-155",
          "../tickets/src/ui/templates/admin/activityLog.tsx:174-192",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The global activity page shows the latest 200 entries, so it is a recent activity view rather than a record of every change.",
        sources: [
          "../tickets/src/features/admin/dashboard.ts:203-236",
        ],
      },
    ],
  },
  "admin-guide": {
    reviewed: "65d1b58688ffca814e7513e6f3d9560134f8fb06f0c813d7b6fb6aac665a7a8e",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The built-in FAQ guide covers the main admin sections and is served at a separate admin URL.",
        sources: [
          "../tickets/src/features/admin/guide.ts:20-37",
          "../tickets/src/ui/templates/admin/guide.tsx:40-52",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Guide links on admin pages point to anchors on the guide page.",
        sources: [
          "../tickets/src/ui/templates/components/actions.tsx:188-197",
          "../tickets/src/ui/templates/components/actions.tsx:209-239",
        ],
      },
    ],
  },
  "api-keys-list": {
    reviewed: "aa5644d7ffc6616e205d4018578ce486e02e7e30188de203f4f773e431888e1f",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "An API key is returned once when it is made and never stored: the row keeps an HMAC index of the key and the name the owner gave it.",
        sources: [
          "../tickets/src/shared/db/api-keys.ts:80-101",
          "../tickets/src/shared/db/api-keys.ts:113-120",
          "../tickets/specs/servicing/letting-another-system-in.feature:12-23",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A request carrying a key is served as the owner, and one carrying nothing or an unknown key is refused as unauthorised.",
        sources: [
          "../tickets/src/shared/db/api-keys.ts:103-111",
          "../tickets/specs/servicing/letting-another-system-in.feature:25-58",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A key can be taken back. The owner confirms by typing its name, and once it is gone that key is refused straight away.",
        sources: [
          "../tickets/specs/servicing/letting-another-system-in.feature:84-98",
        ],
      },
    ],
  },
  "attendee-statuses": {
    reviewed: "1850e189d2a0937b95f8ecdd2f4cd1e2b4c0d4e5a8106cb181b8928dd1bc2f38",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Owners can create, reorder and assign custom statuses to attendee records.",
        sources: [
          "../tickets/src/shared/db/attendee-statuses.ts:26-47",
          "../tickets/src/features/admin/settings-statuses.ts:85-141",
          "../tickets/src/shared/db/attendees/update.ts:38-58",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Status belongs to the attendee record, not to each individual listing line in an order.",
        sources: [
          "../tickets/src/shared/db/migrations/schema/tables-attendees.ts:28-90",
        ],
      },
    ],
  },
  "bulk-email": {
    reviewed: "82e06e6a153ac58db6b017f8caca04da3fce1eb8301118fc4cfb0b72020c1718",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Bulk email targets one attendee, one listing's attendees, or a built-in audience of active, upcoming or all attendees.",
        sources: [
          "../tickets/src/shared/bulk-email-targets.ts:31-109",
          "../tickets/src/shared/bulk-email-targets.ts:284-305",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The provider flow saves a draft and shows a preview before sending.",
        sources: [
          "../tickets/src/features/admin/bulk-email.ts:278-321",
          "../tickets/src/ui/templates/admin/bulk-email.tsx:353-426",
        ],
      },
    ],
  },
  "catalogue-import": {
    reviewed: "f100555266191eb7d79b8e94b33c964e3db121265586dc9cd8473dbf89fdd3ab",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Catalogue transfer exports and imports one listing or one group as JSON, not a whole catalogue at once.",
        sources: [
          "../tickets/src/features/admin/catalog-transfer/schema.ts:245-270",
          "../tickets/src/features/admin/catalog-transfer/routes.ts:79-101",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Prices and named relationships are included, but referenced listings and groups must already exist on the destination site.",
        sources: [
          "../tickets/src/features/admin/catalog-transfer/import.ts:96-127",
          "../tickets/src/features/admin/catalog-transfer/import.ts:353-370",
          "../tickets/src/features/admin/catalog-transfer/import.ts:455-479",
        ],
      },
    ],
  },
  "charity-events": {
    reviewed: "9ffd740dca78827512fe48200e5370e399ccb6d042152427ca482b4b9ab58380",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A public group page can sell adult and child listings together in one checkout.",
        sources: [
          "../tickets/src/features/public/groups.ts:19-60",
          "../tickets/src/features/public/groups.ts:98-110",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The app creates payment checkouts with the organiser's provider credentials and does not add a Chobble platform-fee transfer.",
        sources: [
          "../tickets/src/shared/stripe/runtime.ts:70-88",
          "../tickets/src/shared/stripe/client.ts:49-60",
          "../tickets/src/shared/square.ts:366-409",
        ],
      },
    ],
  },
  "confirmation-email-template-editor": {
    reviewed: "6732a70481db067a105334bb7ea40044e9ddc8fe61cdc4605cf04c135aec6a4d",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Owners can edit the confirmation subject, HTML body and plain-text body.",
        sources: [
          "../tickets/src/ui/templates/components/email-template-fields.tsx:16-79",
          "../tickets/src/features/admin/settings-email-templates.ts:24-65",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Confirmation templates receive selected attendee details, order entries and a ticket URL.",
        sources: [
          "../tickets/src/shared/email-renderer.ts:53-116",
          "../tickets/src/shared/email-renderer.ts:271-280",
        ],
      },
    ],
  },
  "custom-questions": {
    reviewed: "0508e731ff8d7d60bf5442110841337ce8358f523ba019eacfa51236f5eaf75f",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Checkout questions support radio, select and free-text answers.",
        sources: [
          "../tickets/src/shared/db/question-types.ts:12-29",
          "../tickets/src/ui/templates/components/question-controls.tsx:33-80",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Answers appear in admin attendee views and CSV exports, but the outgoing registration webhook payload does not contain them.",
        sources: [
          "../tickets/src/shared/columns/attendee-columns.ts:108-165",
          "../tickets/src/features/admin/attendees-csv.ts:101-121",
          "../tickets/src/shared/webhook.ts:40-64",
          "../tickets/src/shared/webhook.ts:177-220",
        ],
      },
    ],
  },
  "daily-events": {
    reviewed: "b5be84301e2af77de5ae1ff35262961c73a1548081d1035f61bad6273f9ec097",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Daily listings calculate capacity for each occupied date.",
        sources: [
          "../tickets/src/shared/capacity-rules.ts:45-47",
          "../tickets/src/shared/db/attendees/capacity/remaining.ts:63-105",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The admin calendar loads attendees for a selected date and shows remaining capacity.",
        sources: [
          "../tickets/src/features/admin/calendar.ts:278-355",
          "../tickets/src/ui/templates/admin/availability-checker.tsx:42-71",
        ],
      },
    ],
  },
  "deposits-and-balance-payments": {
    reviewed: "09f751712c4b9361affc0e463349176bf5cc5847cc71ed1d2753f008dd318ab3",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A reservation status can charge a percentage, fixed order amount or per-item deposit.",
        sources: [
          "../tickets/src/shared/reservation-amount.ts:4-13",
          "../tickets/src/shared/reservation-amount.ts:95-112",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A signed payment page shows and collects the live outstanding balance when a payment provider is configured.",
        sources: [
          "../tickets/src/features/public/balance.ts:32-115",
          "../tickets/src/ui/templates/public/balance.tsx:33-51",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A deposit paid against an order is recorded when it is taken, leaving the rest owing on the books and on the page the organiser reads, until settling it clears both.",
        sources: [
          "../tickets/specs/payments/paying-a-deposit.feature:9-21",
        ],
      },
    ],
  },
  "duplicate-event": {
    reviewed: "232d14835f18c19d93b0ac076382b9ed99bdcd2f73aa61a836a00df88082452e",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The duplicate-group form previews the original and replacement name and date for every listing before submission.",
        sources: [
          "../tickets/src/ui/templates/admin/bulk-actions.tsx:174-189",
          "../tickets/src/ui/templates/admin/bulk-actions.tsx:192-304",
          "../tickets/src/ui/client/admin/duplicate-preview.ts:18-63",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Group duplication applies one literal name replacement and one date offset to every cloned listing.",
        sources: [
          "../tickets/src/features/admin/bulk-actions.ts:179-220",
          "../tickets/src/shared/bulk-replace.ts:39-83",
        ],
      },
    ],
  },
  "equipment-hire": {
    reviewed: "f9c281de89757f0a56e889f698508959284c0c87ab6d87e3af657f718bb8d077",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A daily listing can let customers choose a start date and one of the priced day counts published by the organiser.",
        sources: [
          "../tickets/src/ui/templates/public/reservations/controls.ts:17-70",
          "../tickets/src/shared/booking/price-tree.ts:114-122",
        ],
      },
    ],
  },
  "group-bulk-actions": {
    reviewed: "30aae6a4f8bfd606abd607a3e499476961af811444948358b0e0510e8990e54e",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A group can be duplicated with renamed listings and a date offset applied to the copies.",
        sources: [
          "../tickets/src/features/admin/bulk-actions.ts:179-220",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Deactivation and reactivation are separate actions that change the active flag for all listings in a group.",
        sources: [
          "../tickets/src/features/admin/bulk-actions.ts:103-152",
          "../tickets/src/shared/db/groups.ts:900-914",
        ],
      },
    ],
  },
  groups: {
    reviewed: "2a8c21ea8c8c9f0b2857d92443c4a3fe2932310c54d2f3f3f922d94574e68858",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A public group page places several listings in one booking form.",
        sources: [
          "../tickets/src/features/public/groups.ts:19-60",
          "../tickets/src/features/public/groups.ts:98-110",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A group can have an optional shared capacity across its member listings.",
        sources: [
          "../tickets/src/ui/templates/fields/group.ts:24-31",
          "../tickets/src/shared/db/attendees/capacity/groups.ts:40-89",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A booking made on a group page reaches the organiser with the person, their contact details and the answer they chose.",
        sources: [
          "../tickets/specs/bookings/book-through-the-site.feature:10-22",
        ],
      },
    ],
  },
  "industry-catering": {
    reviewed: "1d0129251b48e48ecd7977d4b7a7772b6813df245ff9eee5facd1787ebb13375",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A booking form can collect a required address and required free-text dietary answers.",
        sources: [
          "../tickets/src/ui/templates/fields/ticket.ts:91-100",
          "../tickets/src/ui/templates/components/question-controls.tsx:39-50",
          "../tickets/src/shared/db/questions/parsing.ts:77-96",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Optional paid modifiers are priced in the same order as the listing.",
        sources: [
          "../tickets/src/ui/templates/public/reservations/form.tsx:95-119",
          "../tickets/src/features/public/ticket-form.ts:173-189",
        ],
      },
    ],
  },
  "industry-childrens-entertainer": {
    reviewed: "f6c8c0919eeb1bcc046565880e5cf0bda0f323d9cc584c12f0ade8b4bd8255a7",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The total selected child quantity must equal the parent quantity, so each party-package unit requires one entertainer unit.",
        sources: [
          "../tickets/src/shared/booking/fold-tree.ts:161-217",
          "../tickets/src/ui/templates/public/reservations/child-block.ts:187-210",
        ],
      },
    ],
  },
  "industry-folk-club": {
    reviewed: "ff50e63eb379523ab32d941eb6c03cf6633c1e2c8e7ba97331e9ba36633a3343",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A listing money statement combines gross sales, outside income, refunds, outside costs and net balance.",
        sources: [
          "../tickets/src/features/admin/ledger/page.ts:83-128",
          "../tickets/src/shared/accounting/listing-money-totals.ts:39-116",
        ],
      },
    ],
  },
  "industry-personal-stylist": {
    reviewed: "ea7c3bb52d6746febb0dd349adcfac83ce236d071c3de21763af4b298241e7ba",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Daily listings offer dates derived from notice, future-window, weekday and holiday rules.",
        sources: [
          "../tickets/src/shared/dates.ts:122-204",
          "../tickets/src/ui/templates/public/reservations/controls.ts:17-42",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Checkout can require a choice answer and a free-text preference answer before payment preparation.",
        sources: [
          "../tickets/src/ui/templates/components/question-controls.tsx:39-79",
          "../tickets/src/features/public/ticket-submit/prepare.ts:125-178",
        ],
      },
    ],
  },
  "industry-personal-trainer": {
    reviewed: "e50b07b07f4a68a6c84ef60ce91e7695bcd876ac91f54452da180011736136b3",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Listing capacity can be one for an individual session or higher for a group session, and daily capacity is checked per date.",
        sources: [
          "../tickets/src/ui/templates/fields/listing.ts:140-147",
          "../tickets/src/shared/db/attendees/capacity/remaining.ts:63-105",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A paid booking creates an online provider checkout when payments are configured.",
        sources: [
          "../tickets/src/features/public/ticket-submit.ts:151-199",
          "../tickets/src/features/public/ticket-payment.ts:126-175",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Checkout questions support radio, select and free-text answers, so a session booking can collect intake answers before payment.",
        sources: [
          "../tickets/src/shared/db/question-types.ts:12-29",
          "../tickets/src/ui/templates/components/question-controls.tsx:33-80",
        ],
      },
    ],
  },
  "industry-skip-hire": {
    reviewed: "ebdd2c81c90bcb8ce2107a772774f51dd16e6adcc769eeadef81e124d20abb3d",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Only configured, priced day counts appear in the public duration selector.",
        sources: [
          "../tickets/src/shared/types.ts:280-309",
          "../tickets/src/ui/templates/public/reservations/controls.ts:44-70",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A confirmed paid booking uses capacity across every occupied day.",
        sources: [
          "../tickets/src/shared/db/capacity.ts:276-309",
          "../tickets/src/shared/db/attendees/capacity/remaining.ts:91-104",
        ],
      },
    ],
  },
  "industry-venue-hire": {
    reviewed: "81b35efa82c6338b10051c8ff17a9c79d35e17fa5d2c4602d2f18c9a6a2d196b",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Submitting a paid booking checks the chosen span but reserves nothing; capacity is used after payment confirmation.",
        sources: [
          "../tickets/src/features/public/ticket-payment.ts:540-555",
          "../tickets/src/shared/dates.ts:122-204",
          "../tickets/src/features/public/ticket-submit/paths.ts:53-75",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Customers can choose a published one-day or multi-day option with its configured total price.",
        sources: [
          "../tickets/src/shared/types.ts:280-309",
          "../tickets/src/ui/templates/public/reservations/controls.ts:44-70",
        ],
      },
    ],
  },
  ledger: {
    reviewed: "ccdd9300dc4429c31bacbc9324981c48d3c7d4d1e515ed6a4036df42bfd5c16f",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The double-entry ledger records booking income, offline payments, refunds, costs and attendee balances.",
        sources: [
          "../tickets/src/shared/db/migrations/schema/tables-content.ts:89-119",
          "../tickets/src/shared/accounting/kinds.ts:21-30",
          "../tickets/src/shared/accounting/manual-entries.ts:98-142",
          "../tickets/src/shared/accounting/queries.ts:170-226",
        ],
      },
    ],
  },
  "listing-management": {
    reviewed: "48eb459e48623f1cb7b45e1806e9c6aa0e33aecdd4e57099b1000e350d259332",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The listing form includes date, location, capacity and price fields and supports later editing.",
        sources: [
          "../tickets/src/ui/templates/fields/listing.ts:124-147",
          "../tickets/src/ui/templates/fields/listing.ts:201-211",
          "../tickets/src/ui/templates/admin/listings/edit-panel.tsx:145-187",
        ],
      },
    ],
  },
  logistics: {
    reviewed: "f091cc9063e0cef22171881cdf3a3abff55fed935c2aa4f343263603dc661fc6",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Drop-off and collection legs can have separate agent and time assignments.",
        sources: [
          "../tickets/src/features/admin/attendee-logistics.ts:79-154",
          "../tickets/src/shared/db/logistics.ts:1-28",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Assigned users see a run sheet and can mark each leg done.",
        sources: [
          "../tickets/src/ui/templates/admin/deliveries.tsx:59-173",
          "../tickets/src/shared/db/logistics.ts:275-309",
        ],
      },
    ],
  },
  "manual-attendees": {
    reviewed: "ec004f2eba9547638265cc727125b11bcfa423932080266a949374b13c6362ba",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "Each person has a record counting their online bookings, the bookings staff added for them, their visits and how often they have been in touch.",
        sources: [
          "../tickets/src/ui/templates/admin/contact-history.tsx:56-100",
          "../tickets/specs/attendees/the-record-kept-about-someone.feature:12-24",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "The record is filed under a one-way code made from the email address, and carries a private note only the organiser reads.",
        sources: [
          "../tickets/src/shared/db/contact-preferences.ts:55-56",
          "../tickets/specs/attendees/the-record-kept-about-someone.feature:5-11",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Staff can add attendee records through the admin area, and they appear alongside online bookings.",
        sources: [
          "../tickets/src/features/admin/attendee-form-routes.ts:104-127",
          "../tickets/src/features/admin/attendees-list.ts:100-130",
        ],
      },
    ],
  },
  "moonlight-cinema-dark-checkout": {
    reviewed: "635631098158094b8f6f2be62527148716d680856aff9975e6b8ce249af1ac38",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The global theme setting accepts light or dark and applies through the shared layout used by public, booking and ticket pages.",
        sources: [
          "../tickets/src/ui/templates/admin/settings/theme.tsx:13-27",
          "../tickets/src/ui/templates/layout.tsx:39-58",
          "../tickets/src/ui/templates/public/reservations/ticket-page.tsx:185-233",
          "../tickets/src/ui/templates/tickets.tsx:329-358",
        ],
      },
    ],
  },
  "multi-day-hire": {
    reviewed: "5a4c6fb8b3f655485acfdfe6d5d073cdd8f81fd91d7719eaf9a208221f3e77f9",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A daily listing can carry a booking duration in days, and one booking holds every day it covers, including the middle and last.",
        sources: [
          "../tickets/specs/bookings/booking-several-days.feature:5-23",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "The duration is shown on the listing's own admin page, so it can be read without opening the edit form.",
        sources: [
          "../tickets/specs/bookings/changing-how-long-a-stay-lasts.feature:13-25",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A paid checkout does not hold a place. Capacity is used when the payment confirmation arrives, so two customers can both reach the payment page for the last one.",
        sources: [
          "../tickets/specs/payments/capacity-after-payment.feature:5-16",
        ],
      },
    ],
  },
  "oakfield-public-website": {
    reviewed: "eb3832dcdfc31d759267a94cc0e0b211f69bb0bdad0b9386a3ee9b2b6278ad74",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A site page is served at the address its owner chose as soon as it is saved, with no separate publish step, and is readable by somebody who is not signed in.",
        sources: [
          "../tickets/src/features/public/site-page.ts:1-30",
          "../tickets/src/shared/db/site-pages.ts:38-80",
          "../tickets/specs/servicing/writing-the-pages-people-read.feature:12-25",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The public listings page displays active listing names, dates, locations, descriptions and booking links.",
        sources: [
          "../tickets/src/ui/templates/public/homepage.tsx:183-220",
          "../tickets/src/ui/templates/public/homepage.tsx:313-334",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Public navigation includes Home and Listings and can include organiser pages, News and Contact when configured.",
        sources: [
          "../tickets/src/ui/templates/public/shared.tsx:56-97",
        ],
      },
    ],
  },
  "order-widget": {
    reviewed: "151a89c46c9b420c35b51fab5144712b856c0b862eec35df8f231f489529dd5b",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The external order script turns eligible listing links into add-to-cart controls and displays a floating cart.",
        sources: [
          "../tickets/src/ui/client/order.ts:279-365",
          "../tickets/src/ui/client/order.ts:420-439",
          "../tickets/src/ui/client/order.ts:464-505",
        ],
      },
    ],
  },
  packages: {
    reviewed: "05ad0acc4b619e447b1cd2f8c05b67fd018553d81b5fd72f293a759c626e9696",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A package is a group sold as one bundle, with a per-unit price and fixed quantity for each member.",
        sources: [
          "../tickets/src/locales/en/guide-listings.json:98-103",
          "../tickets/src/ui/templates/admin/groups/form.tsx:89-134",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "The package total is computed from member prices and quantities, and the customer chooses a package count in one checkout.",
        sources: [
          "../tickets/src/shared/booking/price-tree.ts:235-254",
          "../tickets/src/features/public/ticket-submit/parse.ts:201-244",
        ],
      },
    ],
  },
  "parent-child-listings": {
    reviewed: "e64bd9a3fbca342f3f2647d8904fc73500f3d9c3d6113271015e5d4bdfe820c7",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "For each parent unit, child quantities must total one unit from the configured child set.",
        sources: [
          "../tickets/src/locales/en/guide-listings.json:84-87",
          "../tickets/src/ui/client/admin/child-selection.ts:51-68",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A sole bookable child is added automatically.",
        sources: [
          "../tickets/src/ui/templates/public/reservations/child-block.ts:203-247",
        ],
      },
    ],
  },
  "payment-provider-choice": {
    reviewed: "0548dfa7d57cf419be463d38ea614516429a68ec0920bc554286319781d0558e",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "An organiser selects one payment provider from Stripe, Square and SumUp, or disables payments.",
        sources: [
          "../tickets/src/ui/templates/admin/settings/payment.tsx:28-56",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Switching the selected payment provider retains saved credentials for the other providers without using them.",
        sources: [
          "../tickets/src/locales/en/settings.json:18",
          "../tickets/src/ui/templates/admin/settings/payment.tsx:184-240",
          "../tickets/src/ui/templates/admin/settings/payment.tsx:302-320",
        ],
      },
    ],
  },
  "place-lost-while-paying": {
    reviewed: "e5a115478f079dd7e0cf3139add20bb86a0ed9b35f5b1e3b5e38476a257f65f1",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A paid checkout does not hold a place. Capacity is used when the payment confirmation arrives, so two customers can both reach the payment page for the last one.",
        sources: [
          "../tickets/specs/payments/capacity-after-payment.feature:5-16",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "The confirmation that arrives second keeps the customer at quantity 0, refunds the payment once, and writes the reason against the booking.",
        sources: [
          "../tickets/specs/payments/capacity-after-payment.feature:18-30",
        ],
      },
    ],
  },
  "promo-codes-and-add-ons": {
    reviewed: "2019fab65d4014cf15ffb4011deee8eae1076d85f8d0f3feac36b6ad1ee0660a",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "An add-on marked as sellable on its own gets its own page and its own place in the list of what is for sale, and is not described as an add-on there.",
        sources: [
          "../tickets/specs/bookings/add-ons-sold-on-their-own.feature:24-38",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Code-triggered and optional price modifiers are resolved in the same order pricing pass.",
        sources: [
          "../tickets/src/shared/price-modifier.ts:27-41",
          "../tickets/src/features/public/ticket-submit/pricing.ts:102-130",
        ],
      },
    ],
  },
  "qr-code-check-ins": {
    reviewed: "3c672a114dc74a4e7fdcf627a695433d964285a51839cfef1ad0e45c9ac2c4d6",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A phone camera scan checks in the booking line and its full quantity for the current listing.",
        sources: [
          "../tickets/src/ui/client/scanner.js:284-297",
          "../tickets/src/features/admin/scanner.ts:125-136",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Scanner results include checked in, already checked in, refunded, wrong listing and ticket not found. Immediate reads of the same token are suppressed for five seconds.",
        sources: [
          "../tickets/src/features/admin/scanner.ts:94-167",
          "../tickets/src/ui/client/scanner.js:142-169",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "When a ticket cannot be read, the organiser can pick the person from a list. That list holds only the people still to arrive.",
        sources: [
          "../tickets/specs/attendees/checking-people-in-at-the-door.feature:103-124",
        ],
      },
    ],
  },
  "record-put-right": {
    reviewed: "4f7a1bca9cf4514ddad638a1564aba345433aeae48661f28b31043155616f87c",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "The counts a contact record holds and the private note kept against it can both be corrected by the organiser, and what they save is what the record then reports.",
        sources: [
          "../tickets/specs/attendees/the-record-kept-about-someone.feature:38-48",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "The record is filed under a one-way code made from the email address, and carries a private note only the organiser reads.",
        sources: [
          "../tickets/src/shared/db/contact-preferences.ts:55-56",
          "../tickets/specs/attendees/the-record-kept-about-someone.feature:5-11",
        ],
      },
    ],
  },
  "record-repaired": {
    reviewed: "39cf04eb0383b73c9b95c74d5c4e52b44793e04d8969dd5b29f1051efcd18c1d",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A record whose private note cannot be decrypted still opens and still shows its counts, which are stored unencrypted, and saving over it restores a readable note without losing the counts.",
        sources: [
          "../tickets/specs/attendees/the-record-kept-about-someone.feature:66-81",
        ],
      },
    ],
  },
  "refunded-booking": {
    reviewed: "b8bd765c55290919f72f445f18b1b23a4f8e3327a9ed484bcdfc705614c9f8d3",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A refund posts reversing ledger legs for the sale, any booking fee and any modifier, plus the cash handed back, so the listing stops counting the sale.",
        sources: [
          "../tickets/src/shared/accounting/kinds.ts:21-31",
          "../tickets/specs/payments/refunding-a-booking.feature:10-22",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A booking can only be refunded once: a second attempt is refused before the payment provider is asked again.",
        sources: [
          "../tickets/specs/payments/refunding-a-booking.feature:24-35",
        ],
      },
    ],
  },
  "schools-and-ptas": {
    reviewed: "4314a24c7392396b0c7e02963224bf54cf2495c487c1f71604afbb99d9d5394b",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A booking can buy several places, but those places remain one attendee record with one answer per question.",
        sources: [
          "../tickets/src/features/public/ticket-form.ts:141-158",
          "../tickets/src/shared/db/questions/attendee-answers/save.ts:282-312",
        ],
      },
    ],
  },
  "servicing-events": {
    reviewed: "92a37f210783da7b20e0feb3731988dca1afdaca6ef3b7f4a06dc9d08665574e",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A service event holds listing capacity without creating a regular customer ticket or adding to ticket income.",
        sources: [
          "../tickets/src/shared/db/attendees/servicing.ts:112-183",
          "../tickets/src/shared/db/attendees/servicing.ts:264-294",
          "../tickets/src/shared/db/attendees/select.ts:223-240",
        ],
      },
    ],
  },
  "site-customisation": {
    reviewed: "c9cde15c0974b991926045aa5a301055f492791a538d82964ee5b4e03b93d0ab",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "Pages the owner writes are offered in the order they put them in, and each keeps the web address it was given.",
        sources: [
          "../tickets/specs/servicing/writing-the-pages-people-read.feature:47-58",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Owners or editors can set the public site title and homepage text, while owners can set custom CSS loaded after the default stylesheet.",
        sources: [
          "../tickets/src/features/admin/site.ts:32-55",
          "../tickets/src/features/admin/site.ts:131-156",
          "../tickets/src/shared/settings/forms.ts:116-133",
          "../tickets/src/ui/templates/layout.tsx:65-72",
        ],
      },
    ],
  },
  "summer-appeal-purchase": {
    reviewed: "bca6b38889d2f94b5de8fd47dae7490f27edb6a4ffb0c603992800f3ab9732af",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "What a pay-more listing earns is the amount the customer chose, not the amount asked, and every page showing the figure agrees.",
        sources: [
          "../tickets/specs/payments/paying-more-than-the-asking-price.feature:5-19",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A pay-more listing accepts an attendee-entered amount between its configured minimum and maximum.",
        sources: [
          "../tickets/src/ui/templates/fields/listing.ts:201-235",
          "../tickets/src/ui/templates/public/reservations/controls.ts:73-110",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Public custom questions support radio, select and free-text answers and are required when shown at checkout.",
        sources: [
          "../tickets/src/shared/db/question-types.ts:12-29",
          "../tickets/src/ui/templates/public/reservations/questions.tsx:40-58",
        ],
      },
    ],
  },
  "summer-fair-volunteer-form": {
    reviewed: "06084987eb08476972bb042dca26c4339b1ae88d5da4bc0e6dcdebad64e6cd70",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A public group booking page presents the group's active listings in one checkout.",
        sources: [
          "../tickets/src/features/public/groups.ts:19-60",
          "../tickets/src/features/public/groups.ts:98-110",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "A zero-total checkout creates the attendee record directly and saves custom-question answers without provider checkout.",
        sources: [
          "../tickets/src/features/public/ticket-submit/paths.ts:92-172",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "Each volunteer shift is its own listing with its own places, and a volunteer signing up for one shares an access need the organiser sees against that shift.",
        sources: [
          "../tickets/specs/bookings/volunteer-sign-up.feature:5-18",
        ],
      },
    ],
  },
  "team-users": {
    reviewed: "3cb3b6b8ef11a70e241df3528021560c43cfb3f69ce5a9acb9a7da50ea459b22",
    facts: [
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "An invited person sets their own password on a single-use /join link, and the invite cannot be used twice.",
        sources: [
          "../tickets/src/features/admin/users.ts:312-343",
          "../tickets/src/features/join.ts:113-140",
          "../tickets/specs/servicing/what-an-editor-can-do.feature:14-25",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Users have separate logins and one fixed role: owner, manager, editor or delivery agent.",
        sources: [
          "../tickets/src/shared/types.ts:577-647",
          "../tickets/src/ui/templates/fields/admin.ts:331-361",
          "../tickets/src/features/admin/users.ts:298-346",
        ],
      },
      {
        audited: "fb20681f5c7986d47dba5c666a332eaa4271f45e",
        fact: "A role decides which pages a person can open. An editor works on listings, groups and site pages, and asking for the attendees, money, people or settings pages outright is refused.",
        sources: [
          "../tickets/specs/servicing/what-an-editor-can-do.feature:6-13",
          "../tickets/specs/servicing/what-an-editor-can-do.feature:49-65",
        ],
      },
    ],
  },
  "workshop-terms-checkout": {
    reviewed: "9a5c3925686c0bcb055a0fa4b59db947ef33c8c3aef01bc021239d4654c948a6",
    facts: [
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "Terms are site-wide, with a group able to replace the global terms on its booking page. Individual listings do not have a terms field.",
        sources: [
          "../tickets/src/shared/settings/forms.ts:76-95",
          "../tickets/src/ui/templates/fields/group.ts:67-96",
          "../tickets/src/shared/catalog-fields/fields.ts:24-133",
        ],
      },
      {
        audited: "5c4194e7a3eb20712526769c8a1821525c94aa47",
        fact: "When terms are present, checkout requires agreement before completing a free or paid booking.",
        sources: [
          "../tickets/src/ui/templates/public/reservations/controls.ts:113-122",
          "../tickets/src/features/public/ticket-submit/parse.ts:47-55",
          "../tickets/src/features/public/ticket-submit/prepare.ts:58-81",
        ],
      },
    ],
  },
};
