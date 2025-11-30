
const lightbox = document.getElementById("lightbox");
const closeBtn = lightbox.querySelector(".close");
const swiperWrapper = lightbox.querySelector(".swiper-wrapper");

const galleryImages = document.querySelectorAll(".gallery-img");
galleryImages.forEach(img => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  const imgClone = document.createElement("img");
  imgClone.src = img.src;
  slide.appendChild(imgClone);
  swiperWrapper.appendChild(slide);
});

const lightboxSwiper = new Swiper('.lightbox-swiper', {
  loop: true,
  navigation: {
    nextEl: '.lightbox-button-next',
    prevEl: '.lightbox-button-prev',
  },
});

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxSwiper.slideToLoop(index, 0); // يعرض الصورة الصحيحة
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});
