// scripts.js

// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select all sections with the class 'section'
  const sections = document.querySelectorAll('.section');

  // Create an Intersection Observer to observe when elements come into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // When the section is in view, add the 'in-view' class
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    // Trigger the animation when 10% of the section is visible
    threshold: 0.1
  });

  // Observe each section
  sections.forEach(section => {
    observer.observe(section);
  });
});
