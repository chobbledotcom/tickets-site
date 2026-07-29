---
permalink: false
layout: null
---

# Page Image Scenario Backlog

## Scope

This audit covers all 137 rendered client pages. A page counts as illustrated
when an image is visible in its content. Product screenshots, figures,
galleries and visible image backgrounds count. Icons, logos, social metadata
and loading placeholders do not.

| Page group | Total | With images | Without images |
|---|---:|---:|---:|
| Editorial pages in the sitemap | 135 | 47 | 88 |
| Non-indexed utility pages | 2 | 0 | 2 |
| **All rendered pages** | **137** | **47** | **90** |

The 88 editorial pages are the main illustration backlog. The two utility
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
| `pages/features/overbooking-prevention.md` | Diagram: `payment-capacity-race` | Riverside has 249 of 250 places confirmed. Alex and Maya both start checkout for the final place. Both lanes say "No place reserved"; Alex's confirmation arrives first and Maya's later payment is refunded. | Explains the real race condition without inventing a checkout hold. |
| `pages/features/stripe-and-square.md` | [x] Admin screenshot: `payment-provider-choice` | Show Stripe, Square and SumUp as alternative providers, Stripe selected, and the configured Stripe test-key state. | Shows provider choice, saved credentials and the difference between test and live keys. |
| `pages/features/refunds.md` | Admin screenshot: `refund-statuses` | Riverside Summer Concert has four fictional paid bookings after cancellation. Show Refunded, Processing and Action required states after a bulk action, with the corresponding ledger total. | Shows that refunds are initiated, processed and tracked per booking. |
| `pages/features/no-per-ticket-fees.md` | Comparison graphic: `flat-fee-worked-examples` | Use the existing examples of 50 tickets at £10, 500 at £15 and 5,000 at £20. Separate Chobble hosting, payment processing and platform commission from the percentage-plus-fixed alternative. Include the low-volume example where the alternative is slightly cheaper. | Makes the break-even point and volume effect understandable without hiding processing costs. |
| `pages/features/purchasable-events.md` | [x] Attendee screenshot: `summer-appeal-purchase` | Meadowfield Summer Appeal 2026 has No Check-In enabled, a £5 minimum and an organiser-written suggested contribution of £25. Show £25 entered, a required email-consent answer, a £25 total and Continue. | Demonstrates collecting money without creating an attendance or check-in workflow. |
| `pages/features/sign-up-forms.md` | [x] Attendee screenshot: `summer-fair-volunteer-form` | Oakfield Primary Summer Fair has separate setup, gate and clear-up listings with eight places each. Show one selected shift, an access-needs answer, a £0 total and Continue. | Shows a useful free form with real capacity for each shift. |
| `pages/features/registration-deadlines.md` | Admin and public composite: `registration-deadline` | Fernbank Pottery's workshop starts at 10:00 on 16 August, closes at 18:00 the previous day and allows two places per buyer. Show the setting beside the public Booking has closed state. | Connects the organiser setting to the attendee result. |
| `pages/features/postcode-lookup.md` | Attendee screenshot: `delivery-postcode-lookup` | Maya Patel books Willow Marquee Hire to `M25 1FL`. Show postcode search results, the selected editable address and a small run-sheet preview. | Connects faster address entry to accurate delivery operations. |
| `pages/features/multi-day-hire.md` | Attendee screenshot: `multi-day-pa-hire` | Soundbox Equipment Hire offers a Portable PA System for one day at £45 or three days at £120. Alex selects 14 to 16 August; highlight all occupied dates and the selected total. | Shows duration pricing and range-wide capacity in one view. |

