directPortalApp.controller('organizationunittypeController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('organizationunittype').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});