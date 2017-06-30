directPortalApp.controller('requestlistController', function ($scope) {

    $scope.requests = [
        {
            id: 1,
            category: 'a',
            description: 'add electric plug'
        },
        {
            id: 2,
            category: 'b',
            description: 'paint the kitchen'
        },
        {
            id: 3,
            category: 'c',
            description: 'put TV'
        },
    ];

    $scope.cols = ['id', 'category', 'description'];

});