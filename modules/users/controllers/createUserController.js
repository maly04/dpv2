directPortalApp.controller("createUserController", function ($scope, $state, usersModuleService, persontypeService) {
    $scope.error = '';
    $scope.user = {
        username: "",
        password: ""
    };

    persontypeService.getAll('', function (response) {
        $scope.personTypes = response.data;
    });

    $scope.createUser = function () {
        usersModuleService.create($scope.user, function (response) {
            if (response.data.Succeeded)
            {
                $state.go('app.users.list');
            }
            else
            {
                $scope.hasErrors = true;
                $scope.errors = response.data.Errors;
            }
        });
    };
});