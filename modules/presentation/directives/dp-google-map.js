angular.module('directPortalApp').directive('dpGoogleMap', function ($http, $state, gmapsUi) {

    function link(scope, element, attrs) {
        scope.internalControl = scope.control || {};
        scope.internalControl.printShape = scope.printShape;
        scope.internalControl.enableDraw = scope.enableDraw;
    }

    return {
        restrict: 'E',
        transclude: false,
        link: link,
        templateUrl: 'directPortal/modules/presentation/directives/dp-google-map.html',
        controller: function ($scope, $linq, gmapsUi, buildingService, $timeout) {

            angular.element(document).ready(function () {
                $timeout(function () {
                    $scope.mapInstance = gmapsUi.getMapInstance($scope.config);

                    angular.forEach($scope.complexes, function (value, key) {

                        if (JSON.parse(value.Buildings[0].Coordinates).length != 0) {

                            showMap(value.Buildings[0], JSON.parse(value.Buildings[0].Coordinates));

                        }

                    });
                }, 200);

            });

            var showMap = function (entity, coor) {
                $scope.mapInstance.printShape(coor, function () {
                    $scope.selectedComplex = entity;
                    $scope.selectedComplexId = entity.ID;
                    $scope.showProjectMenu = false;
                    buildingService.get('', function (response) {
                        $scope.Buildings = response.data;
                        $scope.SelectedBuildings = $linq.Enumerable().From($scope.Buildings)
                            .Where("x => x['ComplexId']==" + $scope.selectedComplexId)
                            .ToArray();
                    });

                    $scope.$apply();
                });
            }
        }
    }

});