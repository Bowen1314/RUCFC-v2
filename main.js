/* RUCFC — preview site behaviour: i18n, nav state, mobile menu, reveal on scroll. */
(function () {
  "use strict";

  var STORAGE_KEY = "rucfc-lang";

  var DICT = {
    en: {
      "meta.title": "RUCFC — Rutgers Chinese Finance Club",
      "a11y.skip": "Skip to content",
      "a11y.home": "RUCFC — home",
      "a11y.logo": "RUCFC logo",
      "a11y.seal": "RUCFC circular wordmark",
      "a11y.primary": "Primary",
      "a11y.lang": "Language",
      "a11y.menu": "Open menu",
      "a11y.menuClose": "Close menu",
      "a11y.channels": "Club channels",

      "brand.sub": "Rutgers Chinese Finance Club",
      "nav.club": "The Club",
      "nav.programs": "Programs",
      "nav.standard": "Standard",
      "nav.leadership": "Leadership",
      "nav.membership": "Membership",

      "hero.eyebrow": "Founding Cohort · Fall 2026",
      "hero.title": "Rigour. Conviction. Perspective.",
      "hero.lead": "A Rutgers finance collective at the nexus of global capital markets, technology, and the Greater China economy.",
      "hero.cta": "Request Membership Information",
      "hero.cta2": "Our Standard",
      "hero.seal": "Rutgers University–New Brunswick",
      "hero.t1": "Rigour.",
      "hero.t2": "Conviction.",
      "hero.t3": "Perspective.",
      "ticker.label": "Market prices",
      "ticker.live": "Markets",
      "club.statement": "Undergraduate finance, practiced at professional standard.",
      "club.capNY": "New York",
      "club.capSH": "Shanghai",
      "programs.kicker": "Three disciplines, one standard.",
      "footer.data": "Market data may be delayed · for reference only",

      "strip.v1": "Est. 2026",
      "strip.v2": "New Brunswick, NJ",
      "strip.v3": "Capital Markets",
      "strip.v4": "Technology",
      "strip.v5": "Greater China",

      "club.title": "The Club",
      "club.p1": "Rutgers Chinese Finance Club (RUCFC) is a finance collective at Rutgers University–New Brunswick, dedicated to the intersection of global capital markets, technology, and the Greater China economy.",
      "club.p2": "Founded in 2026 by a Finance + Computer Science student whose sell-side equity research covered the AI hardware supply chain, RUCFC is built on a single premise: undergraduate finance should be practiced at professional standard, not merely studied.",
      "club.quote": "Bridging Eastern and Western business cultures.",

      "programs.title": "Programs",
      "programs.t1": "Institutional-Grade Research",
      "programs.d1": "Sector deep-dives and equity theses built on sell-side research methodology — from supply-chain channel checks to valuation.",
      "programs.t2": "Professional Credentialing",
      "programs.d2": "Bloomberg Terminal, BMC, and ESG certification tracks, paired with AI-augmented analytical workflows.",
      "programs.t3": "Closed-Door Access",
      "programs.d3": "Off-record sessions with frontline practitioners, and a close-knit, high-calibre peer network.",

      "standard.title": "The Standard",
      "standard.intro": "We hold ourselves to the standard of the profession we intend to enter.",
      "standard.t1": "Rigour",
      "standard.d1": "Every view is supported by evidence, and every model can be defended line by line.",
      "standard.t2": "Conviction",
      "standard.d2": "We form independent theses and are prepared to be measured against them.",
      "standard.t3": "Contribution",
      "standard.d3": "Members are expected to give as much to the collective as they take from it.",
      "standard.note": "Founding members will shape the club's research agenda, standards, and culture from day one.",

      "leadership.title": "Leadership",
      "leadership.role": "Founder & President",
      "leadership.name": "Lucas (ZhiYao) Yan",
      "leadership.bio": "Lucas studies Finance and Computer Science at Rutgers ('29). In summer 2026 he served as an Equity Research Intern on the TMT Hardware team at Minsheng Securities in Shanghai, covering the China–US AI supply chain — conducting channel checks, supporting AIDC power-demand forecasting and server BOM cost analysis, and contributing to research reports and valuation models. He was selected for the Goldman Sachs 2026 Possibilities Series and EY CHARGE 2026.",
      "leadership.linkedin": "LinkedIn",
      "leadership.cv": "Credentials",
      "cv.o1": "Minsheng Securities",
      "cv.r1": "Equity Research Intern, TMT Hardware · 2026",
      "cv.o2": "Goldman Sachs",
      "cv.r2": "2026 Possibilities Series · Selected",
      "cv.o3": "EY",
      "cv.r3": "CHARGE 2026 · Selected",

      "membership.title": "Membership Enquiries",
      "membership.line": "We welcome conversations with students who share our standard.",
      "membership.cta": "Request Information",

      "footer.uni": "Rutgers University–New Brunswick",
      "footer.follow": "Channels",
      "footer.disclaimer": "An independent student organization at Rutgers University."
    },

    zh: {
      "meta.title": "RUCFC — 罗格斯华人金融俱乐部",
      "a11y.skip": "跳到正文",
      "a11y.home": "RUCFC — 首页",
      "a11y.logo": "RUCFC 标志",
      "a11y.seal": "RUCFC 圆形标志",
      "a11y.primary": "主导航",
      "a11y.lang": "语言",
      "a11y.menu": "打开菜单",
      "a11y.menuClose": "关闭菜单",
      "a11y.channels": "俱乐部渠道",

      "brand.sub": "罗格斯华人金融俱乐部",
      "nav.club": "关于我们",
      "nav.programs": "核心项目",
      "nav.standard": "标准",
      "nav.leadership": "领导团队",
      "nav.membership": "入会",

      "hero.eyebrow": "创始届 · 2026 秋",
      "hero.title": "以专业之心，研习资本。",
      "hero.lead": "立足罗格斯，聚焦全球资本市场、科技与大中华区经济交汇处的金融社群。",
      "hero.cta": "了解入会",
      "hero.cta2": "我们的标准",
      "hero.seal": "罗格斯大学新布朗斯维克校区",
      "hero.t1": "严谨。",
      "hero.t2": "定见。",
      "hero.t3": "视野。",
      "ticker.label": "股票行情",
      "ticker.live": "行情",
      "club.statement": "以专业标准，实践本科金融。",
      "club.capNY": "纽约",
      "club.capSH": "上海",
      "programs.kicker": "三项核心，一个标准。",
      "footer.data": "行情数据可能有延迟 · 仅供参考",

      "strip.v1": "创立于 2026",
      "strip.v2": "新泽西 新布朗斯维克",
      "strip.v3": "资本市场",
      "strip.v4": "科技",
      "strip.v5": "大中华区",

      "club.title": "关于我们",
      "club.p1": "罗格斯华人金融俱乐部（RUCFC）是罗格斯大学新布朗斯维克校区的金融社群，专注于全球资本市场、科技与大中华区经济的交汇。",
      "club.p2": "RUCFC 由一位金融与计算机双修、曾在卖方研究中覆盖 AI 硬件产业链的学生于 2026 年创立，秉持一个信念：本科阶段的金融，应以专业标准去实践，而不只是去学习。",
      "club.quote": "连接东西方商业文化。",

      "programs.title": "核心项目",
      "programs.t1": "机构级研究",
      "programs.d1": "以卖方研究方法论开展行业深度与个股研究——从产业链渠道调研到估值建模。",
      "programs.t2": "专业认证",
      "programs.d2": "Bloomberg 终端、BMC 与 ESG 认证路径，结合 AI 赋能的分析工作流。",
      "programs.t3": "闭门交流",
      "programs.d3": "与一线从业者的闭门交流，以及紧密而高水准的同侪网络。",

      "standard.title": "我们的标准",
      "standard.intro": "我们以所向往的行业标准要求自己。",
      "standard.t1": "严谨",
      "standard.d1": "每个观点都有依据，每个模型都经得起逐行推敲。",
      "standard.t2": "定见",
      "standard.d2": "我们独立形成判断，并愿意接受结果的检验。",
      "standard.t3": "贡献",
      "standard.d3": "每位成员对社群的付出，应与所得相当。",
      "standard.note": "创始届成员将从第一天起参与制定俱乐部的研究方向、标准与文化。",

      "leadership.title": "领导团队",
      "leadership.role": "创始人 · 社长",
      "leadership.name": "Lucas Yan（ZhiYao）",
      "leadership.bio": "罗格斯大学金融 + 计算机科学双修（2029 届）。2026 年夏任民生证券 TMT 硬件组行业研究实习生（上海），覆盖中美 AI 产业链，参与渠道调研、AIDC 电力需求测算、服务器 BOM 成本拆分，以及研究报告与估值模型的撰写。入选高盛 2026 Possibilities Series 与安永 EY CHARGE 2026 项目。",
      "leadership.linkedin": "LinkedIn",
      "leadership.cv": "履历",
      "cv.o1": "民生证券",
      "cv.r1": "TMT 硬件行业研究实习生 · 2026",
      "cv.o2": "高盛",
      "cv.r2": "2026 Possibilities Series · 入选",
      "cv.o3": "安永",
      "cv.r3": "EY CHARGE 2026 · 入选",

      "membership.title": "入会咨询",
      "membership.line": "欢迎认同我们标准的同学与我们联系。",
      "membership.cta": "了解详情",

      "footer.uni": "罗格斯大学新布朗斯维克校区",
      "footer.follow": "渠道",
      "footer.disclaimer": "罗格斯大学独立学生组织。"
    }
  };

  var root = document.documentElement;
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("site-menu");
  var currentLang = "en";

  /* ---------- i18n ---------- */
  function readLang() {
    try {
      var v = window.localStorage.getItem(STORAGE_KEY);
      return v === "zh" || v === "en" ? v : "en";
    } catch (e) {
      return "en";
    }
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* storage unavailable — ignore */ }
  }

  function t(key) {
    var table = DICT[currentLang] || DICT.en;
    return Object.prototype.hasOwnProperty.call(table, key) ? table[key] : DICT.en[key];
  }

  function applyLang(lang) {
    currentLang = DICT[lang] ? lang : "en";
    root.setAttribute("lang", currentLang === "zh" ? "zh-Hans" : "en");

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var val = t(nodes[i].getAttribute("data-i18n"));
      if (nodes[i].tagName === "TITLE") {
        if (typeof val === "string") nodes[i].textContent = val;
        continue;
      }
      // Both languages share one grid cell, so the box keeps the same size whichever is shown.
      var stack = nodes[i].firstElementChild;
      if (!stack || !stack.classList.contains("i18n")) {
        var key = nodes[i].getAttribute("data-i18n");
        stack = document.createElement("span");
        stack.className = "i18n";
        ["en", "zh"].forEach(function (l) {
          var s = document.createElement("span");
          s.setAttribute("lang", l === "zh" ? "zh-Hans" : "en");
          s.setAttribute("data-l", l);
          var v = Object.prototype.hasOwnProperty.call(DICT[l], key) ? DICT[l][key] : DICT.en[key];
          s.textContent = typeof v === "string" ? v : nodes[i].textContent;
          stack.appendChild(s);
        });
        nodes[i].textContent = "";
        nodes[i].appendChild(stack);
      }
      for (var c = 0; c < stack.children.length; c++) {
        var on = stack.children[c].getAttribute("data-l") === currentLang;
        stack.children[c].classList.toggle("is-off", !on);
        if (on) stack.children[c].removeAttribute("aria-hidden"); else stack.children[c].setAttribute("aria-hidden", "true");
      }
    }

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    for (var j = 0; j < attrNodes.length; j++) {
      var pairs = attrNodes[j].getAttribute("data-i18n-attr").split(";");
      for (var k = 0; k < pairs.length; k++) {
        var parts = pairs[k].split(":");
        if (parts.length !== 2) continue;
        var attrVal = t(parts[1].trim());
        if (typeof attrVal === "string") attrNodes[j].setAttribute(parts[0].trim(), attrVal);
      }
    }

    var btns = document.querySelectorAll(".lang__btn");
    for (var b = 0; b < btns.length; b++) {
      btns[b].setAttribute("aria-pressed", btns[b].getAttribute("data-lang") === currentLang ? "true" : "false");
    }
    syncMenuLabel();
    renderTickerNames();
    if (track) setSpeed();
  }

  /* ---------- Live ticker ----------
     quotes.json is rebuilt by the GitHub Action every few minutes. The page
     polls it and tweens each price from its old value to the new one. */
  var ticker = document.getElementById("ticker");
  var track = document.getElementById("ticker-track");
  var POLL_MS = 60000;
  var TWEEN_MS = 1600;
  var CUR = { USD: "$", HKD: "HK$", CNY: "¥" };
  var quotes = {};   // symbol -> { price, prev, cur, en, zh, shown }
  var order = [];

  function fmt(n) {
    return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function pct(price, prev) {
    return prev ? (price - prev) / prev * 100 : 0;
  }
  function paint(sym, price) {
    var q = quotes[sym];
    var p = pct(price, q.prev);
    var sign = p > 0.005 ? "+" : p < -0.005 ? "−" : "";
    var cls = p > 0.005 ? "is-up" : p < -0.005 ? "is-down" : "is-flat";
    var els = track.querySelectorAll('[data-s="' + sym + '"]');
    for (var i = 0; i < els.length; i++) {
      els[i].querySelector(".tk__px").textContent = (CUR[q.cur] || "") + fmt(price);
      var c = els[i].querySelector(".tk__chg");
      c.textContent = sign + Math.abs(p).toFixed(2) + "%";
      c.className = "tk__chg " + cls;
    }
  }
  function tween(sym, from, to) {
    var start = null;
    var q = quotes[sym];
    var els = track.querySelectorAll('[data-s="' + sym + '"]');
    var dir = to > from ? "flash-up" : "flash-down";
    for (var i = 0; i < els.length; i++) {
      els[i].classList.remove("flash-up", "flash-down");
      void els[i].offsetWidth;
      els[i].classList.add(dir);
    }
    function step(ts) {
      if (start === null) start = ts;
      var k = Math.min(1, (ts - start) / TWEEN_MS);
      var e = 1 - Math.pow(1 - k, 3);
      q.shown = from + (to - from) * e;
      paint(sym, q.shown);
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function itemHTML(sym) {
    return '<li class="tk" data-s="' + sym + '">' +
      '<img class="tk__logo" src="assets/tickers/' + sym + '.png" alt="" width="30" height="30" loading="lazy">' +
      '<span class="tk__name"></span><span class="tk__sym">' + sym.replace(/\.(HK|SS)$/, "") + '</span>' +
      '<span class="tk__px"></span><span class="tk__chg"></span></li>';
  }
  function renderTickerNames() {
    if (!track) return;
    var els = track.querySelectorAll(".tk");
    for (var i = 0; i < els.length; i++) {
      var q = quotes[els[i].getAttribute("data-s")];
      if (q) els[i].querySelector(".tk__name").textContent = currentLang === "zh" ? q.zh : q.en;
    }
  }
  function build() {
    var one = order.map(itemHTML).join("");
    track.innerHTML = one + one.replace(/<li class="tk"/g, '<li class="tk" aria-hidden="true"');
    renderTickerNames();
    for (var i = 0; i < order.length; i++) paint(order[i], quotes[order[i]].shown);
    ticker.hidden = false;
    setSpeed();
  }
  // Constant ~30px/s whatever the track length; scrollWidth forces layout, no frame needed.
  function setSpeed() {
    if (!track.firstChild) return;
    track.style.setProperty("--tick-dur", Math.max(60, track.scrollWidth / 2 / 30) + "s");
  }
  window.addEventListener("resize", function () { if (track) setSpeed(); }, { passive: true });

  function load() {
    return fetch("quotes.json?t=" + Date.now(), { cache: "no-store" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (data) {
        var list = data.quotes || [];
        if (!list.length) return;
        var fresh = !order.length;
        list.forEach(function (q) {
          var old = quotes[q.s];
          if (!old) {
            quotes[q.s] = { price: q.price, prev: q.prev, cur: q.cur, en: q.en, zh: q.zh, shown: q.price };
            return;
          }
          var from = old.shown;
          old.prev = q.prev;
          old.price = q.price;
          if (Math.abs(q.price - from) > 1e-9) tween(q.s, from, q.price);
        });
        if (fresh) {
          order = list.map(function (q) { return q.s; });
          build();
        }
      })
      .catch(function () { /* no quotes (e.g. offline) — the banner stays hidden */ });
  }

  if (ticker && track && window.fetch) {
    load();
    setInterval(function () { if (!document.hidden) load(); }, POLL_MS);
  }

  /* ---------- Mobile menu ---------- */
  function isOpen() {
    return toggle && toggle.getAttribute("aria-expanded") === "true";
  }

  function syncMenuLabel() {
    if (toggle) toggle.setAttribute("aria-label", t(isOpen() ? "a11y.menuClose" : "a11y.menu"));
  }

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
    syncMenuLabel();
  }

  if (toggle) {
    toggle.addEventListener("click", function () { setMenu(!isOpen()); });
  }
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) setMenu(false);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      setMenu(false);
      toggle.focus();
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 980 && isOpen()) setMenu(false);
  }, { passive: true });

  /* ---------- Language buttons ---------- */
  var langBtns = document.querySelectorAll(".lang__btn");
  for (var n = 0; n < langBtns.length; n++) {
    langBtns[n].addEventListener("click", function () {
      var lang = this.getAttribute("data-lang");
      applyLang(lang);
      saveLang(lang);
    });
  }

  /* ---------- Nav hairline on scroll ---------- */
  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    root.classList.add("js-motion");
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("is-in");
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    var items = document.querySelectorAll(".reveal");
    for (var r = 0; r < items.length; r++) io.observe(items[r]);
  }

  applyLang(readLang());
})();
