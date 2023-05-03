// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika List Menu di Klik
document.querySelector("#list-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik Diluar Sidebar
const listmenu = document.querySelector("#list-menu");

document.addEventListener("click", function (e) {
  if (!listmenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
