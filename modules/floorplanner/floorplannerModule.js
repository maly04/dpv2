var floorPlannerModule = angular.module('directPortalApp.floorplanner', []);


floorPlannerModule.config(['$stateProvider', function ($stateProvider, $state) {

    $stateProvider
        .state('app.floorplanner', {
            url: '/floorplanner',
            templateUrl: 'directPortal/modules/floorplanner/views/floorplanner.html',
            controller: 'floorplannerController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'directPortal/modules/floorplanner/css/FloorPlanner.css',
                            'directPortal/modules/floorplanner/js/FloorPlan.js',
                            'directPortal/modules/floorplanner/js/FloorPlanFilesystem.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-Templates-Furniture.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-Templates-General.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-Templates-Walls.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-WallBuildingTool.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-WallReshapingTool.js',
                            'directPortal/modules/floorplanner/js/FloorPlanPalette.js',
                            'directPortal/modules/floorplanner/js/FloorplanUI.js'
                        ]
                    });
                }],

            }
        })
        .state('app.floorplanner.view', {
            url: '/view/:entityName/:id',
            templateUrl: 'directPortal/modules/floorplanner/views/floorplanner.html',
            controller: 'floorplannerViewController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'directPortal/modules/floorplanner/css/FloorPlanner.css',
                            'directPortal/modules/floorplanner/js/FloorPlan.js',
                            'directPortal/modules/floorplanner/js/FloorPlanFilesystem.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-Templates-Furniture.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-Templates-General.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-Templates-Walls.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-WallBuildingTool.js',
                            'directPortal/modules/floorplanner/js/FloorPlanner-WallReshapingTool.js',
                            'directPortal/modules/floorplanner/js/FloorPlanPalette.js',
                            'directPortal/modules/floorplanner/js/FloorplanUI.js'
                        ]
                    });
                }],

            }
        });
}]);