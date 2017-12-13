nv.addGraph(function() {
    var chart = nv.models.lineChart()
        .x(function(d) {
            return d[0] * 1000 // convert to milliseconds
        })
        //adjusting, 100% is 1.00, not 100 as it is in the data
        .y(function(d) {
            return d[1]
        })
        .useInteractiveGuideline(true);

    chart.margin({
        bottom: 110,
        right: 100
    });

    chart.xAxis.tickFormat(
        function(d) {
            return d3.time.format('%d %b %I:%M %p')(new Date(d));
        });
    chart.xAxis.rotateLabels(45);
    chart.xScale(d3.time.scale());

    chart.yAxis.tickFormat(d3.format('y'));

    data = [{
        "key": "Station Pressure",
        "values": [
            [1513077900, 30.487],
            [1513077600, 30.477],
            [1513077300, 30.487],
            [1513077000, 30.497]
        ],
        "color": "#369",
    }];

    d3.select('#chart svg')
        .datum(data)
        .transition().duration(500)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});