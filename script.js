document.getElementById('year').textContent = new Date().getFullYear();

// Fade-in on scroll for cards
const cards = document.querySelectorAll('.card');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(18px)';
  card.style.transition = `opacity .6s ease ${Number(getComputedStyle(card).getPropertyValue('--i') || 0) * 0.06}s, transform .6s ease ${Number(getComputedStyle(card).getPropertyValue('--i') || 0) * 0.06}s`;
  io.observe(card);
});

// Nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    nav.style.boxShadow = '0 4px 30px -10px rgba(0,0,0,.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
