document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    section.addEventListener('click', () => {
      const sectionId = section.getAttribute('id');
      window.location.href = `#${sectionId}`;
    });
  });
});