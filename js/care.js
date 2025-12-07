var effortsSwiper = new Swiper(".effortsSwiper", {
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".efforts-button-next",
    prevEl: ".efforts-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});



