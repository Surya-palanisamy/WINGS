// script.js
document.getElementById("gestureButton").addEventListener("click", function () {
  const status = document.getElementById("gestureStatus");
  status.innerText =
    "Gesture recognition started. Implementing machine learning...";
  status.style.color = "#28a745"; // Green color for success
  window.location.href = "gesture.html";
 
});

document.getElementById("panicButton").addEventListener("click", function () {
  const status = document.getElementById("alertMessage");
  status.innerText = "Emergency alert sent!";
  status.style.color = "#dc3545";
  window.location.href = "panic-button.html";

});

document.getElementById("routeButton").addEventListener("click", function () {
  const status = document.getElementById("routeMessage");
  status.innerText = "Finding the safest route...";
  status.style.color = "#17a2b8"; 
  window.location.href = "safe-route.html";
});

document
  .getElementById("wearableButton")
  .addEventListener("click", function () {
    const status = document.getElementById("wearableMessage");
    status.innerText = "Checking wearable status...";
    status.style.color = "#ffc107"; // Yellow color for warning
    // Placeholder for wearable device integration functionality
  });
