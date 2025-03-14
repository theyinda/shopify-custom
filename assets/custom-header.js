// document.addEventListener("DOMContentLoaded", function () {
//   // document.getElementById("menu-toggle").addEventListener("click", function () {
//   //   const navMenu = document.getElementById("nav-menu");
//   //   const menuToggle = document.getElementById("menu-toggle");
//   //   const header = document.querySelector(".custom-header");
//   //   const body = document.body;

//   //   navMenu.classList.toggle("active");
//   //   header.classList.toggle("menu-active");
//   //   menuToggle.setAttribute(
//   //     "aria-expanded",
//   //     navMenu.classList.contains("active")
//   //   );
//   const menuToggle = document.getElementById("menu-toggle");
//   const navMenu = document.getElementById("nav-menu");

//   menuToggle.addEventListener("click", function () {
//     navMenu.classList.toggle("active");
//   });

//   // Close menu when clicking outside
//   document.addEventListener("click", function (event) {
//     if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
//       navMenu.classList.remove("active");
//     }
//   });

//   // Prevent body scrolling when menu is open
//   // if (navMenu.classList.contains("active")) {
//   //   body.style.overflow = "hidden";
//   // } else {
//   //   body.style.overflow = "";
//   // }
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove("active");
    }
  });
});
