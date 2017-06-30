directPortalApp.controller("levelPlansController", function ($scope, buildingService) {
    buildingService.getAll('', function (response) {
        $scope.buildings = response.data;
    });

    $scope.selectBuilding = function (id) {
        $scope.selectedBuilding = id;
        console.log($scope.selectedBuilding);
    };

    $scope.selectFloor = function (floor) {
        $scope.selectedFloor = floor;
    };
});