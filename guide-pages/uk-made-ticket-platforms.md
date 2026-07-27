---
name: UK Made Ticket Platforms
subtitle: British ticket sales systems compared by company registration, pricing currency and data location
meta_title: UK Made Ticket Platforms | Chobble Tickets
meta_description: Compare British-made ticket sales systems by UK company registration, pound pricing, postcode lookup and where attendee data is stored.
guide-category: choosing-a-ticket-platform
order: 5
blocks:
  - type: guide-header
  - type: guide-navigation
  - type: markdown
    content: |
      This guide lists ticketing providers built by companies registered in the
      United Kingdom, using the registration details recorded on each
      provider's comparison page.

      Where a company is registered is a separate question from where it stores
      attendee data, who owns it, and what it charges. A UK registration does
      not mean the servers are in the UK, and it does not tell an organiser
      what the service costs.
  - type: markdown
    dark: true
    content: |
      ## What "UK made" can mean

      Three facts are often grouped under the phrase, and they can be true
      separately:

      - **Company registration.** The business is incorporated in the UK and
        appears on the Companies House register, so it is subject to UK company
        law. Whether UK consumer law also applies depends on the contract and
        on whether the organiser is buying as a consumer or a business.
      - **Where the software is built.** The people writing and supporting the
        product work in the UK.
      - **Where attendee data is stored.** The servers holding names, email
        addresses and orders sit in a particular country, which may not be the
        country the company is registered in.

      The tables below cover the first fact only, and say so where no
      registered legal entity is recorded for a provider. Where the software is
      built and where attendee data is stored are set out for Chobble Tickets
      further down this page.
  - type: markdown
    content: |
      ## UK-based ticketing providers

      These providers have a checked UK registration record on this site.

      | Provider | Registered company | Based in |
      |---|---|---|
      | **Chobble Tickets** | Chobble CIC, community interest company number 17050113 | Prestwich, Manchester |
      | [Dandelion](/compared-to/dandelion/) | Symbiota Ltd, company 09603539, a company limited by guarantee | United Kingdom |
      | [Eventim Light](/compared-to/eventim-light/) | Operated in the UK by EVENTIM UK Ltd; its parent, CTS EVENTIM, is in Bremen, Germany | United Kingdom |
      | [PTA Events](/compared-to/pta-events/) | PTA Events Limited, [company 09404586](https://find-and-update.company-information.service.gov.uk/company/09404586) | Bedford |
      | [Resident Advisor](/compared-to/resident-advisor/) | Started in Australia, now based in London and self-described as independent | London |
      | [tickts](/compared-to/tickts/) | TICKTS LTD, [company 17029682](https://find-and-update.company-information.service.gov.uk/company/17029682) | London |

      [Resova](/compared-to/resova/), run by Resova Ltd (company 09559910), is
      also UK registered. It is classed here as adjacent software rather than a
      ticketing product, because it sells bookings for escape rooms, tours and
      activities.

      Four more providers are run from the UK but have unreviewed or
      undocumented registration records here. Their comparison pages give the
      details: [BookitBee](/compared-to/bookitbee/) is operated by Live It Group
      Ltd, [Fatsoma](/compared-to/fatsoma/) has been in Manchester since 2005,
      [FIXR](/compared-to/fixr/) is operated by VIPR Digital Limited in London,
      and [Ticket Tailor](/compared-to/ticket-tailor/) has run from London since
      2010 without a registered entity recorded here.

      Being UK based says nothing about fees, and the charge is not applied the
      same way by each provider. BookitBee, Fatsoma, FIXR and Ticket Tailor
      charge for each paid ticket. PTA Events charges a percentage of each
      transaction, so a buyer taking four tickets in one order is charged once.
      Resova sells subscription plans with a monthly booking allowance and
      charges for bookings above it. Chobble Tickets and tickts add no
      [per-ticket platform fee](/features/no-per-ticket-fees/). Each comparison
      page sets out the current rates.
  - type: markdown
    dark: true
    content: |
      ## Providers based outside the UK

      Several platforms used by UK organisers are run from elsewhere. This
      matters for which company law applies and which courts hear disputes.
      Some rows give a headquarters rather than a registration, because no
      registered legal entity is recorded for that provider here.

      | Provider | Registered or headquartered in |
      |---|---|
      | [Hi.Events](/compared-to/hi-events/) | Hi.Events Ltd, Ireland |
      | [Humanitix](/compared-to/humanitix/) | Australia, operating as a registered charity |
      | [Pretix](/compared-to/pretix/) | Heidelberg, Germany |
      | [Swicket](/compared-to/swicket/) | Vivento Lab, Lugano, Switzerland |
      | [Tessera Tickets](/compared-to/tessera-tickets/) | Tecture, Chicago, Illinois |
      | [Wix Events](/compared-to/wix-events/) | Wix.com Ltd., Tel Aviv, Israel |

      Some records here are marked unreviewed, which means the registration has
      not been checked for this site rather than that the provider is UK based.
      [Eventbrite](/compared-to/eventbrite/),
      [Ticketek](/compared-to/ticketek/),
      [Ticketmaster](/compared-to/ticketmaster/) and
      [Tito](/compared-to/tito/) fall into that group; their comparison pages
      describe where each is run from.

      Two platforms are run from London without being small British companies.
      [DICE](/compared-to/dice/) began in London and now belongs to a larger
      international group; its registration is not recorded here.
      [Resident Advisor](/compared-to/resident-advisor/)
      started in Australia and is now based in London, describes itself as
      independent, and has offices in several other countries.
  - type: markdown
    content: |
      ## Where Chobble Tickets stores data

      Chobble is a UK company, but its managed hosting is not entirely UK
      based. [Bunny.net](https://bunny.net), the hosting and CDN provider, is
      headquartered in Ljubljana, Slovenia. The managed database uses Bunny's
      available primary and replica regions, so records may be replicated
      outside the UK and EU. The configured storage region is `eu-west-1`.

      Attendee personal data is [encrypted at rest](/features/encrypted/), so
      the stored records do not contain readable names or contact details
      without an authorised keyed user.

      An organiser who needs data to stay on specific infrastructure can
      [self-host](/hosting/) the same product on a UK server. That covers the
      application and its database. Payment, email and any other configured
      services still receive the data they need to do their work, so those
      providers have to be chosen with the same question in mind. The
      [hosting and data page](/features/european/) lists every company in the
      stack and where each is headquartered.
  - type: markdown
    dark: true
    content: |
      ## Features that assume a UK setup

      Some parts of the product are built around British conventions:

      - **Hosting priced in pounds.** Chobble Tickets costs £50/year or
        £5/month, with a £25 annual price for charities, community groups,
        artists and musicians. The hosting invoice is in pounds whatever
        currency a site sells in, and each site's own country and currency are
        chosen during setup.
      - **[Postcode lookup](/features/postcode-lookup/).** Customers type a UK
        postcode and pick their address from a list. Address data comes from
        [EasyPostcodes](https://easypostcodes.com/) using the organiser's own
        API key.
      - **[UK payment providers](/features/stripe-and-square/).** Organisers
        connect Stripe, Square or SumUp. SumUp is a UK company. Ticket income
        goes to the organiser's own account.
      - **[Custom domains](/features/custom-domain/).** An organiser can point
        a domain they own at their site, including .co.uk and .uk domains. A
        site starts on a host-provided subdomain such as
        yourname.tix.chobble.net, and a custom domain is added on top of it.
  - type: markdown
    content: |
      ## UK data protection and company law

      Chobble CIC is registered with the
      [Information Commissioner's Office](https://ico.org.uk), the UK data
      protection regulator, under reference
      [ZC097497](https://ico.org.uk/ESDWebPages/Entry/ZC097497). An organiser
      with a complaint about how Chobble handles data can raise it with the
      ICO.

      A community interest company is a UK legal structure. Chobble CIC is
      limited by guarantee without share capital and has an asset lock, which
      restricts how company assets can be transferred. There are no
      shareholders to pay.

      Dandelion is provided by Symbiota Ltd, which Companies House records as a
      company limited by guarantee. Symbiota describes itself as a
      not-for-profit worker co-operative.
  - type: markdown
    dark: true
    content: |
      ## Checking a provider yourself

      Every UK company appears on the free
      [Companies House register](https://find-and-update.company-information.service.gov.uk/),
      which lists the registered office, incorporation date, directors, people
      with significant control and filed accounts. Searching a provider's name
      there shows who runs it and whether the company is active.

      A provider's privacy notice states where it processes personal data. The
      currency shown on a website does not establish which company issues the
      invoice, so check the legal entity named in the terms, on an invoice, or
      in the privacy notice instead.

      The [full comparison pages](/compared-to/) record the sources behind
      each entry, and give a checking date where one has been recorded.
---
