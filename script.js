// Toggle mobile menu
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
menu.addEventListener('click', () => navLinks.classList.toggle('active'));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    navLinks.classList.remove('active');
  });
});

// Active link highlight
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Reveal animation on scroll
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// Initial check
revealOnScroll();
