/* ═══════════════════════════════════════════════════════════════
   animations.js
   Activa las animaciones de aparición cuando cada elemento
   entra en el viewport al hacer scroll.

   Usa IntersectionObserver: una API nativa del navegador que
   observa si un elemento es visible en pantalla, sin necesidad
   de escuchar el evento scroll manualmente (más eficiente).
═══════════════════════════════════════════════════════════════ */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      // Si el elemento es visible, agregarle la clase .visible
      // Eso dispara la transición CSS definida en animations.css
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.12 // se activa cuando el 12% del elemento ya es visible
  }
);

// Buscar todos los elementos con clase .reveal-up y observarlos
document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
