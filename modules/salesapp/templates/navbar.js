directPortalApp.controller("navbarController", function ($scope) {
    $scope.searchTerm = '';

    $scope.search = function () {
        console.log($scope.searchTerm);
    };
});