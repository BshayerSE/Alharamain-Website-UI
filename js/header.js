document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop(); // اسم الصفحة الحالية 
  const navLinks = document.querySelectorAll(".nav-links .nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-menu .mobile-link");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  mobileLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
   
});

document.addEventListener("DOMContentLoaded", () => {
  const langDropdown = document.getElementById('languageDropdown');
  const langMenu = document.getElementById('langMenu');

 
  langDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.style.display = (langMenu.style.display === 'flex') ? 'none' : 'flex';
  });

  document.addEventListener('click', () => {
    langMenu.style.display = 'none';
  });

  // اختيار اللغة
  langMenu.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', () => {
      console.log('Language selected:', item.dataset.lang);
      langMenu.style.display = 'none';
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
});


