var newsSwiper = new Swiper(".newsSwiper", {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".news-next",
    prevEl: ".news-prev",
  },

  breakpoints: {
    0: {          
      slidesPerView: 1
    },
    480: { 
      slidesPerView: 1.2
    },
    768: { 
      slidesPerView: 2
    },
    1024: {  
      slidesPerView: 3
    }
  }
});


