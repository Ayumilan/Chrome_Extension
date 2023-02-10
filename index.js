// Put event listeners into place
window.addEventListener("DOMContentLoaded", function () {
    // Grab elements, create settings, etc.
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');
    var mediaConfig = { video: true };
    var errBack = function (e) {
        console.log('An error has occurred!', e)
    };

    // Put video listeners into place
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia(mediaConfig).then(function (stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });
    }
    // Trigger photo take
    document.getElementById('snap').addEventListener('click', function () {
        context.drawImage(video, 0, 0, 640, 480);
    });
}, false);