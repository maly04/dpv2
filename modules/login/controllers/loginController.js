directPortalApp.controller('loginController', function ($scope, $rootScope, $state, authenticationService, usersModuleService) {

    $scope.error = '';
    $scope.user = {
        username: "",
        password: ""
    }

    $scope.login = function () {
        $scope.error = '';

        authenticationService.login($scope.user, function (status) {
            if (!status) {
                $scope.error = 'invalid username or password';
            } else {
                $rootScope.username = $scope.user.username;

                usersModuleService.getById($rootScope.username, function (response) {
                    $rootScope.user = response.data;
                });
                
                $state.go('app.phonebook');
            }
        });
    }

});