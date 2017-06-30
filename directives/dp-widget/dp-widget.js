directPortalApp.directive('dpWidget', function ($http) {
    function link(scope, element, attrs) {
        scope.title = attrs.dpTitle;
    }

    return {
        link: link,
        restrict: 'E',
        transclude: true,
        templateUrl: 'directPortal/directives/dp-widget/dp-widget.html',
        scope: {
            title: '=dpTitle'
        }
    }

});