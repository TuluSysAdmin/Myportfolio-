/* ============================================================
   script.js — Tulu Bekele Portfolio
   ============================================================ */

/* ── Scroll Reveal ──────────────────────────────────────────
   Watches every element with class="reveal".
   When it enters the viewport, adds class "visible" which
   triggers the CSS fade-up transition (defined in style.css).
──────────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger each element by 70 ms so they cascade in
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObserver.unobserve(entry.target); // fire once only
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ── Mobile Hamburger Menu ──────────────────────────────────
   Toggles the nav-links list open/closed on small screens.
──────────────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

// Close menu when any nav link is clicked
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => navLinks.classList.remove('open'))
);


/* ── Sticky Nav Shadow ──────────────────────────────────────
   Adds a subtle shadow to the nav bar once the user scrolls
   past 40 px, making it feel "lifted" from the page.
──────────────────────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.boxShadow =
    window.scrollY > 40 ? '0 4px 30px rgba(0,0,0,0.45)' : 'none';
});


/* ── Dark / Light Theme Toggle ──────────────────────────────
   Swaps CSS custom property values on the root element.
   To add more colour variables, add them to both the dark
   and light blocks below AND to :root in style.css.
──────────────────────────────────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');
let isDark = true;

const darkTheme = {
  '--bg':          '#1e2a3a',
  '--surface':     '#273449',
  '--surface2':    '#30405a',
  '--border':      'rgba(255,255,255,0.13)',
  '--text':        '#eaf0fa',
  '--text-muted':  '#c0cfe8',
  '--text-dim':    '#8da0bc',
  '--heading':     '#ffffff',
  '--tag-bg':      'rgba(79,156,249,0.16)',
};

const lightTheme = {
  '--bg':          '#eef2f8',
  '--surface':     '#ffffff',
  '--surface2':    '#dde5f0',
  '--border':      'rgba(0,0,0,0.1)',
  '--text':        '#1a2540',
  '--text-muted':  '#344f72',
  '--text-dim':    '#6a80a0',
  '--heading':     '#0f1e35',
  '--tag-bg':      'rgba(79,156,249,0.1)',
};

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  const theme = isDark ? darkTheme : lightTheme;
  const root  = document.documentElement.style;
  Object.entries(theme).forEach(([prop, val]) => root.setProperty(prop, val));
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});


/* ── Contact Form Feedback ──────────────────────────────────
   Shows a green "Sent!" confirmation on the button for 3 s.
   Wire this up to a real form service (e.g. Formspree,
   EmailJS, or Netlify Forms) when you deploy.
──────────────────────────────────────────────────────────── */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  const original = btn.innerHTML;
  btn.innerHTML = '✓ Sent!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = '';
  }, 3000);
}
