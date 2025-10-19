/*
===========================================
File: slider.js
Author: Sayed Abdellatif
Date: 13/08/2025
Description:
    JavaScript for an image slider with:
    - Previous and Next navigation
    - Automatic slide change every 3 seconds
    - Ability to open a Word document link in a new tab

Pseudocode:
    1. Get all slider images and store them in a list
    2. Set the first slide to show initially
    3. Create a function to show a slide by index:
        - Hide all slides
        - Show the slide at the given index
    4. Create a function to go to the next slide:
        - Increase the current index
        - Loop back to the first slide if at the end
    5. Create a function to go to the previous slide:
        - Decrease the current index
        - Loop to the last slide if at the start
    6. Add click event listeners to the Next and Previous buttons
    7. Automatically change the slide every 3 seconds
    8. Add event listener to open Word document link in a new tab

Standards Followed:
    - Variable names use camelCase
    - Functions are small and single-purpose
    - Comments explain purpose, not obvious syntax
===========================================
*/

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }



document.addEventListener("DOMContentLoaded", function () {
  // Select all images in the slider
  const slides = document.querySelectorAll(".slider img");
  let currentSlide = 0; // Track the index of the currently visible slide

  // Select the About link by its ID (or class)
  const aboutLink = document.getElementById("aboutLink"); 

  // Add click event
  if (aboutLink) {
    aboutLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent normal navigation
      window.open("https://www.talontextilefasteners.com.au/about", "_blank"); // Open About page in new tab
    });
  }
  // Select the About link by its ID (or class)
  const homeLink = document.getElementById("homeLink"); 

  // Add click event
  if (homeLink) {
    homeLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent normal navigation
      window.open("https://www.talontextilefasteners.com.au/", "_blank"); // Open About page in new tab
    });
  }

  // Select navigation buttons
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  /**
   * Show a specific slide based on index
   * @param {number} index - The index of the slide to display
   */
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active")); // Hide all slides
    slides[index].classList.add("active"); // Show selected slide
  }

  /**
   * Show the next slide in the sequence
   * Loops back to the first slide when reaching the end
   */
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  /**
   * Show the previous slide in the sequence
   * Loops to the last slide when moving before the first
   */
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Attach click events to navigation buttons
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Automatically change slides every 3 seconds
  setInterval(nextSlide, 3000);

  // Optional: Open Word document link in a new tab when clicked
  const openWordLink = document.getElementById("openWordLink");
  if (openWordLink) {
    openWordLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default link behavior
      window.open(this.href, "_blank"); // Open in new tab
    });
  }
});