## Feature Pages: Public Site

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/features/your-public-website.md` | [x] Public-site screenshot: `oakfield-public-website` | The real Oakfield Community Events Listings page shows Home, Listings, About, News and Contact navigation, plus booking cards for Summer Sessions and Oakfield Primary Disco. | Proves that the product can supply organiser pages and a public event catalogue, not only isolated checkout links. |
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
| `pages/features/privacy-controls.md` | Admin screenshot: `privacy-controls` | Oakfield has 18 orphaned records, a six-month retention period and a contact-erasure request for `maya.patel@example.test`. Show retention, Delete now, contact erasure and attendee export as separate actions. | Distinguishes contact-history deletion from operational records and exports. |
| `pages/features/webhooks.md` | Diagram: `booking-webhook-flow` | Alex books two £18 Riverside Summer Concert tickets. One consolidated booking notification flows to Riverside's Slack channel, CRM and spreadsheet with event, quantity and total labelled. | Explains the organiser outcome without making raw JSON the main image. |
| `pages/features/admin-api.md` | Admin screenshot: `named-admin-api-key` | Riverside Print Studio uses an API key called Autumn programme to create 12 course dates. Show the named key, a successful created listing response and matching activity entry. | Shows that automation uses identifiable credentials and remains auditable. |
| `pages/features/public-api.md` | Diagram: `public-and-admin-api` | Oakfield's website reads public Summer Sessions cards without a key, while an internal planning tool uses a separate authenticated route to update listings. | Separates public display data from private administration access. |
| `pages/features/csv-export.md` | Product composite: `attendee-csv-export` | Summer Arts Fair exports confirmed attendees for 25 July. Show filters beside a spreadsheet preview containing fictional names, quantity, amount, answers, check-in state and payment reference. | Shows what an organiser can take into a spreadsheet or door list. |
| `pages/features/backups.md` | Admin composite: `backup-manifest-and-update` | Oakfield's `oakfield-2026-07-25.zip` contains 43 listings and 1,284 attendees and was made 18 minutes ago. Show its manifest and an enabled update action, plus an inset where an old backup blocks updating. | Makes completeness, version matching and pre-update protection concrete. |
| `pages/features/sms-messages.md` | Diagram: `sms-gateway-flow` | Oakfield sends Amira the Summer Disco door time. Show the message moving through Oakfield's Android gateway phone, delivery status and Amira's reply returning to attendee history. | Explains the organiser's phone, SIM and reply path without protocol jargon. |
| `pages/features/rss-and-calendar-feeds.md` | Diagram: `event-feed-syndication` | Oakfield publishes three events. One feed branches into Apple Calendar, Google Calendar, Outlook, an RSS reader and a community website; changing one event updates subscribed views. | Demonstrates automatic republication rather than unexplained feed formats. |
| `pages/features/email-providers.md` | Admin screenshot: `mailgun-eu-settings` | Oakfield selects Mailgun EU, sends from `tickets@oakfieldevents.org` and receives a successful test result. Show provider, domain, masked key, region and the received email header. | Shows that the organiser chooses the delivery provider and sender identity. |
| `pages/features/apple-wallet.md` | Attendee composite: `wallet-ticket` | Alex's Riverside Summer Concert confirmation shows Add to Apple Wallet and Add to Google Wallet beside the resulting pass with event, date, venue and QR code. | Shows how attendees retrieve tickets at the gate. |
| `pages/features/european.md` | Diagram: `service-data-locations` | Oakfield uses managed hosting, Bunny Database, Mailgun EU and Stripe, with SMS and webhooks disabled. Separate company headquarters from processing and replica regions, including the documented non-EU database replicas. | Prevents organisers confusing provider headquarters with data location. |
| `pages/features/encrypted.md` | Diagram: `attendee-field-encryption` | Alex's Riverside booking contains name, email, £36 reference, two tickets and a dietary note. Separate protected personal fields, site fields and readable operational values such as quantity. | Explains what an authorised organiser can unlock and what the application must still count. |
| `pages/features/who-can-see-your-data.md` | Diagram: `configured-data-recipients` | Oakfield takes a paid Summer Disco booking with Stripe and Mailgun EU enabled and no webhook, SMS or postcode lookup. Branch data only to the keyed organiser and configured services; cross out disabled destinations. | Makes data access depend on actual organiser settings. |
| `pages/features/honest-advertising.md` | Comparison graphic: `how-platforms-get-recommended` | Oakfield's organiser searches for a ticketing platform and meets a bought search ad, an affiliate listicle, an incentivised review and an undisclosed forum recommendation. Beside each, show the checkable equivalent: a dated fee source, a linked pricing page and a named comparison author. | Shows which promotion an organiser can verify and which it cannot. |
| `pages/features/no-spying.md` | Comparison graphic: `attendee-relationship` | Amira books Oakfield Primary Summer Disco. Show direct booking and organiser confirmation with no provider account, related-event recommendations, advertising tracker or provider mailing list. | Shows the attendee experience behind the no-marketing policy. |
| `pages/features/open-source.md` | Diagram: `same-product-deployments` | Oakfield's same event setup appears in managed hosting, a GitHub-controlled deployment and self-hosted Docker. Label who handles updates, infrastructure and configured services. | Shows product sameness while making operational responsibility clear. |

## Feature Pages: Administration

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/features/editors.md` | Admin composite: `editor-permissions` | Priya edits Summer Arts Fair descriptions and images as an editor. A second panel shows the attendee area unavailable to her, beside the existing Riverside team roles. | Demonstrates the permission boundary rather than relying on a role label. |
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
| `pages/perfect-for/fundraising.md` | Reuse: `summer-appeal-purchase` | Use the proposed purchase-only Summer Appeal checkout with a £5 minimum, £25 suggestion and a supporter entering £40. | The same attendee state is central to both fundraising and purchasable events. |
| `pages/perfect-for/adult-parties.md` | Attendee screenshot: `private-social-booking` | Ember Private Social is hidden and direct-link-only for 120 guests, collecting name and email with non-transferable tickets. Show no marketplace or related events. | Demonstrates discretion through the attendee journey rather than stock nightlife photography. |
| `pages/perfect-for/festivals.md` | Reuse: `required-child-listings-checkout.png` | Reuse the Willowbank Festival weekend-pass checkout with required General or Quiet Camping. | The existing screenshot already depicts the page's central festival workflow. |
| `pages/perfect-for/theatre-and-performing-arts.md` | Admin screenshot: `theatre-front-of-house` | The Old Playhouse has 180 shared general-admission places across adult, child and concession tickets, with online, manual, complimentary and checked-in totals. | Shows shared house capacity and mixed sales while making the lack of allocated seating clear. |

