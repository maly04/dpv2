angular.module('directPortalApp.presentation').controller('projectmapController', function ($scope, serviceWrapper, $linq, gmapsUi, complexService, buildingService, unitService) {
    //angular.element(document).ready(function () {
    //    $('#buildingsFilter').accordion({
    //        collapsible: true,
    //        active: 0
    //    });
    //});
    serviceWrapper.get('Building').getAll('', function (response) {
        $scope.buildings = response.data;
    }, function (error) {
        console.log(error);
    });
    $scope.displayUnits = function (buildingId, floor) {
       
        unitService.getAll('', function (response) {
            $scope.units = $linq.Enumerable().From(response.data)
                .Where("x => x['Floor'] == " + floor + " && x['BuildingId']==" + buildingId)
                .ToArray();


            $scope.showUnits = true;
            $scope.SelectedFloorId = floor;
        });


    };
    $scope.showMenu = function (building) {
        $scope.showProjectMenu = true;
        $scope.floors = [];
        for (var i = 0; i < building.Floors; i++) {
            $scope.floors.push(i + 1);
        }
        $scope.SelectedBuildingId = building.ID;
        $scope.showFloors = true;
        $scope.showUnits = false;
    };
    $scope.complexes = [];
    complexService.getAll('', function (response) {
        $scope.getComplexes = response.data;
        angular.forEach($scope.getComplexes, function (value, key) {
            var coor = JSON.stringify(value.Coordinates).split(';');
            var arr_coor = [];
            for (var i = 0; i < coor.length; i++) {
                var getStr = coor[i].split(',')
                if (getStr.length > 0) {
                    if (typeof getStr[0] !== 'undefined' && typeof getStr[1] !== 'undefined') {
                        var lat = String(getStr[0]).replace(/\(/g, "").replace(/\)/g, "").replace(/\"/g, "").replace(/\\/g, "");
                        var lng = String(getStr[1]).replace(/\(/g, "").replace(/\)/g, "").replace(/\"/g, "").replace(/\\/g, "");
                        if (lat !== null && lng !== null || lat != '' && lng != '') {
                            var getData =
                                {
                                    "lat": parseFloat(lat),
                                    "lng": parseFloat(lng)
                                }
                            arr_coor.push(getData);
                        }
                    }

                }
            }//End for 
            $scope.complexes.push(
                {
                    "Name": value.Name,
                    "ID": value.ID,
                    "Buildings": [
                        {
                            "Name": value.Buildings,
                            "ID": value.ID,
                            "Coordinates": JSON.stringify(arr_coor)
                        }
                    ]//end building
                }
            );
        });//end foreach 

    });//End call api
    $scope.config = {
        container_id: 'mygmap',
        center: {
            lat: parseFloat(40.1451),
            lng: parseFloat(-99.6680)
        },
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
});