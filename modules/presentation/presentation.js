var presentation = angular.module('directPortalApp.presentation', []);

presentation.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/account/login');
    $stateProvider
        .state('app.presentation', {
            url: '/presentation',
            template: '<div ui-view></div>',
            abstract: true

        }).state('app.presentation.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/presentation/views/createpresentation.html',
            controller: 'createpresentationController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'lib/jquery-ui-touch-punch/jquery.ui.touch-punch.js',
                        ]
                    });
                }]
            }
        }).state('app.presentation.projectmap', {
            url: '/projectmap',
            templateUrl: 'directPortal/modules/presentation/views/projectmap.html',
            controller: 'projectmapController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            { type: 'js', path: '//maps.googleapis.com/maps/api/js?key=AIzaSyCnBkzdvgVbnGez2zi4RlqKSNKSJrLzsJw&libraries=drawing' },
                            'directPortal/modules/presentation/directives/dp-google-map.css',
                            'directPortal/modules/presentation/services/getComplexData.js',
                            'directPortal/modules/presentation/projectmap.css'
                        ]
                    });
                }]
            }
        }).state('presentation', {
            url: '/tvout',
            templateUrl: 'directPortal/modules/presentation/views/tvout.html',
            controller: 'tvoutController'

        }).state('app.presentation.tv', {
            url: '/tv',
            templateUrl: 'directPortal/modules/presentation/views/tv.html',
            controller: 'tvController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.3.0/css/mdb.min.css',
                        ]
                    });
                }]
            }
        }).state('app.presentation.devices', {
            url: '/devices',
            templateUrl: 'directPortal/modules/presentation/views/devices.html',
            controller: 'devicesController'

        }).state('app.presentation.controls', {
            url: '/controls/:deviceId',
            templateUrl: 'directPortal/modules/presentation/views/remotecontrols.html',
            controller: 'remotecontrolsController'
        })
}]);