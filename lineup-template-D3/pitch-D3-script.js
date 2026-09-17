Promise.all([
    d3.text('../lineup-template/pitch.svg'),
    d3.json('../lineup-template/lineup-data.json')
]).then(([svgMarkup, lineupData]) => {

    document.querySelector('#pitch-container').innerHTML = svgMarkup;

    const allPlayers = [
        ...lineupData.home.map(p => ({ ...p, team: 'home'})),
        ...lineupData.away.map(p => ({ ...p, team: 'away'}))
    ];

    d3.select('.pitch-svg')
        .selectAll('circle')
        .data(allPlayers)
        .join('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', 3)
        .attr('class', d => `player-marker ${d.team}`)
        .on('mouseenter', (event, d) => {
            const card = document.querySelector('#player-card');
            const rect = event.target.getBoundingClientRect();

            card.style.left = `${rect.left + 10}px`; 
            card.style.top = `${rect.top - 50}px`;
            
            document.querySelector('#card-portrait').src = d.photo;
            document.querySelector('#card-name').textContent = d.fullname;
            document.querySelector('#card-number').textContent = `No. ${d.number}`;
            document.querySelector('#card-matches').textContent = `${d.number} matches`;

            card.classList.remove('hidden');

        })
        .on('mouseleave', () => {
            document.querySelector('#player-card').classList.add('hidden');
        })
})

const teamSwitch = document.querySelector('#team-switch');

teamSwitch.addEventListener('change', () => {
    const showAway = teamSwitch.checked;

    function isVisible(d) {
        return (d.team === 'away') === showAway;
    }

    d3.selectAll('.player-marker')
        .classed('hidden-marker', d => (d.team === 'away') !== showAway)
        .attr('cx', d => isVisible(d) ? d.xSolo : d.x)
        .attr('cy', d => isVisible(d) ? d.ySolo : d.y);
})


