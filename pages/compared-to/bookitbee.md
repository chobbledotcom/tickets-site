---
layout: design-system-base.html
title: Chobble Tickets vs BookitBee
meta_title: No-Fee Alternative to BookitBee | Chobble Tickets
meta_description: Looking for a no-fee alternative to BookitBee? Chobble Tickets charges a flat annual fee with no per-ticket costs, and it's fully open source.
permalink: /compared-to/bookitbee/
eleventyNavigation:
  key: vs BookitBee
  parent: Compared To
  order: 1
blocks:
  - type: hero
    full_width: true
    class: gradient
    title: Chobble Tickets vs BookitBee
    lead: >-
      BookitBee is a UK-based ticketing platform - here's how it compares to
      Chobble Tickets.

  - type: markdown
    content: |
      ## Pricing comparison

      BookitBee charges per ticket sold - typically around 5-6% plus a fixed
      fee per ticket, and for high-volume events those fees add up quickly.

      Chobble Tickets charges a flat £50/year (£25 for charities) with no
      per-ticket fees or percentage cuts, which works out significantly
      cheaper for most event organisers.

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
            <h3>BookitBee</h3>
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
      (function(){var f=function(n){return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")};var ch={a:50,tp:0,tf:0,pp:1.5,pf:0.2};var co={n:"BookitBee",a:0,tp:2,tf:0.5,pp:1.5,pf:0.2};var ts=document.getElementById("pc-tickets"),ps=document.getElementById("pc-price");function u(){var t=parseInt(ts.value,10),p=parseFloat(ps.value);document.getElementById("pc-ticket-count").textContent=t.toLocaleString();document.getElementById("pc-ticket-price").textContent=f(p);function c(x){var pf=t*(p*x.tp/100+x.tf),pr=t*(p*x.pp/100+x.pf);return{a:x.a,pf:pf,pr:pr,tot:x.a+pf+pr}}var a=c(ch),b=c(co);document.getElementById("pc-chobble-annual").innerHTML="&pound;"+f(a.a);document.getElementById("pc-chobble-platform").innerHTML="&pound;"+f(a.pf);document.getElementById("pc-chobble-processing").innerHTML="&pound;"+f(a.pr);document.getElementById("pc-chobble-total").innerHTML="&pound;"+f(a.tot);document.getElementById("pc-chobble-per-ticket").innerHTML=t>0?"&pound;"+f(a.tot/t):"&mdash;";document.getElementById("pc-comp-annual").innerHTML="&pound;"+f(b.a);document.getElementById("pc-comp-platform").innerHTML="&pound;"+f(b.pf);document.getElementById("pc-comp-processing").innerHTML="&pound;"+f(b.pr);document.getElementById("pc-comp-total").innerHTML="&pound;"+f(b.tot);document.getElementById("pc-comp-per-ticket").innerHTML=t>0?"&pound;"+f(b.tot/t):"&mdash;";var s=document.getElementById("pc-savings"),d=b.tot-a.tot;s.className="price-comparator__savings";if(d>0.01){s.innerHTML="You save <strong>&pound;"+f(d)+"/year</strong> with Chobble Tickets";s.classList.add("price-comparator__savings--positive")}else if(d<-0.01){s.innerHTML=co.n+" is <strong>&pound;"+f(Math.abs(d))+"/year</strong> cheaper at this volume";s.classList.add("price-comparator__savings--negative")}else{s.innerHTML="Both platforms cost about the same at this volume";s.classList.add("price-comparator__savings--neutral")}}ts.addEventListener("input",u);ps.addEventListener("input",u);u()})();
      </script>

      *BookitBee fees: 2% + 50p per ticket, plus Stripe processing
      (1.5% + 20p). Chobble Tickets: £50/year flat + Stripe processing
      (1.5% + 20p).*

  - type: markdown
    content: |
      ## An open source, no-fee alternative to BookitBee

      BookitBee is a proprietary platform, so you can't see how your data is
      handled, you can't self-host, and if the company changes direction
      you're stuck.

      Chobble Tickets is open source under AGPLv3, so you can inspect every
      line of code, self-host if you want, and you're never locked in.

      ## When BookitBee might be better

      BookitBee has been around longer and has a more polished marketing
      presence. If you need phone support or a well-established brand name on
      your tickets, BookitBee may be the better fit, whereas Chobble Tickets
      is newer and more DIY-friendly.

  - type: cta
    title: Try Chobble Tickets
    description: Flat pricing with open source code and no lock-in.
    button:
      text: Get Started
      href: https://tix.chobble.com/ticket/register
      variant: secondary
      size: lg
---
