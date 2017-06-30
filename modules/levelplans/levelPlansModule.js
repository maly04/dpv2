var levelPlansModule = angular.module('directPortalApp.levelplans', []);

levelPlansModule.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.levelplans', {
            url: '/levelplans',
            templateUrl: 'directPortal/modules/levelplans/views/levelplans.html',
            controller: 'levelPlansController'
        });
});