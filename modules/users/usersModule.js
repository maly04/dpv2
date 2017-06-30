var usersModule = angular.module('directPortalApp.users', []);

usersModule.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app.users', {
            url: '/users',
            template: '<div ui-view></div>',
            abstract: true
        })
        .state('app.users.profile', {
            url: '/profile/:id',
            templateUrl: 'directPortal/modules/users/views/profile.html',
            controller: 'userProfileController'
        })

        .state('app.users.create', {
            url: '/create',
            templateUrl: 'directPortal/modules/users/views/create.html',
            controller: 'createUserController'
        })

        .state('app.users.list', {
            url: '/',
            templateUrl: 'directPortal/modules/users/views/index.html',
            controller: 'usersController'
        });
});
