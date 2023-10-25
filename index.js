const toggleBtn = document.querySelector(".toggle-buttons");
const mobileNavbar = document.querySelector("#mobile-navbar");
const section = document.getElementById("hero-section");

toggleBtn.addEventListener("click", () => {
  const icons = document.querySelector(".toggle-buttons img");
  const isActive = mobileNavbar.classList.contains("active-navbar");
  mobileNavbar.classList.toggle("active-navbar");
  section.classList.toggle("overbackground");
  icons.classList = isActive
  ? (icons.src = "./images/icon-menu.svg")
  : (icons.src = "./images/icon-close-menu.svg");
});

function toggleDropdown(id) {
  document.getElementById(id).classList.toggle("open");

}
