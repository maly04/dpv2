directPortalApp.directive('toggleButton', function () {

    function link(scope, element, attrs) {
        angular.element(document).ready(function () {
            $(element).togglebutton();
        })
    }

    return {
        link: link
    };
});

