var unit = angular.module('directPortalApp.unit', []);

unit.config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('app.unit', {
        url: '/unit',
        abstarct: true,
        template: '<div ui-view></div>',
        resolve: {
            service: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        'directPortal/modules/unit/unit.css',
                    ]
                });
            }]
        }

    }).state('app.unit.detail', {
        url: '/detail/:id',
        templateUrl: 'directPortal/modules/unit/views/unitdetail.html',
        controller: 'unitdetailController'
    })

}]);