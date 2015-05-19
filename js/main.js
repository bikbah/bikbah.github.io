(function () {
    var arr = [
        {"res1":20150510,"res2":10,"res3":10},
        {"res1":20150511,"res2":19,"res3":25},
        {"res1":20150512,"res2":44,"res3":48},
        {"res1":20150513,"res2":33,"res3":36},
        {"res1":20150514,"res2":23,"res3":24},
        {"res1":20150515,"res2":30,"res3":46},
        {"res1":20150516,"res2":27,"res3":29},
        {"res1":20150517,"res2":19,"res3":21},
        {"res1":20150518,"res2":41,"res3":49}
    ]

    var readyData1 = [],
        readyData2 = [];

    for(var i=0; i<arr.length; i++){

        var tmpDate = moment(arr[i]['res1'] + '', "YYYYMMDD").valueOf(); // get Unix time

        var point = [];
        point.push(tmpDate);
        point.push(arr[i]['res2']);

        readyData1.push(point);

        var point = [];
        point.push(tmpDate);
        point.push(arr[i]['res3']);

        readyData2.push(point);
    }

    window.chart = new Highcharts.StockChart({

        chart: {
            renderTo: 'container4'
        },

        rangeSelector : {
            selected : 1,
            inputDateFormat: '%Y-%m-%d',
            inputEditDateFormat: '%Y-%m-%d'
        },

        title : {
            text : 'test'
        },

        series : [
            {
                name : 'res1',
                data : readyData1,
                tooltip: {
                    valueDecimals: 2
                }
            },
            {
                name : 'res2',
                data : readyData2,
                tooltip: {
                    valueDecimals: 2
                }
            }
        ]
    });

})(jQuery);