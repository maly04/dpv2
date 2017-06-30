var authoring = angular.module('directPortalApp.authoring', []);

authoring.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.authoring', {
            url: '/authoring',
            template: "<div ui-view></div>"
        })
        .state('app.authoring.tool', {
            url: '/tool',
            templateUrl: 'directPortal/modules/authoring/views/index.html',
            controller: 'authoringToolController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'directPortal/modules/authoring/css/layoutit.css',
                            'directPortal/modules/authoring/css/theme.css',
                            'directPortal/modules/authoring/js/jquery.htmlClean.js'
                        ]
                    });
                }]
            }
        });
});