directPortalApp.controller("pricelistController", function ($scope, $http, serviceWrapper, metadataService, uiGridGroupingConstants, unitsubtypeService, __env) {


    $scope.selectedBuildings = [];
    $scope.selectedUnitTypes = [];
    $scope.selectedUnitStatuses = [];
    $scope.allBuildingID = [];
    $scope.allUnitTypeID = [];
    $scope.allUnitStatusID = [];


    angular.element(document).ready(function () {
        $('#buildingsFilter').accordion({
            collapsible: true,
            active: 0
        });
    });

    serviceWrapper.get('UnitType').getAll('', function (response) {
        $scope.unitTypes = response.data;
        for (var i = 0; i < response.data.length; i++) {
            $scope.allUnitTypeID.push(response.data[i].ID);
        }
    }, function (error) {
        console.log(error);
    });

    serviceWrapper.get('UnitStatus').getAll('', function (response) {

        $scope.unitStatuses = response.data;
        for (var i = 0; i < response.data.length; i++) {
            $scope.allUnitStatusID.push(response.data[i].ID);
        }

    }, function (error) {
        console.log(error);
    });


    serviceWrapper.get('Building').getAll('', function (response) {

        $scope.buildings = response.data;
        for (var i = 0; i < response.data.length; i++) {
            $scope.allBuildingID.push(response.data[i].ID);
        }
        console.log("*****List all building******");
        console.log(response.data);
        getAllPriceList();

    }, function (error) {
        console.log(error);
    });


    metadataService.get('Unit', '', function (response) {
        $scope.cols = response.data;
    }, function (error) {
        console.log(error);
    });
    $scope.setBtnColor = function (stat) {
        var setClass = '';
        if (stat == 'Available') {
            setClass = 'btn-available';
        }
        if (stat == 'Available(Reset)') {
            setClass = 'btn-available';
        }
        if (stat == 'Resv-') {
            setClass = 'btn-resv-minus';
        }
        if (stat == 'Resv+') {
            setClass = 'btn-resv-plus';
        }
        if (stat == 'Sale-') {
            setClass = 'btn-sale-minus';
        }
        if (stat == 'Sale+') {
            setClass = 'btn-sale-plus';
        }
        if (stat == 'Block') {
            setClass = 'btn-block-color';
        }
        if (stat == 'Resale') {
            setClass = 'btn-resale';
        }
        return setClass;
    };

    $scope.btnActive = 'sqm';
    $scope.btnActiveQuote = 'th';
    $scope.st = 'sqm';
    $scope.quote = 'th';
    $scope.setActive = function (type) {
        $scope.btnActive = type;
        $scope.st = type;
        if (type == 'total') {
            document.getElementById('minTitle').innerText = 'M';
            document.getElementById('maxTitle').innerText = 'M';
        }
        else {
            document.getElementById('minTitle').innerText = 'k'
            document.getElementById('maxTitle').innerText = 'k'
        }
       
    };
    $scope.isActive = function (type) {
        return type === $scope.btnActive;
    };
    $scope.setActiveQuote = function (type) {
        $scope.btnActiveQuote = type;
        //document.getElementById('quote').value = type;
        $scope.quote = type;
    };
    $scope.isQuoteActive = function (type) {
        return type === $scope.btnActiveQuote;
    };
    $scope.findRange = function () {
        $scope.range.st = $scope.st;
        $scope.range.quote = $scope.quote;
        var min = '';
        var max = '';
        var percentageMin = (($scope.range.min) * 0.05);
        var percentageMax = (($scope.range.max) * 0.05);
        if ($scope.range.st == 'sqm') {           
            ////min = (($scope.range.min - 0.5) * 1000);
            ////max = (($scope.range.max + 0.5) * 1000);
            min = ($scope.range.min* 1000);
            max = ($scope.range.max * 1000);
        }
        else {
            min = ($scope.range.min * 1000000);
            max = ($scope.range.max * 1000000);
            //min = (($scope.range.min - 0.5) * 1000000);
            //max = (($scope.range.max + 0.5) * 1000000);
        }
        console.log("=====================");
        console.log("Min :" + min + "Max :" + max);
        $http.get(__env.apiUrl + "api/pricelist/getpricelist?" + getSelectedBuildings() + getSelectedTypes() + getSelectedStatuses()).then(function (data) {
            $scope.gridOptions.data = sortTableByMinMax(data.data, $scope.range.quote, min, max);
            calculateGridData($scope.gridOptions.data);
          
        }); 
    };



    $scope.gridOptions = {
        enableFiltering: false,
        enableRowSelection: true,
        enableRowHeaderSelection: false,
        treeRowHeaderAlwaysVisible: false,
        enableHorizontalScrollbar: 0,
        //enableVerticalScrollbar:2,
        rowHeight: 25,
        columnDefs: [
            { field: 'Building', cellClass: 'setheight' },
            { field: 'Floor', cellClass: 'setheight' },
            { field: 'UnitNumber', displayName: 'Unit No.', cellClass: 'setheight' },
            { field: 'Type', displayName: 'Type', cellClass: 'setheight' },
            { field: 'getSize()', displayName: 'SQM', cellClass: 'text-grid-align setheight' },
            { field: 'getPriceF()', displayName: 'Price SQM F', cellClass: 'text-grid-align setheight' },
            { field: 'getTotaleF()', displayName: 'Total Price F', enableCellEdit: false, cellClass: 'text-grid-align setheight' },
            { field: 'getPriceTH()', displayName: 'Price SQM TH', cellClass: 'text-grid-align setheight' },
            { field: 'getTotaleTH()', displayName: 'Totale Price TH', enableCellEdit: false, cellClass: 'text-grid-align setheight' },
            { field: 'Status', displayName: 'Status', cellClass: 'setheight', cellTemplate: "<div class='col-md-12 col-lg-12'><div class='col-md-9 col-lg-9'>{{COL_FIELD}}</div> <div class='col-md-3 col-lg-3' style=' width:10px; height:20px;' ng-class='grid.appScope.setBtnColor(COL_FIELD)'> </div></div>" }
            //ng-class='grid.appScope.setBtnColor(COL_FIELD)'
            //{
            //    field: 'ID', cellTemplate: '<div>' +
            //    '<a ui-sref="app.unit.detail({id:row.entity.ID})" class="btn btn-primary">View Detail</a>' +
            //        '</div>'
            //}
        ],
       
        onRegisterApi: function (gridApi) {
            $scope.gridApi = gridApi;
            $scope.showUnitDetail = false;
            gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                $scope.showUnitDetail = true;
                $scope.buildingsInfo = row.entity;
                $scope.getUnitType = (row.entity.UnitNumber).substr(1) + " (" + row.entity.UnitNumber+")";
                console.log($scope.buildingsInfo);
                //To find SubTypeId
                $http.get(__env.apiUrl + 'api/Unit/' + row.entity.ID).then(function (response) {
                   
                    $http.get(__env.apiUrl + 'api/UnitSubType/' + response.data[0].SubTypeId).then(function (response) {
                        console.log(response.data[0]);
                         var unitsubTpe = response.data[0].Name;
                            var unitType = row.entity.Type.split(" ");
                            if (unitType[0] == 'Studio') {
                                $scope.imageName =  'STD_' + unitsubTpe;
                            } 
                            else if (unitType[0] == 'Penthouse') {
                                $scope.imageName = 'PTH_' + unitsubTpe;
                            }
                            else if (unitType[0] == 'Duplex') {
                                $scope.imageName = 'DPX_' + unitsubTpe;
                            } 
                            else if (unitType[0] == 'Shop') {
                                $scope.imageName = 'SHP_' + unitsubTpe;
                            }
                            else {
                                $scope.imageName = unitType[0] + 'BR_' + unitsubTpe;
                            }
                            console.log(unitType[0]);
                            console.log($scope.imageName);
                    });
                    console.log(response.data[0].SubTypeId);
                });
            });          
        }
    };
    $scope.gridOptions.multiSelect = false;
   
  
    $scope.selectUnitType = function (value, active) {

        var selectedUnitType = { ID: value }
        if (active) {
            $scope.selectedUnitTypes.push(selectedUnitType);
        } else {
            for (var i = 0; i < $scope.selectedUnitTypes.length; i++) {
                if (selectedUnitType.ID === $scope.selectedUnitTypes[i].ID) {
                    $scope.selectedUnitTypes.splice(i, 1);
                }
            }
        }

        $http.get(__env.apiUrl + "api/pricelist/getpricelist?" + getSelectedBuildings() + getSelectedTypes() + getSelectedStatuses()).then(function (data) {
            console.log(data.data);
            $scope.gridOptions.data = data.data;
            calculateGridData($scope.gridOptions.data);
        });
        //console.log(__env.apiUrl + "api/pricelist/getpricelist?" + getSelectedBuildings() + getSelectedTypes() + getSelectedStatuses());
    }

    $scope.selectUnitStatus = function (value, active) {

        var selectedUnitStatus = { ID: value }
        console.log(value);
        if (active) {
            $scope.selectedUnitStatuses.push(selectedUnitStatus);
        } else {
            for (var i = 0; i < $scope.selectedUnitStatuses.length; i++) {
                if (selectedUnitStatus.ID === $scope.selectedUnitStatuses[i].ID) {
                    $scope.selectedUnitStatuses.splice(i, 1);
                }
            }
        }

        $http.get(__env.apiUrl + "api/pricelist/getpricelist?" + getSelectedBuildings() + getSelectedTypes() + getSelectedStatuses()).then(function (data) {
            $scope.gridOptions.data = data.data;
            calculateGridData($scope.gridOptions.data);
        });       

    }
    //$('.ui-grid-canvas').html('');
    $scope.selectBuilding = function (value, active) { 
        selectedBuilding = { ID: value }
        //console.log(selectedBuilding);
        $scope.selectBuildingStatus = value.ID;
        if (active) {
            $scope.selectedBuildings.push(selectedBuilding);            
            
        } else {
            for (var i = 0; i < $scope.selectedBuildings.length; i++) {
                if (value.ID === $scope.selectedBuildings[i].ID.ID) {
                    $scope.selectedBuildings.splice(i, 1);
                }
            }
        }
        

        $http.get(__env.apiUrl + "api/pricelist/getpricelist?" + getSelectedBuildings() + getSelectedTypes() + getSelectedStatuses()).then(function (data) {
            console.log();
            $scope.gridOptions.data = data.data;
            calculateGridData($scope.gridOptions.data);
        });
       
    }
    //$scope.rowClick = function (row) {
    //    alert(1);
    //};
    function sortTableByMinMax(gridData, qouta, min, max) {
        var arr_grid = [];
        console.log("Min " + min + " Max" + max + "Qouta " + qouta);
        angular.forEach(gridData, function (row, key) {
            if (qouta == "th" && row.Prices.Thai >= min && row.Prices.Thai <= max) {
                //alert("th");
                arr_grid.push(gridData[key]);
            }
            if (qouta == "fr" && row.Prices.Foreigner >= min && row.Prices.Foreigner <= max) {                
                arr_grid.push(gridData[key]);
            }
        });
        console.log(arr_grid);
        return arr_grid;
    };
    function calculateGridData(gridData) {

        angular.forEach(gridData, function (row) {
            row.getTotaleF = function () {
                var totalPricesF = ((row.Size * row.Prices.Foreigner) / 1000000).toFixed(2) + " mil THB";
                return totalPricesF;
            };
            row.getTotaleTH = function () {
                var totalPricesTH = ((row.Size * row.Prices.Thai) / 1000000).toFixed(2) + " mil THB";
                return totalPricesTH;
            };
            row.getPriceF = function () {
                var priceF = (row.Prices.Foreigner / 1000).toFixed(2) + " k THB";
                return priceF;
            };
            row.getPriceTH = function () {
                var priceTH = (row.Prices.Thai / 1000).toFixed(2) + " k THB";
                return priceTH;
            };
            row.getSize = function () {
                var size = row.Size.toFixed(2);
                return size;
            };
            row.getStatus = function () {

                var status = row.Status + " <div ng-class='setBtnColor("+ row.Status+")' style=' width:10px; height:10px;'></div>";
                return status;

            }
            //row.getType = function () {
            //    $http.get(__env.apiUrl + 'api/UnitSubType/' + row.TypeId).then(function (response) {
            //        var unitsubTpe = response.data[0].Name;
            //        var unitType = row.Type.split(" ");
            //        if (unitType[0] == 'Studio') {
            //            unitType[0] = 'STD';
            //        }
            //        var typeName = unitType[0] + 'BR' + " " + unitsubTpe;
            //        return typeName;
            //    });
            //};
        });
    }

    function getSelectedStatuses()
    {
        var url = "";
        for (var i = 0; i < $scope.selectedUnitStatuses.length; i++) {
            url += "selectedStatuses=" + $scope.selectedUnitStatuses[i].ID + '&';
        }

        return url;
    }

    function getSelectedBuildings() {
        var url = "";
        for (var i = 0; i < $scope.selectedBuildings.length; i++) {
            url += "selectedBuildings=" + $scope.selectedBuildings[i].ID.ID + '&';
        }

        return url;
    }

    function getSelectedTypes()
    {
        var url = "";
        for (var i = 0; i < $scope.selectedUnitTypes.length; i++) {
            url += "selectedTypes=" + $scope.selectedUnitTypes[i].ID + '&';
        }
        

        return url;
    }

    function getAllPriceList () {
        console.log('get all price list');
        $http.get(__env.apiUrl + "api/pricelist/getpricelist?" + getAllBuilding() + getAllUnitTypes() + getAllStatuses()).then(function (data) {
            console.log(data);
            $scope.gridOptions.data = data.data;
        });
    }

    function getAllBuilding() {
        var url = "";
        for (var i = 0; i < $scope.allBuildingID.length; i++) {
            url += "selectedBuildings=" + $scope.allBuildingID[i] + '&';
        }
        return url;
    }

    function getAllUnitTypes() {
        var url = "";
        for (var i = 0; i < $scope.allUnitTypeID.length; i++) {
            url += "selectedTypes=" + $scope.allUnitTypeID[i] + '&';
        }
        return url;
    }

    function getAllStatuses () {
        var url = "";
        for (var i = 0; i < $scope.allUnitStatusID.length; i++) {
            url += "selectedStatuses=" + $scope.allUnitStatusID[i] + '&';
        }
        return url;
    }

    $scope.resetPriceList = function () {
        alert("clear");
        $scope.selectedBuildings.push(selectedBuilding);  
        var x = document.getElementsByClassName("ui-grid-canvas").innerHTML = "";
        document.getElementById('grid1').innerHTML = '';
    }
});