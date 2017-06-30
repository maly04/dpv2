var devModule = angular.module('directPortalApp.development', []);

devModule.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.development', {
            url: '/demo',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.development.svgicons', {
            url: '/svgicons',
            templateUrl: 'directPortal/modules/demo/views/svgicons.html',
            controller: 'svgiconsController'
        })
        .state('app.development.orgchart', {
            url: '/orgchart',
            templateUrl: 'directPortal/modules/demo/views/orgchart.html',
            controller: 'orgchartController'
        }).state('app.development.timeline', {
            url: '/timeline',
            templateUrl: 'directPortal/modules/demo/views/timeline.html',
            controller: 'timelineController'
        })
        .state('app.development.planogram', {
            url: '/planogram',
            templateUrl: 'directPortal/modules/demo/views/planogram.html',
            controller: 'planogramController'
        }).state('app.development.interaction', {
            url: '/interaction',
            templateUrl: 'directPortal/modules/demo/views/interaction.html',
            controller: 'interactionController'
        });
});
