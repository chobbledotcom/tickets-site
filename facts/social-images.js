export const AUDITED_TICKETS_COMMIT =
  "a70a953915864118ca8d471e7f6c29f148ebe608";

export const SOCIAL_IMAGE_FACTS = {
  "activity-log": [
    {
      fact: "Activity log rows store a time, message and optional attendee and listing links. They do not store the account that performed an action.",
      sources: [
        "../tickets/src/shared/db/activityLog.ts:49-56",
        "../tickets/src/shared/db/activityLog.ts:128-155",
        "../tickets/src/ui/templates/admin/activityLog.tsx:174-192",
      ],
    },
    {
      fact: "The global activity page shows the latest 200 entries, so it is a recent activity view rather than a record of every change.",
      sources: ["../tickets/src/features/admin/dashboard.ts:203-236"],
    },
  ],
  "admin-guide": [
    {
      fact: "The built-in FAQ guide covers the main admin sections and is served at a separate admin URL.",
      sources: [
        "../tickets/src/features/admin/guide.ts:20-37",
        "../tickets/src/ui/templates/admin/guide.tsx:40-52",
      ],
    },
    {
      fact: "Guide links on admin pages point to anchors on the guide page.",
      sources: [
        "../tickets/src/ui/templates/components/actions.tsx:188-197",
        "../tickets/src/ui/templates/components/actions.tsx:209-239",
      ],
    },
  ],
  "attendee-statuses": [
    {
      fact: "Owners can create, reorder and assign custom statuses to attendee records.",
      sources: [
        "../tickets/src/shared/db/attendee-statuses.ts:26-47",
        "../tickets/src/features/admin/settings-statuses.ts:85-141",
        "../tickets/src/shared/db/attendees/update.ts:38-58",
      ],
    },
    {
      fact: "Status belongs to the attendee record, not to each individual listing line in an order.",
      sources: [
        "../tickets/src/shared/db/migrations/schema/tables-attendees.ts:28-90",
      ],
    },
  ],
  "bulk-email": [
    {
      fact: "Bulk email targets one attendee, one listing's attendees, or a built-in audience of active, upcoming or all attendees.",
      sources: [
        "../tickets/src/shared/bulk-email-targets.ts:31-109",
        "../tickets/src/shared/bulk-email-targets.ts:284-305",
      ],
    },
    {
      fact: "The provider flow saves a draft and shows a preview before sending.",
      sources: [
        "../tickets/src/features/admin/bulk-email.ts:278-321",
        "../tickets/src/ui/templates/admin/bulk-email.tsx:353-426",
      ],
    },
  ],
  "catalogue-import": [
    {
      fact: "Catalogue transfer exports and imports one listing or one group as JSON, not a whole catalogue at once.",
      sources: [
        "../tickets/src/features/admin/catalog-transfer/schema.ts:245-270",
        "../tickets/src/features/admin/catalog-transfer/routes.ts:79-101",
      ],
    },
    {
      fact: "Prices and named relationships are included, but referenced listings and groups must already exist on the destination site.",
      sources: [
        "../tickets/src/features/admin/catalog-transfer/import.ts:96-127",
        "../tickets/src/features/admin/catalog-transfer/import.ts:353-370",
        "../tickets/src/features/admin/catalog-transfer/import.ts:455-479",
      ],
    },
  ],
  "charity-events": [
    {
      fact: "A public group page can sell adult and child listings together in one checkout.",
      sources: [
        "../tickets/src/features/public/groups.ts:19-60",
        "../tickets/src/features/public/groups.ts:98-110",
      ],
    },
    {
      fact: "The app creates payment checkouts with the organiser's provider credentials and does not add a Chobble platform-fee transfer.",
      sources: [
        "../tickets/src/shared/stripe/runtime.ts:70-88",
        "../tickets/src/shared/stripe/client.ts:49-60",
        "../tickets/src/shared/square.ts:366-409",
      ],
    },
  ],
  "confirmation-email-template-editor": [
    {
      fact: "Owners can edit the confirmation subject, HTML body and plain-text body.",
      sources: [
        "../tickets/src/ui/templates/components/email-template-fields.tsx:16-79",
        "../tickets/src/features/admin/settings-email-templates.ts:24-65",
      ],
    },
    {
      fact: "Confirmation templates receive selected attendee details, order entries and a ticket URL.",
      sources: [
        "../tickets/src/shared/email-renderer.ts:53-116",
        "../tickets/src/shared/email-renderer.ts:271-280",
      ],
    },
  ],
  "custom-questions": [
    {
      fact: "Checkout questions support radio, select and free-text answers.",
      sources: [
        "../tickets/src/shared/db/question-types.ts:12-29",
        "../tickets/src/ui/templates/components/question-controls.tsx:33-80",
      ],
    },
    {
      fact: "Answers appear in admin attendee views and CSV exports, but the outgoing registration webhook payload does not contain them.",
      sources: [
        "../tickets/src/shared/columns/attendee-columns.ts:108-165",
        "../tickets/src/features/admin/attendees-csv.ts:101-121",
        "../tickets/src/shared/webhook.ts:40-64",
        "../tickets/src/shared/webhook.ts:177-220",
      ],
    },
  ],
  "daily-events": [
    {
      fact: "Daily listings calculate capacity for each occupied date.",
      sources: [
        "../tickets/src/shared/capacity-rules.ts:45-47",
        "../tickets/src/shared/db/attendees/capacity/remaining.ts:63-105",
      ],
    },
    {
      fact: "The admin calendar loads attendees for a selected date and shows remaining capacity.",
      sources: [
        "../tickets/src/features/admin/calendar.ts:278-355",
        "../tickets/src/ui/templates/admin/availability-checker.tsx:42-71",
      ],
    },
  ],
  "deposits-and-balance-payments": [
    {
      fact: "A reservation status can charge a percentage, fixed order amount or per-item deposit.",
      sources: [
        "../tickets/src/shared/reservation-amount.ts:4-13",
        "../tickets/src/shared/reservation-amount.ts:95-112",
      ],
    },
    {
      fact: "A signed payment page shows and collects the live outstanding balance when a payment provider is configured.",
      sources: [
        "../tickets/src/features/public/balance.ts:32-115",
        "../tickets/src/ui/templates/public/balance.tsx:33-51",
      ],
    },
  ],
  "equipment-hire": [
    {
      fact: "A daily listing can let customers choose a start date and one of the priced day counts published by the organiser.",
      sources: [
        "../tickets/src/ui/templates/public/reservations/controls.ts:17-70",
        "../tickets/src/shared/booking/price-tree.ts:114-122",
      ],
    },
  ],
  "group-bulk-actions": [
    {
      fact: "A group can be duplicated with renamed listings and a date offset applied to the copies.",
      sources: ["../tickets/src/features/admin/bulk-actions.ts:179-220"],
    },
    {
      fact: "Deactivation and reactivation are separate actions that change the active flag for all listings in a group.",
      sources: [
        "../tickets/src/features/admin/bulk-actions.ts:103-152",
        "../tickets/src/shared/db/groups.ts:900-914",
      ],
    },
  ],
  groups: [
    {
      fact: "A public group page places several listings in one booking form.",
      sources: [
        "../tickets/src/features/public/groups.ts:19-60",
        "../tickets/src/features/public/groups.ts:98-110",
      ],
    },
    {
      fact: "A group can have an optional shared capacity across its member listings.",
      sources: [
        "../tickets/src/ui/templates/fields/group.ts:24-31",
        "../tickets/src/shared/db/attendees/capacity/groups.ts:40-89",
      ],
    },
  ],
  "industry-catering": [
    {
      fact: "A booking form can collect a required address and required free-text dietary answers.",
      sources: [
        "../tickets/src/ui/templates/fields/ticket.ts:91-100",
        "../tickets/src/ui/templates/components/question-controls.tsx:39-50",
        "../tickets/src/shared/db/questions/parsing.ts:77-96",
      ],
    },
    {
      fact: "Optional paid modifiers are priced in the same order as the listing.",
      sources: [
        "../tickets/src/ui/templates/public/reservations/form.tsx:95-119",
        "../tickets/src/features/public/ticket-form.ts:173-189",
      ],
    },
  ],
  "industry-childrens-entertainer": [
    {
      fact: "The total selected child quantity must equal the parent quantity, so each party-package unit requires one entertainer unit.",
      sources: [
        "../tickets/src/shared/booking/fold-tree.ts:161-217",
        "../tickets/src/ui/templates/public/reservations/child-block.ts:187-210",
      ],
    },
  ],
  "industry-folk-club": [
    {
      fact: "A listing money statement combines gross sales, outside income, refunds, outside costs and net balance.",
      sources: [
        "../tickets/src/features/admin/ledger/page.ts:83-128",
        "../tickets/src/shared/accounting/listing-money-totals.ts:39-116",
      ],
    },
  ],
  "industry-personal-stylist": [
    {
      fact: "Daily listings offer dates derived from notice, future-window, weekday and holiday rules.",
      sources: [
        "../tickets/src/shared/dates.ts:122-204",
        "../tickets/src/ui/templates/public/reservations/controls.ts:17-42",
      ],
    },
    {
      fact: "Checkout can require a choice answer and a free-text preference answer before payment preparation.",
      sources: [
        "../tickets/src/ui/templates/components/question-controls.tsx:39-79",
        "../tickets/src/features/public/ticket-submit/prepare.ts:125-178",
      ],
    },
  ],
  "industry-personal-trainer": [
    {
      fact: "Listing capacity can be one for an individual session or higher for a group session, and daily capacity is checked per date.",
      sources: [
        "../tickets/src/ui/templates/fields/listing.ts:140-147",
        "../tickets/src/shared/db/attendees/capacity/remaining.ts:63-105",
      ],
    },
    {
      fact: "A paid booking creates an online provider checkout when payments are configured.",
      sources: [
        "../tickets/src/features/public/ticket-submit.ts:151-199",
        "../tickets/src/features/public/ticket-payment.ts:126-175",
      ],
    },
  ],
  "industry-skip-hire": [
    {
      fact: "Only configured, priced day counts appear in the public duration selector.",
      sources: [
        "../tickets/src/shared/types.ts:280-309",
        "../tickets/src/ui/templates/public/reservations/controls.ts:44-70",
      ],
    },
    {
      fact: "A confirmed paid booking uses capacity across every occupied day.",
      sources: [
        "../tickets/src/shared/db/capacity.ts:276-309",
        "../tickets/src/shared/db/attendees/capacity/remaining.ts:91-104",
      ],
    },
  ],
  "industry-venue-hire": [
    {
      fact: "Submitting a paid booking checks the chosen span but reserves nothing; capacity is used after payment confirmation.",
      sources: [
        "../tickets/src/features/public/ticket-payment.ts:540-555",
        "../tickets/src/shared/dates.ts:122-204",
        "../tickets/src/features/public/ticket-submit/paths.ts:53-75",
      ],
    },
    {
      fact: "Customers can choose a published one-day or multi-day option with its configured total price.",
      sources: [
        "../tickets/src/shared/types.ts:280-309",
        "../tickets/src/ui/templates/public/reservations/controls.ts:44-70",
      ],
    },
  ],
  ledger: [
    {
      fact: "The double-entry ledger records booking income, offline payments, refunds, costs and attendee balances.",
      sources: [
        "../tickets/src/shared/db/migrations/schema/tables-content.ts:89-119",
        "../tickets/src/shared/accounting/kinds.ts:21-30",
        "../tickets/src/shared/accounting/manual-entries.ts:98-142",
        "../tickets/src/shared/accounting/queries.ts:170-226",
      ],
    },
  ],
  "listing-management": [
    {
      fact: "The listing form includes date, location, capacity and price fields and supports later editing.",
      sources: [
        "../tickets/src/ui/templates/fields/listing.ts:124-147",
        "../tickets/src/ui/templates/fields/listing.ts:201-211",
        "../tickets/src/ui/templates/admin/listings/edit-panel.tsx:145-187",
      ],
    },
  ],
  logistics: [
    {
      fact: "Drop-off and collection legs can have separate agent and time assignments.",
      sources: [
        "../tickets/src/features/admin/attendee-logistics.ts:79-154",
        "../tickets/src/shared/db/logistics.ts:1-28",
      ],
    },
    {
      fact: "Assigned users see a run sheet and can mark each leg done.",
      sources: [
        "../tickets/src/ui/templates/admin/deliveries.tsx:59-173",
        "../tickets/src/shared/db/logistics.ts:275-309",
      ],
    },
  ],
  "manual-attendees": [
    {
      fact: "Staff can add attendee records through the admin area, and they appear alongside online bookings.",
      sources: [
        "../tickets/src/features/admin/attendee-form-routes.ts:104-127",
        "../tickets/src/features/admin/attendees-list.ts:100-130",
      ],
    },
    {
      fact: "A manual booking on a paid listing records the amount owed; staff must add a write-off to make it complimentary.",
      sources: [
        "../tickets/src/features/admin/attendee-form-routes.ts:343-378",
        "../tickets/src/shared/checkout-complete.ts:83-104",
        "../tickets/src/shared/accounting/manual-entries.ts:107-124",
      ],
    },
  ],
  "moonlight-cinema-dark-checkout": [
    {
      fact: "The global theme setting accepts light or dark and applies through the shared layout used by public, booking and ticket pages.",
      sources: [
        "../tickets/src/ui/templates/admin/settings/theme.tsx:13-27",
        "../tickets/src/ui/templates/layout.tsx:39-58",
        "../tickets/src/ui/templates/public/reservations/ticket-page.tsx:185-233",
        "../tickets/src/ui/templates/tickets.tsx:329-358",
      ],
    },
  ],
  "order-widget": [
    {
      fact: "The external order script turns eligible listing links into add-to-cart controls and displays a floating cart.",
      sources: [
        "../tickets/src/ui/client/order.ts:279-365",
        "../tickets/src/ui/client/order.ts:420-439",
        "../tickets/src/ui/client/order.ts:464-505",
      ],
    },
  ],
  packages: [
    {
      fact: "A package is a group sold as one bundle, with a per-unit price and fixed quantity for each member.",
      sources: [
        "../tickets/src/locales/en/guide-listings.json:98-103",
        "../tickets/src/ui/templates/admin/groups/form.tsx:89-134",
      ],
    },
    {
      fact: "The package total is computed from member prices and quantities, and the customer chooses a package count in one checkout.",
      sources: [
        "../tickets/src/shared/booking/price-tree.ts:235-254",
        "../tickets/src/features/public/ticket-submit/parse.ts:201-244",
      ],
    },
  ],
  "parent-child-listings": [
    {
      fact: "For each parent unit, child quantities must total one unit from the configured child set.",
      sources: [
        "../tickets/src/locales/en/guide-listings.json:84-87",
        "../tickets/src/ui/client/admin/child-selection.ts:51-68",
      ],
    },
    {
      fact: "A sole bookable child is added automatically.",
      sources: [
        "../tickets/src/ui/templates/public/reservations/child-block.ts:203-247",
      ],
    },
  ],
  "promo-codes-and-add-ons": [
    {
      fact: "Code-triggered and optional price modifiers are resolved in the same order pricing pass.",
      sources: [
        "../tickets/src/shared/price-modifier.ts:27-41",
        "../tickets/src/features/public/ticket-submit/pricing.ts:102-130",
      ],
    },
  ],
  "qr-code-check-ins": [
    {
      fact: "A phone camera scan checks in the booking line and its full quantity for the current listing.",
      sources: [
        "../tickets/src/ui/client/scanner.js:284-297",
        "../tickets/src/features/admin/scanner.ts:125-136",
      ],
    },
    {
      fact: "Scanner results include checked in, already checked in, refunded, wrong listing and ticket not found. Immediate reads of the same token are suppressed for five seconds.",
      sources: [
        "../tickets/src/features/admin/scanner.ts:94-167",
        "../tickets/src/ui/client/scanner.js:142-169",
      ],
    },
  ],
  "schools-and-ptas": [
    {
      fact: "A booking can buy several places, but those places remain one attendee record with one answer per question.",
      sources: [
        "../tickets/src/features/public/ticket-form.ts:141-158",
        "../tickets/src/shared/db/questions/attendee-answers/save.ts:282-312",
      ],
    },
  ],
  "servicing-events": [
    {
      fact: "A service event holds listing capacity without creating a regular customer ticket or adding to ticket income.",
      sources: [
        "../tickets/src/shared/db/attendees/servicing.ts:112-183",
        "../tickets/src/shared/db/attendees/servicing.ts:264-294",
        "../tickets/src/shared/db/attendees/select.ts:223-240",
      ],
    },
  ],
  "site-customisation": [
    {
      fact: "Owners or editors can set the public site title and homepage text, while owners can set custom CSS loaded after the default stylesheet.",
      sources: [
        "../tickets/src/features/admin/site.ts:32-55",
        "../tickets/src/features/admin/site.ts:131-156",
        "../tickets/src/shared/settings/forms.ts:116-133",
        "../tickets/src/ui/templates/layout.tsx:65-72",
      ],
    },
  ],
  "team-users": [
    {
      fact: "Users have separate logins and one fixed role: owner, manager, editor or delivery agent.",
      sources: [
        "../tickets/src/shared/types.ts:577-647",
        "../tickets/src/ui/templates/fields/admin.ts:331-361",
        "../tickets/src/features/admin/users.ts:298-346",
      ],
    },
  ],
  "workshop-terms-checkout": [
    {
      fact: "Terms are site-wide, with a group able to replace the global terms on its booking page. Individual listings do not have a terms field.",
      sources: [
        "../tickets/src/shared/settings/forms.ts:76-95",
        "../tickets/src/ui/templates/fields/group.ts:67-96",
        "../tickets/src/shared/catalog-fields/fields.ts:24-133",
      ],
    },
    {
      fact: "When terms are present, checkout requires agreement before completing a free or paid booking.",
      sources: [
        "../tickets/src/ui/templates/public/reservations/controls.ts:113-122",
        "../tickets/src/features/public/ticket-submit/parse.ts:47-55",
        "../tickets/src/features/public/ticket-submit/prepare.ts:58-81",
      ],
    },
  ],
};
