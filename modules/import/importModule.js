var importModule = angular.module('directPortalApp.import', []);

importModule.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.import', {
            url: '/import',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.import.start', {
            url: '/',
            templateUrl: 'directPortal/modules/import/views/import.html',
            controller: 'importController'
        });
});
