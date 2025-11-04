(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear().toString(); }
  if(navToggle && siteNav){
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      siteNav.classList.toggle('open');
    });
    siteNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('open');
    }));
  }
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      const id = e.target.getAttribute('id');
      if(!id) return;
      const link = document.querySelector(`nav a[href="#${id}"]`);
      if(!link) return;
      if(e.isIntersecting){
        document.querySelectorAll('nav a').forEach(l=>l.classList.remove('active'));
        link.classList.add('active');
      }
    })
  },{ threshold: 0.4 });
  document.querySelectorAll('section[id]').forEach(s=>observer.observe(s));
})();

