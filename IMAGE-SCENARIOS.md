---
permalink: false
layout: null
---

# Page Image Scenario Backlog

## Scope

This audit covers all 163 rendered client pages. A page counts as illustrated
when an image is visible in its content. Product screenshots, figures,
galleries and visible image backgrounds count. Icons, logos, social metadata
and loading placeholders do not.

| Page group | Total | With images | Without images |
|---|---:|---:|---:|
| Editorial pages in the sitemap | 161 | 65 | 96 |
| Non-indexed utility pages | 2 | 0 | 2 |
| **All rendered pages** | **163** | **65** | **98** |

The 96 editorial pages are the main illustration backlog. The two utility
pages are listed separately at the end.

## Asset Rules

- Use product screenshots for a real organiser or attendee task that exists in
  Chobble Tickets.
- Use diagrams for data flow, hosting, domains, encryption and other concepts
  that cannot be shown honestly in one interface state.
- Use comparison graphics rather than copied competitor screenshots. Show the
  documented trade-offs and avoid winner badges.
- Use fictional people, organisations, addresses and events. Existing scenario
  names should be reused where they make the site feel coherent.
- Product screenshots belong in `images/screenshots/`. Proposed editorial
  diagrams can use `images/illustrations/`.
- Cucumber evidence screenshots come from the Tickets app evidence artifact.
  Import them with `bun run evidence:import --from <artifact-dir>`. Do not add
  a matching site-owned scenario.
- Legacy product screenshots still need a site-owned scenario. They also need
  matching social copy and an audited fact record if a Facebook image will be
  generated.
- Paid checkout must never be illustrated as reserving capacity. Capacity is
  used only when payment confirmation arrives.

## Core Pages

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/about.md` | Diagram: `about-chobble-cic` | A restrained timeline from Chobble starting in 2024 to Chobble CIC in 2026, followed by a present-day service diagram showing managed hosting, support and an organiser ticket site. Include the company number and asset lock, not a founder portrait. | Shows who is accountable for the service and what the hosting payment covers. |
| `pages/faq.md` | Diagram: `organiser-faq-checklist` | Oakfield Community Events has four pre-sign-up questions: annual cost, where ticket income goes, who can see attendee data and how event setup can be moved. Show the factual answer to each. | Gives visual anchors for the main buying questions rather than illustrating one arbitrary FAQ. |
| `pages/reviews.md` | Product composite: `reviewed-booking-journey` | A clearly labelled example follows Alex Morgan through an £18 Riverside Summer Concert payment confirmation, QR ticket and successful door check-in. Place relevant existing review excerpts beside the three states without attributing the fictional event to a reviewer. | Connects comments about checkout and queues to concrete product behaviour. |

## Feature Pages: Selling And Payments

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/features/selling-tickets.md` | Diagram: `selling-tickets-workflow` | Riverside Summer Concert moves from listing setup to attendee checkout, payment confirmation consuming capacity, QR delivery, check-in and an optional refund. | Shows how separate ticket-selling features form one workflow. |
| `pages/features/overbooking-prevention.md` | [x] Cucumber evidence capture: `place-lost-while-paying` | The note the site writes against the booking whose confirmation arrived second, taken from the case that races two payments for the last place. Shows the organiser's side of the race rather than a diagram of it. | Explains the real race condition without inventing a checkout hold. |
| `pages/features/stripe-and-square.md` | [x] Admin screenshot: `payment-provider-choice` | Show Stripe, Square and SumUp as alternative providers, Stripe selected, and the configured Stripe test-key state. | Shows provider choice, saved credentials and the difference between test and live keys. |
| `pages/features/refunds.md` | [x] Cucumber evidence capture: `refunded-booking` | One booking's money after a refund, taken from the case that refunds a paid place: the sale, its payment, the income removed and the money handed back. | Shows that a refund undoes the sale as well as returning the money. |
| `pages/features/no-per-ticket-fees.md` | Comparison graphic: `flat-fee-worked-examples` | Use the existing examples of 50 tickets at £10, 500 at £15 and 5,000 at £20. Separate Chobble hosting, payment processing and platform commission from the percentage-plus-fixed alternative. Include the low-volume example where the alternative is slightly cheaper. | Makes the break-even point and volume effect understandable without hiding processing costs. |
| `pages/features/purchasable-events.md` | [x] Cucumber evidence capture: `paid-more-than-asked` | A Donate listing's income statement after a supporter chose £80 against a £30 asking price, taken from the case that reads the figure back. | Shows that what the listing earns is what the supporter chose, not what was asked. |
| `pages/features/sign-up-forms.md` | [x] Attendee screenshot: `summer-fair-volunteer-form` | Oakfield Primary Summer Fair has separate setup, gate and clear-up listings with eight places each. Show one selected shift, an access-needs answer, a £0 total and Continue. | Shows a useful free form with real capacity for each shift. |
| `pages/features/registration-deadlines.md` | Admin and public composite: `registration-deadline` | Fernbank Pottery's workshop starts at 10:00 on 16 August, closes at 18:00 the previous day and allows two places per buyer. Show the setting beside the public Booking has closed state. | Connects the organiser setting to the attendee result. |
| `pages/features/postcode-lookup.md` | Attendee screenshot: `delivery-postcode-lookup` | Maya Patel books Willow Marquee Hire to `M25 1FL`. Show postcode search results, the selected editable address and a small run-sheet preview. | Connects faster address entry to accurate delivery operations. |
| `pages/features/multi-day-hire.md` | [x] Cucumber evidence capture: `stay-length-on-the-page` | A listing booked by the day, on its own admin page, saying each booking lasts three days. Taken from the case that reads the length off that page. | Shows duration as something the organiser can read without opening the edit form. |

