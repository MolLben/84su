const video = document.getElementById('bg-video');

function setVideoSource() {
  const src = window.innerWidth < 768 ? 'assets/mb.mp4' : 'assets/pc.mp4';

  if (video.getAttribute('src') !== src) {
    video.src = src;
    video.load();
    video.play().catch(() => {
      // Gradient fallback stays visible if video is missing
    });
  }
}

setVideoSource();
window.addEventListener('resize', setVideoSource);
