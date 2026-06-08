/* ═══════════════════════════════════════════════════
   DOBRUŠKA HROT – app.js
   All functionality: data, rendering, interactions
═══════════════════════════════════════════════════ */

/* ─── DATA ─── */

const POSTS = [
  {
    id: 1, type: 'beef', trending: true,
    title: 'Největší beef roku na náměstí',
    text: 'Takový výměny názorů jsme nezažili od slavné bitvy o parkování u Kauflandu. Dvě sousedky se přely o záhon petrklíče celých 47 minut.',
    author: 'Anon007', avatar: '🔥', color: '#EF4444',
    date: '2. 6. 2026', likes: 312, comments: 47, views: 2841,
    tag: 'beef', tagClass: 'tag-beef'
  },
  {
    id: 2, type: 'vtip', trending: false,
    title: 'Vtip dne z hospody U Fleka',
    text: 'Přijde Dobrušák na poštu. "Chci poslat dopis." Pošťačka: "Kam?" "No tam, kde ho nikdo nečte." "Aha, tak ho dejte do schránky."',
    author: 'HroticKrál', avatar: '😂', color: '#F59E0B',
    date: '1. 6. 2026', likes: 198, comments: 31, views: 1520,
    tag: 'vtip', tagClass: 'tag-vtip'
  },
  {
    id: 3, type: 'hrot', trending: true,
    title: 'Hrot týdne: nové značení na silnici',
    text: 'Obec namalovala nové přechody. Problém: jeden vede přímo do plotu soukromé zahrady. Projektant prý "neviděl plot na mapě".',
    author: 'DobruškaInfo', avatar: '🎯', color: '#3B82F6',
    date: '31. 5. 2026', likes: 445, comments: 88, views: 4102,
    tag: 'hrot', tagClass: 'tag-hrot'
  },
  {
    id: 4, type: 'drby', trending: false,
    title: 'Drby z radnice – co se šeptá',
    text: 'Prý se chystá velká rekonstrukce náměstí. Nebo taky ne. Záleží na dotaci. A na počasí. A na tom, kdo vyhraje volby.',
    author: 'Šuškanda', avatar: '🕵️', color: '#8B5CF6',
    date: '30. 5. 2026', likes: 267, comments: 55, views: 2310,
    tag: 'drby', tagClass: 'tag-drby'
  },
  {
    id: 5, type: 'meme', trending: true,
    title: 'Meme: Dobrušák vs. Rychnovák',
    text: 'Klasika. Rychnovák říká "jedeme do Dobrušky nakoupit." Dobrušák: "A proč? Máme Kaufland." Rychnovák: "Ale vy máte tu větrnou machine za 2 kč."',
    author: 'MemeFactory', avatar: '🗿', color: '#06B6D4',
    date: '29. 5. 2026', likes: 531, comments: 102, views: 5870,
    tag: 'meme', tagClass: 'tag-meme'
  },
  {
    id: 6, type: 'beef', trending: false,
    title: 'Záhadný případ zmizelého kola',
    text: 'Někdo přivázal kolo ke stromečku u parku. Ráno strom – kolo ne. Svědci tvrdí, že kolo odešlo samo. CCTV záznam "nefungoval".',
    author: 'Detektiv42', avatar: '🚲', color: '#EF4444',
    date: '28. 5. 2026', likes: 178, comments: 39, views: 1890,
    tag: 'beef', tagClass: 'tag-beef'
  },
  {
    id: 7, type: 'hrot', trending: false,
    title: 'Rekord: 3 výboje fotoaparátu v 1 den',
    text: 'Radní schválili třetí rychlostní kameru na hlavní třídě. Místní tip: jezdi 39 km/h a dej si pohodu.',
    author: 'SpeedKing', avatar: '📸', color: '#3B82F6',
    date: '27. 5. 2026', likes: 209, comments: 63, views: 2100,
    tag: 'hrot', tagClass: 'tag-hrot'
  },
  {
    id: 8, type: 'vtip', trending: false,
    title: 'Hlášení týdne z místního rozhlasu',
    text: '"Oznamujeme, že v pátek v 15h bude v parku cvičení pro seniory. Přijďte v pohodlném oblečení, nebo přijďte tak jak jste."',
    author: 'Rozhlas88', avatar: '📻', color: '#F59E0B',
    date: '26. 5. 2026', likes: 334, comments: 41, views: 2980,
    tag: 'vtip', tagClass: 'tag-vtip'
  },
  {
    id: 9, type: 'drby', trending: true,
    title: 'Tajemná výstavba za humny',
    text: 'Co to staví u hřiště? Plotem oploceno, dělníci mlčí, místní spekulují o nákupním centru, skateparku nebo tajném bunkru.',
    author: 'Zvědavec', avatar: '👁️', color: '#8B5CF6',
    date: '25. 5. 2026', likes: 421, comments: 97, views: 4430,
    tag: 'drby', tagClass: 'tag-drby'
  }
];

