---
layout: design-system-base.html
title: Chobble Tickets vs Parentkind
meta_title: Affordable Alternative to Parentkind for School Events | Chobble Tickets
meta_description: Looking for an affordable alternative to Parentkind for school and PTA ticketing? Chobble Tickets offers flat pricing from £25/year with no per-ticket fees.
permalink: /compared-to/parentkind/
eleventyNavigation:
  key: vs Parentkind
  parent: Compared To
  order: 3
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs Parentkind
    lead: >-
      Parentkind is popular with schools and PTAs, so here's a detailed look
      at how Chobble Tickets compares for school event ticketing.

  - type: markdown
    content: |
      ## Different platforms, different goals

      Parentkind is a membership organisation for PTAs that bundles several
      tools together: public liability insurance, PTA management guides,
      community advisers, templates, and access to the PTA Events ticketing
      platform. It's designed specifically for the school fundraising context.

      Chobble Tickets is a general-purpose ticketing platform. It doesn't
      have school-specific features like Gift Aid or PTA insurance, but it's
      simpler, cheaper, and gives you full control over your data.

      ## Pricing breakdown

      With Parentkind, the costs add up from several layers:

      - **Parentkind membership**: from £115/year depending on school size
      - **PTA Events platform fee**: 3.95% per transaction on the Plus plan,
        or 1.50% on the Premium plan (which has an additional annual charge)
      - **Payment processing**: Stripe charges 1.5% + 20p per transaction
        (1.2% + 20p for registered charities)

      So for a £10 ticket on the Plus plan, you'd lose roughly 55-75p per
      sale in combined platform and payment fees, on top of the annual
      membership.

      With Chobble Tickets, it's a flat £50/year (£25 for charities and
      community groups), with no per-ticket fees or platform commission.
      You only pay the standard payment processing fee from Stripe or
      Square. Sell 100 tickets or 10,000 - the cost to you stays the same.

  - type: markdown
    content: |
      ## Interactive cost calculator

      Drag the sliders to see how costs compare at different volumes:

      <div class="price-comparator" id="price-comparator">
        <div class="price-comparator__controls">
          <label class="price-comparator__label">
            <span>Tickets per year: <strong id="pc-ticket-count">200</strong></span>
            <input type="range" id="pc-tickets" min="0" max="10000" value="200" step="10">
          </label>
          <label class="price-comparator__label">
            <span>Price per ticket: <strong>&pound;<span id="pc-ticket-price">10.00</span></strong></span>
            <input type="range" id="pc-price" min="0" max="200" value="10" step="0.50">
          </label>
        </div>
        <div class="price-comparator__results">
          <div class="price-comparator__column price-comparator__column--chobble">
            <h3>Chobble Tickets</h3>
            <dl>
              <dt>Annual fee</dt><dd id="pc-chobble-annual">&pound;50.00</dd>
              <dt>Platform fees</dt><dd id="pc-chobble-platform">&pound;0.00</dd>
              <dt>Payment processing</dt><dd id="pc-chobble-processing">&pound;0.00</dd>
              <dt class="price-comparator__total-label">Total cost per year</dt>
              <dd class="price-comparator__total" id="pc-chobble-total">&pound;0.00</dd>
              <dt class="price-comparator__per-ticket-label">Cost per ticket</dt>
              <dd class="price-comparator__per-ticket" id="pc-chobble-per-ticket">&pound;0.00</dd>
            </dl>
          </div>
          <div class="price-comparator__column price-comparator__column--competitor">
            <h3>Parentkind</h3>
            <dl>
              <dt>Annual fee</dt><dd id="pc-comp-annual">&pound;115.00</dd>
              <dt>Platform fees</dt><dd id="pc-comp-platform">&pound;0.00</dd>
              <dt>Payment processing</dt><dd id="pc-comp-processing">&pound;0.00</dd>
              <dt class="price-comparator__total-label">Total cost per year</dt>
              <dd class="price-comparator__total" id="pc-comp-total">&pound;0.00</dd>
              <dt class="price-comparator__per-ticket-label">Cost per ticket</dt>
              <dd class="price-comparator__per-ticket" id="pc-comp-per-ticket">&pound;0.00</dd>
            </dl>
          </div>
        </div>
        <p class="price-comparator__savings" id="pc-savings"></p>
      </div>
      <script>
      (function(){var f=function(n){return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")};var ch={a:50,tp:0,tf:0,pp:1.5,pf:0.2};var co={n:"Parentkind",a:115,tp:3.95,tf:0,pp:1.5,pf:0.2};var ts=document.getElementById("pc-tickets"),ps=document.getElementById("pc-price");function u(){var t=parseInt(ts.value,10),p=parseFloat(ps.value);document.getElementById("pc-ticket-count").textContent=t.toLocaleString();document.getElementById("pc-ticket-price").textContent=f(p);function c(x){var pf=t*(p*x.tp/100+x.tf),pr=t*(p*x.pp/100+x.pf);return{a:x.a,pf:pf,pr:pr,tot:x.a+pf+pr}}var a=c(ch),b=c(co);document.getElementById("pc-chobble-annual").innerHTML="&pound;"+f(a.a);document.getElementById("pc-chobble-platform").innerHTML="&pound;"+f(a.pf);document.getElementById("pc-chobble-processing").innerHTML="&pound;"+f(a.pr);document.getElementById("pc-chobble-total").innerHTML="&pound;"+f(a.tot);document.getElementById("pc-chobble-per-ticket").innerHTML=t>0?"&pound;"+f(a.tot/t):"&mdash;";document.getElementById("pc-comp-annual").innerHTML="&pound;"+f(b.a);document.getElementById("pc-comp-platform").innerHTML="&pound;"+f(b.pf);document.getElementById("pc-comp-processing").innerHTML="&pound;"+f(b.pr);document.getElementById("pc-comp-total").innerHTML="&pound;"+f(b.tot);document.getElementById("pc-comp-per-ticket").innerHTML=t>0?"&pound;"+f(b.tot/t):"&mdash;";var s=document.getElementById("pc-savings"),d=b.tot-a.tot;s.className="price-comparator__savings";if(d>0.01){s.innerHTML="You save <strong>&pound;"+f(d)+"/year</strong> with Chobble Tickets";s.classList.add("price-comparator__savings--positive")}else if(d<-0.01){s.innerHTML=co.n+" is <strong>&pound;"+f(Math.abs(d))+"/year</strong> cheaper at this volume";s.classList.add("price-comparator__savings--negative")}else{s.innerHTML="Both platforms cost about the same at this volume";s.classList.add("price-comparator__savings--neutral")}}ts.addEventListener("input",u);ps.addEventListener("input",u);u()})();
      </script>

      *Parentkind costs: £115/year membership + 3.95% platform fee per
      transaction + Stripe processing (1.5% + 20p). Chobble Tickets:
      £50/year flat (£25 for community groups) + Stripe processing
      (1.5% + 20p).*

  - type: markdown
    content: |
      ## Feature comparison

      ### Ticketing and events

      Both platforms handle the basics: creating events, selling tickets, and
      managing attendees. PTA Events includes prize draws, online auctions,
      and a volunteer management tool, which are useful for school
      fundraisers. Chobble Tickets focuses on doing core ticketing well, with
      features like pay-what-you-want pricing, registration deadlines,
      overbooking prevention, and event grouping for multi-event bookings.

      ### Check-in and entry

      Both offer QR code scanning for event entry. On PTA Events, the QR
      scanning feature is only available on the Premium plan. On Chobble
      Tickets, QR code check-ins work with any phone camera and are included
      at every price point.

      ### Data and privacy

      PTA Events is a proprietary platform - you can't see how your data is
      stored or processed. Chobble Tickets is open source and encrypts all
      attendee data at rest using hybrid RSA-OAEP and AES-256-GCM encryption.
      You can inspect the code, self-host, and export your data at any time.

      ### Customisation

      Chobble Tickets offers custom domains, light and dark themes, markdown
      event descriptions with image uploads, customisable email templates,
      and an embeddable widget for your existing website. PTA Events provides
      a branded microsite for your PTA with advertising and sponsorship
      options on the Premium plan.

      ### Integrations

      Chobble Tickets includes a public API, webhooks, RSS and ICS calendar
      feeds, Apple Wallet support, and a choice of email providers (Resend,
      Postmark, SendGrid, Mailgun). PTA Events integrates with Stripe and
      GoCardless and offers comprehensive reporting with 14 built-in reports.

      ## What Parentkind does that we don't

      Let's be straightforward about what Parentkind offers that Chobble
      Tickets doesn't:

      - **Insurance**: Parentkind membership includes public liability,
        trustee indemnity, employer's liability, and theft cover. This alone
        can be worth the membership fee.
      - **PTA advisers**: Phone and email support from people who understand
        the specifics of running a PTA, available 9am-5pm on weekdays.
      - **Gift Aid**: Tools for managing Gift Aid declarations on donations.
      - **Fundraising resources**: Templates, posters, planning guides, and
        exclusive fundraisers like the Big PTA Walk and Cash Draws.
      - **Auctions and prize draws**: Built-in tools for running online
        auctions, raffles, and prize draws.
      - **Volunteer management**: Recruit volunteers, create time slots,
        track sign-ups, and send reminders.

      These are genuinely useful for PTAs, and if you need them, Parentkind
      is a solid choice.

      ## What we do that Parentkind doesn't

      - **Flat pricing**: No per-ticket fees or platform commission, ever.
      - **Open source**: Every line of code is public and auditable under
        AGPLv3.
      - **Encryption**: All attendee data is encrypted at rest, not just in
        transit.
      - **Self-hosting**: Run the entire platform on your own infrastructure
        if you want to.
      - **Custom domains**: Your ticketing lives at your own web address.
      - **Public API and webhooks**: Build custom integrations and
        automations.
      - **No membership required**: Sign up and start selling tickets
        immediately.
      - **Works beyond schools**: Use the same platform for music gigs,
        charity fundraisers, community events, or anything else.

      ## When Parentkind makes more sense

      If your PTA needs the full package - insurance, Gift Aid, advisers,
      fundraising resources, volunteer coordination, and auctions - then
      Parentkind offers genuine value as a bundled membership. The insurance
      alone can justify the cost for many PTAs.

      ## When an alternative to Parentkind makes more sense

      If you already have insurance sorted and just need affordable,
      straightforward ticketing for school events, Chobble Tickets saves you
      money. At £25/year for community groups with no per-ticket fees, the
      savings add up quickly, especially for popular events where percentage
      fees can eat into your fundraising total. It's also a better fit if you
      care about data privacy, want to use your own domain, or need a
      platform that works for non-school events too.

  - type: cta
    title: Simple school event ticketing
    description: Flat pricing with no per-ticket fees - more of your fundraising goes where it should.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
