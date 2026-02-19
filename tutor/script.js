// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .scroll-reveal').forEach(el => {
    observer.observe(el);
});

// --- Security Features (No Zoom, No Context Menu) ---

// 1. Disable Context Menu (Right Click)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
}, false);

// 2. Disable Zoom on iOS (Gesture)
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
});
document.addEventListener('gestureend', function (e) {
    e.preventDefault();
});

// 3. Disable Zoom via Keyboard (Ctrl + / - / 0)
document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0' || e.key === '=')) {
        e.preventDefault();
    }
});

// 4. Disable Zoom via Mouse Wheel (Ctrl + Scroll)
document.addEventListener('wheel', function (e) {
    if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
    }
}, { passive: false });

// 5. Disable Touch Zoom (Double Tap) mostly handled by CSS touch-action, but extra safety:
let lastTouchEnd = 0;
document.addEventListener('touchend', function (e) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);
