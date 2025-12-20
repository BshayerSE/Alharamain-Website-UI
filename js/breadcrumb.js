document.addEventListener("DOMContentLoaded", () => {
  const breadcrumb = document.getElementById("dynamicBreadcrumb");
  const pageTitle = document.title.trim();

  let middleBreadcrumb = "";

  // قراءة اسم الملف من URL
  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "shura-council-news.html") {
    middleBreadcrumb = `
      <i class="ri-arrow-left-s-line"></i>
      <a href="shura-council-news.html">آخر الأخبار</a>
    `;
  }

  breadcrumb.innerHTML = `
    <nav class="breadcrumb-nav d-flex align-items-center gap-2">
      <a href="index.html">الرئيسية</a>
      ${middleBreadcrumb}
      <i class="ri-arrow-left-s-line"></i>
      <span>${pageTitle}</span>
    </nav>
  `;
});


