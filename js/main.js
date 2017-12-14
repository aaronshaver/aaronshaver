
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
    chart.forceY([29.65, 30.65]);

    chart.xAxis.tickFormat(
        function(d) {
            return d3.time.format('%d %b %I:%M %p')(new Date(d));
        });
    chart.xAxis.rotateLabels(45);
    chart.xScale(d3.time.scale());

    chart.yAxis.tickFormat(d3.format('y'));

    stringValues = "[1513212780, 30.367], [1513212600, 30.367], [1513212300, 30.367], [1513212000, 30.367], [1513211700, 30.367], [1513211400, 30.357], [1513211100, 30.357], [1513210800, 30.357], [1513210500, 30.357], [1513210200, 30.347], [1513209900, 30.357], [1513209600, 30.347], [1513209300, 30.347], [1513209180, 30.347], [1513209000, 30.347], [1513208700, 30.347], [1513208400, 30.347], [1513208100, 30.347], [1513207800, 30.347], [1513207500, 30.347], [1513207200, 30.347], [1513206900, 30.347], [1513206600, 30.347], [1513206300, 30.347], [1513206000, 30.347], [1513205700, 30.347], [1513205580, 30.347], [1513205400, 30.347], [1513205100, 30.347], [1513204800, 30.347], [1513204500, 30.347], [1513204200, 30.347], [1513203900, 30.357], [1513203600, 30.357], [1513203300, 30.347], [1513203000, 30.347], [1513202700, 30.347], [1513202400, 30.347], [1513202100, 30.347], [1513201980, 30.347], [1513201800, 30.347], [1513201500, 30.347], [1513201200, 30.347], [1513200900, 30.347], [1513200600, 30.347], [1513200300, 30.347], [1513200000, 30.347], [1513199700, 30.347], [1513199400, 30.347], [1513199100, 30.347], [1513198800, 30.357], [1513198500, 30.357], [1513198380, 30.357], [1513198200, 30.357], [1513197900, 30.357], [1513197600, 30.357], [1513197300, 30.357], [1513197000, 30.357], [1513196700, 30.357], [1513196400, 30.367], [1513196100, 30.357], [1513195800, 30.367], [1513195500, 30.367], [1513195200, 30.367], [1513194900, 30.367], [1513194780, 30.377], [1513194600, 30.377], [1513194300, 30.377], [1513194000, 30.377], [1513193700, 30.387], [1513193400, 30.387], [1513192800, 30.387], [1513192500, 30.397], [1513192200, 30.397], [1513191900, 30.397], [1513191600, 30.397], [1513191300, 30.397], [1513191180, 30.397], [1513191000, 30.397], [1513190700, 30.397], [1513190400, 30.397], [1513190100, 30.407], [1513189800, 30.407], [1513189200, 30.407], [1513188900, 30.407], [1513188600, 30.407], [1513188300, 30.407], [1513188000, 30.407], [1513187700, 30.417], [1513187580, 30.407], [1513187400, 30.407], [1513187100, 30.407], [1513186800, 30.407], [1513186500, 30.417], [1513186200, 30.407], [1513185900, 30.407], [1513185600, 30.407], [1513185300, 30.407], [1513185000, 30.407], [1513184700, 30.407], [1513184400, 30.407], [1513184100, 30.407], [1513183980, 30.407], [1513183800, 30.407], [1513183500, 30.407], [1513183200, 30.407], [1513182900, 30.407], [1513182600, 30.407], [1513182300, 30.407], [1513182000, 30.407], [1513181700, 30.407], [1513181400, 30.407], [1513181100, 30.407], [1513180800, 30.407], [1513180500, 30.397], [1513180380, 30.397], [1513180200, 30.397], [1513179900, 30.397], [1513179600, 30.387], [1513179300, 30.387], [1513179000, 30.387], [1513178700, 30.387], [1513178400, 30.397], [1513178100, 30.397], [1513177800, 30.387], [1513177500, 30.387], [1513177200, 30.387], [1513176900, 30.387], [1513176780, 30.387], [1513176600, 30.387], [1513176300, 30.387], [1513176000, 30.397], [1513175700, 30.387], [1513175400, 30.387], [1513175100, 30.387], [1513174800, 30.387], [1513174500, 30.387], [1513174200, 30.377], [1513173900, 30.387], [1513173600, 30.387], [1513173300, 30.387], [1513173180, 30.387], [1513173000, 30.387], [1513172700, 30.387], [1513172400, 30.387], [1513172100, 30.387], [1513171800, 30.387], [1513171500, 30.387], [1513171200, 30.387], [1513170900, 30.387], [1513170600, 30.387], [1513170300, 30.387], [1513170000, 30.387], [1513169700, 30.387], [1513169580, 30.387], [1513169400, 30.377], [1513169100, 30.387], [1513168800, 30.387], [1513168500, 30.387], [1513168200, 30.387], [1513167900, 30.387], [1513167600, 30.387], [1513167300, 30.387], [1513167000, 30.387], [1513166700, 30.387], [1513166400, 30.387], [1513166100, 30.387], [1513165980, 30.397], [1513165800, 30.397], [1513165500, 30.387], [1513165200, 30.387], [1513164900, 30.387], [1513164600, 30.387], [1513164300, 30.387], [1513164000, 30.397], [1513163700, 30.387], [1513163400, 30.397], [1513163100, 30.407], [1513162800, 30.407], [1513162500, 30.407], [1513162380, 30.407], [1513162200, 30.407], [1513161900, 30.397], [1513161600, 30.397], [1513161300, 30.407], [1513161000, 30.407], [1513160700, 30.407], [1513160400, 30.397], [1513160100, 30.407], [1513159800, 30.407], [1513159500, 30.407], [1513159200, 30.397], [1513158900, 30.387], [1513158780, 30.387], [1513158600, 30.397], [1513158300, 30.397], [1513158000, 30.397], [1513157700, 30.397], [1513157400, 30.397], [1513157100, 30.407], [1513156800, 30.407], [1513156500, 30.407], [1513156200, 30.407], [1513155900, 30.407], [1513155600, 30.417], [1513155300, 30.417], [1513155180, 30.417], [1513155000, 30.407], [1513154700, 30.407], [1513154400, 30.417], [1513154100, 30.417], [1513153800, 30.417], [1513153500, 30.407], [1513153200, 30.407], [1513152900, 30.407], [1513152600, 30.407], [1513152300, 30.397], [1513152000, 30.397], [1513151700, 30.397], [1513151580, 30.397], [1513151400, 30.397], [1513151100, 30.397], [1513150800, 30.397], [1513150500, 30.397], [1513150200, 30.407], [1513149900, 30.407], [1513149600, 30.407], [1513149300, 30.407], [1513149000, 30.417], [1513148700, 30.407], [1513148400, 30.407], [1513148100, 30.407], [1513147980, 30.407], [1513147800, 30.407], [1513147500, 30.407], [1513147200, 30.407], [1513146900, 30.407], [1513146600, 30.407], [1513146300, 30.407], [1513146000, 30.407], [1513145400, 30.397], [1513145100, 30.387], [1513144800, 30.397], [1513144500, 30.387], [1513144380, 30.397], [1513144200, 30.387], [1513143900, 30.387], [1513143600, 30.397], [1513143300, 30.397], [1513143000, 30.387], [1513142700, 30.387], [1513142400, 30.387], [1513142100, 30.377], [1513141800, 30.377], [1513141500, 30.377], [1513141200, 30.377], [1513140900, 30.377], [1513140780, 30.377], [1513140600, 30.377], [1513140300, 30.377], [1513140000, 30.387], [1513139700, 30.387], [1513139400, 30.377], [1513139100, 30.377], [1513138500, 30.377], [1513138200, 30.377], [1513137900, 30.387], [1513137600, 30.377], [1513137300, 30.377], [1513137180, 30.377], [1513137000, 30.387], [1513136700, 30.387], [1513136400, 30.387], [1513136100, 30.387], [1513135800, 30.387], [1513135500, 30.387], [1513135200, 30.387], [1513134900, 30.387], [1513134600, 30.387], [1513134300, 30.387], [1513134000, 30.387], [1513133700, 30.387], [1513133580, 30.387], [1513133400, 30.387], [1513133100, 30.387], [1513132800, 30.387], [1513132500, 30.387], [1513132200, 30.387], [1513131900, 30.387], [1513131600, 30.387], [1513131300, 30.397], [1513131000, 30.397], [1513130700, 30.397], [1513130400, 30.397], [1513130100, 30.397], [1513129980, 30.397], [1513129800, 30.397], [1513129500, 30.387], [1513129200, 30.397], [1513128900, 30.397], [1513128600, 30.397], [1513128300, 30.397], [1513128000, 30.397], [1513127700, 30.397], [1513127400, 30.397], [1513127100, 30.397], [1513126800, 30.397], [1513126500, 30.397], [1513126380, 30.397], [1513126200, 30.397], [1513125900, 30.397], [1513125600, 30.407], [1513125300, 30.407], [1513125000, 30.407], [1513124700, 30.407], [1513124400, 30.407], [1513124100, 30.407], [1513123800, 30.407], [1513123500, 30.417], [1513123200, 30.417], [1513122900, 30.417], [1513122780, 30.417], [1513122600, 30.417], [1513122300, 30.417], [1513122000, 30.417], [1513121700, 30.417], [1513121400, 30.417], [1513121100, 30.417], [1513120800, 30.417], [1513120500, 30.427], [1513120200, 30.427], [1513119900, 30.417], [1513119600, 30.417], [1513119300, 30.417], [1513119180, 30.417], [1513119000, 30.417], [1513118700, 30.407], [1513118400, 30.407], [1513118100, 30.407], [1513117800, 30.417], [1513117500, 30.417], [1513117200, 30.417], [1513116900, 30.417], [1513116600, 30.417], [1513116300, 30.417], [1513116000, 30.417], [1513115700, 30.417], [1513115580, 30.417], [1513115400, 30.417], [1513115100, 30.427], [1513114800, 30.427], [1513114500, 30.427], [1513114200, 30.437], [1513113900, 30.437], [1513113600, 30.437], [1513113300, 30.437], [1513113000, 30.437], [1513112700, 30.447], [1513112400, 30.447], [1513112100, 30.447], [1513111980, 30.447], [1513111800, 30.447], [1513111500, 30.457], [1513111200, 30.457], [1513110900, 30.457], [1513110600, 30.457], [1513110300, 30.457], [1513110000, 30.467], [1513109700, 30.467], [1513109400, 30.467], [1513109100, 30.477], [1513108800, 30.477], [1513108500, 30.477], [1513108380, 30.477], [1513108200, 30.477], [1513107900, 30.477], [1513107600, 30.477], [1513107300, 30.477], [1513107000, 30.487], [1513106700, 30.487], [1513106400, 30.487], [1513106100, 30.487], [1513105800, 30.487], [1513105500, 30.487], [1513105200, 30.487], [1513104900, 30.487], [1513104780, 30.487], [1513104600, 30.487], [1513104300, 30.487], [1513104000, 30.497], [1513103700, 30.497], [1513103400, 30.497], [1513103100, 30.497], [1513102800, 30.497], [1513102500, 30.497], [1513102200, 30.507], [1513101900, 30.507], [1513101600, 30.507], [1513101300, 30.507], [1513101180, 30.507], [1513101000, 30.507], [1513100700, 30.507], [1513100400, 30.507], [1513100100, 30.507], [1513099800, 30.507], [1513099500, 30.507], [1513099200, 30.497], [1513098900, 30.507], [1513098600, 30.507], [1513098300, 30.497], [1513098000, 30.497], [1513097700, 30.497], [1513097580, 30.497], [1513097400, 30.497], [1513097100, 30.497], [1513096800, 30.497], [1513096500, 30.497], [1513096200, 30.497], [1513095900, 30.497], [1513095600, 30.497], [1513095300, 30.497], [1513094700, 30.497], [1513094400, 30.487], [1513094100, 30.487], [1513093980, 30.487], [1513093800, 30.487], [1513093500, 30.487], [1513093200, 30.487], [1513092900, 30.477], [1513092600, 30.487], [1513092300, 30.487], [1513092000, 30.487], [1513091700, 30.487], [1513091400, 30.487], [1513091100, 30.487], [1513090800, 30.487], [1513090500, 30.477], [1513090380, 30.477], [1513090200, 30.477], [1513089900, 30.477], [1513089600, 30.477], [1513089300, 30.487], [1513089000, 30.487], [1513088700, 30.487], [1513088400, 30.487], [1513088100, 30.487], [1513087800, 30.487], [1513087500, 30.487], [1513087200, 30.487], [1513086900, 30.487], [1513086780, 30.487], [1513086600, 30.487], [1513086300, 30.487], [1513086000, 30.487], [1513085700, 30.487], [1513085400, 30.487], [1513085100, 30.487], [1513084800, 30.477], [1513084500, 30.477], [1513084200, 30.477], [1513083900, 30.477], [1513083600, 30.477], [1513083300, 30.477], [1513083180, 30.477], [1513083000, 30.467], [1513082700, 30.477], [1513082400, 30.477], [1513082100, 30.477], [1513081800, 30.477], [1513081500, 30.477], [1513081200, 30.477], [1513080900, 30.477], [1513080600, 30.477], [1513080300, 30.477], [1513080000, 30.477], [1513079700, 30.487], [1513079580, 30.487], [1513079400, 30.487], [1513079100, 30.477], [1513078800, 30.477], [1513078500, 30.487], [1513078200, 30.487], [1513077900, 30.497], [1513077600, 30.497], [1513077300, 30.497], [1513077000, 30.497], [1513076700, 30.497], [1513076400, 30.497], [1513076100, 30.497], [1513075980, 30.497], [1513075800, 30.507], [1513075500, 30.497], [1513075200, 30.497], [1513074900, 30.497], [1513074600, 30.497], [1513074300, 30.497], [1513074000, 30.497], [1513073700, 30.507], [1513073400, 30.497], [1513073100, 30.497], [1513072800, 30.497], [1513072500, 30.497], [1513072380, 30.497], [1513072200, 30.497], [1513071900, 30.497], [1513071600, 30.497], [1513071300, 30.497], [1513071000, 30.497], [1513070700, 30.497], [1513070400, 30.497], [1513070100, 30.497], [1513069800, 30.497], [1513069500, 30.487], [1513069200, 30.487], [1513068900, 30.497], [1513068780, 30.497], [1513068600, 30.497], [1513068300, 30.497], [1513068000, 30.497], [1513067700, 30.497], [1513067400, 30.497], [1513067100, 30.497], [1513066800, 30.497], [1513066500, 30.497], [1513066200, 30.497], [1513065900, 30.487], [1513065600, 30.487], [1513065300, 30.487], [1513065180, 30.487], [1513065000, 30.487], [1513064700, 30.487], [1513064400, 30.487], [1513064100, 30.487], [1513063800, 30.487], [1513063500, 30.487], [1513063200, 30.477], [1513062900, 30.487], [1513062600, 30.487], [1513062300, 30.487], [1513062000, 30.487], [1513061700, 30.487], [1513061580, 30.477], [1513061400, 30.487], [1513061100, 30.487], [1513060800, 30.477], [1513060500, 30.487], [1513060200, 30.487], [1513059900, 30.477], [1513059600, 30.487], [1513059300, 30.477], [1513059000, 30.477], [1513058700, 30.487], [1513058400, 30.487], [1513058100, 30.487], [1513057980, 30.487], [1513057800, 30.487], [1513057500, 30.487], [1513057200, 30.477], [1513056900, 30.487], [1513056600, 30.477], [1513056300, 30.477], [1513056000, 30.467], [1513055700, 30.467], [1513055400, 30.467], [1513055100, 30.467], [1513054800, 30.477], [1513054500, 30.477], [1513054380, 30.477], [1513054200, 30.477], [1513053900, 30.477], [1513053600, 30.487], [1513053300, 30.477], [1513053000, 30.467], [1513052700, 30.477], [1513052400, 30.467], [1513052100, 30.477], [1513051800, 30.477], [1513051500, 30.467], [1513051200, 30.467], [1513050900, 30.467], [1513050780, 30.467], [1513050600, 30.467], [1513050300, 30.457], [1513050000, 30.447], [1513049700, 30.447], [1513049400, 30.447], [1513049100, 30.447], [1513048800, 30.457], [1513048500, 30.457], [1513048200, 30.447], [1513047900, 30.447], [1513047600, 30.457], [1513047300, 30.457], [1513047180, 30.457], [1513047000, 30.447], [1513046700, 30.447], [1513046400, 30.447], [1513046100, 30.447], [1513045800, 30.447], [1513045500, 30.447], [1513045200, 30.447], [1513044900, 30.447], [1513044600, 30.447], [1513044300, 30.447], [1513044000, 30.447], [1513043700, 30.447], [1513043580, 30.447], [1513043400, 30.447], [1513043100, 30.447], [1513042800, 30.437], [1513042500, 30.437], [1513042200, 30.427], [1513041900, 30.437], [1513041600, 30.437], [1513041300, 30.437], [1513041000, 30.437], [1513040700, 30.437], [1513040400, 30.427], [1513040100, 30.427], [1513039980, 30.427], [1513039800, 30.427], [1513039500, 30.427], [1513039200, 30.427], [1513038900, 30.427], [1513038600, 30.427], [1513038300, 30.427], [1513038000, 30.427], [1513037700, 30.427], [1513037400, 30.427], [1513037100, 30.427], [1513036800, 30.427], [1513036500, 30.437], [1513036380, 30.427], [1513036200, 30.427], [1513035900, 30.417], [1513035600, 30.417], [1513035300, 30.427], [1513035000, 30.417], [1513034700, 30.417], [1513034400, 30.417], [1513034100, 30.427], [1513033800, 30.437], [1513033500, 30.427], [1513033200, 30.417], [1513032900, 30.417], [1513032780, 30.417], [1513032600, 30.417], [1513032300, 30.407], [1513032000, 30.397], [1513031700, 30.407], [1513031400, 30.407], [1513031100, 30.417], [1513030800, 30.427], [1513030500, 30.427], [1513030200, 30.427], [1513029900, 30.417], [1513029600, 30.417], [1513029300, 30.417], [1513029180, 30.417], [1513029000, 30.407], [1513028700, 30.407], [1513028400, 30.417], [1513028100, 30.417], [1513027800, 30.407], [1513027500, 30.407], [1513027200, 30.407], [1513026900, 30.407], [1513026600, 30.407], [1513026300, 30.417], [1513026000, 30.417], [1513025700, 30.417], [1513025400, 30.417], [1513025100, 30.417], [1513024800, 30.417], [1513024500, 30.407], [1513024200, 30.407], [1513023900, 30.417], [1513023600, 30.417], [1513023300, 30.417], [1513023000, 30.417], [1513022700, 30.417], [1513022400, 30.427], [1513022100, 30.427], [1513021980, 30.417], [1513021800, 30.427], [1513021500, 30.427], [1513021200, 30.427], [1513020900, 30.427], [1513020600, 30.427], [1513020300, 30.417], [1513020000, 30.427], [1513019700, 30.427], [1513019400, 30.417], [1513019100, 30.427], [1513018800, 30.427], [1513018500, 30.427], [1513018380, 30.427], [1513018200, 30.427], [1513017900, 30.427], [1513017600, 30.427], [1513017300, 30.417], [1513017000, 30.417], [1513016700, 30.407], [1513016400, 30.407], [1513015800, 30.417], [1513015500, 30.417], [1513015200, 30.417], [1513014900, 30.417], [1513014780, 30.417], [1513014600, 30.417], [1513014300, 30.407], [1513014000, 30.407], [1513013700, 30.397], [1513013400, 30.407], [1513013100, 30.407], [1513012800, 30.407], [1513012500, 30.407], [1513012200, 30.407], [1513011900, 30.407], [1513011600, 30.407], [1513011300, 30.407], [1513011180, 30.407], [1513011000, 30.407], [1513010700, 30.407], [1513010400, 30.407], [1513010100, 30.407], [1513009800, 30.407], [1513009500, 30.417], [1513009200, 30.417], [1513008900, 30.417], [1513008600, 30.407], [1513008300, 30.407], [1513008000, 30.397], [1513007700, 30.397], [1513007580, 30.397], [1513007400, 30.397], [1513007100, 30.397], [1513006800, 30.397], [1513006500, 30.397], [1513006200, 30.397], [1513005900, 30.397], [1513005600, 30.407], [1513005300, 30.397], [1513005000, 30.397], [1513004700, 30.397], [1513004400, 30.387], [1513004100, 30.387], [1513003980, 30.387], [1513003800, 30.387], [1513003500, 30.387], [1513003200, 30.387], [1513002900, 30.387], [1513002600, 30.387], [1513002300, 30.387], [1513002000, 30.387], [1513001700, 30.387], [1513001400, 30.387], [1513001100, 30.387], [1513000800, 30.387], [1513000500, 30.377], [1513000380, 30.377], [1513000200, 30.377], [1512999900, 30.387], [1512999600, 30.387], [1512999300, 30.387], [1512999000, 30.387], [1512998700, 30.387], [1512998400, 30.387], [1512998100, 30.387], [1512997800, 30.387], [1512997500, 30.387], [1512997200, 30.387], [1512996900, 30.387], [1512996780, 30.387], [1512996600, 30.387], [1512996300, 30.387], [1512996000, 30.387], [1512995700, 30.387], [1512995400, 30.397], [1512995100, 30.387], [1512994800, 30.387], [1512994500, 30.387], [1512994200, 30.387], [1512993900, 30.387], [1512993600, 30.387], [1512993300, 30.387], [1512993180, 30.377], [1512993000, 30.377], [1512992700, 30.377], [1512992400, 30.377], [1512992100, 30.377], [1512991800, 30.377], [1512991500, 30.377], [1512991200, 30.387], [1512990900, 30.387], [1512990600, 30.387], [1512990300, 30.387], [1512990000, 30.387], [1512989700, 30.387], [1512989580, 30.387], [1512989400, 30.387], [1512989100, 30.387], [1512988800, 30.387], [1512988500, 30.377], [1512988200, 30.377], [1512987900, 30.387], [1512987600, 30.387], [1512987000, 30.377], [1512986700, 30.377], [1512986400, 30.377], [1512986100, 30.377], [1512985980, 30.377], [1512985800, 30.377], [1512985500, 30.377], [1512985200, 30.367], [1512984900, 30.367], [1512984600, 30.367], [1512984300, 30.367], [1512984000, 30.367], [1512983700, 30.367], [1512983400, 30.367], [1512983100, 30.367], [1512982800, 30.367], [1512982500, 30.357], [1512982380, 30.357], [1512982200, 30.357], [1512981900, 30.367], [1512981600, 30.367], [1512981300, 30.367], [1512981000, 30.367], [1512980700, 30.357], [1512980400, 30.357], [1512980100, 30.357], [1512979800, 30.357], [1512979500, 30.357], [1512979200, 30.367], [1512978900, 30.367], [1512978780, 30.367], [1512978600, 30.367], [1512978300, 30.367], [1512978000, 30.367], [1512977700, 30.367], [1512977400, 30.367], [1512977100, 30.367], [1512976800, 30.367], [1512976200, 30.367], [1512975900, 30.367], [1512975600, 30.367], [1512975300, 30.367], [1512975180, 30.367], [1512975000, 30.367], [1512974700, 30.367], [1512974400, 30.357], [1512974100, 30.357], [1512973800, 30.357], [1512973500, 30.357], [1512973200, 30.357], [1512972900, 30.347], [1512972600, 30.357], [1512972300, 30.347], [1512972000, 30.347], [1512971700, 30.347], [1512971580, 30.347], [1512971400, 30.347], [1512971100, 30.347], [1512970800, 30.347], [1512970500, 30.347], [1512970200, 30.347], [1512969900, 30.347], [1512969600, 30.347], [1512969300, 30.347], [1512969000, 30.347], [1512968700, 30.337], [1512968400, 30.347], [1512968100, 30.347], [1512967980, 30.347], [1512967800, 30.337], [1512967500, 30.337], [1512967200, 30.337], [1512966900, 30.337], [1512966600, 30.337], [1512966300, 30.337], [1512966000, 30.337], [1512965700, 30.337], [1512965400, 30.337], [1512965100, 30.337], [1512964800, 30.337], [1512964500, 30.337], [1512964380, 30.337], [1512964200, 30.337], [1512963900, 30.337], [1512963600, 30.337], [1512963300, 30.337], [1512963000, 30.337], [1512962700, 30.337], [1512962400, 30.337], [1512962100, 30.337], [1512961800, 30.327], [1512961500, 30.327], [1512961200, 30.337], [1512960900, 30.337], [1512960780, 30.337], [1512960600, 30.337], [1512960300, 30.337], [1512960000, 30.337], [1512959700, 30.337], [1512959400, 30.337], [1512959100, 30.337], [1512958800, 30.337], [1512958500, 30.337], [1512958200, 30.337], [1512957900, 30.337], [1512957600, 30.337], [1512957300, 30.337], [1512957180, 30.337], [1512957000, 30.337], [1512956700, 30.337], [1512956400, 30.337], [1512956100, 30.337], [1512955800, 30.337], [1512955500, 30.337], [1512955200, 30.347], [1512954900, 30.347], [1512954600, 30.347], [1512954300, 30.347]";
    var array = JSON.parse("[" + stringValues + "]");
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