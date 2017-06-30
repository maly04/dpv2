directPortalApp.controller("dashboardController", function ($scope, $state, $linq, matrixModuleService, buildingService) {

    $scope.goToUnit = function (unit) {
        $state.go('app.unit.detail', { id: unit.ID });
    };

    var buildingsID = [];
    //call the building service get the building
    buildingService.getAll('',function (response) {
        $scope.buildings = response.data;
        $scope.query = [];
        for (var i = 0; i < $scope.buildings.length; i++) {
            var buildingId = $scope.buildings[i].ID;
            matrixModuleService.get($scope.buildings[i].ID, function (response) {

                var units = response.data;

                var queryunits = $linq.Enumerable().From(units)
                    .GroupBy(function (x) {
                        return x.Floor;
                    }).ToArray();

              

                $scope.query.push(queryunits);

            });
            console.log("fuck you javascript");


        }
    }, function (response) {
        console.log(response);
        });
    
});