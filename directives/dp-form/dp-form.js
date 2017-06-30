directPortalApp.directive('dpForm', function ($http, serviceWrapper) {

    function link(scope, element, attrs) {

        scope.action = attrs.dpAction;
        scope.entity = attrs.dpEntity;
        scope.entityId = attrs.dpEntityId;
        scope.fields = attrs.dpFields;

        serviceWrapper.get('metadata').get(scope.entity, scope.fields, function (response) {
            var model = {};
            scope.formFields = response.data;
            // generate the model from meta-datas 
            for (key in scope.formFields) {
                if (scope.formFields[key].InputType == 'select') {
                    serviceWrapper.get(scope.formFields[key].Name).getAll('', function (response) {
                        scope.formFields[key].Name = scope.formFields[key].Name + 'ID';
                        scope.formFields[key].values = response.data;
                    });
                } else {
                    model[scope.formFields[key].Name] = '';
                }
            }
            //If it edit form
            if (scope.entityId) {                 
                //Get exist data to display
                serviceWrapper.get(scope.entity).get(scope.entityId,
                    function (response) {
                        var entity = response.data.shift();
                        for (key in entity) {
                            if (key.endsWith('Id')) {
                                scope.selectedId = entity[key];
                            }
                            model[key] = entity[key];
                        }
                    }, function (error) {
                        alert('error getting entity');
                    });
            }
            
            scope.model = model;
           
        });
    }
    
    return {
        link: link,
        transclude: true,
        templateUrl: 'directPortal/directives/dp-form/dp-form.html',
        controller: function ($scope, $rootScope, serviceWrapper, $state, Flash) {

            $rootScope.$watch('entityId', function () {
                serviceWrapper.get('metadata').get($scope.entity, $scope.fields, function (response) {
                    var model = {};
                    $scope.formFields = response.data;
                    // generate the model from meta-datas 
                    for (key in $scope.formFields) {
                        if ($scope.formFields[key].InputType == 'select') {
                            serviceWrapper.get($scope.formFields[key].Name).getAll('', function (response) {
                                $scope.formFields[key].Name = $scope.formFields[key].Name + 'ID';
                                $scope.formFields[key].values = response.data;
                            });
                        } else {
                            model[$scope.formFields[key].Name] = '';
                        }
                    }
                    //If it edit form
                    if ($scope.entityId) {
                        //Get exist data to display
                        serviceWrapper.get($scope.entity).get($scope.entityId,
                            function (response) {
                                var entity = response.data.shift();
                                for (key in entity) {
                                    if (key.endsWith('Id')) {
                                        $scope.selectedId = entity[key];
                                    }
                                    model[key] = entity[key];
                                }
                            }, function (error) {
                                alert('error getting entity');
                            });
                    }

                    $scope.model = model;

                });
            });

            $scope.submit = function () {
                if (!serviceWrapper.get($scope.entity).hasOwnProperty($scope.action)
                    || typeof serviceWrapper.get($scope.entity)[$scope.action] != 'function') {

                    throw new Error($scope.entity + 'Service:unknow method:' + $scope.action);
                }
                serviceWrapper.get($scope.entity)[$scope.action]($scope.model,
                    // success
                    function (response) {
                        //console.log(response);
                        var message = '<strong> Success!</strong> new entity added !';
                        $state.go('app.datamanagement.' + $scope.entity.toLowerCase() + '.list');
                        //var id = Flash.create('success', message, 0, {}, true);
                    }
                    // error
                    , function (errors) {
                        $scope.hasErrors = true;
                        var message = '';
                        errors = errors.data;
                        for (field in errors) {
                            for (key in errors[field])
                                message += errors[field][key];
                        }
                        
                        $scope.errorMessage = message;
                        alert(message);
                       var id = Flash.create('danger', message, 0, {}, true);
                    });
            }

        },
        scope: {
            action: '@dpAction',
            entity: '@dpEntity',
            entityId: '@dpEntityId'

        }
    }
   
});