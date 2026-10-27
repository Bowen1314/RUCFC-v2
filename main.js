/* RCFC — preview site behaviour: i18n, nav state, mobile menu, reveal on scroll. */
(function () {
  "use strict";

  var STORAGE_KEY = "rucfc-lang";

  var DICT = {
    en: {
      "meta.title": "RCFC — Rutgers Chinese Finance Club",
      "a11y.skip": "Skip to content",
      "a11y.home": "RCFC — home",
      "a11y.logo": "RCFC logo",
      "a11y.seal": "RCFC circular wordmark",
      "a11y.primary": "Primary",
      "a11y.lang": "Language",
      "a11y.menu": "Open menu",
      "a11y.menuClose": "Close menu",
      "a11y.channels": "Club channels",

      "brand.sub": "Rutgers Chinese Finance Club",
      "nav.club": "The Club",
      "nav.programs": "Programs",
      "nav.standard": "Our Standards",
      "nav.leadership": "Leadership",
      "nav.membership": "Membership",

      "hero.eyebrow": "Founding Cohort · Fall 2026",
      "hero.title": "Rigour. Conviction. Perspective.",
      "hero.lead": "An undergraduate finance organization at Rutgers University, focused on global capital markets, technology-sector equities, and the Greater China economy.",
      "hero.cta": "Membership Enquiries",
      "hero.cta2": "Our Standards",
      "hero.seal": "Rutgers University–New Brunswick",
      "hero.t1": "Rigour.",
      "hero.t2": "Conviction.",
      "hero.t3": "Perspective.",
      "ticker.label": "Market prices",
      "ticker.live": "Markets",
      "club.statement": "Undergraduate finance, conducted to institutional standards.",
      "club.capNY": "New York",
      "club.capSH": "Shanghai",
      "programs.kicker": "Three practice areas. One standard.",
      "footer.data": "Market data may be delayed. For reference only.",

      "strip.v1": "Est. 2026",
      "strip.v2": "New Brunswick, NJ",
      "strip.v3": "Capital Markets",
      "strip.v4": "Technology",
      "strip.v5": "Greater China",

      "club.title": "The Club",
      "club.p1": "The Rutgers Chinese Finance Club (RCFC) is an undergraduate finance organization at Rutgers University–New Brunswick. Its work centres on global capital markets, technology-sector equities, and the macroeconomics of Greater China.",
      "club.p2": "RCFC was founded in 2026 by a Finance and Computer Science student with sell-side equity research experience covering the AI hardware supply chain. The club is organized around a single principle: undergraduate finance should be conducted to institutional standards, not studied in the abstract.",
      "club.quote": "A cross-border perspective on U.S. and Chinese capital markets.",

      "programs.title": "Programs",
      "programs.t1": "Equity Research",
      "programs.d1": "Sector initiations and single-name investment theses built on sell-side methodology: industry mapping, supply-chain channel checks, financial modelling, and DCF and trading-comparables valuation.",
      "programs.t2": "Professional Credentialing",
      "programs.d2": "Structured preparation for Bloomberg Market Concepts (BMC) and ESG certifications, alongside Bloomberg Terminal workflows and AI-assisted data analysis.",
      "programs.t3": "Closed-Door Sessions",
      "programs.d3": "Off-the-record discussions with industry practitioners, supported by a peer network held to the same professional standard.",

      "standard.title": "Our Standards",
      "standard.intro": "We apply the professional standards of the industry we intend to enter.",
      "standard.t1": "Rigour",
      "standard.d1": "Every view is evidence-based; every model is auditable line by line.",
      "standard.t2": "Conviction",
      "standard.d2": "We develop independent investment theses and are accountable for their outcomes.",
      "standard.t3": "Contribution",
      "standard.d3": "Each member contributes research and work product commensurate with what they draw from the club.",
      "standard.note": "Founding members will define the club's research agenda, analytical standards, and governance from inception.",

      "leadership.title": "Leadership",
      "leadership.role": "Founder & President",
      "leadership.name": "Lucas (ZhiYao) Yan",
      "leadership.bio": "Lucas is studying Finance and Computer Science at Rutgers University (Class of 2029). In summer 2026 he was an Equity Research Intern on the TMT Hardware team at Minsheng Securities in Shanghai, covering the U.S.–China AI hardware supply chain. His work included channel checks, AIDC power-demand forecasting, server bill-of-materials (BOM) cost analysis, and contributions to sector reports and valuation models. He was selected for the Goldman Sachs 2026 Possibilities Series and EY CHARGE 2026.",
      "leadership.linkedin": "LinkedIn",
      "leadership.cv": "Credentials",
      "cv.o1": "Minsheng Securities",
      "cv.r1": "Equity Research Intern, TMT Hardware · 2026",
      "cv.o2": "Goldman Sachs",
      "cv.r2": "2026 Possibilities Series · Selected",
      "cv.o3": "EY",
      "cv.r3": "CHARGE 2026 · Selected",

      "membership.title": "Membership Enquiries",
      "membership.line": "Students who share our standards are welcome to request further information.",
      "membership.cta": "Request Information",

      "footer.uni": "Rutgers University–New Brunswick",
      "footer.follow": "Official Channels",
      "footer.disclaimer": "An independent student organization at Rutgers University."
    },

    zh: {
      "meta.title": "RCFC — 罗格斯华人金融俱乐部",
      "a11y.skip": "跳到正文",
      "a11y.home": "RCFC — 首页",
      "a11y.logo": "RCFC 标志",
      "a11y.seal": "RCFC 圆形标志",
      "a11y.primary": "主导航",
      "a11y.lang": "语言",
      "a11y.menu": "打开菜单",
      "a11y.menuClose": "关闭菜单",
      "a11y.channels": "俱乐部渠道",

      "brand.sub": "罗格斯华人金融俱乐部",
      "nav.club": "关于我们",
      "nav.programs": "核心项目",
      "nav.standard": "准则",
      "nav.leadership": "领导团队",
      "nav.membership": "入会",

      "hero.eyebrow": "创始届 · 2026 年秋季",
      "hero.title": "严谨。定见。视野。",
      "hero.lead": "罗格斯大学本科金融组织，研究方向涵盖全球资本市场、科技行业股票与大中华区宏观经济。",
      "hero.cta": "入会咨询",
      "hero.cta2": "我们的准则",
      "hero.seal": "罗格斯大学新布朗斯维克校区",
      "hero.t1": "严谨。",
      "hero.t2": "定见。",
      "hero.t3": "视野。",
      "ticker.label": "股票行情",
      "ticker.live": "行情",
      "club.statement": "以机构标准，开展本科金融研究。",
      "club.capNY": "纽约",
      "club.capSH": "上海",
      "programs.kicker": "三大业务方向，统一专业标准。",
      "footer.data": "行情数据或有延迟，仅供参考。",

      "strip.v1": "创立于 2026",
      "strip.v2": "新泽西州 新布朗斯维克",
      "strip.v3": "资本市场",
      "strip.v4": "科技行业",
      "strip.v5": "大中华区",

      "club.title": "关于我们",
      "club.p1": "罗格斯华人金融俱乐部（RCFC）是罗格斯大学新布朗斯维克校区的本科金融组织，研究方向涵盖全球资本市场、科技行业股票与大中华区宏观经济。",
      "club.p2": "RCFC 创立于 2026 年。创始人主修金融与计算机科学，具备覆盖 AI 硬件产业链的卖方行业研究经历。俱乐部的立足点在于：本科阶段的金融训练应对标机构标准，而非停留于理论学习。",
      "club.quote": "立足中美两地资本市场的跨境视角。",

      "programs.title": "核心项目",
      "programs.t1": "行业与个股研究",
      "programs.d1": "依托卖方研究方法论，撰写行业首次覆盖与个股投资逻辑报告：产业链梳理、渠道调研、财务建模，以及 DCF 与可比公司估值。",
      "programs.t2": "专业资质认证",
      "programs.d2": "系统备考 Bloomberg Market Concepts（BMC）与 ESG 认证，配合 Bloomberg 终端实操及 AI 辅助的数据分析流程。",
      "programs.t3": "闭门研讨",
      "programs.d3": "与业内从业者开展非公开闭门研讨，并依托以专业标准为共识的同侪网络。",

      "standard.title": "我们的准则",
      "standard.intro": "我们以目标行业的职业标准要求自身。",
      "standard.t1": "严谨",
      "standard.d1": "所有观点均有证据支撑，所有模型均可逐行审阅。",
      "standard.t2": "定见",
      "standard.d2": "独立构建投资逻辑，并对研判结果承担责任。",
      "standard.t3": "贡献",
      "standard.d3": "每位成员以相应的研究产出回馈俱乐部，贡献与所得相匹配。",
      "standard.note": "创始届成员将自创立之初参与制定俱乐部的研究议程、分析标准与治理架构。",

      "leadership.title": "领导团队",
      "leadership.role": "创始人兼社长",
      "leadership.name": "Lucas Yan（ZhiYao）",
      "leadership.bio": "就读于罗格斯大学，主修金融与计算机科学（2029 届）。2026 年夏季任民生证券 TMT 硬件组行业研究实习生（上海），覆盖中美 AI 硬件产业链，参与渠道调研、AIDC 电力需求测算、服务器 BOM 成本拆分，以及行业研究报告与估值模型的撰写。入选高盛 2026 Possibilities Series 及安永 EY CHARGE 2026 项目。",
      "leadership.linkedin": "LinkedIn",
      "leadership.cv": "履历",
      "cv.o1": "民生证券",
      "cv.r1": "TMT 硬件行业研究实习生 · 2026",
      "cv.o2": "高盛",
      "cv.r2": "2026 Possibilities Series · 入选",
      "cv.o3": "安永",
      "cv.r3": "EY CHARGE 2026 · 入选",

      "membership.title": "入会咨询",
      "membership.line": "认同本会准则的同学，欢迎索取入会相关信息。",
      "membership.cta": "索取信息",

      "footer.uni": "罗格斯大学新布朗斯维克校区",
      "footer.follow": "官方渠道",
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
        // Single-line labels (inline, or items in a flex row) only show the active language;
        // reserving the other language's width there leaves visible gaps.
        var host = nodes[i];
        if (/^inline/.test(getComputedStyle(host).display) || (!/^(P|H\d)$/.test(host.tagName) && /flex/.test(getComputedStyle(host.parentElement).display))) {
          stack.classList.add("i18n--inline");
        }
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
  var LANG_FADE_MS = 180;
  var langTimer;
  var langBtns = document.querySelectorAll(".lang__btn");
  for (var n = 0; n < langBtns.length; n++) {
    langBtns[n].addEventListener("click", function (e) {
      var lang = this.getAttribute("data-lang");
      if (e.detail > 0) this.blur(); // mouse/touch: no lingering focus ring; keyboard keeps it
      saveLang(lang);
      if (lang === currentLang) return;
      // Single-line labels fade out, swap, fade back in; text blocks crossfade in place (CSS).
      clearTimeout(langTimer);
      root.classList.add("lang-out");
      langTimer = setTimeout(function () {
        applyLang(lang);
        langTimer = setTimeout(function () { root.classList.remove("lang-out"); }, 30);
      }, LANG_FADE_MS);
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
        if (entries[i].isIntersecting && !(root.classList.contains("intro") && entries[i].target.closest(".hero"))) {
          entries[i].target.classList.add("is-in");
          io.unobserve(entries[i].target);
        }
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    var items = document.querySelectorAll(".reveal");
    for (var r = 0; r < items.length; r++) io.observe(items[r]);
  }

  /* ---------- Opening shot ---------- */
  // <head> adds .intro on every load: the city starts zoomed in,
  // then pulls back into the page; any input skips straight to a quick version.
  if (root.classList.contains("intro")) {
    var INTRO_HOLD_MS = 350;
    var INPUTS = ["wheel", "touchstart", "keydown", "pointerdown"];
    var introDone = false;
    var endIntro = function (e) {
      if (introDone) return;
      introDone = true;
      var fast = !!(e && e.type);
      root.classList.add("intro-run", "intro-played");
      if (fast) root.classList.add("intro-fast");
      root.classList.remove("intro");
      var heroItems = document.querySelectorAll(".hero .reveal");
      for (var h = 0; h < heroItems.length; h++) {
        heroItems[h].style.transitionDelay = (fast ? 0.1 + h * 0.08 : 1.7 + h * 0.2) + "s";
        heroItems[h].classList.add("is-in");
        if (io) io.unobserve(heroItems[h]);
      }
      INPUTS.forEach(function (ev) { window.removeEventListener(ev, endIntro); });
      setTimeout(function () {
        root.classList.remove("intro-run", "intro-fast");
        for (var h = 0; h < heroItems.length; h++) heroItems[h].style.transitionDelay = "";
      }, fast ? 1500 : 4200);
    };
    INPUTS.forEach(function (ev) { window.addEventListener(ev, endIntro, { passive: true }); });
    // Start once the photo is ready (it is preloaded), but never wait more than 1.2s for it.
    var heroImg = document.querySelector(".hero__media img");
    var startHold = function () { setTimeout(endIntro, INTRO_HOLD_MS); };
    if (!heroImg || heroImg.complete) startHold();
    else {
      var held = false;
      var once = function () { if (!held) { held = true; startHold(); } };
      heroImg.addEventListener("load", once);
      heroImg.addEventListener("error", once);
      setTimeout(once, 1200);
    }
  }

  applyLang(readLang());
})();
