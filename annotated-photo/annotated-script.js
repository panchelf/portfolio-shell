document.querySelectorAll('.hotspot').forEach( hotspot => {
    const topValue = parseFloat(hotspot.style.top);
    console.log(topValue);
    if(topValue < 20) hotspot.classList.add('flip-caption');
})