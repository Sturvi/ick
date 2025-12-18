// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (navLinks) { navLinks.classList.remove('active'); }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Intersection Observer for animations
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .stat-item, .gallery-item, .partner-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Gallery expand/collapse functionality
const galleryWrapper = document.getElementById('galleryWrapper');
const galleryExpandBtn = document.getElementById('galleryExpandBtn');

if (galleryWrapper && galleryExpandBtn) {
  const btnText = galleryExpandBtn.querySelector('.btn-text');

  galleryExpandBtn.addEventListener('click', () => {
    const isExpanded = galleryWrapper.classList.toggle('expanded');

    // Change button text
    if (btnText) {
      btnText.textContent = isExpanded ? 'Gizlət' : 'Daha ətraflı';
    }

    // Animate newly visible items when expanding
    if (isExpanded) {
      const hiddenItems = galleryWrapper.querySelectorAll('.gallery-item');
      hiddenItems.forEach((item, index) => {
        if (index >= 3) {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, (index - 3) * 100);
        }
      });
    } else {
      // Scroll to gallery section when collapsing
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// Hero video autoplay
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  console.log('Hero video element found');
  console.log('Video src:', heroVideo.src);
  console.log('Video readyState:', heroVideo.readyState);
  console.log('Video networkState:', heroVideo.networkState);

  // Multiple event listeners for debugging
  heroVideo.addEventListener('loadstart', () => console.log('📥 Video loading started'));
  heroVideo.addEventListener('progress', () => console.log('⏳ Video loading...'));
  heroVideo.addEventListener('canplay', () => console.log('🎬 Video can play'));
  heroVideo.addEventListener('canplaythrough', () => console.log('🎬 Video can play through'));

  heroVideo.addEventListener('loadeddata', () => {
    console.log('✅ Video loaded successfully');
    console.log('Video duration:', heroVideo.duration);
    heroVideo.play().then(() => {
      console.log('▶️ Video playing');
    }).catch(err => {
      console.error('❌ Video play failed:', err);
    });
  });

  heroVideo.addEventListener('error', (e) => {
    console.error('❌ Video error:', e);
    if (heroVideo.error) {
      console.error('Error code:', heroVideo.error.code);
      console.error('Error message:', heroVideo.error.message);
    }
  });

  heroVideo.addEventListener('stalled', () => console.warn('⚠️ Video stalled'));
  heroVideo.addEventListener('suspend', () => console.warn('⚠️ Video suspend'));
  heroVideo.addEventListener('abort', () => console.warn('⚠️ Video abort'));

  // Try to load video explicitly
  heroVideo.load();

  // Force play on user interaction
  document.addEventListener('click', () => {
    console.log('User clicked, trying to play video');
    if (heroVideo.paused) {
      heroVideo.play().catch(err => console.log('Play on click failed:', err));
    }
  }, { once: true });
}

