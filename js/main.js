nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .x(function(d) {
                    return d[0] * 1000 // convert to milliseconds
                })
                //adjusting, 100% is 1.00, not 100 as it is in the data
                .y(function(d) {
                    return d[1]
                });
    chart.margin({
        bottom: 110,
        right: 100
    });
    chart.forceY([29.40, 30.35]);

    chart.xAxis.tickFormat(
        function(d) {
            return d3.time.format('%d %b %I:%M %p')(new Date(d));
        });
    chart.xAxis.rotateLabels(45);
    chart.xScale(d3.time.scale());

    chart.yAxis.tickFormat(d3.format('y'));

    var array = JSON.parse("[" + data + "]");
    data = [{
        "key": "Station Pressure",
        "values": array,
        "color": "#45a29e",
        area: true
    }];

    d3.select('#chart svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});