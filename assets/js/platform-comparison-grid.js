(function () {
  var grids = document.querySelectorAll(".platform-grid");
  for (var i = 0; i < grids.length; i++) {
    initGrid(grids[i]);
  }

  function initGrid(el) {
    var platforms = JSON.parse(el.getAttribute("data-platforms"));

    var f = function (n) {
      return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    var q = function (sel) {
      return el.querySelector(sel);
    };

    var ts = q("[data-pg='tickets']");
    var ps = q("[data-pg='price']");
    var cardsEl = q("[data-pg='cards']");

    function calc(x, t, p) {
      var pf = t * (p * x.tp / 100 + x.tf);
      var pr = t * (p * x.pp / 100 + x.pf);
      var tot = x.a + pf + pr;
      return { tot: tot, share: t * p - tot };
    }

    function update() {
      var t = parseInt(ts.value, 10);
      var p = parseFloat(ps.value);
      var takings = t * p;

      q("[data-pg='ticket-count']").textContent = t.toLocaleString();
      q("[data-pg='ticket-price']").textContent = f(p);
      q("[data-pg='takings']").innerHTML = "\u00A3" + f(takings);

      var results = [];
      for (var i = 0; i < platforms.length; i++) {
        var x = platforms[i];
        var r = calc(x, t, p);
        results.push({
          name: x.n,
          key: x.k,
          highlight: x.highlight,
          totalCost: r.tot,
          share: r.share,
          costPerTicket: t > 0 ? r.tot / t : 0
        });
      }

      results.sort(function (a, b) {
        return a.totalCost - b.totalCost;
      });

      var best = results.length > 0 ? results[0].totalCost : 0;
      var html = "";
      for (var j = 0; j < results.length; j++) {
        var r = results[j];
        var cls = "platform-grid__card";
        if (r.highlight) cls += " platform-grid__card--highlight";
        if (r.totalCost <= best + 0.01) cls += " platform-grid__card--best";

        var linkMap = {
          "pretix_hosted": "/compared-to/pretix/",
          "pretix_selfhosted": "/compared-to/pretix/",
          "hi_events_selfhosted": "/compared-to/hi-events/",
          "chobble": ""
        };
        var link = r.key in linkMap
          ? linkMap[r.key]
          : "/compared-to/" + r.key.replace(/_/g, "-") + "/";

        html += '<div class="' + cls + '">';
        html += '<div class="platform-grid__name">' + r.name + '</div>';
        html += '<div class="platform-grid__share-label">You keep</div>';
        html += '<div class="platform-grid__share">\u00A3' + f(r.share) + '</div>';
        html += '<div class="platform-grid__cost">Fees: \u00A3' + f(r.totalCost) + '</div>';
        if (t > 0) {
          html += '<div class="platform-grid__per-ticket">\u00A3' + f(r.costPerTicket) + '/ticket</div>';
        }
        if (link) {
          html += '<a class="platform-grid__link" href="' + link + '">Compare &rarr;</a>';
        }
        html += '</div>';
      }
      cardsEl.innerHTML = html;
    }

    ts.addEventListener("input", update);
    ps.addEventListener("input", update);
    update();
  }
})();
