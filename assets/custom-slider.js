// document.addEventListener("DOMContentLoaded", function () {
//   let currentIndex = 0;
//   const slides = document.querySelectorAll(".slide");
//   const indicators = document.querySelectorAll(".indicator");
//   const nextBtn = document.querySelector(".next");
//   let autoplayInterval;

//   function updateSlider() {
//     slides.forEach((slide, index) => {
//       slide.classList.remove("active", "previous");
//       if (index === currentIndex) {
//         slide.classList.add("active");
//       } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
//         slide.classList.add("previous");
//       }
//     });

//     indicators.forEach((indicator, index) => {
//       indicator.classList.toggle("active", index === currentIndex);
//     });
//   }

//   function startAutoplay() {
//     autoplayInterval = setInterval(() => {
//       currentIndex = (currentIndex + 1) % slides.length;
//       updateSlider();
//     }, 5000);
//   }

//   function resetAutoplay() {
//     clearInterval(autoplayInterval);
//     startAutoplay();
//   }

//   nextBtn.addEventListener("click", function () {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateSlider();
//     resetAutoplay();
//   });

//   indicators.forEach((indicator, index) => {
//     indicator.addEventListener("click", function () {
//       currentIndex = index;
//       updateSlider();
//       resetAutoplay();
//     });
//   });

//   updateSlider();
//   startAutoplay();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".slides");
//   const slides = document.querySelectorAll(".slide");
//   const nextButton = document.querySelector(".next");
//   const indicators = document.querySelectorAll(".indicator");
//   let currentIndex = 0;

//   function updateSlides() {
//     // Handle mobile and desktop differently
//     if (window.innerWidth <= 768) {
//       // Existing mobile behavior
//       slides.forEach((slide, index) => {
//         slide.classList.remove("active");
//         if (indicators[index]) {
//           indicators[index].classList.remove("active");
//         }
//       });

//       slides[currentIndex].classList.add("active");
//       if (indicators[currentIndex]) {
//         indicators[currentIndex].classList.add("active");
//       }
//     } else {
//       // Desktop behavior
//       slides.forEach((slide, index) => {
//         slide.classList.remove("active");
//       });
//       slides[currentIndex].classList.add("active");

//       // Reorder slides for desktop view
//       const slideArray = Array.from(slides);
//       const orderedSlides = [
//         ...slideArray.slice(currentIndex),
//         ...slideArray.slice(0, currentIndex),
//       ];

//       slider.innerHTML = "";
//       orderedSlides.forEach((slide) => slider.appendChild(slide));
//     }
//   }

//   nextButton.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     updateSlides();
//   });

//   // Update layout on window resize
//   window.addEventListener("resize", updateSlides);

//   // Initial setup
//   updateSlides();
// });

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const nextButton = document.querySelector(".next");
  const indicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;

  function updateSlides() {
    // Remove active class from all slides and indicators
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      if (indicators[index]) {
        indicators[index].classList.remove("active");
      }
    });

    // Add active class to current slide and indicator
    slides[currentIndex].classList.add("active");
    if (indicators[currentIndex]) {
      indicators[currentIndex].classList.add("active");
    }

    if (window.innerWidth > 768) {
      // Desktop behavior
      const slideArray = Array.from(slides);
      const orderedSlides = [
        ...slideArray.slice(currentIndex),
        ...slideArray.slice(0, currentIndex),
      ];

      slider.innerHTML = "";
      orderedSlides.forEach((slide) => slider.appendChild(slide));
    }
  }

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  });

  // Handle indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateSlides();
    });
  });

  // Update layout on window resize
  window.addEventListener("resize", updateSlides);

  // Initial setup
  updateSlides();
});
