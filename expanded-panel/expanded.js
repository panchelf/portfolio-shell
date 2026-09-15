import { flipHotspots, repositionHotspots } from '../js/hotspot.js';

const panel = document.querySelector('.expand-panel');
const toggleBtn = document.querySelector('.expand-toggle');

toggleBtn.addEventListener('click', () => {
    if (panel.classList.contains('expanded')){
        panel.style.maxHeight = '0px';
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }

    panel.classList.toggle('expanded');
})

// panel.addEventListener('transitionend', () => {
//     repositionHotspots();
//     console.log('transition end');
// })

// repositionHotspots();
flipHotspots();