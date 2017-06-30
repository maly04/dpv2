mm.controller('marketingMaterialIndexController', function ($scope, $state, $stateParams, buildingService) {
    buildingService.get('',function (response) {
        $scope.buildings = response.data;
    });
});