const audio = document.getElementById('audioFile');
const toggleLoopBtn = document.getElementById('toggleLoop');

toggleLoopBtn.addEventListener('click', () => {
    audio.loop = !audio.loop;
    toggleLoopBtn.textContent = audio.loop ? 'Desactivar Bucle' : 'Activar Bucle';
});