## Feature Pages: Public Site

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/features/your-public-website.md` | [x] Cucumber evidence capture: `page-anybody-can-read` | A page the owner wrote, read at the address they chose by somebody who never signed in, offered in the site's navigation beside Home and Listings. The public event catalogue this row once described is not shown here; the gallery's homepage-editor and checkout images cover the listings side. | Proves that the product can supply organiser pages, not only isolated checkout links. |
| `pages/features/custom-domain.md` | Diagram: `three-ticket-site-addresses` | Oakfield's host subdomain, `tickets.oakfieldevents.org` and the underlying Bunny address converge on one installation. Show the CNAME step separately from the immediate host address. | Explains that a custom domain is separate from self-hosting and can coexist with fallback addresses. |
| `pages/features/white-labelling.md` | Diagram: `white-label-touchpoints` | Follow one Oakfield Community Events booking across the four places a provider name can appear: the browser address bar on `tickets.oakfield.org.uk`, the booking page header, the confirmation email sender, and the ticket itself. Show Oakfield's name in all four and no Chobble name anywhere, with the payment provider's own name left visible at the card step. | Shows exactly which surfaces carry the organiser's name and which one is out of the organiser's control. |
| `pages/features/markdown-descriptions.md` | Product composite: `markdown-description-preview` | Fernbank Pottery edits a workshop description with headings, a materials list, bold allergy guidance and a directions link. Show source beside the rendered public page. | Shows the writing workflow and result without explaining Markdown abstractly. |
| `pages/features/images.md` | Admin screenshot: `image-library` | Fernbank's library contains three workshop images with useful alt text. Show attachment counts, ordering controls and a protected `joining-instructions.pdf` attachment. | Demonstrates reuse, accessibility text and downloadable attendee files. |
| `pages/features/embeddable-widget.md` | Public-site screenshot: `embedded-fernbank-listings` | Fernbank's existing website contains an automatically resized Chobble iframe with Mug-making Workshop, Glazing Pass and Studio Tour cards. Keep the organiser's own site header visible. | Shows what embedding looks like on an existing website. |
| `pages/features/custom-redirects.md` | Diagram: `booking-custom-redirect` | After Maya books the bread workshop, the configured redirect sends her to Fernbank's preparation page with clothing and parking notes. Show the default confirmation as the fallback route. | Explains when redirects happen and what an organiser can put at the destination. |

## Feature Pages: Data And Integrations

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/features/platform-and-integrations.md` | Diagram: `configured-service-map` | Oakfield uses Stripe, Mailgun EU, RSS, backups and wallet passes while SMS and webhooks are disabled. Solid and outlined connections distinguish enabled and optional services. | Shows that integrations are selected services rather than an unavoidable data-sharing bundle. |
| `pages/features/privacy-controls.md` | [x] Cucumber evidence capture: `record-put-right` | The contact-history record the site keeps about one person, separate from their bookings, with the counts and the private note corrected by the organiser. Taken from the case that corrects them. | Shows how little a contact record is, and that the organiser controls what it says. |
| `pages/features/webhooks.md` | Diagram: `booking-webhook-flow` | Alex books two £18 Riverside Summer Concert tickets. One consolidated booking notification flows to Riverside's Slack channel, CRM and spreadsheet with event, quantity and total labelled. | Explains the organiser outcome without making raw JSON the main image. |
| `pages/features/admin-api.md` | Admin screenshot: `named-admin-api-key` | Riverside Print Studio uses an API key called Autumn programme to create 12 course dates. Show the named key, a successful created listing response and matching activity entry. | Shows that automation uses identifiable credentials and remains auditable. |
| `pages/features/public-api.md` | [x] Cucumber evidence capture: `api-keys-list` | The owner's list of keys, taken from the case that makes one: it names the key and never shows it. | Shows what an owner sees after handing a key to another system. |
| `pages/features/csv-export.md` | [x] Cucumber evidence capture: `attendee-csv-export` | A Retreat attendee tab with one booked place and its CSV export link, taken from the case that checks a customer-selected two-day booking exports the two days chosen rather than the maximum available. | Shows where an organiser exports a listing's bookings and what date range the export uses. |
| `pages/features/backups.md` | [x] Cucumber evidence capture: `backup-restore` | The backup page after the case that empties a site and restores it, showing the saved archive with its timestamp, size, download link and restore instructions. | Shows the saved archive an organiser can download and use to restore listings and bookings. |
| `pages/features/sms-messages.md` | Diagram: `sms-gateway-flow` | Oakfield sends Amira the Summer Disco door time. Show the message moving through Oakfield's Android gateway phone, delivery status and Amira's reply returning to attendee history. | Explains the organiser's phone, SIM and reply path without protocol jargon. |
| `pages/features/rss-and-calendar-feeds.md` | Diagram: `event-feed-syndication` | Oakfield publishes three events. One feed branches into Apple Calendar, Google Calendar, Outlook, an RSS reader and a community website; changing one event updates subscribed views. | Demonstrates automatic republication rather than unexplained feed formats. |
| `pages/features/email-providers.md` | Admin screenshot: `mailgun-eu-settings` | Oakfield selects Mailgun EU, sends from `tickets@oakfieldevents.org` and receives a successful test result. Show provider, domain, masked key, region and the received email header. | Shows that the organiser chooses the delivery provider and sender identity. |
| `pages/features/apple-wallet.md` | Attendee composite: `wallet-ticket` | Alex's Riverside Summer Concert confirmation shows Add to Apple Wallet and Add to Google Wallet beside the resulting pass with event, date, venue and QR code. | Shows how attendees retrieve tickets at the gate. |
| `pages/features/european.md` | Diagram: `service-data-locations` | Oakfield uses managed hosting, Bunny Database, Mailgun EU and Stripe, with SMS and webhooks disabled. Separate company headquarters from processing and replica regions, including the documented non-EU database replicas. | Prevents organisers confusing provider headquarters with data location. |
| `pages/features/encrypted.md` | [x] Cucumber evidence capture: `record-repaired` | A record whose encrypted note could not be read, still open and still showing its counts, with a note saved back over it. Taken from the case that repairs one. | Shows which fields are protected and which stay readable, from the one moment the difference is visible. |
| `pages/features/who-can-see-your-data.md` | Diagram: `configured-data-recipients` | Oakfield takes a paid Summer Disco booking with Stripe and Mailgun EU enabled and no webhook, SMS or postcode lookup. Branch data only to the keyed organiser and configured services; cross out disabled destinations. | Makes data access depend on actual organiser settings. |
| `pages/features/honest-advertising.md` | Comparison graphic: `how-platforms-get-recommended` | Oakfield's organiser searches for a ticketing platform and meets a bought search ad, an affiliate listicle, an incentivised review and an undisclosed forum recommendation. Beside each, show the checkable equivalent: a dated fee source, a linked pricing page and a named comparison author. | Shows which promotion an organiser can verify and which it cannot. |
| `pages/features/no-spying.md` | Comparison graphic: `attendee-relationship` | Amira books Oakfield Primary Summer Disco. Show direct booking and organiser confirmation with no provider account, related-event recommendations, advertising tracker or provider mailing list. | Shows the attendee experience behind the no-marketing policy. |
| `pages/features/deployment.md` | Diagram: `site-setup-paths` | Oakfield sets up a managed site from its emailed setup link, while a technical provider follows the five README steps for a Bunny Edge Script. Converge both on the same first request, where the database migrates itself and `/setup/` asks for an owner password. | Shows that the two routes reach the same product without a feature-unlocking stage. |
| `pages/features/coding-agents.md` | Diagram: `what-the-repository-publishes` | Show the repository contents an agent reads before changing anything: AGENTS.md, REPO_STRUCTURE.md, 39 Cucumber feature files, generated API documentation and the source itself. Beside it, show the encrypted attendee records the same agent cannot read. | Separates what publishing the source makes available from what stays under the owner's key. |
| `pages/features/open-source.md` | Diagram: `same-product-deployments` | Oakfield's same event setup appears in managed hosting, a GitHub-controlled deployment and self-hosted Docker. Label who handles updates, infrastructure and configured services. | Shows product sameness while making operational responsibility clear. |

