// Smooth Scroll for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Staggered Animations on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.animated-title');
    const image = document.querySelector('.profile-image');
    const blurb = document.querySelector('.blurb');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactLinks = document.querySelectorAll('.contact-link');

    // Apply staggered animations
    setTimeout(() => title.classList.add('in-view'), 300);
    setTimeout(() => image.classList.add('in-view'), 800);
    setTimeout(() => blurb.classList.add('in-view'), 1300);

    navLinks.forEach((link, index) => {
        setTimeout(() => link.classList.add('in-view'), 1500 + index * 150);
    });

    contactLinks.forEach((link, index) => {
        setTimeout(() => link.classList.add('in-view'), 2000 + index * 150);
    });
});

// Functionality to Trigger Animations on Scroll (Optional)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});
