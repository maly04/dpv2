directPortalApp.directive('dpChartLine', function ($http, $state) {

    function link(scope, element) {

        angular.element(document).ready(function () {
            Highcharts.chart(scope.chart.config.container_id, scope.chart.options);
        });
    }

    return {
        restrict: 'E',
        transclude: true,
        link: link,
        templateUrl: 'directPortal/modules/accounting/directives/dp-chart-line.html',
        scope: {
            chart: '='
        }
    };

});