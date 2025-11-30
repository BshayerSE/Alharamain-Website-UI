document.addEventListener("DOMContentLoaded", () => {
  const breadcrumb = document.getElementById("dynamicBreadcrumb");

  // قراءة عنوان الصفحة
  const pageTitle = document.title.trim();

  // بناء الـ HTML تلقائياً
  breadcrumb.innerHTML = `
    <nav class="breadcrumb-nav d-flex align-items-center gap-2">
      <a href="Home.html">الرئيسية</a>
      <i class="ri-arrow-left-s-line"></i>
      <span>${pageTitle}</span>
    </nav>
  `;
});
