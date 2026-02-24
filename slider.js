document.addEventListener("DOMContentLoaded", () => {

  // SCROLL REVEAL
  const reveals = document.querySelectorAll(
    '.stat, .card, .method-grid div, .cta, .contact'
  );

  function revealOnScroll(){
    reveals.forEach(el=>{
      const top = el.getBoundingClientRect().top;
      const visible = 120;
      if(top < window.innerHeight - visible){
        el.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

// WHATSAPP FORM
function sendWhatsAppLead(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const business = document.getElementById('business').value;

  const message = `Hola, quiero un diagnóstico de Meta Ads.

Nombre: ${name}
Correo: ${email}
Celular: ${phone}
Negocio: ${business}`;

  const url = `https://wa.me/51961334425?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');

  setTimeout(()=>{
    window.location.href = "thanks.html";
  },700);
}

