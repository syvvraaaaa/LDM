(() => {
  const WHATSAPP_NUMBER = "21621000041"; // <-- remplace après (format international, sans +)
  const WHATSAPP_TEXT = "Bonjour, je souhaite discuter de mes besoins en prothèses dentaires.";

  function openWhatsApp() {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    el.addEventListener("click", openWhatsApp);
  });

  // Scroll reveal
  const sections = document.querySelectorAll(".scroll-animate");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate-in");
    });
  }, { threshold: 0.10 });

  sections.forEach((s) => io.observe(s));
})();
// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================

const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

// Effet scroll sur la navigation
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Menu mobile toggle
if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
  });
  
  // Fermer le menu au clic sur un lien
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
    });
  });
}