const NEWS = [
  {
    emoji: '🏗️', category: 'Stavby', catColor: '#3B82F6', catBg: 'rgba(59,130,246,.15)',
    title: 'Oprava silnice I/14 zahájena – dopravní omezení trvá do podzimu',
    desc: 'Dlouho odkládaná rekonstrukce silnice I/14 je konečně v plném proudu. Řidiči jsou upozorňováni na jednosměrný provoz a objízdné trasy.',
    date: '5. 6. 2026', readTime: '3 min'
  },
  {
    emoji: '🌳', category: 'Příroda', catColor: '#10B981', catBg: 'rgba(16,185,129,.15)',
    title: 'Nový park v centru – sázení stromů začíná příští týden',
    desc: 'Radnice schválila projekt ozelenění parku za kostelem. Přibude 40 lip a nové lavičky s Wi-Fi připojením.',
    date: '4. 6. 2026', readTime: '2 min'
  },
  {
    emoji: '🎪', category: 'Akce', catColor: '#F59E0B', catBg: 'rgba(245,158,11,.15)',
    title: 'Dobrušské léto 2026 – program na celý červenec',
    desc: 'Tradiční festival Dobrušské léto přináší letos rekordní lineup. Kapely, food trucky, zóna pro děti a hvězdná noc v parku.',
    date: '3. 6. 2026', readTime: '4 min'
  },
  {
    emoji: '⚽', category: 'Sport', catColor: '#EF4444', catBg: 'rgba(239,68,68,.15)',
    title: 'FK Dobruška postoupil do krajské ligy – slavnostní pochod plánován',
    desc: 'Po dvou letech snahy se to podařilo! Místní fotbalisté postoupili z okresní do krajské ligy. Oslava proběhne 15. června.',
    date: '2. 6. 2026', readTime: '3 min'
  },
  {
    emoji: '🏫', category: 'Vzdělání', catColor: '#8B5CF6', catBg: 'rgba(139,92,246,.15)',
    title: 'Základní škola dostane novou tělocvičnu – dotace schválena',
    desc: 'Ministerstvo uvolnilo 18 milionů korun na výstavbu moderní sportovní haly u ZŠ Dobruška. Stavba začne v září.',
    date: '1. 6. 2026', readTime: '2 min'
  },
  {
    emoji: '🍺', category: 'Kultura', catColor: '#06B6D4', catBg: 'rgba(6,182,212,.15)',
    title: 'Pivní festival na náměstí – 20 pivovarů z regionu',
    desc: 'Druhý ročník Dobrušského pivního festivalu přivítá na náměstí 20 menších pivovarů z celého královéhradeckého kraje.',
    date: '31. 5. 2026', readTime: '2 min'
  }
];

const GALLERY = [
  { emoji: '🏙️', caption: 'Náměstí za soumraku', height: 220 },
  { emoji: '🌄', caption: 'Výhled z věže kostela', height: 160 },
  { emoji: '🎪', caption: 'Dobrušské léto 2025', height: 280 },
  { emoji: '⚽', caption: 'FK Dobruška vs Rychnov', height: 190 },
  { emoji: '🌳', caption: 'Starý park v létě', height: 240 },
  { emoji: '🎠', caption: 'Posvícení na náměstí', height: 170 },
  { emoji: '🍺', caption: 'Pivní festival 2025', height: 200 },
  { emoji: '❄️', caption: 'Zima v Dobrušce', height: 250 },
  { emoji: '🚲', caption: 'Cyklostezka podél Dědiny', height: 180 },
  { emoji: '🏗️', caption: 'Výstavba nového hřiště', height: 210 },
  { emoji: '🌸', caption: 'Jaro na náměstí', height: 190 },
  { emoji: '🎸', caption: 'Koncert na letní scéně', height: 230 }
];

