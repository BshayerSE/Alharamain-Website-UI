document.addEventListener("DOMContentLoaded", () => {
  const otherTabs = document.querySelectorAll(".other-tab");
  const otherSections = document.querySelectorAll(".other-services");

  otherTabs.forEach(tab => {
    tab.addEventListener("click", () => {

      otherTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const target = tab.dataset.target;

      otherSections.forEach(section => {
        section.style.display =
          section.id === target ? "block" : "none";
      });
    });
  });
});



