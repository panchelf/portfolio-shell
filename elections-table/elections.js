function renderTable(candidates, district) {
    const sorted = [...candidates].sort((a, b) => b.votes - a.votes);

    const title = d3.select('#results-table caption');
    title.text(district);

    const rows = d3.select('#results-table tbody')
    .selectAll('tr')
    .data(sorted)
    .join('tr');

    rows.selectAll('td').remove();

    rows.append('td').text(d => d.name);
    rows.append('td').text(d => d.votes);
    rows.append('td').text(d => `${d.percentage}%`);
    console.log(sorted);

}

d3.json('candidates.json').then((data) => {
    renderTable(data['Nose Hill'], 'Nose Hill');
})