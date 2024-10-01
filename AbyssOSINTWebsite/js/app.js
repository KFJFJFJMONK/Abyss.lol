document.addEventListener('DOMContentLoaded', () => {
    // Hover Animations for Features
    const features = document.querySelectorAll('.feature');
    
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            gsap.to(feature, { duration: 0.5, scale: 1.05, ease: 'power3.out' });
        });

        feature.addEventListener('mouseleave', () => {
            gsap.to(feature, { duration: 0.5, scale: 1, ease: 'power3.out' });
        });
    });

    // Animate Navigation Button Clicks
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            gsap.to(window, { duration: 1, scrollTo: link.getAttribute('href'), ease: 'power3.inOut' });
        });
    });
});

// Login Key Check
function checkLogin() {
    const key = document.getElementById('license-key').value;
    const validKey = '12345678910';

    if (key === validKey) {
        window.location.href = 'dashboard.html';  // Redirect to dashboard after successful login
    } else {
        alert('Invalid License Key');
    }
}
