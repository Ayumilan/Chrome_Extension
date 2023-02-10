 # Chrome_Extension

This chrome extension takes input from the user using a form. After clicking on the Start test it will check for the camera and microphone permissions for image proctoring.

## Forntend

Tech stack: HTML, JS
Files included:
- manifest.json: to specify metadata about teh extension
- popup.html: it generates popup with the form
- popup.js: initiate test by sending data of the user (email, name)
- background-sw.js: add the code to send teh image data to the backend server
- content.js: capture camera and microphone stream
- index.html: it creates a web page for streaming 
- index.js: it starts the streaming by accessing the camera of the device

## Backend

Requirements:
- NodeJs
- AWS S3
- AWS IAM roles

Backend part is in pending state.

## How to use this extension
Follow these steps:
- clone this repo using command `git clone https://github.com/Ayumilan/Chrome_Extension.git`
- Open your chorme browser and got to this url `chrome://extensions/`
- Switch on the Developer mode option which is on the top right corner. click on load unpacked.
  ![image](https://user-images.githubusercontent.com/60690689/218144114-d56e47f5-e89e-4114-869a-758283b2e9dc.png)
- Select the folder where you clone the repo. You we see a Image proctoring extension will appear. So our extension is loaded in the chrome browser.
  ![image](https://user-images.githubusercontent.com/60690689/218144530-8fbcee3e-58c6-4749-b02e-0eb53c622f54.png)
- Open a new tab and click on this extension.
  ![image](https://user-images.githubusercontent.com/60690689/218145270-4ff7f3ae-5a73-40f0-9453-5b07af504dcd.png)
- It will popup a form. fill the form and click on start test.
  ![image](https://user-images.githubusercontent.com/60690689/218145472-ea8e9757-a481-45e8-aee6-7dcbfaa0a62a.png)
- It will ask for the camera permission and shows a message i.e. error in sending the image data, because the backend is not yet defined. Click on allow for camera permission.
  ![image](https://user-images.githubusercontent.com/60690689/218145752-3a9151ba-cccc-448b-b424-0d5267f6ac41.png)
- After allowing the camera it will show the live stream form your camera. you can click on snap photo to save image and send it to the backend server.
  ![image](https://user-images.githubusercontent.com/60690689/218146154-6c0cac9a-9c61-4839-8e03-587183677269.png)

This is the demo of this chrome extension.

Thank you.