## Guide Pages

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/guide.md` | Diagram: `ticketing-guide-route-map` | Oakfield is choosing a platform for 500 annual £15 sales. Four routes begin with fees, attendee data, domain control and ability to move hosts. | Explains what the guide collection helps an organiser decide. |
| `guide-categories/choosing-a-ticket-platform.md` | Comparison graphic: `platform-requirements-checklist` | Oakfield's requirements are no per-sale fee, its own domain, downloadable data and no provider marketing. Arrange the four guides around those separate questions. | Prevents one positive provider attribute being treated as proof of every other attribute. |
| `guide-pages/ethical-ticket-sales-options.md` | Comparison graphic: `provider-structure-matrix` | Compare documented structure, income model, attendee marketing, source availability and hosting model for the providers on the page. Do not add a score or winner. | Shows that charitable, co-operative, certified and open-source claims answer different questions. |
| `guide-pages/no-per-attendee-ticket-sales.md` | Comparison graphic: `platform-fee-types` | Meadowfield sells 500 tickets in 250 two-ticket payments. Use lanes for qualifying hosted services, self-installed software and volume-conditioned products, with a transaction-processing inset. | Explains why no commission does not necessarily mean volume-independent cost. |
| `guide-pages/host-your-own-ticket-site.md` | Diagram: `domain-site-hosting-models` | Oakfield wants `tickets.oakfieldevents.org`. Show provider-hosted custom domain, complete managed public site and self-hosted software, with responsibility for updates and backups labelled. | Separates owning a web address from operating the server. |
| `guide-pages/remove-ticket-platform-branding.md` | Comparison graphic: `branding-removal-cost` | Place the reviewed providers on one axis of what branding removal costs: included in the base price, a paid add-on or higher tier with its published amount, and organiser branding without documented full removal. Label each with the qualification recorded on its comparison page. | Separates providers that allow organiser-only branding from those that charge for it or limit it. |
| `guide-pages/uk-made-ticket-platforms.md` | Diagram: `uk-registration-and-data-location` | Group the reviewed providers by documented country of company registration only. Beside that grouping, show Chobble's own stack as a separate strip: UK company, Bunny hosting headquartered in Slovenia, database primary and replica regions that may sit outside the UK and EU with storage region `eu-west-1`, and a self-hosted option. Do not assign a data-processing country to any other provider. | Separates where a company is registered from where attendee records are stored, without guessing storage locations. |
| `guide-pages/flat-rate-ticketing.md` | Comparison graphic: `flat-rate-pricing-curves` | Riverside sells 50, 500 and 5,000 tickets. Compare volume-independent hosting, per-sale fees, ticket-volume subscriptions, booking allowances and feature tiers, with processing separate. | Shows how apparently fixed subscriptions can still change with volume or requirements. |
| `guide-pages/where-ticketing-money-goes.md` | Comparison graphic: `donation-pledge-breakdown` | Break a £15 ticket into face value, booking fee, service fee, payment processing and the donated share for a pledge-funded plan, beside a flat hosting fee with the ticket charge left whole. | Shows which part of an organiser's cost a donation pledge is taken from. |

## Comparison Hubs

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/compared-to/compared-to.md` | Diagram: `comparison-needs-chooser` | Oakfield chooses among marketplace discovery, reserved seating, volunteer coordination, activity scheduling, WordPress integration and straightforward ticketing. Route each need to a comparison cluster. | Lets organisers start from their job rather than an undifferentiated provider list. |
| `pages/compared-to/compare-all.md` | Comparison graphic: `fee-calculator-example` | Use 500 £15 tickets and one ticket per payment. Show a polished static calculator state with controls, total sales and sorted provider-cost cards. | Explains the calculator inputs and its one-ticket-per-payment assumption. |

