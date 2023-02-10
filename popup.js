const form = document.querySelector("form");
const statusDiv = document.querySelector("#status");
const startButton = document.querySelector("#start-test");

startButton.addEventListener("click", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  statusDiv.textContent = "Initiating test...";

  // Initiate audio/video check using WebRTC API
  const constraints = {
    audio: true,
    video: true
  };
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(stream => {
      // Do something with the stream, e.g. display it in a video element
      
    })
    .catch(error => {
      statusDiv.textContent = `Error: ${error.message}`;
    });

  // Start sending images to the backend server at a configurable interval
  const interval = 1000; // 1 second
  let counter = 0;
  setInterval(() => {
    const imageData = "Image data " + ++counter;

    // Send image data to the backend server using XMLHttpRequest
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://example.com/images");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ name, email, imageData }));

    // Or send image data to the backend server using fetch API
        fetch("https://example.com/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, imageData })
    })
    .then(response => {
      // Do something with the response, e.g. check for success status
      if (response.ok) {
        statusDiv.textContent = "Image data sent successfully!";
      } else {
        statusDiv.textContent = "Error sending image data.";
      }
    })
    .catch(error => {
      statusDiv.textContent = `Error: ${error.message}`;
    });
  }, interval);
});


document.getElementById("start-test").addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.update(activeTab.id, {url: "index.html"});
  });
});