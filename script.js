// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate statistics when in view
const stats = document.querySelectorAll('.stat-number');
let animated = false;

function animateStats() {
    if (animated) return;

    const windowHeight = window.innerHeight;
    const statsSection = document.querySelector('.stats-container');
    const statsSectionTop = statsSection.getBoundingClientRect().top;

    if (statsSectionTop < windowHeight - 100) {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000; // Animation duration in milliseconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.round(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };

            updateCounter();
        });

        animated = true;
    }
}

// Listen for scroll events to trigger stats animation
window.addEventListener('scroll', animateStats);

// Add scroll-based navbar background
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.background = 'white';
    }
});
