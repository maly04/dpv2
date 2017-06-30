directPortalApp.directive('dpDatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {

            angular.element(document).ready(function () {
                $(element).datepicker({
                    dateFormat: 'dd/mm/yy',
                    onSelect: function (date) {
                        scope.$apply(function () {
                            ngModelCtrl.$setViewValue(date);
                        });
                    }
                });
            });

           
        }
    }
});