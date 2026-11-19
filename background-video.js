const backgroundVideo = document.querySelector(".site-video-backdrop video");

if (backgroundVideo) {
  backgroundVideo.autoplay = true;
  backgroundVideo.muted = true;
  backgroundVideo.defaultMuted = true;
  backgroundVideo.loop = true;
  backgroundVideo.playsInline = true;

  let lastTime = backgroundVideo.currentTime;
  let lastProgressAt = performance.now();

  const resumeBackgroundVideo = () => {
    if (document.visibilityState !== "visible") return;

    if (backgroundVideo.ended) {
      try {
        backgroundVideo.currentTime = 0;
      } catch {
        // A seek may be unavailable until the video metadata finishes loading.
      }
    }

    if (backgroundVideo.paused || backgroundVideo.ended) {
      backgroundVideo.play().catch(() => {});
    }
  };

  backgroundVideo.addEventListener("timeupdate", () => {
    const currentTime = backgroundVideo.currentTime;
    if (Math.abs(currentTime - lastTime) > 0.08 || currentTime < 0.2) {
      lastTime = currentTime;
      lastProgressAt = performance.now();
    }
  });

  backgroundVideo.addEventListener("ended", () => {
    try {
      backgroundVideo.currentTime = 0;
    } catch {
      // The loop attribute remains the primary restart mechanism.
    }
    resumeBackgroundVideo();
  });

  backgroundVideo.addEventListener("pause", resumeBackgroundVideo);
  backgroundVideo.addEventListener("canplay", resumeBackgroundVideo);
  document.addEventListener("visibilitychange", resumeBackgroundVideo);
  window.addEventListener("pageshow", resumeBackgroundVideo);
  window.addEventListener("focus", resumeBackgroundVideo);

  let lastScrollCheck = 0;
  window.addEventListener("scroll", () => {
    const now = performance.now();
    if (now - lastScrollCheck > 500) {
      lastScrollCheck = now;
      resumeBackgroundVideo();
    }
  }, { passive: true });

  window.setInterval(() => {
    if (document.visibilityState !== "visible") {
      lastTime = backgroundVideo.currentTime;
      lastProgressAt = performance.now();
      return;
    }

    resumeBackgroundVideo();

    const stalled = backgroundVideo.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
      && performance.now() - lastProgressAt > 10000;
    if (stalled && !backgroundVideo.paused) {
      try {
        backgroundVideo.currentTime = 0;
      } catch {
        // Keep retrying playback without interrupting normal playback.
      }
      lastTime = backgroundVideo.currentTime;
      lastProgressAt = performance.now();
      resumeBackgroundVideo();
    }
  }, 2500);

  resumeBackgroundVideo();
}