/* ─── STATE ─── */
let currentFilter = 'all';
let visiblePosts = 6;
let lightboxIndex = 0;
let likedPosts = new Set();

/* ═══════════════════ INIT ═══════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initHamburger();
  initSearch();
  renderTrending();
  renderLatest();
  renderPosts();
  renderNews();
  renderGallery();
  initFilterTabs();
  initLoadMore();
  initLightbox();
  initReveal();
  initCounters();
  initBackToTop();
});

/* ─── Loader ─── */
function initLoader() {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);
}

/* ─── Navbar scroll ─── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);

    // Active section highlight
    const sections = ['home','hroty','zpravy','galerie','onas','kontakt'];
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) current = id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  });

  // Smooth anchor
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('mobileMenu').classList.remove('open');
        document.getElementById('hamburger').classList.remove('open');
      }
    });
  });
}

/* ─── Hamburger ─── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });
}

/* ─── Search ─── */
function initSearch() {
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input) return;

  const allItems = [
    ...POSTS.map(p => ({ text: p.title, type: 'Hrot' })),
    ...NEWS.map(n => ({ text: n.title, type: 'Zprávy' }))
  ];

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = '';
    if (!q) { results.classList.remove('open'); return; }

    const found = allItems.filter(i => i.text.toLowerCase().includes(q)).slice(0, 6);
    if (!found.length) { results.classList.remove('open'); return; }

    found.forEach(item => {
      const div = document.createElement('div');
      div.className = 'sr-item';
      div.innerHTML = `<span class="sr-tag">${item.type}</span><span>${highlight(item.text, q)}</span>`;
      div.addEventListener('click', () => {
        results.classList.remove('open');
        input.value = '';
        document.getElementById(item.type === 'Hrot' ? 'hroty' : 'zpravy')
          .scrollIntoView({ behavior: 'smooth' });
      });
      results.appendChild(div);
    });
    results.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!document.getElementById('navSearch')?.contains(e.target))
      results.classList.remove('open');
  });
}

function highlight(text, q) {
  const re = new RegExp(`(${q})`, 'gi');
  return text.replace(re, '<mark style="background:rgba(59,130,246,.3);color:#93C5FD;border-radius:2px">$1</mark>');
}

/* ─── Trending ─── */
function renderTrending() {
  const list = document.getElementById('trendingList');
  const sorted = [...POSTS].sort((a, b) => b.likes - a.likes).slice(0, 5);
  list.innerHTML = sorted.map((p, i) => `
    <div class="trending-item" onclick="scrollToPost(${p.id})">
      <span class="trending-rank ${i < 2 ? 'top' : ''}">#${i + 1}</span>
      <div class="trending-body">
        <h4>${p.title}</h4>
        <span>${p.likes} lajků · ${p.views} zobrazení</span>
      </div>
      ${i < 2 ? '<i class="fa fa-fire trending-fire"></i>' : ''}
    </div>
  `).join('');
}

/* ─── Latest ─── */
function renderLatest() {
  const list = document.getElementById('latestList');
  const latest = POSTS.slice(0, 5);
  list.innerHTML = latest.map(p => `
    <div class="latest-item" onclick="scrollToPost(${p.id})">
      <div class="latest-avatar">${p.avatar}</div>
      <div class="latest-body">
        <h4>${p.title}</h4>
        <span>${p.author} · ${p.date}</span>
      </div>
    </div>
  `).join('');
}

function scrollToPost(id) {
  document.getElementById('hroty').scrollIntoView({ behavior: 'smooth' });
}

