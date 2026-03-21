// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.innerHTML = navMenu.classList.contains('active') ?
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Calculate offset to show section title properly for all links
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight + 50; // extra margin

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Sticky Header
const header = document.querySelector('.header');
const heroSection = document.querySelector('.hero-section');

if (header && heroSection) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            header.style.backgroundColor = entry.isIntersecting ? 'transparent' : 'white';
            header.style.boxShadow = entry.isIntersecting ? 'none' : '0 2px 10px rgba(0,0,0,0.1)';
        },
        { rootMargin: '-100px 0px 0px 0px' }
    );

    observer.observe(heroSection);
}

// Form Handling
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        if (email) {
            // Simulate form submission
            alert('Obrigado por se inscrever! Em breve enviaremos novidades.');
            newsletterForm.reset();
        }
    });
}

// Scroll Animation for Sections
const sections = document.querySelectorAll('section');
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

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Video Placeholder Click
const videoPlaceholder = document.querySelector('.video-placeholder');
if (videoPlaceholder) {
    videoPlaceholder.addEventListener('click', () => {
        alert('Em breve! O vídeo de depoimento será disponibilizado em breve.');
    });
}

// Trust Badges Animation
const trustBadges = document.querySelector('.trust-badges');
if (trustBadges) {
    const badges = trustBadges.querySelectorAll('.badge');
    badges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
        badge.style.animation = 'fadeInUp 0.6s ease forwards';
    });
}

// Add CSS for fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Contact Form Simulation
const contactLinks = document.querySelectorAll('a[href="#contact"]');
contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // This would normally scroll to contact section
        // For now, we'll just show a message
        setTimeout(() => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    });
});

// Assessment Button Animation
const assessmentBtn = document.querySelector('.btn-large');
if (assessmentBtn) {
    assessmentBtn.addEventListener('mouseenter', () => {
        assessmentBtn.style.transform = 'translateY(-3px)';
        assessmentBtn.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
    });

    assessmentBtn.addEventListener('mouseleave', () => {
        assessmentBtn.style.transform = 'translateY(0)';
        assessmentBtn.style.boxShadow = 'none';
    });
}

// Initialize animations on load
window.addEventListener('load', () => {
    // Trigger initial animations
    const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .trust-badges, .about-text, .about-image');
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
        element.style.animation = 'fadeInUp 0.8s ease forwards';
    });
});

// Accessibility: Focus management for mobile menu
if (navMenu) {
    navMenu.addEventListener('transitionend', () => {
        if (navMenu.classList.contains('active')) {
            const firstLink = navMenu.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    });
}