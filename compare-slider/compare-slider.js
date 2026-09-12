const container = document.querySelector('.compare-container');
const clip = document.querySelector('.compare-clip');
const handle = document.querySelector('.compare-handle');

function moveHandle(clientX){
    const rect = container.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));

    clip.style.clipPath = `inset(0 ${100 - percent}% 0 0)`
    handle.style.left = `${percent}%`;
}

let isDragging = false;

handle.addEventListener('mousedown', () => isDragging = true);
window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('mousemove', (e) => {
    if (isDragging) moveHandle(e.clientX);
})

handle.addEventListener('touchstart', () => isDragging = true);
window.addEventListener('touchend', () => isDragging = false);
window.addEventListener('touchmove', (e) => {
    if (isDragging) moveHandle(e.touches[0].clientX);
})