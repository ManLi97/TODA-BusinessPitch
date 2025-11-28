/**
 * TODA Investor Pitch - JavaScript
 * Smooth scrolling and interactive behaviors
 */

// Smooth scroll enhancement (for browsers that need it)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll reveal animation for cards
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

// Observe all cards and animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.solution-card, .stat-card, .step-card, .marketing-card, .revenue-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});


// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    // Navigate sections with arrow keys (optional enhancement)
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        const sections = Array.from(document.querySelectorAll('section'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight / 2;
        });
        
        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            const nextSection = sections[currentIndex + 1];
            if (nextSection && e.key === 'ArrowDown') {
                e.preventDefault();
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    
    if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        const sections = Array.from(document.querySelectorAll('section'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= -100 && rect.top < window.innerHeight / 2;
        });
        
        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            const prevSection = sections[currentIndex - 1];
            if (prevSection && e.key === 'ArrowUp') {
                e.preventDefault();
                prevSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
});

// Console message for developers
console.log('%c TODA Investor Pitch ', 'background: #D4AF37; color: #0F0F0F; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('Built for tattoo artists, by passionate founders. 🎨');

