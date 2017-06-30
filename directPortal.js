(function (window) {

    var __env = {};
    // Import window.__env into __env
    if (window) {
        __env = Object.assign(__env, window.__env);
    }

}(this));

var directPortalApp = angular.module('directPortalApp', [
    'ui.router',
    'ngFlash',
    'angularFileUpload',
    'pascalprecht.translate',
    'oc.lazyLoad',
    'angular-linq',
    'directPortalApp.presentation',
    'directPortalApp.unit',
    'directPortalApp.pricelist',
    'directPortalApp.marketingmaterial',
    'directPortalApp.buildingmanagement',
    'directPortalApp.reservation',
    'directPortalApp.customer',
    'directPortalApp.phonebook',
    'directPortalApp.accounting',
    'directPortalApp.authoring',
    'directPortalApp.datamanagement',
    'directPortalApp.floorplanner',
    'directPortalApp.development',
    'directPortalApp.matrix',
    'directPortalApp.users',
    'directPortalApp.dashboard',
    'directPortalApp.documents',
    'directPortalApp.notifications',
    'directPortalApp.levelplans',
    'directPortalApp.import',
    'directPortalApp.contact',
    'directPortalApp.userinterface',
    'directPortalApp.subscribers',
    'directPortalApp.earlyadopter',
    'ui.grid',
    'ui.grid.grouping',
    'ui.grid.selection'
    //'ui.select2'
]);



directPortalApp.constant('__env', __env);

directPortalApp.run(function ($window, $rootScope) {

    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            if (toState.name !== 'app.authoring.tool') {
                $('link[href="directPortal/modules/authoring/css/layoutit.css"]').remove();
                $('link[href="directPortal/modules/authoring/css/theme.css"]').remove();
            }
            else {
                $('head').append('<link rel="stylesheet" href="directPortal/modules/authoring/css/layoutit.css" type="text/css" />');

            }
        });

    $rootScope.year = new Date().getFullYear();

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


    $urlRouterProvider.otherwise('/account/login');
    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: '/directPortal/layouts/applayout.html',
            abstract: true
        })
        .state('app.home', {
            url: '/home',
            templateUrl: '/directPortal/modules/home/views/home.html',
            controller: 'homeController'
        }).state('account', {
            url: '/account',
            templateUrl: '/directPortal/layouts/blanklayout.html',
            abstract: true
        }).state('account.login', {
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

directPortalApp.directive('ngFiles', ['$parse', function ($parse) {
    function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function (event) {
            onChange(scope, { $files: event.target.files });
        });
    };

    return {
        link: fn_link
    }
}]);

directPortalApp.filter('reverse', function () {
    return function (input) {
        console.log(input);
        return input.reverse();
    };
});

directPortalApp.filter('lower', function () {
    return function (input) {
        return input.toLowerCase();
    };
});

directPortalApp.filter('first', function () {
    return function (input) {
        return input[0];
    };
});

directPortalApp.filter('split', function () {
    return function (input, splitChar, splitIndex) {
        // do some bounds checking here to ensure it has that index
        return input.split(splitChar)[splitIndex];
    }
});

directPortalApp.filter('range', function () {
    return function (input, total) {
        total = parseInt(total);

        for (var i = 0; i < total; i++) {
            input.push(i);
        }

        return input;
    };
});