var dashboard = angular.module('directPortalApp.dashboard', []);
dashboard.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app.dashboard', {
        url: '/dashboard',
        template: '<div ui-view></div>',
        abstract:true
    }).state('app.dashboard.index', {
        url: '/index',
        templateUrl: 'directPortal/modules/dashboard/views/dashboard.html',
        controller: 'dashboardController',
        resolve: {
            service: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        'directPortal/modules/dashboard/dashboard.css',
                    ]
                });
            }]
        }


    }).state('app.dashboard.matrix', {
            url: '/matrix/:buildingid',
            templateUrl: 'directPortal/modules/dashboard/views/matrix.html',
            controller: 'matrixController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'directPortal/modules/dashboard/matrix.css',
                              
                        ]
                    });
                }]
            }
        });
}]);