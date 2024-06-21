let video = document.getElementById("video");
let captionsDiv = document.getElementById("captions");
let captions = [];

function loadVideo() {
  let url = document.getElementById("video-url").value;
  video.src = url;
  video.load();
}

function addCaption() {
  let text = document.getElementById("caption-text").value;
  let time = parseFloat(document.getElementById("caption-time").value);
  captions.push({ text, time });
}

video.addEventListener("timeupdate", () => {
  let currentTime = video.currentTime;
  let caption = captions.find((c) => Math.abs(currentTime - c.time) < 0.5);
  if (caption) {
    captionsDiv.innerText = caption.text;
    captionsDiv.style.display = "block";
  } else {
    captionsDiv.style.display = "none";
  }
});
