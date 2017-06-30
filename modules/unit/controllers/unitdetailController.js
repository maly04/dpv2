angular.module('directPortalApp.unit').controller('unitdetailController', function ($scope, $state, $linq, unitService, matrixModuleService) {

    var unitID = $state.params.id;
    
    unitService.get(unitID, function (response) {
        $scope.unit = response.data[0];

        unitService.getAll('', function (response2) {

            $scope.numberOfUnits = $linq.Enumerable().From(response2.data)
                .Where("x => x['BuildingId']==" + $scope.unit.BuildingId)
                .ToArray();
            
        });

        matrixModuleService.getForUnit($scope.unit.BuildingId, unitID, function (response) {
            $scope.unit = response.data;

        });
    });

});