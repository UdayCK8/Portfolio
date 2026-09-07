const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
let heroArt, portrait;
document.querySelector('main > section.hero')?.classList.add('hero');
document.querySelector('#about')?.classList.add('about');
document.querySelector('#skills')?.classList.add('skills');
document.querySelector('#experience')?.classList.add('experience');
document.querySelector('#projects')?.classList.add('projects');
document.querySelector('#education')?.classList.add('education','certifications');
document.querySelector('#contact')?.classList.add('contact');
// Keep backgrounds on full-width sections while centering only their content.
document.querySelectorAll('main > section, footer').forEach((section) => {
  section.classList.add('section');
  if (!section.querySelector(':scope > .container')) {
    const container = document.createElement('div');
    container.className = 'container';
    while (section.firstChild) container.appendChild(section.firstChild);
    section.appendChild(container);
  }
});
const header = document.querySelector('.site-header');
if (header && !header.querySelector(':scope > .container')) {
  const container = document.createElement('div');
  container.className = 'container';
  while (header.firstChild) container.appendChild(header.firstChild);
  header.appendChild(container);
}
const heroSection = document.querySelector('main > section.hero');
const heroContainer = heroSection?.querySelector(':scope > .container');
if (heroContainer && !heroContainer.dataset.rebuilt) {
  heroContainer.dataset.rebuilt = 'true';
  heroContainer.innerHTML = `<div class="hero-content"><p class="hero-eyebrow">● OPEN TO OPPORTUNITIES</p><p class="hero-meta">PYTHON / ML / SECURITY · PANDAVAPURA, KA</p><h1 class="hero-title"><span>SECURE.</span><span>BUILD.</span><span>INNOVATE.</span></h1><p class="hero-role">Junior SOC Analyst &amp; Python Developer</p><p class="hero-specialties">Threat Detection · Network Security · Backend Development · Machine Learning</p><p class="hero-description">I build secure backend and machine-learning systems that solve real problems—not just tutorials.</p><div class="hero-actions"><a class="button green" href="#projects">View Projects <span>↗</span></a><a class="button outline" href="UDAY_CK_1.pdf" target="_blank" rel="noopener noreferrer">View Résumé <span>↗</span></a><a class="button outline" href="UDAY_CK_1.pdf" download="UDAY_C_K_Resume.pdf">Download Résumé <span>↓</span></a><a class="text-link" href="#contact">Contact Me <span>→</span></a></div></div><div class="hero-visual"><div class="terminal-card"><div class="terminal-header"><div class="terminal-dots" aria-hidden="true"><span></span><span></span><span></span></div><span>secure-session.log</span></div><div class="terminal-content"><p>$ whoami / uday-ck</p><dl><div><dt>name</dt><dd>UDAY C K</dd></div><div><dt>role</dt><dd>Junior SOC Analyst &amp; Python Developer</dd></div><div><dt>location</dt><dd>Pandavapura, Karnataka</dd></div><div><dt>status</dt><dd>AVAILABLE</dd></div></dl><p class="terminal-ok">[OK] systems ready · observe / respond</p></div></div><figure class="photo-frame"><img class="hero-photo" src="./IMG/MEPHOTO.jpeg" alt="Uday C K" width="400" height="500"></figure></div>`;
}
if (heroArt && heroArt.querySelector('.terminal-body') && portrait) {
  heroArt.innerHTML = '<div class="terminal-card"><div class="terminal-header"><div class="terminal-dots" aria-hidden="true"><span></span><span></span><span></span></div><span>secure-session.log</span></div><div class="terminal-content"><p class="terminal-command">$ whoami / uday-ck</p><dl class="terminal-details"><div><dt>name</dt><dd>UDAY C K</dd></div><div><dt>role</dt><dd>Junior SOC Analyst &amp; Python Developer</dd></div><div><dt>location</dt><dd>Pandavapura, Karnataka</dd></div><div><dt>status</dt><dd class="status">AVAILABLE</dd></div></dl><p class="terminal-result">[OK] systems ready · observe / respond</p></div></div><div class="photo-frame"></div>';
  heroArt.querySelector('.photo-frame').appendChild(portrait);
}
const layeredVisual = document.querySelector('.hero-visual');
const layeredPhoto = layeredVisual?.querySelector('.hero-photo');
if (layeredVisual && layeredPhoto && !layeredVisual.dataset.layered) {
  layeredVisual.dataset.layered = 'true';
  layeredVisual.innerHTML = '<div class="terminal-card"><div class="terminal-header"><div class="terminal-dots" aria-hidden="true"><span></span><span></span><span></span></div><span>secure-session.log</span></div><div class="terminal-content"><p class="terminal-command">$ whoami / uday-ck</p><dl class="terminal-details"><div><dt>name</dt><dd>UDAY C K</dd></div><div><dt>role</dt><dd>Junior SOC Analyst<br>&amp; Python Developer</dd></div><div><dt>location</dt><dd>Pandavapura,<br>Karnataka</dd></div><div><dt>status</dt><dd class="available">AVAILABLE</dd></div></dl><p class="terminal-result">[OK] systems ready<br>observe / respond</p></div></div><figure class="photo-frame"></figure>';
  layeredVisual.querySelector('.photo-frame').appendChild(layeredPhoto);
}
const roleCell = document.querySelector('.hero-visual dt')?.parentElement?.parentElement?.querySelector('div:nth-child(2) dd');
if (roleCell) roleCell.textContent = 'Junior SOC Analyst & Python Developer';
const terminalDetails = document.querySelector('.hero-visual .terminal-details, .hero-visual dl');
if (terminalDetails) {
  const rows = [...terminalDetails.children];
  rows.forEach((row) => {
    const label = row.querySelector('dt')?.textContent.trim();
    const value = row.querySelector('dd');
    if (!value) return;
    if (label === 'name') value.textContent = 'UDAY C K';
    if (label === 'role') value.innerHTML = 'Junior SOC Analyst<br>&amp; Python Developer';
    if (label === 'location') value.innerHTML = 'Pandavapura,<br>Karnataka';
    if (label === 'status') value.textContent = 'AVAILABLE';
  });
}
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('#site-nav a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menu?.setAttribute('aria-expanded', 'false'); }));
const revealObserver = new IntersectionObserver((entries, observer) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }); }, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
const sectionObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) document.querySelectorAll('#site-nav a').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px' });
document.querySelectorAll('#home, main section[id], footer[id]').forEach((section) => sectionObserver.observe(section));
// Progressive enhancements for the editorial portfolio structure.
const heroCopy = document.querySelector('.hero-copy');
if (heroCopy && !heroCopy.querySelector('.opportunity-badge')) {
  const badge = document.createElement('span');
  badge.className = 'opportunity-badge';
  badge.textContent = '● OPEN TO OPPORTUNITIES';
  heroCopy.insertBefore(badge, heroCopy.firstElementChild);
}
heroArt = document.querySelector('.hero-art');
portrait = document.querySelector('.hero-photo');
if (heroArt && portrait && !heroArt.querySelector('.terminal-card')) {
  heroArt.innerHTML = '<div class="terminal-card"><div class="terminal-bar"><span></span><span></span><span></span><b>secure-session.log</b></div><div class="terminal-body"><p>$ whoami / uday-ck</p><p><i>name</i> UDAY C K</p><p><i>role</i> Junior SOC Analyst &amp; Python Developer</p><p><i>location</i> Pandavapura, Karnataka</p><p><i>status</i> <strong>AVAILABLE</strong></p><p class="terminal-ok">[OK] systems ready · observe / respond</p></div></div>';
  heroArt.appendChild(portrait);
}
const navElement = document.querySelector('#site-nav');
if (navElement && !navElement.querySelector('.nav-resume')) {
  const resume = document.createElement('a');
  resume.className = 'nav-resume';
  resume.href = 'UDAY_CK_1.pdf';
  resume.target = '_blank';
  resume.rel = 'noopener noreferrer';
  resume.textContent = 'View Résumé ↗';
  navElement.appendChild(resume);
}
const skills = document.querySelector('#skills');
if (skills && !skills.querySelector('.skill-ticker')) {
  const ticker = document.createElement('div');
  ticker.className = 'toolkit-strip skill-ticker';
  ticker.setAttribute('aria-label', 'Skills ticker');
  ticker.innerHTML = '<span class="ticker-label">$ toolkit --active</span><div>[ Python ] [ Flask ] [ Network Security ] [ IAM ] [ Machine Learning ] [ MySQL ] [ OpenCV ] <b>◆</b> [ Python ] [ Flask ] [ Network Security ] [ IAM ] [ Machine Learning ] [ MySQL ] [ OpenCV ]</div>';
  skills.parentNode.insertBefore(ticker, skills);
}
document.querySelectorAll('.skill-ticker').forEach((ticker) => ticker.setAttribute('tabindex', '0'));
const aboutSection = document.querySelector('#about');
if (false && aboutSection && !aboutSection.querySelector('.about-ticker')) {
  const aboutTicker = document.createElement('div');
  aboutTicker.className = 'skill-ticker about-ticker';
  aboutTicker.setAttribute('aria-label', 'Technology ticker');
  aboutTicker.innerHTML = '<div>PYTHON · FLASK · MACHINE LEARNING · OPENCV · MYSQL · NETWORK SECURITY · IAM · PYTHON · FLASK · MACHINE LEARNING · OPENCV · MYSQL · NETWORK SECURITY · IAM</div>';
  aboutSection.appendChild(aboutTicker);
}
const about = document.querySelector('#about .about-grid > div');
if (about && !about.querySelector('.about-meta')) {
  const meta = document.createElement('p');
  meta.className = 'about-meta';
  meta.innerHTML = '<strong>BASED IN</strong> Pandavapura, Karnataka 571434<br><strong>EDUCATION</strong> MCA · ATME College of Engineering · VTU<br><strong>ROLES</strong> Python Developer · SOC Analyst · Machine Learning';
  about.appendChild(meta);
}
const timeline = document.querySelector('#experience .timeline');
if (timeline && !timeline.querySelector('.timeline-label')) {
  const label = document.createElement('div');
  label.className = 'timeline-label';
  label.textContent = 'PROFESSIONAL + VIRTUAL EXPERIENCE';
  timeline.insertBefore(label, timeline.firstChild);
}
// Rebuild experience into distinct professional and virtual sections.
const experienceSection = document.querySelector('#experience');
if (experienceSection && !experienceSection.querySelector('.experience-layout')) {
  const layout = document.createElement('div');
  layout.className = 'experience-layout';
  layout.innerHTML = `<div class="experience-group professional-group"><p class="group-kicker">01 / PROFESSIONAL EXPERIENCE</p><article class="professional-card"><span class="experience-badge">// PROFESSIONAL</span><p class="experience-date">JAN–FEB 2025</p><h2>Python Developer</h2><h3>RankBook Learning &amp; Software Solutions, Mysuru</h3><ul><li>Built a Python Library Management System.</li><li>Implemented CRUD operations and user authentication.</li><li>Added database handling, validation, and exception management.</li><li>Supported debugging, testing, and performance improvements.</li></ul></article></div><div class="experience-group virtual-group"><p class="group-kicker">02 / VIRTUAL EXPERIENCE</p><div class="virtual-grid"><article><span class="virtual-badge">VIRTUAL</span><p class="experience-date">AUG 2026</p><h3>Tata Data Visualization</h3><p>Framed business scenarios, selected visuals, built dashboards, and communicated executive insights.</p></article><article><span class="virtual-badge">VIRTUAL</span><p class="experience-date">AUG 2026</p><h3>Tata Cybersecurity/IAM</h3><p>Applied IAM principles, aligned security recommendations with business objectives, and produced technical documentation.</p></article><article><span class="virtual-badge">VIRTUAL</span><p class="experience-date">AUG 2026</p><h3>Mastercard Cybersecurity</h3><p>Designed a phishing simulation, analysed team vulnerabilities, and created targeted security-awareness training.</p></article><article><span class="virtual-badge">VIRTUAL</span><p class="experience-date">JUN 2026</p><h3>Deloitte Cyber</h3><p>Classified login attempts, identified a vulnerable API, and prepared a security report.</p></article><article><span class="virtual-badge">VIRTUAL</span><p class="experience-date">JUN 2026</p><h3>Deloitte Data Analytics</h3><p>Analysed four datasets and created decision-focused visualizations.</p></article></div></div>`;
  experienceSection.querySelector('.timeline')?.remove();
  experienceSection.querySelector('.container')?.appendChild(layout);
}
const projectCards = document.querySelectorAll('#projects .project-card');
projectCards.forEach((card, index) => { card.classList.toggle('featured', index === 0); card.setAttribute('tabindex', '0'); card.setAttribute('role', 'article'); const number = card.querySelector('.card-top'); if (number) number.firstChild.textContent = `PROJECT_0${index + 1}`; });
const skillsTitle = document.querySelector('#skills .section-title');
if (skillsTitle) skillsTitle.innerHTML = '02 / SKILLS<br><span>TECHNICAL TOOLKIT</span>';
const certWrap = document.querySelector('.certs');
if (certWrap && !certWrap.querySelector('.cert-filters')) {
  const filterBar = document.createElement('div');
  filterBar.className = 'cert-filters';
  filterBar.innerHTML = '<button type="button" class="active" data-filter="all">All</button><button type="button" data-filter="security">Security</button><button type="button" data-filter="development">Development</button><button type="button" data-filter="data">Data</button>';
  certWrap.insertBefore(filterBar, certWrap.querySelector(':scope > div'));
  const certs = [...certWrap.querySelectorAll(':scope > div:last-child span')];
  certs.forEach((card) => { const name = card.textContent.toLowerCase(); card.dataset.category = /cyber|security|iam|network/.test(name) ? 'security' : /analytics|visualization/.test(name) ? 'data' : 'development'; });
  filterBar.addEventListener('click', (event) => { const button = event.target.closest('button'); if (!button) return; filterBar.querySelectorAll('button').forEach((item) => item.classList.toggle('active', item === button)); const filter = button.dataset.filter; certs.forEach((card) => { card.hidden = filter !== 'all' && card.dataset.category !== filter; }); });
}
const locationItem = document.querySelector('.contact-details span');
if (locationItem && !locationItem.querySelector('a')) {
  const locationLink = document.createElement('a');
  locationLink.href = 'https://www.google.com/maps/search/?api=1&query=Pandavapura%2C%20Karnataka%20571434';
  locationLink.target = '_blank';
  locationLink.rel = 'noopener noreferrer';
  locationLink.innerHTML = locationItem.innerHTML;
  locationItem.replaceWith(locationLink);
}
const contactForm = document.querySelector('#contact-form');
if (contactForm && !contactForm.elements.subject) {
  const subjectLabel = document.createElement('label');
  subjectLabel.htmlFor = 'subject';
  subjectLabel.innerHTML = 'Subject<input id="subject" name="subject" required><small data-error="subject"></small>';
  contactForm.insertBefore(subjectLabel, contactForm.querySelector('label[for="message"]'));
}
const form = document.querySelector('#contact-form');
const checks = { name: (v) => v.trim().length > 1 ? '' : 'Please enter your name.', email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'Enter a valid email.', subject: (v) => v.trim().length > 2 ? '' : 'Please add a subject.', message: (v) => v.trim().length >= 10 ? '' : 'Message should be at least 10 characters.' };
form?.addEventListener('submit', (event) => { event.preventDefault(); let valid = true; Object.entries(checks).forEach(([key, check]) => { const input = form.elements[key]; const error = form.querySelector(`[data-error="${key}"]`); const message = check(input.value); error.textContent = message; input.setAttribute('aria-invalid', String(Boolean(message))); if (message) valid = false; }); const status = document.querySelector('#form-status'); if (!valid) { status.textContent = 'Please fix the highlighted fields.'; return; } const data = new FormData(form); status.textContent = 'Thanks — opening your email client…'; status.style.color = 'var(--green)'; const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`); const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`); window.location.href = `mailto:udayudaya.666@gmail.com?subject=${subject}&body=${body}`; });
