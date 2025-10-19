
/* ------------------------------------------------------
   Contact Form Validation Script
   Author: Sayed Abdellatif
   Description:
   This script validates the contact form fields before allowing submission.
   It checks:
   - Full Name is not empty
   - Email is not empty and in correct format
   - Phone number contains only allowed characters
   - Gender is selected
   - Message is not empty and has minimum length
   If all validations pass, it shows a success alert and redirects.

/* Todo Pseudocode: Contact Form Validation

    * When the user clicks the submit button:
    * Stop the form from sending straight away
    * Get the text from the name, email, and message boxes
    * If the name box is empty:
    * Show a message telling the user to type their name
    * Stop the form from sending
    * If the email box is empty or not in the right format:
    * Show a message telling the user to type a valid email
    * Stop the form from sending
    * If the message box is empty:
    * Show a message telling the user to type a message
    * Stop the form from sending
    * If everything is okay:
    * Show a “thank you” or success message
    * Clear the form boxes
------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  // Limit allowed phone input characters (digits, space, parentheses, plus, dash)
  const phoneInput = document.getElementById("phone");
  phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^\d\s()+-]/g, "");
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form submission
    if (validateForm()) { // Only proceed if form is valid
      alert("Thank you for submitting your details!");
      window.location.href = "TTF-Proj.html"; // Redirect after success
    }
  });

  // Clear error messages when Reset button is clicked
  form.querySelector('button[type="reset"]').addEventListener("click", clearErrors);

  /**
   * Validates all form fields and returns true if valid
   */
  function validateForm() {
    let isValid = true; // Assume form is valid
    clearErrors(); // Remove old errors

    if (!validateFullName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateGender()) isValid = false;
    if (!validateMessage()) isValid = false;

    return isValid;
  }

  /**
   * Validate Full Name field
   */
  function validateFullName() {
    const fullName = document.getElementById("fullName").value.trim();
    if (!fullName) {
      showError("fullNameError", "Full name is required");
      return false;
    }
    return true;
  }

  /**
   * Validate Email field (must follow basic email pattern)
   */
  function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex
    if (!email) {
      showError("emailError", "Email is required");
      return false;
    } else if (!emailPattern.test(email)) {
      showError("emailError", "Please enter a valid email address");
      return false;
    }
    return true;
  }

  /**
   * Validate Phone Number (minimum 10 allowed characters)
   */
  function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^[\d\s()+-]{10,}$/;
    if (!phone) {
      showError("phoneError", "Phone number is required");
      return false;
    } else if (!phonePattern.test(phone)) {
      showError("phoneError", "Please enter a valid phone number");
      return false;
    }
    return true;
  }

  /**
   * Validate Gender (must be selected)
   */
  function validateGender() {
    if (!document.querySelector('input[name="gender"]:checked')) {
      showError("genderError", "Please select a gender");
      return false;
    }
    return true;
  }

  /**
   * Validate Message (minimum 10 characters)
   */
  function validateMessage() {
    const message = document.getElementById("message").value.trim();
    if (!message) {
      showError("messageError", "Message is required");
      return false;
    } else if (message.length < 10) {
      showError("messageError", "Message should be at least 10 characters");
      return false;
    }
    return true;
  }

  /**
   * Show an error message in the given element
   */
  function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
  }

  /**
   * Clear all displayed error messages
   */
  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(el => el.textContent = "");
  }
});
