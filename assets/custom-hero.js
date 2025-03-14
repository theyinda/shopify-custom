document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".scroll-to-footer");
  const footer = document.getElementById("custom-footer");

  if (scrollButton && footer) {
    scrollButton.addEventListener("click", function () {
      footer.scrollIntoView({ behavior: "smooth" });
    });
  }
});
