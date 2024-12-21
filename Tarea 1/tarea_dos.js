const video = document.getElementById('videoFile');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pausa';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Reproducir';
    }
});

stopBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    playPauseBtn.textContent = 'Reproducir';
});