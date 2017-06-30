directPortalApp.controller("salesBookingController", function ($scope, $linq, unitService, $stateParams, buildingService, unittypeService, matrixModuleService) {

    

    buildingService.getAll('', function (response) {
        $scope.buildings = response.data;
    });

    unittypeService.getAll('', function (response) {
        $scope.unitTypes = response.data;
    });

    $scope.getSelectedBuilding = function (id) {
        unitService.getAll('', function (response) {
            $scope.units = response.data;
            

            matrixModuleService.get(id, function (response) {
                $scope.matrix = response.data;
                $scope.unitFloorGroup = $linq.Enumerable().From($scope.matrix)
                    .Where("x => x['BuildingId']==" + id)
                    .GroupBy(function (x) {
                        return x.Floor;
                    })
                    .ToArray();
                
            });

            buildingService.get(id, function (response) {
                $scope.selectedBuilding = response.data[0];
            });

        });

        
        $scope.click = true;
    };



        

        //unitService.getAll('', function (response) {
        //    $scope.units = response.data;

        //    $scope.unitFloorGroup = $linq.Enumerable().From($scope.units)
        //        .Where("x => x['BuildingId']==" + id)
        //        .GroupBy(function (x) {
        //            return x.Floor;
        //        })

        //        .ToArray();

        //});



});