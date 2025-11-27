// Simple scroll reveal + small parallax tilt for card
document.addEventListener("DOMContentLoaded", function () {
  // add reveal class to hero parts
  const toReveal = document.querySelectorAll(".hero-left, .profile-card, .hero-title, .hero-sub, .hero-ctas, .hero-stats");
  toReveal.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  toReveal.forEach(el => observer.observe(el));

  // small parallax effect on profile card
  const card = document.getElementById("profileCard");
  if (card) {
    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rx = (y - 0.5) * 8;
      const ry = (x - 0.5) * -8;
      card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener("mouseleave", function () {
      card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
  }
});
