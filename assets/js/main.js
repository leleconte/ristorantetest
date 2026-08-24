(() => {
  const body = document.body;
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileBook = document.querySelector('.mobile-book');

  const setScrolled = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 30);
    if (mobileBook) mobileBook.classList.toggle('visible', window.scrollY > Math.min(520, window.innerHeight * .7));
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive:true });

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const open = body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
      mobileMenu.setAttribute('aria-hidden', String(!open));
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && body.classList.contains('menu-open')) {
        body.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        toggle.focus();
      }
    });
  }

  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
    revealEls.forEach(el => io.observe(el));
  } else revealEls.forEach(el => el.classList.add('is-visible'));

  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const target = lightbox.querySelector('img');
    const close = lightbox.querySelector('button');
    const closeLightbox = () => { lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); };
    document.querySelectorAll('.gallery-item img').forEach(img => img.addEventListener('click', () => {
      target.src = img.currentSrc || img.src; target.alt = img.alt;
      lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false'); close.focus();
    }));
    close.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
  }

  const form = document.querySelector('#reservation-form');
  if (form) {
    const date = form.querySelector('#date');
    if (date) {
      const now = new Date(); now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      date.min = now.toISOString().split('T')[0];
    }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const data = new FormData(form);
      const required = ['date','time','guests','firstName','lastName','phone','email'];
      const missing = required.some(k => !String(data.get(k) || '').trim());
      const invalid = !form.checkValidity();
      const consent = form.querySelector('#consent').checked;
      if (missing || invalid || !consent) {
        status.className = 'form-status show error';
        status.textContent = 'Controlla i campi obbligatori e conferma di aver letto l’informativa.';
        status.focus?.();
        return;
      }
      status.className = 'form-status show success';
      status.textContent = 'Richiesta demo ricevuta. In un sito reale questo passaggio invierebbe i dati al gestionale prenotazioni.';
      form.reset();
    });
  }
})();
