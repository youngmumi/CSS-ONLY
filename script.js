const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.item img');
let isPaused = false;

items.forEach((item) => {
    item.addEventListener('mousedown', () => {
        if (!isPaused) {
            slider.style.animationPlayState = 'paused';
            isPaused = true;
        }
    });

    item.addEventListener('mouseup', () => {
        if (isPaused) {
            slider.style.animationPlayState = 'running';
            isPaused = false;
        }
    });
});

