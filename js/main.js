/* ===== منار نصر — منطق الموقع ===== */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var html = document.documentElement;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) html.classList.add("calm");

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function T(o, raw) {
    if (o == null) return "";
    if (typeof o === "string") return raw ? o : esc(o);
    var ar = raw ? o.ar : esc(o.ar), en = raw ? o.en : esc(o.en);
    if (ar === en) return ar;
    return '<span class="t-ar">' + ar + '</span><span class="t-en">' + en + "</span>";
  }
  function TT(ar, en) { return T({ ar: ar, en: en }); }
  function lang() { return html.getAttribute("data-lang") || "ar"; }
  // تتبع Microsoft Clarity: بيسجّل اللي الزائر عمله (مجال فتحه، دراسة حالة، واتساب...)
  function track(name, val) { try { if (window.clarity) { window.clarity("event", name); if (val) window.clarity("set", name, String(val)); } } catch (e) {} }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function indBySlug(s) { for (var i = 0; i < INDUSTRIES.length; i++) if (INDUSTRIES[i].slug === s) return INDUSTRIES[i]; return null; }
  function industryOf(f) { for (var i = 0; i < INDUSTRIES.length; i++) if (INDUSTRIES[i].filters.indexOf(f) > -1) return INDUSTRIES[i]; return null; }
  function workHash(f) { var ind = industryOf(f); return ind ? "#work-" + ind.slug + "--" + f : "#creative"; }
  // شغل البراند بالتصنيف (كامبين رمضان بيظهر تحت دراسة حالة يُدنين)
  function worksOf(f) { return WORKS.filter(function (w) { return w.categories === f; }); }
  function nameOf(f) { return TT(FILTERS[f].title, BRAND_META[f].en); }
  // موبايل؟ (نفس نقطة الـ CSS)
  var mq = window.matchMedia ? matchMedia("(max-width:720px)") : { matches: false };
  function isMob() { return mq.matches; }
  // طيارة ورق بدل أي سهم: fwd = لقدّام (مع اتجاه القراءة)، back = لورا، up، down
  function plane(dir) { return '<svg class="pl-ic' + (dir ? " pl-" + dir : "") + '" viewBox="-20 -14 40 28" aria-hidden="true"><use href="#plane"/></svg>'; }
  function shortName(f) { for (var i = 0; i < PARTNERS.length; i++) if (PARTNERS[i].f === f) return T(PARTNERS[i].name); return T(BRAND_META[f].en); }

  var ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.25-.12-1.47-.72-1.7-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06a6.7 6.7 0 0 1-3.3-2.9c-.25-.43.25-.4.71-1.33.08-.16.04-.3-.02-.43l-.76-1.83c-.2-.48-.4-.41-.56-.42h-.48a.92.92 0 0 0-.66.31 2.8 2.8 0 0 0-.87 2.07 4.85 4.85 0 0 0 1.02 2.58 11.1 11.1 0 0 0 4.25 3.76c1.58.68 2.2.74 2.99.62.48-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.23-.17-.48-.29z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6.3c0-.8.2-1.3 1.4-1.3H17V2h-2.6C11.3 2 10.4 3.6 10.4 6v2H8v3h2.4v11H14V11h2.7l.4-3z"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v.1A3 3 0 0 0 4.6 9 3 3 0 0 0 5 14.6 3 3 0 0 0 9.5 19V2zM14.5 2A2.5 2.5 0 0 1 17 4.5v.1A3 3 0 0 1 19.4 9a3 3 0 0 1-.4 5.6 3 3 0 0 1-4.5 4.4V2z"/></svg>',
    trend: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M3 3v18h18"/><path d="M8 17v-5M13 17V8M18 17v-9"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    back: '<svg class="pl-ic pl-back" viewBox="-20 -14 40 28" aria-hidden="true"><use href="#plane"/></svg>',
    prev: '<svg class="pl-ic pl-back" viewBox="-20 -14 40 28" aria-hidden="true"><use href="#plane"/></svg>',
    next: '<svg class="pl-ic pl-fwd" viewBox="-20 -14 40 28" aria-hidden="true"><use href="#plane"/></svg>'
  };

  /* ---------- اللغة ---------- */
  function applyLang(l) {
    html.setAttribute("data-lang", l);
    html.setAttribute("lang", l);
    html.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
    $$("[data-ph-ar]").forEach(function (el) { el.placeholder = el.getAttribute("data-ph-" + l); });
    document.dispatchEvent(new CustomEvent("langchange"));
  }
  applyLang(store("mn-lang") === "en" ? "en" : "ar");
  $("#lang").addEventListener("click", function () { var l = lang() === "ar" ? "en" : "ar"; store("mn-lang", l); applyLang(l); track("lang_" + l); });

  /* ---------- الشريط العلوي + القائمة ---------- */
  var topbar = $("#topbar"), nav = $("#nav"), menu = $("#menu");
  function onScroll() { topbar.classList.toggle("solid", scrollY > 20); }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  function closeMenu() { nav.classList.remove("open"); menu.setAttribute("aria-expanded", "false"); }
  menu.addEventListener("click", function () { var o = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", o ? "true" : "false"); });
  function closeSubs(except) { $$(".nv.open", nav).forEach(function (n) { if (n !== except) { n.classList.remove("open"); var c = $(".caret", n); if (c) c.setAttribute("aria-expanded", "false"); } }); }
  nav.addEventListener("click", function (e) {
    var c = e.target.closest(".caret");
    if (c) { var nv = c.parentNode, o = nv.classList.toggle("open"); c.setAttribute("aria-expanded", o ? "true" : "false"); closeSubs(nv); return; }
    if (e.target.closest("a")) { closeMenu(); closeSubs(); if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); }
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".nv")) closeSubs(); });
  document.addEventListener("click", function (e) { if (nav.classList.contains("open") && !e.target.closest(".topbar")) closeMenu(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); closeSubs(); } });

  /* ---------- الظهور ---------- */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px 60px 0px", threshold: 0 }) : null;
  // جوه صفوف السحب على الموبايل العناصر بتظهر على طول (من غير ما تستنى تدخل الشاشة)
  var ROWS = ".posts,.harvest,.stamps-grid,.why-grid,.steps,.case-steps,.camp-work";
  function observe(root) { $$(".rv,.step,.hop,.vbars,.stampin,.flyin,.env,.eq,.flags,.map-card", root).forEach(function (el) { if (io && !reduce && !(isMob() && el.closest(ROWS))) io.observe(el); else el.classList.add("in"); }); }

  /* ---------- توست + نسخ ---------- */
  var toastT;
  function toast(msg) { var t = $("#toast"); t.innerHTML = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove("show"); }, 2200); }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-copy]"); if (!b) return;
    var v = b.getAttribute("data-copy"), done = function () { toast(TT("اتنسخ ✓", "Copied ✓")); };
    if (navigator.clipboard) navigator.clipboard.writeText(v).then(done, done); else done();
  });

  /* ---------- التكبير ---------- */
  var LB = { list: [], i: 0 }, lb = $("#lb");
  function lbShow() {
    var it = LB.list[LB.i]; if (!it) return;
    $("#lb-img").src = it.src; $("#lb-img").alt = it.alt || "";
    $("#lb-cap").textContent = it.alt || "";
    var a = $("#lb-link"); if (it.link) { a.href = it.link; a.hidden = false; } else a.hidden = true;
    var multi = LB.list.length > 1; $("#lb-prev").hidden = !multi; $("#lb-next").hidden = !multi;
  }
  function openLB(list, i) { LB.list = list; LB.i = i || 0; lbShow(); if (lb.showModal) { if (!lb.open) lb.showModal(); } else lb.setAttribute("open", ""); }
  function lbStep(d) { if (LB.list.length < 2) return; LB.i = (LB.i + d + LB.list.length) % LB.list.length; lbShow(); }
  $("#lb-x").addEventListener("click", function () { lb.close(); });
  $("#lb-prev").addEventListener("click", function () { lbStep(-1); });
  $("#lb-next").addEventListener("click", function () { lbStep(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb-in")) lb.close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.open) return;
    if (e.key === "ArrowLeft") lbStep(lang() === "ar" ? 1 : -1);
    if (e.key === "ArrowRight") lbStep(lang() === "ar" ? -1 : 1);
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lb]"); if (!b) return;
    var key = b.getAttribute("data-lb"), all = $$('[data-lb="' + key + '"]');
    openLB(all.map(function (x) { return { src: x.getAttribute("data-src"), alt: x.getAttribute("data-alt"), link: x.getAttribute("data-link") }; }), all.indexOf(b));
  });

  /* ---------- السوشيال (طوابع) ---------- */
  var SOC = [
    ["whatsapp", "https://wa.me/" + CONTACT.whatsapp, "var(--c-green)", "WhatsApp", CONTACT.phone],
    ["mail", "https://mail.google.com/mail/?view=cm&fs=1&to=" + CONTACT.email, "var(--c-red)", "Email", CONTACT.email],
    ["linkedin", CONTACT.linkedin, "var(--c-sky)", "LinkedIn", "Manar Nasr"],
    ["facebook", CONTACT.facebook, "var(--c-lilac)", "Facebook", "Manar Nasr"]
  ];
  var PP = '<svg class="pp" viewBox="0 0 72 52" aria-hidden="true"><path class="pp-b" d="M2 22 70 2 44 50 32 32Z"/><path class="pp-f" d="M32 32 70 2 26 46Z"/></svg>';
  function socHtml(s, i) { return '<a class="soc" href="' + s[1] + '" target="_blank" rel="noopener" aria-label="' + s[3] + '" style="--c:' + s[2] + ";--i:" + (i || 0) + '">' + PP + '<span class="ic">' + ICONS[s[0]] + "</span></a>"; }
  $$("[data-socials]").forEach(function (box) { box.innerHTML = SOC.map(socHtml).join(""); });
  $("#direct-list").innerHTML = SOC.map(function (s) {
    return '<a class="dl-item" href="' + s[1] + '" target="_blank" rel="noopener"><span class="soc" style="--c:' + s[2] + '">' + PP + '<span class="ic">' + ICONS[s[0]] + "</span></span><span><b>" + s[3] + "</b><small>" + esc(s[4]) + "</small></span></a>";
  }).join("");

  /* ---------- كوفرفلو ---------- */
  function coverflow(stage, items, opts) {
    var cur = opts.start || 0, n = items.length;
    function layout() {
      var sp = opts.spacing(), dir = lang() === "ar" ? -1 : 1, max = opts.max || 3;
      items.forEach(function (el, i) {
        var t = i - cur;
        if (opts.loop !== false) { if (t > n / 2) t -= n; if (t < -n / 2) t += n; }
        var a = Math.abs(t), on = t === 0;
        el.classList.toggle("on", on);
        el.style.visibility = a > max ? "hidden" : "visible";
        var sc = on ? 1 : Math.max(0.45, (opts.s0 || 0.72) - a * 0.1);
        el.style.transform = "translateX(" + (dir * t * sp) + "px) scale(" + sc + ") rotateY(" + (dir * t * -10) + "deg)";
        el.style.opacity = on ? 1 : Math.max(0.15, 0.6 - a * 0.15);
        el.style.zIndex = 10 - a;
        el.setAttribute("aria-hidden", on ? "false" : "true");
        el.tabIndex = on ? 0 : -1;
      });
      if (opts.onChange) opts.onChange(cur);
    }
    function go(i) { cur = (i + n) % n; layout(); }
    var x0 = null;
    stage.addEventListener("pointerdown", function (e) { x0 = e.clientX; });
    stage.addEventListener("pointerup", function (e) {
      if (x0 == null) return; var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 40) { var d = dx < 0 ? 1 : -1; if (lang() === "ar") d = -d; go(cur + d); stage._swiped = Date.now(); }
    });
    stage.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") go(cur + (lang() === "ar" ? 1 : -1));
      if (e.key === "ArrowRight") go(cur + (lang() === "ar" ? -1 : 1));
    });
    document.addEventListener("langchange", layout);
    addEventListener("resize", layout);
    layout();
    return { go: go, get cur() { return cur; } };
  }

  /* ---------- صفوف السحب على الموبايل: سهمين + عدّاد ---------- */
  function attachSwipe(box) {
    if (!box || box._sw) return; box._sw = true;
    var ctl = document.createElement("div"); ctl.className = "swipe-ctl";
    ctl.innerHTML = '<button type="button" class="arrow prev" aria-label="' + (lang() === "ar" ? "اللي قبله" : "Previous") + '"></button><span class="sw-c"><svg viewBox="-20 -14 40 28" aria-hidden="true"><use href="#plane"/></svg><b>1</b><span>/</span><i>1</i></span><button type="button" class="arrow next" aria-label="' + (lang() === "ar" ? "اللي بعده" : "Next") + '"></button>';
    box.parentNode.insertBefore(ctl, box.nextSibling);
    var pv = ctl.children[0], nx = ctl.children[2], cur = $("b", ctl), tot = $("i", ctl);
    function items() { return [].filter.call(box.children, function (c) { return c.offsetParent !== null && !c.classList.contains("hop"); }); }
    function near() {
      var it = items(), max = box.scrollWidth - box.clientWidth, sl = Math.abs(box.scrollLeft);
      if (sl < 4) return 0;
      if (sl >= max - 4) return it.length - 1;
      var r = box.getBoundingClientRect(), mid = r.left + r.width / 2, best = 0, bd = 1e9;
      it.forEach(function (f, i) { var b = f.getBoundingClientRect(), d = Math.abs(b.left + b.width / 2 - mid); if (d < bd) { bd = d; best = i; } });
      return best;
    }
    function upd() { var it = items(); if (!it.length) return; var c = near(); cur.textContent = c + 1; tot.textContent = it.length; pv.disabled = c <= 0; nx.disabled = c >= it.length - 1; }
    function to(i) { var it = items(); i = Math.max(0, Math.min(it.length - 1, i)); var f = it[i]; if (!f) return; var tr = box.getBoundingClientRect(), fr = f.getBoundingClientRect(); box.scrollBy({ left: (fr.left + fr.width / 2) - (tr.left + tr.width / 2), behavior: reduce ? "auto" : "smooth" }); }
    pv.addEventListener("click", function () { to(near() - 1); });
    nx.addEventListener("click", function () { to(near() + 1); });
    box.addEventListener("scroll", function () { requestAnimationFrame(upd); }, { passive: true });
    addEventListener("resize", upd);
    addEventListener("mn-route", function () { setTimeout(upd, 150); });
    setTimeout(upd, 60);
  }

  /* =====================================================================
     الصفحة الرئيسية
     ===================================================================== */
  // ---- الفهرس ----
  var TOC = [
    ["🏠", "المقدمة", "Introduction", "home"], ["📖", "مين أنا", "About me", "about"], ["🧭", "رحلتي بين الأسواق", "Markets journey", "journey"],
    ["✉️", "خدماتي", "Services", "services"], ["🤝", "شركاء الرحلة", "Journey partners", "partners"], ["📊", "Case Studies", "Case Studies", "cases"],
    ["🗺️", "نماذج أعمالي", "Work samples", "creative"], ["💡", "ليه تختارني", "Why me", "why"], ["📍", "طريقة شغلي", "How I work", "process"],
    ["💬", "قالوا عني", "Testimonials", "reviews"], ["🍃", "ثمار المغامرة", "Results", "harvest"], ["📬", "صندوق البريد", "Mailbox", "contact"]
  ];
  $("#toc").innerHTML = TOC.map(function (r, i) {
    return '<li style="--c:' + INK[i % INK.length] + '"><a href="#' + r[3] + '"><span class="n">' + (i + 1) + '</span><span class="e">' + r[0] + '</span><span class="tt">' + TT(r[1], r[2]) + '</span><span class="ln"></span>' + plane("fwd") + "</a></li>";
  }).join("");

  // ---- خدماتي ----
  $("#services-grid").innerHTML = SERVICES.map(function (s, i) {
    return '<div class="svc stampin" style="--c:' + INK[i % INK.length] + ";--d:" + (i * 0.035).toFixed(2) + "s;--r:" + (i % 2 ? 1.5 : -1.5) + 'deg"><div class="svc-in"><span class="e">' + s[0] + "</span><b>" + TT(s[1], s[2]) + "</b><small>" + s[2] + "</small></div></div>";
  }).join("");

  // ---- شركاء الرحلة (على الموبايل هي نفسها "نماذج أعمالي") ----
  (function partners() {
    var flow = $("#flow");
    flow.innerHTML = PARTNERS.map(function (p, i) {
      var inner = p.icon ? '<div class="medal ico"><span>' + p.icon + "</span></div>" : '<div class="medal"><img src="' + p.logo + '" alt="" loading="lazy"></div>';
      return '<button type="button" class="flow-item' + (p.f ? "" : " solo") + '" data-i="' + i + '" aria-label="' + esc(typeof p.name === "string" ? p.name : p.name.ar) + '">' + inner + "</button>";
    }).join("");
    var items = $$(".flow-item", flow), dots = $("#flow-dots");
    dots.innerHTML = PARTNERS.map(function (p, i) { return '<button type="button" aria-label="' + (i + 1) + '"></button>'; }).join("");
    var dotEls = $$("button", dots), go = $("#flow-go"), solo = $("#flow-solo");
    function setSize() { flow.parentNode.style.setProperty("--msz", innerWidth < 720 ? "120px" : "170px"); }
    setSize(); addEventListener("resize", setSize);
    var start = 0; PARTNERS.forEach(function (p, i) { if (p.f === "papermints") start = i; });
    var cf = coverflow(flow, items, {
      start: start, spacing: function () { return innerWidth < 720 ? 74 : 150; }, max: innerWidth < 720 ? 2 : 3,
      onChange: function (c) {
        var p = PARTNERS[c];
        $("#flow-name").innerHTML = T(p.name);
        $("#flow-hint").innerHTML = p.f ? TT("اضغط على اللوجو أو الزرار، وشوف شغلي معاه", "Tap the logo or the button to see my work with them") : "&nbsp;";
        if (p.f) {
          go.hidden = false; solo.hidden = true; go.href = workHash(p.f);
          go.innerHTML = TT("شوف شغلي مع ", "See my work with ") + T(p.name) + plane("fwd");
        } else {
          go.hidden = true; solo.hidden = false;
          solo.innerHTML = TT("شريك في الرحلة 🤝 شغلنا سوا مش معروض هنا", "A journey partner 🤝 our work together isn't shown here");
        }
        dotEls.forEach(function (d, i) { d.classList.toggle("on", i === c); });
      }
    });
    items.forEach(function (el, i) {
      el.addEventListener("click", function () {
        if (flow._swiped && Date.now() - flow._swiped < 300) return;
        if (cf.cur === i && PARTNERS[i].f) navTo(workHash(PARTNERS[i].f));
        else cf.go(i);
      });
    });
    // الطيارتين: اليمين = اللي قبله، الشمال = اللي بعده (بيتعكسوا مع الإنجليزي)
    $("#flow-prev").addEventListener("click", function () { cf.go(cf.cur - 1); });
    $("#flow-next").addEventListener("click", function () { cf.go(cf.cur + 1); });
    dotEls.forEach(function (d, i) { d.addEventListener("click", function () { cf.go(i); }); });
  })();

  // ---- Case Studies ----
  var CASE_KEYS = Object.keys(CASES).sort(function (a, b) { return CASES[a].no - CASES[b].no; });
  function caseHtml(f) {
    var C = CASES[f], F = FILTERS[f], M = BRAND_META[f], h = [];
    h.push('<article class="case" id="case-' + f + '" role="tabpanel" style="--c:' + M.color + '">');
    h.push('<div class="case-head"><div class="lg">' + (F.logo ? '<img src="' + F.logo + '" alt="">' : "") + '</div><div><span class="case-no">Case Study N.' + C.no + "</span><h3>" + shortName(f) + '</h3><div class="meta">' +
      C.meta.map(function (m) { return "<span>" + T(m) + "</span>"; }).join("") + '</div></div><div class="case-acts">' + (WORKS.some(function (w) { return w.categories === "ramadan" && w.brand === f; })
      ? '<a class="btn red big nudge" href="' + workHash(f) + '">' + TT("شوف نماذج شغل برا الكامبين", "See work beyond the campaign") + plane("fwd") + '</a><a class="btn big nudge alt" href="#camp-' + f + '">' + TT("انزل وشوف محتوى الكامبين", "Scroll to the campaign content") + plane("down") + "</a>"
      : '<a class="btn red big nudge" href="' + workHash(f) + '">' + TT("شوف نماذج الشغل", "See the work") + plane("fwd") + "</a>") +
      (C.link ? '<a class="btn sm" href="' + C.link + '" target="_blank" rel="noopener">' + ICONS.ext + TT("صفحة البراند", "Brand page") + "</a>" : "") + "</div></div>");
    h.push('<div class="case-steps">' + C.steps.map(function (s) {
      var mix = s.mix ? '<div class="mix">' + s.mix.map(function (m) { return '<div class="mix-row"><span>' + TT(m[0], m[1]) + '</span><div class="bar"><i style="width:' + m[2] + '%"></i></div><b>' + m[2] + "%</b></div>"; }).join("") + "</div>" : "";
      var pts = s.pts ? '<ul class="pts sh-t">' + s.pts.ar.map(function (x, k) { return "<li>" + TT(x, s.pts.en[k]) + "</li>"; }).join("") + "</ul>" : "";
      return '<div class="cstep' + (s.res ? " res" : "") + '"><span class="node">' + s.i + "</span><h4>" + T(s.t) + '</h4><p class="' + (pts ? "lg-t" : "") + '">' + T(s.p) + "</p>" + pts + mix + "</div>";
    }).join("") + "</div>");
    h.push('<div class="band" style="--n:' + C.band.length + '">' + C.band.map(function (b) {
      return '<div class="' + (b.hl ? "hl" : "") + '"><b class="ltr">' + b.b + "</b><span>" + T(b.s) + "</span>" + (b.m ? "<small>" + T(b.m) + "</small>" : "") + "</div>";
    }).join("") + "</div>");
    var ex = [];
    if (C.ring) {
      var c = 2 * Math.PI * 50, off = c * (1 - C.ring.pct / 100);
      ex.push('<div class="xcard ring-card"><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="#efe2cf" stroke-width="12"/><circle cx="60" cy="60" r="50" fill="none" stroke="' + M.color + '" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 60 60)"/><text x="60" y="68" text-anchor="middle" font-size="26" font-weight="700" fill="#2a2342" font-family="El Messiri,sans-serif">' + C.ring.pct + "%</text></svg><div><h4>" + T(C.ring.t) + "</h4><p>" + T(C.ring.p) + "</p></div></div>");
    }
    if (C.bars) {
      ex.push('<div class="xcard"><h4>' + T(C.bars.t) + "</h4><p>" + T(C.bars.s) + '</p><div class="vbars">' + C.bars.items.map(function (b) {
        return "<div><b>" + b[0] + '</b><i style="--h:' + b[1] + '%"></i><span>' + TT(b[2], b[3]) + "</span></div>";
      }).join("") + "</div></div>");
    }
    if (C.camp) {
      ex.push('<div class="xcard camp"><h4>🌙 ' + T(C.camp.t) + "</h4><dl>" + C.camp.rows.map(function (r) { return "<dt>" + T(r[0]) + '</dt><dd><span class="lg-t">' + T(r[1]) + "</span>" + (r[2] ? '<span class="sh-t">' + T(r[2]) + "</span>" : "") + "</dd>"; }).join("") + "</dl></div>");
    }
    if (ex.length) h.push('<div class="extras">' + ex.join("") + "</div>");
    if (C.proof) {
      h.push('<div class="proof">' + C.proof.map(function (p) {
        return '<figure><button type="button" data-lb="proof-' + f + '" data-src="' + p.img + '" data-alt="' + esc(p.s.ar) + '" aria-label="كبّر"><img src="' + p.img + '" alt="" loading="lazy"></button><figcaption><b>' + T(p.b) + "</b> " + T(p.d) + "<small>" + T(p.s) + "</small></figcaption></figure>";
      }).join("") + "</div>");
    }
    var camp = WORKS.filter(function (w) { return w.categories === "ramadan" && w.brand === f; });
    if (camp.length) {
      h.push('<div class="camp-work" id="camp-' + f + '"><div class="grp-label"><span>' + TT(GROUPS.ramadan.name, "Ramadan campaign work: Follow Her Example") + '</span></div><div class="posts">' + camp.map(function (w, i) { return postHtml(w, "camp-" + f + "-" + i); }).join("") + "</div></div>");
    }
    var nx = nextCase(f), NB = CASES[nx].band.filter(function (b) { return b.hl; })[0] || CASES[nx].band[0];
    h.push('<div class="case-end"><p class="ce-q">' + plane("fwd") + TT("خلّصت المحطة دي؟ اختار وجهتك الجاية:", "Done with this stop? Pick your next destination:") + '</p><div class="ce-row">' +
      '<a class="ce-card ce-work" href="' + workHash(f) + '"><span class="ce-ico">🗂️</span><span class="ce-t"><small>' + TT("نماذج الشغل", "Work samples") + "</small><b>" + TT("شوف شغلي مع ", "See my work with ") + shortName(f) + "</b></span>" + plane("fwd") + "</a>" +
      '<button type="button" class="ce-card ce-next" data-goto-case="' + nx + '"><span class="ce-ico"><img src="' + FILTERS[nx].logo + '" alt=""></span><span class="ce-t"><small>' + TT("دراسة الحالة الجاية", "Next case study") + "</small><b>" + shortName(nx) + '</b><span class="ce-k"><em class="ltr">' + NB.b + "</em> " + T(NB.s) + "</span></span>" + plane("fwd") + "</button></div></div>");
    h.push("</article>");
    return h.join("");
  }
  function nextCase(f) { var i = CASE_KEYS.indexOf(f); return CASE_KEYS[(i + 1) % CASE_KEYS.length]; }
  var curCase = null;
  $("#case-tabs").innerHTML = CASE_KEYS.map(function (f) {
    return '<button type="button" role="tab" aria-selected="false" data-case="' + f + '"><img src="' + FILTERS[f].logo + '" alt="">' + shortName(f) + "</button>";
  }).join("");
  function showCase(f) {
    if (curCase === f) return; if (curCase) track("case_" + f); curCase = f;
    $$("#case-tabs button").forEach(function (b) { b.setAttribute("aria-selected", b.getAttribute("data-case") === f ? "true" : "false"); });
    var p = $("#case-panels"); p.innerHTML = caseHtml(f); initPosts(p); observe(p); requestAnimationFrame(function () { fixClamps(p); }); $$(".camp-work .posts", p).forEach(attachSwipe);
    caseRead = 0;
    $$(".vbars", p).forEach(function (v) { setTimeout(function () { v.classList.add("in"); }, 120); });
  }
  $("#case-tabs").addEventListener("click", function (e) { var b = e.target.closest("[data-case]"); if (b) showCase(b.getAttribute("data-case")); });
  // زرار "دراسة الحالة الجاية" في آخر كل دراسة
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-goto-case]"); if (!b) return;
    e.preventDefault(); showCase(b.getAttribute("data-goto-case")); hideCta();
    if (homeView.hidden) navTo("#cases");
    else $("#cases").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  });
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-open-case]"); if (!b) return;
    e.preventDefault(); showCase(b.getAttribute("data-open-case"));
    navTo("#cases");
  });

  // ---- سابقة أعمالي (خريطة الإبداع) ----
  var FIELD_COLORS = ["var(--c-rose)", "var(--c-sun)", "var(--c-lilac)", "var(--c-teal)", "var(--c-green)", "var(--c-sky)", "var(--c-red)", "var(--c-lilac)"];
  $("#fields").innerHTML = INDUSTRIES.map(function (ind, i) {
    var count = 0; ind.filters.forEach(function (f) { count += worksOf(f).length; });
    var FIELD_LOGOS = { websites: ["images/logo_qawamna.webp", "images/logo_majd.webp"] };
    var logos = ind.filters.map(function (f) { return FIELD_LOGOS[f] ? FIELD_LOGOS[f].map(function (s) { return '<img src="' + s + '" alt="" loading="lazy">'; }).join("") : FILTERS[f].logo ? '<img src="' + FILTERS[f].logo + '" alt="" loading="lazy">' : ""; }).join("");
    return '<a class="field-card stampin" href="#work-' + ind.slug + '" style="--c:' + FIELD_COLORS[i % FIELD_COLORS.length] + ";--r:" + (i % 2 ? 1.2 : -1.2) + "deg;--d:" + (i * 0.08).toFixed(2) + 's"><div class="fc-in"><span class="fc-ico">' + ind.icon + "</span><h3>" + T(ind.name) + '</h3><span class="en">' + ind.name.en + "</span><p>" + T(ind.desc) + '</p><div class="fc-logos">' + logos + '</div><span class="fc-go">' + TT("شوف الشغل", "See the work") + "</span></div></a>";
  }).join("");

  // ---- نماذج أعمالي على الموبايل: نفس عرض شركاء الرحلة ----
  (function fieldsFlow() {
    var stage = $("#ff-stage"), box = $("#ff");
    stage.innerHTML = INDUSTRIES.map(function (ind, i) {
      return '<button type="button" class="flow-item" aria-label="' + esc(ind.name.ar) + '"><div class="medal ff-medal" style="--c:' + FIELD_COLORS[i % FIELD_COLORS.length] + '"><span>' + ind.icon + "</span></div></button>";
    }).join("");
    var items = $$(".flow-item", stage), dots = $("#ff-dots");
    dots.innerHTML = INDUSTRIES.map(function (x, i) { return '<button type="button" aria-label="' + (i + 1) + '"></button>'; }).join("");
    var dotEls = $$("button", dots);
    box.style.setProperty("--msz", "118px");
    var cf = coverflow(stage, items, {
      spacing: function () { return 84; }, max: 2,
      onChange: function (c) {
        var ind = INDUSTRIES[c];
        $("#ff-name").innerHTML = T(ind.name);
        $("#ff-desc").innerHTML = T(ind.desc);
        var go = $("#ff-go"); go.href = "#work-" + ind.slug; go.innerHTML = TT("شوف الشغل في ", "See the work in ") + T(ind.name);
        box.style.setProperty("--fc", FIELD_COLORS[c % FIELD_COLORS.length]);
        dotEls.forEach(function (d, i) { d.classList.toggle("on", i === c); });
      }
    });
    items.forEach(function (el, i) {
      el.addEventListener("click", function () {
        if (stage._swiped && Date.now() - stage._swiped < 300) return;
        if (cf.cur === i) navTo("#work-" + INDUSTRIES[i].slug); else cf.go(i);
      });
    });
    $("#ff-prev").addEventListener("click", function () { cf.go(cf.cur - 1); });
    $("#ff-next").addEventListener("click", function () { cf.go(cf.cur + 1); });
    dotEls.forEach(function (d, i) { d.addEventListener("click", function () { cf.go(i); }); });
  })();

  // ---- ليه تختارني ----
  $("#why-grid").innerHTML = WHY.map(function (w, i) {
    return '<div class="why env" style="--c:' + INK[i % INK.length] + ";--d:" + ((i % 3) * 0.06).toFixed(2) + 's"><span class="flap" aria-hidden="true"></span><span class="seal-w">' + ICONS[w[0]] + '</span><div class="why-body"><span class="en">' + w[3] + "</span><h3>" + TT(w[1], w[2]) + "</h3><p>" + TT(w[4], w[5]) + "</p></div></div>";
  }).join("");

  // ---- طريقة شغلي ----
  $("#steps").innerHTML = STATIONS.map(function (s, i) {
    var lv = s[5] || 90;
    return (i ? '<li class="hop" aria-hidden="true" style="--i:' + i + '"><i class="hop-line"></i><svg viewBox="-20 -14 40 28"><use href="#plane"/></svg></li>' : "") + '<li class="step" style="--c:' + INK[i % INK.length] + ";--lv:" + lv + '%"><span class="seal"><small>' + TT("محطة", "Stop") + "</small>0" + (i + 1) + '</span><div class="step-card"><div class="step-in"><span class="en">' + s[0] + "</span><h3>" + TT(s[1], s[2]) + "</h3><p>" + TT(s[3], s[4]) + '</p><div class="lvl"><small>' + TT("مستوى الإتقان", "Mastery") + '<b>' + lv + '%</b></small><div class="bar"><i></i></div></div></div></div></li>';
  }).join("");

  // ---- قالوا عني ----
  (function reviews() {
    var track = $("#t-track");
    track.innerHTML = TESTIMONIALS.map(function (t, i) {
      var src = "images/" + t[0] + ".webp";
      return '<button type="button" class="frame" style="--rot:' + (i % 2 ? 1 : -1) + "deg;--c:" + INK[i % INK.length] + '" data-lb="t" data-src="' + src + '" data-alt="' + esc(t[1]) + '" aria-label="' + esc(t[1]) + '"><span class="fr-pm" aria-hidden="true">' + TT("قالوا عني", "They said") + '<br><b>' + (i + 1 < 10 ? "0" : "") + (i + 1) + '</b></span><div class="ph"><img src="' + src + '" alt="' + esc(t[1]) + '" loading="lazy"></div><small><svg viewBox="-20 -14 40 28" aria-hidden="true"><use href="#plane"/></svg>' + TT("اضغط للتكبير", "Tap to zoom") + "</small></button>";
    }).join("");
    var frames = $$(".frame", track), tdots = $("#t-dots");
    tdots.innerHTML = frames.map(function (f, i) { return '<button type="button" aria-label="' + (i + 1) + '"></button>'; }).join("");
    var dots = $$("button", tdots);
    function nearest() {
      var r = track.getBoundingClientRect(), mid = r.left + r.width / 2, best = 0, bd = 1e9;
      frames.forEach(function (f, i) { var b = f.getBoundingClientRect(), d = Math.abs(b.left + b.width / 2 - mid); if (d < bd) { bd = d; best = i; } });
      return best;
    }
    function mark() { var c = nearest(); dots.forEach(function (d, i) { d.classList.toggle("on", i === c); }); }
    function to(i) { i = Math.max(0, Math.min(frames.length - 1, i)); var f = frames[i], tr = track.getBoundingClientRect(), fr = f.getBoundingClientRect(); track.scrollBy({ left: (fr.left + fr.width / 2) - (tr.left + tr.width / 2), behavior: reduce ? "auto" : "smooth" }); }
    track.addEventListener("scroll", function () { requestAnimationFrame(mark); }, { passive: true });
    $("#t-prev").addEventListener("click", function () { to(nearest() - 1); });
    $("#t-next").addEventListener("click", function () { to(nearest() + 1); });
    dots.forEach(function (d, i) { d.addEventListener("click", function () { to(i); }); });
    mark();
  })();

  // ---- ثمار المغامرة ----
  function dash(kind) {
    if (kind === "views") {
      var hs = [18, 30, 44, 58, 76, 100];
      return '<div class="dash"><div class="d-h"><span>Views · 6 months</span><span>KSA + UAE</span></div><div class="d-big">6.4M+</div><div class="d-up">' + plane("up") + ' 2 accounts launched from zero</div><div class="d-bars" style="--c:var(--c-teal)">' +
        hs.map(function (h, i) { return '<span><i style="height:' + h + '%"></i>M' + (i + 1) + "</span>"; }).join("") + "</div></div>";
    }
    if (kind === "ring") {
      var c = 2 * Math.PI * 40, off = c * (1 - 0.81);
      return '<div class="dash"><div class="d-h"><span>Video performance</span><span>PaperMints</span></div><div class="ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="#efe2cf" stroke-width="12"/><circle cx="50" cy="50" r="40" fill="none" style="stroke:var(--c-teal)" stroke-width="12" stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '" transform="rotate(-90 50 50)"/><text x="50" y="57" text-anchor="middle" font-size="20" font-weight="700" fill="#2a2342" font-family="El Messiri,sans-serif">81%</text></svg><div class="kpis"><div class="kpi"><b>35/43</b><small>videos &gt; 200K</small></div><div class="kpi"><b>43</b><small>videos published</small></div><div class="kpi"><b>2</b><small>markets</small></div><div class="kpi"><b>6</b><small>months</small></div></div></div></div>';
    }
    if (kind === "bars") {
      return '<div class="dash"><div class="d-h"><span>C&amp;B Beans Match · Reels</span><span>274K+ views</span></div><div class="d-bars" style="--c:var(--c-sun)">' +
        CASES.cb.bars.items.map(function (b) { return '<span><b style="font-size:9px">' + b[0] + '</b><i style="height:' + b[1] * 0.8 + '%"></i></span>'; }).join("") + "</div></div>";
    }
    return "";
  }
  $("#harvest-list").innerHTML = HARVEST.map(function (h, i) {
    var screen = h.img
      ? '<button type="button" data-lb="hv' + i + '" data-src="' + h.img + '" data-alt="" aria-label="كبّر"><img src="' + h.img + '" alt="" loading="lazy" style="' + (h.contain ? "object-fit:contain;background:#fff" : "") + '"></button>'
      : '<div>' + dash(h.dash) + "</div>";
    var btn = CASES[h.f]
      ? '<a class="btn red nudge" href="#cases" data-open-case="' + h.f + '">' + TT("شوف دراسة الحالة", "See the case study") + "</a>"
      : '<a class="btn" href="' + workHash(h.f) + '">' + TT("شوف الشغل", "See the work") + "</a>";
    return '<article class="hv rv"><div class="laptop"><div class="scr">' + screen + '</div><div class="base"></div></div><div class="hv-copy"><span class="hv-tag">' + h.tag[0] + " " + TT(h.tag[1], h.tag[2]) + "</span><h3>" + T(h.h, true) + "</h3><p>" + T(h.p, true) + '</p><span class="ver">📄 ' + TT("موثّق من إحصائيات الصفحات", "Verified from page insights") + "</span>" + btn + "</div></article>";
  }).join("");

  // ---- صندوق البريد ----
  var SV = [["استراتيجية محتوى", "Content strategy"], ["سوشيال ميديا", "Social media"], ["سكريبتات وفيديو", "Scripts & video"], ["محتوى UGC", "UGC content"], ["حملات إعلانية", "Ad campaigns"], ["محتوى مواقع وصفحات هبوط", "Website & landing pages"], ["وصف منتجات", "Product descriptions"], ["التسويق بالإيميل", "Email marketing"]];
  $("#pick").innerHTML = SV.map(function (s, i) { return '<button type="button" aria-pressed="false" data-i="' + i + '">' + TT(s[0], s[1]) + "</button>"; }).join("");
  $("#pick").addEventListener("click", function (e) { var b = e.target.closest("button"); if (b) b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true"); });
  function compose() {
    var l = lang(), name = $("#f-name").value.trim(), msg = $("#f-msg").value.trim();
    var picked = $$('#pick [aria-pressed="true"]').map(function (b) { return SV[+b.getAttribute("data-i")][l === "ar" ? 0 : 1]; });
    var out = l === "ar" ? ["أهلًا منار 👋"] : ["Hi Manar 👋"];
    if (name) out.push((l === "ar" ? "أنا: " : "I'm: ") + name);
    if (picked.length) out.push((l === "ar" ? "محتاج: " : "I need: ") + picked.join(l === "ar" ? "، " : ", "));
    if (msg) out.push("", msg);
    return { text: out.join("\n"), ok: !!(name || msg || picked.length) };
  }
  $("#letter").addEventListener("submit", function (e) {
    e.preventDefault(); var c = compose();
    if (!c.ok) { toast(TT("اختار خدمة أو اكتب اسمك الأول ✏️", "Pick a service or add your name first ✏️")); return; }
    window.open("https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent(c.text), "_blank", "noopener"); track("form_whatsapp");
    var lt = $("#letter"); lt.classList.remove("sent"); void lt.offsetWidth; lt.classList.add("sent");
    toast(TT("الرسالة طارت ", "Message on its way ") + plane("fwd"));
  });
  $("#send-mail").addEventListener("click", function () {
    var c = compose(), su = lang() === "ar" ? "مشروع جديد مع منار" : "A new project with Manar"; track("form_email");
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=" + CONTACT.email + "&su=" + encodeURIComponent(su) + "&body=" + encodeURIComponent(c.text), "_blank", "noopener");
  });

  // ---- تعليم القسم الحالي في الشريط ----
  var navMain = $$("#nav .nm"), navSub = $$("#nav .nsub a");
  var NAVMAP = { home: "#home", wins: "#home", about: "#home", journey: "#home", services: "#home", cases: "#cases", partners: "#cases", creative: "#creative", why: "#creative", process: "#creative", harvest: "#creative", reviews: "#reviews", contact: "#contact" };
  var SUBMAP = { wins: "#home" };
  function markNav(href, id) {
    navMain.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === href); });
    var sh = id ? (SUBMAP[id] || "#" + id) : null;
    navSub.forEach(function (a) { a.classList.toggle("on", a.getAttribute("href") === sh); });
  }
  if (io) {
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting && !homeView.hidden) markNav(e.target.id === "partners" && isMob() ? "#creative" : NAVMAP[e.target.id], e.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(NAVMAP).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* =====================================================================
     صفحة المجال (نماذج الشغل)
     ===================================================================== */
  var PLAT = {
    instagram: ["شوف البوست الأصلي على إنستجرام", "See the original on Instagram"],
    facebook: ["شوف البوست الأصلي على فيسبوك", "See the original on Facebook"],
    tiktok: ["شوف الفيديو الأصلي على تيك توك", "See the original on TikTok"],
    website: ["افتح الموقع", "Visit the website"]
  };
  var KIND = { post: ["بوست", "Post"], video: ["فيديو", "Video"], carousel: ["كاروسيل", "Carousel"], web: ["موقع", "Website"] };
  function kindOf(w) {
    if (w.platform === "website") return "web";
    if (w.visuals && w.visuals.length > 1) return "carousel";
    if (w.ptype === "video" || /video/.test(w.group || "") || /\/reel\//.test(w.link || "")) return "video";
    return "post";
  }
  function groupEn(g, f) {
    if (g === "ramadan") return "Ramadan campaign: Follow Her Example";
    if (/video/.test(g)) return BRAND_META[f].en + " videos";
    if (/carousel/.test(g)) return BRAND_META[f].en + " carousels";
    if (g === "websites") return "Website content";
    return BRAND_META[f].en + " posts";
  }
  function capHtml(text) {
    return String(text || "").split(/\n\s*\n/).map(function (p) { return '<p dir="auto">' + esc(p).replace(/\n/g, "<br>") + "</p>"; }).join("");
  }
  function postHtml(w, key) {
    var k = kindOf(w), K = KIND[k], pl = PLAT[w.platform] || PLAT.instagram;
    if (w.platform === "tiktok" && k !== "video") pl = ["شوف البوست الأصلي على تيك توك", "See the original post on TikTok"];
    var linkLbl = w.linkText ? TT(w.linkText, pl[1]) : TT(pl[0], pl[1]);
    var cap = w.text ? '<div class="cap clamp">' + capHtml(w.text) + '</div><button type="button" class="more">' + TT("اقرأ الكابشن كامل", "Read the full caption") + "</button>" : "";
    var actions = w.link ? '<div class="actions"><a class="btn red sm" href="' + esc(w.link) + '" target="_blank" rel="noopener">' + ICONS.ext + linkLbl + "</a></div>" : "";
    var visuals = w.visuals && w.visuals.length ? w.visuals : (w.visual ? [w.visual] : []);
    if (!visuals.length) return '<div class="post textonly rv"><div>' + cap + actions + "</div></div>";
    if (k === "web") {
      return '<div class="post rv"><div class="media browser"><div class="bb"><i></i><i></i><i></i></div><a href="' + esc(w.link) + '" target="_blank" rel="noopener"><img src="' + visuals[0] + '" alt="" loading="lazy"></a></div><div>' + cap + actions + "</div></div>";
    }
    if (k === "carousel") {
      return '<div class="post wide rv"><p class="type-lbl">Type: Carousel<small>' + TT("اسحب الكاروسيل واقرأ أكتر ", "Swipe the carousel and read more ") + plane("fwd") + '</small></p><div class="cflow"><div class="stage" tabindex="0">' + visuals.map(function (v, i) {
        return '<button type="button" class="sl" data-lb="' + key + '" data-src="' + v + '" data-link="' + esc(w.link || "") + '"><span class="num">' + (i + 1) + '</span><img src="' + v + '" alt=""></button>';
      }).join("") + '</div><div class="arrows"><button type="button" class="arrow prev" aria-label="السابق"></button><button type="button" class="arrow next" aria-label="التالي"></button></div><div class="cdots">' + visuals.map(function () { return "<i></i>"; }).join("") + '</div></div><div>' + cap + actions + "</div></div>";
    }
    return '<div class="post rv"><div class="media"><span class="ptype">' + TT(K[0], K[1]) + "</span><button type=\"button\" data-lb=\"" + key + '" data-src="' + visuals[0] + '" data-link="' + esc(w.link || "") + '" aria-label="كبّر"><img src="' + visuals[0] + '" alt="" loading="lazy">' + (k === "video" ? '<span class="play"></span>' : "") + "</button></div><div>" + cap + actions + "</div></div>";
  }
  function brandBlock(f) {
    var F = FILTERS[f], M = BRAND_META[f], C = CASES[f], works = worksOf(f);
    var h = ['<article class="brand-block" id="b-' + f + '" style="--c:' + M.color + '">'];
    var lg = f === "websites" ? '<img src="images/logo_majd.webp" alt="">' : F.logo ? '<img src="' + F.logo + '" alt="">' : M.tags[0][0];
    var acts = [], wins = C ? C.band : (ACHIEVE[f] || null), winsHtml = "";
    if (wins) {
      winsHtml = '<div class="bh-wins" style="--n:' + wins.length + '" aria-label="' + (lang() === "ar" ? "الإنجازات" : "Achievements") + '">' + wins.map(function (b, i) {
        return '<div class="bw' + (b.hl ? " hl" : "") + '" style="--i:' + i + '"><b class="ltr">' + b.b + "</b><span>" + T(b.s) + "</span>" + (b.m ? "<small>" + T(b.m) + "</small>" : "") + "</div>";
      }).join("") + "</div>";
    }
    if (C) acts.push('<a class="btn big case-cta" href="#cases" data-open-case="' + f + '"><span class="cc-ico" aria-hidden="true">📊</span>' + TT("شوف دراسة الحالة كاملة", "See the full case study") + plane("fwd") + "</a>");
    if (C && C.link) acts.push('<a class="btn sm" href="' + C.link + '" target="_blank" rel="noopener">' + ICONS.ext + TT("صفحة البراند", "Brand page") + "</a>");
    h.push('<div class="brand-hero rv">' + (f === "websites" ? '<div class="lg-pair"><div class="lg"><img src="images/logo_qawamna.webp" alt="Qawamna"></div><div class="lg"><img src="images/logo_majd.webp" alt="مجمع أسرة المجد الطبي"></div></div>' : '<div class="lg">' + lg + "</div>") + "<h2>" + nameOf(f) + "</h2><p>" + T({ ar: F.about, en: ABOUT_EN[f] || F.about }) + "</p>" + winsHtml + (acts.length ? '<div class="acts">' + acts.join("") + "</div>" : "") + "</div>");
    h.push('<div class="tags">' + M.tags.map(function (t) { return "<span>" + t[0] + " " + TT(t[1], t[2]) + "</span>"; }).join("") + "</div>");
    var groups = [];
    works.forEach(function (w) { if (groups.indexOf(w.group) < 0) groups.push(w.group); });
    groups.forEach(function (g) {
      var G = GROUPS[g] || { name: F.title };
      h.push('<div class="grp-label"><span>' + TT(G.name, groupEn(g, f)) + '</span></div><div class="posts">');
      works.filter(function (w) { return w.group === g; }).forEach(function (w, i) { h.push(postHtml(w, f + "-" + g + "-" + i)); });
      h.push("</div>");
    });
    h.push("</article>");
    return h.join("");
  }
  var homeView = $("#home-view"), workView = $("#work-view"), curWork = null;
  function renderWork(ind) {
    var idx = INDUSTRIES.indexOf(ind), nextInd = INDUSTRIES[(idx + 1) % INDUSTRIES.length], out = [];
    out.push('<header class="ind-hero"><div class="wrap"><a class="back btn red nudge" href="#creative">' + plane("back") + TT("رجوع لنماذج أعمالي", "Back to my work samples") + '</a><span class="ico">' + ind.icon + "</span><h1>" + T(ind.name) + '</h1><p class="en t-ar">' + ind.name.en + "</p><p>" + T(ind.desc) + "</p></div></header>");
    out.push('<div class="brand-strip"><div class="bar"><a class="back-tab" href="#creative" aria-label="' + (lang() === "ar" ? "رجوع لنماذج أعمالي" : "Back to my work samples") + '">' + plane("back") + '<span class="bt-l">' + TT("رجوع لنماذج أعمالي", "Back to work samples") + '</span><span class="bt-s">' + TT("رجوع", "Back") + '</span></a><span class="lbl">' + TT("اضغط على البراند تنزل لشغله", "Tap a brand to jump to it") + '</span><div class="logos">' +
      ind.filters.map(function (f) {
        var F = FILTERS[f], lg = F.logo ? '<img src="' + F.logo + '" alt="">' : BRAND_META[f].tags[0][0];
        return '<a href="#work-' + ind.slug + "--" + f + '" style="--c:' + BRAND_META[f].color + '" title="' + esc(F.title) + '" aria-label="' + esc(F.title) + '">' + lg + "</a>";
      }).join("") + "</div></div></div>");
    out.push('<div class="narrow">');
    ind.filters.forEach(function (f) { out.push(brandBlock(f)); });
    out.push('<div class="next-ind"><p class="lead">' + TT("المحطة الجاية:", "Next stop:") + '</p><div class="row"><a class="btn red" href="#work-' + nextInd.slug + '">' + nextInd.icon + " " + T(nextInd.name) + plane("fwd") + '</a><a class="btn" href="#creative">' + plane("back") + TT("رجوع لنماذج أعمالي", "Back to my work samples") + '</a><a class="btn" href="#contact">' + TT("ابعتلي رسالة", "Send me a message") + "</a></div></div></div>");
    workView.innerHTML = out.join("");

    initPosts(workView);
    observe(workView);
    $$(".posts", workView).forEach(attachSwipe);
  }
  function initPosts(root) {
    $$(".cflow", root).forEach(function (box) {
      var stage = $(".stage", box), slides = $$(".sl", stage), cdots = $$(".cdots i", box);
      var cf = coverflow(stage, slides, {
        max: 2, s0: 0.8,
        spacing: function () { return Math.min(130, box.clientWidth * 0.22); },
        onChange: function (c) { cdots.forEach(function (d, i) { d.classList.toggle("on", i === c); }); }
      });
      slides.forEach(function (s, i) {
        s.addEventListener("click", function (e) {
          if (stage._swiped && Date.now() - stage._swiped < 300) { e.stopPropagation(); return; }
          if (cf.cur !== i) { e.stopPropagation(); cf.go(i); }
        }, true);
      });
      $(".arrows .prev", box).addEventListener("click", function () { cf.go(cf.cur - 1); });
      $(".arrows .next", box).addEventListener("click", function () { cf.go(cf.cur + 1); });
    });
  }
  function fixClamps(root) {
    $$(".cap.clamp", root || workView).forEach(function (c) {
      if (c.scrollHeight <= c.clientHeight + 12) { c.classList.remove("clamp"); var m = c.nextElementSibling; if (m && m.classList.contains("more")) m.remove(); }
    });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".more"); if (!b) return;
    var c = b.previousElementSibling, closed = c.classList.toggle("clamp");
    b.innerHTML = closed ? TT("اقرأ الكابشن كامل", "Read the full caption") : TT("اقفل الكابشن", "Collapse");
  });
  var baseTitle = document.title;
  function setTitle() {
    if (curWork) document.title = lang() === "ar" ? curWork.name.ar + " | سابقة أعمال منار نصر" : curWork.name.en + " | Manar Nasr's work";
    else document.title = lang() === "ar" ? baseTitle : "Manar Nasr | Content Writer & Copywriter";
  }
  document.addEventListener("langchange", setTitle);

  /* ---------- التنقّل ----------
     كل الزراير بتتنقّل من جوه الصفحة نفسها (مش بتعتمد على المتصفح يغيّر الـ #)،
     عشان تشتغل في أي مكان: على GitHub، أو جوه أي معاينة. والـ # بيتحدّث في العنوان لو المتصفح سامح. */
  var HASH = location.hash;
  function jump(id, smooth) {
    var t = document.getElementById(id); if (!t) return;
    var y = t.getBoundingClientRect().top + scrollY - (parseInt(getComputedStyle(html).scrollPaddingTop) || 80);
    window.scrollTo({ top: Math.max(0, y), behavior: smooth && !reduce ? "smooth" : "instant" });
  }
  function navTo(h) {
    if (h.charAt(0) !== "#") h = "#" + h;
    if (h === "#creative" && isMob()) h = "#partners";
    HASH = h;
    try { if (location.hash !== h) history.pushState(null, "", h); } catch (e) {}
    route(true);
  }
  function route(fromClick) {
    var h = decodeURIComponent(HASH.slice(1));
    if (h === "creative" && isMob()) h = "partners";
    var m = /^work-([a-z-]+?)(?:--(\w+))?$/.exec(h), ind = m && indBySlug(m[1]);
    if (ind) {
      if (curWork !== ind) { curWork = ind; renderWork(ind); track("work_" + ind.slug); }
      if (ctaFor !== ind) armCta(ind);
      homeView.hidden = true; workView.hidden = false; markNav("#creative"); setTitle();
      requestAnimationFrame(function () {
        window.dispatchEvent(new Event("resize"));
        fixClamps();
        if (m[2] && document.getElementById("b-" + m[2])) jump("b-" + m[2]); else window.scrollTo({ top: 0, behavior: "instant" });
      });
    } else {
      var wasWork = !workView.hidden; armCta(null);
      workView.hidden = true; homeView.hidden = false; curWork = null; setTitle();
      if (h && document.getElementById(h)) {
        if (wasWork) requestAnimationFrame(function () { jump(h); });
        else if (fromClick || h !== decodeURIComponent(location.hash.slice(1))) jump(h, fromClick);
      } else if (wasWork) window.scrollTo({ top: 0, behavior: "instant" });
    }
    window.dispatchEvent(new Event("mn-route"));
  }
  addEventListener("hashchange", function () { if (location.hash !== HASH) { HASH = location.hash; route(); } });
  addEventListener("popstate", function () { HASH = location.hash; route(); });
  // أي لينك داخلي (#...) بيتنقّل من جوه الصفحة
  function navClick(e) {
    if (e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    var h = a.getAttribute("href"); if (h === "#" || h === "#top") return;
    e.preventDefault(); closeMenu(); navTo(h);
  }
  // ---- رسالة صغيرة ذكية ومش بتغطي الشغل ----
  // في صفحة المجال: بعد 30 ثانية في نفس المجال (مرة واحدة لكل مجال).
  // في Case Studies: "رحلة تانية مستنياك" كل 15 ثانية قراءة.
  var cta = $("#tcta"), ctaT = null, ctaFor = null, ctaHideT = null, ctaKind = null;
  var seen = {}; try { seen = JSON.parse(sessionStorage.getItem("mn-seen") || "{}"); } catch (e) {}
  function markSeen(k) { seen[k] = 1; try { sessionStorage.setItem("mn-seen", JSON.stringify(seen)); } catch (e) {} }
  function hideCta() { clearTimeout(ctaHideT); cta.classList.remove("show"); ctaKind = null; setTimeout(function () { if (!cta.classList.contains("show")) cta.hidden = true; }, 350); }
  function openCta(o) {
    $("#tcta-h").innerHTML = o.h; $("#tcta-p").innerHTML = o.p;
    var g = $("#tcta-go"); g.href = o.href; g.innerHTML = o.go + plane("fwd");
    if (o.case) g.setAttribute("data-goto-case", o.case); else g.removeAttribute("data-goto-case");
    var m = $("#tcta-msg"); m.href = o.href2 || "#contact"; m.innerHTML = o.go2 || TT("راسلني", "Message me");
    ctaKind = o.kind; cta.hidden = false; requestAnimationFrame(function () { cta.classList.add("show"); });
    clearTimeout(ctaHideT); ctaHideT = setTimeout(hideCta, o.kind === "case" ? 7000 : 14000);
  }
  function showCta() {
    if (!curWork || ctaFor !== curWork || seen["w-" + curWork.slug]) return;
    markSeen("w-" + curWork.slug);
    var idx = INDUSTRIES.indexOf(curWork), nx = INDUSTRIES[(idx + 1) % INDUSTRIES.length];
    openCta({ kind: "work", h: TT("مستمتع بالرحلة؟", "Enjoying the journey?"), p: TT("المحطة الجاية: ", "Next stop: ") + "<b>" + nx.icon + " " + T(nx.name) + "</b>",
      href: "#work-" + nx.slug, go: TT("كمّل الرحلة", "Keep flying"), href2: "#contact", go2: TT("راسلني", "Message me") });
  }
  function armCta(ind) {
    clearTimeout(ctaT); if (ctaKind === "work") hideCta(); ctaFor = ind;
    if (!ind || seen["w-" + ind.slug]) return;
    ctaT = setTimeout(showCta, 30000);
  }
  $("#tcta-x").addEventListener("click", function () { if (ctaKind === "work") ctaFor = null; hideCta(); });
  cta.addEventListener("click", function (e) { if (e.target.closest("a")) { ctaFor = null; hideCta(); } });

  // Case Studies: عدّاد قراءة (بيحسب بس والقسم قدام العين)
  var caseRead = 0, caseVis = false;
  if (io) new IntersectionObserver(function (es) { caseVis = es[0].isIntersecting; }, { rootMargin: "-35% 0px -35% 0px", threshold: 0 }).observe($("#case-panels"));
  setInterval(function () {
    if (!caseVis || homeView.hidden || document.hidden || !curCase) return;
    caseRead += 1;
    if (caseRead >= 15 && !ctaKind) {
      caseRead = 0;
      var nx = nextCase(curCase), NB = CASES[nx].band.filter(function (b) { return b.hl; })[0] || CASES[nx].band[0];
      openCta({ kind: "case", case: nx, h: TT("رحلة تانية مستنياك", "Another trip is waiting"),
        p: TT("دراسة حالة ", "Case study: ") + "<b>" + shortName(nx) + '</b> — <b class="ltr">' + NB.b + "</b> " + T(NB.s),
        href: "#cases", go: TT("خدني لها", "Take me there"), href2: workHash(curCase), go2: TT("شوف نماذج الشغل", "See the work") });
    }
  }, 1000);

  // ---- عدّاد الإنجازات ----
  function countUp(el) {
    var end = parseFloat(el.getAttribute("data-count")), dec = +el.getAttribute("data-dec") || 0, pre = el.getAttribute("data-pre") || "", suf = el.getAttribute("data-suf") || "", t0 = null;
    if (reduce) return;
    function step(t) { if (!t0) t0 = t; var p = Math.min((t - t0) / 1000, 1), v = end * (1 - Math.pow(1 - p, 3)); el.textContent = pre + (dec ? v.toFixed(dec) : Math.round(v)) + suf; if (p < 1) requestAnimationFrame(step); }
    requestAnimationFrame(step);
  }
  if (io) {
    var wio = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { $$("[data-count]", e.target).forEach(countUp); e.target.classList.add("go"); wio.unobserve(e.target); } }); }, { threshold: 0.3 });
    wio.observe($("#wins"));
  } else $("#wins").classList.add("go");

  // ضغطات مهمة: السوشيال، روابط البوستات الأصلية، شريط الاختصارات
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a"); if (!a) return;
    if (a.hasAttribute("data-track")) track(a.getAttribute("data-track"));
    else if (a.classList.contains("soc") || a.classList.contains("dl-item")) track("social_" + (a.getAttribute("aria-label") || a.textContent.trim().split(/\s/)[0]).toLowerCase());
    else if (a.target === "_blank" && a.closest(".post")) track("open_original_post");
    else if (a.id === "tcta-go") track("cta_next_field");
    else if (a.id === "tcta-msg") track("cta_message");
  });
  // شريط الاختصارات بيستخبى في الهيرو وفي صندوق البريد
  var dock = $("#dock");
  function dockState() {
    var hide = !workView.hidden ? false : (scrollY < innerHeight * 0.6);
    var ct = $("#contact").getBoundingClientRect(); if (!homeView.hidden && ct.top < innerHeight * 0.8) hide = true;
    dock.classList.toggle("hide", hide);
  }
  // زرار UP في صفحة المجال
  var up = $("#upbtn");
  function upState() { var show = !workView.hidden && scrollY > innerHeight * 0.9; if (show && up.hidden) { up.hidden = false; requestAnimationFrame(function () { up.classList.add("show"); }); } else if (!show && !up.hidden) { up.classList.remove("show"); up.hidden = true; } }
  up.addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); track("up_button"); });
  addEventListener("scroll", upState, { passive: true });
  addEventListener("mn-route", function () { setTimeout(upState, 80); });
  addEventListener("scroll", dockState, { passive: true });
  addEventListener("mn-route", function () { setTimeout(dockState, 60); });
  dock.addEventListener("click", function (e) { var a = e.target.closest("a"); if (a && !a.hasAttribute("data-track")) track("dock_" + a.getAttribute("href").slice(1)); });

  document.addEventListener("click", navClick);
  ["#services-grid", "#why-grid", "#steps", "#harvest-list"].forEach(function (s) { attachSwipe($(s)); });
  observe(document);
  showCase(CASE_KEYS[0]);
  route();
  dockState();
})();
