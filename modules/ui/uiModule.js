var userInterface = angular.module('directPortalApp.userinterface', []);


userInterface.config(['$stateProvider', function ($stateProvider) {

    $stateProvider
        .state('app.userinterface', {
            url: '/ui',
            templateUrl: 'directPortal/modules/ui/views/index.html',
            controller: 'uiIndexController'
        });

}]);