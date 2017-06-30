var ed = angular.module('directPortalApp.earlyadopter', []);

ed.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('app.earlyadopter', {
            url: '/earlyadopter',
            templateUrl: 'directPortal/modules/earlyadopter/views/earlyadopter.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'directPortal/modules/earlyadopter/earlyadopter.css',
                        ]
                    });
                }]
            },
            controller: 'earlyadopterController'
        });

}]);
