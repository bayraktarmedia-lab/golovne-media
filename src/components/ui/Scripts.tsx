'use client'

import { useEffect } from 'react'

export default function Scripts() {
  useEffect(() => {
    // ── ORIGINAL SCRIPTS FROM HTML ──
    
      // ── PDF DOWNLOAD ──
      function downloadPDF() {
        // Make all reveal elements visible before printing
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
          el.classList.add('visible');
        });
        // Set title for filename
        const orig = document.title;
        document.title = 'Медіакіт_Мережа_Головне_2026';
        window.print();
        document.title = orig;
      }
    
      // ── CUSTOM CURSOR ──
      const dot = document.createElement('div'); dot.id = 'cursor-dot';
      const ring = document.createElement('div'); ring.id = 'cursor-ring';
      document.body.append(dot, ring);
      let mx = -999, my = -999, rx = -999, ry = -999;
      document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
      (function animCursor() {
        rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
        dot.style.left = mx + 'px'; dot.style.top = my + 'px';
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        requestAnimationFrame(animCursor);
      })();
    
      // ── SWEEP CLASS on all buttons/CTAs ──
      document.querySelectorAll('.format-btn, .cta-btn, .telemetrio-btn, .hero-cta, .ch-btn')
        .forEach(el => el.classList.add('sweep-btn'));
    
      // ── SCROLL REVEAL (all directions) ──
      const allReveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      const revealObs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 70);
            revealObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0, rootMargin: '0px 0px 100px 0px' });
      allReveals.forEach(el => revealObs.observe(el));
    
      // Directional reveals for specific sections
      document.querySelectorAll('.about-text').forEach(el => { el.classList.add('reveal-left'); el.classList.remove('reveal'); });
      document.querySelectorAll('.about-visual').forEach(el => { el.classList.add('reveal-right'); el.classList.remove('reveal'); });
      // Format cards: simple reveal with stagger (not scale — conflicts with tilt)
      document.querySelectorAll('.format-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.12}s`;
      });
      document.querySelectorAll('.ch-card').forEach((el, i) => {
        el.style.transitionDelay = `${(i % 5) * 0.05}s`;
      });
    
      // ── STAGGER grids ──
      document.querySelectorAll('.about-metrics, .engagement-stats, .adv-grid, .clients-types').forEach(grid => {
        grid.querySelectorAll('.metric-box, .engagement-stat, .adv-card, .client-type').forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.08}s`;
        });
      });
    
      // ── COUNTER ANIMATION ──
      function animateCounter(el, target, suffix = '') {
        const isDecimal = el.dataset.decimal === '1';
        const duration = 1600;
        const start = performance.now();
        const easeOut = t => 1 - Math.pow(1 - t, 3);
        (function tick(now) {
          const t = Math.min((now - start) / duration, 1);
          const val = easeOut(t) * target;
          if (isDecimal) {
            el.textContent = val.toFixed(1).replace('.', ',') + suffix;
          } else {
            el.textContent = Math.floor(val).toLocaleString('uk') + suffix;
          }
          if (t < 1) requestAnimationFrame(tick);
        })(start);
      }
    
      // Trigger counters when stats visible
      const statObs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add('stat-animate');
          const raw = el.dataset.count;
          if (raw) {
            const suffix = el.dataset.suffix || '';
            animateCounter(el, parseFloat(raw), suffix);
          }
          statObs.unobserve(el);
        });
      }, { threshold: 0.5 });
    
      document.querySelectorAll('.stat-value, .metric-value, .hero-stat-num').forEach(el => {
        const text = el.textContent.trim();
        // Match number with possible decimal (comma or dot)
        const match = text.match(/^([\d]+(?:[.,]\d+)?)(.*)/);
        if (!match) return;
        const numStr = match[1].replace(',', '.');
        const num = parseFloat(numStr);
        const suffix = match[2].trim();
        const isDecimal = match[1].includes(',') || match[1].includes('.');
        if (!isNaN(num) && num > 0) {
          el.dataset.count = num;
          el.dataset.suffix = suffix;
          el.dataset.decimal = isDecimal ? '1' : '0';
          el.textContent = (isDecimal ? '0,0' : '0') + suffix;
          statObs.observe(el);
        }
      });
    
      // ── CARD TILT on hover ──
      document.querySelectorAll('.adv-card, .client-type, .format-card, .audience-card').forEach(card => {
        card.classList.add('tilt-card');
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    
      // ── SECTION LABEL TYPEWRITER ──
      document.querySelectorAll('.section-label').forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        const labelObs = new IntersectionObserver(entries => {
          if (!entries[0].isIntersecting) return;
          let i = 0;
          const t = setInterval(() => {
            el.textContent = text.slice(0, ++i);
            if (i >= text.length) clearInterval(t);
          }, 55);
          labelObs.unobserve(el);
        }, { threshold: 0, rootMargin: '200px 0px 200px 0px' });
        labelObs.observe(el);
        // Fallback: show text after 3s regardless
        setTimeout(() => { if (el.textContent !== text) el.textContent = text; }, 3000);
      });
    
      // ── HERO PARALLAX ──
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        // Only parallax hero title, NOT the map (it's position:absolute, breaks layout)
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle && scrollY < window.innerHeight) {
          heroTitle.style.transform = `translateY(${scrollY * 0.06}px)`;
        }
      }, { passive: true });
    
      // ── CAROUSEL ──
      let currentSlide = 0;
      const totalSlides = 3;
      const track = document.getElementById('carouselTrack');
      const cdots = document.querySelectorAll('.carousel-dot');
      function goToSlide(index) {
        currentSlide = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        cdots.forEach((d, i) => d.classList.toggle('active', i === index));
      }
      setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 3000);
      let startX = 0;
      track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
      track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goToSlide(diff > 0 ? Math.min(currentSlide + 1, totalSlides - 1) : Math.max(currentSlide - 1, 0));
      });
    

    // Expose to window for inline handlers
    if (typeof window !== 'undefined') {
      (window as typeof window & { goToSlide: (i: number) => void }).goToSlide = goToSlide;
      (window as typeof window & { downloadPDF: () => void }).downloadPDF = downloadPDF;
    }
  }, [])

  return null
}