## Feature Pages: Administration

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/features/editors.md` | [x] Cucumber evidence capture: `editor-listings-without-takings` | An editor's Pottery listing view shows its status, booked-place count and ticket count, with no income, cost or profit columns. Taken from the case where the listing has a paid booking. | Shows the money boundary in the editor's own listing view. |
| `pages/features/duplicate-events.md` | [x] Admin screenshot: `duplicate-event` | Riverside Print Studio copies Spring Printmaking Course to Autumn Printmaking Course and shifts six dates by 182 days. Show the pre-filled duplication form and its live six-row preview. | Shows what will be copied and reviewed before submission. |

## Perfect For Pages

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/perfect-for/perfect-for.md` | Diagram: `four-organiser-workflows` | Riverside sells tickets, Little Acorns runs sessions, Willow hires equipment and Meadowfield collects donations. Four workflow tiles converge on shared administration, payments and reports. | Explains the range of uses without repeating one generic checkout. |
| `pages/perfect-for/sports-clubs.md` | Admin screenshot: `sports-club-programme` | Riverside Rovers has a 2026 Home Fixtures group, £8 match tickets, £25 annual membership payment and Tuesday training with 20 places per date. | Shows tickets, one-off subscriptions and sessions coexisting without implying recurring direct debit. |
| `pages/perfect-for/classes-and-courses.md` | Attendee screenshot: `six-week-printmaking-course` | Riverside Print Studio offers six weekly dates, 12 places per session, a £30 deposit and required £18 materials kit. Show dates, experience question, materials choice and deposit total. | Distinguishes a course from a single workshop. |
| `pages/perfect-for/kids-parties.md` | Attendee composite: `oakfield-rainbow-party` | Amira books two children onto Oakfield Rainbow Party, capacity 30, with an allergy note and no attendee account. Show the short mobile form and QR confirmation. | Shows the parent journey and information available to the organiser. |
| `pages/perfect-for/political-organising.md` | Diagram: `minimal-data-public-meeting` | Northside Neighbours Assembly runs a free 80-person meeting on self-hosted infrastructure, collects names only and enables no payment, SMS, address or webhook provider. | Shows how an organiser can minimise collected data and third-party services. |
| `pages/perfect-for/marquee-hire.md` | Reuse plus inset: `logistics-deliveries.png` | Reuse the Willow Marquee Hire delivery and collection screenshot, adding a separate brief for a deposit balance and later inspection hold if a new composite is made. | The existing scene already represents the sector's main operational workflow. |
| `pages/perfect-for/attractions-and-days-out.md` | Admin screenshot: `farm-park-date-dashboard` | Meadowfield Farm Park has capacity 400 on 25 July, 276 confirmed visitors and 183 checked in by 12:15. Show remaining places, scanner status and date-filtered export. | Shows the per-date controls needed during an opening season. |
| `pages/perfect-for/fundraising.md` | Attendee screenshot: `fundraising-pay-what-you-want` | A purchase-only appeal checkout with a £5 minimum, a £25 suggestion and a supporter entering £40. Its own asset, because `summer-appeal-purchase` is now the organiser's income statement rather than a checkout. | Shows the supporter's side, which the purchasable-events evidence no longer covers. |
| `pages/perfect-for/adult-parties.md` | Attendee screenshot: `private-social-booking` | Ember Private Social is hidden and direct-link-only for 120 guests, collecting name and email with non-transferable tickets. Show no marketplace or related events. | Demonstrates discretion through the attendee journey rather than stock nightlife photography. |
| `pages/perfect-for/festivals.md` | Reuse: `required-child-listings-checkout.png` | Reuse the Willowbank Festival weekend-pass checkout with required General or Quiet Camping. | The existing screenshot already depicts the page's central festival workflow. |
| `pages/perfect-for/theatre-and-performing-arts.md` | Admin screenshot: `theatre-front-of-house` | The Old Playhouse has 180 shared general-admission places across adult, child and concession tickets, with online, manual, complimentary and checked-in totals. | Shows shared house capacity and mixed sales while making the lack of allocated seating clear. |
| `pages/perfect-for/comedy-nights.md` | [x] Attendee screenshot: `industry-comedy-club-checkout` | Friday Night Comedy at The Cellar, with a Friday picked from the calendar, two tickets chosen and a £24 running total with nothing added. | Shows the audience paying the ticket price with no added fee. |
| `pages/perfect-for/food-and-drink-festivals.md` | [x] Attendee screenshot: `industry-beer-festival-checkout` | Bridgefield Beer Festival's afternoon and evening sessions booked in one form, two tickets each, with a £36 running total. | Shows separately priced sessions sold through one combined checkout. |
| `pages/perfect-for/conventions-and-expos.md` | [x] Attendee screenshot: `industry-convention-checkout` | Northgate Comic Con's Saturday and Sunday day tickets booked in one form, with a £45 running total. | Shows day tickets from one group booked in a single payment. |
| `pages/perfect-for/guided-tours.md` | [x] Attendee screenshot: `industry-guided-tour-booking` | The Old Town Ghost Walk booked for two places on a chosen date, with a mobility question answered and a £28 total. | Shows small-group departures and pre-tour questions from the guest's side. |
| `pages/perfect-for/scare-attractions.md` | [x] Admin screenshot: `industry-scare-attraction-calendar` | Hollowtree Scare Trail's admin calendar with bookings on two nights and 25 of 40 places remaining on the selected Friday. | Shows per-night bookings and remaining capacity for a seasonal attraction. |
| `pages/perfect-for/class-reunions.md` | [x] Attendee screenshot: `industry-class-reunion-booking` | The Class of 2006 Reunion Dinner checkout with a menu choice question, a dietary requirements answer and a £38 total. | Shows the checkout collecting what the caterer needs. |
| `pages/perfect-for/fetes-and-fairs.md` | [x] Admin screenshot: `industry-village-fete-ledger` | Meadowfield Village Fete's ledger statement showing advance gate sales, gate cash recorded as manual income, a cost and the net figure. | Shows the treasurer's single set of figures across online and cash income. |
| `pages/perfect-for/pubs-and-taprooms.md` | Admin screenshot: `taproom-repeating-quiz-night` | The Bridgefield Tap's Tuesday quiz as a daily listing, with 12 free table places per date, two December dates blacked out for the closure, and one date's bookings listed beside the remaining places. | Shows a repeating night set up once, with free bookings and closed weeks, rather than a generic checkout. |
| `pages/perfect-for/music-venues.md` | Admin screenshot: `grassroots-venue-door-list` | The Lantern Rooms' Friday show at 120 places, showing advance bookings, three manually added guest-list names, cash sales recorded on the night and 94 checked in. | Shows advance sales, the guest list and the door as one record, without implying reserved seating. |
| `pages/perfect-for/performers-and-artists.md` | Attendee screenshot: `artist-own-domain-checkout` | A checkout on an artist's own domain with no Chobble branding, a £12 ticket with nothing added to the total, and a pay-what-you-want option above a £5 minimum for a work-in-progress date. | Shows the artist's own front door and the price the audience actually pays. |
| `pages/perfect-for/community-centres.md` | [x] Cucumber evidence capture: `maintenance-cost-on-a-room` | The costs recorded against a service hold, taken from the case that records £90 for a boiler part against Room A. The hold's own dates are left out of the picture: the case puts them far in the future so no passing date can collide with them. | Shows that a room can be taken out of use for maintenance and what the work cost recorded against it, without a customer booking standing in for either. |
| `pages/perfect-for/free-events.md` | Attendee screenshot: `library-story-time-signup` | Northgate Library's Tuesday story time with 20 places on the chosen date, name and email only, an access needs question, and a confirmation with a QR code and no payment step. | Shows registration with no payment provider and no more data collected than the session needs. |

