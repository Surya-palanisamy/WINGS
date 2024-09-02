// safe-route-script.js
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map centered on Chennai
  const map = L.map("map").setView([13.0827, 80.2707], 13); // Chennai coordinates

  // Add a tile layer to the map
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Markers for key locations along the safe route
  const startPoint = L.marker([13.0827, 80.2707])
    .addTo(map)
    .bindPopup("Starting Point: Chennai Central Railway Station")
    .openPopup();

  const middlePoint = L.marker([13.0732, 80.2608])
    .addTo(map)
    .bindPopup("Intermediate Point: Egmore")
    .openPopup();

  

  // Handle the "Find Safe Route" button click
  document.getElementById("routeButton").addEventListener("click", function () {
    const status = document.getElementById("routeMessage");
    status.innerText = "Finding the safest route...";
    status.style.color = "#17a2b8"; // Teal color for info

    // Simulate route finding with a timeout
    setTimeout(() => {
      status.innerText = "Safe route found! Your route is highlighted in blue.";
      status.style.color = "#28a745"; // Green color for success

      // Draw a highlighted route line on the map
      L.polyline(
        [
          [13.0827, 80.2707], // Chennai Central Railway Station
          [13.0732, 80.2608]
        ],
        {
          color: "blue", // Route color
          weight: 5, // Line thickness
          opacity: 0.7, // Line transparency
        }
      ).addTo(map);
    }, 2000); // Simulate a 2-second delay
  });
});
