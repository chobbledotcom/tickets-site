---
name: UK Made Ticket Platforms
subtitle: British ticket sales systems compared by company registration, pricing currency and data location
meta_title: UK Made Ticket Platforms | Chobble Tickets
meta_description: Compare British-made ticket sales systems by UK company registration, pound pricing, VAT, postcode lookup and where attendee data is stored.
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
      not mean the servers are in the UK, and several UK-registered providers
      hold investment from outside the country.
  - type: markdown
    dark: true
    content: |
      ## What "UK made" can mean

      Three facts are often grouped under the phrase, and they can be true
      separately:

      - **Company registration.** The business is incorporated in the UK and
        appears on the Companies House register, so it is subject to UK company
        law and UK consumer law.
      - **Where the software is built.** The people writing and supporting the
        product work in the UK.
      - **Where attendee data is stored.** The servers holding names, email
        addresses and orders sit in a particular country, which may not be the
        country the company is registered in.

      Each entry below states which of these is documented.
  - type: markdown
    content: |
      ## UK-registered ticketing providers

      | Provider | Company | Based in |
      |---|---|---|
      | **Chobble Tickets** | Chobble CIC, community interest company number 17050113 | Prestwich, Manchester |
      | [BookitBee](/compared-to/bookitbee/) | Live It Group Ltd, [company 08432364](https://find-and-update.company-information.service.gov.uk/company/08432364) | United Kingdom |
      | [Dandelion](/compared-to/dandelion/) | Symbiota Ltd, company 09603539, a company limited by guarantee | United Kingdom |
      | [Fatsoma](/compared-to/fatsoma/) | [Company 05495880](https://find-and-update.company-information.service.gov.uk/company/05495880), founded 2005 | Manchester |
      | [FIXR](/compared-to/fixr/) | VIPR Digital Limited, [company 08184813](https://find-and-update.company-information.service.gov.uk/company/08184813) | London |
      | [PTA Events](/compared-to/pta-events/) | PTA Events Limited, [company 09404586](https://find-and-update.company-information.service.gov.uk/company/09404586) | Bedford |
      | [Resova](/compared-to/resova/) | Resova Ltd, company 09559910 | United Kingdom |
      | [Ticket Tailor](/compared-to/ticket-tailor/) | Independently owned since 2014, running since 2010 | London |
      | [tickts](/compared-to/tickts/) | TICKTS LTD, [company 17029682](https://find-and-update.company-information.service.gov.uk/company/17029682) | London |

      Registration alone says nothing about fees. BookitBee, Fatsoma, FIXR,
      Resova, Ticket Tailor and PTA Events all charge for each ticket sold, at
      rates set out on their comparison pages. Chobble Tickets and tickts do
      not add a [per-ticket platform fee](/features/no-per-ticket-fees/).
  - type: markdown
    dark: true
    content: |
      ## Providers registered outside the UK

      Several platforms used by UK organisers are run from elsewhere. This
      matters for which company law applies, which courts hear disputes, and
      which currency the provider prices in.

      | Provider | Registered or headquartered in |
      |---|---|
      | [Eventbrite](/compared-to/eventbrite/) | Owned by Bending Spoons, an Italian software company |
      | [Eventim Light](/compared-to/eventim-light/) | CTS EVENTIM, Bremen, Germany |
      | [Hi.Events](/compared-to/hi-events/) | Hi.Events Ltd, Ireland |
      | [Humanitix](/compared-to/humanitix/) | Australia, operating as a registered charity |
      | [Pretix](/compared-to/pretix/) | Heidelberg, Germany |
      | [Swicket](/compared-to/swicket/) | Vivento Lab, Italy |
      | [Tessera Tickets](/compared-to/tessera-tickets/) | Tecture, Chicago, Illinois |
      | [Ticketek](/compared-to/ticketek/) | Australia and New Zealand |
      | [Tito](/compared-to/tito/) | Dublin, Ireland |

      Two platforms started in the UK and now sit inside larger groups.
      [DICE](/compared-to/dice/) began in London, raised money from investors
      including SoftBank, and was bought by Fever.
      [Resident Advisor](/compared-to/resident-advisor/) started in Australia
      and is now based in London with offices in Berlin, New York, Los Angeles
      and Tokyo.
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
      [self-host](/hosting/) the same product on a UK server. The
      [hosting and data page](/features/european/) lists every company in the
      stack and where each is headquartered.
  - type: markdown
    dark: true
    content: |
      ## Features that assume a UK setup

      Some parts of the product are built around British conventions:

      - **Prices in pounds.** Chobble Tickets costs £50/year or £5/month, with
        a £25 annual price for charities, community groups, artists and
        musicians. There is no currency conversion between the organiser's
        price list and the invoice.
      - **[Postcode lookup](/features/postcode-lookup/).** Customers type a UK
        postcode and pick their address from a list. Address data comes from
        [EasyPostcodes](https://easypostcodes.com/) using the organiser's own
        API key.
      - **[UK payment providers](/features/stripe-and-square/).** Organisers
        connect Stripe, Square or SumUp. SumUp is a UK company. Ticket income
        goes to the organiser's own account.
      - **[Custom domains](/features/custom-domain/).** Events run on a domain
        the organiser owns, including .co.uk and .uk domains, rather than a
        provider's marketplace address.
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

      Dandelion is the other UK provider listed here with a purpose-locked
      structure. Symbiota Ltd is a company limited by guarantee and describes
      itself as a not-for-profit worker co-operative.
  - type: markdown
    dark: true
    content: |
      ## Checking a provider yourself

      Every UK company appears on the free
      [Companies House register](https://find-and-update.company-information.service.gov.uk/),
      which lists the registered office, incorporation date, directors, people
      with significant control and filed accounts. Searching a provider's name
      there shows who runs it and whether the company is active.

      A provider's privacy notice states where it processes personal data. A
      provider whose website prices in dollars or euros is usually not billing
      from the UK, whatever the marketing says.

      The [full comparison pages](/compared-to/) record the sources and
      checking date for each provider listed above.
---
