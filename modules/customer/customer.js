var customer = angular.module('directPortalApp.customer', []);

customer.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/account/login');
    $stateProvider
        .state('app.customer', {
            url: '/customer',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.customer.registration', {
            url: '/register',
            templateUrl: 'directPortal/modules/customer/views/customerRegistration.html',
            controller: 'customerRegistrationController',
            resolve: {
                service: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            "lib/bootstrap-select-togglebutton/select-togglebutton.js"
                        ]
                    });
                }]
            }
        })
        .state('app.customer.viewstatus', {
            url: '/status/:customerId',
            templateUrl: 'directPortal/modules/customer/views/viewstatus.html',
            controller: 'viewstatusController'
        })
        .state('app.customer.uploadevidence', {
            url: '/uploadevidence',
            templateUrl: 'directPortal/modules/customer/views/uploadevidence.html',
            controller: 'uploadevidenceController'
        });
}]);