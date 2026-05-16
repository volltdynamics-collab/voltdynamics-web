// ========== SMOOTH SCROLL PARA ENLACES INTERNOS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Opcional: cerrar menú móvil si existiera
    }
  });
});

// ========== PEQUEÑO EFECTO DE APARICIÓN AL SCROLL (opcional) ==========
// (puedes eliminarlo si no lo necesitas, pero no afecta el diseño)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplica efecto suave a tarjetas y secciones (sin romper diseño original)
document.querySelectorAll('.service-card, .why-item, .gallery-item, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ========== EJEMPLO: MANEJO DEL FORMULARIO (solo consola, sin envío real) ==========
// ========== ENVÍO REAL A WHATSAPP ==========
const formBtn = document.querySelector('.contact-form .btn-primary');

if (formBtn) {
  formBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('.contact-form input[type="text"]').value;
    const proyecto = document.querySelector('.contact-form select').value;
    const descripcion = document.querySelector('.contact-form textarea').value;

    const mensaje = `Hola, soy ${nombre}%0A%0A` +
      `Tipo de proyecto: ${proyecto}%0A%0A` +
      `Descripción:%0A${descripcion}`;

    const telefono = '51985364109';

    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    window.open(url, '_blank');
  });
}