directPortalApp.controller('processController', function ($scope, serviceWrapper) {
    $scope.model = [];

    $scope.delete = function (id) {

        serviceWrapper.get('process').delete(id, function (response) {
           
            console.log(response);

        }, function (error) {
            console.log(error);
        });
    }
});