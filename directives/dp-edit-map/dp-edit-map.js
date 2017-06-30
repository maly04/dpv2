angular.module('directPortalApp').directive('dpEditMap', function ($http, $state, gmapsUi) {
    function link(scope, element, attrs) {
        scope.internalControl = scope.control || {};
        scope.internalControl.printShape = scope.printShape;
        scope.internalControl.enableDraw = scope.enableDraw;

        scope.action = attrs.dpAction;
        scope.entity = attrs.dpEntity;
        scope.entityId = attrs.dpEntityId;
        //scope.fields = attrs.dpFields;


    }

    return {
        link: link,
        transclude: true,
        templateUrl: 'directPortal/directives/dp-edit-map/dp-edit-map.html',
        controller: function ($scope, serviceWrapper, $state) {
            $scope.config = {
                container_id: 'mygmap',
                center: {
                    lat: parseFloat(40.1451),
                    lng: parseFloat(-99.6680)
                },
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };
            angular.element(document).ready(function () {
                $scope.mapInstance = gmapsUi.getMapInstance($scope.config);

                $scope.mapInstance.enableDrawing(function (polygon) {
                    var path = polygon.getPath().getArray();
                    var coords = [];
                    for (i in path) {
                        coords.push({ lat: path[i].lat(), lng: path[i].lng() });
                    }
                    //var data = {
                    //    ID: $scope.entityId,
                    //    Name: $scope.entity,
                    //    //Coordinates: JSON.stringify(coords),
                    //    Coordinates: coords,
                    //    Latitude: coords[0].lat,
                    //    Longitude: coords[0].lng
                    //};
                    //console.log(data);
                    //Insert data into db
                    serviceWrapper.get($scope.entity).get($scope.entityId, function (response) {
                        $scope.entityData = response.data[0];
                        $scope.entityData.Coordinates = JSON.stringify(coords);
                        serviceWrapper.get($scope.entity).edit($scope.entityData, function (response) {
                            console.log("success");
                        }, function (response) {                       
                            console.log("error saving entity");
                            console.log(response);
                        });
                    });

                });
            });
        },
        scope: {
            action: '@dpAction',
            entity: '@dpEntity',
            entityId: '@dpEntityId'

        }
    }
});