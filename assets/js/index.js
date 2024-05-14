window.addEventListener("load", function (event) {
  var video_el = document.querySelectorAll("video");
  var playButton = document.querySelector(".playButton");
  video_el.forEach((video) => {
    playButton.addEventListener("click", function () {
      video.play();
      playButton.style.display = "none";
    });

    video.addEventListener("ended", function () {
      playButton.style.display = "block";
    });

    video.addEventListener("webkitendfullscreen", function () {
      if (!video.paused) {
        video.pause();
        playButton.style.display = "block";
      }
    });
  });
});
