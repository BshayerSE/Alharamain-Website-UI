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

const newsPhotosSwiper = new Swiper('.newsPhotosSwiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

// Share Function
function sharePageUrl(event) {
  const url = window.location.href;
  const title = document.title;

  if (navigator.share) {
    navigator.share({ title, url }).catch(console.error);
  } else {
    alert("نسخ الرابط: " + url);
  }
}

// Toggle Bookmark
function toggleBookmark(el) {
  el.classList.toggle('active');
}


// Count Views
const pageKey = 'newsPage_viewed_' + window.location.pathname;
const viewsKey = 'newsPage_views_' + window.location.pathname;

if (!localStorage.getItem(pageKey)) {
  let views = localStorage.getItem(viewsKey) || 0;
  views = parseInt(views) + 1;
  localStorage.setItem(viewsKey, views);
  localStorage.setItem(pageKey, 'true');
}

document.getElementById('viewsCounter').textContent =
  localStorage.getItem(viewsKey);





