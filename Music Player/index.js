let range = document.getElementById("range");
let song = document.getElementById("song");
let icon = document.getElementById("icon");
song.onloadedmetadata = function () {
  range.max = song.duration;
  range.value = song.currentTime;
};
function playPause() {
  if (icon.classList.contains("fa-pause")) {
    song.pause();
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
  } else {
    song.play();
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play");
  }
}
if (song.play()) {
  setInterval(() => {
    range.value = song.currentTime;
  }, 500);
}
range.onchange = function () {
  song.play();
  song.currentTime = range.value;
  icon.classList.add("fa-pause");
  icon.classList.remove("fa-play");
};
