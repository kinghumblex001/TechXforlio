document.addEventListener("DOMContentLoaded", function() {
  // Preloader
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", function() {
    preloader.style.opacity = "0";
    setTimeout(() => { preloader.style.display = "none"; }, 500);
  });
  
  // Mobile Navigation Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
  
  // Smooth Scrolling for Navigation Items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      const offset = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
      });
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });
});