## Guide Pages

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/guide.md` | Diagram: `ticketing-guide-route-map` | Oakfield is choosing a platform for 500 annual £15 sales. Four routes begin with fees, attendee data, domain control and ability to move hosts. | Explains what the guide collection helps an organiser decide. |
| `guide-categories/choosing-a-ticket-platform.md` | Comparison graphic: `platform-requirements-checklist` | Oakfield's requirements are no per-sale fee, its own domain, downloadable data and no provider marketing. Arrange the four guides around those separate questions. | Prevents one positive provider attribute being treated as proof of every other attribute. |
| `guide-pages/ethical-ticket-sales-options.md` | Comparison graphic: `provider-structure-matrix` | Compare documented structure, income model, attendee marketing, source availability and hosting model for the providers on the page. Do not add a score or winner. | Shows that charitable, co-operative, certified and open-source claims answer different questions. |
| `guide-pages/no-per-attendee-ticket-sales.md` | Comparison graphic: `platform-fee-types` | Meadowfield sells 500 tickets in 250 two-ticket payments. Use lanes for qualifying hosted services, self-installed software and volume-conditioned products, with a transaction-processing inset. | Explains why no commission does not necessarily mean volume-independent cost. |
| `guide-pages/host-your-own-ticket-site.md` | Diagram: `domain-site-hosting-models` | Oakfield wants `tickets.oakfieldevents.org`. Show provider-hosted custom domain, complete managed public site and self-hosted software, with responsibility for updates and backups labelled. | Separates owning a web address from operating the server. |
| `guide-pages/how-ticketing-platforms-disguise-fees.md` | Comparison graphic: `fee-disguise-patterns` | Place the reviewed providers' headline rates beside the total charge an organiser or attendee pays. Show free-events floors, split fees at the same rate, buyer-paid fees, flat fees as a percentage of cheap tickets, bundled processing, pledge-funded charges and the subscription a headline omits. | Shows why a headline rate that reads lower does not change what the ticket carries. |
| `guide-pages/remove-ticket-platform-branding.md` | Comparison graphic: `branding-removal-cost` | Place the reviewed providers on one axis of what branding removal costs: included in the base price, a paid add-on or higher tier with its published amount, and organiser branding without documented full removal. Label each with the qualification recorded on its comparison page. | Separates providers that allow organiser-only branding from those that charge for it or limit it. |
| `guide-pages/uk-made-ticket-platforms.md` | Diagram: `uk-registration-and-data-location` | Group the reviewed providers by documented country of company registration only. Beside that grouping, show Chobble's own stack as a separate strip: UK company, Bunny hosting headquartered in Slovenia, database primary and replica regions that may sit outside the UK and EU with storage region `eu-west-1`, and a self-hosted option. Do not assign a data-processing country to any other provider. | Separates where a company is registered from where attendee records are stored, without guessing storage locations. |
| `guide-pages/flat-rate-ticketing.md` | Comparison graphic: `flat-rate-pricing-curves` | Riverside sells 50, 500 and 5,000 tickets. Compare volume-independent hosting, per-sale fees, ticket-volume subscriptions, booking allowances and feature tiers, with processing separate. | Shows how apparently fixed subscriptions can still change with volume or requirements. |
| `guide-pages/where-ticketing-money-goes.md` | Comparison graphic: `donation-pledge-breakdown` | Break a £15 ticket into face value, booking fee, service fee, payment processing and the donated share for a pledge-funded plan, beside a flat hosting fee with the ticket charge left whole. | Shows which part of an organiser's cost a donation pledge is taken from. |
| `guide-pages/event-ticketing-systems-a-coding-agent-can-deploy.md` | Comparison graphic: `published-versus-deployed-source` | Place the reviewed providers on two axes: whether the source is published, and whether the published source is what the hosted service runs. Mark the branding and paid-plugin qualifications recorded on each comparison page, and show what remains to be maintained under each deployment shape. | Separates readable code from deployable code, which is the distinction that decides what an agent can verify. |

## Comparison Hubs

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/compared-to/compared-to.md` | Diagram: `comparison-needs-chooser` | Oakfield chooses among marketplace discovery, reserved seating, volunteer coordination, activity scheduling, WordPress integration and straightforward ticketing. Route each need to a comparison cluster. | Lets organisers start from their job rather than an undifferentiated provider list. |
| `pages/compared-to/compare-all.md` | Comparison graphic: `fee-calculator-example` | Use 500 £15 tickets and one ticket per payment. Show a polished static calculator state with controls, total sales and sorted provider-cost cards. | Explains the calculator inputs and its one-ticket-per-payment assumption. |

