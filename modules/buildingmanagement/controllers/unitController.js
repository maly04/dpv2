var building = buildingManagement.controller('unitController', function ($scope) {

    $scope.unit = {
        name: '',
        buildingId: 0,
        number: 0,
        floor: 0,
        size: 0,
        typeId: 0,
        subTypeId: 0
    };
    $scope.complexes = [
        {
            "Name": "complex 1",
            "ID": 1,
            "Buildings": [
                {
                    "Name": "BuildIng 1 1",
                    "ID": 1,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                },
                {
                    "Name": "BuildIng 1 2",
                    "ID": 2,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                },
                {
                    "Name": "BuildIng 1 3",
                    "ID": 3,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                },
                {
                    "Name": "BuildIng 1 4",
                    "ID": 4,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                }
            ]
        },
        {
            "Name": "complex 2",
            "ID": "2",
            "Buildings": [
                {
                    "Name": "BuildIng 2 1",
                    "ID": 11,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                },
                {
                    "Name": "BuildIng 2 2",
                    "ID": 22,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                },
                {
                    "Name": "BuildIng 2 3",
                    "ID": 33,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                },
                {
                    "Name": "BuildIng 2 4",
                    "ID": 44,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                }
            ]
        },
        {
            "Name": "complex 3",
            "ID": "3",
            "Buildings": [
                {
                    "Name": "BuildIng 3 1",
                    "ID": 111,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                },
                {
                    "Name": "BuildIng 3 2",
                    "ID": 222,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                },
                {
                    "Name": "BuildIng 3 3",
                    "ID": 333,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                },
                {
                    "Name": "BuildIng  3 4",
                    "ID": 444,
                    "Coordinates": [
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        },
                        {
                            "lat": 18.466,
                            "lng": -66.118
                        },
                        {
                            "lat": 32.321,
                            "lng": -64.757
                        },
                        {
                            "lat": 25.774,
                            "lng": -80.19
                        }
                    ]
                }
            ]
        }
    ];

    $scope.types = [
        {
            id: 1,
            name: 'a'
        },
        {
            id: 2,
            name: 'b'
        },
        {
            id: 3,
            name: 'c'
        }
    ];
    $scope.subTypes = [
        {
            id: 1,
            name: '1'
        },
        {
            id: 2,
            name: '2'
        },
        {
            id: 3,
            name: '3'
        }
    ];

    $scope.activeComplex = undefined;

    $scope.submit = function () {
    };
    $scope.changeActiveComplex = function () {

        for (i in $scope.complexes) {
            if ($scope.activeComplexId == $scope.complexes[i].ID) {

                console.log($scope.activeComplexId);

                $scope.activeComplex = $scope.complexes[i];
                return;
            }
        }
        $scope.activeComplex = undefined;

    };

});