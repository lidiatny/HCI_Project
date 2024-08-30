// script.js

// JavaScript code to check facility availability

// Function to check gym availability
function checkGymAvailability() {
    // Add your logic to check availability here
    var gymAvailable = true; // Example: Assume gym is available
    if (gymAvailable) {
      document.getElementById("gymAvailability").innerText = "Gym is currently available.";
    } else {
      document.getElementById("gymAvailability").innerText = "Gym is currently available.";
    }
  }
  
  // Function to check spa availability
  function checkSpaAvailability() {
    // Add your logic to check availability here
    var spaAvailable = false; // Example: Assume spa is unavailable
    if (spaAvailable) {
      document.getElementById("spaAvailability").innerText = "Spa is currently available.";
    } else {
      document.getElementById("spaAvailability").innerText = "Spa is currently available.";
    }
  }
  
  // Function to check pool availability
  function checkPoolAvailability() {
    // Add your logic to check availability here
    var poolAvailable = true; // Example: Assume pool is available
    if (poolAvailable) {
      document.getElementById("poolAvailability").innerText = "Swimming pool is currently available.";
    } else {
      document.getElementById("poolAvailability").innerText = "Swimming pool is currently available.";
    }
  }
  
  // Call the availability functions when the page loads
  window.onload = function() {
    checkGymAvailability();
    checkSpaAvailability();
    checkPoolAvailability();
  };
  