## Comparisons: Marketplaces And Discovery

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/compared-to/eventbrite.md` | Comparison graphic: `eventbrite-fees-and-discovery` | Riverside sells 500 £15 tickets. Show the documented Eventbrite cost beside Chobble hosting and processing, with Eventbrite discovery represented separately as a benefit. | Keeps marketplace reach visible while explaining fees and attendee marketing. |
| `pages/compared-to/event-schedule.md` | Comparison graphic: `event-schedule-tiers-versus-one-plan` | Both platforms take no per-ticket fee, so show what each flat price includes instead: place Event Schedule's free, Pro and Enterprise tiers in a column with a custom domain and white labelling marked as paid upgrades, beside Chobble's single plan with the same features included, and add a small lock icon on Chobble to mark attendee data encrypted at rest. | Shows the choice is about how features and data protection are packaged, not about a cut of each sale. |
| `pages/compared-to/resident-advisor.md` | Comparison graphic: `resident-advisor-payout-and-reach` | North Wharf Electronic Night sells 300 £18 tickets. Contrast RA's post-event payout and discovery reach with direct organiser payment and a private organiser site. Do not invent an RA fee rate. | Centres cash timing and audience relationship where pricing is unpublished. |
| `pages/compared-to/dice.md` | Attendee comparison: `dice-app-versus-browser` | Alex buys a Moonlight Cinema ticket. Compare DICE's app-centred ticket and transfer journey with browser checkout, email QR ticket and optional wallet pass. | Helps organisers assess app controls against app-free attendance. |
| `pages/compared-to/fatsoma.md` | Comparison graphic: `fatsoma-volume-and-followers` | Riverside Student Arts Night sells 500 £15 tickets. Show the documented percentage fee rising with volume beside the marketplace follower and promotion relationship. | Combines cost growth with ownership of the attendee relationship. |
| `pages/compared-to/fixr.md` | Comparison graphic: `fixr-buyer-fee` | Northside Student Union sells 300 £10 tickets on the Student and Charity tier. Separate face value, buyer fee, VAT and organiser proceeds, with a marketplace shelf beside it. | Shows that low organiser cost can mean a visible buyer charge. |
| `pages/compared-to/eventim-light.md` | Comparison graphic: `eventim-fee-and-network` | The Old Playhouse sells 500 £15 tickets. Show the documented 8% fee reaching £600 and EVENTIM network distribution as a separate optional benefit. | Makes the volume effect clear without ignoring network reach. |
| `pages/compared-to/weezevent.md` | Comparison graphic: `weezevent-fixed-fee-share` | Northside Community Cinema sells 400 tickets at £5, £15 and £30. Show the documented 2.5% + £0.99 charge as a share of each price beside Chobble's annual fee, with cashless bars, access hardware and crew management as a separate Weezevent advantage panel. | Shows that a fixed per-ticket charge weighs most on cheap tickets, without ignoring festival operations. |
| `pages/compared-to/ticket-tailor.md` | Comparison graphic: `ticket-tailor-break-even` | The Tempest sells 84, 230 and 500 tickets. Compare pay-as-you-go and low prepaid-credit rates with Chobble's annual fee; show custom domain and reserved seating separately. | Visualises both break-even points and reasons an organiser may still choose Ticket Tailor. |
| `pages/compared-to/ticket-generator.md` | Comparison graphic: `ticket-generator-credits-and-free-events` | Oakfield College registers 300 guests for a free careers day and a 200-place paid gala. Show Ticket Generator's credit packs applying to both free and paid tickets beside Chobble's no-charge free events and flat paid-event fee, with reserved seating, box office and custom ticket design as a separate Ticket Generator advantage. | Shows that a per-ticket generation charge weighs on free events, where Chobble Tickets charges nothing. |
| `pages/compared-to/tixfox.md` | Comparison graphic: `tixfox-fee-crossover` | Riverside Makers Market sells 80, 130 and 500 £10 tickets. Show TixFox's £0.38 per-ticket fee crossing Chobble's flat annual fee at about 130 tickets, with native check-in apps and Tap to Pay as a separate TixFox advantage panel. | Shows the break-even point without hiding TixFox's on-site tools. |
| `pages/compared-to/smartgig.md` | Comparison graphic: `smartgig-module-pricing` | Harbourside Folk Festival wants ticketing on its own domain. Stack SmartGig's £800/year Ticketing module and £500/year White Label against Chobble's £50/year managed hosting, which covers hosting, updates, backup tools and support with no separate charge for a custom domain. Keep payment processing outside both totals, and note that self-hosting Chobble Tickets carries no software fee but leaves infrastructure separate. Show allocated seating, trader applications and site plans as a separate SmartGig advantage panel. | Shows what a module-built price adds up to without hiding the operations tools it buys. |
| `pages/compared-to/humanitix.md` | Comparison graphic: `humanitix-purpose-and-fees` | Meadowfield Education Fund sells 500 £15 tickets. Compare per-ticket cost with Chobble's community rate, then separately compare charity and CIC structures. | Keeps organisational purpose separate from fee model. |
| `pages/compared-to/dandelion.md` | Comparison graphic: `dandelion-contribution-model` | Northside Neighbours lists a £12 community supper. Show organiser contribution, buyer donation, listing boost and marketplace as separate optional or conditional pieces beside Chobble's fixed community hosting. | Contrasts two unusual models without treating voluntary payments as mandatory. |

## Comparisons: Tiered And Hosted Products

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/compared-to/wix-events.md` | Comparison graphic: `wix-events-cost-stack` | Oakfield already has a Wix site and sells 500 £15 tickets. Stack website plan, ticket service fee and payment processing beside Chobble hosting and processing; retain Wix's broader site-builder advantage. | Shows whether integrated site design is worth ticketing cost and dependency. |
| `pages/compared-to/cheddar-up.md` | Comparison graphic: `cheddar-up-ticketing-cost` | Maple Grove PTA sells 300 $15 family-fair tickets and needs QR check-in. Show the Team plan and convenience fee as separate requirements, with Chobble in a clearly currency-labelled column. | Shows why a general collection tool's free tier may not cover ticketing. |
| `pages/compared-to/bookitbee.md` | Comparison graphic: `bookitbee-fee-stack` | Riverside sells 250 £18 tickets. Show BookitBee's percentage tier and minimum fee beside Chobble's fixed price, with reserved seating and group deals as separate advantage cards. | Balances richer selling features against predictable platform cost. |
| `pages/compared-to/tito.md` | Comparison graphic: `tito-conference-workflow` | Northstar Dev Day sells 400 €120 tickets. Compare shared API tools, Tito's conference and badge workflow and Chobble's flat price and self-hosting. | Puts conference operations beside cost rather than reducing the choice to fees. |
| `pages/compared-to/tickts.md` | Comparison graphic: `tickts-plan-staircase` | Oakfield needs a custom domain, full API and white-label presentation. Show Starter, Growth and Pro steps with their features beside one Chobble level containing all current Chobble features. | Explains feature tiers without suggesting tickts charges commission. |
| `pages/compared-to/ticketebo.md` | Comparison graphic: `ticketebo-fee-and-payout` | Riverside Folk Festival sells 400 £15 tickets. Show Ticketebo's 4.95% per-transaction fee, with its 75p minimum, beside Chobble's flat £50/year plus own-provider processing, with a timeline strip marking when each settles: Ticketebo pays the Monday after the event then the next business day, while the Stripe route and Chobble settle into the organiser's own payment account as each booking is made. Keep settlement and bank payout as separate marks. Show Ticketebo's free managed page design as a separate advantage panel. | Shows that a per-transaction fee with a post-event payout crosses the flat price near £2,300 of sales, and that managed setup trades control for convenience. |
| `pages/compared-to/ticketsource.md` | Comparison graphic: `ticketsource-fee-and-payout` | Penfold Players sells 400 £12 tickets across a four-night run. Show the booking fee on both TicketSource routes beside Chobble's flat price, with a timeline strip marking when each route settles: TicketSource holds the money until after the run, while the Stripe route and Chobble both settle into the organiser's own payment account as each booking is made, then pay out to the bank on that provider's schedule. Keep settlement and bank payout as separate marks so the graphic does not imply the money lands in the bank instantly. | Shows that payout timing matters as much as the fee rate for a group with cash-flow limits. |
| `pages/compared-to/ticketpass.md` | Comparison graphic: `ticketpass-fee-and-donation` | Meadowfield Fundraisers sells 500 £15 tickets. Split the Essentials charge into booking fee, service fee and the donated share, beside Chobble's community hosting fee with a direct donation shown separately. | Separates the size of the ticket charge from the share of it that is donated. |
| `pages/compared-to/eventprime.md` | Comparison graphic: `eventprime-plan-tiers` | Oakfield Arts sells 300 £12 tickets and needs ticket generation, card payments and door check-in. Show which EventPrime plan each requirement lands in, with the WordPress site and gateway as separate costs, beside one Chobble level containing all current Chobble features. | Shows that the plugin price depends on which features an organiser needs. |
| `pages/compared-to/pta-events.md` | Comparison graphic: `pta-events-school-year` | Oakfield Primary runs a disco, raffle, auction, volunteer rota and news page. Mark which jobs each product handles, then show transaction costs versus Chobble's community rate. | Shows when the wider fundraising suite may justify its cost. |
| `pages/compared-to/tessera-tickets.md` | Comparison graphic: `tessera-venue-cost-stack` | The Old Playhouse sells 8,000 tickets and needs assigned seating and box-office hardware. Stack Tessera subscription, WordPress site, seating setup and scanners beside Chobble's general-admission model. | Makes the products' different venue scope visible. |
| `pages/compared-to/resova.md` | Comparison graphic: `resova-resource-scheduling` | Riverside Escape Rooms has three rooms, six hourly slots and 420 monthly bookings. Show Resova assigning rooms and staff with allowance overage beside Chobble's recurring event capacity. | Helps operators decide whether specialist resource scheduling matters more than flat ticketing cost. |
| `pages/compared-to/revel.md` | Comparison graphic: `revel-private-community-vetting` | Moonlight Collective runs a members-only kink night. Show Revel's questionnaire vetting and private guest list, its 3% + €0.50 hosted commission and MIT-licensed self-hosting beside Chobble's encryption at rest, flat annual fee and AGPL self-hosting. Keep both as privacy-first options rather than picking a winner. | Shows two ways to keep a community's attendee list private, and how price and licence differ. |
| `pages/compared-to/digitickets.md` | Comparison graphic: `digitickets-attraction-bundle` | Riverside Wildlife Park sells day admission and wants tills, kiosks and marketplace distribution beside online sales. Show DigiTickets' per-transaction, per-ticket or percentage charge as a quote card with no published rates, beside Chobble's £50/year managed hosting, with ProPoint tills, self-service kiosks, staff scheduling and travel-marketplace distribution as a separate DigiTickets advantage panel. | Shows the venue-operations bundle a quoted DigiTickets contract can buy, without inventing rates. |
| `pages/compared-to/qrticket.md` | Comparison graphic: `qrticket-fee-and-who-pays` | Oakfield sells 200 £15 tickets through QRTicket. Show the €0.90 per-ticket fee and PayPal processing beside Chobble's flat annual fee, and mark who pays under QRTicket's default buyer-paid setting and its absorbed setting. Show seat plans, sales outlets, paper tickets and season passes as a separate QRTicket advantage panel. | Shows that QRTicket's free-to-organiser headline rests on a buyer charge, and the volume point where absorbing it crosses Chobble's flat price. |

