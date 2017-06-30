directPortalApp.controller("salesUnitDetailsController", function ($scope, $stateParams, unitService, matrixModuleService, $state) {

    $scope.id = $stateParams.id;
    console.log($stateParams.id);
    unitService.get($scope.id, function (response) {
        $scope.unit = response.data[0];
        
        matrixModuleService.getForUnit($scope.unit.BuildingId, $scope.id, function (response) {
            $scope.unit = response.data;
            console.log($scope.unit);

        });
    });


    $scope.createReservation = function () {
        $state.go('sales.reservation', { id: $stateParams.id });
    };



});