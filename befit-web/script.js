document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const yearSpan = document.getElementById("year");
  const accordionItems = document.querySelectorAll(".accordion-item");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        navLinks.classList.remove("show");
      }
    });
  }

  if (accordionItems.length) {
    accordionItems.forEach((item) => {
      item.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        accordionItems.forEach((i) => i.classList.remove("open"));
        if (!isOpen) {
          item.classList.add("open");
        }
      });
    });
  }

});