## Comparisons: Large Venues

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/compared-to/ticketmaster.md` | Comparison graphic: `ticketmaster-scale` | Contrast a 50,000-seat stadium tour with Riverside's 200-capacity independent gig. Pair Ticketmaster's seating, queues, resale and distribution with the stadium and Chobble's general admission and direct payments with the small venue. | Avoids a misleading feature checklist between products for different scales. |
| `pages/compared-to/ticketek.md` | Comparison graphic: `ticketek-venue-contract` | Contrast an Australian arena event with a fictional 200-capacity Brisbane community concert. Show Ticketek venue contracts and retail distribution beside organiser-controlled general admission. | Frames the choice around venue obligations without inventing negotiated fees. |

## Comparisons: Open Source And Self-Hosted

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/compared-to/pretix.md` | Comparison graphic: `pretix-deployment-stack` | Northstar Conference needs badge printing and enterprise plugins; Riverside Arts runs smaller events. Show Pretix Community, optional proprietary plugins and hosted per-sale pricing beside Chobble managed and self-hosted. | Explains audience, complexity and product-tier differences. |
| `pages/compared-to/hi-events.md` | Comparison graphic: `hi-events-hosting-options` | Meadowfield sells 500 £15 tickets. Compare Hi.Events Cloud, branded free self-hosting, commercial white-label self-hosting and Chobble managed hosting, with processing separate. | Shows that source availability does not make hosted price, branding or maintenance identical. |
| `pages/compared-to/libreevent.md` | Comparison graphic: `libreevent-upkeep-and-seating` | Riverside Playhouse needs numbered seats and someone to keep the software updated. Show libreevent's seat plan editor and entry apps in one column and its archived, self-maintained code and own server in another, beside Chobble managed hosting with capacity-based tickets. | Separates the features an archived project still offers from the upkeep it hands to the organiser. |
| `pages/compared-to/swicket.md` | Comparison graphic: `swicket-alfio-chobble` | A 10,000-person medical congress needs abstracts, CRM, badges and an SLA; Oakfield runs local events. Use three columns for alf.io, Swicket and Chobble. | Clarifies the relationship between the managed service and open-source engine. |
| `pages/compared-to/fooevents.md` | Diagram: `fooevents-wordpress-stack` | Fernbank already sells mugs in WooCommerce and wants workshop tickets; Riverside wants a standalone ticket site. Show WordPress, WooCommerce, plugins, hosting and gateway beside Chobble's standalone site. | Explains operational dependencies that matter more than a raw feature count. |
| `pages/compared-to/cal-com.md` | Comparison graphic: `calcom-scheduling-versus-ticketing` | Priya offers 30-minute styling consultations while Fernbank runs one 40-place workshop. Compare personal-calendar availability with fixed event capacity and QR entry; distinguish Cal.com production, Cal.diy and Chobble. | Establishes the scheduling-versus-ticketing boundary before source-code differences. |

