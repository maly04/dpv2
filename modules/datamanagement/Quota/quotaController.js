directPortalApp.controller('quotaController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('quota').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});