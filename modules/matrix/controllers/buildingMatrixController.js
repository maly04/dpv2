directPortalApp.controller("buildingMatrixController", function ($scope, $stateParams, $linq, matrixModuleService) {
    matrixModuleService.get($stateParams.id, function (response) {
        $scope.units = response.data;
        $scope.building = $scope.units[0].Building;

        // 3) Start using $linq
        $scope.queryResult = $linq.Enumerable().From($scope.units)
            .GroupBy(function (x) {
                return x.Floor;
            }).ToArray();

        console.log($scope.queryResult);

        //console.log($scope.queryResult);
    });
});