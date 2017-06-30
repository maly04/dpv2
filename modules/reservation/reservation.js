var reservation = angular.module('directPortalApp.reservation', []);

reservation.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('app.reservation', {
            url: '/reservation',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.reservation.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/reservation/views/create.html',
            controller: 'createreservationModuleController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'lib/twitter-bootstrap-wizard/jquery.bootstrap.wizard.js',
                            'directPortal/modules/reservation/reservation.css',
                        ]
                    });
                }]
            }
        })
        .state('app.reservation.view', {
            url: '/view/:id',
            templateUrl: 'directPortal/modules/reservation/views/create.html',
            controller: 'viewReservationModuleController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'lib/twitter-bootstrap-wizard/jquery.bootstrap.wizard.js',
                            'directPortal/modules/reservation/reservation.css',
                        ]
                    });
                }]
            }
        })
        .state('app.reservation.active', {
            url: '/active',
            templateUrl: 'directPortal/modules/reservation/views/active.html',
            controller: 'activereservationController'
        })
        .state('app.reservation.all', {
            url: '/all',
            templateUrl: 'directPortal/modules/reservation/views/all.html',
            controller: 'allreservationController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'lib/datatables.net/js/jquery.dataTables.js',
                            'lib/datatables.net-dt/css/jquery.dataTables.css',
                        ]
                    });
                }]
            }
        });

}]);