/* ─── Posts ─── */
function renderPosts() {
  const grid = document.getElementById('postsGrid');
  let filtered = [...POSTS];

  if (currentFilter === 'new')      filtered = [...POSTS].sort((a,b) => b.id - a.id);
  if (currentFilter === 'popular')  filtered = [...POSTS].sort((a,b) => b.likes - a.likes);
  if (currentFilter === 'trending') filtered = POSTS.filter(p => p.trending);

  const shown = filtered.slice(0, visiblePosts);
  grid.innerHTML = shown.map(p => postCard(p)).join('');

  // Bind like buttons
  grid.querySelectorAll('[data-like]').forEach(btn => {
    const id = +btn.dataset.like;
    if (likedPosts.has(id)) btn.classList.add('liked');
    btn.addEventListener('click', () => toggleLike(id, btn));
  });

  // Stagger animation
  grid.querySelectorAll('.post-card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.07}s`;
    card.style.animation = 'fadeInUp .5s ease both';
  });
}

function postCard(p) {
  return `
  <article class="post-card" id="post-${p.id}">
    ${p.trending ? '<div class="trending-badge">🔥 Trending</div>' : ''}
    <div class="post-header">
      <div class="post-avatar" style="background:linear-gradient(135deg,${p.color}88,${p.color}44)">${p.avatar}</div>
      <div class="post-meta">
        <div class="post-author">${p.author}</div>
        <div class="post-date">${p.date}</div>
      </div>
      <span class="post-tag ${p.tagClass}">${p.tag}</span>
    </div>
    <h3 class="post-title">${p.title}</h3>
    <p class="post-text">${p.text}</p>
    <div class="post-stats">
      <span class="pstat" data-like="${p.id}" title="Lajkovat">
        <i class="fa fa-heart"></i> <span class="like-count">${p.likes}</span>
      </span>
      <span class="pstat" title="Komentáře">
        <i class="fa fa-comment"></i> ${p.comments}
      </span>
      <span class="pstat views">
        <i class="fa fa-eye"></i> ${p.views.toLocaleString('cs')}
      </span>
    </div>
  </article>`;
}

function toggleLike(id, btn) {
  const countEl = btn.querySelector('.like-count');
  const post = POSTS.find(p => p.id === id);
  if (!post) return;
  if (likedPosts.has(id)) {
    likedPosts.delete(id);
    post.likes--;
    btn.classList.remove('liked');
  } else {
    likedPosts.add(id);
    post.likes++;
    btn.classList.add('liked');
    popHeart(btn);
  }
  countEl.textContent = post.likes;
}

function popHeart(el) {
  const heart = document.createElement('span');
  heart.textContent = '❤️';
  heart.style.cssText = 'position:absolute;pointer-events:none;font-size:1.4rem;animation:heartPop .8s ease forwards;z-index:10';
  const rect = el.getBoundingClientRect();
  heart.style.left = rect.left + 'px';
  heart.style.top = rect.top + window.scrollY + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 800);
}

// Inject heart animation
const heartStyle = document.createElement('style');
heartStyle.textContent = `
  @keyframes heartPop {
    0% { transform:scale(1) translateY(0); opacity:1; }
    100% { transform:scale(2) translateY(-40px); opacity:0; }
  }
  @keyframes fadeInUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
`;
document.head.appendChild(heartStyle);

/* ─── Filter tabs ─── */
function initFilterTabs() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active')?.classList.remove('active');
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      visiblePosts = 6;
      renderPosts();
    });
  });
}

/* ─── Load More ─── */
function initLoadMore() {
  document.getElementById('loadMore').addEventListener('click', () => {
    visiblePosts += 3;
    renderPosts();
    if (visiblePosts >= POSTS.length) {
      document.getElementById('loadMore').style.display = 'none';
    }
  });
}

