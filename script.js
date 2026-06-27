// Mobile menu
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4 * 0.06) + 's';
  io.observe(el);
});

// Blinking cursor in Moula bubble
const cursor = document.querySelector('#moulaBubble .typing');
if (cursor) setInterval(() => { cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0'; }, 500);
