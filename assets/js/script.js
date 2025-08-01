function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menu-toggle');
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  }

  // Show "Back to Top" button when scrolling
  window.addEventListener('scroll', () => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Intersection Observer to detect when a section is in view
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('section');

    const options = {
      root: null, // Observing relative to viewport
      threshold: 0.2, // Trigger animation when 20% of section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target); // Stop observing once the section is revealed
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  });


  function toggleMenu() {
      document.getElementById('nav-list').classList.toggle('active');
      document.getElementById('menu-toggle').classList.toggle('active');
    }

    window.addEventListener('scroll', () => {
      const backToTopButton = document.querySelector('.back-to-top');
      backToTopButton.style.display = window.scrollY > 500 ? 'block' : 'none';
    });