/* ═══════════════════════════════════════════════════════════════
   nav.js
   Lógica del menú hamburguesa para mobile.
   Agrega/quita la clase .open en el <nav> al hacer click.
   El CSS en mediaqueries/nav.css se encarga del visual.
═══════════════════════════════════════════════════════════════ */

const hamburger = document.querySelector('.nav-hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links a');

// Abre/cierra el menú al clickear el botón hamburguesa
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Cierra el menú al clickear cualquier link (para navegar suavemente)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});
