var video_el = document.querySelectorAll("video");
video_el.forEach((video) => {
  video.addEventListener("play", function () {
    if (video.paused && !video.classList.contains("clicked")) {
      video.play();
      video.classList.add("clicked");
    }
  });

  video.addEventListener("click", function () {
    video.classList.add("clicked");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  video.addEventListener("webkitendfullscreen", function () {
    if (video.classList.contains("clicked")) {
      video.classList.remove("clicked");
    }
  });

  video.addEventListener("ended", function () {
    video.load();
  });
});
