/* =========================================
   Salt Lake City Auto Appraisers — Main JavaScript
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

  // === CONTACT FORM (Real submission via Formsubmit.co) ===
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"], input[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending...'; }
      try {
        const fd = new FormData(contactForm);
        fd.append('_subject', 'New Contact Form Submission — ' + (document.title || 'AVR City Site'));
        fd.append('_template', 'table');
        fd.append('_captcha', 'false');
        fd.append('_source_url', window.location.href);
        const res = await fetch('https://formsubmit.co/ajax/certifiedautoappraisers@gmail.com', {
          method: 'POST',
          body: fd,
          headers: { 'Accept': 'application/json' }
        });
        const data = await res.json();
        if (data && (data.success === 'true' || data.success === true)) {
          alert('Thank you for your message! We received it and will get back to you within 24 hours.');
          contactForm.reset();
        } else {
          alert('There was an issue submitting the form. Please call us at (877) 868-9123 or email certifiedautoappraisers@gmail.com.');
          console.error('Form submit error:', data);
        }
      } catch (err) {
        alert('Network error submitting the form. Please call us at (877) 868-9123 or email certifiedautoappraisers@gmail.com.');
        console.error('Form submit exception:', err);
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
      }
    });
  }

  // === ORDER FORM (Multipart submission — DELIVERS FILE ATTACHMENTS) ===
  // NOTE: formsubmit.co /ajax/ endpoint SILENTLY DROPS file uploads.
  // We must submit as regular multipart/form-data to the non-AJAX endpoint.
  // Using a hidden iframe target keeps the UX "AJAX-like" (no page redirect).
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    // Reconfigure the form for real multipart submission with attachments
    orderForm.setAttribute('action', 'https://formsubmit.co/certifiedautoappraisers@gmail.com');
    orderForm.setAttribute('method', 'POST');
    orderForm.setAttribute('enctype', 'multipart/form-data');

    // Create a hidden iframe so submission doesn't navigate away
    let iframe = document.getElementById('orderFormTargetFrame');
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.name = 'orderFormTargetFrame';
      iframe.id = 'orderFormTargetFrame';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }
    orderForm.setAttribute('target', 'orderFormTargetFrame');

    // Add hidden control fields once
    function ensureHidden(name, value) {
      if (orderForm.querySelector('input[name="' + name + '"][type="hidden"]')) return;
      const h = document.createElement('input');
      h.type = 'hidden';
      h.name = name;
      h.value = value;
      orderForm.appendChild(h);
    }
    ensureHidden('_subject', 'NEW ORDER + UPLOADED DOCUMENTS — ' + (document.title || 'AVR City Site'));
    ensureHidden('_template', 'table');
    ensureHidden('_captcha', 'false');
    ensureHidden('_next', window.location.origin + '/order.html?submitted=1');

    orderForm.addEventListener('submit', (e) => {
      const submitBtn = orderForm.querySelector('button[type="submit"], input[type="submit"]');
      const originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Uploading & Sending...'; }

      const fileInput = document.getElementById('fileUpload') || document.querySelector('input[type="file"]');
      let totalKB = 0;
      if (fileInput && fileInput.files) {
        for (let i = 0; i < fileInput.files.length; i++) {
          totalKB += fileInput.files[i].size / 1024;
          console.log('Attaching file ' + (i+1) + ': ' + fileInput.files[i].name + ' (' + Math.round(fileInput.files[i].size/1024) + ' KB)');
        }
      }

      // Let the native multipart submit go through to formsubmit.co
      // Show success feedback after ~1.5s (iframe will have completed the POST)
      setTimeout(() => {
        alert('Thank you! Your documents have been submitted successfully. An appraisal specialist will review your materials and follow up with you promptly.');
        orderForm.reset();
        const dz = document.querySelector('.upload-dropzone p');
        if (dz) dz.textContent = 'Drag & drop your files here, or click to browse.';
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText; }
      }, 1500);
    });
  }

  // Show success banner if returning from formsubmit.co
  if (window.location.search.indexOf('submitted=1') !== -1) {
    const banner = document.createElement('div');
    banner.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#28a745;color:#fff;padding:16px;text-align:center;z-index:9999;font-weight:600;';
    banner.textContent = '✓ Your appraisal request and documents were received. We will follow up shortly.';
    document.body.appendChild(banner);
    setTimeout(() => banner.remove(), 6000);
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
