angular.module('directPortalApp.presentation').factory('gmapsUi', function ($http, __env) {

    var gmapsUi = {};

    gmapsUi.getMapInstance = function (mapConfig) {

        var mapInstance = {};
        mapInstance.shapes = {
            polygons: []
        };
        mapInstance.markers = {};
        mapInstance.map = new google.maps.Map(document.getElementById(mapConfig.container_id), {
            zoom: mapConfig.zoom,
            center: mapConfig.center,
            mapTypeId: mapConfig.mapTypeId
        });

        mapInstance.drawingManager = new google.maps.drawing.DrawingManager({
            drawingControl: false,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['polygon'],
                fillColor: '#FF0000',
                polygonOptions: {
                    fillColor: '#FF0000',
                    fillOpacity: 1,
                    strokeWeight: 5,
                    clickable: true,
                    editable: true,
                    zIndex: 1
                }
            }
        });
        mapInstance.drawingManager.setMap(mapInstance.map);

        mapInstance.printShape = function (coords, clickCB) {
            mapInstance.drawingManager.setOptions({
                drawingControl: false
            });
            mapInstance.map.setCenter(coords[0]);           
            for (i in mapInstance.shapes['polygons']) {
                mapInstance.shapes['polygons'][i].setMap(null);
            }
       
            var polygon = new google.maps.Polygon({
                paths: coords,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35
            });            
            polygon.setMap(mapInstance.map);
            //Remove it for showing multi polygon
            //mapInstance.shapes['polygons'].push(polygon);
            polygon.addListener('click', clickCB);

        }

        mapInstance.clear = function () {
            for (i in this.shapes.polygons) {
                mapInstance.shapes.polygons[i].setMap(null);
            }
            mapInstance.shapes.polygons = [];
        }

        mapInstance.enableDrawing = function (eventCallback) {
            google.maps.event.addListener(this.drawingManager, 'polygoncomplete', function (poly) {
                eventCallback(poly);
            });
            mapInstance.drawingManager.setOptions({
                drawingControl: true
            });
        }

        mapInstance.disableDrawing = function () {
            google.maps.event.clearListeners(this.drawingManager, 'polygoncomplete');
            mapInstance.drawingManager.setOptions({
                drawingControl: false
            });
        }
        return mapInstance;
    }

    return gmapsUi;
});