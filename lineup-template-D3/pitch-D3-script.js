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





// Promise.all([
//     fetch('pitch.svg').then(res => res.text()),
//     fetch('lineup-data.json').then(res => res.json())
//     ]).then(([svgMarkup, lineupData]) => {
//         document.querySelector('#pitch-container').innerHTML = svgMarkup;
//         generateTeam(lineupData.home, 'home');
//         generateTeam(lineupData.away, 'away');
//     }
// )

// function generateTeam(players, teamName) {
//     const svg = document.querySelector('.pitch-svg');
//     players.forEach(p => {
//         const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//         circle.setAttribute("cx", p.x);
//         circle.setAttribute("cy", p.y);
//         circle.setAttribute("r", 3.5);
//         circle.setAttribute("class", `player-marker ${teamName}`);
//         circle.dataset.xSolo = p.xSolo;
//         circle.dataset.ySolo = p.ySolo;
//         circle.dataset.x = p.x;
//         circle.dataset.y = p.y;

//         circle.addEventListener('mouseenter', (e) => {
//             const card = document.querySelector('#player-card');
//             const rect = e.target.getBoundingClientRect();
    
//             card.style.left = `${rect.left + 10}px`;
//             card.style.top = `${rect.top - 50}px`;
    
//             document.querySelector('#card-portrait').src = p.photo;
//             document.querySelector('#card-name').textContent = p.shortname;
//             document.querySelector('#card-number').textContent = `No. ${p.number}`;
//             document.querySelector('#card-matches').textContent = `${p.matches} matches`;
    
//             card.classList.remove('hidden');
//         })
        
//         circle.addEventListener('mouseleave', () => {
//             document.querySelector('#player-card').classList.add('hidden');
//         })
    
//         svg.appendChild(circle);
//     })  
// } 

// const teamSwitch = document.querySelector('#team-switch');

// teamSwitch.addEventListener('change', () => {
//     const showAway = teamSwitch.checked;

//     document.querySelectorAll('.player-marker').forEach(el => {
//         const isAway = el.classList.contains('away');
//         const isVisible = isAway === showAway;

//         el.style.display = isVisible ? '' : 'none';
//         el.setAttribute('cx', isVisible ? el.dataset.xSolo : el.dataset.x);
//         el.setAttribute('cy', isVisible ? el.dataset.ySolo : el.dataset.y);
//     })
// })