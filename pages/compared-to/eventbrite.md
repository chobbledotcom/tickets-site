---
layout: design-system-base.html
title: Chobble Tickets vs Eventbrite
meta_title: Open Source Alternative to Eventbrite | Chobble Tickets
meta_description: Looking for an open source alternative to Eventbrite? Chobble Tickets offers flat annual pricing with no per-ticket fees, full data ownership, and no platform lock-in.
permalink: /compared-to/eventbrite/
eleventyNavigation:
  key: vs Eventbrite
  parent: Compared To
  order: 0
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs Eventbrite
    lead: >-
      Eventbrite is the biggest name in event ticketing, so here's how a
      small, open source alternative compares.

  - type: markdown
    content: |
      ## Pricing comparison

      Eventbrite charges a percentage plus a fixed fee per ticket, and their
      pricing has changed multiple times over the years (generally trending
      upward), so for a £15 ticket you might lose £1-2 per sale to the
      platform.

      Chobble Tickets is a flat £50/year regardless of how many tickets you
      sell, so the maths is simple: if you sell more than a few dozen tickets
      a year, Chobble Tickets is cheaper.

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
            <h3>Eventbrite</h3>
            <dl>
              <dt>Annual fee</dt><dd id="pc-comp-annual">&pound;0.00</dd>
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
      (function(){var f=function(n){return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")};var ch={a:50,tp:0,tf:0,pp:1.5,pf:0.2};var co={n:"Eventbrite",a:0,tp:6.95,tf:0.59,pp:0,pf:0};var ts=document.getElementById("pc-tickets"),ps=document.getElementById("pc-price");function u(){var t=parseInt(ts.value,10),p=parseFloat(ps.value);document.getElementById("pc-ticket-count").textContent=t.toLocaleString();document.getElementById("pc-ticket-price").textContent=f(p);function c(x){var pf=t*(p*x.tp/100+x.tf),pr=t*(p*x.pp/100+x.pf);return{a:x.a,pf:pf,pr:pr,tot:x.a+pf+pr}}var a=c(ch),b=c(co);document.getElementById("pc-chobble-annual").innerHTML="&pound;"+f(a.a);document.getElementById("pc-chobble-platform").innerHTML="&pound;"+f(a.pf);document.getElementById("pc-chobble-processing").innerHTML="&pound;"+f(a.pr);document.getElementById("pc-chobble-total").innerHTML="&pound;"+f(a.tot);document.getElementById("pc-chobble-per-ticket").innerHTML=t>0?"&pound;"+f(a.tot/t):"&mdash;";document.getElementById("pc-comp-annual").innerHTML="&pound;"+f(b.a);document.getElementById("pc-comp-platform").innerHTML="&pound;"+f(b.pf);document.getElementById("pc-comp-processing").innerHTML="&pound;"+f(b.pr);document.getElementById("pc-comp-total").innerHTML="&pound;"+f(b.tot);document.getElementById("pc-comp-per-ticket").innerHTML=t>0?"&pound;"+f(b.tot/t):"&mdash;";var s=document.getElementById("pc-savings"),d=b.tot-a.tot;s.className="price-comparator__savings";if(d>0.01){s.innerHTML="You save <strong>&pound;"+f(d)+"/year</strong> with Chobble Tickets";s.classList.add("price-comparator__savings--positive")}else if(d<-0.01){s.innerHTML=co.n+" is <strong>&pound;"+f(Math.abs(d))+"/year</strong> cheaper at this volume";s.classList.add("price-comparator__savings--negative")}else{s.innerHTML="Both platforms cost about the same at this volume";s.classList.add("price-comparator__savings--neutral")}}ts.addEventListener("input",u);ps.addEventListener("input",u);u()})();
      </script>

      *Eventbrite fees: 6.95% + £0.59 per ticket (includes payment
      processing). Chobble Tickets: £50/year flat + Stripe processing
      (1.5% + 20p).*

  - type: markdown
    content: |
      ## Data ownership

      Eventbrite owns a lot of data about your attendees and uses it for their
      own marketing, and your event page exists within Eventbrite's ecosystem
      where attendees are encouraged to follow other events on the platform.

      With Chobble Tickets, attendee data is encrypted and stays under your
      control. There's no platform trying to cross-promote other events to your
      audience.

      ## Why consider an open source alternative to Eventbrite?

      Let's be honest - Eventbrite has features Chobble Tickets doesn't,
      including a massive discovery platform, a well-known mobile app, and deep
      integrations with hundreds of tools. If you need attendees to discover
      your event through a platform, Eventbrite is hard to beat.

      Chobble Tickets is better for organisers who already have an audience and
      want to keep costs down, own their data, and avoid platform lock-in. It
      includes ICS calendar and RSS feeds, a public API, embeddable widgets,
      and pay-what-you-want pricing - all included in the flat annual fee.

  - type: cta
    title: Try Chobble Tickets
    description: Keep your data, your revenue, and your sanity.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
