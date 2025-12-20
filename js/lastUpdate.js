document.addEventListener("DOMContentLoaded", function () {
  const lastModified = new Date(document.lastModified);

  const day = String(lastModified.getDate()).padStart(2, '0');
  const month = String(lastModified.getMonth() + 1).padStart(2, '0');
  const year = lastModified.getFullYear();
  const hour = String(lastModified.getHours()).padStart(2, '0');
  const minute = String(lastModified.getMinutes()).padStart(2, '0');

  const formattedDate = `${day}/${month}/${year} ${hour}:${minute}`;

  document.getElementById("last-updated").textContent =
    `تاريخ آخر تحديث لمحتوى الصفحة : ${formattedDate} بتوقيت المملكة العربية السعودية`;
});