## Comparisons: Adjacent Tools

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/compared-to/signupgenius.md` | Comparison graphic: `signupgenius-volunteers-and-tickets` | Oakfield needs 24 volunteer shifts plus a paid Summer Disco. Show SignUpGenius's rota, Chobble's paid checkout and a simpler free Chobble volunteer form. | Shows overlap while recognising the specialist coordination tool. |
| `pages/compared-to/google-forms.md` | Diagram: `google-forms-ticket-workflow` | Community Supper has 80 places, a £10 price, dietary questions and door entry. Compare Form, Sheet, payment link, manual capacity, email merge and printed list with Chobble's connected flow. | Makes the extra coordination visible. |
| `pages/compared-to/pen-and-paper.md` | Diagram: `paper-versus-online-scale` | Compare a 20-person neighbourhood dinner using a clipboard and cash tin with Oakfield Summer Disco using payment, capacity, confirmation and QR scanning. | Fairly shows the point where software starts solving more than it adds. |
| `pages/compared-to/yo-rent.md` | Comparison graphic: `single-operator-versus-marketplace` | Willow owns eight marquees and two vans; Northern Gear Exchange lets 60 owners list 2,000 items. Compare one operator's booking and run sheet with vendors, commissions, deposits, contracts and ratings. | Explains the business-model difference before software price. |
| `pages/compared-to/sumup-store.md` | Comparison graphic: `sumup-store-ticket-item` | Oakfield sells 200 £15 workshop tickets through a SumUp store item with a stock figure, beside Chobble's event with capacity, QR check-in, refunds and attendee emails. Show the 2.5% online payment fee on both sides, since Chobble can use SumUp for processing. | Shows that a shop's item workflow does not cover the jobs an event creates. |

## Utility Pages

These pages are rendered but excluded from the sitemap and main editorial total.

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/thank-you.md` | Diagram: `support-message-sent` | Oakfield has sent a question about importing `summer-sessions.json`. Show Question sent, Chobble review and the existing fallback contact route. | Confirms the action and next step without generic celebratory art. |
| `pages/not-found.md` | Illustration: `useful-404-routes` | An obsolete reporting link reconnects to Home, Features and Guides. Use a broken route marker rather than a decorative error mascot. | Turns the error into a useful recovery path. |

