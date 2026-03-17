(function () {
  var containers = document.querySelectorAll(".price-comparator");
  for (var i = 0; i < containers.length; i++) {
    initComparator(containers[i]);
  }

  function initComparator(el) {
    var config = JSON.parse(el.getAttribute("data-config"));
    var ch = config.chobble;
    var co = config.competitor;

    var f = function (n) {
      return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    var q = function (sel) {
      return el.querySelector(sel);
    };

    var setZero = function (cell, val) {
      cell.classList.toggle("price-comparator__zero", val === 0);
    };

    var ts = q("[data-pc='tickets']");
    var ps = q("[data-pc='price']");

    function calc(x, t, p) {
      var pf = t * (p * x.tp / 100 + x.tf);
      var pr = t * (p * x.pp / 100 + x.pf);
      return { a: x.a, pf: pf, pr: pr, tot: x.a + pf + pr };
    }

    function update() {
      var t = parseInt(ts.value, 10);
      var p = parseFloat(ps.value);
      q("[data-pc='ticket-count']").textContent = t.toLocaleString();
      q("[data-pc='ticket-price']").textContent = f(p);

      var takings = t * p;
      var takingsEl = q("[data-pc='takings']");
      if (takingsEl) {
        takingsEl.innerHTML = "\u00A3" + f(takings);
      }

      var a = calc(ch, t, p);
      var b = calc(co, t, p);

      var chAnnual = q("[data-pc='chobble-annual']");
      var chPlatform = q("[data-pc='chobble-platform']");
      var chProcessing = q("[data-pc='chobble-processing']");
      var chTotal = q("[data-pc='chobble-total']");
      var chPerTicket = q("[data-pc='chobble-per-ticket']");

      chAnnual.innerHTML = "\u00A3" + f(a.a);
      chPlatform.innerHTML = "\u00A3" + f(a.pf);
      chProcessing.innerHTML = "\u00A3" + f(a.pr);
      chTotal.innerHTML = "\u00A3" + f(a.tot);
      chPerTicket.innerHTML = t > 0 ? "\u00A3" + f(a.tot / t) : "\u2014";

      setZero(chAnnual, a.a);
      setZero(chPlatform, a.pf);
      setZero(chProcessing, a.pr);
      setZero(chTotal, a.tot);
      setZero(chPerTicket, t > 0 ? a.tot / t : -1);

      var chShare = q("[data-pc='chobble-share']");
      if (chShare) {
        chShare.innerHTML = "\u00A3" + f(takings - a.tot);
      }

      var compAnnual = q("[data-pc='comp-annual']");
      var compPlatform = q("[data-pc='comp-platform']");
      var compProcessing = q("[data-pc='comp-processing']");
      var compTotal = q("[data-pc='comp-total']");
      var compPerTicket = q("[data-pc='comp-per-ticket']");

      compAnnual.innerHTML = "\u00A3" + f(b.a);
      compPlatform.innerHTML = "\u00A3" + f(b.pf);
      compProcessing.innerHTML = "\u00A3" + f(b.pr);
      compTotal.innerHTML = "\u00A3" + f(b.tot);
      compPerTicket.innerHTML = t > 0 ? "\u00A3" + f(b.tot / t) : "\u2014";

      setZero(compAnnual, b.a);
      setZero(compPlatform, b.pf);
      setZero(compProcessing, b.pr);
      setZero(compTotal, b.tot);
      setZero(compPerTicket, t > 0 ? b.tot / t : -1);

      var coShare = q("[data-pc='comp-share']");
      if (coShare) {
        coShare.innerHTML = "\u00A3" + f(takings - b.tot);
      }

      var s = q("[data-pc='savings']");
      var d = b.tot - a.tot;
      s.className = "price-comparator__savings";
      if (d > 0.01) {
        s.innerHTML = "You save <strong>\u00A3" + f(d) + "/year</strong> with " + ch.n;
        s.classList.add("price-comparator__savings--positive");
      } else if (d < -0.01) {
        s.innerHTML = co.n + " is <strong>\u00A3" + f(Math.abs(d)) + "/year</strong> cheaper at this volume";
        s.classList.add("price-comparator__savings--negative");
      } else {
        s.innerHTML = "Both platforms cost about the same at this volume";
        s.classList.add("price-comparator__savings--neutral");
      }
    }

    ts.addEventListener("input", update);
    ps.addEventListener("input", update);
    update();
  }
})();
