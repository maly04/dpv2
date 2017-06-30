var notificationsModule = angular.module('directPortalApp.notifications', [])
    .controller('notificationsController', ['$scope', function ($scope) {
        $scope.notification = {
            name: 'xxx',
            address: 'yyyy'
        };
    }])
    .directive('dpNotifications', function () {
        return {
            templateUrl: 'directPortal/modules/notifications/directives/dp-notifications.html'
        };
    });

notificationsModule.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state('app.notifications', {
            url: '/notifications',
            templateUrl: 'directPortal/modules/notifications/views/notifications.html',
            controller: 'notificationsListController'
        });
}]);