directPortalApp.controller("miniBuildingMatrixController", function ($scope, $stateParams, $linq, matrixModuleService) {
    matrixModuleService.get($stateParams.id, function (response) {
        $scope.units = response.data;
        $scope.building = $scope.units[0].Building;

        // 3) Start using $linq
        $scope.queryunits = $linq.Enumerable().From($scope.units)
            .GroupBy(function (x) {
                return x.Floor;
            }).ToArray();

        console.log($scope.queryunits);

        var date = new Date();
        var options = {
            weekday: "long", year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };

        angular.forEach($scope.units, function (val,i) {
            angular.forEach(val.Features, function (unitFeature) {
                if (unitFeature.Value === 'YES') {
                    $scope.units[i]["FeatureTypeName"] = unitFeature.Type.Name;
                }
               
            });
        });

        $scope.dateAndTime = date.toLocaleTimeString("en-us", options);  

        console.log($scope.units);

    });

    

    $('.btn-full-screen').click(function () {
        console.log();
        $('#top-nav, .logo').toggle();
        $('#sidebar').toggleClass('hide-bitch');
        $('#content').toggleClass('no-margin');
    });

    $('.btn-print-it').click(function () {
        window.print();
    });
});