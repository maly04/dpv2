directPortalApp.directive('dpSlickGrid', function ($http) {

    function init(columns, options) {
        
        var grid;

        var groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider();
        dataView = new Slick.Data.DataView({
            groupItemMetadataProvider: groupItemMetadataProvider
        });
        grid = new Slick.Grid("#myGrid", dataView, columns, options);
        grid.registerPlugin(groupItemMetadataProvider);
        grid.setSelectionModel(new Slick.CellSelectionModel());

        dataView.onRowCountChanged.subscribe(function (e, args) {
            grid.updateRowCount();
            grid.render();
        });

        dataView.onRowsChanged.subscribe(function (e, args) {
            grid.invalidateRows(args.rows);
            grid.render();
        });

        return {
            dataView: dataView,
            grid: grid
        };
    }

    function myFilter(item, args) {
        console.log('filtering');
        if (args.unitTypeFilter.indexOf(item['type']) === -1
            || args.unitStatusFilter.indexOf(item['stat']) === -1)
            return false;
        var unitsize = parseFloat(item['sqm']);
        var unitprice = parseFloat(args.UnitPriceQuota == 'thai' ? item['price_thai'] : item['price_foreign']);
        var unitprice = parseInt(item['price']);

        var price = parseFloat(args.unitPriceTypeFilter == 'total' ? unitprice : unitprice / unitsize);
        if (price < args.minPrice || price > args.maxPrice) {
            return false;
        } else {
            return true;
        }
    }

    function link(scope, element, attrs) {

        var columns = [
            { id: "building", name: "building", field: "building" },
            { id: "floor", name: "floor", field: "floor" },
            { id: "unitnumber", name: "unitnumber", field: "unitnumber" },
            { id: "sqm", name: "sqm", field: "sqm" },
            { id: "stat", name: "stat", field: "stat" },
            { id: "type", name: "type", field: "type" },
            { id: "price", name: "price", field: "price" },
            { id: "pricesqm", name: "pricesqm", field: "pricesqm" }
        ];
        var options = {
            fullWidthRows: true
        };

        var slick = init(columns, options);
        scope.grid = slick.grid;
        scope.dataView = slick.dataView;
        scope.cols = scope.grid.getColumns();
        scope.dataView.setFilter(myFilter);
        scope.dataView.setFilterArgs({
            unitTypeFilter: scope.unitTypeFilter,
            unitStatusFilter: scope.unitStatusFilter,
            unitPriceQuota: scope.unitPriceQuota,
            minPrice: scope.minPrice,
            maxPrice: scope.maxPrice,
            unitPriceTypeFilter: scope.unitPriceTypeFilter
        });

    }

    return {
        link: link,
        restrict: 'E',
        transclude: false,
        templateUrl: 'directPortal/modules/pricelist/directives/dp-slick-grid.html',
        controller: function ($scope, $state, serviceWrapper) {

            

            $scope.activeBuildings = [];
           

            $scope.toggleActiveBuilding = function (building) {
                $state.go('app.pricelist', { buildingId: building.ID }, { notify: false });

                angular.forEach($scope.units, function (data) {
                    if (building.ID === data.ID) {
                        var DATA = [];
                        DATA.push(data);
                        $scope.loadData(DATA);
                    }
                });
                
                //var found = false;
                //for (i in $scope.activebuildings) {
                //    if ($scope.activebuildings[i].id == building.id) {
                //        found = i;
                //        console.log($scope.activebuildings[i].id == building.id);
                //        break;
                //    }
                //}
                //if (found !== false) {
                //    $scope.activebuildings.splice(i, 1);
                    
                //} else {
                //    $scope.activebuildings.push(building);
                    
                //}
            
                
                    
            }

            
            /* SlickGrid filters */
            $scope.minPrice = 0;
            $scope.maxPrice = 1000000000;
            $scope.unitStatusFilter = $scope.unitStatuses.map(function (status) { return status.Name });
            $scope.unitTypeFilter = $scope.types.map(function (type) { return type.Name });
            $scope.unitPriceTypeFilter = 'total';
            $scope.unitPriceQuota = 'thai';


            $scope.toggleUnitTypeFilter = function (type) {
                var found = false;
                for (i in $scope.unitTypeFilter) {
                    if ($scope.unitTypeFilter[i] == type.Name) {
                        found = true;
                        $scope.unitTypeFilter.splice(i, 1);
                        break;
                    }
                }
                if (!found) {
                    $scope.unitTypeFilter.push(type.Name);
                }
                $scope.dataView.refresh();
            }
            $scope.toggleUnitStatusFilter = function (status) {
                var found = false;
                for (i in $scope.unitStatusFilter) {
                    if ($scope.unitStatusFilter[i] == status.Name) {
                        found = true;
                        $scope.unitStatusFilter.splice(i, 1);
                        break;
                    }
                }
                if (!found) {
                    $scope.unitStatusFilter.push(status.Name);
                }
                $scope.dataView.refresh();
            }

            $scope.toggleShowColumn = function (column) {

                var tmpcolumns = JSON.parse(JSON.stringify($scope.grid.getColumns()));
                var found = false;

                for (i in tmpcolumns) {
                    if (tmpcolumns[i].name === column.name) {
                        tmpcolumns.splice(i, 1);
                        $scope.grid.setColumns(tmpcolumns);
                        return;
                    }
                }
                tmpcolumns.unshift({
                    id: column.name,
                    name: column.name,
                    field: column.name
                });
                $scope.grid.setColumns(tmpcolumns);
            }
            $scope.groupBy = function () {
                var columns = ($scope.grouping.length < 1 ? [] : $scope.grouping.split(','));
                var grouping = [];

                for (i in columns) {
                    var colname = columns[i];
                    grouping.push({
                        getter: colname
                        //formatter: function (g) {

                        //    console.log(g);
                        //    console.log(colname);

                        //    return colname + ":  " + g.value + "  <span style='color:green'>(" + g.count + " items)</span>";
                        //},
                        //aggregators: [
                        //    new Slick.Data.Aggregators.Sum(columns[i]),
                        //],
                    });
                }
                $scope.dataView.setGrouping(grouping);
            }
            $scope.expandAll = function () {
                $scope.dataView.expandAllGroups();
            }
            $scope.collapseAll = function () {
                $scope.dataView.collapseAllGroups();
            }

            $scope.priceTypeChanged = function () {
                $scope.dataView.setFilterArgs({
                    unitTypeFilter: $scope.unitTypeFilter,
                    unitStatusFilter: $scope.unitStatusFilter,
                    unitPriceTypeFilter: $scope.unitPriceTypeFilter,
                    unitPriceQuota: $scope.UnitPriceQuota,
                    minPrice: $scope.minPrice,
                    maxPrice: $scope.maxPrice
                });
                $scope.dataView.refresh();
            }

            $scope.$watch('minPrice', function (newVal) {
                $scope.dataView.setFilterArgs({
                    unitTypeFilter: $scope.unitTypeFilter,
                    unitStatusFilter: $scope.unitStatusFilter,
                    unitPriceTypeFilter: $scope.unitPriceTypeFilter,
                    unitPriceQuota: $scope.UnitPriceQuota,
                    minPrice: newVal,
                    maxPrice: $scope.maxPrice
                });
                $scope.dataView.refresh();
            });
            $scope.$watch('maxPrice', function (newVal) {
                $scope.dataView.setFilterArgs({
                    unitTypeFilter: $scope.unitTypeFilter,
                    unitStatusFilter: $scope.unitStatusFilter,
                    unitPriceTypeFilter: $scope.unitPriceTypeFilter,
                    unitPriceQuota: $scope.UnitPriceQuota,
                    minPrice: $scope.minPrice,
                    maxPrice: newVal
                });
                $scope.dataView.refresh();
            });

            $scope.loadData = function (newdata) {
                $scope.dataView.beginUpdate();
                var data = [];
                for (i in newdata) {
                    data.push({
                        id: 'id_' + newdata[i].ID,
                        building: newdata[i].BuildingId,
                        floor: newdata[i].Floor,
                        unitnumber: newdata[i].UnitNumber,
                        sqm: newdata[i].Size,
                        stat: newdata[i].Status.Name,
                        price: newdata[i].Price,
                        pricesqm: parseFloat(newdata[i].Price) / parseFloat(newdata[i].Size),
                        type: newdata[i].Type.Name
                    });
                }
                var existing = $scope.dataView.getItems();
                if (existing.length === 0) {
                    $scope.dataView.setItems(data);
                } else {
                    for (j in data) {
                        console.log(data[j]);
                        existing.push({
                            id: data[j].id + 1,
                            building: data[j].building,
                            floor: data[j].floor,
                            unitnumber: data[j].unitnumber,
                            sqm: data[j].sqm,
                            stat: data[j].stat,
                            price: data[j].price,
                            pricesqm: data[j].pricesqm,
                            type: data[j].type
                        });
                    }
                    console.log(existing);
                    $scope.dataView.setItems(existing);
                }
                
                $scope.dataView.endUpdate();
                $scope.grid.updateRowCount();
                $scope.grid.render();

            }

            $scope.$watch('units', function (newVal, oldVal) {
                $scope.loadData(newVal);
            }, true);

        }
    }

});