## Comparisons: Marketplaces And Discovery

| Page | Proposed asset | Scenario and composition | Organiser value |
|---|---|---|---|
| `pages/compared-to/eventbrite.md` | Comparison graphic: `eventbrite-fees-and-discovery` | Riverside sells 500 £15 tickets. Show the documented Eventbrite cost beside Chobble hosting and processing, with Eventbrite discovery represented separately as a benefit. | Keeps marketplace reach visible while explaining fees and attendee marketing. |
| `pages/compared-to/resident-advisor.md` | Comparison graphic: `resident-advisor-payout-and-reach` | North Wharf Electronic Night sells 300 £18 tickets. Contrast RA's post-event payout and discovery reach with direct organiser payment and a private organiser site. Do not invent an RA fee rate. | Centres cash timing and audience relationship where pricing is unpublished. |
| `pages/compared-to/dice.md` | Attendee comparison: `dice-app-versus-browser` | Alex buys a Moonlight Cinema ticket. Compare DICE's app-centred ticket and transfer journey with browser checkout, email QR ticket and optional wallet pass. | Helps organisers assess app controls against app-free attendance. |
| `pages/compared-to/fatsoma.md` | Comparison graphic: `fatsoma-volume-and-followers` | Riverside Student Arts Night sells 500 £15 tickets. Show the documented percentage fee rising with volume beside the marketplace follower and promotion relationship. | Combines cost growth with ownership of the attendee relationship. |
| `pages/compared-to/fixr.md` | Comparison graphic: `fixr-buyer-fee` | Northside Student Union sells 300 £10 tickets on the Student and Charity tier. Separate face value, buyer fee, VAT and organiser proceeds, with a marketplace shelf beside it. | Shows that low organiser cost can mean a visible buyer charge. |
| `pages/compared-to/eventim-light.md` | Comparison graphic: `eventim-fee-and-network` | The Old Playhouse sells 500 £15 tickets. Show the documented 8% fee reaching £600 and EVENTIM network distribution as a separate optional benefit. | Makes the volume effect clear without ignoring network reach. |
| `pages/compared-to/weezevent.md` | Comparison graphic: `weezevent-fixed-fee-share` | Northside Community Cinema sells 400 tickets at £5, £15 and £30. Show the documented 2.5% + £0.99 charge as a share of each price beside Chobble's annual fee, with cashless bars, access hardware and crew management as a separate Weezevent advantage panel. | Shows that a fixed per-ticket charge weighs most on cheap tickets, without ignoring festival operations. |
| `pages/compared-to/ticket-tailor.md` | Comparison graphic: `ticket-tailor-break-even` | The Tempest sells 84, 230 and 500 tickets. Compare pay-as-you-go and low prepaid-credit rates with Chobble's annual fee; show custom domain and reserved seating separately. | Visualises both break-even points and reasons an organiser may still choose Ticket Tailor. |
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
| `pages/compared-to/ticketsource.md` | Comparison graphic: `ticketsource-fee-and-payout` | Penfold Players sells 400 £12 tickets across a four-night run. Show the booking fee on both TicketSource routes beside Chobble's flat price, with a timeline strip marking when each route settles: TicketSource holds the money until after the run, while the Stripe route and Chobble both settle into the organiser's own payment account as each booking is made, then pay out to the bank on that provider's schedule. Keep settlement and bank payout as separate marks so the graphic does not imply the money lands in the bank instantly. | Shows that payout timing matters as much as the fee rate for a group with cash-flow limits. |
| `pages/compared-to/ticketpass.md` | Comparison graphic: `ticketpass-fee-and-donation` | Meadowfield Fundraisers sells 500 £15 tickets. Split the Essentials charge into booking fee, service fee and the donated share, beside Chobble's community hosting fee with a direct donation shown separately. | Separates the size of the ticket charge from the share of it that is donated. |
| `pages/compared-to/eventprime.md` | Comparison graphic: `eventprime-plan-tiers` | Oakfield Arts sells 300 £12 tickets and needs ticket generation, card payments and door check-in. Show which EventPrime plan each requirement lands in, with the WordPress site and gateway as separate costs, beside one Chobble level containing all current Chobble features. | Shows that the plugin price depends on which features an organiser needs. |
| `pages/compared-to/pta-events.md` | Comparison graphic: `pta-events-school-year` | Oakfield Primary runs a disco, raffle, auction, volunteer rota and news page. Mark which jobs each product handles, then show transaction costs versus Chobble's community rate. | Shows when the wider fundraising suite may justify its cost. |
| `pages/compared-to/tessera-tickets.md` | Comparison graphic: `tessera-venue-cost-stack` | The Old Playhouse sells 8,000 tickets and needs assigned seating and box-office hardware. Stack Tessera subscription, WordPress site, seating setup and scanners beside Chobble's general-admission model. | Makes the products' different venue scope visible. |
| `pages/compared-to/resova.md` | Comparison graphic: `resova-resource-scheduling` | Riverside Escape Rooms has three rooms, six hourly slots and 420 monthly bookings. Show Resova assigning rooms and staff with allowance overage beside Chobble's recurring event capacity. | Helps operators decide whether specialist resource scheduling matters more than flat ticketing cost. |

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
- [x] `scripts/screenshots/summer-appeal-purchase.js`
- [x] `scripts/screenshots/duplicate-event.js`

### Completed Cucumber evidence captures

- [x] `balance-payment-link`
- [x] `bundle-booking-page`
- [x] `contact-record`
- [x] `listing-ledger`
- [x] `payment-provider-choice`
- [x] `qr-code-check-in`
- [x] `servicing-studio-floor-hold`
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
