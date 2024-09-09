var audio = new Audio("music.mp3");
var loop = false;

audio.addEventListener("ended", function () {
  if (loop) {
    audio.play(); // Play again when the audio ends
  }
});

function startPlay() {
  audio.play(); // Start playing the audio
}

function setLoop() {
  loop = !loop; // Toggle the loop state
  if (loop) {
    document.getElementById("toggle").classList =
      "bg-green-300 flex justify-end rounded-full transition-all ";
  } else {
    document.getElementById("toggle").classList =
      "bg-gray-300 flex justify-start rounded-full transition-all ";
  }
}
