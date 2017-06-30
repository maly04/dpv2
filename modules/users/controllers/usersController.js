directPortalApp.controller("usersController", function ($scope, usersModuleService) {
   
    usersModuleService.get(function (response) {
        $scope.users = response.data;
    });
});