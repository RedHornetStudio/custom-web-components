const myVideoPlayer = document.querySelector('.my-video-player');
const video = myVideoPlayer.querySelector('video');
const playButton = myVideoPlayer.querySelector('.play-button');
const stopButton = myVideoPlayer.querySelector('.stop-button');
let isVideoPlaying = false;

video.addEventListener('play', e => {
  stopButton.classList.remove('show');
  isVideoPlaying = true;
});

video.addEventListener('pause', e => {
  playButton.classList.remove('show');
  isVideoPlaying = false;
});

const toggleVideo = () => {
  if(!isVideoPlaying) {
    video.play();
    playButton.classList.add('show');
  } else {
    video.pause();
    stopButton.classList.add('show');
  }
};

playButton.addEventListener('click', e => {
  e.stopPropagation();
  toggleVideo();
});

myVideoPlayer.addEventListener('click', e => {
  toggleVideo();
});

myVideoPlayer.addEventListener('keydown', e => {
  if(e.key === ' ') {
    e.preventDefault();
  }
});

myVideoPlayer.addEventListener('keyup', e => {
  if(e.key === 'Enter' || e.key === ' ') {
    toggleVideo();
  }
});