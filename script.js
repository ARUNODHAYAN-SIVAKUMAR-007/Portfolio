const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-links li a');

// ===== Mobile Menu Toggle =====
menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== Create Particles for Background =====
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    document.body.appendChild(particlesContainer);
    
    const particleCount = Math.floor(window.innerWidth / 10);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 15;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}vw`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Random color based on theme
        const colors = [
            'rgba(0, 220, 255, 0.7)',
            'rgba(255, 215, 0, 0.7)',
            'rgba(126, 34, 206, 0.7)'
        ];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// ===== Initialize Skills Scroll Animation =====
function initSkillsScroll() {
    const skillsTrack = document.querySelector('.skills-scroll-track');
    if (skillsTrack) {
        // Duplicate items for seamless scrolling
        const skillsItems = skillsTrack.innerHTML;
        skillsTrack.innerHTML += skillsItems;
        
        // Pause animation on hover
        skillsTrack.addEventListener('mouseenter', () => {
            skillsTrack.style.animationPlayState = 'paused';
        });
        skillsTrack.addEventListener('mouseleave', () => {
            skillsTrack.style.animationPlayState = 'running';
        });
    }
}

// ===== Initialize Research Scroll Animation =====
function initResearchScroll() {
    const researchTrack = document.querySelector('.research-scroll-track');
    if (researchTrack) {
        // Duplicate items for seamless scrolling
        const researchItems = researchTrack.innerHTML;
        researchTrack.innerHTML += researchItems;
        
        // Pause animation on hover
        researchTrack.addEventListener('mouseenter', () => {
            researchTrack.style.animationPlayState = 'paused';
        });
        researchTrack.addEventListener('mouseleave', () => {
            researchTrack.style.animationPlayState = 'running';
        });
    }
}

// ===== Scroll Animation for Fade-in Elements =====
function checkScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

// ===== Preloader =====
function initPreloader() {
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1500);
    });
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initSkillsScroll();
    initResearchScroll();
    initPreloader();
    
    // Initial check for scroll animation
    checkScroll();
    
    // Check for scroll animation on scroll
    window.addEventListener('scroll', checkScroll);
});

// Resize handler for particles
window.addEventListener('resize', () => {
    const particlesContainer = document.querySelector('.particles-container');
    if (particlesContainer) {
        particlesContainer.remove();
    }
    createParticles();
});