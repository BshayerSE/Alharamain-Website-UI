// Swiper
var memorySwiper = new Swiper('.memory-swiper', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.memory-button-next',
    prevEl: '.memory-button-prev',
  },
});

// Swiper الخاص بالـLightbox
var lightboxSwiper = new Swiper('.lightbox-swiper', {
  loop: true,
  navigation: {
    nextEl: '.lightbox-button-next',
    prevEl: '.lightbox-button-prev',
  },
});

// عناصر الـLightbox
const lightbox = document.getElementById("lightbox");
const closeBtn = document.querySelector(".lightbox .close");

// فتح Lightbox عند الضغط على أي صورة
document.querySelectorAll(".memory-img").forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxSwiper.slideToLoop(index, 0);
  });
});

// إغلاق Lightbox عند الضغط على X
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// إغلاق عند الضغط خارج الصورة
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});


