
export function flipHotspots(){

    document.querySelectorAll('.hotspot').forEach( hotspot => {
        const topValue = parseFloat(hotspot.style.top);
        const leftValue = parseFloat(hotspot.style.left);

        if(topValue < 20) hotspot.classList.add('flip-caption');
        if(leftValue < 20) hotspot.classList.add('left-caption');
        if(leftValue > 80) hotspot.classList.add('right-caption');
    })

}

export function repositionHotspots(){

    document.querySelectorAll('.hotspot').forEach(hotspot => {
        hotspot.style.top = `${hotspot.dataset.topPercent}%`
        hotspot.style.left = `${hotspot.dataset.leftPercent}%`
    })
    
}