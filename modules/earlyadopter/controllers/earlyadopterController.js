directPortalApp.controller("earlyadopterController", function ($scope, $http, serviceWrapper, phonebookModuleService) {
    $scope.listCity = [
        {
            'name': 'Pattaya Thailand'
        },
        {
            'name': 'Pattaya Thailand'
        },
        {
            'name': 'Pattaya Thailand'
        },
        {
            'name': 'Pattaya Thailand'
        },
        {
            'name': 'Pattaya Thailand'
        },
        {
            'name': 'Pattaya Thailand'
        },
        {
            'name': 'Pattaya Thailand'
        },
        {
            'name': 'Pattaya Thailand'
        },
        {
            'name': 'Pattaya Thailand'
        },
    ];
    $scope.compaigns = [
        {
            'name': 'Compaign A'
        },
        {
            'name': 'Compaign B'
        },
        {
            'name': 'Compaign C'
        },
        {
            'name': 'Compaign D'
        },
        {
            'name': 'Compaign E'
        },
        {
            'name': 'Compaign F'
        },
        {
            'name': 'Compaign G'
        },
        {
            'name': 'Compaign H'
        },
        {
            'name': 'Compaign I'
        },
    ];
    $scope.btnUserType = [
        {'name': 'Customer'},
        { 'name': 'Agency' },
        { 'name': 'Sales Rep.' }
    ];

    $scope.gridOptions = {
        enableFiltering: false,
        enableRowSelection: true,
        enableRowHeaderSelection: false,
        treeRowHeaderAlwaysVisible: false,
        enableHorizontalScrollbar: 0,
        enableSorting: false,
        //enableVerticalScrollbar:2,
        //rowHeight: 25,
        columnDefs: [
            { field: 'color', displayName: '[x]', sortable: false },
            { field: 'color', displayName: 'Customer',sortable: false },
            { field: 'Unit', displayName: '#Units', sortable: false },
            { field: 'Date', displayName: 'CRM Date',sortable: false },
            { field: 'Date', displayName: 'Signing Date', sortable: false },
            { field: 'Price', displayName: 'Price', sortable: false },
            { field: 'Building', displayName: 'Building', sortable: false },
            { field: 'Agency', displayName: 'Agency', sortable: false  },
            { field: 'Sales', displayName: 'Sales rep.', sortable: false  },
            { field: 'Type', displayName: 'Type', sortable: false },
            { field: 'Comm', displayName: 'Comm.', sortable: false  },
            { field: 'Paid Status', displayName: 'Paid Status', sortable: false  }
         
        ],
    };
});

