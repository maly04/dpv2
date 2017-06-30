mm.controller('createMarketingMaterialController', function ($scope, serviceWrapper) {
   
    serviceWrapper.get('MarketingMaterialType').getAll('', function (response) {
        $scope.marketingMaterialTypes = response.data;
    });
    $scope.files = [];
    $scope.postData = [];
    $scope.uploadImages = function () {
        var fileName = [];      
        if ($scope.files.length > 0) {
            angular.forEach($scope.files, function(value, key){
                fileName.push(value.Name);
            });
        }
        $scope.postData.push(
            {
                Category: $scope.categories,
                Images: fileName
            }
        );
        //Start calling service
        console.log($scope.postData);
    }

    
     
});
app.directive('ngFileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.ngFileModel);
            var isMultiple = attrs.multiple;
            var modelSetter = model.assign;
            element.bind('change', function () {
                var values = [];
                angular.forEach(element[0].files, function (item) {
                    var value = {
                        Name: item.name,
                        Size: item.size,
                        Url: URL.createObjectURL(item),
                        _file: item
                    };
                    values.push(value);
                });
                scope.$apply(function () {
                    if (isMultiple) {
                        modelSetter(scope, values);
                    } else {
                        modelSetter(scope, values[0]);
                    }
                });
            });
        }
    };
}]);