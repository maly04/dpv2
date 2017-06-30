var contact = angular.module('directPortalApp.contact', []);


contact.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('app.contact', {
            url: '/contact',
            templateUrl: 'directPortal/modules/contact/views/contact.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            //{ type: 'js', path: 'http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false' },
                            { type: 'js', path: 'directPortal/googlemap.js?libraries=places&sensor=false' },
                            'directPortal/modules/contact/contact.css',
                        ]
                    });
                }]
            },
            controller: 'contactController'
        });

}]);
