const navTrigger = document.querySelector(".navbar__nav-trigger");
const navList = document.querySelector(".navbar__navigation");
const navLinks = document.querySelectorAll(".navbar__nav-link");

navTrigger.addEventListener("click", () => {
  navTrigger.classList.toggle("is-active");
  navList.classList.toggle("is-open");

  if (navTrigger.classList.contains("is-active")) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navList.classList.remove("is-open");
        navTrigger.classList.remove("is-active");
      });
    });
  }
});
