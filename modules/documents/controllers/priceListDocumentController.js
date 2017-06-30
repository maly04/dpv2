directPortalApp.controller("priceListDocumentController", function ($scope, matrixModuleService) {
    matrixModuleService.get($stateParams.id, function (response) {
        $scope.units = response.data;
        $scope.building = $scope.units[0].Building;

        // 3) Start using $linq
        $scope.queryunits = $linq.Enumerable().From($scope.units)
            .GroupBy(function (x) {
                return x.Floor;
            }).ToArray();
    });
});