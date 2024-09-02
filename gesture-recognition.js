// gesture-recognition.js
document.addEventListener("DOMContentLoaded", function () {
  const gestureArea = document.getElementById("gestureArea");
  const gestureMessage = document.getElementById("gestureMessage");
  let startX = 0;
  let startY = 0;
  let lastTapTime = 0;
  // Detect the start of a touch gesture
  gestureArea.addEventListener("touchstart", function (e) {
    const touch = e.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;
  });
  // Detect the end of a touch gesture and determine its type
  gestureArea.addEventListener("touchend", function (e) {
    const touch = e.changedTouches[0];
    const endX = touch.clientX;
    const endY = touch.clientY;
    handleGesture(startX, startY, endX, endY);
  });
  // Detect double-tap gesture
  gestureArea.addEventListener("touchend", function (e) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;
    if (tapLength < 300 && tapLength > 0) {
      gestureMessage.innerText = "Double-Tapped!";
      gestureMessage.style.color = "#ffc107"; // Yellow for double-tap
      }
    lastTapTime = currentTime;
  });
  function handleGesture(startX, startY, endX, endY) {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    // Determine if the swipe was primarily horizontal or vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (deltaX > 50) {
        gestureMessage.innerText = "Swiped Right!";
        gestureMessage.style.color = "#28a745"; // Green for right swipe
      } else if (deltaX < -50) {
        gestureMessage.innerText = "Swiped Left!";
        gestureMessage.style.color = "#dc3545"; // Red for left swipe
      }
    } else {
      // Vertical swipe
      if (deltaY > 50) {
        gestureMessage.innerText = "Swiped Down!";
        gestureMessage.style.color = "#007bff"; // Blue for down swipe
      } else if (deltaY < -50) {
        gestureMessage.innerText = "Swiped Up!";
        gestureMessage.style.color = "#17a2b8"; // Teal for up swipe
      }
    }
  }
});
