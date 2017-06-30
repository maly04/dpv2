mm.controller('marketingMaterialDetailController', function ($scope, $state, $stateParams, $linq, buildingService, serviceWrapper) {
    serviceWrapper.get('MarketingMaterialType').getAll('', function (response) {
        $scope.marketingMaterialTypes = response.data;
    });

    serviceWrapper.get('MarketingMaterial').getAll('', function (response) {
        $scope.marketingMaterials = response.data;
    });

    var buildingID = $state.params.buildingId;
    $scope.activeCategory = 'all';
    buildingService.get(buildingID, function (response) {
        $scope.building = response.data[0];
    });

    $scope.getAll = function ($event) {
        $('.btn-category').removeClass('btn-success');
        $($event.target).addClass('btn-success');
        $scope.activeCategory = 'all';
    }

    $scope.changeActiveCategory = function (category, $event) {
        $('.btn-category').removeClass('btn-success');
        $($event.target).addClass('btn-success');
        $scope.activeCategory = category;
        serviceWrapper.get('MarketingMaterialType').getByName(category.Name, function (response) {
            $scope.marketingMaterialType = response.data;
        });
    }

});