const toggle = document.querySelector('.js-toggle-button');
const sidebar = document.querySelector('.sidebar');
const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('.content-section');
const toggleIcon = toggle.querySelector('.bx');

/* Toggle sidebar */
toggle.addEventListener('click', () => {
  sidebar.classList.toggle('sidebar-open');
  toggleIcon.classList.toggle('bx-menu');
  toggleIcon.classList.toggle('bx-x');
});

/* Navigation links */
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    const targetSection = document.querySelector(target);

    // On mobile screens (<= 768px), close menu upon link click
    if (window.innerWidth <= 768 && sidebar.classList.contains('sidebar-open')) {
      sidebar.classList.remove('sidebar-open');
      toggleIcon.classList.add('bx-menu');
      toggleIcon.classList.remove('bx-x');
    }

    // Hide all sections
    sections.forEach((section) => {
      section.classList.remove('active-section');
    });

    // Show selected section
    if (targetSection) {
      targetSection.classList.add('active-section');
    }
  });
});