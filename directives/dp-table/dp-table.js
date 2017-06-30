directPortalApp.directive('dpTable', function ($http, serviceWrapper) {


    function link(scope, element, attrs) {

        var entity = attrs.dpEntity;
        var fields = attrs.dpFields;

        serviceWrapper.get(entity).getAll(fields, function (response) {

            scope.model = response.data;
            scope.headers = [];
            for (i in scope.model) {
                for (prop in scope.model[i])
                    scope.headers.push(prop);
                break;
            }
        });
    }


    return {
        link: link,
        templateUrl: 'directPortal/directives/dp-table/dp-table.html',
        scope: {
            edit_state: '@dpEditState',
            entity: '@dpEntity',

        },
        controller: function ($scope, $state, serviceWrapper) {

            $scope.goto = function (state, params) {

                $state.go(state, params);

            }

            $scope.delete = function (id) {

                serviceWrapper.get($scope.entity).delete(id,
                    function (response) {
                        console.log(response);
                    }, function (error) {
                        console.log(error);
                    });
            }
        }
    };
});