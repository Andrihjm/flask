const menu = document.getElementById("hamburger-menu");
const navbar = document.querySelector(".navbar-menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
