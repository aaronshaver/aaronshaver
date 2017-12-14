
// $(document).ready(function () {
// $.ajax({
//     type: "GET",
//     url: "https://www.wrh.noaa.gov/mesowest/getobextJson.php?sid=KPDX",
//     dataType: "jsonp",
//     success: xmlParser
//    });
// });

// function xmlParser(xml) {
//     $(xml).find("ob").each(function () {
//         alert($(this).find("utime").text());
//      });
// }




nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
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

    chart.xAxis.tickFormat(
        function(d) {
            return d3.time.format('%d %b %I:%M %p')(new Date(d));
        });
    chart.xAxis.rotateLabels(45);
    chart.xScale(d3.time.scale());

    chart.yAxis.tickFormat(d3.format('y'));

    stringValues = "[1513130400, 30.397], [1513130100, 30.397], [1513129980, 30.397], [1513129800, 30.397], [1513129500, 30.387], [1513129200, 30.397], [1513128900, 30.397], [1513128600, 30.397], [1513128300, 30.397], [1513128000, 30.397], [1513127700, 30.397], [1513127400, 30.397], [1513127100, 30.397], [1513126800, 30.397], [1513126500, 30.397], [1513126380, 30.397], [1513126200, 30.397], [1513125900, 30.397], [1513125600, 30.407], [1513125300, 30.407], [1513125000, 30.407], [1513124700, 30.407], [1513124400, 30.407], [1513124100, 30.407], [1513123800, 30.407], [1513123500, 30.417], [1513123200, 30.417], [1513122900, 30.417], [1513122780, 30.417], [1513122600, 30.417], [1513122300, 30.417], [1513122000, 30.417], [1513121700, 30.417], [1513121400, 30.417], [1513121100, 30.417], [1513120800, 30.417], [1513120500, 30.427], [1513120200, 30.427], [1513119900, 30.417], [1513119600, 30.417], [1513119300, 30.417], [1513119180, 30.417], [1513119000, 30.417], [1513118700, 30.407], [1513118400, 30.407], [1513118100, 30.407], [1513117800, 30.417], [1513117500, 30.417], [1513117200, 30.417], [1513116900, 30.417], [1513116600, 30.417], [1513116300, 30.417], [1513116000, 30.417], [1513115700, 30.417], [1513115580, 30.417], [1513115400, 30.417], [1513115100, 30.427], [1513114800, 30.427], [1513114500, 30.427], [1513114200, 30.437], [1513113900, 30.437], [1513113600, 30.437], [1513113300, 30.437], [1513113000, 30.437]";
    var array = JSON.parse("[" + stringValues + "]");
    data = [{
        "key": "Station Pressure",
        "values": array,
        "color": "#14a76c",
        area: true
    }];

    d3.select('#chart svg')
        .datum(data)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
});