## Reuse And Production Order

### Existing assets to reuse first

1. Add `required-child-listings-checkout.png` to the Festivals page.
2. Add `logistics-deliveries.png` to the Marquee Hire page.
3. Consider `group-bulk-actions.png` for Duplicate Events if a dedicated
   single-listing duplication screenshot is not yet available.
4. Use the existing Riverside team screenshot as the base for an Editors
   permissions composite.

### Highest-value new product screenshots

1. [x] Oakfield public website
2. [x] Payment-provider settings
3. Refund statuses
4. [x] Summer Appeal purchase-only checkout
5. [x] Volunteer sign-up form
6. Attendee CSV export
7. Backup manifest and update check
8. Wallet ticket
9. Editor permissions
10. Theatre front-of-house dashboard

### Completed scenario files

- [x] `scripts/screenshots/oakfield-public-website.js`
- [x] `scripts/screenshots/duplicate-event.js`

### Completed Cucumber evidence captures

- [x] `record-put-right`
- [x] `record-repaired`
- [x] `add-on-in-the-list`
- [x] `checked-in-on-the-day`
- [x] `paid-more-than-asked`
- [x] `site-pages-in-order`
- [x] `stay-length-on-the-page`
- [x] `balance-payment-link`
- [x] `bundle-booking-page`
- [x] `api-keys-list`
- [x] `contact-record`
- [x] `listing-ledger`
- [x] `group-booking-arrives`
- [x] `page-anybody-can-read`
- [x] `place-lost-while-paying`
- [x] `payment-provider-choice`
- [x] `qr-code-check-in`
- [x] `refunded-booking`
- [x] `servicing-studio-floor-hold`
- [x] `maintenance-cost-on-a-room`
- [x] `team-and-roles`
- [x] `volunteer-shift-form`

### Highest-value diagrams and comparison templates

1. Payment and capacity race
2. Flat-fee worked examples
3. Same-product deployment routes
4. Configured data recipients
5. Custom domain versus managed site versus self-hosting
6. Reusable provider fee receipt
7. Reusable subscription and feature-tier staircase
8. Reusable marketplace and attendee-relationship panel

Comparison pages should share this visual system while retaining provider-
specific facts, scales and qualifications. They should not all reuse one
generic Chobble screenshot.
