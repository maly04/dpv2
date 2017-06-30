var mm = angular.module('directPortalApp.marketingmaterial', []);

mm.directive('dpFileUpload', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('change', scope.previewImages);
        }
    };
});

mm.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('app.marketingmaterial', {
            url: '/mm',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.marketingmaterial.index', {
            url: '/',
            templateUrl: 'directPortal/modules/marketingmaterial/views/index.html',
            controller: 'marketingMaterialIndexController'
        })
        .state('app.marketingmaterial.detail', {
            url: '/view/:buildingId',
            templateUrl: 'directPortal/modules/marketingmaterial/views/detail.html',
            controller: 'detailController'
        })
        .state('app.marketingmaterial.createMarketingMaterial', {
            url: '/createMarketingMaterial',
            templateUrl: 'directPortal/modules/marketingmaterial/views/createMarketingMaterial.html',
            controller: 'createMarketingMaterialController'
        });

}]);