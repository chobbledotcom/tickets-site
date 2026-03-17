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

      q("[data-pc='chobble-annual']").innerHTML = "\u00A3" + f(a.a);
      q("[data-pc='chobble-platform']").innerHTML = "\u00A3" + f(a.pf);
      q("[data-pc='chobble-processing']").innerHTML = "\u00A3" + f(a.pr);
      q("[data-pc='chobble-total']").innerHTML = "\u00A3" + f(a.tot);
      q("[data-pc='chobble-per-ticket']").innerHTML = t > 0 ? "\u00A3" + f(a.tot / t) : "\u2014";

      var chShare = q("[data-pc='chobble-share']");
      if (chShare) {
        chShare.innerHTML = "\u00A3" + f(takings - a.tot);
      }

      q("[data-pc='comp-annual']").innerHTML = "\u00A3" + f(b.a);
      q("[data-pc='comp-platform']").innerHTML = "\u00A3" + f(b.pf);
      q("[data-pc='comp-processing']").innerHTML = "\u00A3" + f(b.pr);
      q("[data-pc='comp-total']").innerHTML = "\u00A3" + f(b.tot);
      q("[data-pc='comp-per-ticket']").innerHTML = t > 0 ? "\u00A3" + f(b.tot / t) : "\u2014";

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
