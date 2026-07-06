---
title: Postcode Lookup - Chobble Tickets
meta_title: Postcode Address Lookup - Chobble Tickets
meta_description: Customers type their postcode and pick their address from a list. Results are cached encrypted, and the provider API key never leaves the server.
permalink: /features/postcode-lookup/
eleventyNavigation:
  key: Postcode Lookup
  parent: Selling Tickets
  order: 13
blocks:
  - type: hero
    class: gradient
    content: |-
      # Postcode lookup

      Customers type their postcode into the booking form and pick their address from a list. The address field is filled in for them, which means fewer typos on delivery addresses.
  - type: markdown
    content: |
      ## How it works

      When a listing collects a postal address, a postcode search box
      appears above the address field. The customer types their postcode,
      picks their address from the results, and the field is filled in. An
      edit button lets them adjust the address afterwards.

      The same search appears on the admin attendee forms, so staff taking
      a booking over the phone can fill an address the same way. Browsers
      without JavaScript see a plain address box, which keeps working as
      normal.

      Accurate addresses matter most when something is being delivered.
      The address a customer picks is the one that appears on the
      [deliveries run sheet](/features/logistics/), with a map link for the
      driver.

      ## Lookup providers

      Address data comes from a lookup provider. The first supported
      provider is [EasyPostcodes](https://easypostcodes.com/), and the
      provider system is built so that further providers can be added.
      Choosing "none" turns the feature off, and no search box is shown.

      You add your own provider API key in the settings. The key is stored
      on the server and never sent to the browser: the booking page calls
      your Chobble Tickets site, which talks to the provider.

      ## Caching and limits

      Lookup providers charge per request, so results are cached. A repeat
      search for the same postcode is served from the cache instead of
      spending another paid request, and cached entries expire after a set
      number of days so stale data is not served.

      Cached results are stored encrypted, like the rest of your data, and
      looked up through a blind index rather than by scanning. The public
      endpoint is rate limited per IP address, so a bot cannot drain your
      provider account.
  - type: cta
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
    content: |-
      ## Fewer address typos

      Sign up for managed hosting at £50/year or £5/month, add your provider key, and the postcode search appears on your booking forms.
name: Postcode Address Lookup - Chobble Tickets
---
