var accounting = angular.module('directPortalApp.accounting', []);

accounting.config(['$stateProvider', function($stateProvider){

$stateProvider
    .state('app.accounting', {
       url:'/accounting',
       template: "<div ui-view></div>",
       abstract: true
    })
    .state('app.accounting.report', {
       url:'/report',
       templateUrl: "directPortal/modules/accounting/views/report.html",
       controller: 'reportController',
       resolve: {
           service: ['$ocLazyLoad', function ($ocLazyLoad) {
               return $ocLazyLoad.load({
                   files: [
                       'lib/highcharts/js/highcharts.js',
                       'lib/highcharts/css/highcharts.css'
                   ]
               });
           }]
       }
    });

}]);