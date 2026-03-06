/* =====================
   SCRIPT.JS — Daksh's Portfolio
===================== */

// ── NO CUSTOM CURSOR — default browser cursor is used ─────────────────────


// ── NAVBAR SCROLL ──────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


// ── MOBILE NAV TOGGLE ─────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ── SMOOTH SCROLL (for all nav links) ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ── SKILL BARS ANIMATION ──────────────────────────────────
const skillFills = document.querySelectorAll('.skill-fill');
let skillsAnimated = false;

function animateSkills() {
  if (skillsAnimated) return;
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  const rect = skillsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 80) {
    skillsAnimated = true;
    skillFills.forEach(fill => {
      const targetWidth = fill.getAttribute('data-width') + '%';
      // Small delay so CSS transition kicks in after width change
      setTimeout(() => {
        fill.style.width = targetWidth;
      }, 100);
    });
  }
}


// ── SCROLL REVEAL (project cards) ─────────────────────────
const revealCards = document.querySelectorAll('.project-card');

function revealOnScroll() {
  revealCards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      setTimeout(() => {
        card.classList.add('visible');
      }, i * 100);
    }
  });
}


// ── COMBINED SCROLL LISTENER ──────────────────────────────
window.addEventListener('scroll', () => {
  animateSkills();
  revealOnScroll();
});

// Run once on load in case already in view
animateSkills();
revealOnScroll();
