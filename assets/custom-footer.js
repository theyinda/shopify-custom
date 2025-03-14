document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const successMessage = document.getElementById("ContactFooter-success");
    if (successMessage) {
      successMessage.style.opacity = "0";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 300);
    }
  }, 3000);
});
