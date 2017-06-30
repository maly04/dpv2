(function (window) {

    var __env = {};
    // Import window.__env into __env
    if (window) {
        __env = Object.assign(__env, window.__env);
    }

}(this));

var directPortalApp = angular.module('directPortalApp', [
    'ui.router',
    'pascalprecht.translate',
    'angular-linq',
    'ngTouch'
]);



directPortalApp.constant('__env', __env);

directPortalApp.run(function ($window, $rootScope) {
    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function () {
        $rootScope.$apply(function () {
            $rootScope.online = false;
        });
    }, false);

    $window.addEventListener("online", function () {
        $rootScope.$apply(function () {
            $rootScope.online = true;
        });
    }, false);
});

directPortalApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$translateProvider', function ($locationProvider, $stateProvider, $urlRouterProvider, $translateProvider) {

    /****************** TRANSLATIONS SETUP ******************/
    // $translateProvider.usesanitizevaluestrategy('escape');
    $translateProvider.translations('en', translation['GB'])
    $translateProvider.translations('th', translation['TH'])
    $translateProvider.translations('kh', translation['KH'])
    $translateProvider.preferredLanguage('en');


    $urlRouterProvider.otherwise('sales/home');
    $stateProvider
        .state('sales', {
            url: '/sales',
            templateUrl: '/directPortal/modules/salesapp/templates/layout.html',
            abstract: true
        })
        .state('sales.home', {
            url: '/home',
            templateUrl: '/directPortal/modules/salesapp/views/home.html',
            controller: 'salesHomeController'
        })
        .state('sales.building', {
            url: '/building',
            templateUrl: '/directPortal/modules/salesapp/views/building.html',
            controller: 'salesBookingController'
        })
        .state('sales.unit', {
            url: '/unit/:id',
            templateUrl: '/directPortal/modules/salesapp/views/unitDetail.html',
            controller: 'salesUnitDetailsController'
        })
        .state('sales.reservation', {
            url: '/reservation/:id',
            templateUrl: '/directPortal/modules/salesapp/views/reservationForm.html',
            controller: 'salesReservationController'
        })
        .state('sales.search', {
            url: '/search/:id',
            templateUrl: '/directPortal/modules/salesapp/views/searchResults.html',
            controller: 'salesSearchController'
        })
        .state('sales.listreservation', {
            url: '/listreservation/',
            templateUrl: '/directPortal/modules/salesapp/views/listReservation.html',
            controller: 'salesListReservationController'
        })
        .state('sales.phonebook', {
            url: '/phonebook/',
            templateUrl: '/directPortal/modules/salesapp/views/phonebook.html',
            controller: 'salesPhoneBookController'
        })
        .state('security', {
            url: '/security',
            templateUrl: '/directPortal/modules/salesapp/templates/blanklayout.html',
            abstract: true
        }).state('security.login', {
            url: '/login',
            templateUrl: '/directPortal/modules/login/views/login.html',
            controller: 'loginController'
        });

}]);



directPortalApp.directive('a', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attrs) {
            if (attrs.ngClick || attrs.href === '' || attrs.href === '#' || (attrs.href && attrs.href[0] === '#' && !attrs.uiSref)) {
                elem.on('click', function (e) {
                    e.preventDefault();
                });
            }
        }
    };
});

directPortalApp.directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A', /* optional */
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
});

directPortalApp.filter('reverse', function () {
    return function (input) {
        console.log(input);
        return input.reverse();
    };
});