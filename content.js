// Capture camera and microphone stream
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    // Send the stream to the background script
    chrome.runtime.sendMessage({ type: "stream", stream });
  })
  .catch(error => {
    console.error("Failed to access camera and microphone", error);
  });
