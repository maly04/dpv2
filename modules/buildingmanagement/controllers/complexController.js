var complex = buildingManagement.controller('complexController', function ($scope, gmapsUi) {

    $scope.complex = {
        name: '',
        coordinates: []
    };

    var mapConfig = {
        container_id: 'mygmap',
        center: {
            lat: 40.1451,
            lng: -99.6680
        },
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    var gmap = gmapsUi.getMapInstance(mapConfig);
    gmap.enableDrawing(function (polygon) {

        if (gmap.shapes.polygons.length > 0){
            gmap.shapes.polygons.splice(-1).map(function (poly) {
                poly.setMap(null);
            });
        }
        console.log(gmap.shapes.polygons.length);
        var path = polygon.getPath().getArray();
        var coords = [];
        for (i in path) {
            coords.push({ lat: path[i].lat(), lng: path[i].lng() });
        }
        gmap.shapes.polygons.push(polygon);

        $scope.complex.coordinates = coords;
        $scope.$apply();
    });

    $scope.submit = function () {

        http.post('services/complex').then(function(res){
            console.log(res);
            $state.reload();
        });

    }
});