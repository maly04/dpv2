var sub = angular.module('directPortalApp.subscribers', []);

sub.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('app.subscribers', {
            url: '/subscribers',
            templateUrl: 'directPortal/modules/subscribers/views/subscribers.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'directPortal/modules/subscribers/subscribers.css',
                        ]
                    });
                }]
            },
            controller: 'subscribersController'
        });

}]);
