(function () {
  var el = document.getElementById("price-comparator");
  if (!el) return;
  var config = JSON.parse(el.getAttribute("data-config"));
  var ch = config.chobble;
  var co = config.competitor;

  var f = function (n) {
    return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  var ts = document.getElementById("pc-tickets");
  var ps = document.getElementById("pc-price");

  function calc(x, t, p) {
    var pf = t * (p * x.tp / 100 + x.tf);
    var pr = t * (p * x.pp / 100 + x.pf);
    return { a: x.a, pf: pf, pr: pr, tot: x.a + pf + pr };
  }

  function update() {
    var t = parseInt(ts.value, 10);
    var p = parseFloat(ps.value);
    document.getElementById("pc-ticket-count").textContent = t.toLocaleString();
    document.getElementById("pc-ticket-price").textContent = f(p);

    var a = calc(ch, t, p);
    var b = calc(co, t, p);
    var takings = t * p;

    document.getElementById("pc-takings").innerHTML = "\u00A3" + f(takings);

    document.getElementById("pc-chobble-annual").innerHTML = "\u00A3" + f(a.a);
    document.getElementById("pc-chobble-platform").innerHTML = "\u00A3" + f(a.pf);
    document.getElementById("pc-chobble-processing").innerHTML = "\u00A3" + f(a.pr);
    document.getElementById("pc-chobble-total").innerHTML = "\u00A3" + f(a.tot);
    document.getElementById("pc-chobble-per-ticket").innerHTML = t > 0 ? "\u00A3" + f(a.tot / t) : "\u2014";
    document.getElementById("pc-chobble-share").innerHTML = "\u00A3" + f(takings - a.tot);

    document.getElementById("pc-comp-annual").innerHTML = "\u00A3" + f(b.a);
    document.getElementById("pc-comp-platform").innerHTML = "\u00A3" + f(b.pf);
    document.getElementById("pc-comp-processing").innerHTML = "\u00A3" + f(b.pr);
    document.getElementById("pc-comp-total").innerHTML = "\u00A3" + f(b.tot);
    document.getElementById("pc-comp-per-ticket").innerHTML = t > 0 ? "\u00A3" + f(b.tot / t) : "\u2014";
    document.getElementById("pc-comp-share").innerHTML = "\u00A3" + f(takings - b.tot);

    var s = document.getElementById("pc-savings");
    var d = b.tot - a.tot;
    s.className = "price-comparator__savings";
    if (d > 0.01) {
      s.innerHTML = "You save <strong>\u00A3" + f(d) + "/year</strong> with Chobble Tickets";
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
})();
