const video = document.getElementById('videoFile');
const message = document.getElementById('message');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pausa';
        message.textContent = 'El video está reproduciéndose';

    } else {
        video.pause();
        playPauseBtn.textContent = 'Reproducir';
        message.textContent = 'El video está en pausa';

    }
});

stopBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    playPauseBtn.textContent = 'Reproducir';
    message.textContent = 'El video ha terminado';

});