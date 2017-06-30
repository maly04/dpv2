var buildingManagement = angular.module('directPortalApp.buildingmanagement', []);

buildingManagement.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.buildingmanagement', {
            url: '/buildingmanagement',
            template: "<div ui-view></div>"
        })
        .state('app.buildingmanagement.complex', {
            url: '/complex',
            templateUrl: 'directPortal/modules/buildingmanagement/views/complexCreate.html',
            controller: 'complexController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            { type: 'js', path: '//maps.googleapis.com/maps/api/js?key=AIzaSyCnBkzdvgVbnGez2zi4RlqKSNKSJrLzsJw&libraries=drawing' },
                        ]
                    });
                }]
            }
        })
        .state('app.buildingmanagement.building', {
            url: '/building',
            templateUrl: 'directPortal/modules/buildingmanagement/views/buildingCreate.html',
            controller: 'buildingController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            { type: 'js', path: '//maps.googleapis.com/maps/api/js?key=AIzaSyCnBkzdvgVbnGez2zi4RlqKSNKSJrLzsJw&libraries=drawing' },
                        ]
                    });
                }]
            }
        })
        .state('app.buildingmanagement.unit', {
            url: '/unit',
            templateUrl: 'directPortal/modules/buildingmanagement/views/unitCreate.html',
            controller: 'unitController'
        })
        .state('app.buildingmanagement.unittype', {
            url: '/unittype',
            templateUrl: 'directPortal/modules/buildingmanagement/views/unitTypeCreate.html',
            controller: 'unittypeController'
        })
        .state('app.buildingmanagement.unitsubtype', {
            url: '/unitsubtype',
            templateUrl: 'directPortal/modules/buildingmanagement/views/unitSubTypeCreate.html',
            controller: 'unitsubtypeController'
        })
        .state('app.buildingmanagement.tasklist', {
            url: '/tasklist',
            templateUrl: 'directPortal/modules/buildingmanagement/views/tasklist.html',
            controller: 'tasklistController'
        })
        .state('app.buildingmanagement.taskdetail', {
            url: '/taskdetail/:taskId',
            templateUrl: 'directPortal/modules/buildingmanagement/views/taskdetail.html',
            controller: 'taskdetailController'
        })
        .state('app.buildingmanagement.requestlist', {
            url: '/requestlist',
            templateUrl: 'directPortal/modules/buildingmanagement/views/requestlist.html',
            controller: 'requestlistController'
        });
    
});