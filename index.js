// index.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the form element
  const contactForm = document.querySelector("form");

  // Add an event listener for form submission
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show a success alert
    alert("Thank you for contacting us! Your message has been sent successfully.");

    // Optionally, you can reset the form fields after submission
    contactForm.reset();
  });

  // Add any other JavaScript functionality you have here
});
