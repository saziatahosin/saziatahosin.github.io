/* ============ Shared layout + animations ============ */
/* ===== SETTINGS =====
   SHOW_CV: set to true to show the "CV" buttons on the website.
   The file cv.pdf stays in the repository either way.              */
const SHOW_CV = false;

const PROFILE = {
  name: "Mst. Sazia Tahosin",
  email: "saziatahsin457@gmail.com",
  scholar: "https://scholar.google.com/citations?user=8areZzsAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0006-2027-7148",
  researchgate: "https://www.researchgate.net/profile/Mst-Sazia-Tahosin",
  linkedin: "https://www.linkedin.com/in/saziatahosin/",
  github: "https://github.com/saziatahosin"
};

const ICONS = {
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
  scholar:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm-6 9.2v3.5L12 19l6-3.3v-3.5L12 15.5 6 12.2z"/></svg>',
  orcid:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8.3 7.2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zM7.6 10h1.4v7.3H7.6V10zm3.4 0h3.1c2.6 0 4 1.8 4 3.7 0 2-1.6 3.7-4 3.7H11V10zm1.4 1.2v5h1.6c2 0 2.7-1.4 2.7-2.5 0-1.3-.8-2.5-2.7-2.5h-1.6z"/></svg>',
  rg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.2 5c-1.2 0-2 .7-2 2.1v4c0 1.4.8 2 2 2 .9 0 1.6-.3 1.6-.3v-2.4H8.5v.9h.4v.9s-.3.1-.6.1c-.5 0-.8-.3-.8-.9v-3.9c0-.6.3-.9.8-.9.6 0 .8.4.8.9h1c0-1.3-.6-2.5-1.9-2.5zm4.5.1v8h1.1v-3.3h.5l1.3 3.3h1.2l-1.5-3.5c.6-.3 1-.9 1-1.9 0-1.6-.9-2.6-2.3-2.6h-1.3zm1.1 1h.2c.7 0 1.1.4 1.1 1.5s-.4 1.5-1.1 1.5h-.2v-3z"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4V9.5z"/></svg>',
  github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M12 18v-6M9 15l3 3 3-3"/></svg>'
};

(function layout(){
  const here = (location.pathname.split("/").pop() || "index.html").replace(".html","") || "index";
  const links = [["index","Home"],["research","Research"],["publications","Publications"],["about","About"],["contact","Contact"]];
  const nav = document.createElement("header");
  nav.className = "nav";
  nav.innerHTML = `
    <a class="brand" href="index.html" aria-label="Home"><img src="assets/logo.svg" alt="">
      <span>Sazia Tahosin<small>AI · HEALTH · EARTH</small></span></a>
    <ul id="menu">${links.map(([h,t]) => `<li><a href="${h}.html" class="${here===h?"active":""}">${t}</a></li>`).join("")}</ul>
    <div style="display:flex;gap:8px;align-items:center">
      ${SHOW_CV ? `<a class="cta" href="cv.pdf" target="_blank" rel="noopener">CV ${ICONS.arrow.replace('<svg','<svg width="15" height="15"')}</a>` : `<a class="cta" href="contact.html">Get in touch ${ICONS.arrow.replace('<svg','<svg width="15" height="15"')}</a>`}
      <button class="burger" id="burger" aria-label="Menu"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h10"/></svg></button>
    </div>`;
  document.body.prepend(nav);

  const bg = document.createElement("div");
  bg.innerHTML = '<div class="aurora"><i></i><i></i><i></i></div><div class="grain"></div><div class="cursor-glow" id="glow"></div>';
  document.body.prepend(...bg.childNodes);

  const foot = document.createElement("footer");
  foot.className = "foot";
  foot.innerHTML = `<div class="wrap row">
      <div><a class="brand" href="index.html"><img src="assets/logo.svg" alt=""><span>Mst. Sazia Tahosin<small>MRES · UNISQ · AUSTRALIA</small></span></a></div>
      <div class="socials">
        <a href="mailto:${PROFILE.email}" aria-label="Email">${ICONS.mail}</a>
        <a href="${PROFILE.scholar}" target="_blank" rel="noopener" aria-label="Google Scholar">${ICONS.scholar}</a>
        <a href="${PROFILE.orcid}" target="_blank" rel="noopener" aria-label="ORCID">${ICONS.orcid}</a>
        <a href="${PROFILE.researchgate}" target="_blank" rel="noopener" aria-label="ResearchGate">${ICONS.rg}</a>
        <a href="${PROFILE.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.linkedin}</a>
        <a href="${PROFILE.github}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>
      </div>
    </div>
    <div class="wrap row" style="margin-top:28px"><small>© ${new Date().getFullYear()} Mst. Sazia Tahosin</small><small class="mono">Publications sync live from OpenAlex</small></div>`;
  document.body.append(foot);

  if(!SHOW_CV) document.querySelectorAll(".cv-link").forEach(el => el.remove());

  const menu = document.getElementById("menu");
  document.getElementById("burger").addEventListener("click", () => menu.classList.toggle("open"));
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30), {passive:true});
})();

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* reveal on scroll */
function observeReveals(root=document){
  const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.12});
  root.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}
