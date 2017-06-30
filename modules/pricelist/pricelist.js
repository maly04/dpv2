var pricelist = angular.module('directPortalApp.pricelist', []);


pricelist.config(['$stateProvider', function ($stateProvider) {

    $stateProvider.state('app.pricelist', {
        url: '/pricelist/:buildingId',
        templateUrl: 'directPortal/modules/pricelist/views/pricelist.html',
        controller: 'pricelistController',
        resolve: {
            service: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    files: [
                        'directPortal/modules/pricelist/directives/dp-slick-grid.js',
                        'directPortal/modules/pricelist/pricelist.css',
                        'lib/SlickGrid-6pac/lib/jquery.event.drag-2.3.0.js',
                        'lib/SlickGrid-6pac/slick.core.js',
                        'lib/SlickGrid-6pac/slick.dataview.js',
                        'lib/SlickGrid-6pac/slick.editors.js',
                        'lib/SlickGrid-6pac/slick.formatters.js',
                        'lib/SlickGrid-6pac/plugins/slick.cellselectionmodel.js',
                        'lib/SlickGrid-6pac/plugins/slick.cellrangedecorator.js',
                        'lib/SlickGrid-6pac/plugins/slick.cellrangeselector.js',
                        'lib/SlickGrid-6pac/slick.grid.js',
                        'lib/SlickGrid-6pac/slick.grid.css',
                        'lib/SlickGrid-6pac/slick.remotemodel.js',
                        'lib/SlickGrid-6pac/slick.groupitemmetadataprovider.js',
                        'lib/SlickGrid-6pac/slick-default-theme.css',
                    ]
                });
            }]
        }
    });

}]);