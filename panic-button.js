// panic-button.js
document.addEventListener("DOMContentLoaded", function () {
  const panicButton = document.getElementById("panicButton");
  const alertMessage = document.getElementById("alertMessage");
  const videoContainer = document.getElementById("videoContainer");
  const videoElement = document.getElementById("video");
  panicButton.addEventListener("click", function () {
    // Show alert message
    alertMessage.innerText =
      "Emergency Alert Triggered! Video recording started and message sent.";
    alert("Emergency Alert Triggered!");
    // Start video recording (simulated)
    startVideo();
    // Simulate sending emergency message (you could integrate an actual service here)
    sendEmergencyMessage();
  });
  function startVideo() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          videoElement.srcObject = stream;
          videoContainer.style.display = "block";
        })
        .catch(function (error) {
          alertMessage.innerText =
            "Unable to access camera for video recording.";
          alertMessage.style.color = "#dc3545";
        });
    } else {
      alertMessage.innerText = "Video recording not supported in this browser.";
      alertMessage.style.color = "#dc3545";
    }
  }

  function sendEmergencyMessage() {
    // This is where you would integrate a service to send the message
    console.log("Emergency message sent!");
    // You can use APIs like Twilio, email services, etc., to send real messages.
  }
});