observeReveals();

/* card spotlight follows the cursor */
document.addEventListener("pointermove", e => {
  const g = document.getElementById("glow");
  if(g){ g.style.left = e.clientX+"px"; g.style.top = e.clientY+"px"; }
  const c = e.target.closest && e.target.closest(".card");
  if(c){ const r = c.getBoundingClientRect(); c.style.setProperty("--mx",(e.clientX-r.left)+"px"); c.style.setProperty("--my",(e.clientY-r.top)+"px"); }
}, {passive:true});

/* animated counter */
function countTo(el, target, suffix=""){
  if(reduce){ el.textContent = target.toLocaleString()+suffix; return; }
  const start = performance.now(), from = Number(el.dataset.from||0), dur = 1600;
  (function tick(t){
    const p = Math.min(1,(t-start)/dur), v = Math.round(from + (target-from)*(1-Math.pow(1-p,4)));
    el.textContent = v.toLocaleString()+suffix;
    if(p<1) requestAnimationFrame(tick);
  })(start);
}

/* typing rotator */
function rotator(el, words){
  if(!el) return;
  if(reduce){ el.textContent = words[0]; return; }
  let w=0,i=0,del=false;
  (function step(){
    const word = words[w];
    i += del ? -1 : 1;
    el.textContent = word.slice(0,i);
    let wait = del ? 35 : 70;
    if(!del && i===word.length){ del=true; wait=1800; }
    else if(del && i===0){ del=false; w=(w+1)%words.length; wait=300; }
    setTimeout(step, wait);
  })();
}

/* rotating research-focus headline */
function focusRotator(box, dotsEl, every=3600){
  if(!box) return;
  const lines = [...box.children]; let i = 0, timer;
  dotsEl.style.setProperty("--dur", every+"ms");
  dotsEl.innerHTML = lines.map((_,k) => `<button aria-label="Show focus ${k+1}"></button>`).join("");
  const dots = [...dotsEl.children];
  function show(n){
    lines.forEach((l,k) => { l.classList.toggle("out", k===i && n!==i); l.classList.toggle("on", k===n); });
    setTimeout(() => lines.forEach((l,k) => { if(k!==n) l.classList.remove("out"); }), 750);
    dots.forEach((d,k) => { d.classList.remove("on"); if(k===n){ void d.offsetWidth; d.classList.add("on"); } });
    i = n;
  }
  function next(){ show((i+1) % lines.length); }
  dots.forEach((d,k) => d.addEventListener("click", () => { clearInterval(timer); show(k); if(!reduce) timer = setInterval(next, every); }));
  show(0);
  if(!reduce) timer = setInterval(next, every);
}

/* neural-network canvas for the hero */
function neuralCanvas(canvas){
  if(!canvas) return;
  const ctx = canvas.getContext("2d");
  let W,H,pts=[],mouse={x:-999,y:-999};
  const DPR = Math.min(devicePixelRatio||1,2);
  function size(){
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W*DPR; canvas.height = H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0);
    const n = Math.min(90, Math.floor(W*H/16000));
    pts = Array.from({length:n}, () => ({x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.35, vy:(Math.random()-.5)*.35, r:Math.random()*1.6+.6, h:Math.random()}));
  }
  size(); addEventListener("resize", size);
  canvas.parentElement.addEventListener("pointermove", e => { const r = canvas.getBoundingClientRect(); mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top; });
  canvas.parentElement.addEventListener("pointerleave", () => { mouse.x=mouse.y=-999; });
  function color(h,a){ return h<.5 ? `rgba(45,212,191,${a})` : h<.8 ? `rgba(129,140,248,${a})` : `rgba(192,132,252,${a})`; }
  function frame(){
    ctx.clearRect(0,0,W,H);
    for(const p of pts){
      if(!reduce){ p.x+=p.vx; p.y+=p.vy; }
      if(p.x<0||p.x>W) p.vx*=-1; if(p.y<0||p.y>H) p.vy*=-1;
      const dx=p.x-mouse.x, dy=p.y-mouse.y, d=Math.hypot(dx,dy);
      if(d<140){ p.x+=dx/d*.9; p.y+=dy/d*.9; }
    }
    for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++){
      const a=pts[i], b=pts[j], d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<130){ ctx.strokeStyle=color(a.h,(1-d/130)*.28); ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
    }
    for(const p of pts){
      const near = Math.hypot(p.x-mouse.x,p.y-mouse.y)<160;
      ctx.fillStyle=color(p.h, near?.95:.6); ctx.beginPath(); ctx.arc(p.x,p.y,near?p.r+1.2:p.r,0,7); ctx.fill();
    }
    if(!reduce) requestAnimationFrame(frame);
  }
  frame();
}
