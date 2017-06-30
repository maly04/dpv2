var phonebook = angular.module('directPortalApp.phonebook', []);


phonebook.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('app.phonebook', {
            url: '/phonebook',
            templateUrl: 'directPortal/modules/phonebook/views/phonebook.html',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'directPortal/modules/phonebook/phonebook.css',
                            'https://openlayers.org/en/v4.2.0/css/ol.css',
                            'https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL',
                            'https://openlayers.org/en/v4.2.0/build/ol.js',
                            //'lib/angular-ui-select2/src/select2.js'
                        ]
                    });
                }]
            },
            controller: 'phonebookController'
        });

}]);