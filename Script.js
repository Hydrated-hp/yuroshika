function showWrong() {
  // Hide the quiz part
  document.getElementById("quiz").style.display = "none";

  // Show the hidden popup part
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  // Restart and play the video
  const video = document.getElementById("crushVid");
  video.currentTime = 0;
  video.play();
}
