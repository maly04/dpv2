directPortalApp.directive('dpSaveButton', function ($http) {
    function link(scope, element, attrs) {
        //scope.title = attrs.dpTitle;
    }

    return {
        link: link,
        restrict: 'E',
        transclude: true,
        templateUrl: 'directPortal/directives/dp-save-button/dp-save-button.html',
        scope: {
            dpEntity: '=dpTitle'
        }
    }

});