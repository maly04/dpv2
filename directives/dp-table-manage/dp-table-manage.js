directPortalApp.directive('dpTableManage', function ($http, serviceWrapper) {
    function link(scope, element, attrs) {
    }

    return {
        link: link,
        transclude: true,
        templateUrl: 'directPortal/directives/dp-table-manage/dp-table-manage.html',
        scope: { entity: '@dpEntity', fields: '@dpFields' },
        controller: function ($scope, $rootScope) {

            window.selectRow = function (rowId) {
                console.log(rowId);
                $rootScope.entityId = rowId;
                $rootScope.$apply();
            };

            $scope.model = {};



            serviceWrapper.get($scope.entity).getAll($scope.fields, function (response) {
                if (response.data.length < 1) {
                    return;
                }

                var data = response.data;
                $scope.model = data;
                var columns = [];

                cols = Object.keys(response.data[0]);


                columns.push({
                    "data": "ID",
                    "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                        //$(nTd).html("<a href='/#!/app/datamanagement/" + $scope.entity.toLowerCase() + "/edit/" + oData.ID + "'><i class='fa fa-edit'></i></a>");
                        $(nTd).html("<a onclick='selectRow(" + oData.ID + ");'><i class='fa fa-edit'></i></a>");
                    }
                });

                for (i in cols)
                    columns.push({ data: cols[i], title: cols[i] })



                angular.element(document).ready(function () {
                    $('#data-table').dataTable({
                        data: data,
                        columns: columns
                    });
                });
            });
        }
    }

});