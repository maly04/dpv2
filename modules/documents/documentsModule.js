var documentsModule = angular.module('directPortalApp.documents', []);

documentsModule.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.documents', {
            url: '/documents',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.documents.list', {
            url: '/',
            templateUrl: 'directPortal/modules/documents/views/index.html',
            controller: 'documentsController'
        })

        .state('app.documents.upload', {
            url: '/upload/:id',
            templateUrl: 'directPortal/modules/documents/views/upload.html',
            controller: 'uploadDocumentsController'
        })
        .state('app.documents.pricelist', {
            url: '/pricelist/:id',
            templateUrl: 'directPortal/modules/documents/template/pricelist/pricelist.html',
            controller: 'priceListDocumentController'
        })
        .state('app.documents.contract', {
            url: '/contract/:id',
            templateUrl: 'directPortal/modules/documents/template/contract/contract.html',
            controller: 'contractDocumentController'
        });
});
