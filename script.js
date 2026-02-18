// Centralized links object for the hub
const LINKS = {
  techner: "techner/index.html",
  profound: "profound/index.html",
  muziclly: "https://www.muzicllyglobal.com/avishkarroopi",
  hub: "https://avishkarroopi.github.io/Hub/",
  masterclass: "ar-masterclass/index.html"
};

document.addEventListener('DOMContentLoaded', () => {
  // Entrance reveal (preserve existing behavior)
  requestAnimationFrame(() => {
    document.querySelectorAll('header, .cards, .social-section, .site-footer').forEach(el => {
      el.classList.add('revealed');
    });
  })

  // Handle card clicks via centralized LINKS
  document.querySelectorAll('.card').forEach(card => {
    const key = card.dataset.link;
    if(!key) return;
    card.addEventListener('click', (e)=>{
      e.preventDefault();
      const url = LINKS[key];
      if(!url){
        // fallback animation if link missing
        card.animate([{transform:'scale(1)'},{transform:'scale(1.02)'},{transform:'scale(1)'}],{duration:350});
        const orig = card.style.boxShadow;
        card.style.boxShadow = '0 18px 50px rgba(212,179,91,0.12)';
        setTimeout(()=>card.style.boxShadow = orig, 420);
        return;
      }
      // open external links in new tab
      if(url.startsWith('http')){
        window.open(url, '_blank', 'noopener');
      } else {
        window.location.href = url;
      }
    })

    // subtle parallax tilt on pointer move (desktop) — preserve existing interaction
    let rect=null;
    card.addEventListener('pointermove', (ev)=>{
      if(window.innerWidth < 900) return;
      rect = rect || card.getBoundingClientRect();
      const x = (ev.clientX - rect.left) / rect.width - 0.5;
      const y = (ev.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) translateZ(0) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*6).toFixed(2)}deg)`;
    })
    card.addEventListener('pointerleave', ()=>{ card.style.transform = ''; rect = null })
  })
})
