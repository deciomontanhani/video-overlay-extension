
const url = chrome.runtime.getURL("videos/example.mp4");

var video = document.createElement('video');
video.src = url;
video.autoplay = true;
video.loop = true;
video.playsInline = true;
video.muted = true;
video.style.cssText = "position: absolute; opacity: 0.4; width: 100%; height: 100%; filter: blur(3px) grayscale(1); z-index: 1111; left: 0px; top: 0px;";

document.body.appendChild(video);