directPortalApp.controller('tasklistController', function ($scope) {

    $scope.tasks = [
        {
            id: 1,
            category: 'a',
            description: 'change windows'
        },
        {
            id: 2,
            category: 'b',
            description: 'fix lamp'
        },
        {
            id: 3,
            category: 'c',
            description: 'change fridge'
        },
    ];

    $scope.cols = ['id','category', 'description'];

});