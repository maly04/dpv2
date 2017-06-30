accounting.controller('reportController', function ($scope, $rootScope, $state) {

    $scope.buildings = [
        {
            ID: 0,
            Name: 'City garden Tropicana',
            Url: 'directPortal/modules/marketingmaterial/images/1.svg'
        }, {
            ID: 1,
            Name: 'Paradise ocean view',
            Url: 'directPortal/modules/marketingmaterial/images/5.svg'
        }, {
            ID: 2,
            Name: 'City garden Tower',
            Url: 'directPortal/modules/marketingmaterial/images/6.svg'
        }, {
            ID: 3,
            Name: 'Olympus A',
            Url: 'directPortal/modules/marketingmaterial/images/7.svg'
        }, {
            ID: 4,
            Name: 'city garden Pataya',
            Url: 'directPortal/modules/marketingmaterial/images/10.svg'
        }
    ];
    $scope.charts = [];

    for (i in $scope.buildings) {
        $scope.charts.push({
            config: {
                container_id: 'mygraph_' + $scope.buildings[i].ID
            },
            options: {
                title: {
                    text: $scope.buildings[i].Name
                },
                subtitle: {
                    text: $scope.buildings[i].Name
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },
                plotOptions: {
                    series: {
                        pointStart: 2010
                    }
                },
                series: [{
                    name: 'Installation',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                }, {
                    name: 'Manufacturing',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                }, {
                    name: 'Sales & Distribution',
                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                }, {
                    name: 'Project Development',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                }, {
                    name: 'Other',
                    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                }]
            }
        });
    }


    //serviceWrapper.get('Building').getAll('', function (response) {
    //    $scope.buildings = response.data;

    //    for (i in $scope.buildings) {

    //        // do something with data to setup the charts
    //        $scope.charts.push({
    //            config: {
    //                container_id: 'mygraph_' + $scope.buildings[i].ID
    //            },
    //            options: {
    //                title: {
    //                    text: $scope.buildings[i].Name
    //                },
    //                subtitle: {
    //                    text: $scope.buildings[i].Description
    //                },
    //                legend: {
    //                    layout: 'vertical',
    //                    align: 'right',
    //                    verticalAlign: 'middle'
    //                },
    //                plotOptions: {
    //                    series: {
    //                        pointStart: 2010
    //                    }
    //                },
    //                series: [{
    //                    name: 'Installation',
    //                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    //                }, {
    //                    name: 'Manufacturing',
    //                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    //                }, {
    //                    name: 'Sales & Distribution',
    //                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    //                }, {
    //                    name: 'Project Development',
    //                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    //                }, {
    //                    name: 'Other',
    //                    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    //                }]
    //            }
    //        });
    //    }
    //});


});
