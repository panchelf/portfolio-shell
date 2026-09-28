function renderTable(candidates, district) {
    const sorted = [...candidates].sort((a, b) => b.votes - a.votes);

    const title = d3.select('#results-table caption');
    title.text(district);

    const rows = d3.select('#results-table tbody')
    .selectAll('tr')
    .data(sorted)
    .join('tr');

    rows.selectAll('td')
    .data(d => [d.name, d.votes.toLocaleString(), `${d.percentage}%`])
    .join('td')
    .text(d => d);
}

d3.json('candidates.json').then(data => {
    const select = d3.select('#district');

    function update() {
        const city = select.property('value');
        renderTable(data[city], city);
    }

    select.on('change', update);
    update();
})