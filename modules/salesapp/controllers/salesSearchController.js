directPortalApp.controller("salesSearchController", function ($scope, searchService, $stateParams) {
    $scope.searchTerm = $stateParams.id;
    $scope.search = function () {
        
    };
    searchService.search($stateParams.id, function (response) {
        $scope.searchResults = response.data;
        $scope.people = $scope.searchResults.People;
        $scope.units = $scope.searchResults.Units;
        $scope.buildings = $scope.searchResults.Buildings;


        console.log($scope.searchResults);
        $scope.searchResultCount = $scope.searchResults.People.length + $scope.searchResults.Complexes.length + $scope.searchResults.Units.length + $scope.searchResults.Buildings.length;
    });
});