// ===== Pure Green Lawn and Pest Services — script.js =====

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.classList.toggle('active', isOpen);
    });

    // Close menu after clicking a link (mobile)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form (front-end only — swap in a real endpoint to actually send)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const name = data.get('name');

      // Placeholder success state — replace with a fetch() call to your backend/form service
      formStatus.textContent = `Thanks${name ? ', ' + name : ''}! We'll be in touch soon.`;
      contactForm.reset();
    });
  }

  // Newsletter signup (front-end only)
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterStatus = document.getElementById('newsletter-status');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      newsletterStatus.textContent = 'Thank you!';
      newsletterForm.reset();
    });
  }

  // Fade/slide-in on scroll for section headings + cards
  const revealTargets = document.querySelectorAll(
    '.mission-inner, .crew-inner, .service-card, .contact-inner, .bio-card, .about-cta-inner, .contact-info, .contact-page .contact-form'
  );

  if ('IntersectionObserver' in window && revealTargets.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
});
