document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      document.querySelector('.main-nav').classList.toggle('active');
    });
  }
  
  // Image lightbox initialization if needed
  // Add your lightbox code here
});
