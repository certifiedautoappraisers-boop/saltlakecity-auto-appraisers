/* =========================================
   Tampa Auto Appraisers — Main JavaScript
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

  // === MOBILE NAVIGATION ===
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  const navOverlay = document.querySelector('.nav-overlay');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      mainNav.classList.toggle('open');
      if (navOverlay) navOverlay.classList.toggle('active');
      document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
    });

    if (navOverlay) {
      navOverlay.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mainNav.classList.remove('open');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close on nav link click
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mainNav.classList.remove('open');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // === HERO CAROUSEL ===
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');

  if (heroSlides.length > 0) {
    let currentSlide = 0;
    let heroInterval;

    function showSlide(index) {
      heroSlides.forEach(s => s.classList.remove('active'));
      heroDots.forEach(d => d.classList.remove('active'));
      heroSlides[index].classList.add('active');
      if (heroDots[index]) heroDots[index].classList.add('active');
      currentSlide = index;
    }

    function nextSlide() {
      showSlide((currentSlide + 1) % heroSlides.length);
    }

    function startHeroCarousel() {
      heroInterval = setInterval(nextSlide, 5000);
    }

    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(heroInterval);
        showSlide(i);
        startHeroCarousel();
      });
    });

    showSlide(0);
    startHeroCarousel();
  }

  // === FAQ ACCORDION ===
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close all
        faqItems.forEach(i => i.classList.remove('active'));
        // Open clicked if not already open
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // === TESTIMONIALS CAROUSEL ===
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');

  if (testimonialSlides.length > 0) {
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
      testimonialSlides.forEach(s => s.classList.remove('active'));
      testimonialDots.forEach(d => d.classList.remove('active'));
      testimonialSlides[index].classList.add('active');
      if (testimonialDots[index]) testimonialDots[index].classList.add('active');
      currentTestimonial = index;
    }

    function nextTestimonial() {
      showTestimonial((currentTestimonial + 1) % testimonialSlides.length);
    }

    function startTestimonialCarousel() {
      testimonialInterval = setInterval(nextTestimonial, 8000);
    }

    testimonialDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(testimonialInterval);
        showTestimonial(i);
        startTestimonialCarousel();
      });
    });

    showTestimonial(0);
    startTestimonialCarousel();
  }

  // === CONTACT FORM (Frontend only) ===
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you within 24 hours.');
      contactForm.reset();
    });
  }

  // === ORDER FORM (Frontend only) ===
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your documents have been submitted. An Tampa Auto Appraisers specialist will review your materials and follow up with you promptly.');
      orderForm.reset();
    });
  }

  // === UPLOAD DROPZONE ===
  const dropzone = document.querySelector('.upload-dropzone');
  const fileInput = document.getElementById('fileUpload');

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--color-primary)';
      dropzone.style.background = 'rgba(232, 150, 30, 0.06)';
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.style.borderColor = '';
      dropzone.style.background = '';
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = '';
      dropzone.style.background = '';
      if (e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        const names = Array.from(e.dataTransfer.files).map(f => f.name).join(', ');
        dropzone.querySelector('p').textContent = `Selected: ${names}`;
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        const names = Array.from(fileInput.files).map(f => f.name).join(', ');
        dropzone.querySelector('p').textContent = `Selected: ${names}`;
      }
    });
  }

  // === SCROLL REVEAL ANIMATION ===
  const revealElements = document.querySelectorAll('.section');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      revealObserver.observe(el);
    });
  }

  // === ACTIVE NAV HIGHLIGHTING ===
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