/* ─── News ─── */
function renderNews() {
  const grid = document.getElementById('newsGrid');
  grid.innerHTML = NEWS.map(n => `
    <article class="news-card reveal">
      <div class="news-thumb">
        <div class="news-thumb-inner">${n.emoji}</div>
        <span class="news-category" style="background:${n.catBg};color:${n.catColor}">${n.category}</span>
      </div>
      <div class="news-body">
        <h3 class="news-title">${n.title}</h3>
        <p class="news-desc">${n.desc}</p>
        <div class="news-footer">
          <span><i class="fa fa-calendar" style="margin-right:5px"></i>${n.date}</span>
          <a href="#" class="news-read" onclick="return false">
            Číst více <i class="fa fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </article>
  `).join('');
  initReveal();
}

/* ─── Gallery / Masonry ─── */
function renderGallery() {
  const grid = document.getElementById('masonryGrid');
  grid.innerHTML = GALLERY.map((g, i) => `
    <div class="masonry-item reveal" data-index="${i}" style="height:${g.height}px">
      <div class="masonry-inner" style="height:${g.height}px">${g.emoji}</div>
      <div class="masonry-overlay"><i class="fa fa-magnifying-glass-plus"></i></div>
      <div class="masonry-caption">${g.caption}</div>
    </div>
  `).join('');

  grid.querySelectorAll('.masonry-item').forEach(item => {
    item.addEventListener('click', () => {
      lightboxIndex = +item.dataset.index;
      openLightbox(lightboxIndex);
    });
  });
  initReveal();
}

/* ─── Lightbox ─── */
function initLightbox() {
  document.getElementById('lightboxOverlay').addEventListener('click', closeLightbox);
  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  document.getElementById('lbPrev').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex - 1 + GALLERY.length) % GALLERY.length;
    updateLightbox();
  });
  document.getElementById('lbNext').addEventListener('click', () => {
    lightboxIndex = (lightboxIndex + 1) % GALLERY.length;
    updateLightbox();
  });
  document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft')  { lightboxIndex = (lightboxIndex - 1 + GALLERY.length) % GALLERY.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { lightboxIndex = (lightboxIndex + 1) % GALLERY.length; updateLightbox(); }
  });
}

function openLightbox(i) {
  lightboxIndex = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const g = GALLERY[lightboxIndex];
  const img = document.getElementById('lbImg');
  // Use a placeholder colored block since we have no real images
  img.style.cssText = `
    width:400px;height:300px;border-radius:16px;
    background:linear-gradient(135deg,#1E293B,#0F172A);
    display:flex;align-items:center;justify-content:center;
    font-size:6rem;object-fit:none;
  `;
  img.alt = g.caption;
  // Override img with a div for emoji display
  const wrap = document.getElementById('lbImg').parentNode;
  const existing = wrap.querySelector('.lb-emoji');
  if (existing) existing.remove();
  const emojiEl = document.createElement('div');
  emojiEl.className = 'lb-emoji';
  emojiEl.style.cssText = 'width:360px;height:260px;border-radius:16px;background:linear-gradient(135deg,#1E293B,#0A1020);display:flex;align-items:center;justify-content:center;font-size:7rem;border:1px solid rgba(255,255,255,.07)';
  emojiEl.textContent = g.emoji;
  img.replaceWith(emojiEl);
  document.getElementById('lbCaption').textContent = `${g.caption} (${lightboxIndex + 1} / ${GALLERY.length})`;
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── Reveal on scroll ─── */
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.observed)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => { el.classList.add('observed'); obs.observe(el); });
}

/* ─── Counter animation ─── */
function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.hstat-num').forEach(el => obs.observe(el));
}

function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const start = performance.now();
  const update = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.floor(ease * target).toLocaleString('cs');
    if (t < 1) requestAnimationFrame(update);
    else el.textContent = target.toLocaleString('cs');
  };
  requestAnimationFrame(update);
}

/* ─── Back to top ─── */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── Contact form ─── */
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Odesílám…';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('formSuccess').style.display = 'flex';
    btn.innerHTML = '<i class="fa fa-check"></i> Odesláno!';
    e.target.reset();
  }, 1500);
}

/* ─── Initial reveal trigger ─── */
window.addEventListener('load', () => {
  initReveal();
  // Stagger the hero stats cards
  document.querySelectorAll('.hstat').forEach((el, i) => {
    el.style.animation = `fadeInDown .5s ease ${0.3 + i * 0.1}s both`;
  });
});
