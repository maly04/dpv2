var matrixModule = angular.module('directPortalApp.matrix', []);

matrixModule.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.matrix', {
            url: '/matrix',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.matrix.buildingmatrix', {
            url: '/building/:id',
            templateUrl: 'directPortal/modules/matrix/views/buildingmatrix.html',
            controller: 'buildingMatrixController'
        })
        .state('app.matrix.minibuildingmatrix', {
            url: '/building/mini/:id',
            templateUrl: 'directPortal/modules/matrix/views/minibuildingmatrix.html',
            controller: 'miniBuildingMatrixController'
        });
});
